<template>
<div>
    <div id="whole">
        <c_header></c_header>
        <!--<router-link to="/">home</router-link>-->
        <!--<router-link to="/collection">collection</router-link>-->
        <router-view id="main"></router-view>
    </div>
    <c_sidebar></c_sidebar>
</div>
</template>
<style lang="scss">
    @import './css/_base/base';
    @import './css/_pub/pub';
</style>
<script>
    import c_header from './components/_pub/header.vue';
    import c_sidebar from './components/_pub/sidebar.vue';
    export default{ // == module.exports = {}
        data : () => {
            return {
            }
        },
        components : {
            c_header,
            c_sidebar
        }
    }
</script>