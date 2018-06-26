import React, { Component } from 'react'
/* Redux */
import actions from './actions/file.js'
import { store, URL } from './store'
/* Components */
import SearchBar from './components/SearchBar.js'
import MovieList from './containers/MoviesList.js'
import MovieDetails from './containers/MovieDetails.js'

import 'materialize-css/dist/css/materialize.min.css'

class App extends Component {
  constructor () {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }
  componentDidMount () {
    const url = `${URL.API_BASE}discover/movie?language=fr&include_adult=false&${URL.API_KEY}`
    fetch(url)
      .then(res => res.json())
      .then(movies => {
        actions.loadMovies(movies.results)
      })
  }
  render () {
    return (
      <div>
        <div className="row">
          <div className="col s8">
            <SearchBar searchMovie={actions.searchMovie}/>
            <MovieDetails movie={this.state.currentMovie} />
          </div>
          <div className="col s4">
            <MovieList movies={this.state.moviesList} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
