<script setup lang="ts">
interface IProps {
  modelValue: boolean;
  id: string;
}

interface IEmits {
  (e: "update:modelValue", value: boolean): boolean;
}

const props = defineProps<IProps>();

const emit = defineEmits<IEmits>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: boolean) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div class="toggle">
    <input
      :id="props.id"
      v-model="value"
      class="toggle__input"
      type="checkbox"
    />
    <label :for="props.id" class="toggle__label">
      <slot></slot>
    </label>
  </div>
</template>

<style scoped lang="scss">
.toggle {
  display: flex;
  align-items: center;

  &__input {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    margin: 0;
    vertical-align: top;
    background: #ffffff;
    border: 1px solid $primaryColor25;
    border-radius: 30px;
    outline: none;
    cursor: pointer;
    appearance: none;
    transition: transform 0.3s ease-in-out;

    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      left: 4px;
      top: 3px;
      width: 12px;
      height: 12px;
      background: $primaryColor25;
      border-radius: 50%;
      transform: translateX(0);
      transition: transform 0.3s ease-in-out;
    }

    &:checked::after {
      transform: translateX(calc(100% + 6px));
      background: linear-gradient(180deg, $purpleColor 0%, #8ba4f9 100%);
    }

    &:checked {
      border-color: $purpleColor;
    }
  }

  &__label {
    margin-left: 10px;
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;
    user-select: none;
  }
}
</style>
