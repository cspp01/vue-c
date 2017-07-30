<template>
    <section class="show" data-name="即将上映">
        <dl v-for="item in show">
            <router-link :to="{
                path : '/details',
                query : {
                    id : item.id
                }
            }" @click.native="backStr( item.name )">
                <dt><img :src="item.src"/></dt>
                <dd class="clearfix">
                    <div>
                        <p>{{item.name}}</p>
                    </div>
                    <div>
                        <span>{{item.date}}</span>
                    </div>
                </dd>
            </router-link>
        </dl>
        <router-link to="/more/more-jj" @click.native="ifActive">更多即将上映电影</router-link>
    </section>
</template>
<script>
    export default{
        props : [
            'show'
        ],
        methods : {
            ifActive : function() {
                this.$store.commit( 'uppdateIfActive', 2 );
            },
            backStr : function( name ) {
                this.$store.commit( 'uppdateBackStr', '/' );
                this.$store.commit( 'uppdateTitle', name );
            }
        }
    }
</script>
<style scoped lang="scss">
    @import '../../css/_pub/sass_pub';
    .show{
        padding:.18rem;
        border-top:1px solid #a8a8a8;
        margin-top:.2rem;
        padding-top:.5rem;
        position:relative;
        &::before{
            content:attr( data-name );
            width:.65rem;
            height:.2rem;
            background:#999;
            font-size:.1rem;
            color:#eee;
            -webkit-border-radius:.05rem;
            position:absolute;
            top:-.1rem;
            left:50%;
            text-align:center;
            line-height:.2rem;
            margin-left:-.325rem;
        }
        dl{
            -webkit-box-shadow:0.5px 0.5px 1px #a8a8a8;
            margin-bottom:.17rem;
            dt{
                img{
                    width:100%;
                }
            }
            dd{
                background:#f9f9f9;
                padding:.13rem .1rem .1rem;
                div{
                    &:first-child{
                        float:left;
                        p{
                            font-size:.12rem;
                            color:#333;
                            line-height:.2rem;
                        }
                    }
                    &:nth-child(2){
                        float:right;
                        margin-right:.4rem;
                        span{
                            color:#f78360;
                            font-size:.1rem;
                            line-height:.2rem;
                        }
                    }
                }
            }
        }
        &>a{
            @extend %btn1;
        }
        margin-bottom:.1rem;
    }
</style>