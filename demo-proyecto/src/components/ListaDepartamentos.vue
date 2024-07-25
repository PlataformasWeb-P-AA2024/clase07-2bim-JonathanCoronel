<template>
  <div>
    <h1>Lista de Departamentos</h1>
    <center>
    <table class="mi-tabla">
      <tr>
        <th>Nombre Propietraio</th>
        <th>Costo</th>
        <th>Numero de Cuartos</th>
        <th>Edificio</th>
      </tr>
      <tr v-for="departamento in departamentos" :key="departamento.id">
        <td>{{ departamento.nombre_completo_propietario }}</td>
        <td>{{ departamento.costo_departamento }}</td>
        <td>{{ departamento.numero_cuartos }}</td>
        <td>{{ departamento.edificio }}</td>
      </tr>
    </table>
    </center>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      departamentos: []
    };
  },
  created() {
    this.fetchEdificios();
  },
  methods: {
    async fetchEdificios() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/departamentos/');
        this.departamentos = response.data;
      } catch (error) {
        console.error('Error obteniendo edificios:', error);
      }
    }
  }
};
</script>

<style scoped>
/* agregar ---- */
</style>