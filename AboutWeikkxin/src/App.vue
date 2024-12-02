<script setup>
import MyHeader from './components/MyHeader.vue'
import Home from './components/Home.vue'
import MyFooter from './components/MyFooter.vue'
</script>

<template>
  <div class="common-layout">
    <el-container style="display: flex; flex-direction: column;min-height: 90vh;">
      <el-header>
        <MyHeader />
      </el-header>
      <el-main>
        <Home  />
      </el-main>
      <el-footer>
        <MyFooter />
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped></style>
