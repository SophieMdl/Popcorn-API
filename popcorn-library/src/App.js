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
import { ThemeProvider } from 'styled-components'
import './theme/globalStyle.js'
import { darkTheme } from './theme/darkTheme.js'
import 'materialize-css/dist/css/materialize.min.css'

class App extends Component {
  constructor() {
    super()
    this.state = store.getState()
    store.subscribe(() => this.setState(store.getState()))
  }

  componentDidMount() {
    const url = `${URL.API_BASE}discover/movie?language=fr&include_adult=false&${URL.API_KEY}`
    fetch(url)
      .then(res => res.json())
      .then(movies => actions.loadMovies(movies.results))
  }

  render() {
    const state = this.state
    return (
      <ThemeProvider theme={darkTheme}>
        <div>
          <Header movie={state.currentMovie} />
          {state.currentMovie ? (
            <MovieDetails movie={state.currentMovie} recommendedMovies={state.recommendedMovies} />
          ) : (
            <Home randomMovies={state.randomMovies} highRatedMovies={state.highRatedMovies} />
          )}
        </div>
      </ThemeProvider>
    )
  }
}

export default App
