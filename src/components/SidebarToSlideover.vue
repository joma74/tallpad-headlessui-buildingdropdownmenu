<template>
  <div id="main" class="flex min-h-screen">
    <nav id="sidebar" class="p-7 space-y-10">
      <ol id="sidebar-main" class="text-gray-400">
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
      <ol id="sidebar-library" class="text-gray-400">
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
    <!-- The following are block level elements, hence row based. This why main let them strech. -->
    <div id="main" class="flex-1">
      <nav
        id="top-navigation"
        x_comment="space-x-* adds horizontal space !between! children, see https://tailwindcss.com/docs/space#add-horizontal-space-between-children"
        class="flex py-3 px-6 bg-gray-50 border-b space-x-6"
      >
        <!-- flex-grow pushes the nav-totheleft to the left and the nav-totheright to the right-->
        <div
          id="nav-totheleft"
          x_comment="space-x-* adds horizontal space !between! children, see https://tailwindcss.com/docs/space#add-horizontal-space-between-children"
          class="relative flex items-center flex-grow space-x-4"
        >
          <button
            id="sidebar-toggle"
            class=""
            type="button"
            value="Open sidebar"
          >
            <MenuIcon class="h-5 w-5" />
          </button>
          <form
            id="searchinput"
            action=""
            x_comment_1="w-full makes the searchinput take all the available horizontal space; but limit by max-w-lg; w-full MUST be reformulated ON EACH child element"
            x_comment_2="h-full makes the searchinput take all the available height; h-full MUST be reformulated ON EACH child element"
            class="h-full max-h-14 w-full max-w-lg"
          >
            <div
              class="relative h-full w-full flex items-center text-gray-400 focus-within:text-orange-500"
              id="component-searchinput"
            >
              <!-- A wrapper component div to steer the SearchIcon via absolute and flex into place   -->
              <SearchIcon
                class="w-5 h-5 absolute ml-3 pointer-events-none"
              ></SearchIcon>
              <!-- pointer-events-none hints the element is not even there and the text get's focused -->
              <input
                type="text"
                name="Search"
                placeholder="Search"
                autocomplete="off"
                aria-label="Search"
                x_comment="pl-10 will push the input to the right, so it does not overlap SearchIcon"
                class="block w-full h-full pl-10 pr-3 font-semibold placeholder-gray-400 rounded-2xl border-none ring-gray-300"
              />
            </div>
          </form>
        </div>
        <Menu id="nav-totheright" as="div" class="relative flex-shrink-0"
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
  MenuIcon,
  SearchIcon,
} from "@heroicons/vue/solid"

export default defineComponent({
  name: "SidebarToSlideover",
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    ChevronDownIcon,
    MenuIcon,
    SearchIcon,
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
