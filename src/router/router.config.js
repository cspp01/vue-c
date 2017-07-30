import p_home from '../page/home.vue';
import p_collection from '../page/collection.vue';
import p_details from '../page/details.vue';
import p_more from '../page/more/more.vue';
import p_more_ry from '../page/more/more-ry.vue';
import p_more_jj from '../page/more/more-jj.vue';
import p_user from '../page/user.vue';
import p_cinema from '../page/cinema.vue';
export default[ // module.exports = [];
    {
        path : '/',
        name : '首页',
        component : p_home
    },
    {
        path : '/collection',
        name : 'collection',
        component : p_collection
    },
    {
        path : '/details',
        name : '详情页',
        component : p_details
    },
    {
        path : '/more',
        name : '更多热门电影',
        component : p_more,
        children : [
            {
                path : '/more/',
                name : '正在热映',
                component : p_more_ry
            },
            {
                path : '/more/more-jj',
                name : '即将上映',
                component : p_more_jj
            }
        ]
    },
    {
        path : '/user',
        name : '我的',
        component : p_user
    },
    {
        path : '/cinema',
        name : '影院',
        component : p_cinema
    }
];
