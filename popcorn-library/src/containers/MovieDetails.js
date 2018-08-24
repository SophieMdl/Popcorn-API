import React from 'react'
import { URL } from '../url'
import Video from '../components/Video.js'
import actions from '../actions/actions.js'
import RecommendedMovies from '../containers/RecommendedMovies.js'
import { MovieDetailsStyled, MovieResume, MovieImg, MovieText, MovieDescription } from '../style/movieDetailsStyle.js'

const youtubeKey = (movieId) => {
  const urlVideo = `${URL.API_BASE}movie/${movieId}/videos?${URL.API_KEY}&language=en`
  return new Promise(resolve =>
    window.fetch(urlVideo)
      .then(res => res.json())
      .then(data => {
        if (data.results[0]) {
          resolve(data.results[0])
        }
      })
  )
}
const recommendedMoviesArray = (movieId) => {
  const urlRecommended = `${URL.API_BASE}movie/${movieId}/recommendations?${URL.API_KEY}&language=fr`
  return new Promise(resolve =>
    window.fetch(urlRecommended)
      .then(res => res.json())
      .then(data => {
        if (data.results) {
          resolve(data.results)
        }
      })
  )
}

class MovieDetails extends React.Component {

  componentDidMount () {
    const movieId = this.props.movie.id
    Promise.all([
      youtubeKey(movieId),
      recommendedMoviesArray(movieId)
    ]).then(values => {
      actions.loadCurrentMovieData(values)
    })
  }

  componentDidUpdate (prevProps) {
    const movieId = this.props.movie.id
    if (movieId === prevProps.movie.id) return
    Promise.all([
      youtubeKey(movieId),
      recommendedMoviesArray(movieId)
    ]).then(values => {
      actions.loadCurrentMovieData(values)
    })
  }

  render() {
    const movie = this.props.movie
    return (
      <MovieDetailsStyled>
        <MovieResume>
          <MovieImg alt={movie.title} src={`${URL.IMAGE_BASE}${movie.poster_path}`} />
          <MovieText>
            <h5>{movie.title}</h5>
            <MovieDescription>{movie.overview}</MovieDescription>
            {movie.youtubeKey !== undefined ? <Video videoId={movie.youtubeKey} /> : <div>Pas de vidéo pour ce film</div>}
          </MovieText>
        </MovieResume>
        <RecommendedMovies movies={this.props.recommendedMovies} />
      </MovieDetailsStyled>
    )
  }
}

export default MovieDetails
