<script setup lang="ts">
import MyHeader from '@/components/Layout/Header/index.vue'
import Footer from '@/components/Layout/Footer/index.vue'
</script>

<template>
    
  <div style="min-height: 100vh">
    <MyHeader />
    <router-view v-slot="{Component}">
      <transition name="el-fade-in-linear" mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<style scoped lang="scss">

</style>