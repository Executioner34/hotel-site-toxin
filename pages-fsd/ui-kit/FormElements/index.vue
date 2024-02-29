<script setup lang="ts">
import { Auth } from "@/features/Auth";
</script>

<template>
  <div class="form-elements-page">
    <Auth view="signup"></Auth>
    <Auth view="login"></Auth>
  </div>
</template>

<style scoped lang="scss">
.form-elements-page {
  display: flex;
  column-gap: 60px;
}
</style>
