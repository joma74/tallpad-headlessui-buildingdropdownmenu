<template>
  <ol id="sidebar-main" class="mx-6 pb-4 text-gray-400">
    <h3 class="text-xs uppercase tracking-widest"><slot></slot></h3>
    <li>
      <a
        v-for="(item, index) in navigationItems"
        :href="item.href"
        :key="index"
        class="flex items-center px-6 py-2 group"
      >
        <Component
          :is="item.icon"
          class="mr-2 w-5 h-5 group-hover:text-orange-500 group-focus:text-orange-500"
        />
        {{ item.label }}
      </a>
    </li>
  </ol>
</template>

<script lang="ts">
import { Component, defineComponent } from "vue"
import { PropType } from "vue"
export default defineComponent({
  name: "SidebarGroup",
  props: {
    navigationItems: Array as PropType<
      Array<{ href: string; icon: Component; label: string }>
    >,
  },
})
</script>
