<script setup lang="ts">
interface IProps {
  color?: "secondary" | "primary";
  size?: "small" | "medium" | "large";
}

const props = withDefaults(defineProps<IProps>(), {
  color: "secondary",
  size: "medium",
});

const classList = computed(() => {
  const list = ["button"];
  if (props.color === "primary" || props.size === "large") list.push("_fill");
  if (props.size === "small") list.push("_small");
  if (props.size === "large") list.push("_large");
  return list;
});

const isLarge = computed(() => props.size === "large");
</script>

<template>
  <button :class="classList">
    <span class="button__text">
      <slot></slot>
      <Icon
        v-if="isLarge"
        name="ic:baseline-arrow-forward"
        size="24px"
        class="button__icon"
      ></Icon>
    </span>
  </button>
</template>

<style scoped lang="scss">
.button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 99px;
  width: 100%;
  height: 44px;
  padding: 14px 20px 15px;
  background-clip: padding-box;
  background-color: $white;
  border: 2px solid transparent;
  border-radius: 44px;
  user-select: text;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -2px;
    border-radius: inherit;
    background: linear-gradient(to bottom, $purpleColor, #8ba4f9);
  }

  &:active::before,
  &:target::before,
  &:hover::before {
    opacity: 0.5;
  }

  &:disabled {
    opacity: 0.5;
  }

  &__text {
    @include h3Text;
    white-space: nowrap;
    color: $purpleColor;
  }

  &._fill {
    background: linear-gradient(to bottom, $purpleColor, #8ba4f9);
    border: none;

    &::before {
      display: none;
    }

    &:target,
    &:active,
    &:hover {
      opacity: 0.5;
    }

    .button__text {
      color: $white;
    }
  }

  &._fill:disabled {
    opacity: 0.1;
  }

  &._small {
    width: auto;
    height: auto;
    padding: 0;
    border: none;
    color: $purpleColor;

    &::before {
      display: none;
    }

    &:target,
    &:active,
    &:hover {
      color: $primaryColor50;
    }

    .button__text {
      color: inherit;
    }
  }

  &._large {
    max-width: 320px;
  }

  &__icon {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
