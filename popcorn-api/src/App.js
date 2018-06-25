import React, { Component } from 'react'
/* Redux */
import actions from './actions/file.js'
import { store, URL } from './store'
/* Components */
import SearchBar from './components/SearchBar.js'
import MovieList from './components/MoviesList.js'
import MovieDetails from './components/MovieDetails.js'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

class App extends Component {
  constructor () {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
      console.log(store.getState())
    })
  }
  componentDidMount () {
    const url = `${URL.API_BASE}discover/movie?language=fr&include_adult=false&${URL.API_KEY}`
    fetch(url)
      .then(res => res.json())
      .then(movies => {
        actions.loadMovies(movies.results)
        actions.getVideoKey(this.state.currentMovie)
      })
  }
  render () {
    return (
      <div>
        <SearchBar />
        <div className="row">
          <div className="col s8">
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
