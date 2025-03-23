<template>
  <div class="home">
    <section class="hero section">
      <div class="container">
        <h1>Weikkxin</h1>
        <p class="subtitle">二次元技术博客</p>
        <p class="description">分享技术、动漫与创意的个人空间</p>
      </div>
    </section>
    
    <section class="featured section">
      <div class="container">
        <h2>精选内容</h2>
        <div class="featured-grid">
          <div class="featured-item">
            <div class="featured-content">
              <h3>技术文章</h3>
              <p>探索前端开发、移动应用与人工智能的最新技术</p>
              <router-link to="/articles" class="featured-link">浏览文章</router-link>
            </div>
          </div>
          <div class="featured-item">
            <div class="featured-content">
              <h3>二次元画廊</h3>
              <p>收藏的精美插画与动漫艺术作品</p>
              <router-link to="/gallery" class="featured-link">查看画廊</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 8rem 0 6rem;
  background-color: var(--bg-secondary);
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
  letter-spacing: 0.02em;
}

.subtitle {
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  letter-spacing: 0.01em;
}

.description {
  font-size: 1.1rem;
  color: var(--text-tertiary);
  max-width: 600px;
  margin: 0 auto;
}

.featured {
  padding: 6rem 0;
}

.featured h2 {
  text-align: center;
  margin-bottom: 4rem;
  font-size: 2rem;
  color: var(--text-primary);
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.featured-item {
  background-color: var(--bg-secondary);
  border-radius: var(--radius);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.featured-content {
  padding: 2.5rem;
}

.featured-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.featured-content p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.featured-link {
  display: inline-block;
  color: var(--primary-color);
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  position: relative;
}

.featured-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--primary-color);
  transform: scaleX(0.7);
  transition: transform 0.3s ease;
}

.featured-link:hover::after {
  transform: scaleX(1);
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem 0 4rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.25rem;
  }
  
  .featured {
    padding: 4rem 0;
  }
  
  .featured-grid {
    gap: 2rem;
  }
}
</style>
