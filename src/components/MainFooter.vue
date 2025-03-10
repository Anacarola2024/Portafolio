<template>
  <footer class="bg-dark text-white text-center py-4">
    <div class="container">
      <p>&copy; 2025 Mi Portafolio. Todos los derechos reservados.</p>
      <div class="social-icons">
        <a href="https://gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i></a>
        <a href="https://github.com" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://linkedin.com" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>

<style scoped lang="scss">
footer {
  .social-icons {
    font-size: 1.5rem;
  }

  .social-icons a {
    transition: color 0.3s ease;
  }

  .social-icons a:hover {
    color: white;
  }
  .social-icons i {
    margin: 0 15px;
  }
}
</style>