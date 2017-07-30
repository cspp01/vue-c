
<template>
    <section class="more-jj">
        <c_more_jj :jjs="jjs"></c_more_jj>
    </section>
</template>
<script>
    import c_more_jj from '../../components/more/more-jj/more-jj.vue';
    export default{
        data : function() {
            return {
                jjs : []
            }
        },
        components : {
            c_more_jj
        },
        created : function() {
            this.$http.get( '../src/data/more.json' ).then( function( r ) {
                this.jjs = r.data.jjs;
            }, function() {

            } );
        }
    }
</script>
<style>

</style>