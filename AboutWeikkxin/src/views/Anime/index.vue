<script setup>
import { ref, computed, onMounted } from 'vue';

// 动漫数据
const animeCollection = ref([
    {
        id: 1,
        title: "进击的巨人 最终季",
        originalTitle: "進撃の巨人 The Final Season",
        image: "/src/assets/anime-1.jpg",
        type: "TV",
        episodes: 28,
        year: 2020,
        season: "冬",
        status: "已完结",
        genres: ["动作", "奇幻", "战争"],
        rating: 9.2,
        description: "从1900多年前开始，巨人就开始不断地消灭人类，为了躲避巨人残忍的捕食，人类建造了三座高50米的墙壁，虽然平安了一个世纪，墙壁却在某一天被超大型巨人破坏...艾伦·耶格尔为了保护人类世界，与伙伴们一同踏上复仇与救赎之路。",
        comment: "引人深思的结局和扣人心弦的故事，是我心目中史诗级别的作品。",
        watchStatus: "已看完"
    },
    {
        id: 2,
        title: "鬼灭之刃",
        originalTitle: "鬼滅の刃",
        image: "/src/assets/anime-2.jpg",
        type: "TV",
        episodes: 26,
        year: 2019,
        season: "春",
        status: "已完结",
        genres: ["动作", "奇幻", "历史"],
        rating: 8.9,
        description: "时值日本大正时期，名叫灶门炭治郎的平凡农村少年，靠着卖炭维持生计。某天他下山去卖炭，回家时天色已晚，好心的猎户留他住了一晚。第二天他回到家中，却发现全家都遭到了鬼的袭击。",
        comment: "精美的画面和战斗场景，呼吸法的设定很有新意。",
        watchStatus: "已看完"
    },
    {
        id: 3,
        title: "间谍过家家",
        originalTitle: "SPY×FAMILY",
        image: "/src/assets/anime-3.jpg",
        type: "TV",
        episodes: 25,
        year: 2022,
        season: "春",
        status: "连载中",
        genres: ["喜剧", "动作", "日常"],
        rating: 9.0,
        description: "为了潜入名校、接近某位政要，一名间谍不得不组建家庭，但女儿竟是能读心的超能力者，妻子则是杀手。互相隐瞒身份的三人，共同组成了虚假的家庭。在完成任务的同时，他们将共同经历一段温馨快乐的家庭生活。",
        comment: "轻松幽默的家庭喜剧，安妮亚太可爱了！",
        watchStatus: "追剧中"
    },
    {
        id: 4,
        title: "86-不存在的战区-",
        originalTitle: "86―エイティシックス―",
        image: "/src/assets/anime-4.jpg",
        type: "TV",
        episodes: 23,
        year: 2021,
        season: "春",
        status: "已完结",
        genres: ["科幻", "军事", "战争"],
        rating: 8.7,
        description: "圣玛格诺利亚共和国表面上宣称国内没有任何牺牲，但实际上他们将被歧视的`有色头发`群体—`86`驱逐到了特殊战区,强制他们对抗帝国的1无人机1军队。辛与八六们通过远程通信系统相遇,在战场上并肩作战。",
        comment: "反战题材的佳作，对种族歧视的思考很深刻。",
        watchStatus: "已看完"
    },
    {
        id: 5,
        title: "薇薇 -萤石眼之歌-",
        originalTitle: "Vivy -Fluorite Eye's Song-",
        image: "/src/assets/anime-5.jpg",
        type: "TV",
        episodes: 13,
        year: 2021,
        season: "春",
        status: "已完结",
        genres: ["科幻", "动作", "音乐"],
        rating: 8.6,
        description: "在一座主题乐园内，AI歌手薇薇每天都在不断歌唱，希望有一天能在主舞台上表演。某天，一个自称来自未来100年后的AI出现在她面前，告诉她未来人工智能将反抗人类，他们必须一同阻止这场灾难。",
        comment: "结合AI伦理与音乐的创新作品，剧情紧凑而不失深度。",
        watchStatus: "已看完"
    },
    {
        id: 6,
        title: "宝石之国",
        originalTitle: "宝石の国",
        image: "/src/assets/anime-6.jpg",
        type: "TV",
        episodes: 12,
        year: 2017,
        season: "秋",
        status: "已完结",
        genres: ["奇幻", "动作", "神秘"],
        rating: 8.8,
        description: "遥远的未来，地球上诞生了被称为`宝石`的无性生命体。28位宝石和被称为`师父`的僧侣在一个岛上生活。他们与试图将宝石抓回月球作为装饰品的月人展开对抗。主角磷是宝石中的一员，在与月人的战斗中找寻着自己的价值。",
        comment: "3D动画的巅峰之作，独特的世界观和角色设计令人印象深刻。",
        watchStatus: "已看完"
    },
    {
        id: 7,
        title: "莉可丽丝",
        originalTitle: "リコリス・リコイル",
        image: "/src/assets/anime-7.jpg",
        type: "TV",
        episodes: 13,
        year: 2022,
        season: "夏",
        status: "已完结",
        genres: ["动作", "喜剧", "日常"],
        rating: 8.5,
        description: "在和平的背后，有一个名为`DA`的秘密组织，雇佣着名为`莉可丽丝`的女性特工。锦木千束和井之上滴是其中的两位特工，她们开设一家咖啡厅作为掩护，同时接受各种任务。",
        comment: "充满活力的动作喜剧，锦木千束是我最喜欢的角色之一。",
        watchStatus: "已看完"
    },
    {
        id: 8,
        title: "铳梦",
        originalTitle: "銃夢",
        image: "/src/assets/anime-8.jpg",
        type: "OVA",
        episodes: 2,
        year: 1993,
        season: "",
        status: "已完结",
        genres: ["科幻", "赛博朋克", "动作"],
        rating: 8.3,
        description: "遥远的未来，战争摧毁了大部分的地球。在空中都市扎雷姆的阴影下，依代医生在垃圾场中发现了一个残破的女性机器人。他修复了她，并给她起名为加利。加利虽然失去了记忆，但她的身体保留着强大的战斗能力。",
        comment: "经典的赛博朋克作品，虽然只有OVA，但对我影响深远。",
        watchStatus: "已看完"
    },
]);

// 筛选条件
const filters = ref({
    watchStatus: 'all',
    genre: 'all',
    year: 'all',
    sort: 'rating' // 默认按评分排序
});

// 观看状态选项
const watchStatusOptions = [
    { value: 'all', label: '全部' },
    { value: '已看完', label: '已看完' },
    { value: '追剧中', label: '追剧中' },
    { value: '待观看', label: '待观看' },
    { value: '已弃剧', label: '已弃剧' }
];

// 从数据中提取所有唯一的流派
const allGenres = computed(() => {
    const genres = new Set();
    genres.add('all');
    
    animeCollection.value.forEach(anime => {
        anime.genres.forEach(genre => {
            genres.add(genre);
        });
    });
    
    return Array.from(genres).map(genre => {
        return { value: genre, label: genre === 'all' ? '全部' : genre };
    });
});

// 从数据中提取所有唯一的年份
const allYears = computed(() => {
    const years = new Set();
    years.add('all');
    
    animeCollection.value.forEach(anime => {
        years.add(anime.year);
    });
    
    return Array.from(years)
        .sort((a, b) => b - a) // 降序排列年份
        .map(year => {
            return { value: year, label: year === 'all' ? '全部' : year };
        });
});

// 筛选后的动漫
const filteredAnime = computed(() => {
    // 先过滤
    let result = animeCollection.value.filter(anime => {
        let matchWatchStatus = filters.value.watchStatus === 'all' || anime.watchStatus === filters.value.watchStatus;
        let matchGenre = filters.value.genre === 'all' || anime.genres.includes(filters.value.genre);
        let matchYear = filters.value.year === 'all' || anime.year === filters.value.year;
        
        return matchWatchStatus && matchGenre && matchYear;
    });
    
    // 再排序
    if (filters.value.sort === 'rating') {
        result.sort((a, b) => b.rating - a.rating);
    } else if (filters.value.sort === 'year') {
        result.sort((a, b) => b.year - a.year);
    } else if (filters.value.sort === 'title') {
        result.sort((a, b) => a.title.localeCompare(b.title));
    }
    
    return result;
});

// 选择的动漫详情
const selectedAnime = ref(null);
const showDetail = ref(false);

// 打开详情弹窗
const openDetail = (anime) => {
    selectedAnime.value = anime;
    showDetail.value = true;
    document.body.style.overflow = 'hidden'; // 防止背景滚动
};

// 关闭详情弹窗
const closeDetail = () => {
    showDetail.value = false;
    document.body.style.overflow = 'auto';
};

// 更改筛选条件
const updateFilter = (type, value) => {
    filters.value[type] = value;
};

onMounted(() => {
    // 可以在这里加载动漫数据
    console.log('动漫收藏页面加载完成');
});
</script>

<template>
    <div class="anime-container">
        <!-- 页面标题 -->
        <div class="page-header">
            <h1 class="page-title">我的动漫收藏</h1>
            <p class="page-description">这里是我收藏的动漫作品，记录了我的观影体验和感想</p>
        </div>
        
        <!-- 筛选控件 -->
        <div class="filter-section">
            <div class="filter-row">
                <div class="filter-group">
                    <label>观看状态：</label>
                    <div class="filter-options">
                        <button 
                            v-for="option in watchStatusOptions" 
                            :key="option.value"
                            :class="['filter-btn', { active: filters.watchStatus === option.value }]"
                            @click="updateFilter('watchStatus', option.value)"
                        >
                            {{ option.label }}
                        </button>
                    </div>
                </div>
                
                <div class="filter-group">
                    <label>类型：</label>
                    <div class="filter-options">
                        <button 
                            v-for="option in allGenres" 
                            :key="option.value"
                            :class="['filter-btn', { active: filters.genre === option.value }]"
                            @click="updateFilter('genre', option.value)"
                        >
                            {{ option.label }}
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="filter-row">
                <div class="filter-group">
                    <label>年份：</label>
                    <div class="filter-options">
                        <button 
                            v-for="option in allYears" 
                            :key="option.value"
                            :class="['filter-btn', { active: filters.year === option.value }]"
                            @click="updateFilter('year', option.value)"
                        >
                            {{ option.label }}
                        </button>
                    </div>
                </div>
                
                <div class="sort-control">
                    <label>排序：</label>
                    <select v-model="filters.sort">
                        <option value="rating">按评分</option>
                        <option value="year">按年份</option>
                        <option value="title">按标题</option>
                    </select>
                </div>
            </div>
        </div>
        
        <!-- 动漫卡片列表 -->
        <div class="anime-grid" v-if="filteredAnime.length > 0">
            <div 
                v-for="anime in filteredAnime" 
                :key="anime.id" 
                class="anime-card"
                @click="openDetail(anime)"
            >
                <div class="anime-cover">
                    <img :src="anime.image" :alt="anime.title" />
                    <div class="anime-overlay">
                        <div class="anime-rating">{{ anime.rating }}</div>
                        <div class="anime-status">{{ anime.watchStatus }}</div>
                    </div>
                </div>
                <div class="anime-info">
                    <h3 class="anime-title">{{ anime.title }}</h3>
                    <div class="anime-meta">
                        <span class="anime-year">{{ anime.year }}</span>
                        <span class="anime-episodes">共{{ anime.episodes }}集</span>
                    </div>
                    <div class="anime-genres">
                        <span 
                            v-for="(genre, index) in anime.genres" 
                            :key="index" 
                            class="genre-tag"
                        >
                            {{ genre }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 无结果提示 -->
        <div class="no-results" v-else>
            <div class="no-results-icon">🔍</div>
            <h3>没有找到符合条件的动漫</h3>
            <p>请尝试更改筛选条件</p>
        </div>
        
        <!-- 动漫详情弹窗 -->
        <div class="anime-modal" v-if="showDetail" @click.self="closeDetail">
            <div class="modal-content" v-if="selectedAnime">
                <button class="close-btn" @click="closeDetail">×</button>
                <div class="modal-left">
                    <div class="modal-cover">
                        <img :src="selectedAnime.image" :alt="selectedAnime.title" />
                    </div>
                    <div class="modal-stats">
                        <div class="stat-item">
                            <div class="stat-label">类型</div>
                            <div class="stat-value">{{ selectedAnime.type }}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-label">评分</div>
                            <div class="stat-value rating">{{ selectedAnime.rating }}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-label">集数</div>
                            <div class="stat-value">{{ selectedAnime.episodes }}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-label">年份</div>
                            <div class="stat-value">{{ selectedAnime.year }}
                                <span v-if="selectedAnime.season">{{ selectedAnime.season }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-right">
                    <div class="modal-header">
                        <h2 class="modal-title">{{ selectedAnime.title }}</h2>
                        <div class="modal-original-title">{{ selectedAnime.originalTitle }}</div>
                        <div class="modal-status">
                            <span>{{ selectedAnime.status }}</span>
                            <span class="watch-status">{{ selectedAnime.watchStatus }}</span>
                        </div>
                    </div>
                    
                    <div class="modal-genres">
                        <span 
                            v-for="(genre, index) in selectedAnime.genres" 
                            :key="index" 
                            class="genre-tag"
                        >
                            {{ genre }}
                        </span>
                    </div>
                    
                    <div class="modal-description">
                        <h3>简介</h3>
                        <p>{{ selectedAnime.description }}</p>
                    </div>
                    
                    <div class="modal-comment">
                        <h3>我的评价</h3>
                        <p>{{ selectedAnime.comment }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* 基础样式 */
.anime-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
}

.page-header {
    text-align: center;
    margin-bottom: 40px;
}

.page-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 10px;
    background: linear-gradient(45deg, var(--accent-color, #9e80ff), var(--accent-secondary, #ff6b95));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.page-description {
    font-size: 1.1rem;
    color: var(--text-secondary, #666);
    max-width: 700px;
    margin: 0 auto;
}

/* 筛选区域样式 */
.filter-section {
    background: var(--bg-secondary, #f5f5f5);
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 30px;
}

.filter-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}

.filter-row:last-child {
    margin-bottom: 0;
}

.filter-group {
    display: flex;
    align-items: center;
    gap: 10px;
}

.filter-group label {
    font-weight: 600;
    color: var(--text-primary, #333);
    min-width: 70px;
}

.filter-options {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.filter-btn {
    background: var(--bg-primary, #fff);
    border: 1px solid var(--border-color, #eee);
    border-radius: 20px;
    padding: 6px 12px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s;
}

.filter-btn:hover {
    background: var(--bg-hover, #e0e0e0);
}

.filter-btn.active {
    background: linear-gradient(45deg, var(--accent-color, #9e80ff), var(--accent-secondary, #ff6b95));
    color: white;
    border-color: transparent;
}

.sort-control {
    display: flex;
    align-items: center;
    gap: 10px;
}

.sort-control label {
    font-weight: 600;
    color: var(--text-primary, #333);
}

.sort-control select {
    padding: 8px 12px;
    border: 1px solid var(--border-color, #eee);
    border-radius: 8px;
    background: var(--bg-primary, #fff);
    font-size: 0.95rem;
    color: var(--text-primary, #333);
}

/* 动漫网格样式 */
.anime-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 25px;
}

.anime-card {
    background: var(--bg-primary, #fff);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s;
    cursor: pointer;
}

.anime-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 25px rgba(158, 128, 255, 0.15);
}

.anime-cover {
    position: relative;
    height: 300px;
    overflow: hidden;
}

.anime-cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
}

.anime-card:hover .anime-cover img {
    transform: scale(1.05);
}

.anime-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
}

.anime-rating {
    align-self: flex-end;
    background: rgba(0, 0, 0, 0.7);
    color: #ffcc00;
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: 600;
}

.anime-status {
    align-self: flex-start;
    background: var(--accent-color, #9e80ff);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.8rem;
}

.anime-info {
    padding: 15px;
}

.anime-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--text-primary, #333);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 2.8em;
}

.anime-meta {
    display: flex;
    justify-content: space-between;
    color: var(--text-secondary, #666);
    font-size: 0.9rem;
    margin-bottom: 10px;
}

.anime-genres {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.genre-tag {
    background: rgba(158, 128, 255, 0.1);
    color: var(--accent-color, #9e80ff);
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 0.8rem;
}

/* 无结果提示 */
.no-results {
    text-align: center;
    padding: 60px 20px;
    background: var(--bg-secondary, #f5f5f5);
    border-radius: 16px;
}

.no-results-icon {
    font-size: 3rem;
    margin-bottom: 20px;
    opacity: 0.5;
}

.no-results h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: var(--text-primary, #333);
}

.no-results p {
    color: var(--text-secondary, #666);
}

/* 详情弹窗 */
.anime-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    backdrop-filter: blur(5px);
}

.modal-content {
    display: flex;
    max-width: 1000px;
    width: 90%;
    max-height: 90vh;
    background: var(--bg-primary, #fff);
    border-radius: 16px;
    overflow: hidden;
    position: relative;
}

.close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    z-index: 10;
}

.close-btn:hover {
    background: rgba(0, 0, 0, 0.7);
}

.modal-left {
    width: 300px;
    background: var(--bg-secondary, #f5f5f5);
}

.modal-cover {
    height: 400px;
}

.modal-cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.modal-stats {
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
}

.stat-item {
    text-align: center;
}

.stat-label {
    font-size: 0.9rem;
    color: var(--text-secondary, #666);
    margin-bottom: 5px;
}

.stat-value {
    font-weight: 600;
    color: var(--text-primary, #333);
}

.stat-value.rating {
    color: #ffcc00;
}

.modal-right {
    flex: 1;
    padding: 30px;
    overflow-y: auto;
}

.modal-header {
    margin-bottom: 20px;
}

.modal-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 5px;
    color: var(--text-primary, #333);
}

.modal-original-title {
    font-size: 1.1rem;
    color: var(--text-secondary, #666);
    margin-bottom: 10px;
}

.modal-status {
    display: flex;
    gap: 15px;
    font-size: 0.95rem;
    color: var(--text-secondary, #666);
}

.watch-status {
    color: var(--accent-color, #9e80ff);
    font-weight: 500;
}

.modal-genres {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 25px;
}

.modal-description, .modal-comment {
    margin-bottom: 25px;
}

.modal-description h3, .modal-comment h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: var(--text-primary, #333);
}

.modal-description p, .modal-comment p {
    line-height: 1.6;
    color: var(--text-secondary, #666);
}

/* 响应式设计 */
@media (max-width: 900px) {
    .filter-row {
        flex-direction: column;
        gap: 15px;
    }
    
    .filter-group {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .sort-control {
        align-self: flex-start;
    }
    
    .modal-content {
        flex-direction: column;
        overflow-y: auto;
    }
    
    .modal-left {
        width: 100%;
        display: flex;
    }
    
    .modal-cover {
        width: 40%;
        height: auto;
    }
    
    .modal-stats {
        width: 60%;
    }
}

@media (max-width: 600px) {
    .modal-left {
        flex-direction: column;
    }
    
    .modal-cover, .modal-stats {
        width: 100%;
    }
    
    .anime-grid {
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }
    
    .anime-cover {
        height: 220px;
    }
}
</style> 