import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/chat',
      props: true,
      name: 'Chat',
      component: Chat,
      beforeEnter: (to, from, next) => {
          if(to.params.name){
              next()
          }else{
              next({name: 'Index'})
          }
      }
    }
  ]
})
