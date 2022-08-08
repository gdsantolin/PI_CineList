import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({title,poster_path,overview,vote_average}) => (
    <div className="movie">
        <div className='image-container'>
            <div className='overlay d-flex align-items-center justify-content-center'></div>
            <img src={poster_path ? (IMG_API + poster_path) : 'https://static.thenounproject.com/png/1554490-200.png'}
            alt={title} />
        </div>
        <div className="movie-info">
            <h3>{title}</h3>
            <span className="nota">{vote_average}</span>
        </div>
    </div>
)

export default Movie;