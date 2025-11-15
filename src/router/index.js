import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '@/views/dashboard/Dashboard.vue'
          ),
      },
      {
      path: '/theme',
      name: 'Theme',
      component: {
        render() {
          return h(resolveComponent('router-view'))
        },
      },
    redirect: '/theme/breadcrumbs',
        children: [
      {
        path: '/theme/colors',
        name: 'Colors',
        component: () => import('@/views/theme/Colors.vue'),
      },
      {path:'/theme/typography',
      name:'Typography',
        component: () => import('@/views/theme/Typography.vue'),
      },
    ],
    },
    {
        path: '/tables',
        name: 'Views',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/tables/breadcrumbs',
        children: [
          {
            path: '/tables/users',
            name: 'Users',
            component: () => import('@/views/tables/Users.vue'),
          },
          {
            path: '/tables/breadcrumbs',
            name: 'Breadcrumbs',
            component: () => import('@/views/tables/Breadcrumbs.vue'),
          },
          {
            path: '/tables/cards',
            name: 'Cards',
            component: () => import('@/views/tables/Cards.vue'),
          },
          {
            path: '/tables/carousels',
            name: 'Carousels',
            component: () => import('@/views/tables/Carousels.vue'),
          },
          {
            path: '/tables/collapses',
            name: 'Collapses',
            component: () => import('@/views/tables/Collapses.vue'),
          },
          {
            path: '/tables/list-groups',
            name: 'List Groups',
            component: () => import('@/views/tables/ListGroups.vue'),
          },
          {
            path: '/tables/navs',
            name: 'Navs',
            component: () => import('@/views/tables/Navs.vue'),
          },
          {
            path: '/tables/paginations',
            name: 'Paginations',
            component: () => import('@/views/tables/Paginations.vue'),
          },
          {
            path: '/tables/placeholders',
            name: 'Placeholders',
            component: () => import('@/views/tables/Placeholders.vue'),
          },
          {
            path: '/tables/popovers',
            name: 'Popovers',
            component: () => import('@/views/tables/Popovers.vue'),
          },
          {
            path: '/tables/progress',
            name: 'Progress',
            component: () => import('@/views/tables/Progress.vue'),
          },
          {
            path: '/tables/spinners',
            name: 'Spinners',
            component: () => import('@/views/tables/Spinners.vue'),
          },
          {
            path: '/tables/tables',
            name: 'Tables',
            component: () => import('@/views/tables/Tables.vue'),
          },
          {
            path: '/tables/tabs',
            name: 'Tabs',
            component: () => import('@/views/tables/Tabs.vue'),
          },
          {
            path: '/tables/tooltips',
            name: 'Tooltips',
            component: () => import('@/views/tables/Tooltips.vue'),
          },
        ],
      },
      {
        path: '/buttons',
        name: 'Buttons',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/buttons/standard-buttons',
        children: [
          {
            path: '/buttons/standard-buttons',
            name: 'Button Component',
            component: () => import('@/views/buttons/Buttons.vue'),
          },
          {
            path: '/buttons/dropdowns',
            name: 'Dropdowns',
            component: () => import('@/views/buttons/Dropdowns.vue'),
          },
          {
            path: '/buttons/button-groups',
            name: 'Button Groups',
            component: () => import('@/views/buttons/ButtonGroups.vue'),
          },
        ],
      },
      {
        path: '/forms',
        name: 'Forms',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/forms/form-control',
        children: [
          {
            path: '/forms/form-control',
            name: 'Form Control',
            component: () => import('@/views/forms/FormControl.vue'),
          },
          {
            path: '/forms/select',
            name: 'Select',
            component: () => import('@/views/forms/Select.vue'),
          },
          {
            path: '/forms/checks-radios',
            name: 'Checks & Radios',
            component: () => import('@/views/forms/ChecksRadios.vue'),
          },
          {
            path: '/forms/range',
            name: 'Range',
            component: () => import('@/views/forms/Range.vue'),
          },
          {
            path: '/forms/input-group',
            name: 'Input Group',
            component: () => import('@/views/forms/InputGroup.vue'),
          },
          {
            path: '/forms/floating-labels',
            name: 'Floating Labels',
            component: () => import('@/views/forms/FloatingLabels.vue'),
          },
          {
            path: '/forms/layout',
            name: 'Layout',
            component: () => import('@/views/forms/Layout.vue'),
          },
          {
            path: '/forms/validation',
            name: 'Validation',
            component: () => import('@/views/forms/Validation.vue'),
          },
        ],
      },
      {
        path: '/charts',
        name: 'Charts',
        component: () => import('@/views/charts/Charts.vue'),
      },
      {
        path: '/icons',
        name: 'Icons',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/icons/coreui-icons',
        children: [
          {
            path: '/icons/coreui-icons',
            name: 'CoreUI Icons',
            component: () => import('@/views/icons/CoreUIIcons.vue'),
          },
          {
            path: '/icons/brands',
            name: 'Brands',
            component: () => import('@/views/icons/Brands.vue'),
          },
          {
            path: '/icons/flags',
            name: 'Flags',
            component: () => import('@/views/icons/Flags.vue'),
          },
        ],
      },
      {
        path: '/notifications',
        name: 'Notifications',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/notifications/alerts',
        children: [
          {
            path: '/notifications/alerts',
            name: 'Alerts',
            component: () => import('@/views/notifications/Alerts.vue'),
          },
          {
            path: '/notifications/badges',
            name: 'Badges',
            component: () => import('@/views/notifications/Badges.vue'),
          },
          {
            path: '/notifications/modals',
            name: 'Modals',
            component: () => import('@/views/notifications/Modals.vue'),
          },
          {
            path: '/notifications/toasts',
            name: 'Toasts',
            component: () => import('@/views/notifications/Toasts.vue'),
          },
        ],
      },
      {
        path: '/widgets',
        name: 'Widgets',
        component: () => import('@/views/widgets/Widgets.vue'),
      },
    ],
  },
  {
    path: '/pages',
    redirect: '/pages/404',
    name: 'Pages',
   component: DefaultLayout,
    children: [
         {
            path: '/pages/products',
            name: 'Index',
            component: () => import('@/views/pages/Products/index.vue'),
      },
        {
            path: '/pages/detail',
            name: 'Index',
            component: () => import('@/views/pages/Products/Detail.vue'),
      },
      {
        path: '404',
        name: 'Page404',
        component: () => import('@/views/pages/Page404'),
      },
      {
        path: '500',
        name: 'Page500',
        component: () => import('@/views/pages/Page500'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/pages/Login'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/pages/Register'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})
//uyfuyguigufyf

export default router
