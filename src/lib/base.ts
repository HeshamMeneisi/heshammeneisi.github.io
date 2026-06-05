// Astro injects the configured base path here (e.g. "/" in production, or
// "/pr-preview/pr-12/" for CI preview builds). Prefix local asset URLs with
// this so they resolve correctly under any deploy path.
const base = import.meta.env.BASE_URL;

export function withBase(path: string): string {
  return (base + path.replace(/^\//, "")).replace(/([^:])\/{2,}/g, "$1/");
}
