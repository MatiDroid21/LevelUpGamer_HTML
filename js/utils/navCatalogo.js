document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("menuPrincipal");
  const user = localStorage.getItem("usuario");

  if (user) {
    nav.innerHTML = `
      <li class="nav-item">
        <a class="nav-link">
          <i class="fa-solid fa-user fa-fade" style="color: #1fc749;"></i> ${user}
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../index.html">
          <i class="fa-solid fa-home fa-fade" style="color: #165eda;"></i> Inicio
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="catalogo.html">
          <i class="fa-solid fa-gamepad fa-fade" style="color: #165eda;"></i> Catálogo
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="logout">
          <i class="fa-solid fa-right-from-bracket fa-fade" style="color: #e63946;"></i> Cerrar sesión
        </a>
      </li>
    `;

    // Logout
    document.getElementById("logout").addEventListener("click", () => {
      localStorage.removeItem("usuario");
      window.location.reload();
    });
  } else {
    // Si no hay usuario, redirige al index
    window.location.href = "../index.html";
  }

  // Filtro de buscador
  const buscador = document.getElementById("buscador");
  if (buscador) {
    buscador.addEventListener("keyup", function () {
      const texto = this.value.toLowerCase();
      const productos = document.querySelectorAll("#productos .producto");
      productos.forEach(prod => {
        const nombre = prod.textContent.toLowerCase();
        prod.style.display = nombre.includes(texto) ? "" : "none";
      });
    });
  }
});
