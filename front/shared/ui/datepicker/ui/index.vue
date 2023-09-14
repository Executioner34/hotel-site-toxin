<template>
  <div class="app-datepicker-component">
    <template v-if="double">
      <vue-date-picker
        v-model="firstDate"
        locale="ru"
        class="date-picker"
      ></vue-date-picker>
      <vue-date-picker
        v-model="secondDate"
        locale="ru"
        class="date-picker"
      ></vue-date-picker>
    </template>
    <template v-else>
      <vue-date-picker
        v-model="date"
        :range="true"
        :enable-time-picker="false"
        format="dd.MM.yyyy"
        locale="ru"
        class="date-picker"
      ></vue-date-picker>
    </template>
  </div>
</template>

<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

interface IProps {
  modelValue: Date | Date[];
  double?: boolean;
}

interface IEmits {
  (e: "update:modelValue", date: Date | Date[]): Date | Date[];
}

const props = withDefaults(defineProps<IProps>(), {
  double: false,
});
const emit = defineEmits<IEmits>();

const date = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<style scoped lang="scss">
.app-datepicker-component {
  .date-picker {
    --dp-font-family: Montserrat, sans-serif;
    --dp-cell-border-radius: 50%;
    --dp-border-radius: 4px;
    --dp-cell-size: 40px;
    --dp-input-padding: 12px 15px 8px 15px;
    --dp-menu-min-width: 320px;
    --dp-two-calendars-spacing: 20px;
    --dp-menu-padding: 20px;
  }

  .dp__theme_light {
  }
}
</style>
