import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from '../components/home.vue'
import list from '../components/list.vue'
import first from '../components/first.vue'
import info from '../components/info.vue'
import register from '../components/register.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
        path:'first',
        component: first,
      },
      {
      path:'info',
      component:info,
      }
      ]
    },
  ]
})
