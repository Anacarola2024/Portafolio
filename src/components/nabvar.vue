<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Mi Portafolio</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#acerca" @click="closeMenu">Acerca de mí</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#proyectos" @click="closeMenu">Proyectos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contacto" @click="closeMenu">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    closeMenu() {
      const navbar = document.querySelector(".navbar-collapse");
      if (navbar.classList.contains("show")) {
        new bootstrap.Collapse(navbar).hide();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.navbar {
  .navbar-brand {
    font-weight: bold;
  }

  .nav-link {
    font-size: 1.1rem;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #ffeb3b;
    }
  }

  /* Botón de hamburguesa */
  .navbar-toggler {
    border: none;
    outline: none;
  }

  /* Ajustes en pantallas pequeñas */
  @media (max-width: 991px) {
    .navbar-collapse {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.9);
      padding: 15px;
      z-index: 1000;
      overflow: auto;
    }

    .nav-item {
      text-align: center;
      padding: 10px 0;
    }
  }
}
</style>
