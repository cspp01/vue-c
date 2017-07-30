<template>
    <section class="ry">
        <dl class="clearfix" v-for="item in rys">
            <router-link :to="{
                path : '/details',
                query : {
                    id : item.id
                }
            }" @click.native="uppTitle( item.name )">
                <dt><img :src="item.img"/></dt>
                <dd>
                    <h3>{{item.name}}</h3>
                    <p>{{item.dc}}</p>
                    <p><span>{{item.yynum}}</span>家影院上映&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{{item.gpnum}}</span>人购票</p>
                </dd>
                <dd>
                    <span>8.5</span>&gt;
                </dd>
            </router-link>
        </dl>
    </section>
</template>
<script>
    export default{
        props : [
            'rys'
        ],
        beforeCreate : function() {
            this.$store.commit( 'uppdateIfActive', 1 );
        },
        methods : {
            uppTitle : function( name ) {
                this.$store.commit( 'uppdateTitle', name );
            }
        }
    }
</script>
<style scoped lang="scss">
    .ry{
        dl{
            padding:.2rem 0;
            border-bottom:1px dashed #c9c9c9;
            &:last-child{
                border-bottom:none;
            }
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
                        span{
                            color:#8aa2bf;
                        }
                    }
                    &:last-child{
                        float:right;
                        font-size:.16rem;
                        color:#999999;
                        line-height:.32rem;
                        span{
                            color:#fc7103;
                        }
                    }
                }
            }
        }
    }
</style>