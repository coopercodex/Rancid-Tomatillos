import React, { useEffect, useState } from 'react';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';
import Movies from './Movies';

const Featured = ({ movies }) => {
  const featuredMovies = movies.reduce((acc, movie) => {
    if (movie.average_rating > 6) {
      acc.push(movie.poster_path)
    }
    return acc;
  }, []);

  const [currentIndex, setCurrentIndex] = useState(Math.floor(Math.random() * 12));

  const autoScroll = true;
  let slideInterval;

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

  const autoSlide = () => {
    slideInterval = setInterval(handleClickRight, 4500)
  }
  useEffect(() => {
    if (autoScroll) {
      autoSlide();
    }
    return () => clearInterval(slideInterval)
  }, [currentIndex])

  return (
    <div className='featured'>
      <h2 className='top-rated'>Top Rated IMBD</h2>
      <img src={`${featuredMovies[currentIndex]}`} />
      <div className='right-arrow' onClick={handleClickRight}><MdOutlineArrowForwardIos /></div>
      <div className='left-arrow' onClick={handleClickLeft}><MdOutlineArrowBackIos /></div>
      <div className='dots-container'>{featuredMovies.map((slide, index) => (
        <div className='dots' key={index} onClick={() => { findSlide(index) }}>·</div>
      ))} </div>
    </div>
  )
}




export default Featured;