import React from 'react';
import Movies from './Movies';
import { Link } from 'react-router-dom';
import CardDetails from './CardDetails';
import Featured from './Featured';


const Home = ({ movies }) => {
  const getMovies = movies.map((movie) => {
    return <Movies movie={movie} key={movie.id} id={movie.id} />
  });
  // console.log(movies)
  // const getRandom = getMovies[Math.floor(Math.random() * getMovies.length)];

  return (
    <>
      {/* <div className='featured'>
        // <Featured movies={movies} />
      </div> */}
      <div className='all-movies-container'>
        {getMovies}
      </div>
    </>
  )
}


export default Home;