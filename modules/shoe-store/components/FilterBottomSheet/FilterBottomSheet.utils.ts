export function formatPriceLabel(value: number): string {
  return `€${Math.round(value)}`;
}
