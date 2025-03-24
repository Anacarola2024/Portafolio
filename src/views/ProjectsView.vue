<template>
    <div class="projects-view">
      <div class="container">
        <h1>Proyectos Realizados</h1>
        
        <div class="project-list">
          <div class="project-card" v-for="project in projects" :key="project.id">
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
            <a :href="project.link" target="_blank" class="btn btn-info">Ver Proyecto</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectsView',
    data() {
      return {
        projects: [
          {
            id: 1,
            name: 'Viajes Chile Actualizado',
            description: 'Landing page de viajes.Es un proyecto en el que utilice  HTML,CSS,sass,bootstrap y JS.',
            link: 'https://github.com/Anacarola2024/actualizacion-viajes-Chile.git'
          },
          {
            id: 2,
            name: 'Programacion Javascript',
            description: 'Sitio web para registrar comentarios, agregar tablas con informacion y atributos. Es un proyecto con JS, HTML y CSS.',
            link: 'https://github.com/Anacarola2024/Prueba-programacion-Avanzada-Javasript.git'
          },
          {
            id: 3,
            name: 'PokeAp',
            description: 'Aplicacion con tematica de la serie Pokemon haciendo uso de la API. Aplicación web construida con Vue.js .',
            link: 'https://github.com/Anacarola2024/pokeAp.git'
          },
          {
          id: 3,
            name: 'ConsumoDatos',
            description: 'mini aplicacion con tematica de chat. que permite a los usuarios enviar mensajes y recibir respuestas. Aplicación web construida con Vue.js .',
            link: 'https://github.com/Anacarola2024/DesafioConsumoDatos.git'
          },

          {
          id: 3,
            name: 'Planificador laboral',
            description: 'formulario de planificador laboral  reciclable que permite agregar mas datos. Aplicación web construida con Vue.js .',
            link: 'https://github.com/Anacarola2024/PlanificadorLaboral.git'
          },

          {
            name: 'Play Music',
            description: 'Reproductor de musica. Aplicación web construida con Vue.js, HTML y CSS.',
            link: 'https://github.com/Anacarola2024/PlayMusic08.git'
          },
          
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .projects-view {
  padding: 60px 20px;
  background-color: #f8f9fa;
  background-image: url('@/assets/img/Fondo de Pantalla Abstracto Formas Orgánicas Rosado.png');
  background-size: cover;
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
  margin-bottom: 20px;
}

.project-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

/* Ajustes para pantallas medianas */
@media (min-width: 768px) {
  .project-list {
    grid-template-columns: 1fr 1fr;
  }
}

/* Ajustes para pantallas grandes */
@media (min-width: 1024px) {
  .project-list {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.project-card {
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.project-card:hover {
  transform: scale(1.05);
}

.project-card h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.project-card p {
  font-size: 1rem;
  margin-bottom: 10px;
}

.project-card .btn {
  font-size: 1rem;
  padding: 10px 20px;
  background-color: #17a2b8;
  color: white;
  border-radius: 5px;
  text-decoration: none;
}

.project-card .btn:hover {
  background-color: #138496;
}

  </style>
  
  