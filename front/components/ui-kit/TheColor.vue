<template>
  <li class="the-color-component">
    <div class="pallet"></div>
    <div class="description">
      <h2 class="title">{{ props.name }}</h2>
      <p class="text">{{ props.colorName }}</p>
    </div>
  </li>
</template>

<script setup lang="ts">
interface IProps {
  color?: string;
  name?: string;
  colorName?: string;
}

const props = defineProps<IProps>();
</script>

<style scoped lang="scss">
.the-color-component {
  display: flex;
  align-items: center;

  .pallet {
    width: 70px;
    height: 70px;
    margin-right: 40px;
    background-color: v-bind(color);
    border-radius: 6px;
  }

  .description {
    display: flex;
    flex-direction: column;
  }

  .text {
    margin: 0;
  }
}
</style>
