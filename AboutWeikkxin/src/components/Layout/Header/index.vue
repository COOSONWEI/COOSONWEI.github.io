<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <router-link to="/">Weikkxin</router-link>
      </div>
      
      <nav class="nav">
        <router-link to="/" class="nav-item">首页</router-link>
        <router-link to="/articles" class="nav-item">博客</router-link>
        <router-link to="/gallery" class="nav-item">画廊</router-link>
        <router-link to="/anime" class="nav-item">收藏</router-link>
        <router-link to="/about" class="nav-item">关于</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
.header {
  padding: 2rem 0;
  background-color: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo a {
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: var(--primary-color);
}

.nav {
  display: flex;
  gap: 2.5rem;
}

.nav-item {
  font-size: 0.9rem;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
  letter-spacing: 0.5px;
}

.nav-item:hover,
.nav-item.router-link-active {
  color: var(--primary-color);
}

.nav-item.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--primary-color);
  transform: scaleX(0.7);
  transition: transform 0.3s ease;
}

.nav-item:hover::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--primary-color);
  transform: scaleX(0.4);
}

@media (max-width: 768px) {
  .header {
    padding: 1.5rem 0;
  }
  
  .nav {
    gap: 1.5rem;
  }
  
  .logo a {
    font-size: 1rem;
  }
  
  .nav-item {
    font-size: 0.85rem;
  }
}
</style>