<script setup lang="ts">
import ArticleCard from '@/components/Article/Card/index.vue'
import 'md-editor-v3/lib/preview.css';
</script>

<template>
    <div class="flex flex-col w-full items-center">
        <div class="flex w-3/5 mt-5">
            <ArticleCard title="终端下载东西慢，怎么办?" introduce="本篇文章介绍了如何将本地「魔法」网络，代理到终端，让终端走代理进行我们日常开发中的下载。"></ArticleCard>
        </div>
        <!-- <MdPreview id="1" :modelValue="markdownContent" ></MdPreview> -->
    </div>
</template>

<style>
.HeadTitle {
    font-size: 24px !important;
    color: #00006D !important;
    font-weight: 900 !important;
    font-family: 'Merriweather', serif;
    display: inline-block;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    margin: 0 auto;
}
</style>

