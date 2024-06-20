import React from 'react'
import './VideoContainer.css'
function VideoContainer() {
  return (
    <div className="VideoContainer">
      <iframe height={'100%'} width={'100%'} src="https://www.youtube.com/embed/3JZ_D3ELwOQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}

export default VideoContainer