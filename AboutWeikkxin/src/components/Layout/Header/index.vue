<template>
   <div class="flex flex-col items-center">
            <div class="flex flex-col justify-center items-center">
                <h1 class="HeadTitle "> 嗨！这里是 Weikkxin，我将通过文章和视频分享我的快乐！</h1>
                <p>喜欢探索新技术，对编码和电气相关知识感兴趣</p>
            </div>

            <!-- 导航栏 -->
            <div class="mt-5 text-blue-500 grid grid-cols-4 gap-5 ">
                <button @click="goBackHome">文章</button>
                <button>归档</button>
                <button>作品</button>
                <button>关于我</button>
            </div>
     </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBackHome = () => {
    router.push('/');
}
</script>

<style lang="scss" scoped></style>