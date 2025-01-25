<script setup>
import IconPlanet from '@/components/icons/IconPlanet.vue'
import { ref } from 'vue'

const tabSelected = ref('follow')

const changeTab = (tab) => {
  tabSelected.value = tab
}
</script>

<template>
  <header>
    <div>
      <icon-planet class="w-[22px] h-[22px] cursor-pointer" />
    </div>
    <div class="flex flex-row">
      <a-button type="text"
                class="w-[70px] !text-[var(--color-neutral-6)]"
                :class="{ 'tab-underline !text-[var(--color-neutral-10)]': tabSelected === 'follow' }"
                @click="changeTab('follow')">
        Follow
      </a-button>
      <a-button type="text"
                class="w-[70px] !text-[var(--color-neutral-6)]"
                :class="{ 'tab-underline !text-[var(--color-neutral-10)]': tabSelected === 'explore' }"
                @click="changeTab('explore')">
        Explore
      </a-button>
      <a-button type="text"
                class="w-[70px] !text-[var(--color-neutral-6)]"
                :class="{ 'tab-underline !text-[var(--color-neutral-10)]': tabSelected === 'nearby' }"
                @click="changeTab('nearby')">
        Nearby
      </a-button>
    </div>
    <div>
      <icon-search size="22" class="cursor-pointer" />
    </div>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 44px;
  background-color: #fff;
}

main {
  display: flex;
  flex: 1;
  background-color: rgb(242, 243, 245);
}

.tab-underline {
  position: relative;
}

.tab-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 25%;
  width: 50%;
  border-bottom: 2px solid rgb(var(--danger-6));
}
</style>
