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
  padding: 60px 20px;
  background-color: #e9ecef;
  background-image: url('@/assets/img/Fondo de Pantalla Abstracto Formas Orgánicas Rosado.png'); 
  background-size: cover; /* Para que la imagen cubra todo */
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

h3 {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.btn {
  font-size: 1.1rem;
  padding: 10px 20px;
}

/* Ajustes para pantallas más pequeñas */
@media (min-width: 768px) {
  .container {
    max-width: 60%;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 50%;
  }
}

/* Footer fijo en la parte inferior */
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
  padding: 10px 0;
}



  </style>
  