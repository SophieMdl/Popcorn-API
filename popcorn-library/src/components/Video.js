import React from 'react'

const Video = ({ videoId }) => {
  return (
    <div>
      <iframe width="450" height="250" title='video' src={`https://www.youtube.com/embed/${videoId}`} />
    </div>
  )
}

export default Video
