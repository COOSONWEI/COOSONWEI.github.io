<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { MdPreview } from 'md-editor-v3';
import { useRouter, useRoute } from 'vue-router';
import 'md-editor-v3/lib/style.css';

const router = useRouter();
const route = useRoute();
const articleId = route.params.id;

// 文章数据
const article = ref({
  id: articleId,
  title: "终端代理配置指南",
  date: "2024-08-27",
  author: "Weikkxin",
  readTime: "5分钟",
  tags: ["终端", "代理", "配置"],
  coverImage: "",
});

// 文章内容
const markdownContent = ref(`
## 配置

这里如果还原还是没有用的话，那么可以尝试让终端走代理，

这里打开终端配置.zshrc,配置终端也可以使用本地代理（这里是临时代理，建议是使用临时代理，想用的时候就开启，不用的时候就不开启，而且只对当前打开的终端有效，不会影响整体的环境）

⚠️：不使用的时候记得关闭，不然下次可能会网络连接问题

\`\`\`bash
# 设置使用代理
alias setproxy = "export http_proxy=http://127.0.0.1:端口号/; export https_proxy=http://127.0.0.1:$端口号/; echo 'Set proxy successfully'"
# 设置取消使用代理
alias unsetproxy = "unset http_proxy; unset https_proxy; echo 'Unset proxy successfully'"
\`\`\`

这里根据不同的端口号进行\`端口号的修改\` 

设置好后执行\`source.zshrc\`允许当前配置

## 启动配置

这里我们设置的脚本的启动代码是 \`setproxy\` ，所以执行\`setproxy\`这个命令即可，成功后返回下面的内容

![截屏2024-08-27 14.58.50.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/1592412e-e2e6-47b3-8c88-40ad1f53f447/ba9398b6-ef89-48f1-bcd1-a00caf1b166e/%E6%88%AA%E5%B1%8F2024-08-27_14.58.50.png)

\`unsetproxy\` 关闭代理
`);

// 相关文章
const relatedArticles = ref([
  {
    id: 2,
    title: "Git常用命令速查",
    date: "2024-08-20"
  },
  {
    id: 3,
    title: "VSCode必备插件推荐",
    date: "2024-08-15"
  },
  {
    id: 4,
    title: "前端开发环境搭建指南",
    date: "2024-08-10"
  }
]);

// 返回上一页
const goBack = () => {
  router.back();
};

// 导航到相关文章
const navigateToArticle = (id) => {
  router.push(`/article/${id}`);
};

// 获取文章数据
const fetchArticleData = async () => {
  // 这里可以替换为实际的API调用
  console.log('获取文章数据:', articleId);
  // 模拟API调用
};

onMounted(() => {
  fetchArticleData();
  // 设置页面标题
  document.title = `${article.value.title} | Weikkxin's Blog`;
});
</script>

<template>
  <div class="article-container">
    <!-- 文章头部 -->
    <div class="article-header">
      <button class="back-button" @click="goBack">
        返回
      </button>
      
      <h1 class="article-title">{{ article.title }}</h1>
      
      <div class="article-meta">
        <div class="meta-item">
          <span>{{ article.date }}</span>
        </div>
        <div class="meta-item">
          <span>{{ article.author }}</span>
        </div>
        <div class="meta-item">
          <span>{{ article.readTime }}阅读</span>
        </div>
      </div>
      
      <div class="article-tags">
        <span v-for="(tag, index) in article.tags" :key="index" class="tag">
          {{ tag }}
        </span>
      </div>
    </div>
    
    <!-- 文章内容 -->
    <div class="article-content">
      <MdPreview 
        :modelValue="markdownContent" 
        theme="light"
        codeTheme="github"
        previewTheme="github"
        :previewOnly="true"
      />
    </div>
    
    <!-- 文章底部 -->
    <div class="article-footer">
      <!-- 分享按钮 -->
      <div class="share-buttons">
        <h3>分享文章</h3>
        <div class="share-icons">
          <a href="#" class="share-icon" title="微信分享">
            <span>微信</span>
          </a>
          <a href="#" class="share-icon" title="微博分享">
            <span>微博</span>
          </a>
          <a href="#" class="share-icon" title="复制链接">
            <span>复制</span>
          </a>
        </div>
      </div>
      
      <!-- 相关文章 -->
      <div class="related-articles">
        <h3>相关文章</h3>
        <ul>
          <li v-for="article in relatedArticles" :key="article.id" @click="navigateToArticle(article.id)">
            <span class="related-title">{{ article.title }}</span>
            <span class="related-date">{{ article.date }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.article-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

/* 文章头部样式 */
.article-header {
  margin-bottom: 40px;
}

.back-button {
  display: inline-flex;
  align-items: center;
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 0.9rem;
  padding: 8px 0;
  margin-bottom: 20px;
  cursor: pointer;
  transition: color 0.3s;
}

.back-button:hover {
  color: var(--primary-color);
}

.article-title {
  font-size: 2.5rem;
  line-height: 1.3;
  margin-bottom: 20px;
  color: var(--text-primary);
  font-weight: 600;
}

.article-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
}

.tag {
  background-color: var(--bg-secondary);
  color: var(--text-secondary);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  transition: background-color 0.3s, color 0.3s;
}

.tag:hover {
  background-color: var(--primary-color);
  color: white;
}

/* 文章内容样式 */
.article-content {
  margin-bottom: 60px;
  line-height: 1.8;
  color: var(--text-primary);
}

/* 自定义Markdown样式 */
:deep(.md-preview) {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

:deep(.md-preview h1),
:deep(.md-preview h2),
:deep(.md-preview h3),
:deep(.md-preview h4),
:deep(.md-preview h5),
:deep(.md-preview h6) {
  margin-top: 1.5em;
  margin-bottom: 0.8em;
  font-weight: 600;
  line-height: 1.3;
  color: var(--text-primary);
}

:deep(.md-preview h2) {
  font-size: 1.8rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.3em;
}

:deep(.md-preview h3) {
  font-size: 1.5rem;
}

:deep(.md-preview p) {
  margin-bottom: 1.5em;
  line-height: 1.8;
}

:deep(.md-preview a) {
  color: #3498db;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s;
}

:deep(.md-preview a:hover) {
  border-color: #3498db;
}

:deep(.md-preview blockquote) {
  border-left: 4px solid var(--primary-color);
  padding: 0.8em 1em;
  background-color: var(--bg-secondary);
  margin: 1.5em 0;
  color: var(--text-secondary);
}

:deep(.md-preview code) {
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 0.9em;
}

:deep(.md-preview pre) {
  margin: 1.5em 0;
  border-radius: 6px;
  overflow: auto;
}

:deep(.md-preview pre code) {
  background: none;
  padding: 0;
  font-size: 0.9em;
  line-height: 1.5;
}

:deep(.md-preview img) {
  max-width: 100%;
  border-radius: 8px;
  margin: 1.5em 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

:deep(.md-preview ul),
:deep(.md-preview ol) {
  padding-left: 2em;
  margin: 1em 0;
}

:deep(.md-preview li) {
  margin-bottom: 0.5em;
}

/* 文章底部样式 */
.article-footer {
  border-top: 1px solid var(--border-color);
  padding-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.share-buttons h3,
.related-articles h3 {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: var(--text-primary);
  font-weight: 500;
}

.share-icons {
  display: flex;
  gap: 15px;
}

.share-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 20px;
  background-color: var(--bg-secondary);
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s;
}

.share-icon:hover {
  background-color: var(--primary-color);
  color: white;
  transform: translateY(-3px);
}

.related-articles ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.related-articles li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid var(--border-color);
  cursor: pointer;
  transition: all 0.3s;
}

.related-articles li:hover {
  padding-left: 8px;
  color: var(--primary-color);
}

.related-title {
  font-weight: 500;
}

.related-date {
  color: var(--text-tertiary);
  font-size: 0.85rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .article-title {
    font-size: 2rem;
  }
  
  .article-footer {
    grid-template-columns: 1fr;
  }
  
  .share-buttons {
    margin-bottom: 30px;
  }
}
</style>
