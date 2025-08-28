const parseRevalidate = (value: string | undefined): number => {
  if (!value) return 3600;
  const parsed = Number(value);
  return isNaN(parsed) ? 3600 : parsed;
};

export const revalidate = parseRevalidate(process.env.DEFAULT_REVALIDATE_TARGET);
