import Home from './Home';
import CardDetails from './CardDetails';
import React, { useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Featured from './Featured';


const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => {
        setMovies(data.movies)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <section>
        <nav className='navBar'>
          <Link to='/' className="site-title"> <h1> Rancid Tomatillos </h1> </Link>
          <Link to='/' className="home-button">Home</Link>
          <Link to='/' className="home-button">Movies</Link>
          <Link target="_blank" rel="noreferrer" to='//www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjn7tv-1u_6AhVuFkwKHQ85DVUYABABGgJvYQ&ohost=www.google.com&cid=CAESauD24lDh76jEoI4e0TDCi-wB7QfppE_Mqq6ApqmIwjUG9bfgCJqsNoeIllzT-z0k0ReCa25M6rHD1--jx6tEjgsM1zPIXq0U0wPaLcovk1qvQJkTY4b7m7W8-9eoMcIBIK8XrsCA376kt10&sig=AOD64_1gq6XPX1D6F-f9lgQyN15QyxgCdQ&q&adurl&ved=2ahUKEwjass7-1u_6AhVVAzQIHVI4DaoQ0Qx6BAgJEAM' className='find-theater'>Find Theaters</Link>
        </nav>
        <div>
          <Route exact path='/' render={() => <Featured movies={movies} id={movies.id} />} />
          <Route exact path='/' render={() => <Home movies={movies} />} />
          <Route exact path="/:id" render={({ match }) => <CardDetails id={match.params.id} />} />
        </div>
      </section>
    </>
  )
}


export default App;






