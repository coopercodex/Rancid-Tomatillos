import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const CardDetails = ({ id }) => {

  const [movie, setMovie] = useState(null)
  const [video, setVideo] = useState(null)


  useEffect(() => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data.movie))
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
      .then(response => response.json())
      .then(data => {
        setVideo(data.videos[0].key)
      })
  }, [])

  return (movie) && (
    <section className='card'>
      <h1>{movie.title}</h1> <br />
      Rating: ⭐️ {movie.average_rating.toFixed(2)}/10 · {movie.runtime} min<br />
      <div className="movies-images"><img className="movie-details-image" src={movie.poster_path} alt="movie with details" />
        <ReactPlayer className="react-player" url={`https://www.youtube-nocookie.com/embed/${video}`} controls={true} playing={true} muted={true} /> </div>
      <div className='card-details'><h4>Genres: {movie.genres.join(', ')}</h4> <br />
        <p>{movie.overview}</p>
      </div>
    </section>
  )
}



export default CardDetails;