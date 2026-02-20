export function parsePrice(priceStr: string): number {
  const match = priceStr.replace(/\s/g, "").match(/[\d,.]+/);
  if (!match) return 0;
  return parseFloat(match[0].replace(",", ".")) || 0;
}

export function formatPrice(value: number): string {
  return `€${value.toFixed(2)}`;
}
