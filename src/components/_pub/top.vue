<template>
    <aside id="back-top" :class="{ btop : ifBtop }">
        <div @click="back"><i class="coco-yuan-backtop-line1"></i></div>
    </aside>
</template>
<script>
    export default{ // module.exports = {}
        data : () => {
            return {
                ifBtop : false,
                jl : 100
            }
        },
        created : function() {
            window.onscroll = () => {
                document.body.scrollTop >= this.jl
                    ? this.ifBtop = true
                    : this.ifBtop = false;
            }
        },
        methods : {
            back : () => {
                let t = setInterval( () => {
                    document.body.scrollTop -= 50;
                    document.body.scrollTop <= 0 && clearInterval( t );
                }, 10 );
            }
        }
    }
</script>
<style scoped lang="scss">
    #back-top{
        position:fixed;
        bottom:-.5rem;
        right:.1rem;
        -webkit-transition:all .5s ease;
        &.btop{
            bottom:.1rem;
        }
        div{
            $wh:.48rem;
            width:$wh;
            height:$wh;
            background:rgba( 0,0,0,.7 );
            -webkit-border-radius:50%;
            text-align:center;
            line-height:$wh;
            font-weight:bold;
            i{
                font-size:.25rem;
                color:#fff;
            }
        }
    }
</style>