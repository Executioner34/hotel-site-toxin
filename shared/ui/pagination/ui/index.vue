<script setup lang="ts">
interface IProps {
  modelValue: number;
  total: number;
}

interface IEmits {
  (e: "update:modelValue", value: number): number;
}

const props = defineProps<IProps>();

const emit = defineEmits<IEmits>();

const isFirstPage = computed(() => props.modelValue === 1);
const isLastPage = computed(() => props.modelValue === props.total);
const currentPageValue = computed(() => props.modelValue);
const prevPageValue = computed(() => currentPageValue.value - 1);
const nextPageValue = computed(() => currentPageValue.value + 1);
const isViewNextPage = computed(() => nextPageValue.value - props.total <= 0);
const isViewFirstDots = computed(() => currentPageValue.value - 1 > 2);
const isViewTotalPages = computed(
  () => props.total - currentPageValue.value > 1
);
const isViewPrevPage = computed(() => currentPageValue.value - 1 > 1);

const updateModelValue = (value: number) => emit("update:modelValue", value);
</script>

<template>
  <div class="pagination">
    <template v-if="!isFirstPage">
      <button
        class="pagination__btn pagination__btn--next"
        @click="updateModelValue(currentPageValue - 1)"
      >
        <IconCSS name="i-ic-baseline-arrow-back" size="24"></IconCSS>
      </button>
      <button
        class="pagination__btn"
        @click="updateModelValue(1)"
        v-text="1"
      ></button>
      <span v-if="isViewFirstDots" class="pagination__dots">...</span>
      <button
        v-if="isViewPrevPage"
        class="pagination__btn"
        @click="updateModelValue(prevPageValue)"
        v-text="prevPageValue"
      ></button>
    </template>

    <button
      class="pagination__btn pagination__btn--active"
      v-text="currentPageValue"
    ></button>
    <button
      v-if="isViewNextPage"
      class="pagination__btn"
      @click="updateModelValue(nextPageValue)"
      v-text="nextPageValue"
    ></button>
    <button
      v-if="isFirstPage"
      class="pagination__btn"
      @click="updateModelValue(currentPageValue + 2)"
      v-text="currentPageValue + 2"
    ></button>

    <template v-if="!isLastPage">
      <template v-if="isViewTotalPages">
        <span class="pagination__dots">...</span>
        <button
          class="pagination__btn"
          @click="updateModelValue(total)"
          v-text="total"
        ></button>
      </template>

      <button
        class="pagination__btn pagination__btn--next"
        @click="updateModelValue(currentPageValue + 1)"
      >
        <IconCSS name="i-ic-baseline-arrow-forward" size="24"></IconCSS>
      </button>
    </template>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    background-color: $white;
    border: none;
    font-size: 12px;
    color: $primaryColor50;

    &:hover {
      background-color: $purpleColor;
      border-radius: 50%;
      opacity: 0.5;
      color: $white;
    }

    &--active,
    &--prev,
    &--next {
      border-radius: 50%;
      color: $white;
      font-weight: 700;
      &:hover {
        opacity: 0.5;
      }
    }
    &--active {
      background: linear-gradient(180deg, $purpleColor 0%, #8ba4f9 100%);
    }
    &--prev,
    &--next {
      background: linear-gradient(180deg, $greenColor 0%, #66d2ea 100%);
    }
  }

  &__dots {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    font-size: 12px;
  }
}
</style>
