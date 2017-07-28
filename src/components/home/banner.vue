<template>
    <section id="banner">
        <swiper :options="swiperOption"  ref="mySwiper">
            <!-- 这部分放你要渲染的那些内容 -->
            <div class="swiper-slide banners" v-for="banner in banners">
                <img :src="banner.src"/>
            </div>
            <!-- 这是轮播的小圆点 -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </section>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        props : [
            'banners'
        ],
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    autoplay: 3000,
                    loop : true,
                    //是一个组件自有属性，如果notNextTick设置为true，
                    // 组件则不会通过NextTick来实例化swiper，
                    // 也就意味着你可以在第一时间获取到swiper对象，
                    // 假如你需要刚加载遍使用获取swiper对象来做什么事，
                    // 那么这个属性一定要是true
                    notNextTick: false,
                    pagination: '.swiper-pagination',
                    centeredSlides: false,
                    paginationClickable: true,
                    spaceBetween: 0,
                    onSlideChangeEnd: swiper => {
                        //这个位置放swiper的回调方法
                        this.page = swiper.realIndex+1;
                        this.index = swiper.realIndex;
                    }
                }
            }
        },
        //定义这个sweiper对象
        computed: {

            swiper() {
                return this.$refs.mySwiper.swiper;
            }
        },
        mounted () {
            //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
            this.swiper.slideTo(0, 0, false);
        }

    }
</script>
<style lang="scss">
    #banner{
        img{
            width:100%;
        }
    }
    .swiper-pagination-bullet-active {
        opacity: 1;
        background: #fff;
    }
</style>