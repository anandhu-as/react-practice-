import React from 'react';
import "../css/MovieCard.css"
import { IMAGE_BASE_URL } from '../api';

const MovieCard = ({title,release_date,poster_path}) => {
    
    const onLike = () => {
        alert(`You liked ${title}!`);
    };

    return (
        <div className='movie-card'>
            <div className="movie-poster">
              <img src={`${IMAGE_BASE_URL}${poster_path}`} alt="" />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onLike}>
                        ❤️
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{title}</h3>
                <p>{release_date}</p>
            </div>
        </div>
    );
};

export default MovieCard;
