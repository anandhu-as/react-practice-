import React from 'react';
import "../css/Favorites.css";
import { IMAGE_BASE_URL } from '../api';

const Favorite = ({ favorite }) => {
  return (
    <div className="favorites">
      <h2>Favorite Movies</h2>
      {favorite.length === 0 ? (
        <div className="favorites-empty">
          <h2>No favorite movies yet</h2>
          <p>Start adding movies!</p>
        </div>
      ) : (
        <div className="favorites-list">
          {favorite.map((movie, index) => (
            <div key={index} className="favorite-item">
              <img src={`${IMAGE_BASE_URL+movie.poster_path}`} alt={movie.title} />
              <h4>{movie.title}</h4>
              <p>{movie.release_date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorite;
