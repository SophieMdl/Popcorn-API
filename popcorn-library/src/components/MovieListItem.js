import React from 'react'
import { URL } from '../url'

const MovieListItem = ({ movie, changeCurrentMovie }) => {
  return (
    <div
      className="movie-item row"
      role="button"
      onClick={() => changeCurrentMovie(movie)}
      onKeyPress={() => changeCurrentMovie(movie)}
      tabIndex={0}
    >
      <img className="col s4" alt={movie.title} src={`${URL.IMAGE_BASE}${movie.poster_path}`} />
      <h6 className="col s8">{movie.title}</h6>
    </div>
  )
}

export default MovieListItem
