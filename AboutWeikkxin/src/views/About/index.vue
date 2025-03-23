<script setup lang="ts">
import { ref, onMounted } from 'vue';

// 个人技能数据
const skills = ref([
  { name: "Vue.js", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "TypeScript", level: 75 },
  { name: "HTML/CSS", level: 85 },
  { name: "Node.js", level: 70 },
  { name: "React", level: 65 },
  { name: "UI/UX设计", level: 60 }
]);

// 工作经历
const experiences = ref([
  {
    title: "前端开发工程师",
    company: "XX科技有限公司",
    period: "2022年 - 至今",
    description: "负责公司核心产品的前端开发与维护，使用Vue 3和TypeScript构建高性能、可扩展的Web应用。参与产品需求分析、技术选型和架构设计。"
  },
  {
    title: "Web开发实习生",
    company: "XX互联网公司",
    period: "2021年 - 2022年",
    description: "参与多个Web项目的开发，使用Vue.js构建用户界面，与后端团队协作完成功能实现。学习并实践前端工程化、组件化开发。"
  }
]);

// 教育背景
const education = ref({
  university: "XX大学",
  degree: "计算机科学与技术",
  period: "2018年 - 2022年"
});

// 个人兴趣数据
const interests = ref([
    { name: "动漫观看", icon: "🎬", description: "喜欢各类动漫，尤其是科幻、奇幻和赛博朋克题材" },
    { name: "角色设计", icon: "🎨", description: "业余爱好绘画，尝试设计原创二次元角色" },
    { name: "前端开发", icon: "💻", description: "热爱Web开发，对Vue、React等前端框架有浓厚兴趣" },
    { name: "游戏开发", icon: "🎮", description: "正在学习游戏开发，希望能创作与动漫相关的游戏" }
]);

// 技能数据 - 编程相关
const programmingSkills = ref([
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Vue.js", level: 88 },
    { name: "React", level: 70 },
    { name: "TypeScript", level: 75 },
    { name: "Node.js", level: 65 }
]);

// 技能数据 - 创意相关
const creativeSkills = ref([
    { name: "角色设计", level: 75 },
    { name: "UI设计", level: 80 },
    { name: "插画创作", level: 70 },
    { name: "视频剪辑", level: 60 }
]);

// 时间线数据
const timeline = ref([
    {
        year: 2023,
        title: "个人博客上线",
        description: "创建了这个融合技术与二次元元素的个人博客，记录我的学习历程和创作分享。"
    },
    {
        year: 2022,
        title: "开始学习角色设计",
        description: "受动漫启发，开始系统学习二次元角色设计和数字绘画，开启了创作之旅。"
    },
    {
        year: 2021,
        title: "深入前端开发",
        description: "专注于Vue和React生态系统的学习，构建了多个个人项目，提升了技术能力。"
    },
    {
        year: 2020,
        title: "开始编程之旅",
        description: "正式接触编程，学习Web开发基础，对构建交互式网站产生了浓厚兴趣。"
    }
]);

// FAQ数据
const faqs = ref([
    {
        question: "你是如何开始对二次元文化感兴趣的？",
        answer: "中学时期接触了《进击的巨人》和《命运石之门》等作品，被其精彩的故事和深刻的主题所吸引，从此进入了二次元世界。随着时间推移，这种兴趣不仅没有减弱，反而促使我开始学习角色设计和插画创作。"
    },
    {
        question: "为什么选择将技术与二次元元素结合？",
        answer: "我认为技术和创意是可以完美融合的。作为一名开发者，我希望将自己的技术能力与对二次元文化的热爱结合起来，创造出独特的数字体验。这个博客就是这种尝试的起点。"
    },
    {
        question: "你未来的创作计划是什么？",
        answer: "我计划继续提升自己的技术和创意能力，未来希望能开发一款融合我原创角色的小型游戏或交互式故事。同时，会持续在博客上分享我的学习心得和创作过程。"
    }
]);

// 随机名言
const quotes = [
    "「努力不一定成功，但放弃一定失败」",
    "「梦想不会逃跑，逃跑的是缺乏追梦的勇气」",
    "「在二次元中寻找灵感，在现实中创造价值」",
    "「成功的路上没有捷径，只有不断的学习和尝试」"
];
const randomQuote = ref(quotes[Math.floor(Math.random() * quotes.length)]);

// 页面动画效果
onMounted(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        observer.observe(element);
    });
    
    // 定时切换名言
    setInterval(() => {
        randomQuote.value = quotes[Math.floor(Math.random() * quotes.length)];
    }, 10000);
});
</script>

<template>
  <div class="about-container">
    <!-- 个人简介区域 -->
    <section class="profile-section">
      <div class="profile-image">
        <img src="" alt="韦可鑫的照片" />
      </div>
      <div class="profile-content">
        <h1>韦可鑫</h1>
        <p class="subtitle">前端开发者 / 播客创作者</p>
        
        <div class="contact-info">
          <div class="contact-item">
            <i class="iconfont icon-email"></i>
            <span>weikkxin@example.com</span>
          </div>
          <div class="contact-item">
            <i class="iconfont icon-location"></i>
            <span>北京, 中国</span>
          </div>
        </div>
        
        <div class="social-links">
          <a href="#" class="social-link" title="GitHub">
            <i class="iconfont icon-github"></i>
          </a>
          <a href="#" class="social-link" title="微博">
            <i class="iconfont icon-weibo"></i>
          </a>
          <a href="#" class="social-link" title="知乎">
            <i class="iconfont icon-zhihu"></i>
          </a>
          <a href="#" class="social-link" title="B站">
            <i class="iconfont icon-bilibili"></i>
          </a>
        </div>
      </div>
    </section>
    
    <!-- 关于我的故事 -->
    <section class="story-section">
      <h2>关于我</h2>
      <div class="story-content">
        <p>嗨，我是韦可鑫，一名充满热情的前端开发者和技术分享者。我热爱编程、设计和分享知识。</p>
        
        <p>我的编程之旅始于大学时期，当我第一次接触到网页开发时，就被其创造性和可能性所吸引。毕业后，我逐渐专注于前端开发领域，不断学习新技术和最佳实践。</p>
        
        <p>除了编写代码，我还喜欢录制技术播客，分享我在开发过程中的经验和思考。我相信知识分享是学习的最佳方式之一，也是促进技术社区发展的重要途径。</p>
        
        <p>在这个个人网站上，你可以找到我的技术文章、播客节目以及一些个人项目。希望我的内容能对你有所帮助！</p>
      </div>
    </section>
    
    <!-- 技能区域 -->
    <section class="skills-section">
      <h2>技能 & 专长</h2>
      <div class="skills-content">
        <div v-for="skill in skills" :key="skill.name" class="skill-item">
          <div class="skill-info">
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-level">{{ skill.level }}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" :style="{width: `${skill.level}%`}"></div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 工作经历 -->
    <section class="experience-section">
      <h2>工作经历</h2>
      <div class="timeline">
        <div v-for="(exp, index) in experiences" :key="index" class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3>{{ exp.title }}</h3>
            <div class="timeline-info">
              <span class="company">{{ exp.company }}</span>
              <span class="period">{{ exp.period }}</span>
            </div>
            <p>{{ exp.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 教育背景 -->
    <section class="education-section">
      <h2>教育背景</h2>
      <div class="education-card">
        <i class="iconfont icon-education"></i>
        <div class="education-info">
          <h3>{{ education.university }}</h3>
          <p class="degree">{{ education.degree }}</p>
          <p class="period">{{ education.period }}</p>
        </div>
      </div>
    </section>
    
    <!-- 联系我区域 -->
    <section class="contact-section">
      <h2>联系我</h2>
      <p class="contact-intro">如果你有任何问题、合作提议，或者只是想打个招呼，请随时联系我！</p>
      
      <div class="contact-form">
        <div class="form-group">
          <label for="name">姓名</label>
          <input type="text" id="name" placeholder="请输入您的姓名" />
        </div>
        
        <div class="form-group">
          <label for="email">邮箱</label>
          <input type="email" id="email" placeholder="请输入您的邮箱" />
        </div>
        
        <div class="form-group">
          <label for="message">留言</label>
          <textarea id="message" rows="5" placeholder="请输入您的留言"></textarea>
        </div>
        
        <button class="submit-button">发送留言</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* 通用标题样式 */
section h2 {
  font-size: 2rem;
  position: relative;
  margin-bottom: 30px;
  padding-bottom: 10px;
}

section h2::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 60px;
  height: 3px;
  background-color: #3498db;
}

section {
  margin-bottom: 60px;
}

/* 个人简介区域 */
.profile-section {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 40px;
  margin-bottom: 60px;
}

.profile-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.profile-content h1 {
  font-size: 2.8rem;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 24px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  color: #555;
}

.contact-item i {
  font-size: 1.2rem;
  color: #3498db;
}

.social-links {
  display: flex;
  gap: 16px;
}

.social-link {
  width: 40px;
  height: 40px;
  background: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-size: 1.2rem;
  transition: all 0.3s;
}

.social-link:hover {
  background: #3498db;
  color: white;
  transform: translateY(-3px);
}

/* 关于我的故事 */
.story-content {
  line-height: 1.8;
  color: #444;
}

.story-content p {
  margin-bottom: 16px;
}

/* 技能区域 */
.skills-content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
}

.skill-item {
  margin-bottom: 16px;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}

.skill-bar {
  height: 8px;
  background: #eee;
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: #3498db;
  border-radius: 4px;
}

/* 工作经历 */
.timeline {
  position: relative;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 10px;
  top: 0;
  height: 100%;
  width: 2px;
  background: #eee;
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
}

.timeline-dot {
  position: absolute;
  left: -40px;
  top: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #3498db;
  border: 3px solid white;
  box-shadow: 0 0 0 2px #3498db;
}

.timeline-content h3 {
  font-size: 1.3rem;
  margin-bottom: 8px;
}

.timeline-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  color: #666;
  font-size: 0.95rem;
}

.timeline-content p {
  color: #555;
  line-height: 1.6;
}

/* 教育背景 */
.education-card {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background: #f9f9f9;
  padding: 24px;
  border-radius: 10px;
}

.education-card i {
  font-size: 2.5rem;
  color: #3498db;
}

.education-info h3 {
  font-size: 1.3rem;
  margin-bottom: 8px;
}

.education-info .degree {
  color: #555;
  margin-bottom: 4px;
}

.education-info .period {
  color: #666;
  font-size: 0.95rem;
}

/* 联系我区域 */
.contact-intro {
  text-align: center;
  margin-bottom: 30px;
  color: #555;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #444;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3498db;
}

.submit-button {
  background: #3498db;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-button:hover {
  background: #2980b9;
}

/* 响应式设计 */
@media (max-width: 900px) {
  .profile-section {
    grid-template-columns: 1fr;
  }
  
  .profile-image {
    max-width: 300px;
    margin: 0 auto;
  }
  
  .skills-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .timeline-info {
    flex-direction: column;
    gap: 4px;
  }
}
</style> 