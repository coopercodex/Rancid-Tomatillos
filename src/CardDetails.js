import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class CardDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: null,
      video: null,
      id: this.props.id
    }
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}`)
      .then(response => response.json())
      .then(data => this.setState({ movie: data.movie }))
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}/videos`)
      .then(response => response.json())
      .then(data => {
        this.setState({ video: data.videos[0].key })
      })
    }
    
    render() {
      return (this.state.movie) ? (
        <section className='card'>
        <h1>{this.state.movie.title}</h1> <br />
        Rating: ⭐️ {this.state.movie.average_rating.toFixed(2)}/10 · {this.state.movie.runtime} min<br />
        <div className="movies-images"><img className="movie-details-image" src={this.state.movie.poster_path} alt="movie with details"/>
          <ReactPlayer className="react-player" url={`https://www.youtube-nocookie.com/embed/${this.state.video}`} controls={true} playing={true} muted={true} /> </div>
        <div className='card-details'><h4>Genres: {this.state.movie.genres.join(', ')}</h4> <br />
          <p>{this.state.movie.overview}</p>
        </div>
      </section>
    ) : null
  }
}



export default CardDetails;