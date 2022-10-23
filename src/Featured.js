import React, { useState } from 'react';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';
import Movies from './Movies';

const Featured = ({ movies }) => {
  console.log(movies)
  const getMovies = movies.map((movie, index) => {
    return movie.poster_path;
  });
  const [currentIndex, setCurrentIndex] = useState(Math.floor(Math.random() * 41))

  const handleClickRight = () => {
    const isLastPicture = currentIndex === getMovies.length - 1;
    const newIndex = isLastPicture ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  const handleClickLeft = () => {
    const isFirstPicture = currentIndex === 0;
    const newIndex = isFirstPicture ? getMovies.length -1 : currentIndex -1;
    setCurrentIndex(newIndex);
  }
  const findSlide = (index) => {
    setCurrentIndex(index);
  }

  return (
    <div className='featured'>
      <img src={`${getMovies[currentIndex]}`} />
      <div className='right-arrow' onClick={handleClickRight}><MdOutlineArrowForwardIos /></div>
      <div className='left-arrow' onClick={handleClickLeft}><MdOutlineArrowBackIos /></div>
      <div className='dots-container'>{getMovies.map((slide, index) => (
       <div className='dots'key={index} onClick={() => {findSlide(index)}}>·</div>
      ))} </div>
      {/* // <div className='slider'>{getRandom} </div> */}
    </div>
  )
}




export default Featured;