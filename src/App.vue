<template>
<div>
    <div id="whole">
        <c_header></c_header>
        <!--<router-link to="/">home</router-link>-->
        <!--<router-link to="/collection">collection</router-link>-->
        <router-view id="main"></router-view>
    </div>
    <c_sidebar></c_sidebar>
    <c_top></c_top>
</div>
</template>
<style lang="scss">
    @import './css/_base/base';
    @import './css/_pub/pub';
    #main{
        margin-top:.5rem;
    }
</style>
<script>
    import c_header from './components/_pub/header.vue';
    import c_sidebar from './components/_pub/sidebar.vue';
    import c_top from './components/_pub/top.vue';
    export default{ // == module.exports = {}
        data : () => {
            return {
            }
        },
        components : {
            c_header,
            c_sidebar,
            c_top
        }
    }
</script>