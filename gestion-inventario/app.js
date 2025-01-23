const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public'))); // Asegúrate de que la carpeta 'public' esté bien configurada

// Definir ruta para servir el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'app.html'));
});

// Conexión a la base de datos y otras configuraciones de Express (como rutas, etc.)
const categoriaRoutes = require('./routes/categoriaRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const productoRoutes = require('./routes/productoRoutes');
const ventaRoutes = require('./routes/ventaRoutes');

app.use('/categorias', categoriaRoutes);
app.use('/clientes', clienteRoutes);
app.use('/productos', productoRoutes);
app.use('/ventas', ventaRoutes);

// Levantar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
