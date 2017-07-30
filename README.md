# 卖座网

> 使用vue + vuex开发的卖座网

## 该项目技术栈

> webpack + webpack-dev-server + vuejs + vuex + vue-resource + vue-router + sass +es6

## 项目演示

![](http://otnhjxlus.bkt.clouddn.com/mzw.gif)

## 项目地址

[查看demo请戳这里](http://cangdu.org:8001/)（请用chrome手机模式预览）

### 已经实现功能

1.首页（侧边栏、点击进入电影详情界面）

2.影片（正在热映、即将上映，点击进入详情页面）

3.全部影院

4.登录

5.使用json文件模拟数据接口

### 待实现功能（接下来一个月陆续完成）

1.地理位置

2.购票

3.商城（界面）

4.演出（界面）

5.搭建node.js实现数据接口

# 说明

>   ^_^  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

## 项目布局
```
├── build
├── src
├── ├── components
├── ├── ├── _pub
├── ├── ├── ├── header.vue
├── ├── ├── ├── sidebar.vue
├── ├── ├── ├── top.vue
├── ├── ├── cinema
├── ├── ├── ├── cinema.vue
├── ├── ├── details
├── ├── ├── ├── details.vue
├── ├── ├── home
├── ├── ├── ├── banner.vue
├── ├── ├── ├── list.vue
├── ├── ├── ├── show.vue
├── ├── ├── more
├── ├── ├── ├── more-jj
├── ├── ├── ├── ├── more-jj.vue
├── ├── ├── ├── more-ry
├── ├── ├── ├── ├── more-ry.vue
├── ├── ├── user
├── ├── ├── ├── user.vue
├── ├── css
├── ├── ├── _base
├── ├── ├── ├── base.scss
├── ├── ├── _pub
├── ├── ├── ├── pub.scss
├── ├── ├── ├── sass_pub.scss
├── ├── ├── swiper.min.css
├── ├── data
├── ├── ├── cinema.json
├── ├── ├── details.json
├── ├── ├── home.json
├── ├── ├── more.json
├── ├── page
├── ├── ├── more
├── ├── ├── ├── more.vue
├── ├── ├── ├── more-jj.vue
├── ├── ├── ├── more-ry.vue
├── ├── ├── cinema.vue
├── ├── ├── collection.vue
├── ├── ├── details.vue
├── ├── ├── home.vue
├── ├── ├── user.vue
├── ├── router
├── ├── ├── router.config.js
├── ├── store
├── ├── ├── getters.js
├── ├── ├── mutations.js
├── ├── ├── state.js
├── ├── App.vue
├── ├── index.js
├── .babelrc
├── package.json
├── index.html
├── webpack.config.js
```
