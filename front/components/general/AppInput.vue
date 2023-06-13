<template>
  <div class="app-input-component">
    <label v-if="!props.uiState" :for="props.id" class="label">
      {{ label }}
    </label>
    <div v-else class="input-title">
      <label :for="props.id" class="label">{{ label }}</label>
      <span class="ui-text">{{ uiState }}</span>
    </div>
    <input
      :id="props.id"
      v-model="value"
      :type="props.type"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      class="input"
      @blur="inputHandler"
    />
  </div>
</template>

<script setup lang="ts">
interface IProps {
  modelValue?: string | number;
  type: "text" | "number";
  id: string;
  label?: string;
  placeholder: string;
  disabled?: boolean;
  uiState?: "Default" | "Hover / Focus";
}

const props = defineProps<IProps>();

interface IEmits {
  (e: "update:modelValue", value: string | number): string | number;
  (e: "input"): void;
}

const emit = defineEmits<IEmits>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    if (value === undefined) return;
    emit("update:modelValue", value);
  },
});

const inputHandler = () => {
  emit("input");
};
</script>

<style scoped lang="scss">
.app-input-component {
  width: 100%;

  .input-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;

    & > .label {
      margin-bottom: 0;
    }
  }

  .label {
    @include h3Text;
    display: inline-block;
    margin-bottom: 5px;
  }

  .input {
    @include bodyText;
    width: 100%;
    max-width: 320px;
    height: 44px;
    padding: 13px 15px;
    outline: none;
    border: 1px solid $primaryColor25;
    border-radius: 4px;
    color: $primaryColor75;

    &::placeholder {
      color: $primaryColor25;
    }

    &:focus-visible,
    &:hover {
      border-color: $primaryColor50;
    }

    &[disabled] {
      background-color: $white;

      &:focus-visible,
      &:hover {
        border-color: $primaryColor25;
      }
    }
  }

  .ui-text {
    @include h3Text;
    font-weight: 400;
    color: $primaryColor50;
  }
}
</style>
