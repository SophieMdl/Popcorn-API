import React from 'react'
import MovieListItem from '../components/MovieListItem.js'
import actions from '../actions/actions.js'

import styled from 'styled-components'

const RecommendedMovies = ({ movies }) => {
  const RecommendedMovies = styled.div`
    background-color : #191c1f;
  `
  return (
    <RecommendedMovies>
      <h5>Films similaires</h5>
      <ul>
        {movies.map(movie => <MovieListItem
          movie={movie}
          key={movie.id}
          changeCurrentMovie={actions.changeCurrentMovie} />)}
      </ul>
    </RecommendedMovies>
  )
}

export default RecommendedMovies
