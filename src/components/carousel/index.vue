<template>
    <div class="swiper-container" ref="cur">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in list" :key="item.id" ref="box">
                <img :src="item.imgUrl" />
            </div>
        </div>
        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from "swiper";
export default {
    name: "carousel",
    props: [
        'list'
    ],
    mounted() {
        new Swiper(this.$refs.cur, {
            loop: true,
            pagination: {
                el: "swiper-pagination",
                //分页器类型
                type: "bullets",
                //点击分页器，切换轮播 
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        }, 100)
    },

}
</script>

<style></style>