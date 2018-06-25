import React from 'react'
import { URL } from '../store'
import Video from './Video.js'

const MovieDetails = ({ movie }) => {
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
        <div class="row">
          <div className="col s12">
            <Video videoId={movie.youtubeKey} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
