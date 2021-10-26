import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'

import EventDetails from '@/views/event/Details.vue'
import EventRegister from '@/views/event/Register.vue'
import EventEdit from '@/views/event/Edit.vue'
import Doccom from '@/views/event/Doccom.vue'

import EventLayout from '@/views/event/Layout.vue'
import AddEvent from '@/views/EventForm.vue'

import NotFound from '@/views/NotFound.vue'
import NetWorkError from '@/views/NetworkError.vue'
import NProgress from 'nprogress'
import GStore from '@/store'

import EventService from '@/services/EventService.js'
import OrganizerService from '@/services/OrganizerService.js'
// import VaccineService from "@/service/VaccineService";


import Login from '@/views/LoginForm.vue'
import Registration from '@/views/Registration.vue'
//add
import About from '../views/About.vue'
import Start from "../views/Start.vue"

const routes = [
  {
    path: '/home',
    name: 'EventList',
    component: EventList,
    props: (route) => ({ 
      page: parseInt(route.query.page) || 1,
      limit: parseInt(route.query.limit) || 4 
    }),
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: "/",
    name: "Start",
    component: Start,
  },
  // หน้าโผล่
  {
    path: '/add-event',
    name: 'AddEvent',
    component: AddEvent,
    beforeEnter: () => {
      return OrganizerService.getOrganizers()
        .then((response) => {
          GStore.organizers = response.data
        })
        .catch(() => {
          GStore.organizers = null
          console.log('cannot load organizer')
        })
    }
  },
  {
    path: '/event/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    beforeEnter: (to) => {
      return EventService.getEvent(to.params.id) // Return and params.id
        .then((response) => {
          // Still need to set the data here
          GStore.event = response.data // <--- Store the event
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            return {
              // <--- Return
              name: '404Resource',
              params: { resource: 'event' }
            }
          } else {
            return { name: 'NetworkError' } // <--- Return
          }
        })
    },
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails
      },
      //howetown
      {
        path: 'register',
        name: 'EventRegister',
        props: true,
        component: EventRegister
      },
      //status
      {
        path: 'edit',
        name: 'EventEdit',
        props: true,
        component: EventEdit
      },
      //Doccom
      {
        path: "/doccom",
        name: "Doccom",
        // props: true,
        component: Doccom,
        beforeEnter: () => {
          return OrganizerService.getOrganizers()
            .then((response) => {
              GStore.organizers = response.data
            })
            .catch(() => {
              GStore.organizers = null
              console.log('cannot load organizer')
            })
        }
        // beforeEnter:(to) => {
        //   if(GlobalState.currentUser.authorities[0] != "ROLE_ADMIN"){
        //     return {
        //       name: 'EventDetails'
        //     }
        //   }
        // }
      },
    ]
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Registration',
    component: Registration
},
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetWorkError
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
  //scrollBehavior(){
  //  window.scrollTo(0,0);
  //}
})
router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
