<template>
    <section class="jj">
        <dl class="clearfix" v-for="item in jjs">
            <router-link :to="{
                path : '/details',
                query : {
                    id : item.id
                }
            }" @click.native="jjuppTitle( item.name )">
                <dt><img :src="item.img"/></dt>
                <dd>
                    <h3>{{item.name}}</h3>
                    <p>{{item.dc}}</p>
                    <p>{{item.date}}上映&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.week}}</p>
                </dd>
                <dd>
                    &gt;
                </dd>
            </router-link>
        </dl>
    </section>
</template>
<script>
    export default{
        props : [
            'jjs'
        ],
        methods : {
            jjuppTitle : function( name ) {
                this.$store.commit( 'uppdateTitle', name );
            }
        }
    }
</script>
<style scoped lang="scss">
    .jj{
        dl{
            padding:.2rem 0;
            border-bottom:1px dashed #c9c9c9;
            a{
                &>*{
                    float:left;
                }
                dt{
                    width:.6rem;
                    img{
                        width:100%;
                    }
                }
                dd{
                    padding-left:.15rem;
                    h3{
                        font:normal normal .16rem/.32rem 'mirsoft yahei';
                        color:#000;
                    }
                    p{
                        font:normal normal .12rem/.24rem 'mirsoft yahei';
                        color:#8e8e8e;
                        &:last-child{
                            color:#ffb375
                        }
                    }
                    &:last-child{
                        float:right;
                        font-size:.16rem;
                        color:#999999;
                        line-height:.32rem;
                    }
                }
            }
        }
    }
</style>