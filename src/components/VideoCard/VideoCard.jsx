import React from 'react'
import './VideoCard.css'
import YoutubeLogo from '../../assets/Images/YoutubeLogo.png'
function VideoCard() {
  return (
    <div className="VideoCard">
      <div className="VideoCard_Thumbnail">
        <img src="https://picsum.photos/200" alt="" />
      </div>
      <div className="VideoCard_Info">
          <div className="VideoCard_Avatar">
            <img src={YoutubeLogo} alt="" />
          </div>
          <div className="VideoCard_Details">
            <div className="VideoCard_VideoName">
              <h4>Video Title fgjdfgjdfjfdghndfgndfhrdtjrtjyrt  drjerjyery</h4>
            </div>
            <div className="VideoCard_MoreVideoDetails">
            <p className='VideoCard_ChannelName'>Channel Name</p>
            <p className='VideoCard_ViewsCount'>Views • Date</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default VideoCard