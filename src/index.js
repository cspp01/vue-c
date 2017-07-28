import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import state from './store/state.js';
import getters from './store/getters.js';
import mutations from './store/mutations.js';
import routes from './router/router.config.js';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import Resource from 'vue-resource';

Vue.use( VueRouter );
Vue.use( routes );
Vue.use( Vuex );
Vue.use( Resource );
Vue.use( VueAwesomeSwiper );

let router = new VueRouter( {
    routes
    } ),
    store = new Vuex.Store( {
        state,
        mutations,
        getters
    } );

new Vue( {
    el : '#app',
    render : h => h( App ),
    router,
    store
} );