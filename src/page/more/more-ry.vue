<template>
    <section class="more-ry">
        <c_more_ry :rys="rys"></c_more_ry>
    </section>
</template>
<script>
    import c_more_ry from '../../components/more/more-ry/more-ry.vue';
    export default{
        data : function() {
            return {
                rys : []
            }
        },
        components : {
            c_more_ry
        },
        created : function() {
            this.$http.get( '../src/data/more.json' ).then( function( r ) {
                this.rys = r.data.rys;
            }, function() {

            } );
        }
    }
</script>
<style>

</style>