<template>
    <header id="header" class="clearfix">
        <section class="btn" @click="sidShow"><i class="coco-iconlist"></i></section>
        <section class="title">
            <header>卖座电影</header>
        </section>
        <section class="user"><i class="coco-user-line"></i></section>
    </header>
</template>
<script>
    export default{
        data : () => {
            return {

            }
        },
        methods : {
            sidShow : function() {
                this.$store.commit( 'uppdateIfSid' );
            }
        }
    }
</script>
<style scoped lang="scss">
    #header{
        $H:.5rem;
        $W-w:.48rem;
        height:$H;
        background:#282828;
        position:fixed;
        top:0;
        left:0;
        z-index:10000;
        width:100%;
        %LR{
            width:$W-w;
            height:$H;
            text-align:center;
            line-height:$H;
            font-size:0;
        }
        .btn{
            @extend %LR;
            float:left;
            border-right:1px solid #222;
            -webkit-box-shadow:1px 0 0 0 #363636;
            &:active{
                background:#444;
            }
            i{
            }
        }
        .title{
            color:#efefef;
            line-height:$H;
            font-size:.14rem;;
            padding-left:.14rem;
            float:left;
        }
        .user{
            @extend %LR;
            float:right;
        }
    }
</style>