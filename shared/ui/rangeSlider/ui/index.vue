<script setup lang="ts">
import Slider from "@vueform/slider";

import { rangeSliderModel } from "../model/index";

import "@vueform/slider/themes/default.css";

interface IProps {
  label?: string;
  min?: number;
  max?: number;
  step?: number;
}

const props = withDefaults(defineProps<IProps>(), {
  label: "Range Slider",
  min: 0,
  max: 10000,
  step: 100,
});

const store = rangeSliderModel();

const values = ref<[number, number]>([props.min, props.max]);

onMounted(() => {
  store.setState({
    prices: values.value,
    max: props.max,
    min: props.min,
    step: props.step,
  });
});

watch(values, (newValue) => {
  store.updatePrices(newValue);
});

const price = computed(() => `${values.value[0]}₽ - ${values.value[1]}₽`);
</script>

<template>
  <div class="range-slider">
    <div class="range-slider__header">
      <p class="range-slider__label" v-text="props.label"></p>
      <p class="range-slider__price" v-text="price"></p>
    </div>
    <Slider
      v-model="values"
      :min="props.min"
      :max="props.max"
      :step="props.step"
      :tooltips="false"
      :lazy="false"
      class="range-slider__slider"
    ></Slider>
  </div>
</template>

<style scoped lang="scss">
.range-slider {
  max-width: 266px;
  width: 100%;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 23px;
  }

  &__label {
    @include h3Text();
  }

  &__price {
    @include h3Text;
    color: $primaryColor50;
    font-weight: 400;
  }

  &__slider {
    &::v-deep(.slider-base) {
      border: 1px solid $primaryColor25;
    }

    --slider-bg: #fff;
    --slider-connect-bg: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);
    --slider-connect-bg-disabled: #9ca3af;
    --slider-height: 6px;
    --slider-radius: 3px;

    --slider-handle-bg: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);
    --slider-handle-border: 0;
    --slider-handle-width: 12px;
    --slider-handle-height: 12px;
    --slider-handle-radius: 9999px;
    --slider-handle-shadow: none;
    --slider-handle-shadow-active: none;
    --slider-handle-ring-width: 3px;
    --slider-handle-ring-color: #10b98130;
  }
}
</style>
