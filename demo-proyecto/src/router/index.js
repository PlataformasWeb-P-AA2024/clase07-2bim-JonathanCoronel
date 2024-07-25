import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../components/HelloWorld.vue';
import ListaEstudiantes from '../components/ListaEstudiantes.vue';
import ListaTelefonos from '../components/ListaTelefonos.vue';
import ListaTelefonosDos from '../components/ListaTelefonosDos.vue';
import ListaEdificios from '../components/ListaEdificios.vue';
import ListaDepartamentos from '../components/ListaDepartamentos.vue';
import ListaDepartamentosDos from '../components/ListaDepartamentosDos.vue';

const routes = [
  { path: '/estudiantes',
  name: 'ListaEstudiantes',
  component: ListaEstudiantes },

  { path: '/telefonos',
  name: 'ListaTelefonos',
  component: ListaTelefonos },

  { path: '/telefonos-dos',
  name: 'ListaTelefonosDos',
  component: ListaTelefonosDos },

  { path: '/edificios',
  name: 'ListaEdificios',
  component: ListaEdificios },

  { path: '/departamentos',
  name: 'ListaDepartamentos',
  component: ListaDepartamentos },
  
  { path: '/departamentos-dos',
  name: 'ListaDepartamentosDos',
  component: ListaDepartamentosDos }


];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
