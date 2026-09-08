import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useServerFn } from "@tanstack/react-start";

import { AdminGate } from "@/components/admin/AdminGate";
import { ImageField } from "@/components/admin/ImageField";
import {
  adminDeleteContent,
  adminListContent,
  adminSaveContent,
  type ContentTable,
} from "@/lib/content.functions";

export const Route = createFileRoute("/admin/content")({
  head: () => ({
    meta: [
      { title: "Content Manager — Biikuya Trails Uganda" },
      { name: "description", content: "Internal console to edit trips, experiences and journal stories." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ContentAdmin,
});

/* --------------------------------- schema --------------------------------- */

type FieldType = "text" | "textarea" | "image" | "number" | "bool" | "select" | "lines" | "json";

type Field = {
  key: string;
  label: string;
  type: FieldType;
  options?: string[];
  help?: string;
};

const COMMON_TAIL: Field[] = [
  { key: "sort_order", label: "Order on the site", type: "number" },
  { key: "published", label: "Visible on the website", type: "bool" },
];

const SCHEMAS: Record<ContentTable, { label: string; title: string; fields: Field[] }> = {
  journeys: {
    label: "Trips",
    title: "Trips & journeys",
    fields: [
      { key: "title", label: "Title", type: "text" },
      { key: "slug", label: "Web address (slug)", type: "text", help: "e.g. gorilla-escape" },
      { key: "days", label: "Number of days", type: "text" },
      { key: "tagline", label: "Tagline", type: "text" },
      { key: "copy_text", label: "Short card text", type: "textarea" },
      { key: "img", label: "Main photo", type: "image" },
      { key: "overview", label: "Overview", type: "textarea" },
      { key: "highlights", label: "Highlights (one per line)", type: "lines" },
      { key: "itinerary", label: "Day-by-day plan", type: "json", help: '[{"day":1,"title":"…","copy":"…"}]' },
      { key: "destinations", label: "Linked places", type: "json", help: '[{"name":"Bwindi","to":"/destinations/gorilla-trekking"}]' },
      ...COMMON_TAIL,
    ],
  },
  experiences: {
    label: "Experiences",
    title: "Experiences",
    fields: [
      { key: "title", label: "Title", type: "text" },
      { key: "slug", label: "Web address (slug)", type: "text" },
      { key: "tagline", label: "Tagline", type: "text" },
      { key: "excerpt", label: "Short card text", type: "textarea" },
      { key: "hero_img", label: "Main photo", type: "image" },
      { key: "intro", label: "Introduction", type: "textarea" },
      { key: "sections", label: "Page sections", type: "json", help: '[{"heading":"…","copy":"…"}]' },
      { key: "highlights", label: "Highlights", type: "json" },
      { key: "comparison", label: "Comparison table (optional)", type: "json" },
      { key: "destinations", label: "Linked places", type: "json" },
      { key: "journey", label: "Suggested journey (optional)", type: "json" },
      { key: "faqs", label: "FAQs", type: "json", help: '[{"q":"…","a":"…"}]' },
      ...COMMON_TAIL,
    ],
  },
  journal_posts: {
    label: "Journal",
    title: "Journal stories",
    fields: [
      { key: "title", label: "Title", type: "text" },
      { key: "slug", label: "Web address (slug)", type: "text" },
      {
        key: "category",
        label: "Category",
        type: "select",
        options: ["Destinations", "Culture", "Conservation", "Travel Advice"],
      },
      { key: "excerpt", label: "Short card text", type: "textarea" },
      { key: "img", label: "Main photo", type: "image" },
      { key: "read_mins", label: "Reading time (minutes)", type: "number" },
      { key: "body", label: "Article text (one paragraph per line)", type: "lines" },
      { key: "pull_quote", label: "Pull quote (optional)", type: "text" },
      { key: "destination", label: "Linked place (optional)", type: "json", help: '{"name":"Bwindi","to":"/destinations/gorilla-trekking"}' },
      ...COMMON_TAIL,
    ],
  },
};

const TABLES = Object.keys(SCHEMAS) as ContentTable[];

type Row = Record<string, unknown>;

const inputClass =
  "w-full rounded-xl border border-charcoal/15 bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/30 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20";

function emptyRow(table: ContentTable): Row {
  const row: Row = { published: true, sort_order: 0 };
  for (const f of SCHEMAS[table].fields) {
    if (f.key in row) continue;
    row[f.key] = f.type === "number" ? 0 : f.type === "json" || f.type === "lines" ? [] : "";
  }
  return row;
}

/* --------------------------------- editor --------------------------------- */

function FieldInput({ field, value, onChange }: { field: Field; value: unknown; onChange: (v: unknown) => void }) {
  const label = (
    <label className="mb-1 block text-xs font-medium uppercase tracking-widest text-charcoal/50">{field.label}</label>
  );

  if (field.type === "image") {
    return <ImageField label={field.label} value={String(value ?? "")} onChange={(v) => onChange(v)} />;
  }

  if (field.type === "bool") {
    return (
      <label className="flex items-center gap-3 text-sm text-charcoal/70">
        <input type="checkbox" checked={Boolean(value)} onChange={(e) => onChange(e.target.checked)} />
        {field.label}
      </label>
    );
  }

  if (field.type === "select") {
    return (
      <div>
        {label}
        <select className={inputClass} value={String(value ?? "")} onChange={(e) => onChange(e.target.value)}>
          {(field.options ?? []).map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (field.type === "number") {
    return (
      <div>
        {label}
        <input
          type="number"
          className={inputClass}
          value={Number(value ?? 0)}
          onChange={(e) => onChange(Number(e.target.value))}
        />
      </div>
    );
  }

  if (field.type === "lines") {
    const text = Array.isArray(value) ? (value as string[]).join("\n") : String(value ?? "");
    return (
      <div>
        {label}
        <textarea
          rows={6}
          className={inputClass}
          value={text}
          onChange={(e) => onChange(e.target.value.split("\n").filter((l) => l.trim() !== ""))}
        />
        {field.help && <p className="mt-1 text-xs text-charcoal/40">{field.help}</p>}
      </div>
    );
  }

  if (field.type === "json") {
    return <JsonInput field={field} value={value} onChange={onChange} />;
  }

  if (field.type === "textarea") {
    return (
      <div>
        {label}
        <textarea rows={4} className={inputClass} value={String(value ?? "")} onChange={(e) => onChange(e.target.value)} />
      </div>
    );
  }

  return (
    <div>
      {label}
      <input className={inputClass} value={String(value ?? "")} onChange={(e) => onChange(e.target.value)} />
      {field.help && <p className="mt-1 text-xs text-charcoal/40">{field.help}</p>}
    </div>
  );
}

function JsonInput({ field, value, onChange }: { field: Field; value: unknown; onChange: (v: unknown) => void }) {
  const [text, setText] = useState(() => (value == null ? "" : JSON.stringify(value, null, 2)));
  const [error, setError] = useState<string | null>(null);

  return (
    <div>
      <label className="mb-1 block text-xs font-medium uppercase tracking-widest text-charcoal/50">{field.label}</label>
      <textarea
        rows={8}
        spellCheck={false}
        className={`${inputClass} font-mono text-xs`}
        value={text}
        onChange={(e) => {
          const next = e.target.value;
          setText(next);
          if (next.trim() === "") {
            setError(null);
            onChange(null);
            return;
          }
          try {
            onChange(JSON.parse(next));
            setError(null);
          } catch {
            setError("Not valid yet — keep typing.");
          }
        }}
      />
      {field.help && <p className="mt-1 text-xs text-charcoal/40">Example: {field.help}</p>}
      {error && <p className="mt-1 text-xs text-amber-600">{error}</p>}
    </div>
  );
}

function Editor({
  table,
  row,
  onSaved,
  onCancel,
  onDeleted,
}: {
  table: ContentTable;
  row: Row;
  onSaved: (r: Row) => void;
  onCancel: () => void;
  onDeleted: (id: string) => void;
}) {
  const save = useServerFn(adminSaveContent);
  const remove = useServerFn(adminDeleteContent);
  const [draft, setDraft] = useState<Row>(row);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSave() {
    setBusy(true);
    setError(null);
    try {
      const saved = await save({ data: { table, row: draft } });
      onSaved(saved as Row);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not save.");
    } finally {
      setBusy(false);
    }
  }

  async function handleDelete() {
    const id = draft["id"] as string | undefined;
    if (!id) return onCancel();
    if (!window.confirm("Delete this permanently?")) return;
    setBusy(true);
    try {
      await remove({ data: { table, id } });
      onDeleted(id);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not delete.");
      setBusy(false);
    }
  }

  return (
    <div className="rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm">
      <div className="grid gap-5">
        {SCHEMAS[table].fields.map((f) => (
          <FieldInput
            key={f.key}
            field={f}
            value={draft[f.key]}
            onChange={(v) => setDraft((d) => ({ ...d, [f.key]: v }))}
          />
        ))}
      </div>
      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          disabled={busy}
          onClick={handleSave}
          className="rounded-full bg-forest px-6 py-2.5 text-sm font-medium text-ivory hover:bg-forest-deep disabled:opacity-40"
        >
          {busy ? "Saving…" : "Save & publish"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-full border border-charcoal/15 px-6 py-2.5 text-sm text-charcoal/70 hover:border-forest hover:text-forest"
        >
          Close
        </button>
        {draft["id"] ? (
          <button
            type="button"
            disabled={busy}
            onClick={handleDelete}
            className="rounded-full border border-red-200 px-6 py-2.5 text-sm text-red-600 hover:bg-red-50 disabled:opacity-40"
          >
            Delete
          </button>
        ) : null}
      </div>
    </div>
  );
}

/* ---------------------------------- page ---------------------------------- */

function Manage({ email, onSignOut }: { email: string; onSignOut: () => void }) {
  const list = useServerFn(adminListContent);
  const [table, setTable] = useState<ContentTable>("journeys");
  const [rows, setRows] = useState<Row[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | "new" | null>(null);
  const [query, setQuery] = useState("");

  const load = useCallback(
    async (t: ContentTable) => {
      setRows(null);
      setError(null);
      try {
        const data = await list({ data: { table: t } });
        setRows(data as Row[]);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Could not load content.");
      }
    },
    [list],
  );

  useEffect(() => {
    load(table);
    setEditingId(null);
  }, [table, load]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return (rows ?? []).filter((r) => !q || String(r["title"] ?? "").toLowerCase().includes(q));
  }, [rows, query]);

  const editingRow =
    editingId === "new" ? emptyRow(table) : (rows ?? []).find((r) => r["id"] === editingId) ?? null;

  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-[1100px] px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="eyebrow">Content</div>
            <h1 className="mt-2 font-display text-3xl text-charcoal">Website content manager</h1>
            <p className="mt-2 text-sm text-charcoal/60">Signed in as {email}</p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/admin/bookings"
              className="rounded-full border border-charcoal/15 px-5 py-2 text-sm text-charcoal/70 hover:border-forest hover:text-forest"
            >
              Bookings
            </Link>
            <button
              type="button"
              onClick={onSignOut}
              className="rounded-full border border-charcoal/15 px-5 py-2 text-sm text-charcoal/70 hover:border-forest hover:text-forest"
            >
              Sign out
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {TABLES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTable(t)}
              className={`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-widest transition-colors ${
                table === t ? "bg-forest text-ivory" : "border border-charcoal/15 text-charcoal/60 hover:border-forest hover:text-forest"
              }`}
            >
              {SCHEMAS[t].label}
            </button>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <input
            aria-label="Search"
            placeholder={`Search ${SCHEMAS[table].title.toLowerCase()}…`}
            className={`${inputClass} max-w-[280px]`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setEditingId("new")}
            className="rounded-full bg-forest px-6 py-2.5 text-sm font-medium text-ivory hover:bg-forest-deep"
          >
            + New {SCHEMAS[table].label.replace(/s$/, "").toLowerCase()}
          </button>
        </div>

        {editingRow && (
          <div className="mt-8">
            <Editor
              key={String(editingRow["id"] ?? "new")}
              table={table}
              row={editingRow}
              onCancel={() => setEditingId(null)}
              onSaved={(saved) => {
                setRows((prev) => {
                  const others = (prev ?? []).filter((r) => r["id"] !== saved["id"]);
                  return [...others, saved].sort(
                    (a, b) => Number(a["sort_order"] ?? 0) - Number(b["sort_order"] ?? 0),
                  );
                });
                setEditingId(null);
              }}
              onDeleted={(id) => {
                setRows((prev) => (prev ?? []).filter((r) => r["id"] !== id));
                setEditingId(null);
              }}
            />
          </div>
        )}

        <div className="mt-8 space-y-3">
          {error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">{error}</div>
          )}
          {!error && rows === null && (
            <div className="rounded-2xl border border-charcoal/10 bg-white p-10 text-center text-sm text-charcoal/50">
              Loading…
            </div>
          )}
          {visible.map((r) => (
            <div
              key={String(r["id"])}
              className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-charcoal/10 bg-white p-5"
            >
              <div className="min-w-0">
                <div className="font-display text-lg text-charcoal">{String(r["title"] ?? "Untitled")}</div>
                <div className="mt-1 text-xs text-charcoal/50">
                  /{String(r["slug"] ?? "")} · {r["published"] ? "Live" : "Hidden"} · order {String(r["sort_order"] ?? 0)}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setEditingId(String(r["id"]))}
                className="rounded-full border border-charcoal/15 px-5 py-2 text-sm text-charcoal/70 hover:border-forest hover:text-forest"
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContentAdmin() {
  return <AdminGate>{({ email, signOut }) => <Manage email={email} onSignOut={signOut} />}</AdminGate>;
}
