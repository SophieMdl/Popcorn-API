import React from 'react'
import { URL } from '../url'

const MovieListItem = ({movie, changeCurrentMovie}) => {
  return (
    <li className="movie-item row" onClick={() => changeCurrentMovie(movie)} >
      <img className="col s4" alt={movie.title} src={`${URL.IMAGE_BASE}${movie.poster_path}`} />
      <h6 className="col s8">{movie.title}</h6>
    </li>
  )
}

export default MovieListItem
