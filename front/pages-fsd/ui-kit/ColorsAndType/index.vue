<script setup lang="ts">
import { colorsList, fontsList } from "./lib";
import { TheColor, FontType } from "~/shared/ui-kit";
</script>

<template>
  <div class="colors-and-type-page">
    <ul class="colors-list">
      <template v-for="(item, key) in colorsList" :key="`color-item-${key}`">
        <TheColor
          :name="item.name"
          :color="item.color"
          :color-name="item.colorName"
          class="color-item"
        />
      </template>
    </ul>
    <ul class="fonts-list">
      <template v-for="(item, key) in fontsList" :key="`font-item-${key}`">
        <FontType
          :name="item.name"
          :example="item.example"
          :style-name-obj="item.nameStyle"
          class="font-item"
        />
      </template>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.colors-and-type-page {
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;

  .colors-list {
    margin-right: 50px;
  }

  .color-item:not(:last-child) {
    margin-bottom: 20px;
  }

  .fonts-list {
    max-width: 436px;
  }

  .font-item:not(:last-child) {
    margin-bottom: 51px;
  }
}
</style>
