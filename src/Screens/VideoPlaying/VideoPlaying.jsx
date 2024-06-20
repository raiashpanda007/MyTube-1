import React from 'react';
import './VideoPlaying.css';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import VideoContainer from '../../components/Video Component/VideoContainer';
import RecommendedVideos from '../../components/RecommendedVideos/RecommendedVideos';
import { ThumbDownIcon, ThumbUpIcon } from '../../assets/Icons/Icons';
import Comments from '../../components/Comments/Comments';

function VideoPlaying() {
  const likeStyle = {fontSize: '12px'}
  return (
    <div className="VideoPlaying_ParentDiv">
      <div className="VideoPlaying_Header">
        <Header screenName={'VideoPlaying'} />
      </div>
      <div className="VideoPlaying_MainContent">
        <Sidebar />
        <div className="VideoPlaying_CurrentVideo">
          <VideoContainer />
          <div className="VideoPlaying_CurrVideo_Tittle">
            <h4>Waiting For Youtube to apply scopes and other long titles </h4>
          </div>
          <div className="VideoPlaying_ChannelContent">
            <div className="VideoPlaying_Channel">
              <div className="VideoPlaying_Channel_Logo">
                <img
                  src="https://yt3.googleusercontent.com/aXRZf5V9i0SFHyNhdB91pLJlR8DZUZL1FEsUH3JCKeH_jYtR71c3Z_N1uJRLV1FBDuYMQ1roEg=s176-c-k-c0x00ffffff-no-rj"
                  alt="Channel Logo"
                />
              </div>
              <div className="VideoPlaying_Channel_Name">
                <h4>Channel Name</h4>
                <p>Subscribers</p>
              </div>
            </div>
            <div className="VideoPlaying_Channel_Options">
              <div className="button LikeButton">
                <ThumbUpIcon  />
                <div className="LikesCount">
                  1.2k
                </div>
              </div>
              <div className="button UnLikeButton">
                <ThumbDownIcon />
                <div className="UnLikesCount">
                  1.2k
                </div>
              </div>
              <div className="Subscribe">
                Subscribe
              </div>
            </div>
          </div>

          <div className="VideoPlaying_AddComment">
            <div className="VideoPlaying_AddComment_Logo">
              <img
                src="https://yt3.googleusercontent.com/aXRZf5V9i0SFHyNhdB91pLJlR8DZUZL1FEsUH3JCKeH_jYtR71c3Z_N1uJRLV1FBDuYMQ1roEg=s176-c-k-c0x00ffffff-no-rj"
                alt="Channel Logo"
              />
            </div>
            <div className="VideoPlaying_AddComment_Input">
              <textarea
              rows={5}
              className='InputComment'
              placeholder='Add a public comment...'>
               
              </textarea>
            </div>
            <div className="PostButton">
              <button>Add Comment</button>
            </div>
          </div>
          <div className="VideoPlaying_CommentList">
              <Comments />
              <Comments />
              <Comments />
              <Comments />
              <Comments />
              <Comments />
              <Comments />
              <Comments />
              <Comments />
              <Comments />
              <Comments />
              <Comments />
              <Comments />
              <Comments />
              <Comments />
              <Comments />
              <Comments />
              <Comments />
              <Comments />
              <Comments />
              <Comments />
              <Comments />
              <Comments />
              
          </div>

        </div>
        <div className="VideoPlaying_Recommended_Videos">
          <RecommendedVideos />
          <RecommendedVideos />
          <RecommendedVideos />
          <RecommendedVideos />
          <RecommendedVideos />
          <RecommendedVideos />
          <RecommendedVideos />
          <RecommendedVideos />
          <RecommendedVideos />
          <RecommendedVideos />
          <RecommendedVideos />
          <RecommendedVideos />
          <RecommendedVideos />
          <RecommendedVideos />
        </div>
      </div>
    </div>
  );
}

export default VideoPlaying;
