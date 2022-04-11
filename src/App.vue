<template>
  <DropdownMenu />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import DropdownMenu from "./components/DropdownMenu.vue"

export default defineComponent({
  name: "App",
  components: {
    DropdownMenu,
  },
})
</script>
