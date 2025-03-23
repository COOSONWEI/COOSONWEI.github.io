<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const podcastId = route.params.id;

// 播客详情
const podcast = ref({
  id: podcastId,
  title: "编程之旅：Vue 3 最佳实践",
  date: "2024-01-15",
  duration: "45:30",
  description: "在这一集中，我们将深入探讨Vue 3的组合式API和响应式系统，分享一些实用的最佳实践。我们会讨论如何组织组件逻辑，如何使用组合函数封装和重用代码，以及如何利用响应式系统提高性能。无论你是Vue新手还是有经验的开发者，这一集都能给你带来很多有价值的信息。",
  audioUrl: "/src/assets/podcast-1.mp3",
  cover: "/src/assets/podcast-cover-1.jpg"
});

// 相关播客
const relatedPodcasts = ref([
  {
    id: 2,
    title: "开发者故事：从初学到精通",
    date: "2024-01-08",
    duration: "38:45",
    cover: "/src/assets/podcast-cover-2.jpg"
  },
  {
    id: 3,
    title: "技术分享：Web应用性能优化",
    date: "2023-12-28",
    duration: "42:15",
    cover: "/src/assets/podcast-cover-3.jpg"
  }
]);

// 播放状态
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);

// 播放控制
const togglePlay = () => {
  isPlaying.value = !isPlaying.value;
  // 这里应该有实际的音频控制逻辑
};

// 模拟获取播客详情数据
const fetchPodcastData = () => {
  // 这里可以替换为实际的API调用
  console.log('获取播客ID为', podcastId, '的详情');
};

onMounted(() => {
  fetchPodcastData();
});
</script>

<template>
  <div class="podcast-detail-container">
    <!-- 播客详情头部 -->
    <section class="podcast-header">
      <div class="podcast-cover">
        <img :src="podcast.cover" :alt="podcast.title" />
      </div>
      <div class="podcast-info">
        <div class="podcast-meta">
          <span class="podcast-date">{{ podcast.date }}</span>
          <span class="podcast-duration">{{ podcast.duration }}</span>
        </div>
        <h1 class="podcast-title">{{ podcast.title }}</h1>
        <p class="podcast-description">{{ podcast.description }}</p>
        
        <!-- 播放器控制 -->
        <div class="player-controls">
          <button class="play-button" @click="togglePlay">
            <i class="iconfont" :class="isPlaying ? 'icon-pause' : 'icon-play'"></i>
            {{ isPlaying ? '暂停' : '播放' }}
          </button>
          
          <!-- 播放进度条 -->
          <div class="progress-bar">
            <div class="progress" :style="{width: (currentTime / duration * 100) + '%'}"></div>
          </div>
          
          <!-- 播放时间 -->
          <div class="time-display">
            <span class="current-time">{{ currentTime }}</span>
            <span class="duration">{{ duration }}</span>
          </div>
        </div>
        
        <!-- 分享按钮 -->
        <div class="sharing-options">
          <button class="share-button">
            <i class="iconfont icon-share"></i> 分享
          </button>
          <button class="download-button">
            <i class="iconfont icon-download"></i> 下载
          </button>
        </div>
      </div>
    </section>
    
    <!-- 播客内容标签页 -->
    <section class="podcast-content">
      <div class="tabs">
        <button class="tab active">文字稿</button>
        <button class="tab">笔记</button>
        <button class="tab">资源链接</button>
      </div>
      
      <div class="tab-content">
        <div class="transcript">
          <h3>文字稿</h3>
          <p>大家好，欢迎收听我的播客节目。今天我们将深入探讨Vue 3的组合式API和响应式系统，分享一些实用的最佳实践。</p>
          <p>Vue 3的发布带来了许多新特性，其中组合式API是最重要的变化之一。它允许我们根据逻辑关注点组织代码，而不是按照选项类型。</p>
          <p>首先，让我们来看看组合式API的基本用法...</p>
          <p>在组件中，我们可以使用setup函数来替代之前的data、methods、computed等选项...</p>
          <p>接下来，让我们讨论一下响应式系统的工作原理...</p>
        </div>
      </div>
    </section>
    
    <!-- 相关推荐 -->
    <section class="related-podcasts">
      <h2>相关播客</h2>
      <div class="podcast-list">
        <div v-for="podcast in relatedPodcasts" :key="podcast.id" class="podcast-card">
          <div class="podcast-cover">
            <img :src="podcast.cover" :alt="podcast.title" />
            <div class="play-icon">
              <i class="iconfont icon-play"></i>
            </div>
            <span class="duration">{{ podcast.duration }}</span>
          </div>
          <div class="podcast-info">
            <h3 class="podcast-title">{{ podcast.title }}</h3>
            <p class="podcast-date">{{ podcast.date }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 评论区 -->
    <section class="comments-section">
      <h2>评论 (3)</h2>
      <div class="comment-form">
        <textarea placeholder="发表你的看法..."></textarea>
        <button>提交评论</button>
      </div>
      
      <div class="comments-list">
        <div class="comment">
          <div class="comment-avatar">
            <img src="/src/assets/avatar-1.jpg" alt="用户头像" />
          </div>
          <div class="comment-content">
            <div class="comment-header">
              <span class="comment-author">李明</span>
              <span class="comment-date">2024-01-16</span>
            </div>
            <p>非常感谢分享！组合式API确实比选项式API更灵活，我最近正在将我的项目迁移到Vue 3。</p>
          </div>
        </div>
        
        <div class="comment">
          <div class="comment-avatar">
            <img src="/src/assets/avatar-2.jpg" alt="用户头像" />
          </div>
          <div class="comment-content">
            <div class="comment-header">
              <span class="comment-author">王芳</span>
              <span class="comment-date">2024-01-15</span>
            </div>
            <p>能否再详细讲解一下如何在大型项目中组织组合函数？我们团队正在纠结这个问题。</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.podcast-detail-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* 播客头部样式 */
.podcast-header {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;
  margin-bottom: 40px;
}

.podcast-cover img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.podcast-meta {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  color: #666;
}

.podcast-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.podcast-description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 24px;
}

/* 播放器控制 */
.player-controls {
  margin-bottom: 24px;
}

.play-button {
  background: #3498db;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

.play-button:hover {
  background: #2980b9;
}

.progress-bar {
  height: 6px;
  background: #eee;
  border-radius: 3px;
  margin-bottom: 8px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: #3498db;
  border-radius: 3px;
  width: 30%; /* 示例值 */
}

.time-display {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #666;
}

/* 分享按钮 */
.sharing-options {
  display: flex;
  gap: 12px;
}

.share-button, .download-button {
  background: #f5f5f5;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.3s;
}

.share-button:hover, .download-button:hover {
  background: #e0e0e0;
}

/* 标签页 */
.podcast-content {
  margin-bottom: 40px;
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.tabs {
  display: flex;
  border-bottom: 1px solid #eee;
  margin-bottom: 24px;
}

.tab {
  padding: 12px 24px;
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
}

.tab.active {
  color: #3498db;
  font-weight: 600;
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 3px;
  background: #3498db;
}

.transcript p {
  margin-bottom: 16px;
  line-height: 1.6;
}

/* 相关播客 */
.related-podcasts {
  margin-bottom: 40px;
}

.related-podcasts h2 {
  font-size: 1.8rem;
  margin-bottom: 24px;
}

.podcast-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
}

.podcast-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
  cursor: pointer;
}

.podcast-card:hover {
  transform: translateY(-5px);
}

.podcast-card .podcast-cover {
  position: relative;
  height: 160px;
}

.podcast-card .podcast-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.podcast-card:hover .play-icon {
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

.podcast-card .podcast-info {
  padding: 16px;
}

.podcast-card .podcast-title {
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.podcast-card .podcast-date {
  color: #888;
  font-size: 0.9rem;
}

/* 评论区 */
.comments-section {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.comments-section h2 {
  font-size: 1.6rem;
  margin-bottom: 24px;
}

.comment-form {
  margin-bottom: 24px;
}

.comment-form textarea {
  width: 100%;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  height: 120px;
  resize: none;
  margin-bottom: 16px;
}

.comment-form button {
  background: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.comment {
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 16px;
}

.comment-avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.comment-author {
  font-weight: 600;
}

.comment-date {
  color: #888;
  font-size: 0.9rem;
}

.comment-content p {
  line-height: 1.5;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .podcast-header {
    grid-template-columns: 1fr;
  }
  
  .podcast-cover {
    max-width: 300px;
    margin: 0 auto;
  }
}
</style> 