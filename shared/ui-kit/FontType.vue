<script lang="ts">
export default {
  name: "FontType",
};
</script>

<script setup lang="ts">
interface IProps {
  name?: string;
  example?: string;
  styleNameObj?: { fontSize: string };
}

const props = defineProps<IProps>();

const fontSize = computed(() => {
  return props.styleNameObj?.fontSize ? props.styleNameObj.fontSize : "14px";
});
</script>

<template>
  <li class="font-type-component">
    <span class="name">{{ props.name }}</span>
    <span class="text-example" v-html="props.example"></span>
  </li>
</template>

<style scoped lang="scss">
.font-type-component {
  display: flex;

  .name {
    display: flex;
    justify-content: flex-end;
    width: 37px;
    margin-right: 30px;
    font-size: v-bind(fontSize);
    color: $primaryColor25;
  }
}
</style>
