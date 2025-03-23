<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// 文章列表数据
const articles = ref([
  {
    id: 1,
    title: "Vue 3和TypeScript结合使用指南",
    date: "2024-01-20",
    summary: "本文详细介绍如何在Vue 3项目中高效使用TypeScript，包括类型定义、组件类型和响应式API的类型安全使用方法。",
    cover: "/src/assets/article-1.jpg",
    tags: ["Vue", "TypeScript"],
    readTime: "8分钟"
  },
  {
    id: 2,
    title: "现代CSS技巧与最佳实践",
    date: "2024-01-12",
    summary: "探索CSS的新特性和创建可维护样式的最佳实践，包括CSS变量、Grid布局和响应式设计模式。",
    cover: "/src/assets/article-2.jpg",
    tags: ["CSS", "Web设计"],
    readTime: "6分钟"
  },
  {
    id: 3,
    title: "JavaScript异步编程全指南",
    date: "2024-01-05",
    summary: "从Promise到async/await，掌握JavaScript异步编程的全部内容，包括常见陷阱和性能优化技巧。",
    cover: "/src/assets/article-3.jpg",
    tags: ["JavaScript", "异步编程"],
    readTime: "10分钟"
  },
  {
    id: 4,
    title: "Web应用性能优化策略",
    date: "2023-12-28",
    summary: "全面介绍提升Web应用性能的各种策略，从资源加载优化到渲染性能提升，适用于各种前端框架。",
    cover: "/src/assets/article-4.jpg",
    tags: ["性能优化", "前端"],
    readTime: "12分钟"
  },
  {
    id: 5,
    title: "构建可扩展的前端架构",
    date: "2023-12-15",
    summary: "分享如何设计和实现可扩展的前端应用架构，包括模块化、状态管理和组件设计模式。",
    cover: "/src/assets/article-5.jpg",
    tags: ["架构", "前端"],
    readTime: "9分钟"
  }
]);

// 分类列表
const categories = ref([
  { name: "全部", count: 12 },
  { name: "Vue", count: 5 },
  { name: "React", count: 3 },
  { name: "JavaScript", count: 8 },
  { name: "CSS", count: 4 },
  { name: "性能优化", count: 2 }
]);

// 当前选中的分类
const activeCategory = ref("全部");

// 文章搜索
const searchQuery = ref("");

// 导航到文章详情页
const navigateToArticle = (id) => {
  router.push(`/article/${id}`);
};

// 选择分类
const selectCategory = (category) => {
  activeCategory.value = category;
  // 这里可以添加筛选逻辑
};

// 搜索文章
const searchArticles = () => {
  // 搜索逻辑实现
  console.log('搜索:', searchQuery.value);
};

// 模拟获取文章列表数据
const fetchArticles = () => {
  // 这里可以替换为实际的API调用
  console.log('获取文章列表');
};

onMounted(() => {
  fetchArticles();
});
</script>

<template>
  <div class="articles-container">
    <div class="page-header">
      <h1>文章列表</h1>
      <p class="subtitle">探索技术世界的思考与实践</p>
    </div>
    
    <!-- 搜索和分类区域 -->
    <div class="filter-section">
      <div class="search-box">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="搜索文章..." 
          @keyup.enter="searchArticles"
        />
        <button @click="searchArticles">
          <i class="iconfont icon-search"></i>
        </button>
      </div>
      
      <div class="categories">
        <button 
          v-for="category in categories" 
          :key="category.name"
          :class="['category-btn', { active: activeCategory === category.name }]"
          @click="selectCategory(category.name)"
        >
          {{ category.name }} ({{ category.count }})
        </button>
      </div>
    </div>
    
    <!-- 文章列表 -->
    <div class="articles-list">
      <div 
        v-for="article in articles" 
        :key="article.id" 
        class="article-card"
        @click="navigateToArticle(article.id)"
      >
        <div class="article-image">
          <img :src="article.cover" :alt="article.title" />
        </div>
        <div class="article-content">
          <div class="article-meta">
            <span class="article-date">{{ article.date }}</span>
            <span class="read-time">{{ article.readTime }}阅读</span>
          </div>
          <h2 class="article-title">{{ article.title }}</h2>
          <p class="article-summary">{{ article.summary }}</p>
          <div class="article-tags">
            <span 
              v-for="(tag, index) in article.tags" 
              :key="index" 
              class="tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 分页控件 -->
    <div class="pagination">
      <button class="pagination-btn prev">
        <i class="iconfont icon-left"></i> 上一页
      </button>
      <div class="page-numbers">
        <button class="page-number active">1</button>
        <button class="page-number">2</button>
        <button class="page-number">3</button>
        <span class="ellipsis">...</span>
        <button class="page-number">8</button>
      </div>
      <button class="pagination-btn next">
        下一页 <i class="iconfont icon-right"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.articles-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 12px;
}

.subtitle {
  color: #666;
  font-size: 1.2rem;
}

/* 搜索和分类区域 */
.filter-section {
  margin-bottom: 40px;
}

.search-box {
  display: flex;
  max-width: 500px;
  margin: 0 auto 30px;
}

.search-box input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 6px 0 0 6px;
  font-size: 1rem;
  outline: none;
}

.search-box button {
  background: #3498db;
  color: white;
  border: none;
  padding: 0 20px;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  font-size: 1.2rem;
}

.categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.category-btn {
  background: #f5f5f5;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s;
}

.category-btn:hover {
  background: #e0e0e0;
}

.category-btn.active {
  background: #3498db;
  color: white;
}

/* 文章列表 */
.articles-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-bottom: 40px;
}

.article-card {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 24px;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.article-image {
  height: 100%;
  min-height: 220px;
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  color: #666;
  font-size: 0.9rem;
}

.article-title {
  font-size: 1.6rem;
  margin-bottom: 12px;
  line-height: 1.3;
}

.article-summary {
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
  flex-grow: 1;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: #f3f4f6;
  color: #4b5563;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
}

/* 分页控件 */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.pagination-btn {
  background: #f5f5f5;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.pagination-btn:hover {
  background: #e0e0e0;
}

.page-numbers {
  display: flex;
  align-items: center;
  gap: 8px;
}

.page-number {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;
}

.page-number:hover {
  background: #f5f5f5;
}

.page-number.active {
  background: #3498db;
  color: white;
}

.ellipsis {
  font-size: 1.2rem;
  color: #666;
}

/* 响应式设计 */
@media (max-width: 900px) {
  .article-card {
    grid-template-columns: 1fr;
  }
  
  .article-image {
    height: 200px;
  }
}

@media (max-width: 600px) {
  .pagination {
    flex-direction: column;
    gap: 12px;
  }
}
</style> 