<template>
    <div class="header">
        <div class="container">
            <!-- 导航栏 -->
            <ul class="menu">
                <li class="active"><a href="/"><span>首页</span></a></li>
                <li><a href=""><span>文章</span></a></li>
                <li><a href=""><span>视频</span></a></li>
                <li><a href=""><span>关于我</span></a></li>
            </ul>
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