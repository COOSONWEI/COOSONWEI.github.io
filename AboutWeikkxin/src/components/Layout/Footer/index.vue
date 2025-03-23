<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <router-link to="/">Weikkxin</router-link>
        </div>
        <div class="footer-nav">
          <router-link to="/" class="nav-link">首页</router-link>
          <router-link to="/articles" class="nav-link">博客</router-link>
          <router-link to="/gallery" class="nav-link">画廊</router-link>
          <router-link to="/anime" class="nav-link">收藏</router-link>
          <router-link to="/about" class="nav-link">关于</router-link>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2024 Weikkxin. All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 简化的页脚组件
import { ref } from 'vue';
</script>

<style scoped>
.footer {
  background-color: var(--bg-primary);
  padding: 3rem 0 1.5rem;
  margin-top: 4rem;
  border-top: 1px solid var(--border-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.footer-logo {
  margin-bottom: 1.5rem;
}

.footer-logo a {
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: var(--primary-color);
}

.footer-nav {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.nav-link {
  color: var(--text-secondary);
  transition: all 0.3s ease;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  padding: 0.25rem 0;
}

.nav-link:hover {
  color: var(--primary-color);
}

.footer-bottom {
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
  text-align: center;
  color: var(--text-secondary);
  letter-spacing: 0.5px;
  font-size: 0.8rem;
}

@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  .footer-logo {
    margin-bottom: 0;
  }
}
</style>