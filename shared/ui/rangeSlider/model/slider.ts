import { defineStore } from "pinia";

type Price = [number, number];

interface IState {
  prices: Price;
  min: number;
  max: number;
  step: number;
}

export const useRangeSlider = defineStore("rangeSlider", {
  state: (): IState => ({
    prices: [0, 0],
    min: 0,
    max: 0,
    step: 0,
  }),
  actions: {
    setState(options: IState) {
      const { prices, min, max, step } = options;
      this.prices = prices;
      this.min = min;
      this.max = max;
      this.step = step;
    },
    updatePrices(values: Price) {
      this.prices = values;
    },
  },
});
