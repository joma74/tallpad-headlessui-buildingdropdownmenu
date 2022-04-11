# tallpad-headlessui

## Building a dropdown menu

After https://tallpad.com/series/headlessui/lessons/building-a-dropdown-menu

Change `src/App.vue` to

```html
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
```

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```
