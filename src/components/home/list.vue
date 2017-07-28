<template>
    <section class="list">
        <dl v-for="item in list">
            <dt><img :src="item.src"/></dt>
            <dd class="clearfix">
                <div>
                    <p>{{item.name}}</p>
                    <p>{{item.description}}</p>
                </div>
                <div>
                    <span>{{item.pf}}</span>
                </div>
            </dd>
        </dl>
        <a href="">更多热映电影</a>
    </section>
</template>
<script>
    export default{
        props : [
            'list'
        ]
    }
</script>
<style scoped lang="scss">
    @import '../../css/_pub/sass_pub';
    .list{
        padding:.18rem;
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
                            font-size:.1rem;
                            color:#9a9a9a;
                            &:first-child{
                                font-size:.12rem;
                                color:#333;
                            }
                        }
                    }
                    &:nth-child(2){
                        float:right;
                        span{
                            color:#f78360;
                            font-size:.18rem;
                            line-height:.32rem;
                        }
                    }
                }
            }
        }
        &>a{
            @extend %btn1;
        }
    }
</style>