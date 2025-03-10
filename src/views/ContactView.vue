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
    padding: 60px 0;
    background-color: #ffffff;
    background-image: url('@/assets/img/Fondo de Pantalla Gradiente Rosa y Celeste Pastel.png');
  }
  
  .container {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  ul li {
    margin-bottom: 10px;
  }
  
  a {
    color: #007bff;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  