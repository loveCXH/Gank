'use strict'

import Vue from 'vue';
import VueRouter from 'vue-router';
import FastClick from 'fastclick';//处理移动浏览器300ms延时问题

import routerMap from './routers';//路由映射

Vue.use(VueRouter);

//`$` will be the base `Zepto` object
//Zepto是一个轻量级的针对现代高级浏览器的JavaScript库， 它与jquery有着类似的api.
//由webpack-zepto模块提供.这里可以直接使用的原因是zepto已经webpack.config文件中配置好了.
console.log($);
$.ajaxSettings.crossDomain = true;

//创建一个VueRouter实例
var router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});

FastClick.attach(document.body);

//路由需要一个根组件来渲染
var app = Vue.extend({});

//定义路由
routerMap(router);

//启动app
router.start(app,"#app");
