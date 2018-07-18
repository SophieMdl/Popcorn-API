import React from 'react'

const Video = ({ videoId }) => {
  return (
    <div>
      <iframe width="450" height="250" title={videoId} src={`https://www.youtube.com/embed/${videoId}`} />
    </div>
  )
}

export default Video
