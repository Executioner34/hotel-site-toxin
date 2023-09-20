<script setup lang="ts">
interface IProps {
  items: string[];
}

const props = withDefaults(defineProps<IProps>(), {
  items: () => [],
});
</script>

<template>
  <ul v-if="props.items.length" class="bullet-list">
    <template v-for="(item, key) in props.items" :key="`bullet-item-${key}`">
      <li class="bullet-list__item">
        {{ item }}
      </li>
    </template>
  </ul>
</template>

<style scoped lang="scss">
.bullet-list {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  padding-left: 21px;

  &__item {
    position: relative;
    font-size: 14px;
    line-height: 24px;

    &::before {
      content: "";
      position: absolute;
      left: -21px;
      top: 7px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: $primaryColor25;
    }
  }
}
</style>
