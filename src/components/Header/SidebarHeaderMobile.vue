<template>
  <div
    class="bg-[#2c3d51] flex flex-col gap-y-3 printer-container"
    :class="{ open: isOpen }"
  >
    <button
      class="flex flex-shrink-0 w-fit items-center self-end"
      @click="$emit('close', isOpen)"
    >
      <OhVueIcon
        name="io-close-outline"
        color="#ffffff"
        :height="36"
        :width="36"
      />
    </button>
    <nav>
      <ul v-if="navigations && navigations.length" class="flex flex-col">
        <li
          v-for="(nav, idx) in navigations"
          :key="nav.id"
          class="p-2 border-t-white border-opacity-10 border-t-[1px]"
          :class="{
            'text-[#d78985]': selectedId === nav.id,
            'border-b-[1px]': idx === navigations.length - 1,
          }"
        >
          <button>
            <span v-text="nav.title" />
          </button>
        </li>
      </ul>
    </nav>
    <div class="flex gap-x-1" v-if="icons && icons.length">
      <OhVueIcon v-for="icon in icons" :name="icon.name" :key="icon.name" />
    </div>
  </div>
</template>

<script>
import { OhVueIcon } from "oh-vue-icons"
export default {
  name: "SidebarHeaderMobile",
  components: {
    OhVueIcon,
  },
  emits: ["close"],
  props: {
    navigations: Array,
    selectedId: String,
    icons: Array,
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="postcss" scoped>
.printer-container {
  right: 0;
  transition: transform 0.3s;
  height: 100vh;
  min-width: 300px;
  transform: translate(-100%);
  &.open {
    right: 0;
  }
}
</style>
