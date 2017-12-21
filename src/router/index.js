import Vue from 'vue'
import Router from 'vue-router'

import EditItem from '../components/EditItem.vue';
import DisplayItem from '../components/DisplayItem.vue';
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'DisplayItem',
      component: DisplayItem}
    ,{
    	path: '/edit/:id',
    	name: 'EditItem',
    	component: EditItem
    }
  ]
})