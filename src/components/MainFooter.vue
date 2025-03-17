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
  width: 100%;
  text-align: center;
  padding: 20px 0;
  background-color: #212529; /* Color oscuro */
  color: white;

  .social-icons {
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    gap: 15px;
  }

  /* Ajuste en móviles */
  @media (max-width: 768px) {
    padding: 15px 0;
    font-size: 0.9rem;

    .social-icons {
      font-size: 1.2rem;
    }
  }
}
</style>