<template>
    <main>
        <c_details :details="details"></c_details>
    </main>
</template>
<script>
    import c_details from '../components/details/details.vue';
    export default{
        data : function() {
            return {
                id : this.$route.query.id,
                details : []
            }
        },
        components : {
            c_details
        },
        beforeCreate : function() {
            this.$store.commit( "uppdateHeaderLeftIcon", 1 );
        },
        created : function() {
            this.$http.get( '../src/data/details.json' ).then( function( r ) {
                this.details = r.data.details.filter( x => x.id == this.id );
            }, function() {

            });
        }
    }
</script>
<style scoped lang="scss">
</style>