<template>
  <div class="ui-kit-layout">
    <header class="header">
      <Icon name="toxin-logo-gray" width="48px" height="48px" />
    </header>
    <main class="main">
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@/shared/ui/icon";
</script>

<style scoped lang="scss">
.ui-kit-layout {
  padding: 0 calc((100vw - 1440px) / 2);

  .header {
    padding: 30px 30px 0;
  }

  .main {
    padding: 67px 140px 140px;
  }
}
</style>
