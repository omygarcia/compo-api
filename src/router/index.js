import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')
  },
  {
    path:'/counter',
    name:'counter',
    component:()=>import(/* webapakChunkName: "Counter" */'@/views/CounterView.vue')
  },
  {
    path:'/users',
    name:'users',
    component:()=>import(/* webapakChunkName: "Users" */'@/views/UsersView.vue')
  },
  {
    path:'/pokemon-search',
    name:'pokemon-search',
    component:()=>import(/* webapakChunkName: "pokemon-search" */'@/views/SearchPokemonView.vue')
  },
  {
    path:'/pokemon/:id',
    name:'pokemon-id',
    component:()=>import(/* webapakChunkName: "pokemon-id" */'@/views/PokemonView.vue')
  },
  {
    path:'/todo',
    name:'todo',
    component:()=>import(/* webapakChunkName: "todo" */'@/views/TodoVuex.vue')
  },
  {
    path:'/slots',
    name:'slots',
    component:()=>import(/* webapakChunkName: "slots" */'@/views/CustomSlots.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
