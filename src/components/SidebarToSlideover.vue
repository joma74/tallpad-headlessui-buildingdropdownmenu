<template>
  <div id="main" class="flex min-h-screen">
    <TransitionRoot :show="sidebarOpened">
      <Dialog
        id="mobile-sidebar-dialog"
        as="div"
        @close="sidebarOpened = false"
        class="md:hidden block fixed inset-0 z-40"
        x_comment="For the Dialog to hide from md on. fixed inset-0 z-40 are all for the Dialog overlay's first layer"
      >
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-1000 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-1000 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <nav
            id="mobile-sidebar"
            class="relative z-10 max-w-fit h-full overflow-y-auto px-6 space-y-8 bg-gray-50 border-r"
            x_comment="z over previous, max width only as content needs and full vertical"
          >
            <button
              type="button"
              value="Close sidebar"
              title="Close sidebar"
              @click="sidebarOpened = false"
              class="absolute top-2 right-2 flex items-center justify-center w-10 h-10 rounded-full group"
            >
              <XIcon
                class="w-5 h-5 group-hover:text-orange-500 group-focus:text-orange-500"
              />
            </button>
            <SidebarGroup :navigationItems="mainNavigation">Main</SidebarGroup>
            <SidebarGroup :navigationItems="libraryNavigation"
              >Library</SidebarGroup
            >
          </nav>
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-1000"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-1000"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            id="mobile-sidebar-dialog-overlay"
            x_comment="Closes dialog if clicked"
            class="fixed inset-0 bg-gray-600 bg-opacity-50"
          ></DialogOverlay>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>
    <nav
      id="desktop-sidebar"
      class="hidden md:block px-6 py-8 space-y-8 bg-gray-50 border-r"
    >
      <SidebarGroup :navigationItems="mainNavigation">Main</SidebarGroup>
      <SidebarGroup :navigationItems="libraryNavigation">Library</SidebarGroup>
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
          class="group relative flex items-center flex-grow space-x-4"
        >
          <button
            id="sidebar-toggle"
            type="button"
            value="Open sidebar"
            title="Open sidebar"
            @click="sidebarOpened = true"
            class="md:invisible block hover:text-orange-500 focus:text-orange-500"
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
              class="relative h-full w-full flex items-center text-gray-400 focus-within:text-orange-500 hover:text-orange-500"
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
          ><MenuButton class="flex items-center p-1 rounded-md group"
            ><ChevronDownIcon
              class="h-5 w-5 m-3 hover:text-orange-500 group-focus:text-orange-500"
            ></ChevronDownIcon
            ><img
              class="w-10 h-10 inline ring-2 ring-offset-2 ring-gray-100 rounded-full"
              src="http://placebeard.it/g/30/30"
              alt="" /></MenuButton
        ></Menu>
      </nav>
      <main id="content">Content</main>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/vue"
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
  XIcon,
} from "@heroicons/vue/solid"

import SidebarGroup from "./SidebarGroup.vue"

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
    XIcon,
    SidebarGroup,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
  },
  data() {
    return {
      sidebarOpened: true,
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
