import React from 'react';
import Movies from './Movies';


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