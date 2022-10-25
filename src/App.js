import Home from './Home';
import CardDetails from './CardDetails';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Featured from './Featured';


class App extends React.Component {
  constructor() {
    super()
    this.state = { movies: [] }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data.movies })
      })
      .catch((error) => {
        console.log(error)
      })
  }
 
  render() {
    return (
      <div>
        <nav className='navBar'>
          <Link to='/'><h1 className="site-title">Rancid Tomatillos</h1></Link>
          <Link to='/' className="home-button">Home</Link>
          <Link to='/' className="home-button">Movies</Link>
          <Link target="_blank" rel="noreferrer" to='//www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjn7tv-1u_6AhVuFkwKHQ85DVUYABABGgJvYQ&ohost=www.google.com&cid=CAESauD24lDh76jEoI4e0TDCi-wB7QfppE_Mqq6ApqmIwjUG9bfgCJqsNoeIllzT-z0k0ReCa25M6rHD1--jx6tEjgsM1zPIXq0U0wPaLcovk1qvQJkTY4b7m7W8-9eoMcIBIK8XrsCA376kt10&sig=AOD64_1gq6XPX1D6F-f9lgQyN15QyxgCdQ&q&adurl&ved=2ahUKEwjass7-1u_6AhVVAzQIHVI4DaoQ0Qx6BAgJEAM' className='find-theater'>Find Theaters</Link>
        </nav>
        <div>
          <Route exact path='/' render={() => <Featured movies={this.state.movies} id={this.state.movies.id} />} />
          <Route exact path='/' render={() => <Home movies={this.state.movies} />} />
          <Route exact path="/:id" render={({ match }) => <CardDetails id={match.params.id} />} />
        </div>
      </div>
    )
  }
}


export default App;






