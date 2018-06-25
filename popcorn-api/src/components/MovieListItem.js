import React from 'react'
import { URL } from '../store'
import actions from '../actions/file'

const MovieListItem = movie => {
  return (
    <li className="movie-item row" key={movie.id} onClick={() => actions.changeCurrentMovie(movie)} >
      <img className="col s4" alt={movie.title} src={`${URL.IMAGE_BASE}${movie.poster_path}`} />
      <h6 className="col s8">{movie.title}</h6>
    </li>
  )
}

export default MovieListItem
