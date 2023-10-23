<script setup lang="ts">
interface IComfortItem {
  icon: string;
  name: string;
  description: string;
}

interface IProps {
  items?: Array<IComfortItem>;
}

const props = withDefaults(defineProps<IProps>(), {
  items: () => [],
});
</script>

<template>
  <ul v-if="props.items.length" class="comfort-list">
    <template v-for="(item, key) in props.items" :key="`item-comfort-${key}`">
      <li
        :class="[
          'comfort-list__item',
          { _separator: key !== props.items.length - 1 },
        ]"
      >
        <div class="comfort-list__icon-wrapper">
          <IconCSS :name="item.icon" size="48" class="icon"></IconCSS>
        </div>
        <div class="comfort-list__text-content-wrapper">
          <p class="comfort-list__name">{{ item.name }}</p>
          <p class="comfort-list__text">{{ item.description }}</p>
        </div>
      </li>
    </template>
  </ul>
</template>

<style scoped lang="scss">
.comfort-list {
  display: flex;
  flex-direction: column;
  max-width: 280px;
  width: 100%;

  &__item {
    display: flex;
    padding-bottom: 17px;

    &:not(:last-child) {
      margin-bottom: 23px;
    }

    &._separator {
      border-bottom: 1px solid $primaryColor10;
    }
  }

  &__icon-wrapper {
    margin-right: 10px;

    & .icon {
      background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
    }
  }

  &__text-content-wrapper {
    display: flex;
    flex-direction: column;
  }

  &__name {
    font-weight: 700;
  }
}
</style>
