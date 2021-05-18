<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    ref="root"
    class="relative inline-block text-left"
    @mouseenter="onFocusIn"
  >
    <button
      type="button"
      class="inline-flex justify-center w-full rounded-md text-sm font-medium hover:bg-gray-50 focus:outline-none"
      :aria-expanded="open"
      aria-haspopup="true"
      @click="onClickTarget"
    >
      <slot
        name="activator"
      />
    </button>
    <div
      v-show="open"
      id="menu"
      class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
      @mouseleave="onFocusOut"
    >
      <div
        class="py-1"
        role="none"
      >
        <slot>
          <a
            id="menu-item-0"
            href="#"
            class="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
          >Account settings</a>
          <a
            id="menu-item-1"
            href="#"
            class="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
          >Support</a>
          <a
            id="menu-item-2"
            href="#"
            class="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabindex="-1"
          >License</a>
          <form
            method="POST"
            action="#"
            role="none"
          >
            <button
              id="menu-item-3"
              type="submit"
              class="text-gray-700 block w-full text-left px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
            >
              Sign out
            </button>
          </form>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref } from 'vue'

export default defineComponent({
  name: 'TDropdownMenu',
  props: {
    openOnHover: {
      type: Boolean,
      require: false,
      default: false,
    }
  },
  setup (props) {
    const open = ref(false)
    const root = ref<HTMLDivElement | null>(null)

    onBeforeUnmount(() => {
      window.removeEventListener('click', onClickOutSide)
    })

    const handleClose = () => {
      open.value = false
    }

    const onClickOutSide = (e: MouseEvent) => {
      if (root.value && !root.value.contains(e.target)) {
        window.removeEventListener('click', onClickOutSide)
        handleClose()
      }
    }

    const onClickTarget = () => {
      window.addEventListener('click', onClickOutSide)
      open.value = !open.value
    }

    const onFocusIn = () => {
      if (props.openOnHover)
        open.value = true
    }

    const onFocusOut = () => {
      if (props.openOnHover)
        open.value = false
    }

    return {
      onClickTarget,
      onFocusIn,
      onFocusOut,
      open,
      root
    }
  }
})
</script>
