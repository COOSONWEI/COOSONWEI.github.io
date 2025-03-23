<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// 播客列表数据
const podcasts = ref([
  {
    id: 1,
    title: "编程之旅：Vue 3 最佳实践",
    date: "2024-01-15",
    duration: "45:30",
    description: "探讨Vue 3的组合式API和响应式系统的最佳实践",
    cover: "/src/assets/podcast-cover-1.jpg",
    listens: 1250
  },
  {
    id: 2,
    title: "开发者故事：从初学到精通",
    date: "2024-01-08",
    duration: "38:45",
    description: "分享我的编程学习历程和面临的挑战",
    cover: "/src/assets/podcast-cover-2.jpg",
    listens: 980
  },
  {
    id: 3,
    title: "技术分享：Web应用性能优化",
    date: "2023-12-28",
    duration: "42:15",
    description: "深入讨论前端性能优化的关键技术和方法",
    cover: "/src/assets/podcast-cover-3.jpg",
    listens: 1580
  },
  {
    id: 4,
    title: "前端工程化实践探讨",
    date: "2023-12-15",
    duration: "52:20",
    description: "深入探讨现代前端工程化的最佳实践和常见问题",
    cover: "/src/assets/podcast-cover-4.jpg",
    listens: 1120
  },
  {
    id: 5,
    title: "JavaScript设计模式应用",
    date: "2023-12-01",
    duration: "47:10",
    description: "从实际项目出发，讲解常用设计模式在JavaScript中的应用",
    cover: "/src/assets/podcast-cover-5.jpg",
    listens: 920
  }
]);

// 分类列表
const categories = ref([
  { name: "全部", count: 18 },
  { name: "前端开发", count: 8 },
  { name: "后端技术", count: 5 },
  { name: "开发者故事", count: 3 },
  { name: "学习方法", count: 2 }
]);

// 当前选中的分类
const activeCategory = ref("全部");

// 排序方式
const sortOptions = ref([
  { label: "最新发布", value: "latest" },
  { label: "最多收听", value: "popular" },
  { label: "最长时长", value: "longest" }
]);
const currentSort = ref("latest");

// 导航到播客详情页
const navigateToPodcast = (id) => {
  router.push(`/podcast/${id}`);
};

// 选择分类
const selectCategory = (category) => {
  activeCategory.value = category;
  // 这里可以添加筛选逻辑
};

// 更改排序
const changeSort = (sort) => {
  currentSort.value = sort;
  // 这里添加排序逻辑
};

// 播放播客
const playPodcast = (event, podcast) => {
  event.stopPropagation();
  console.log('播放播客:', podcast.title);
  // 这里可以添加播放逻辑
};

// 模拟获取播客列表数据
const fetchPodcasts = () => {
  // 这里可以替换为实际的API调用
  console.log('获取播客列表');
};

onMounted(() => {
  fetchPodcasts();
});
</script>

<template>
  <div class="podcasts-container">
    <div class="page-header">
      <h1>播客节目</h1>
      <p class="subtitle">技术分享与成长故事</p>
    </div>
    
    <!-- 过滤和排序区域 -->
    <div class="filter-section">
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
      
      <div class="sort-options">
        <span class="sort-label">排序: </span>
        <select v-model="currentSort" @change="changeSort(currentSort)">
          <option 
            v-for="option in sortOptions" 
            :key="option.value" 
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </div>
    </div>
    
    <!-- 播客列表 -->
    <div class="podcasts-list">
      <div 
        v-for="podcast in podcasts" 
        :key="podcast.id" 
        class="podcast-card"
        @click="navigateToPodcast(podcast.id)"
      >
        <div class="podcast-cover">
          <img :src="podcast.cover" :alt="podcast.title" />
          <div class="play-button" @click="(event) => playPodcast(event, podcast)">
            <i class="iconfont icon-play"></i>
          </div>
          <span class="duration">{{ podcast.duration }}</span>
        </div>
        
        <div class="podcast-info">
          <h2 class="podcast-title">{{ podcast.title }}</h2>
          <div class="podcast-meta">
            <span class="podcast-date">{{ podcast.date }}</span>
            <span class="listens">
              <i class="iconfont icon-headphones"></i> {{ podcast.listens }}
            </span>
          </div>
          <p class="podcast-description">{{ podcast.description }}</p>
        </div>
      </div>
    </div>
    
    <!-- 加载更多按钮 -->
    <div class="load-more">
      <button class="load-more-btn">
        加载更多 <i class="iconfont icon-down"></i>
      </button>
    </div>
    
    <!-- 订阅区域 -->
    <div class="subscribe-section">
      <h2>订阅我的播客</h2>
      <p>不错过任何一集精彩内容</p>
      
      <div class="podcast-platforms">
        <a href="#" class="platform">
          <img src="/src/assets/platform-apple.svg" alt="Apple Podcasts" />
          <span>Apple Podcasts</span>
        </a>
        <a href="#" class="platform">
          <img src="/src/assets/platform-spotify.svg" alt="Spotify" />
          <span>Spotify</span>
        </a>
        <a href="#" class="platform">
          <img src="/src/assets/platform-google.svg" alt="Google Podcasts" />
          <span>Google Podcasts</span>
        </a>
        <a href="#" class="platform">
          <img src="/src/assets/platform-overcast.svg" alt="Overcast" />
          <span>Overcast</span>
        </a>
      </div>
      
      <div class="rss-feed">
        <span>RSS订阅:</span>
        <input type="text" value="https://weikkxin.com/podcast/rss" readonly />
        <button>复制</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.podcasts-container {
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

/* 过滤和排序区域 */
.filter-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 20px;
}

.categories {
  display: flex;
  flex-wrap: wrap;
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

.sort-options {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sort-label {
  color: #666;
}

.sort-options select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #fff;
  font-size: 0.9rem;
  outline: none;
}

/* 播客列表 */
.podcasts-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.podcast-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.podcast-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.podcast-cover {
  position: relative;
  height: 200px;
}

.podcast-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3498db;
  font-size: 24px;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 2;
}

.podcast-card:hover .play-button {
  opacity: 1;
}

.duration {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
}

.podcast-info {
  padding: 20px;
}

.podcast-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 1.3;
}

.podcast-meta {
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 12px;
}

.listens {
  display: flex;
  align-items: center;
  gap: 5px;
}

.podcast-description {
  color: #555;
  line-height: 1.5;
  font-size: 0.95rem;
}

/* 加载更多按钮 */
.load-more {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
}

.load-more-btn {
  background: #f5f5f5;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.load-more-btn:hover {
  background: #e0e0e0;
}

/* 订阅区域 */
.subscribe-section {
  background: #f7f9fc;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
}

.subscribe-section h2 {
  font-size: 1.8rem;
  margin-bottom: 12px;
}

.subscribe-section p {
  color: #666;
  margin-bottom: 30px;
}

.podcast-platforms {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
}

.platform {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #333;
  transition: transform 0.3s;
}

.platform:hover {
  transform: translateY(-5px);
}

.platform img {
  width: 60px;
  height: 60px;
  margin-bottom: 8px;
}

.rss-feed {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.rss-feed input {
  padding: 10px 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  min-width: 300px;
  background: #fff;
}

.rss-feed button {
  background: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .filter-section {
    flex-direction: column;
    align-items: stretch;
  }
  
  .rss-feed input {
    min-width: 0;
    flex: 1;
  }
}

@media (max-width: 500px) {
  .podcast-platforms {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style> 