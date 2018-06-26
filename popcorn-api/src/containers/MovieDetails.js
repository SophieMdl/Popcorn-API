import React from 'react'
import { URL } from '../store'
import Video from '../components/Video.js'
import actions from '../actions/file.js'

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
        <div className="row">
          <div className="col s4">
            <img width="100%" height="auto" alt={movie.title} src={`${URL.IMAGE_BASE}${movie.poster_path}`} />
          </div>
          <div className="col s8">
            <h5>{movie.title}</h5>
            <p>{movie.overview}</p>
          </div>
          <div className="row">
            <div className="col s12">
              {movie.youtubeKey !== undefined ? <Video videoId={movie.youtubeKey} /> : <div>Pas de vidéo pour ce film</div>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetails
