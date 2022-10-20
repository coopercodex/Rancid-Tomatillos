import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import './Movies.css'

const Movies = ({movie}) => {
    return (
      <section className="movie-container">
        <div>
          <NavLink to={`${movie.id}`}> <img id={movie.id} className="movie-poster" src={movie.poster_path} alt="movie poster" />
          <p>{movie.title} <br />
            {`Release Date ${movie.release_date} ~  ${movie.average_rating.toFixed(2)} rating `}
          </p>
          </NavLink>
        </div>
      </section>
    );
  }


export default Movies;
