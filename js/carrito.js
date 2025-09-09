// Inicializar carrito desde localStorage
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para mostrar el carrito en pantalla
function mostrarCarrito() {
    const contenedor = document.getElementById('carrito');
    contenedor.innerHTML = '';

    if(carrito.length === 0){
        contenedor.innerHTML = '<p>Tu carrito está vacío</p>';
        return;
    }

    // Crear lista de productos
    const lista = document.createElement('ul');
    lista.className = 'list-group mb-3';
    let total = 0;

    carrito.forEach((item, index) => {
        total += item.precio * item.cantidad;

        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            ${item.nombre} x ${item.cantidad}
            <span style='color:green'>$${(item.precio * item.cantidad).toLocaleString('es-CL')}</span>
            <button class="btn btn-sm btn-danger eliminar" data-index="${index}">✖</button>
        `;
        lista.appendChild(li);
    });

    contenedor.appendChild(lista);

    // Calcular descuento si el usuario es @duoc.cl
    const usuario = localStorage.getItem("usuario");
    let descuento = 0;
    if(usuario && usuario.endsWith("@duocuc.cl")){
        descuento = 0.20;
    }
    const totalConDescuento = total - total * descuento;

    // Mostrar total y botón de pagar
    const totalDiv = document.createElement('div');
    totalDiv.className = 'd-flex flex-column align-items-end mt-2';
    totalDiv.innerHTML = `
        <strong style='color:green'>Total: $${total.toLocaleString('es-CL')}</strong>
        ${descuento > 0 ? `<strong style='color:green'>Descuento DuocUC: -$${(total*descuento).toLocaleString('es-CL')}</strong>
        <strong style='color:green'>Total final: $${totalConDescuento.toLocaleString('es-CL')}</strong>` : ""}
        <button id="pagarCarrito" class="btn btn-success mt-2">Pagar</button>
    `;
    contenedor.appendChild(totalDiv);

    // Eliminar productos
    document.querySelectorAll('.eliminar').forEach(btn => {
        btn.addEventListener('click', e => {
            const index = e.target.dataset.index;
            carrito.splice(index, 1);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            mostrarCarrito();
        });
    });

    // Pagar carrito
    document.getElementById('pagarCarrito').addEventListener('click', () => {
        if(carrito.length === 0) return alert('El carrito está vacío');

        const confirmado = confirm(`El total a pagar es $${totalConDescuento.toLocaleString('es-CL')}. ¿Deseas confirmar la compra?`);
        if(confirmado){
            const ventas = JSON.parse(localStorage.getItem('ventas')) || [];
            
            ventas.push({
                fecha: new Date().toLocaleString(),
                items: carrito,
                total: totalConDescuento
            });
            localStorage.setItem('ventas', JSON.stringify(ventas));

            carrito = [];
            localStorage.removeItem('carrito');
            mostrarCarrito();

            alert('Pago simulado exitoso. Gracias por tu compra.');
        }
    });
}

// Añadir productos al carrito desde los botones "Comprar"
document.addEventListener('click', e => {
    if(e.target.classList.contains('btn-comprar')){
        const id = e.target.dataset.id;
        const nombre = e.target.dataset.nombre;
        const precio = Number(e.target.dataset.precio);

        const existing = carrito.find(item => item.id === id);
        let cantidadAgregada = 1;
        if(existing){
            existing.cantidad++;
            cantidadAgregada = existing.cantidad; // cantidad total en carrito
        } else {
            carrito.push({id, nombre, precio, cantidad: 1});
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarCarrito();

        // Mostrar feedback al usuario
        mostrarToast(`${nombre} agregado al carrito 🛒 (Cantidad: ${cantidadAgregada})`);
    }
});


// Función para mostrar notificación
// esta notificacion sirve para que el usuario cuando agregue productos al carro, le aparezca en un apartado de la pantalla
// que el producto se agregó al carrito
function mostrarToast(mensaje) {
    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-bg-success border-0 position-fixed top-0 end-0 m-3';
    toast.role = 'alert';
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">${mensaje}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    document.body.appendChild(toast);
    // creamos el bootstrap TOAST, esto funciona además porque importamos la biblioteca en los html.
    const bsToast = new bootstrap.Toast(toast, { delay: 2000 });
    bsToast.show();

    toast.addEventListener('hidden.bs.toast', () => toast.remove());
}


// Mostrar carrito al cargar la página
mostrarCarrito();
