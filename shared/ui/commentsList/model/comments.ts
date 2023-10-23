import { defineStore } from "pinia";
import { IComment } from "../types";
import commentsList from "./commentsList.json";

export const useCommentsStore = defineStore("comments", {
  state: () => ({
    commentsList: [] as Array<IComment>,
  }),
  actions: {
    async fetchCommentsList() {
      return await new Promise((resolve) => {
        setTimeout(() => resolve(commentsList as Array<IComment>), 2000);
      });
    },
    async getComments() {
      try {
        const list = await this.fetchCommentsList();
        this.commentsList = list as Array<IComment>;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
