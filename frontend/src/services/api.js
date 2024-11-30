import axios from 'axios';

// Base URL del backend
const BASE_URL = 'http://localhost:5000/api/votes';

// Función para obtener un personaje aleatorio de Rick and Morty
export const fetchRickAndMortyCharacter = async () => {
  const randomId = Math.floor(Math.random() * 826) + 1; // Hay 826 personajes
  const url = `https://rickandmortyapi.com/api/character/${randomId}`;
  try {
    const response = await axios.get(url);
    return {
      name: response.data.name,
      image: response.data.image,
      source: 'Rick and Morty',
    };
  } catch (error) {
    throw new Error('Error fetching Rick and Morty character.');
  }
};

// Función para obtener un Pokémon aleatorio
export const fetchPokemonCharacter = async () => {
  const randomId = Math.floor(Math.random() * 1008) + 1; // Hay 1008 Pokémon
  const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
  try {
    const response = await axios.get(url);
    return {
      name: response.data.name,
      image: response.data.sprites.front_default,
      source: 'Pokémon',
    };
  } catch (error) {
    throw new Error('Error fetching Pokémon character.');
  }
};

// Función para obtener un superhéroe aleatorio
const SUPERHERO_API_TOKEN = '44c490b07c8f9dd95cbb6f5ee71582e2'; // Reemplaza con tu token

export const fetchSuperheroCharacter = async () => {
  const randomId = Math.floor(Math.random() * 731) + 1; // Hay 731 superhéroes
  const url = `https://superheroapi.com/api.php/${SUPERHERO_API_TOKEN}/${randomId}`;
  try {
    const response = await axios.get(url);
    return {
      name: response.data.name,
      image: response.data.image.url,
      source: 'Superhéroes',
    };
  } catch (error) {
    throw new Error('Error fetching Superhero character.');
  }
};

// Función para obtener un personaje aleatorio de cualquiera de las 3 APIs
export const fetchRandomCharacter = async () => {
  const sources = [
    fetchRickAndMortyCharacter,
    fetchPokemonCharacter,
    fetchSuperheroCharacter,
  ];
  const randomIndex = Math.floor(Math.random() * sources.length);
  try {
    return await sources[randomIndex]();
  } catch (error) {
    console.error(error.message);
    throw new Error('Error fetching a random character.');
  }
};

// Función para registrar los votos de los personajes en el backend
export const voteCharacter = async (characterName, voteType) => {
  try {
    const response = await axios.post(`${BASE_URL}`, {
      character: characterName,
      voteType: voteType,
    });
    return response.data;
  } catch (error) {
    console.error('Error al registrar el voto:', error);
    throw new Error('Error registrando el voto.');
  }
};

// Función para obtener el personaje con más likes
export const getCharacterWithMostLikes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/most-likes`);
    return response.data; // Asumimos que el backend devuelve { name, likes }
  } catch (error) {
    console.error('Error obteniendo el personaje con más likes:', error);
    throw new Error('Error fetching character with most likes.');
  }
};

// Función para obtener el personaje con más dislikes
export const getCharacterWithMostDislikes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/most-dislikes`);
    return response.data; // Asumimos que el backend devuelve { name, dislikes }
  } catch (error) {
    console.error('Error obteniendo el personaje con más dislikes:', error);
    throw new Error('Error fetching character with most dislikes.');
  }
};

// Función para obtener el último personaje evaluado
export const getLastEvaluatedCharacter = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/last-evaluated`);
    return response.data; // Asumimos que el backend devuelve { name, votes }
  } catch (error) {
    console.error('Error obteniendo el último personaje evaluado:', error);
    throw new Error('Error fetching last evaluated character.');
  }
};

// Función para verificar el estatus de Pikachu
export const getPikachuStatus = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/pikachu-status`);
    return response.data; // Asumimos que el backend devuelve { like, dislike }
  } catch (error) {
    console.error('Error obteniendo el estado de Pikachu:', error);
    throw new Error('Error fetching Pikachu status.');
  }
};