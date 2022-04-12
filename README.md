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

## From sidebar to slide-over on small screens with Headless UI

After https://tallpad.com/series/headlessui/lessons/from-sidebar-to-slide-over-on-small-screens-with-headless-ui

```html
TBD
```

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### References

- https://heroicons.com/
- https://headlessui.dev/
- https://tailwindcss.com/
- [Adam Wathan's take on a search box](https://youtu.be/6xgMkGMIudE?t=1821)
