// Transform store settings to logo string
export function logoTransformer(settings: any): string {
  if (!settings) return '';
  if (settings.logo?.url) return settings.logo.url;
  return '';
}

