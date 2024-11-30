const express = require('express');  // Importa express
const router = express.Router(); // Crea una instancia de Router
const Character = require('../models/Character');  // Importa el modelo Character

// Endpoint para registrar un voto
router.post('/', async (req, res) => {
  const { character, voteType } = req.body;

  // Validación de datos de entrada
  if (!character || !voteType) {
    return res.status(400).json({ error: 'Faltan datos de la votación' });
  }

  // Validación de tipo de voto
  if (voteType !== 'like' && voteType !== 'dislike') {
    return res.status(400).json({ error: 'El tipo de voto no es válido' });
  }

  try {
    // Buscar o crear el personaje en la base de datos
    let char = await Character.findOne({ name: character });

    // Si no existe, se crea el personaje
    if (!char) {
      char = new Character({ name: character });
    }

    // Actualizar los votos según el tipo de voto
    if (voteType === 'like') {
      char.likes += 1;
    } else if (voteType === 'dislike') {
      char.dislikes += 1;
    }

    // Guardar el personaje actualizado en la base de datos
    await char.save();

    // Responder con la cantidad de likes y dislikes
    res.json({ message: 'Voto registrado', likes: char.likes, dislikes: char.dislikes });
  } catch (error) {
    console.error('Error al guardar el voto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Obtener el personaje con más likes
router.get('/most-likes', async (req, res) => {
  try {
    const mostLikedCharacter = await Character.findOne().sort({ likes: -1 });  // Ordenar por likes descendente
    if (!mostLikedCharacter) {
      return res.status(404).json({ error: 'No hay personajes registrados' });
    }
    res.json({ name: mostLikedCharacter.name, likes: mostLikedCharacter.likes });
  } catch (error) {
    console.error('Error al obtener el personaje con más likes:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Obtener el personaje con más dislikes
router.get('/most-dislikes', async (req, res) => {
  try {
    const mostDislikedCharacter = await Character.findOne().sort({ dislikes: -1 });  // Ordenar por dislikes descendente
    if (!mostDislikedCharacter) {
      return res.status(404).json({ error: 'No hay personajes registrados' });
    }
    res.json({ name: mostDislikedCharacter.name, dislikes: mostDislikedCharacter.dislikes });
  } catch (error) {
    console.error('Error al obtener el personaje con más dislikes:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Obtener el último personaje evaluado
router.get('/last-evaluated', async (req, res) => {
  try {
    const lastEvaluatedCharacter = await Character.findOne().sort({ _id: -1 }).limit(1);  // Último insertado
    if (!lastEvaluatedCharacter) {
      return res.status(404).json({ error: 'No hay personajes evaluados' });
    }
    res.json({ name: lastEvaluatedCharacter.name, likes: lastEvaluatedCharacter.likes, dislikes: lastEvaluatedCharacter.dislikes });
  } catch (error) {
    console.error('Error al obtener el último personaje evaluado:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Obtener el estado de Pikachu
router.get('/pikachu-status', async (req, res) => {
  try {
    const pikachu = await Character.findOne({ name: 'Pikachu' });
    if (!pikachu) {
      return res.status(404).json({ error: 'Pikachu no encontrado' });
    }
    res.json({ likes: pikachu.likes, dislikes: pikachu.dislikes });
  } catch (error) {
    console.error('Error al obtener el estado de Pikachu:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;  // Exporta el router para usarlo en el archivo principal