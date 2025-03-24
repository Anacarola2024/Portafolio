<template>
    <div class="contact-view">
      <div class="container">
        <h1>Contacto</h1>
        <p>Si tienes alguna pregunta o deseas colaborar en un proyecto, no dudes en contactarme.</p>
        
        <!-- Aquí podrías agregar un formulario, o solo tus datos de contacto -->
        <div>
          <h3>Redes Sociales</h3>
          <ul>
            <li><a href="https://www.linkedin.com/in/ana-carolina-cubillos-echeverria-51980256" target="_blank">LinkedIn</a></li>
            <li><a href="https://github.com/Anacarola2024" target="_blank">GitHub</a></li>
            <li><a href="mailto: cubillosecheverria@gmail.com">Email</a></li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactView'
  }
  </script>
  
  <style scoped>
.contact-view {
  padding: 60px 20px;
  background-color: #ffffff;
  background-image: url('@/assets/img/Fondo de Pantalla Gradiente Rosa y Celeste Pastel.png');
  background-size: cover; /* Para que la imagen cubra todo */
  background-position: center;
  background-repeat: no-repeat;
}

.container {
  max-width: 90%; /* Cambia de 50% a 90% para mejorar en móviles */
  height: auto;
  margin: 0 auto;
  text-align: center;
}

@media (min-width: 768px) {
  .container {
    max-width: 60%; /* Un poco más grande en pantallas medianas */
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 50%; /* Solo en pantallas grandes */
  }
}
</style>