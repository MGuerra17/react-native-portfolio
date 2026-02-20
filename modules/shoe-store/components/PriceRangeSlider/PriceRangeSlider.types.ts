export type PriceRangeSliderProps = {
  minValue: number;
  maxValue: number;
  lowValue: number;
  highValue: number;
  step?: number;
  onValueChange: (low: number, high: number) => void;
};
