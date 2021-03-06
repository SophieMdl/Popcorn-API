import React from 'react'
import MovieListItem from '../components/MovieListItem.js'
import actions from '../actions/actions.js'

import styled from 'styled-components'

const RecommendedMovies = ({ movies }) => {
  const RecommendedMovies = styled.div`
    background-color: #191c1f;
    flex: 1;
    padding: 2em 2em 0em 2em;
  `
  return (
    <RecommendedMovies>
      <h5>Films similaires</h5>
      <div>
        {movies.map(movie => (
          <MovieListItem
            movie={movie}
            key={movie.id}
            changeCurrentMovie={actions.changeCurrentMovie}
          />
        ))}
      </div>
    </RecommendedMovies>
  )
}

export default RecommendedMovies
