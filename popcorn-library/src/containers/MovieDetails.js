import React from 'react'
import { URL } from '../url'
import Video from '../components/Video.js'
import actions from '../actions/actions.js'
// import styled from 'styled-components'
import {MovieResume, MovieImg, MovieText, MovieDescription} from '../style/movieDetailsStyle.js'

class MovieDetails extends React.Component {
  componentDidUpdate (prevProps) {
    const movieId = this.props.movie.id
    if (movieId === prevProps.movie.id) return
    const url = `${URL.API_BASE}movie/${movieId}?language=fr&include_adult=false&${URL.API_KEY}&append_to_response=videos`
    window.fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.videos.results[0]) {
          const youtubeKey = data.videos.results[0].key
          actions.applyVideoToCurrentMovie(youtubeKey)
        }
      })
  }
  render () {
    const movie = this.props.movie

    return (
      <div>
        <MovieResume>
          <MovieImg>
            <img alt={movie.title} src={`${URL.IMAGE_BASE}${movie.poster_path}`} />
          </MovieImg>
          <MovieText>
            <h5>{movie.title}</h5>
            <MovieDescription>{movie.overview}</MovieDescription>
          </MovieText>
        </MovieResume>
        {movie.youtubeKey !== undefined ? <Video videoId={movie.youtubeKey} /> : <div>Pas de vidéo pour ce film</div>}
      </div>
    )
  }
}

export default MovieDetails
