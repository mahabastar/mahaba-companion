/**
 * Resolves image references stored in the database.
 *
 * Stored values are either:
 *  - "asset:folder/name.jpg"  → a photo that ships with the site (src/assets)
 *  - "https://..." or "/..."  → an uploaded or external image URL
 */
const modules = import.meta.glob("/src/assets/**/*.{jpg,jpeg,png,webp,avif,svg}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export type AssetOption = { key: string; url: string; label: string };

export const ASSET_OPTIONS: AssetOption[] = Object.entries(modules)
  .map(([path, url]) => {
    const rel = path.replace("/src/assets/", "");
    return { key: `asset:${rel}`, url, label: rel };
  })
  .sort((a, b) => a.label.localeCompare(b.label));

export function resolveImg(value?: string | null): string {
  if (!value) return "";
  if (value.startsWith("asset:")) {
    return modules[`/src/assets/${value.slice("asset:".length)}`] ?? "";
  }
  return value;
}
