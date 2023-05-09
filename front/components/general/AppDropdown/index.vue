<template>
  <div ref="dropdown" class="app-dropdown-component">
    <label :for="id" class="label">{{ label }}</label>
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
        <span class="material-icons icon"> expand_more </span>
      </div>
    </div>
    <div v-show="isExpand" class="items-list">
      <dropdown-item
        v-for="(item, key) in data"
        :key="`dropdown-item-${key}`"
        :name="item.name"
        :value="item.value"
        :max="item.max"
        class="item"
        @update-value="dropdownItemHandler"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import DropdownItem from "~/components/general/AppDropdown/DropdownItem.vue";

type IItem = {
  name: string;
  value: number;
  max?: number;
  dictionary?: {
    [key: number]: string;
  };
};

interface IProps {
  id: string;
  label: string;
  data: Array<IItem>;
  placeholder?: string;
  isDropdownGuests?: boolean;
  isUIKit?: boolean;
}

interface IEmits {
  (e: "update:data", data: Array<IItem>): Array<IItem>;
}

interface IDictionary {
  [key: number]: string;
}

const props = withDefaults(defineProps<IProps>(), {
  placeholder: "Сколько гостей",
  isDropdownGuests: false,
  isUIKit: false,
});
const emit = defineEmits<IEmits>();

const data = ref(props.data);

const dropdownGuestDictionary: IDictionary = {
  1: "Гость",
  2: "Гостя",
  3: "Гостя",
  4: "Гостя",
};

const inputString = computed(() => {
  if (props.isDropdownGuests) {
    return formatStringForGuest();
  }
  const string = data.value
    .filter((item) => item.value !== 0)
    .map((item) => {
      return formatString({ value: item.value, name: item.name });
    })
    .join(", ");
  return string.length >= 35 ? string.slice(0, 35) + "..." : string;
});

const formatString = (options: { value: number; name: string }): string => {
  const { value, name } = options;
  const id = data.value.findIndex((item) => item.name === name);
  if (id !== -1 && data.value[id].dictionary?.[value]) {
    return value + " " + data.value[id].dictionary?.[value].toLowerCase();
  }
  return value + " " + name.toLowerCase();
};

const formatStringForGuest = () => {
  const sum = data.value.reduce(
    (prev, item) => (item.name !== "Младенецы" ? prev + item.value : prev),
    0
  );
  if (dropdownGuestDictionary[sum]) {
    return `${sum} ${dropdownGuestDictionary[sum]}`;
  }
  return sum !== 0 ? `${sum} Гостей` : "";
};

const dropdownItemHandler = (options: IItem) => {
  const { name, value, max } = options;
  const id = data.value.findIndex((item) => item.name === name);
  if (id !== -1) {
    data.value[id].value = value;
    data.value[id].name = name;
    data.value[id].max = max;
    emit("update:data", data.value);
  }
};

const isExpand = ref(false);
const dropdown = ref(null);
onClickOutside(dropdown, () => (isExpand.value = false));
</script>

<style lang="scss" scoped>
.app-dropdown-component {
  display: flex;
  flex-direction: column;
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
}
</style>
