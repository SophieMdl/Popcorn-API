import React from 'react'
import MovieListItem from '../components/MovieListItem.js'
import actions from '../actions/actions.js'
import styled from 'styled-components'

const MovieList = ({ movies }) => {
  const MoviesList = styled.div`
    background-color : #191c1f;
  `
  return (
    <MoviesList>
      <h5>Catalogue</h5>
      <ul>
        {movies.map(movie => <MovieListItem
          movie={movie}
          key={movie.id}
          changeCurrentMovie={actions.changeCurrentMovie} />)}
      </ul>
    </MoviesList>
  )
}

export default MovieList
