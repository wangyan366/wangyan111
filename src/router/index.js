import Vue from 'vue'
import Router from 'vue-router'
import Films from '../components/films'
import Center from '../components/center'
import home from '../components/home'
import city from '../components/city'
import detail from '../components/detail'
import ComingSoon from '../components/comingSoon'
import NowPlaying from '../components/nowPlaying'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/films',
      component: Films,
      redirect:"/films/comingSoon/",
      children:[{
        path:"comingSoon",
        component:ComingSoon
      },
      {
        path:"nowPlaying",
        component:NowPlaying
      }]
    },{
      path: '/center',
      component: Center
    },{
      path: '/home',
      component: home
    },{
      path: '/city',
      component: city
    },{
      path: '/detail/:id',
      component: detail
    },{
      path:"*",
      redirect:"/films"
    }
  ]
})
