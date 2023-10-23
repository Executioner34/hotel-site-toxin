<script setup lang="ts">
import { Card } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
</script>

<template>
  <div class="form-elements-page">
    <Card class="card">
      <template #header>
        <h2 class="title">Title</h2>
      </template>
      <Input id="input" type="text" placeholder="Имя"></Input>
      <Input id="input" type="text" placeholder="Фамилия"></Input>
    </Card>
  </div>
</template>

<style scoped lang="scss">
.form-elements-page {
  .column {
    display: flex;
    flex-direction: column;
  }

  .card {
    width: 380px;
  }
}
</style>
