<script setup lang="ts">
import { DatePicker } from "~/shared/ui/datepicker";
import { CommentsList } from "~/shared/ui/commentsList";
import { Dropdown } from "~/shared/ui/dropdown";
import { Slider } from "~/shared/ui/rangeSlider";

const dates = ref("");
</script>

<template>
  <div class="form-elements-page">
    <DatePicker v-model="dates" label="дата рождения"></DatePicker>
    <CommentsList></CommentsList>
    <Dropdown id="dropdown" label="dropdown"></Dropdown>
    <Slider></Slider>
  </div>
</template>

<style scoped lang="scss">
.form-elements-page {
  .column {
    display: flex;
    flex-direction: column;
    width: 320px;
  }
}
</style>
