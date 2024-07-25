<template>

<div id="app1">
  <nav>
       <!-- Esto es un comentario en HTML 
      [<span><router-link to="/estudiantes">Estudiantes</router-link></span>]
      [<span><router-link to="/telefonos">Teléfonos</router-link></span>]
      [<span><router-link to="/telefonos-dos">Teléfonos 2</router-link></span>]-->
      [<span><router-link to="/edificios">Edificios</router-link></span>]
      [<span><router-link to="/departamentos">Departamentos</router-link></span>]
      [<span><router-link to="/departamentos-dos">Departamentos 2</router-link></span>]

  </nav>
  <router-view></router-view>
</div>

</template>

<script>


export default {
  name: 'App'

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
