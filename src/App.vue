<template>
  <div id="app">
    <MainHeader />

    <!-- Aquí se cargarán las vistas dependiendo de la ruta -->
    <router-view> </router-view>

    <MainFooter />
  </div>
</template>

<script>

import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter,
  
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
/* Asegura que el html y body ocupen el 100% de la altura */
html, body {
  height: 100%;
  margin: 0;
}

/* Estilos para el contenedor principal */
#app {
  display: flex;
  flex-direction: column;
  min-height: 200vh; /* Ocupa al menos el 100% de la altura de la ventana */
}

/* El main se expande para ocupar el espacio disponible */
main {
  flex: 1;
}



main {
  flex: 1;
}

@import '@/assets/sass/main'; // Si tienes un archivo SASS global

body {
 // background-color: #f1f1f1;  /* Fondo claro para que se vea el patrón */
  

  background-repeat: repeat;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  color: #333;  /* Color del texto */
}


main {
  padding-top: 60px;
  /* Espacio para que no se superponga el navbar */
}
</style>
