/**
 * Rounds a value to the nearest step, starting from a minimum value.
 * Useful for sliders and range inputs.
 */
export function roundToStep(value: number, step: number, min: number): number {
  const steps = Math.round((value - min) / step);
  return min + steps * step;
}
