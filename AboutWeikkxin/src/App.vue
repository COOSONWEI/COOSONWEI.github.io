<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Home from './components/Home.vue'
</script>

<template>
  <div style="display: flex; justify-content: center; align-items: center;">
    <el-container>
    <el-header>
      <!-- <img alt="Vue logo" class="logo" src="./assets/myCanvas.jpeg" width="125" height="125" /> -->
      <div>
        <a class="name" href="App.vue">
          Weikkxin
        </a>

        <a href="https://github.com/COOSONWEI" >
          <img src="./assets/github-mark.png" alt="To GitHub" class="logo" width="20" height="20">
        </a>
      </div>

    </el-header>

    <el-main>

      <Home />
    </el-main>

    <el-footer>© 2024 <a href="https://coosonwei.github.io/">Weikkxin</a>  <a href="https://github.com/COOSONWEI">GitHub</a></el-footer>
  </el-container>
  </div>
  
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.name {
  font-size: 24px !important;
  color: #00006D !important;
  font-weight: 900 !important;
  font-family: 'Nunito Sans', sans-serif;
  display: inline-block;
  padding-top: .3125rem;
  padding-bottom: .3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
}
</style>
