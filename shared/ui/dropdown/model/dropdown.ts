import { defineStore } from "pinia";

import guestsList from "./guestsList.json";
import roomsList from "./roomsList.json";
import { IItem } from "~/features/Dropdown/types";

export const useDropdown = defineStore("dropdownStore", {
  state: () => ({
    list: [] as Array<IItem>,
  }),
  actions: {
    async fetchGuestsMock(): Promise<IItem[]> {
      return await new Promise((resolve) => {
        setTimeout(() => resolve(guestsList as Array<IItem>), 2000);
      });
    },
    async fetchRoomsMock(): Promise<IItem[]> {
      return await new Promise((resolve) => {
        setTimeout(() => resolve(roomsList as Array<IItem>), 2000);
      });
    },
    async getGuestsData() {
      try {
        const result = await this.fetchGuestsMock();
        this.list = result as Array<IItem>;
      } catch (e) {
        console.error(e);
      }
    },
    async getRoomsData() {
      try {
        const result = await this.fetchRoomsMock();
        this.list = result as Array<IItem>;
      } catch (e) {
        console.error(e);
      }
    },
  },
});
