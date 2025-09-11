document.addEventListener("DOMContentLoaded", () => {
    // definicion de variables
    const nav = document.querySelector(".navbar-nav");
    const user = localStorage.getItem("usuario");


    if (user) {
        // validamos lo si hay un usuario en localstorage, modificamos el navbar mostrando nuevos enlaces para su navegación.
        nav.innerHTML = `
      <li class="nav-item">
        <a class="nav-link"><i class="fa-solid fa-user fa-fade" style="color: #1fc749;"></i> ${user}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="quienes-somos.html"><i class="fa-solid fa-people-line fa-fade" style="color: #63E6BE;"></i> Quienes Somos</a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="pages/catalogo.html"><i class="fa-solid fa-gamepad fa-fade" style="color: #165eda;"></i> Catalogo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contacto.html"><i class="fa-solid fa-address-book fa-fade" style="color: #1ce368;"></i> Contactanos</a>
      </li>
       
      
      
      <li class="nav-item">
        <a class="nav-link" href="#" id="logout"><i class="fa-solid fa-arrow-right-from-bracket fa-fade" style="color: #17e856;"></i> |Cerrar sesión</a>
      </li>

    `;
        /*
        al cerrar sesion borramos el valor del "usuario", asi le damos el paso
        a que pongan otro correo.
        */
        document.getElementById("logout").addEventListener("click", () => {
            localStorage.removeItem("usuario");
            window.location.reload();
        });
    } else {
        // si no esta logueado debe aparecer el iniciar sesion
        nav.innerHTML += `
                                <li class="nav-item">
                                    <a class="nav-link" href="login.html"> <i class="fa-solid fa-arrow-right-to-bracket fa-fade" style="color: #11bb88;"></i> Iniciar Sesión</a>
                                </li>
                                `;
    }
});
