<script setup lang="ts">
interface IProps {
  stars?: number;
}

const props = withDefaults(defineProps<IProps>(), {
  stars: 0,
});

const classIcon = (value: number) => {
  return value <= props.stars ? "_star" : "_star-border";
};
</script>

<template>
  <div class="rating">
    <div
      v-for="(star, ind) in 5"
      :key="`star-${ind}`"
      :class="['rating__star', classIcon(ind + 1)]"
    ></div>
  </div>
</template>

<style scoped lang="scss">
.rating {
  display: flex;

  &__star {
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-position: center center;

    &._star {
      background-image: url("~/app/ico/star.svg");
    }

    &._star-border {
      background-image: url("~/app/ico/star-border.svg");
    }
  }
}
</style>
