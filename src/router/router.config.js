import p_home from '../page/home.vue';
import p_collection from '../page/collection.vue';
export default[ // module.exports = [];
    {
        path : '/',
        name : 'home',
        component : p_home
    },
    {
        path : '/collection',
        name : 'collection',
        component : p_collection
    }
];
