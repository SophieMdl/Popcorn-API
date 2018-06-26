import React from 'react'
import MovieListItem from '../components/MovieListItem.js'
import actions from '../actions/file.js'

const MovieList = ({movies}) => {
  console.log('movies', movies)
  return (
    <div>
      <h5>Catalogue</h5>
      <ul>{movies.map(movie => <MovieListItem movie={movie} changeCurrentMovie={actions.changeCurrentMovie} />)}</ul>
    </div>
  )
}

export default MovieList
