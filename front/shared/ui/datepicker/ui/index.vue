<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import { SvgIcon } from "@/shared/ui/icon";
import { Button } from "@/shared/ui/button";

import "@vuepic/vue-datepicker/dist/main.css";

interface IProps {
  modelValue: Date[] | string[] | Date | string;
  label?: string;
  isRange?: boolean;
}

interface IEmits {
  (e: "update:modelValue", date: string[] | Date[] | Date | string):
    | string[]
    | Date[]
    | undefined[]
    | Date
    | string;
}

const props = withDefaults(defineProps<IProps>(), {
  isRange: false,
  label: "",
});

const emit = defineEmits<IEmits>();

const date = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    if (value) {
      emit("update:modelValue", value);
    }
  },
});

const datepicker = ref();

const onSelectDate = () => {
  datepicker.value.selectDate();
};

const onClearDate = () => {
  datepicker.value.clearValue();
};
</script>

<template>
  <div class="datepicker">
    <p v-if="props.label" class="datepicker__label" v-text="props.label"></p>
    <vue-date-picker
      ref="datepicker"
      v-model="date"
      :enable-time-picker="false"
      format="dd.MM.yyyy"
      locale="RU"
      placeholder="ДД.ММ.ГГГГ"
      auto-apply
      month-name-format="long"
      :range="props.isRange"
      keep-action-row
      :close-on-auto-apply="false"
      :action-row="{ showPreview: false }"
      class="date-picker"
    >
      <template #input-icon>
        <div></div>
      </template>
      <template #clear-icon>
        <div></div>
      </template>
      <template #arrow-left>
        <Suspense>
          <SvgIcon name="arrow-left" class="datepicker__icon"></SvgIcon>
        </Suspense>
      </template>
      <template #arrow-right>
        <Suspense>
          <SvgIcon name="arrow-right" class="datepicker__icon"></SvgIcon>
        </Suspense>
      </template>
      <template #action-buttons>
        <Button @click="onClearDate">Очистить</Button>
        <Button @click="onSelectDate">Применить</Button>
      </template>
    </vue-date-picker>
  </div>
</template>

<style scoped lang="scss">
.datepicker {
  max-width: 320px;
  min-width: 150px;

  &__label {
    @include h3Text;
    margin-bottom: 5px;
  }

  .date-picker {
    --dp-font-family: Montserrat, sans-serif;
    --dp-cell-border-radius: 50%;
    --dp-border-radius: 2px;
    --dp-cell-size: 40px;
    --dp-input-padding: 12px 15px 8px 15px;
    --dp-menu-min-width: 150px;
    --dp-two-calendars-spacing: 20px;
    --dp-menu-padding: 20px 20px 0 20px;
    --dp-input-icon-padding: 15px;
    --dp-row-maring: 0;
    --dp-month-year-row-height: 24px;
    --dp-text-color: $primaryColor50;
    --dp-primary-text-color: $white;
    --dp-action-row-padding: 0 12px;

    &::v-deep(.dp__theme_light) {
      --dp-hover-color: rgba(188, 156, 255, 0.5);
    }

    &::v-deep(.dp__calendar_header_item) {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 700;
      color: $purpleColor;
    }

    &::v-deep(.dp__calendar_header_separator) {
      display: none;
    }

    &::v-deep(.dp__month_year_row) {
      margin-bottom: 30px;
    }

    &::v-deep(.dp__month_year_select) {
      font-weight: 700;
      color: $primaryColor100;
    }

    &::v-deep(.dp__today) {
      border: none;
      background: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);
      color: $white;
      font-weight: 700;
    }

    &::v-deep(.dp__active_date),
    &::v-deep(.dp__range_start),
    &::v-deep(.dp__range_end) {
      background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
      font-weight: 700;
    }

    &::v-deep(.dp__range_between) {
      border: none;
      background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
      opacity: 0.25;
    }

    &::v-deep(.dp__action_buttons) {
      width: 100%;
      flex: auto;
      justify-content: space-between;
    }
  }
}
</style>
