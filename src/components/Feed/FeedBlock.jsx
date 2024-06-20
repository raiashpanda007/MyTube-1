import React from 'react'
import './FeedBlock.css'
import VideoCard from '../VideoCard/VideoCard'
import {useSelector} from 'react-redux'

function FeedBlock() {
  const slider = useSelector(state => state.hamburger.slider);
  return (
   <div className={slider === 'Sidebar'? 'HomePage_FeedFull': 'HomePage_Feed'}>
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      
      

   </div>
  )
}

export default FeedBlock