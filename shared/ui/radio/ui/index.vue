<script setup lang="ts">
interface IProps {
  modelValue: string;
  id: string;
}

interface IEmits {
  (e: "update:modelValue", value: string): string;
}

const props = defineProps<IProps>();

const emit = defineEmits<IEmits>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div class="radio">
    <input
      :id="id"
      v-model="value"
      :value="id"
      type="radio"
      class="radio__input"
    />
    <label :for="id" class="radio__label">
      <slot></slot>
    </label>
  </div>
</template>

<style scoped lang="scss">
.radio {
  &__input[type="radio"]:checked,
  &__input[type="radio"]:not(:checked) {
    appearance: none;
  }

  &__input[type="radio"]:checked + label,
  &__input[type="radio"]:not(:checked) + label {
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    line-height: 22px;
    display: inline-block;
  }

  &__input[type="radio"]:not(:checked) + label {
    color: $primaryColor50;
  }

  &__input[type="radio"]:checked + label:before,
  &__input[type="radio"]:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid $primaryColor25;
    border-radius: 100%;
    background: $white;
  }

  &__input[type="radio"]:checked + label:before {
    border-color: $purpleColor;
  }

  &__input[type="radio"]:checked + label:after,
  &__input[type="radio"]:not(:checked) + label:after {
    content: "";
    width: 12px;
    height: 12px;
    background: linear-gradient(180deg, $purpleColor 0%, #8ba4f9 100%);
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  &__input[type="radio"]:not(:checked) + label:after {
    opacity: 0;
    transform: scale(0);
  }

  &__input[type="radio"]:checked + label:after {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
