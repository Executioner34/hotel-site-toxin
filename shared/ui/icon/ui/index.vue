<script lang="ts">
export default {
  name: "AppIcon",
};
</script>

<script setup lang="ts">
interface IProps {
  name: string;
  width?: string;
  height?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  width: "20px",
  height: "20px",
});
</script>

<template>
  <svg-icon :name="props.name" :width="props.width" :height="props.height" />
</template>
