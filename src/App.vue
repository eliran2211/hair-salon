<template>
  <Header />
  <RouterView />
</template>

<script>
import Header from "./components/Header/index.vue"
export default {
  components: {
    Header,
  },
}
</script>
