<template>
    <main>
        <c_cinema :cinemas="cinemas"></c_cinema>
    </main>
</template>
<script>
    import c_cinema from '../components/cinema/cinema.vue';
    export default{ // module.exports = {}
        data : function() {
            return {
                cinemas : []
            }
        },
        beforeCreate : function() {
            this.$store.commit( 'uppdateTitle', '全部影院' )
        },
        components : {
            c_cinema
        },
        created : function() {
            this.$http.get( '../src/data/cinema.json' ).then( function( r ) {
                this.cinemas = r.data.cinemas
            }, function() {

            } )
        }
    }
</script>
<style>

</style>