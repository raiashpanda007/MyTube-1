import React from 'react'
import Header  from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import FeedBlock from '../../components/Feed/FeedBlock'
import './HomeScreen.css'
function HomeScreen() {
  return (
    <div className='ParentDiv'>
        <Header screenName = {'HomeScreen'}/>
        <div className="ParentDiv_Pane2">
          <Sidebar />
          <FeedBlock />
        </div>
        
    </div>
  )
}

export default HomeScreen