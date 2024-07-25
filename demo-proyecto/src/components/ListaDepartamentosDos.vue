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
        <td v-if="departamento.edificioDetalle">
            <div>
              <p>Nombre: {{ departamento.edificioDetalle.nombre }}</p>
              <p>Ciudad: {{ departamento.edificioDetalle.ciudad }}</p>
              <!-- Agrega más detalles según lo necesites -->
            </div>
          </td>
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
        this.fetchDetalleEdificio();
      } catch (error) {
        console.error('Error obteniendo edificios:', error);
      }
    },

    async fetchDetalleEdificio() {
      const departamentosPromises = this.departamentos.map(async (departamento) => {
        try {
          const response = await axios.get(departamento.edificio);
          departamento.edificioDetalle = response.data;
        } catch (error) {
          console.error('Error obteniendo detalles del edificio:', error);
        }
      });

      // Espera a que todas las solicitudes se completen
      await Promise.all(departamentosPromises);
    }
  }
};
</script>

<style scoped>
/* agregar ---- */
</style>