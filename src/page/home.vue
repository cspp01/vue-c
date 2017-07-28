<template>
    <section class="home">
        <c_banner :banners="banners"></c_banner>
        <!--<c_home :loo="cou" @aa="add()"></c_home>-->
        <c_list :list="list"></c_list>
        <c_show :show="show"></c_show>
    </section>
</template>
<script>
    import c_home from '../components/home/home.vue';
    import c_banner from '../components/home/banner.vue';
    import c_list from '../components/home/list.vue';
    import c_show from '../components/home/show.vue';
    export default{
        data : function(){
            return {
                banners : [],
                list : [],
                show : []
            }
        },
        created : function() {
            this.$http.get( '../src/data/home.json' ).then( function( r ){
                this.banners = r.data.banner;
                this.list = r.data.list;
                this.show = r.data.show;
            }, function() {

            } );
        },
        components : {
            c_banner,
            c_home,
            c_list,
            c_show
        },
        computed : {
            cou : function() {
                return this.$store.getters.count;
            }
        },
        methods : {
            add : function() {
                this.$store.commit( 'add' );
            }
        },
    }
</script>
<style>

</style>