import React from 'react';
import { NavLink } from 'react-router-dom';
import './Movies.css'

const Movies = ({ movie }) => {
  return (
    <section className="movie-container">
      <div className='movies-card'>
        <NavLink to={`${movie.id}`}> <img id={movie.id} className="movie-poster" src={movie.poster_path} alt="movie poster" />
          <div>{movie.title} <br />
            <p className='movie-date'>{`${movie.release_date.split().join('').substring(0, 4)} · ${movie.average_rating.toFixed(2)} rating `}</p>
            <div className='mouse-over'>
              <img src="https://img.icons8.com/fluency/96/000000/next.png" alt='play icon' />
            </div>
          </div>
        </NavLink>
      </div>
    </section>
  );
}


export default Movies;
