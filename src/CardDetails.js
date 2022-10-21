import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import App from './App';

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
      <div className='card'>
        <h1>{this.state.movie.title}</h1> <br />
        Rating: ⭐️ {this.state.movie.average_rating.toFixed(2)}/10 · {this.state.movie.runtime} min<br />
        <div className="movies-images"><img className="movie-details-image" src={this.state.movie.poster_path} />
          <ReactPlayer className="react-player" url={`https://www.youtube.com/embed/${this.state.video}`} controls={true} /> </div>
        <div className='card-details'><h4>Genres: {this.state.movie.genres.join(', ')}</h4> <br />
          <p>{this.state.movie.overview}</p>
        </div>
      </div>
    ) : null
  }
}



export default CardDetails;