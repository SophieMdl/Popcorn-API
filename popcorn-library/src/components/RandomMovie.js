import React from 'react'
import actions from '../actions/actions.js'
import { URL } from '../url'

const randomMovie = ({ movie }) => {
  return (
    <div onClick = {() => actions.changeCurrentMovie(movie)}>
      <img width="100%" alt={movie.title} src={`${URL.IMAGE_BASE}${movie.poster_path}`} />
      {movie.title}
    </div>
  )
}

export default randomMovie
