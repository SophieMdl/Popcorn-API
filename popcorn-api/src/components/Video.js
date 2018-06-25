import React from 'react'
// import getVideoKey from '../actions/file'
const YOUTUBE_BASE_URL = 'https://www.youtube.com/embed/'

const Video = ({ videoId }) => {
  return (
    <div>
      <iframe width="450" height="250" title={videoId} src={`${YOUTUBE_BASE_URL}${videoId}`} />
    </div>
  )
}

export default Video
