const mongoose = require('mongoose');

// Definir el esquema para los personajes
const characterSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },  // Nombre del personaje
  likes: { type: Number, default: 0 },  // Número de "likes"
  dislikes: { type: Number, default: 0 },  // Número de "dislikes"
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;