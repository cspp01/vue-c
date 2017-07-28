<template>
    <div @click="ccc">{{ loo }}</div>
</template>
<script>
    export default{
        props : [
            'loo'
        ],
        data : () => {
            return {
                t : '首页'
            }
        },
        methods : {
            ccc : function(){
                this.$emit( 'aa' );
            }
        }
    }
</script>
<style lang="scss" scoped>
    div{
        color:#f00;
        span{
            color:#ff0;
        }
    }
</style>