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

After

- https://tallpad.com/series/tailwind/lessons/build-an-input-with-icon-using-tailwindcss
- https://tallpad.com/series/tailwind/lessons/build-a-sidebar-navigation
- https://tallpad.com/series/headlessui/lessons/from-sidebar-to-slide-over-on-small-screens-with-headless-ui

```html
TBD
```

## Tailwind CSS group vs within vs peer

- <span style="color:green">Applied</span> [Styling based on parent state (group-{modifier})](https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state)
  When you need to style an element based on the state of some parent element...
- <span style="color:green">Applied</span> [focus-within (:focus-within)](https://tailwindcss.com/docs/hover-focus-and-other-states#focus-within) Style an element when it or one of its descendants has focus...
- <span style="color:gray">Not applied</span> [Styling based on sibling state (peer-{modifier})](https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-sibling-state) When you need to style an element based on the state of a sibling element...

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
