import React from 'react';
import Movies from './Movies';
import {Link} from 'react-router-dom';


const Home = ({movies}) => {
  const getMovies = movies.map((movie) => {
    return <Movies  movie={movie} key={movie.id} id={movie.id} /> 

  });

return (
  <div className='all-movies-container' >
    {getMovies}
  </div>
)
}


export default Home;