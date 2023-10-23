<script setup lang="ts">
import { IComment } from "../types";
import { Like } from "@/shared/ui/like";

const props = defineProps<IComment>();

const likeValue = computed({
  get: () => {
    return props.likeValue;
  },
  set: (value) => {
    return value;
  },
});
</script>

<template>
  <div class="comment-item">
    <div class="comment-item__header">
      <div class="comment-item__avatar"></div>
      <div class="comment-item__text-content">
        <p class="comment-item__author-name" v-text="props.authorName"></p>
        <p class="comment-item__date-create" v-text="props.dateCreate"></p>
      </div>
    </div>
    <div class="comment-item__body">
      <div class="comment-item__like">
        <Like v-model="likeValue" :active="props.isLiked"></Like>
      </div>
      <p class="comment-item__comment-text" v-text="props.commentText"></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.comment-item {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;

  &__header {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }

  &__avatar {
    width: 48px;
    height: 48px;
    border: 2px solid $white;
    border-radius: 50%;
    background-color: $primaryColor10;
    box-shadow: 0 10px 20px 0 rgba(31, 32, 65, 0.1);
  }

  &__text-content {
    display: flex;
    flex-direction: column;
  }

  &__author-name {
    font-weight: 700;
  }

  &__body {
    display: flex;
    align-items: baseline;
    column-gap: 10px;
  }

  &__like {
    display: flex;
    justify-content: center;
    min-width: 48px;
    width: 48px;
  }
}
</style>
