import { defineStore } from "pinia";

export const useCheckboxList = defineStore("checkboxList", {
  state: () => ({
    list: [] as string[],
  }),
  actions: {
    updateList(list: string[]) {
      this.list = list;
    },
  },
});
