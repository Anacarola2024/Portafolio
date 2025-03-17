<template>
    <div class="home-view">
      <div class="container">
        <h1>Bienvenidos a mi Portafolio</h1>
        <h3>
          Soy Ana Carolina Cubillos, una desarrolladora frontend apasionada por crear aplicaciones web.
          A continuación, puedes ver algunos de mis proyectos más destacados.
        </h3>
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
    max-width: 500%;
    margin: 0 auto;
    text-align: center;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 2%;
  }
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 2%;
  }
  
  .btn {
    font-size: 1.1rem;
    padding: 3%;
  }
  footer {
  position: fixed;
  bottom: 0;
  width: 1000%;
}
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

main {
  min-height: 100vh;
}


  </style>
  