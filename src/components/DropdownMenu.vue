<template>
  <div class="flex items-center justify-end py-3 px-6 bg-gray-50 border-b">
    <Menu
      as="div"
      class="relative mx-6"
      x_comment="relative else the menu items overlap and appear on the right side of the window"
      id="menu_1"
      ><MenuButton class="flex items-center p-1 rounded-md"
        ><ChevronDownIcon class="h-5 w-5 m-3"></ChevronDownIcon
        ><img
          class="w-10 h-10 inline ring-2 ring-offset-2 ring-gray-100 rounded-full"
          src="http://placebeard.it/g/30/30"
          alt="" /></MenuButton
      ><Transition
        enter-active-class="transition transform duration-100 ease-out"
        enter-from-class="opacity-0 scale-90"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition transform duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-90"
      >
        <MenuItems
          class="origin-top-right absolute right-0 bg-white rounded-md shadow-lg border w-48"
          x_comment="origin-top-right makes the transition origin form the top right"
          ><MenuItem
            v-slot="{ active }"
            x_comment="see https://headlessui.dev/react/menu#menu-item Render Prop `active`"
            ><a
              href="#"
              :class="{ 'bg-gray-100': active }"
              class="block px-4 py-2 text-sm text-gray-700"
              >My Profile</a
            ></MenuItem
          ><MenuItem
            v-slot="{ active, disabled }"
            disabled
            x_comment="see https://headlessui.dev/react/menu#menu-item Render Prop `active` and `disabled`"
            ><a
              href="#"
              :class="{ 'bg-gray-100': active, 'opacity-40': disabled }"
              class="block px-4 py-2 text-sm text-gray-700"
              >Settings</a
            ></MenuItem
          ><MenuItem
            v-slot="{ active }"
            x_comment="see https://headlessui.dev/react/menu#menu-item Render Prop `active`"
            ><a
              href="#"
              :class="{ 'bg-gray-100': active }"
              class="block px-4 py-2 text-sm text-gray-700"
              >Help</a
            ></MenuItem
          ><MenuItem
            v-slot="{ active }"
            x_comment="see https://headlessui.dev/react/menu#menu-item Render Prop `active`"
            ><a
              href="#"
              :class="{ 'bg-gray-100': active }"
              class="block px-4 py-2 text-sm text-gray-700"
              >Logout</a
            ></MenuItem
          ></MenuItems
        >
      </Transition></Menu
    >
    <Menu
      as="div"
      v-slot="{ open }"
      class="relative mx-6"
      x_comment="relative else the menu items overlap and appear on the right side of the window"
      id="menu_2"
      ><MenuButton class="flex items-center p-1 rounded-md"
        ><ChevronUpIcon v-if="open" class="h-5 w-5"></ChevronUpIcon>
        <ChevronDownIcon v-else class="h-5 w-5"></ChevronDownIcon>Menu
        2</MenuButton
      ><MenuItems
        class="absolute right-0 bg-white rounded-md shadow-lg border w-48"
        ><MenuItem
          ><a
            href="#"
            class="hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700"
            >My Profile</a
          ></MenuItem
        ><MenuItem
          ><a
            href="#"
            class="hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700"
            >Settings</a
          ></MenuItem
        ><MenuItem
          ><a
            href="#"
            class="hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700"
            >Help</a
          ></MenuItem
        ><MenuItem
          ><a
            href="#"
            class="hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700"
            >Logout</a
          ></MenuItem
        ></MenuItems
      ></Menu
    >
  </div>

  <main>Main Content</main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/solid"

export default defineComponent({
  name: "DropdownMenu",
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    ChevronDownIcon,
    ChevronUpIcon,
  },
})
</script>
