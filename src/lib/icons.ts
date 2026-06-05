import * as simpleIcons from "simple-icons";

interface SimpleIcon {
  title: string;
  slug: string;
  path: string;
  hex: string;
}

const bySlug = new Map<string, SimpleIcon>(
  (Object.values(simpleIcons) as SimpleIcon[])
    .filter((icon) => icon && icon.slug)
    .map((icon) => [icon.slug, icon]),
);

/** Resolve a brand icon by its simple-icons slug, or null if it isn't bundled. */
export function getIcon(slug?: string): SimpleIcon | null {
  if (!slug) return null;
  return bySlug.get(slug) ?? null;
}
