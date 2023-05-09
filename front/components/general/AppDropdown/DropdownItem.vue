<template>
  <div class="dropdown-item-component">
    <span class="name">{{ name }}</span>
    <button
      class="button button--decrement"
      :disabled="isDisabledDecrement"
      @click="buttonDecrement"
    >
      -
    </button>
    <span class="value">{{ value }}</span>
    <button
      class="button button--increment"
      :disabled="isDisabledIncrement"
      @click="buttonIncrement"
    >
      +
    </button>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  name: string;
  value: number;
  max?: number;
}

interface IEmits {
  (e: "updateValue", value: IProps): IProps;
}

const props = withDefaults(defineProps<IProps>(), {
  max: 10,
});
const emit = defineEmits<IEmits>();

const value = ref(props.value);
const min = 0;

const isDisabledDecrement = computed(() => {
  return value.value <= min;
});

const isDisabledIncrement = computed(() => {
  return value.value >= props.max;
});

const buttonDecrement = () => (value.value -= 1);
const buttonIncrement = () => (value.value += 1);

watch(value, (newValue) =>
  emit("updateValue", {
    name: props.name,
    value: newValue,
    max: props.max,
  })
);
</script>

<style scoped lang="scss">
.dropdown-item-component {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;

  .name,
  .value {
    @include h3Text;
  }

  .name {
    flex-grow: 3;
  }

  .value {
    width: 13px;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 22px;
    border: 1px solid $primaryColor50;
    color: $primaryColor50;
    background-color: transparent;

    &:disabled {
      border-color: $primaryColor25;
      color: $primaryColor25;
    }
  }
}
</style>
