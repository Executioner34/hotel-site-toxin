<script setup lang="ts">
import { commentsModel } from "../model";
import CommentItem from "./CommentItem.vue";

const store = commentsModel();

const { data: comments } = await useAsyncData("comments", async () => {
  await store.getComments();
  return store.commentsList;
});
</script>

<template>
  <div class="comments-list">
    <template v-for="(comment, ind) in comments" :key="`comment-item-${ind}`">
      <CommentItem v-bind="comment" class="comments-list__item" />
    </template>
  </div>
</template>

<style scoped lang="scss">
.comments-list {
  max-width: 710px;

  &__item {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}
</style>
