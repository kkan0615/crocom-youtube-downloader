<template>
  <header
    class="w-full general-header relative sm:h-32 bg-app-bar dark:bg-app-bar-dark dark:text-primary-dark-300"
  >
    <div
      class="h-full ml-auto mr-auto flex flex-col sm:w-3/5"
    >
      <!--  top  -->
      <div
        class="w-full flex-grow-0 flex-shrink"
      >
        top
      </div>
      <!--   bottom   -->
      <div
        class="flex flex-grow flex-shrink-0"
      >
        <div
          class="w-1/12 text-textPrimary-300 bg-primary-300 flex items-center justify-center mr-2"
        >
          <div
            class="w-8 text-center"
          >
            <t-material-icon
              class="sm:text-4xl text-sm"
            >
              menu
            </t-material-icon>
            <div
              class="sm:block hidden text-sm"
            >
              카테고리
            </div>
          </div>
        </div>
        <div
          class="flex flex-col w-11/12"
        >
          <div
            class="flex flex-grow items-center"
          >
            <div>
              입력
              <input>
            </div>
            <div
              class="ml-auto flex items-center mr-2 sm:mr-0"
            >
              <notification-menu
                class="ring-2 sm:ring-0 rounded-md mr-2 sm:mr-0"
              />
              <my-info
                class="ring-2 sm:ring-0 rounded-md mr-2"
              />
              <!--              <basket-menu-->
              <!--                class="ring-2 sm:ring-0 rounded-md"-->
              <!--              />-->
              <sell-menu
                class="ring-2 sm:ring-0 rounded-md"
              />
            </div>
          </div>
          <div
            class="flex text-xs sm:text-sm"
          >
            <header-bottom-menus />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TMaterialIcon from '@/components/tailwind/icon/Material/index.vue'
import MyInfo from '@/layouts/General/components/MyInfo.vue'
import NotificationMenu from '@/layouts/General/components/NotificationMenu.vue'
import HeaderBottomMenus from '@/layouts/General/components/Menus.vue'
import SellMenu from '@/layouts/General/components/Sell.vue'

export default defineComponent({
  name: 'HeaderGeneralLayout',
  components: { SellMenu, HeaderBottomMenus, NotificationMenu, MyInfo, TMaterialIcon },
  setup () {
    return
  }
})
</script>
