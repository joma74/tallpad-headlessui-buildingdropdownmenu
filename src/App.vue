<template>
  <SidebarToSlideover />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import SidebarToSlideover from "./components/SidebarToSlideover.vue"

export default defineComponent({
  name: "App",
  components: {
    SidebarToSlideover,
  },
})
</script>
