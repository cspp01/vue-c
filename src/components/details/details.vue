<template>
    <section class="details">
        <dl v-for="item in details">
            <dt><img :src="item.src"/></dt>
            <dd>
                <header>影片简介</header>
                <p>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：{{item.dy}}</p>
                <p class="zy">主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：{{item.zy}}</p>
                <p>地区语言：{{item.dqyy}}</p>
                <p>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：{{item.lx}}</p>
                <p>上映日期：{{item.date}}</p>
                <p>{{item.jj}}</p>
            </dd>
            <dd>
                <router-link to="#" class="btn">立即购票</router-link>
            </dd>
        </dl>
    </section>
</template>
<script>
    export default{
        props : [
            'details'
        ]
    }
</script>
<style scoped lang="scss">
    .details{
        dl{
            dt{
                img{
                    width:100%;
                }
            }
            dd{
                font-size:.12rem;
                padding:0 .2rem;
                color:#333;
                padding-bottom:.7rem;
                header{
                    font-size:.16rem;
                    margin:.16rem 0;
                    position:relative;
                    line-height:.24rem;
                    &::before{
                        content:'';
                        position:absolute;
                        left:-.2rem;
                        width: .15rem;
                        height:.24rem;
                        background: #f2c96d;
                    }
                }
                p{
                    margin-bottom:.1rem;
                    line-height:.18rem;
                    &.zy{
                        overflow:hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
                &:last-child{
                    position:fixed;
                    bottom:.22rem;
                    z-index:10000;
                    width:100%;
                    padding-bottom:0;
                    .btn{
                        width:1.56rem;
                        height:.36rem;
                        background:#fe8233;
                        display:block;
                        text-align:center;
                        line-height:.36rem;
                        color:#fff;
                        -webkit-border-radius:.3rem;
                        margin:0 auto;
                        font-size:.14rem;
                    }
                }
            }
        }
    }
</style>