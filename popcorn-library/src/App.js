import React, { Component } from 'react'
import styled from 'styled-components'
/* My librairies */
import actions from './actions/actions.js'
import { store } from './store'
import { URL } from './url'
/* Components */

import MovieList from './containers/MoviesList.js'
import MovieDetails from './containers/MovieDetails.js'
import Header from './containers/Header.js'

import 'materialize-css/dist/css/materialize.min.css'

const MainContent = styled.div`
  background-color : #222b31;
  color : #fff;
  font-family : Poppins, sans-serif;
`

class App extends Component {
  constructor() {
    super()
    this.state = store.getState()
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }
  componentDidMount() {
    const url = `${URL.API_BASE}discover/movie?language=fr&include_adult=false&${URL.API_KEY}`
    fetch(url)
      .then(res => res.json())
      .then(movies => {
        actions.loadMovies(movies.results)
      })
  }

  render() {
    return (
      <MainContent>
        <div className="row">
          <Header
            moviesTitles={this.state.moviesTitle}
            searchText={this.state.searchText}
          />
          <MovieDetails movie={this.state.currentMovie} />
          <div className="col s4">
            <MovieList movies={this.state.moviesList} />
          </div>
        </div>
      </MainContent>
    )
  }
}

export default App
