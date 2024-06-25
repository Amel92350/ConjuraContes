import { createRouter, createWebHistory } from 'vue-router'

import { Home,Fonction,PublicLayout,About,NotFound } from '@/views/public'
import { Dashboard,AdminLayout,UserAdd,UserEdit,UserIndex } from '@/views/admin'
import Login from '@/views/auth/Login.vue'
import {authGuard} from '@/_helpers/auth-guard'


const routes = [

  {
    path:'/',
    name:'public',
    component:PublicLayout,
    children: [
      {path: '/',name: 'home',component: Home},
      {path:'/fonction',name : 'fontion',component: Fonction},
      {path:'/about',name:'about',component:About}
    ]
  },
  {
    path:'/admin',
    name:'admin',
    component:AdminLayout,
    children:[
      {path:'dashboard',name:'dashboard',component:Dashboard},
      {path:'users/index',component:UserIndex},
      {path:'users/edit/:id(\\d+)',component:UserEdit,props:true},
      {path:'users/add',component:UserAdd}
    ]
  },
  {
    path:'/login',name:'login',component:Login
  },
  {
    path:'/:pathMatch(.*)*', component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
