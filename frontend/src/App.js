import React, { useState, useEffect } from 'react';
import { fetchRandomCharacter, voteCharacter } from './services/api'; // Importa fetchRandomCharacter
import Queries from './components/Queries'; // Importa el componente Queries
import './App.css';

function App() {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para obtener un nuevo personaje aleatorio
  const getNewCharacter = async () => {
    setLoading(true);
    setError(null);
    try {
      const randomCharacter = await fetchRandomCharacter(); // Llama a la función correcta
      setCharacter(randomCharacter);
      setLoading(false);
    } catch (error) {
      setError('Error loading character. Please try again.');
      setLoading(false);
    }
  };

  // Efecto para cargar un personaje al inicio
  useEffect(() => {
    getNewCharacter();
  }, []);

  // Función para manejar los votos
  const handleVote = async (voteType) => {
    if (character) {
      try {
        await voteCharacter(character.name, voteType);
        getNewCharacter(); // Obtiene un nuevo personaje después de votar
      } catch (error) {
        console.error('Error voting:', error);
      }
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Like & Dislike App</h1>
      </header>
      <main>
        {/* Sección para mostrar un personaje aleatorio y votar */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <div>
              <button onClick={() => handleVote('like')}>Like</button>
              <button onClick={() => handleVote('dislike')}>Dislike</button>
            </div>
          </div>
        )}

        {/* Componente de consultas adicionales */}
        <section>
          <h3>Consultas de Votos</h3>
          <Queries />
        </section>
      </main>
      <footer>
        <p>© 2024 - Aplicación de Votación :)</p>
      </footer>
    </div>
  );
}

export default App;