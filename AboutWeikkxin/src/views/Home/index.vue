<script setup lang="ts">
import 'md-editor-v3/lib/preview.css';
import '@/styles/index.css';
import '@/styles/icon/iconfont.css';
import Swiper from 'swiper';
import 'swiper/css';

// 首页新闻轮播
var mySwiper1 = new Swiper('.index-project .swiper', {
    autoplay: false,
    speed: 800,
    autoHeight: true,
    loop: true,
    pagination: {
        el: '.index-project .swiper-pagination',
        clickable: true
    },
    on: {
        slideChangeTransitionEnd: function () {
            // 给焦点轮播图添加滚动字幕效果
            $('.index-project .akiswiper .desc').removeClass('active')
            $('.index-project .akiswiper .swiper-slide-active .desc').addClass('active')

            // 给焦点轮播图添加对应的标题和日期
            $('.index-project .project-aki-time').html($('.index-project .swiper-slide-active .hidden-time').html())
            $('.index-project .project-aki-title').html($('.index-project .swiper-slide-active .hidden-title').html())
        },
    },
});


</script>

<template>
    <!-- 个人介绍页 -->
    <div class="index-role">

        <div class="index-role-zs-right">
            <!-- 左侧背景 -->
            <img src="../../assets/imgs/index-role-zs1.png" class="img1" alt="">
            <!-- 右侧背景 -->
            <img src="../../assets/imgs/index-role-zs2.png" class="img2" alt="">
        </div>
        <!-- 主要背景 -->
        <div class="main-bg">
            <img src="../../assets/imgs/main-bg.png" alt="">
        </div>
        <!-- 主要人物介绍 -->
        <div class="role-main">
            <div class="index-title">
                <div class="title-box font-num">
                    <div class="cn font-hm">个人介绍</div>
                    <div class="en">Profile</div>
                    <div class="num">01</div>
                </div>
            </div>
            <div class="role-name font-num">WEIKKXIN</div>
            <div class="role-lbt">
                <img src="../../assets/imgs/role-lbt-bg.png" class="bg" alt="">
                <div class="swiper_big">
                    <img src="../../assets/imgs/img-me.png" class="thumb" />
                    <a href="javascript:;" class="more-btn font-hm">
                        <span>查看更多</span>
                        <i class="iconfont icon-arrow-"></i>
                    </a>
                    <div class="txt font-hm">
                        <h2>嗨，大家好我叫韦可鑫 <br>欢迎来到我的个人网站。 <br>在这里我将通过视频<br>和文章的方式<br>来记录我的学习以及成长过程；<br>
                            希望能够成为全栈Dev
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <!-- 作品栏 -->
        <div class="index-project">
            <div class="container">
                <!-- 轮播图 -->
                <div class="project-left">
                    <div class="swiper mySwiper akiswiper font-hm">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <a href="javascript:;">
                                    <img src="" alt="" />
                                    <div class="layer">
                                        <div class="desc">等到又一颗月也沉入杯底…</div>
                                        <div class="hidden-time">07/25/2024</div>
                                        <div class="hidden-title">《绝区零》朱鸢EP《一颗方糖悬滞的时间》现已上架音乐平台</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="project-aki-time font-num"></div>
                    <div class="project-aki-title font-hm"></div>
                    <div class="fyq">
                        <div class="swiper-pagination"></div>
                        <a href="javascript:;" class="more-btn font-hm">
                            <span>查看更多</span>
                            <i class="iconfont icon-arrow-"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- 证书和奖状 -->
        <div class="index-certificate">

        </div>
    </div>
</template>

<style></style>
