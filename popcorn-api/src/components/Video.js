import React from 'react'
// import getVideoKey from '../actions/file'
const YOUTUBE_BASE_URL = 'https://www.youtube.com/embed/'

const Video = ({ videoId }) => {
  if (videoId !== undefined) {
    return (
      <div>
        <iframe width="450" height="250" title={videoId} src={`${YOUTUBE_BASE_URL}${videoId}`} />
      </div>
    )
  } else {
    return <div>Pas de vidéo pour ce film</div>
  }
}

export default Video
