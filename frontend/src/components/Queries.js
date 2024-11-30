import React, { useState } from 'react';
import {
  getCharacterWithMostLikes,
  getCharacterWithMostDislikes,
  getLastEvaluatedCharacter,
  getPikachuStatus,
} from '../services/api';

const Queries = () => {
  const [mostLikes, setMostLikes] = useState(null);
  const [mostDislikes, setMostDislikes] = useState(null);
  const [lastEvaluated, setLastEvaluated] = useState(null);
  const [pikachuStatus, setPikachuStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleGetMostLikes = async () => {
    try {
      const result = await getCharacterWithMostLikes();
      // Maneja el formato esperado: { name: "corviknight", likes: 100 }
      if (result && result.name && result.likes !== undefined) {
        setMostLikes(result);
      } else {
        throw new Error('Invalid response format for most likes.');
      }
      setError(null);
    } catch (err) {
      console.error('Error fetching character with most likes:', err);
      setError('Error fetching character with most likes.');
      setMostLikes(null);
    }
  };

  const handleGetMostDislikes = async () => {
    try {
      const result = await getCharacterWithMostDislikes();
      // Maneja el formato esperado: { name: "Angry Glorzo", dislikes: 1 }
      if (result && result.name && result.dislikes !== undefined) {
        setMostDislikes(result);
      } else {
        throw new Error('Invalid response format for most dislikes.');
      }
      setError(null);
    } catch (err) {
      console.error('Error fetching character with most dislikes:', err);
      setError('Error fetching character with most dislikes.');
      setMostDislikes(null);
    }
  };

  const handleGetLastEvaluated = async () => {
    try {
      const result = await getLastEvaluatedCharacter();
      // Maneja el formato esperado: { name: "Commander Rick", likes: 1, dislikes: 0 }
      if (result && result.name && result.likes !== undefined && result.dislikes !== undefined) {
        setLastEvaluated(result);
      } else {
        throw new Error('Invalid response format for last evaluated character.');
      }
      setError(null);
    } catch (err) {
      console.error('Error fetching last evaluated character:', err);
      setError('Error fetching last evaluated character.');
      setLastEvaluated(null);
    }
  };

  const handleGetPikachuStatus = async () => {
    try {
      const result = await getPikachuStatus();
      // Maneja el formato esperado (ya estaba correcto)
      if (result) {
        setPikachuStatus(result);
      } else {
        throw new Error('Invalid response format for Pikachu status.');
      }
      setError(null);
    } catch (err) {
      console.error('Error fetching Pikachu status:', err);
      setError('Error fetching Pikachu status.');
      setPikachuStatus(null);
    }
  };

  return (
    <div>
      <h2>Character Queries</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Botón para Most Likes */}
      <button onClick={handleGetMostLikes}>Get Character with Most Likes</button>
      {mostLikes && (
        <div>
          <h3>Most Likes</h3>
          <p>Name: {mostLikes.name}</p>
          <p>Likes: {mostLikes.likes}</p>
        </div>
      )}

      {/* Botón para Most Dislikes */}
      <button onClick={handleGetMostDislikes}>Get Character with Most Dislikes</button>
      {mostDislikes && (
        <div>
          <h3>Most Dislikes</h3>
          <p>Name: {mostDislikes.name}</p>
          <p>Dislikes: {mostDislikes.dislikes}</p>
        </div>
      )}

      {/* Botón para Last Evaluated */}
      <button onClick={handleGetLastEvaluated}>Get Last Evaluated Character</button>
      {lastEvaluated && (
        <div>
          <h3>Last Evaluated</h3>
          <p>Name: {lastEvaluated.name}</p>
          <p>Likes: {lastEvaluated.likes}</p>
          <p>Dislikes: {lastEvaluated.dislikes}</p>
        </div>
      )}

      {/* Botón para Pikachu Status */}
      <button onClick={handleGetPikachuStatus}>Get Pikachu Status</button>
      {pikachuStatus && (
        <div>
          <h3>Pikachu Status</h3>
          <p>Likes: {pikachuStatus.likes}</p>
          <p>Dislikes: {pikachuStatus.dislikes}</p>
        </div>
      )}
    </div>
  );
};

export default Queries;