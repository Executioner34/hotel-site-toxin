<script setup lang="ts">
import { checkboxListModel } from "../model";
import { Checkbox } from "@/shared/ui/checkbox";

interface IProps {
  list: string[];
  title: string;
  open?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  list: () => [],
  title: "",
  open: false,
});

const checkboxListStore = checkboxListModel();

const checkedList = computed({
  get() {
    return checkboxListStore.list;
  },
  set(list) {
    checkboxListStore.updateList(list);
  },
});

const isOpenList = ref(props.open);

const expandToggle = () => {
  isOpenList.value = !isOpenList.value;
};
</script>

<template>
  <div class="checkbox-list">
    <div class="checkbox-list__header" @click="expandToggle">
      <h3 class="checkbox-list__title" v-text="props.title"></h3>
      <div :class="['checkbox-list__icon', { _expand: isOpenList }]">
        <IconCSS name="i-ic-baseline-expand-more" size="24"></IconCSS>
      </div>
    </div>
    <template v-if="props.list.length">
      <transition name="list">
        <ul v-show="isOpenList" class="checkbox-list__items">
          <template
            v-for="(item, ind) in props.list"
            :key="`checkbox-item-${ind}`"
          >
            <li class="checkbox-list__item">
              <checkbox
                :id="`checkbox-${ind}`"
                v-model="checkedList"
                :label="item"
              ></checkbox>
            </li>
          </template>
        </ul>
      </transition>
    </template>
  </div>
</template>

<style scoped lang="scss">
.checkbox-list {
  max-width: 266px;
  width: 100%;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    transition: all 0.5s ease-in-out;

    &._expand {
      transform: rotate(0.5turn);
    }
  }

  &__item {
    margin-bottom: 10px;
  }

  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease-in-out;
  }

  .list-enter-from,
  .list-leave-to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
