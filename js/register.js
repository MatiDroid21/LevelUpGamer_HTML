 function validarRegistro(event) {
    const nombre = document.getElementById('name').value.trim();
    const correo = document.getElementById('email').value.trim();
    const direccion = document.getElementById('address').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (!nombre || !correo || !direccion || !password || !confirmPassword) {
      event.preventDefault();
      Swal.fire({
        title: "Error!",
        text: "Todos los campos son obligatorios.",
        icon: "error"
      });
      return;
    }

    if (password !== confirmPassword) {
      event.preventDefault();
      Swal.fire({
        title: "Error!",
        text: "Las contraseñas no coinciden.",
        icon: "error"
      });
      return;
    }
  }