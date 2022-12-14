import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'

import HomeView from './components/HomeView.vue'
import AboutView from './components/AboutView.vue'
import AddView from './components/AddView.vue'

const router = createRouter({
   history: createWebHistory(), 

   routes: [
      {path: '/', name: 'Home', component: HomeView},
      {path: '/about', name: 'About', component: AboutView}, 
      {path: '/add', name: 'Add', component: AddView}


   ]
})

createApp(App)
.use(router)
.mount('#app')
