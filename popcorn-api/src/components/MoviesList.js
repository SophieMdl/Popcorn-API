import React from 'react'
import VideoListItem from './MovieListItem.js'

const MovieList = ({movies}) => {
  return (
    <div>
      <h5>Catalogue</h5>
      <ul>{movies.map(VideoListItem)}</ul>
    </div>
  )
}

export default MovieList
