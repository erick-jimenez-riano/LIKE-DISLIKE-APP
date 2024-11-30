import React, { useState, useEffect } from 'react';
import { fetchRandomCharacter } from '../services/api';
import axios from 'axios';

function CharacterCard({ setCharacter }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  // Fetch character data cuando el componente se monta
  useEffect(() => {
    const loadCharacter = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await fetchRandomCharacter();
        setCharacter(data);  // Pasamos el personaje a App.js
        setLike(data.likes || 0);  // Si tiene votos previos, los establecemos
        setDislike(data.dislikes || 0);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadCharacter();
  }, [setCharacter]);

  // Función para votar por el personaje
  const handleVote = async (voteType) => {
    // Verificar que setCharacter.name esté disponible
    console.log("Voto enviado:", {
      character: setCharacter.name,
      voteType: voteType
    });
  
    try {
      // Enviar la votación al backend
      const response = await axios.post('http://localhost:5000/api/votes', {
        character: setCharacter.name,
        voteType: voteType,
      });
  
      // Log de respuesta del backend
      console.log("Respuesta del backend:", response.data);
  
      // Actualizar los votos según la respuesta del backend
      if (voteType === 'like') {
        setLike(response.data.likes);
      } else {
        setDislike(response.data.dislikes);
      }
    } catch (error) {
      console.error('Error al votar', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading character. Please try again.</p>;
  }

  return (
    <div>
      <h2>{setCharacter.name}</h2>
      <img src={setCharacter.image} alt={setCharacter.name} />
      <p>Source: {setCharacter.source}</p>
      <div>
        <button onClick={() => handleVote('like')}>Like</button>
        <button onClick={() => handleVote('dislike')}>Dislike</button>
      </div>
      <div>
        <p>Likes: {like}</p>
        <p>Dislikes: {dislike}</p>
      </div>
    </div>
  );
}

export default CharacterCard;