<template>
  <div class="card">
    <slot name="header"></slot>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  min-width: 320px;
  width: 100%;
  padding: 40px 30px 30px;
  border: 1px solid #0000001f;
  border-radius: 4px;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.2);
}
</style>
