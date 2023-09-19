<script setup lang="ts">
interface IProps {
  modelValue: number;
  active?: boolean;
}

interface IEmits {
  (e: "update:modelValue", value: number): number;
}

const props = withDefaults(defineProps<IProps>(), {
  active: false,
});

const emit = defineEmits<IEmits>();

const isActive = ref(props.active);

const count = ref(props.modelValue);

const iconName = computed(() =>
  isActive.value ? "ic:baseline-favorite" : "ic:baseline-favorite-border"
);

const likeClass = computed(() => (isActive.value ? "like _active" : "like"));

const likeToggle = () => {
  isActive.value = !isActive.value;
  count.value = isActive.value ? count.value + 1 : count.value - 1;
  emit("update:modelValue", count.value);
};
</script>

<template>
  <button :class="likeClass" @click="likeToggle">
    <Icon :name="iconName" class="like__icon"></Icon>
    {{ count }}
  </button>
</template>

<style scoped lang="scss">
.like {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40px;
  height: 20px;
  padding: 3px 7px 4px;
  background-color: $white;
  border: 1px solid $primaryColor25;
  border-radius: 10px;
  font-size: 10px;
  line-height: 100%;
  color: $primaryColor25;

  &._active {
    border-color: $purpleColor;
    color: $purpleColor;

    .like__icon {
      background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: currentColor;
    }
  }

  &__icon {
    color: $primaryColor25;
  }
}
</style>
