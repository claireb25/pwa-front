import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CV from '@/components/CV'
import Projets from '@/components/Projets'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projets',
      name: 'Projets',
      component: Projets
    },
    {
      path: '/cv',
      name: 'CV',
      component: CV
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
