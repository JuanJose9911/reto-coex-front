import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

//Empleados
import empleados from '../views/empleados/empleados.vue'
import crearEmpleados from '../views/empleados/crearEmpleado.vue'
import tipoContrato from '../views/contratos/tipoContrato.vue'
import mostrarEmpleado from '../views/empleados/mostrarEmpleado.vue'
import editarEmpleado from '../views/empleados/editarEmpleado.vue'

Vue.use(VueRouter)

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
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/empleados',
    name: 'empleados',
    component: empleados
  },
  {
    path: '/crear-empleado',
    name: 'crear-empleado',
    component: crearEmpleados
  },
  {
    path: '/tipo-contratos',
    name: 'tipo-contratos',
    component: tipoContrato
  },
  {
    path: '/empleado/:id',
    name: 'detalle-empleado',
    component: mostrarEmpleado
  },
  {
    path: '/empleado/edit/:id',
    name: 'editar-empleado',
    component: editarEmpleado
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
