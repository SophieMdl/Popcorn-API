import React from 'react'
import { URL } from '../url'
import Video from '../components/Video.js'
import actions from '../actions/actions.js'
// import styled from 'styled-components'
import { MovieResume, MovieImg, MovieText, MovieDescription } from '../style/movieDetailsStyle.js'

class MovieDetails extends React.Component {
  componentShouldUpdate () {
    return true
  }
  componentDidMount () {
    const movieId = this.props.movie.id
    console.log('movieId', movieId)
    const url = `${URL.API_BASE}movie/${movieId}/videos?${URL.API_KEY}&language=en`
    window.fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.results[0]) {
          const youtubeKey = data.results[0].key
          actions.applyVideoToCurrentMovie(youtubeKey)
        }
      })
  }

  render() {
    const movie = this.props.movie
    console.log('movie.youtubeKey', movie.youtubeKey);
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
