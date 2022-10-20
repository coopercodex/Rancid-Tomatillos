import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import App from './App';

class CardDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: null,
      id: this.props.id
    }
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}`)
      .then(response => response.json())
      .then(data => this.setState({ movie: data.movie }))
  }

  render() {
    return (this.state.movie) ? (
      <div className='card'>
        {/* style={{backgroundImage: `url(${props.movie.backdrop_path})`, width: '150vh', height: '100vh'}}>  */}
        <Link to='/'>
        <button className="home-button">Home</button>
        </Link>
        <h1>{this.state.movie.title}</h1> <br />
        Rating: ⭐️ {this.state.movie.average_rating.toFixed(2)}/10
        <img className="movie-details-image" src={this.state.movie.poster_path} /> <br />
        <h4>Genres: {this.state.movie.genres.join(', ')}</h4> <br/>
        {this.state.movie.overview}
      </div>
    ) : null
    } 
  } 



export default CardDetails;