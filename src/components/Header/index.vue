<template>
  <div class="relative">
    <header>
      <div class="flex justify-between p-3 bg-[#2c3d51]">
        <img
          class="max-h-[50px]"
          src="https://themes.muffingroup.com/be/hairdresser/wp-content/uploads/2018/04/hairdresser-logo-retina.png"
        />
        <button @click="isOpen = !isOpen">
          <OhVueIcon
            name="co-hamburger-menu"
            class="self-center"
            color="#d78985"
            :height="36"
            :width="36"
          />
        </button>
      </div>
    </header>
    <SidebarHeaderMobile
      @close="isOpen = false"
      class="absolute top-0"
      :navigations="navigations"
      selectedId="home"
      :isOpen="isOpen"
    />
  </div>
</template>

<script>
import { OhVueIcon } from "oh-vue-icons"
import SidebarHeaderMobile from "./SidebarHeaderMobile.vue"
export default {
  name: "Header",
  components: {
    OhVueIcon,
    SidebarHeaderMobile,
  },
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    navigations() {
      return [
        {
          id: "home",
          title: "Home",
        },
        {
          id: "about",
          title: "About",
        },
        {
          id: "pricing",
          title: "Pricing",
        },
      ]
    },
  },
}
</script>
