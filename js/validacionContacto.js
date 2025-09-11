document.getElementById("formContacto").addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const tipo = document.getElementById("tipoMensaje").value;
      const mensaje = document.getElementById("mensaje").value.trim();

      if (!nombre || !email || !tipo || !mensaje) {
        Swal.fire({
          icon: "error",
          title: "Campos incompletos",
          text: "Por favor completa todos los campos antes de enviar."
        });
        return;
      }

      const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (!emailRegex.test(email)) {
        Swal.fire({
          icon: "warning",
          title: "Correo inválido",
          text: "Por favor ingresa un correo electrónico válido."
        });
        return;
      }

      // Si pasa validaciones
      Swal.fire({
        icon: "success",
        title: "¡Mensaje enviado!",
        html: `Gracias por contactarnos, <strong>${nombre}</strong>.<br>Tipo de mensaje: <strong>${tipo}</strong>.<br>Te responderemos pronto.`
      });

      // Reset del formulario
      this.reset();
    });