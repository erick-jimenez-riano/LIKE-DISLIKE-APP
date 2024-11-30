const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Para manejar CORS correctamente
require('dotenv').config();

const app = express();
const PORT = 5000;

// Configurar CORS para permitir solicitudes del frontend
app.use(cors({ origin: 'http://localhost:3000' }));  // Cambia la URL si es necesario

// Conectar a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a MongoDB Atlas'))
  .catch((err) => {
    console.error('Error conectando a MongoDB Atlas:', err.message);
  });

// Middleware
app.use(express.json());  // Para poder leer JSON en las solicitudes

// Importar las rutas
const voteRoutes = require('./routes/voteRoutes');
app.use('/api/votes', voteRoutes);  // Prefijo para las rutas de votos

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Backend funcionando correctamente');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});