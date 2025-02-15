import React, { useState } from 'react';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';

const Featured = ({ movies }) => {
  const featuredMovies = movies.reduce((acc, movie) => {
    if (movie.average_rating > 6) {
      acc.push(movie)
    }
    return acc;
  }, []);

  const [currentIndex, setCurrentIndex] = useState(Math.floor(Math.random() * 12));

  const handleClickRight = () => {
    const isLastPicture = currentIndex === featuredMovies.length - 1;
    const newIndex = isLastPicture ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  const handleClickLeft = () => {
    const isFirstPicture = currentIndex === 0;
    const newIndex = isFirstPicture ? featuredMovies.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const findSlide = (index) => {
    setCurrentIndex(index);
  }

  return (movies[currentIndex]) ? (
    <section className='featured' style={{backgroundImage: `url(${featuredMovies[currentIndex].backdrop_path})`, backgroundSize: 'cover'}}>
      <h2 className='top-rated'>Top Rated IMBD</h2>
      <img src={`${featuredMovies[currentIndex].poster_path}`} id={`${featuredMovies[currentIndex].id}`} alt="current movie" />
      <div className='right-arrow' onClick={handleClickRight}><MdOutlineArrowForwardIos /></div>
      <div className='left-arrow' onClick={handleClickLeft}><MdOutlineArrowBackIos /></div>
      <div className='dots-container'>{featuredMovies.map((slide, index) => (
        <div className='dots' key={index} onClick={() => { findSlide(index) }}>·</div>
      ))} </div>
    </section>
  ) : null
}


export default Featured;