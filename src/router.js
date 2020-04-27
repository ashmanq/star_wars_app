import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import MovieOpening from '@/views/MovieOpening';
import Home from '@/views/Home'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path:"",
      name: 'home',
      component: Home
    },
    {
      path:"/movieopening",
      name:"movieopening",
      component:MovieOpening,
      props: true
    }
  ]
});

export default router;
