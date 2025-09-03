let correo = document.getElementById('email');
let contrasena = document.getElementById('password');

function validarLogin(event) {
    event.preventDefault();

    if (correo.value == "" && contrasena.value == "") {
        Swal.fire({
            title: "Error!",
            text: "Debes ingresar tu correo y contraseña",
            icon: "error"
        });
    } else if (contrasena.value == "") {
        Swal.fire({
            title: "Error!",
            text: "Debes ingresar tu contraseña",
            icon: "error"
        });
    } else if (correo.value == "") {
        Swal.fire({
            title: "Error!",
            text: "Debes ingresar tu correo",
            icon: "error"
        });
    } else {
        //guardar valor del correo para ver si lo puedo remplazar en el nav :D
        //ojala funcione a ver si me acuerdo ajajajajaj.
        localStorage.setItem("usuario",correo.value)
        Swal.fire({
            title: "Bienvenido!",
            text: correo.value,
            icon: "success",
            timer: 1500,
            showConfirmButton: false
        }).then(() => {
            window.location.href = "index.html";
        });
    }
}
