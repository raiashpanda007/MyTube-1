import React from 'react';
import './RecommendedVideos.css';

function RecommendedVideos() {
  return (
    <div className="RecommendedVideos">
      <div className="RecVideo_ThumbNail">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Thumbnail" />
        <div className="RecVideo_Time">
          <p>10:00</p>
        </div>
      </div>
      <div className="RecVideo_Content">
        <div className="RecVideo_Title">
          <h3>Video Title that might be very long and need truncation</h3>
        </div>
        <div className="RecVideo_ChannelName">
          <p>Channel Name</p>
        </div>
        <div className="RecVideo_Views_Date">
          <div className="RecVideo_Views">
            <p>1M Views</p>
          </div>
          •
          <div className="RecVideo_Date">
            <p>1 Week Ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendedVideos;
