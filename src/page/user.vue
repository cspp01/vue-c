<template>
    <main>
        <c_user></c_user>
    </main>
</template>
<script>
    import c_user from '../components/user/user.vue';
    export default{
        components : {
            c_user
        },
        beforeCreate : function() {
            this.$store.commit('uppdateTitle', '登录');
        },
    }
</script>
<style>

</style>