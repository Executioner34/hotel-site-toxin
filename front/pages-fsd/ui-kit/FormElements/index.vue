<script setup lang="ts">
import { dropdownExampleData } from "./lib";
import { Dropdown } from "@/features";
</script>

<template>
  <div class="form-elements-page">
    <div class="column">
      <Dropdown
        id="dropdown"
        :data="dropdownExampleData"
        label="dropdown"
      ></Dropdown>
    </div>
  </div>
</template>

<style scoped lang="scss">
.form-elements-page {
  display: flex;

  .column {
    display: flex;
    flex-direction: column;
    width: 320px;
  }

  .elem {
    &:not(:last-child) {
      margin-bottom: 20px;
    }

    &--focus {
      ::v-deep(.input) {
        border-color: $primaryColor50;
      }
    }
  }
}
</style>
