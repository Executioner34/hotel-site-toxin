<script lang="ts">
export default {
  name: "AppCheckbox",
};
</script>

<script setup lang="ts">
interface IEmits {
  (e: "update:modelValue", value: string | string[]): string[] | string;
}

const props = defineProps<{
  modelValue: string | string[];
  label: string;
  id: string;
}>();

const emit = defineEmits<IEmits>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: string | string[]) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <label class="check">
    <input
      :id="id"
      v-model="value"
      :value="label"
      class="check__input"
      type="checkbox"
    />
    <span class="check__box"></span>
    {{ label }}
  </label>
</template>

<style lang="scss" scoped>
.check {
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
  padding-left: 30px;
  font-size: 14px;
  line-height: 18px;

  .check__input {
    position: absolute;
    appearance: none;
  }

  .check__box {
    position: absolute;
    width: 20px;
    height: 20px;
    margin-left: -30px;
    border: 1px solid $primaryColor25;
    border-radius: 4px;
  }

  .check__input:checked + .check__box {
    border-color: $purpleColor;
    background-image: url("@/assets/sprite/svg/check.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 14px;
  }
}
</style>
