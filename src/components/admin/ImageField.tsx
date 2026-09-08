import { useRef, useState } from "react";

import { supabase } from "@/integrations/supabase/client";
import { ASSET_OPTIONS, resolveImg } from "@/lib/asset-library";

const inputClass =
  "w-full rounded-xl border border-charcoal/15 bg-white px-4 py-2.5 text-sm text-charcoal focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20";

function safeName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9.]+/g, "-").replace(/^-+|-+$/g, "");
}

export function ImageField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleUpload(file: File) {
    setBusy(true);
    setError(null);
    const path = `${Date.now()}-${safeName(file.name)}`;
    const { error: upErr } = await supabase.storage
      .from("site-images")
      .upload(path, file, { cacheControl: "31536000", upsert: false });
    setBusy(false);
    if (upErr) {
      setError(upErr.message);
      return;
    }
    onChange(`storage:${path}`);
  }

  const preview = resolveImg(value);

  return (
    <div>
      <label className="mb-1 block text-xs font-medium uppercase tracking-widest text-charcoal/50">{label}</label>
      <div className="flex flex-wrap items-start gap-4">
        <div className="h-24 w-36 shrink-0 overflow-hidden rounded-xl bg-charcoal/5">
          {preview ? (
            <img src={preview} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center text-[11px] text-charcoal/40">No photo</div>
          )}
        </div>
        <div className="min-w-[240px] flex-1 space-y-2">
          <select
            aria-label={`${label} — choose an existing photo`}
            className={inputClass}
            value={value.startsWith("asset:") ? value : ""}
            onChange={(e) => e.target.value && onChange(e.target.value)}
          >
            <option value="">Choose an existing site photo…</option>
            {ASSET_OPTIONS.map((o) => (
              <option key={o.key} value={o.key}>
                {o.label}
              </option>
            ))}
          </select>
          <div className="flex flex-wrap items-center gap-3">
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) handleUpload(f);
                e.target.value = "";
              }}
            />
            <button
              type="button"
              disabled={busy}
              onClick={() => fileRef.current?.click()}
              className="rounded-full border border-charcoal/15 px-4 py-2 text-sm text-charcoal/70 hover:border-forest hover:text-forest disabled:opacity-40"
            >
              {busy ? "Uploading…" : "Upload a photo"}
            </button>
            {value && (
              <button
                type="button"
                onClick={() => onChange("")}
                className="text-xs text-charcoal/50 underline hover:text-forest"
              >
                Clear
              </button>
            )}
          </div>
          <input
            aria-label={`${label} value`}
            className={inputClass}
            value={value}
            placeholder="asset:… , storage:… or https://…"
            onChange={(e) => onChange(e.target.value)}
          />
          {error && <p className="text-xs text-red-600">{error}</p>}
        </div>
      </div>
    </div>
  );
}
