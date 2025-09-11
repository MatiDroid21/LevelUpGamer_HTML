fetch('productos.json')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('productosContainer');

        data.forEach(producto => {
            // Crear tarjeta con los productos a partir del json
            const card = document.createElement('div');
            card.className = 'col-sm-6 col-md-4 col-lg-3 producto';
            card.innerHTML = `
            <div class="card h-100 shadow-sm card-hover">
              <div class="img-container">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
              </div>
              <div class="card-body d-flex flex-column p-3">
                <span>${producto.id}</span>
                <h5 class="card-title text-center">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <strong class="text-success">$${producto.precio.toLocaleString('es-CL')}</strong>
                <a href="#" class="btn btn-success mt-auto" data-bs-toggle="modal" data-bs-target="#modal${producto.id}">Ver más</a>
              </div>
            </div>
          `;

            container.appendChild(card);

            // Crear modal
            const modal = document.createElement('div');
            modal.className = 'modal fade';
            modal.id = `modal${producto.id}`;
            modal.tabIndex = -1;
            modal.innerHTML = `
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">${producto.nombre}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                </div>
                <div class="modal-body text-center">
                  <img src="${producto.imagen}" class="img-fluid mb-3" alt="${producto.nombre}">
                  <p>${producto.descripcion}</p>
                  <strong class="text-success">$${producto.precio.toLocaleString('es-CL')}</strong>
                </div>
               <div class="modal-footer justify-content-center">
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
  <button type="button" class="btn btn-success btn-comprar"
    data-id="${producto.id}" data-nombre="${producto.nombre}" data-precio="${producto.precio}">
    Comprar
  </button>
</div>

              </div>
            </div>
          `;
            document.body.appendChild(modal);
        });
    });