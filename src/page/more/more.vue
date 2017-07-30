<template>
    <section class="more">
        <header class="clearfix">
            <router-link v-for="item in links" :to="item.src" @click.native="act( item.index )" :class="{ 'active' : ifActive == item.index }">{{item.name}}</router-link>
        </header>
        <div class="content">
            <router-view></router-view>
        </div>
    </section>
</template>
<script>
    export default{
        data : function() {
            return {
                links : [
                    {
                        index : 1,
                        name : '正在上映',
                        src : '/more/'
                    },
                    {
                        index : 2,
                        name : '即将上映',
                        src : '/more/more-jj'
                    }
                ]
            }
        },
        beforeCreate : function() {
            this.$store.commit('uppdateTitle', '所有影片');
        },
        methods : {
            // 点击状态
            act : function( i ) {
                this.$store.commit( 'uppdateIfActive', i );
            }
        },
        computed : {
            ifActive : function() {
                return this.$store.getters.getIfActive;
            }
        }
    }
</script>
<style scoped lang="scss">
    .more{
        padding:0 .15rem;
        a{
            font-size:.16rem;
            line-height:.46rem;
            display:block;
            float:left;
            width:50%;
            color:#6a6a6a;
            text-align:center;
            border-bottom:1px solid #fe6e00;
            height:.46rem;
            &.active{
                border-bottom-width:.04rem;
            }
        }
    }
</style>