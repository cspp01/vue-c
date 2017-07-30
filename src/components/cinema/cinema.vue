<template>
    <section class="cinema">
        <ul>
            <li v-for="item in cinemas"><router-link to="#" @click.native="show( item.id )">{{ item.dqname }}</router-link>
                <ul :class="{ show : item.id == ifshow }">
                    <li class="clearfix" v-for="ite in item.ch">
                        <div>
                            <h3>{{ ite.name }}</h3>
                            <p>{{ ite.dec }}</p>
                            <p>距离未知</p>
                        </div>
                        <div>
                            &gt;
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
</template>
<script>
    export default{
        data : function() {
            return {
                ifshow : 1
            }
        },
        props : [
            'cinemas'
        ],
        methods : {
            show : function( i ) {
                this.ifshow = i;
            }
        }
    }
</script>
<style scoped lang="scss">
    .cinema{
        background:#fff;
        &>ul{
            &>li{
                margin-bottom:.01rem;
                &>a{
                    display:block;
                    height:.4rem;
                    background:#e1e1e1;
                    padding-left:.2rem;
                    line-height:.4rem;
                    color:#636363;
                    -webkit-tap-highlight-color: rgba( 0,0,0,0 );
                }
                ul{
                    background:#fff;
                    display:none;
                    li{
                        padding:.1rem .16rem .12rem;
                        border-bottom:1px solid #e1e1e1;
                        &:last-child{
                            border-bottom-width:0;
                        }
                        div{
                            float:left;
                            &:first-child{
                                float:left;
                                width:3rem;
                                h3{
                                    font-size:.16rem;
                                    color:#333;
                                    font-weight:normal;
                                    line-height:.3rem;
                                    margin-bottom:.05rem;
                                }
                                p{
                                    font-size:.12rem;
                                    color:#ccc;
                                    &:nth-of-type( 1 ){
                                        text-overflow:ellipsis;
                                        white-space:nowrap;
                                        overflow:hidden;
                                        margin-bottom:.1rem;
                                    }
                                }
                            }
                            &:last-child{
                                float:right;
                                line-height:.3rem;
                                color:#c6c6c6;
                                font-size:.16rem;
                            }
                        }
                    }
                    &.show{
                        display:block;
                    }
                }
            }
        }
    }
</style>