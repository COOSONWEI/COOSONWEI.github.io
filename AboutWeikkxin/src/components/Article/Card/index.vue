<script setup lang="ts">

    const props = defineProps({
        time: {
            type: String,
            default: '12.06.2024 12:06'
        },
        title: {
            type: String,
            default: '文章标题'
        },
        introduce: {
            type: String,
            default: '文章介绍'
        }
    })
   
</script>

<template>
    <div class="flex flex-col justify-start">
         <!-- 文章标题 -->
         <RouterLink to="/article"> <p class="text-xl text-blue-700 underline" >{{ props.title }}</p> </RouterLink>
        <!-- 文章更新时间 -->
        <p class="text-gray-400 font-bold mt-3">{{props.time}}</p>
        <!-- 文章介绍 -->
        <span class="text-[#444] line-clamp-3">{{props.introduce}}</span>
    </div>
</template>