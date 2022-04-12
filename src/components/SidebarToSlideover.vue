<template>
  <div id="main" class="flex min-h-screen">
    <nav id="sidebar" class="p-7">
      <ol id="sidebar-main" class="mb-10 text-gray-400">
        <h3 class="mx-6 mb-2 text-xs uppercase tracking-widest">Main</h3>
        <li>
          <a
            v-for="(item, index) in mainNavigation"
            :href="item.href"
            :key="index"
            class="flex items-center px-6 py-2 group"
          >
            <component
              :is="item.icon"
              class="mr-2 w-5 h-5 group-hover:text-orange-500"
            />
            {{ item.label }}
          </a>
        </li>
      </ol>
      <ol id="sidebar-library" class="mb-10 text-gray-400">
        <h3 class="mx-6 mb-2 text-xs uppercase tracking-widest">Library</h3>
        <li>
          <a
            v-for="(item, index) in libraryNavigation"
            :href="item.href"
            :key="index"
            class="flex items-center px-6 py-2 group"
          >
            <component
              :is="item.icon"
              class="mr-2 w-5 h-5 group-hover:text-orange-500"
            />
            {{ item.label }}
          </a>
        </li>
      </ol>
    </nav>
    <div id="main" class="flex-1">
      <nav
        id="top-navigation"
        class="flex justify-between py-3 px-6 bg-gray-50 border-b"
      >
        <form action="" class="w-full"></form>
        <Menu as="div" class="relative flex-shrink-0"
          ><MenuButton class="flex items-center p-1 rounded-md"
            ><ChevronDownIcon class="h-5 w-5 m-3"></ChevronDownIcon
            ><img
              class="w-10 h-10 inline ring-2 ring-offset-2 ring-gray-100 rounded-full"
              src="http://placebeard.it/g/30/30"
              alt="" /></MenuButton
        ></Menu>
      </nav>
      <main id="content" class="flex">Content</main>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue"
import {
  CalendarIcon,
  ChatIcon,
  ClipboardListIcon,
  ClockIcon,
  HeartIcon,
  HomeIcon,
  ChevronDownIcon,
} from "@heroicons/vue/solid"

export default defineComponent({
  name: "SidebarToSlideover",
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    ChevronDownIcon,
  },
  data() {
    return {
      mainNavigation: [
        { href: "/", label: "Home", icon: HomeIcon },
        { href: "/", label: "Most recommended", icon: HeartIcon },
        { href: "/", label: "Most commented", icon: ChatIcon },
      ],
      libraryNavigation: [
        { href: "/", label: "Favorites", icon: HeartIcon },
        { href: "/", label: "Watch later", icon: ClockIcon },
        { href: "/", label: "History", icon: ClipboardListIcon },
        { href: "/", label: "Scheduled", icon: CalendarIcon },
      ],
    }
  },
})
</script>
