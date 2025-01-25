<script setup>
import IconHome from '@/components/icons/IconHome.vue'
import IconMessage from '@/components/icons/IconMessage.vue'
import { ref } from 'vue'
import IconMessageFill from '@/components/icons/IconMessageFill.vue'
import IconMeFill from '@/components/icons/IconMeFill.vue'
import IconMe from '@/components/icons/IconMe.vue'
import IconShop from '@/components/icons/IconShop.vue'
import IconShopFill from '@/components/icons/IconShopFill.vue'
import IconHomeFill from '@/components/icons/IconHomeFill.vue'
import router from '@/router/index.js'
import { onMounted } from 'vue'

const tabBarSelected = ref('home')

onMounted(() => {
  router.push(`/${tabBarSelected.value}`)
})

const changeTabBar = (tab) => {
  tabBarSelected.value = tab
  // to other path
  router.push(`/${tab}`)
}
</script>
<template>
  <footer>
    <div class="flex flex-col items-center w-[40px] cursor-pointer" @click="changeTabBar('home')">
      <icon-home class="w-[24px] h-[24px]" v-if="tabBarSelected !== 'home'"/>
      <icon-home-fill class="w-[24px] h-[24px]" v-else/>
      <div class="!text-[10px] !my-[2px]">Home</div>
    </div>
    <div class="flex flex-col items-center w-[40px] cursor-pointer" @click="changeTabBar('shop')">
      <icon-shop class="w-[24px] h-[24px]" v-if="tabBarSelected !== 'shop'"/>
      <icon-shop-fill class="w-[24px] h-[24px]" v-else/>
      <div class="!text-[10px] !my-[2px]">Shop</div>
    </div>
    <div>
      <a-button type="primary" status="danger" class="!rounded-[6px] !px-5">
        <template #icon>
          <icon-plus
            size="large"
            stroke-width="7"
            stroke-linecap="round"
          />
        </template>
      </a-button>
    </div>
    <div class="flex flex-col items-center w-[40px] cursor-pointer" @click="changeTabBar('message')">
      <icon-message class="w-[24px] h-[24px]" v-if="tabBarSelected !== 'message'"/>
      <icon-message-fill class="w-[24px] h-[24px]" v-else/>
      <div class="!text-[10px] !my-[2px]">Messages</div>
    </div>
    <div class="flex flex-col items-center w-[40px] cursor-pointer" @click="changeTabBar('me')">
      <icon-me class="w-[24px] h-[24px]" v-if="tabBarSelected !== 'me'"/>
      <icon-me-fill class="w-[24px] h-[24px]" v-else/>
      <div class="!text-[10px] !my-[2px]">Me</div>
    </div>
  </footer>
</template>
