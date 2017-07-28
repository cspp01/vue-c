<template>
    <aside id="sidebar" :class="{ sidShow : ifSid }">
        <nav>
            <ul>
                <li><router-link @click.native="uppIfSid" to="#">首页<i class="coco-yuan-ri"></i></router-link></li>
                <li><router-link @click.native="uppIfSid" to="/collection">影片<i class="coco-yuan-ri"></i></router-link></li>
                <li><router-link @click.native="uppIfSid" to="/">影院<i class="coco-yuan-ri"></i></router-link></li>
                <li><router-link @click.native="uppIfSid" to="/">商城<i class="coco-yuan-ri"></i></router-link></li>
                <li><router-link @click.native="uppIfSid" to="/">演出<i class="coco-yuan-ri"></i></router-link></li>
                <li><router-link @click.native="uppIfSid" to="/">我的<i class="coco-yuan-ri"></i></router-link></li>
                <li><router-link @click.native="uppIfSid" to="/">卖座卡<i class="coco-yuan-ri"></i></router-link></li>
            </ul>
        </nav>
    </aside>
</template>
<script>
    export default{
        data : function(){
            return {
            }
        },
        methods : {
            uppIfSid : function(){
                this.$store.commit( 'uppdateIfSid' );
            }
        },
        computed : {
            ifSid : function() {
                return this.$store.getters.getIfSid
            }
        }
    }
</script>
<style scoped lang="scss">
    @import '../../css/_pub/sass_pub';
    #sidebar{
        $W:2.65rem;
        position:fixed;
        top:.5rem;
        left:-$W;
        width:$W;
        height:100%;
        background:#222;
        -webkit-transition:all .3s;
        -webkit-transition-timing-function:ease;
        opacity:0;
        z-index:10000;
        li{
            border-bottom:1px solid #333;
            -webkit-box-shadow:0 1px 0 0 #222;
            &:first-child{
                border-top:1px solid #333;
                -webkit-box-shadow:0 -1px 0 0 #222;
            }
            a{
                color:$MC;
                display:block;
                height:.5rem;
                line-height:.5rem;
                padding:0 .16rem;
                -webkit-tap-highlight-color:rgba( 0,0,0,0 );
                i{
                    float:right;
                }
                &:active{
                    background:rgba( 255,255,255,.1 );
                }
            }
        }
        &.sidShow{
            left:0;
            opacity:1;
        }
    }
</style>