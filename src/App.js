import Movies from './Movies';
import Home from './Home';
import CardDetails from './CardDetails';
import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = { movies: [] }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => { this.setState({ movies: data.movies }) })
  }

  render() {
    return (
      <div>
        <h1 className="site-title">Rancid Tomatillos</h1>
        <div>
          <Route exact path='/' render={() => <Home movies={this.state.movies} />} />
          <Route exact path="/:id" render={({ match }) => <CardDetails id={match.params.id} />} />
        </div>
      </div>
    )
  }
}


export default App;






