import React from 'react'
import { URL } from '../url'
import Video from '../components/Video.js'
import actions from '../actions/actions.js'
import RecommendedMovies from '../containers/RecommendedMovies.js'
// import styled from 'styled-components'
import { MovieResume, MovieImg, MovieText, MovieDescription } from '../style/movieDetailsStyle.js'

class MovieDetails extends React.Component {

  componentDidMount() {
    const movieId = this.props.movie.id
    console.log('movieId', movieId)
    const urlRecommended = `${URL.API_BASE}movie/${movieId}/recommendations?${URL.API_KEY}&language=fr`
    const urlVideo = `${URL.API_BASE}movie/${movieId}/videos?${URL.API_KEY}&language=en`
    // export const getRestaurantsList = () => {
    //   return new Promise(resolve =>
    //     window.fetch(`${getFetchUrl}/restaurants`)
    //       .then(res => res.json())
    //       .then(restaurantList => {
    //         resolve(restaurantList)
    const getyoutubeKey = () => {
      return new Promise(resolve =>
        window.fetch(urlVideo)
          .then(res => res.json())
          .then(data => {
            if (data.results[0]) resolve(data.results[0])
          })
      )
    }
    const getRecommendedMoviesArray = () => {
      return new Promise(resolve =>
        window.fetch(urlRecommended)
          .then(res => res.json())
          .then(data => {
            if (data.results) {
              console.log('recommendedMoviesArray', data.results)
              resolve(data.results)
            }
          })
      )
    }
    Promise.all([
      getyoutubeKey(),
      getRecommendedMoviesArray()
    ]).then(values => {
      console.log(values);
      actions.loadCurrentMovieData(values)
    })
  }
  render () {
    const movie = this.props.movie
    console.log('movie.youtubeKey', movie.youtubeKey)
    console.log('movie.recommendMovie', movie.recommendMovie)
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
        {/* <RecommendedMovies /> */}
      </div>
    )
  }
}

export default MovieDetails
