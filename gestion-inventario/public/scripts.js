// Función para obtener las categorías y cargarlas en el formulario de productos
async function obtenerCategorias() {
    const response = await fetch('http://localhost:3000/categorias');
    const categorias = await response.json();
    const categoriaSelect = document.getElementById('categoria-producto');
  
    categorias.forEach(categoria => {
      const option = document.createElement('option');
      option.value = categoria.id;
      option.textContent = categoria.nombre;
      categoriaSelect.appendChild(option);
    });
  }
  
  // Función para cargar las categorías en el formulario al cargar la página
  document.addEventListener('DOMContentLoaded', obtenerCategorias);
  
  // Función para manejar la creación de una categoría
  document.getElementById('form-categoria').addEventListener('submit', async (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombre-categoria').value;
    const descripcion = document.getElementById('descripcion-categoria').value;
  
    await fetch('http://localhost:3000/categorias', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, descripcion }),
    });
  
    alert('Categoría creada');
    obtenerCategorias(); // Actualiza la lista de categorías
  });
  
  // Función para crear un producto
  document.getElementById('form-producto').addEventListener('submit', async (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombre-producto').value;
    const precio = document.getElementById('precio-producto').value;
    const cantidad_stock = document.getElementById('cantidad-producto').value;
    const categoria_id = document.getElementById('categoria-producto').value;
  
    await fetch('http://localhost:3000/productos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, precio, cantidad_stock, categoria_id }),
    });
  
    alert('Producto creado');
    // Aquí puedes agregar una función para refrescar la lista de productos si es necesario
  });

  // Mostrar las secciones al hacer clic en los botones del menú lateral
document.getElementById('categorias-btn').addEventListener('click', () => {
  showSection('categorias');
});
document.getElementById('productos-btn').addEventListener('click', () => {
  showSection('productos');
});
document.getElementById('clientes-btn').addEventListener('click', () => {
  showSection('clientes');
});
document.getElementById('ventas-btn').addEventListener('click', () => {
  showSection('ventas');
});

// Función para mostrar la sección correspondiente
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  const sectionToShow = document.getElementById(sectionId);
  sectionToShow.style.display = 'block';
  document.getElementById('content-title').textContent = `Gestión de ${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}`;
}
// CRUD para categorías
document.getElementById('form-categoria').addEventListener('submit', async (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre-categoria').value;
  const response = await fetch('http://localhost:3000/categorias', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre }),
  });
  if (response.ok) {
    alert('Categoría agregada');
    loadCategorias();
  }
});

async function loadCategorias() {
  const response = await fetch('http://localhost:3000/categorias');
  const categorias = await response.json();
  const lista = document.getElementById('categorias-lista');
  lista.innerHTML = '';
  categorias.forEach(categoria => {
    const li = document.createElement('li');
    li.textContent = categoria.nombre;
    lista.appendChild(li);
  });
}

loadCategorias();
  // Función para agregar un producto
document.getElementById('form-producto').addEventListener('submit', async (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre-producto').value;
  const precio = document.getElementById('precio-producto').value;
  const cantidad = document.getElementById('cantidad-producto').value;
  const categoria_id = document.getElementById('categoria-producto').value;

  const response = await fetch('http://localhost:3000/productos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, precio, cantidad, categoria_id }),
  });

  if (response.ok) {
    alert('Producto agregado');
    loadProductos(); // Recargar la lista de productos
  }
});

// Función para cargar los productos
async function loadProductos() {
  const response = await fetch('http://localhost:3000/productos');
  const productos = await response.json();
  const lista = document.getElementById('productos-lista');
  lista.innerHTML = '';

  productos.forEach(producto => {
    const li = document.createElement('li');
    li.textContent = `${producto.nombre} - $${producto.precio} (Stock: ${producto.cantidad})`;

    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.addEventListener('click', () => deleteProducto(producto.id));
    li.appendChild(eliminarBtn);

    lista.appendChild(li);
  });
}

// Función para eliminar un producto
async function deleteProducto(productoId) {
  const response = await fetch(`http://localhost:3000/productos/${productoId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    alert('Producto eliminado');
    loadProductos(); // Recargar la lista de productos
  }
}

loadProductos(); // Cargar productos al inicio
// Función para agregar un cliente
document.getElementById('form-cliente').addEventListener('submit', async (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre-cliente').value;
  const apellido = document.getElementById('apellido-cliente').value;
  const email = document.getElementById('email-cliente').value;
  const telefono = document.getElementById('telefono-cliente').value;

  const response = await fetch('http://localhost:3000/clientes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, apellido, email, telefono }),
  });

  if (response.ok) {
    alert('Cliente agregado');
    loadClientes(); // Recargar la lista de clientes
  }
});

// Función para cargar los clientes
async function loadClientes() {
  const response = await fetch('http://localhost:3000/clientes');
  const clientes = await response.json();
  const lista = document.getElementById('clientes-lista');
  lista.innerHTML = '';

  clientes.forEach(cliente => {
    const li = document.createElement('li');
    li.textContent = `${cliente.nombre} ${cliente.apellido} - ${cliente.email}`;

    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.addEventListener('click', () => deleteCliente(cliente.id));
    li.appendChild(eliminarBtn);

    lista.appendChild(li);
  });
}

// Función para eliminar un cliente
async function deleteCliente(clienteId) {
  const response = await fetch(`http://localhost:3000/clientes/${clienteId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    alert('Cliente eliminado');
    loadClientes(); // Recargar la lista de clientes
  }
}

loadClientes(); // Cargar clientes al inicio
// Función para registrar una venta
document.getElementById('form-venta').addEventListener('submit', async (e) => {
  e.preventDefault();
  const producto_id = document.getElementById('producto-venta').value;
  const cantidad = document.getElementById('cantidad-venta').value;
  const fecha_venta = document.getElementById('fecha-venta').value;
  const total = document.getElementById('total-venta').value;

  const response = await fetch('http://localhost:3000/ventas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ producto_id, cantidad, fecha_venta, total }),
  });

  if (response.ok) {
    alert('Venta registrada');
    loadVentas(); // Recargar la lista de ventas
  }
});

// Función para cargar las ventas
async function loadVentas() {
  const response = await fetch('http://localhost:3000/ventas');
  const ventas = await response.json();
  const lista = document.getElementById('ventas-lista');
  lista.innerHTML = '';

  ventas.forEach(venta => {
    const li = document.createElement('li');
    li.textContent = `Producto ID: ${venta.producto_id} - ${venta.cantidad} unidades - $${venta.total}`;

    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.addEventListener('click', () => deleteVenta(venta.id));
    li.appendChild(eliminarBtn);

    lista.appendChild(li);
  });
}

// Función para eliminar una venta
async function deleteVenta(ventaId) {
  const response = await fetch(`http://localhost:3000/ventas/${ventaId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    alert('Venta eliminada');
    loadVentas(); // Recargar la lista de ventas
  }
}

loadVentas(); // Cargar ventas al inicio
