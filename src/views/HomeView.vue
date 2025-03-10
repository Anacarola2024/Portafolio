<template>
    <div class="home-view">
      <div class="container">
        <h1>Bienvenidos a mi Portafolio</h1>
        <p>
          Soy Ana Carolina Cubillos, una desarrolladora frontend apasionada por crear aplicaciones web.
          A continuación, puedes ver algunos de mis proyectos más destacados.
        </p>
        <router-link to="/projects" class="btn btn-primary">Ver Proyectos</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView'
  }
  </script>
  
  <style scoped>

  .home-view {
    padding: 60px 0;
    background-color: #e9ecef;
    background-image: url('@/assets/img/Fondo de Pantalla Abstracto Formas Orgánicas Rosado.png'); 
  }
  
  .container {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  .btn {
    font-size: 1.1rem;
    padding: 10px 20px;
  }
  </style>
  