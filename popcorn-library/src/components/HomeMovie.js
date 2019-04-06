import React from 'react'
import actions from '../actions/actions.js'
import { URL } from '../url'
import { HomeMovieStyled, ImgMovie } from '../style/homeMovieStyle.js'

const randomMovie = ({ movie }) => {
  return (
    <HomeMovieStyled onClick={() => actions.changeCurrentMovie(movie)}>
      <ImgMovie alt={movie.title} src={`${URL.IMAGE_BASE}${movie.poster_path}`} />
      {movie.title}
    </HomeMovieStyled>
  )
}

export default randomMovie
