import React, { Component } from 'react'
/* My librairies */
import actions from './actions/actions.js'
import { store } from './store'
import { URL } from './url'
/* Components */
import MovieDetails from './containers/MovieDetails.js'
import Header from './containers/Header.js'
import Home from './containers/Home.js'
/* Styles */
import './theme/globalStyle.js'
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
    const state = this.state
    console.log(state.currentMovie)
    return (
      <div>
        <div className="row">
          <Header
            moviesTitles={state.moviesTitle}
            searchText={state.searchText}
          />
          {state.currentMovie
            ? <MovieDetails movie = {state.currentMovie} />
            : <Home randomMovies = {state.randomMovies} />
          }
        </div>
      </div>
    )
  }
}

export default App
