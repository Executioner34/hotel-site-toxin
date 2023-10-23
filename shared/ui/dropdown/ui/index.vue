<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { dropdownGuestDictionary } from "../lib";
import { IItem } from "../types";
import { dropdownModel } from "../model";
import DropdownItem from "./DropdownItem.vue";
import { Button } from "@/shared/ui/button";

interface IProps {
  id: string;
  label: string;
  placeholder?: string;
  isDropdownGuests?: boolean;
  isUIKit?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  placeholder: "Сколько гостей",
  isDropdownGuests: false,
  isUIKit: false,
});

const store = dropdownModel();

const { data: list } = await useAsyncData("list", async () => {
  props.isDropdownGuests
    ? await store.getGuestsData()
    : await store.getRoomsData();
  return store.list;
});

const inputString = computed(() => {
  if (props.isDropdownGuests) {
    return formatStringForGuest();
  }
  if (list.value?.length) {
    const string = list.value
      .filter((item) => item.value !== 0)
      .map((item) => {
        return formatString({ value: item.value, name: item.name });
      })
      .join(", ");
    return string.length >= 35 ? string.slice(0, 35) + "..." : string;
  }
});

const formatString = (options: { value: number; name: string }): string => {
  const { value, name } = options;
  if (list.value?.length) {
    const id = list.value.findIndex((item) => item.name === name);
    if (id !== -1 && list.value[id].dictionary?.[value]) {
      return value + " " + list.value[id].dictionary?.[value]?.toLowerCase();
    }
  }
  return value + " " + name.toLowerCase();
};

const formatStringForGuest = () => {
  if (list.value?.length) {
    const sum = list.value.reduce(
      (prev, item) => (item.name !== "младенцы" ? prev + item.value : prev),
      0
    );
    if (dropdownGuestDictionary[sum]) {
      return `${sum} ${dropdownGuestDictionary[sum]}`;
    }
    return sum !== 0 ? `${sum} Гостей` : "";
  }
};

const dropdownItemHandler = (options: IItem) => {
  const { name, value, max } = options;
  if (list.value?.length) {
    const id = list.value.findIndex((item) => item.name === name);
    if (id !== -1) {
      list.value[id].value = value;
      list.value[id].name = name;
      list.value[id].max = max;
    }
  }
};

const isExpand = ref(false);
const dropdown = ref(null);
onClickOutside(dropdown, () => (isExpand.value = false));

const isVisibleClearButton = computed(() => {
  if (list.value?.length) {
    return list.value.some((item) => item.value !== 0);
  }
});

const clearButtonHandler = () => {
  list.value?.forEach((item) => (item.value = 0));
};

const confirmButtonHandler = () => {
  isExpand.value = false;
};
</script>

<script lang="ts">
export default {
  name: "DropdownPicker",
};
</script>

<template>
  <div ref="dropdown" class="app-dropdown-component">
    <label :for="id" class="label" v-text="props.label"></label>
    <div
      :class="['input-wrapper', { 'input-wrapper--expand': isExpand }]"
      @click="isExpand = !isExpand"
    >
      <input
        :id="id"
        type="text"
        class="input-dropdown"
        :value="inputString"
        :placeholder="placeholder"
      />
      <div :class="['icon-wrapper', { 'icon-wrapper--expand': isExpand }]">
        <IconCSS
          name="i-ic-baseline-expand-less"
          size="24"
          class="icon"
        ></IconCSS>
      </div>
    </div>
    <div v-show="isExpand" class="items-list">
      <template v-for="(item, key) in list" :key="`dropdown-item-${key}`">
        <DropdownItem
          v-bind="item"
          class="item"
          @update-value="dropdownItemHandler"
        />
      </template>
      <div v-if="props.isDropdownGuests" class="bottom">
        <Button
          :class="{ 'bottom__btn--hidden': !isVisibleClearButton }"
          size="small"
          @click="clearButtonHandler"
          >очистить</Button
        >
        <Button size="small" @click="confirmButtonHandler">применить</Button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-dropdown-component {
  display: flex;
  flex-direction: column;
  max-width: 266px;
  width: 100%;

  .label {
    @include h3Text;
    margin-bottom: 5px;
  }

  .input-wrapper {
    display: flex;
    width: 100%;
    height: 44px;
    padding-left: 15px;
    border: 1px solid $primaryColor25;
    border-radius: 4px;

    &--expand {
      border-color: $primaryColor50;
      border-bottom: none;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  .input-dropdown {
    @include bodyText;
    width: 100%;
    padding: 0;
    outline: none;
    border: none;
    cursor: pointer;
    caret-color: transparent;

    &::placeholder {
      color: $primaryColor25;
    }
  }

  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &--expand {
      transform: rotate(-180deg);
    }
  }

  .icon {
    color: $primaryColor75;
  }

  .items-list {
    padding: 7px 7px 7px 15px;
    border: 1px solid $primaryColor50;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .item:not(:last-child) {
    margin-bottom: 7px;
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 19px;
    margin-bottom: 5px;

    &__btn--hidden {
      opacity: 0;
    }
  }
}
</style>
