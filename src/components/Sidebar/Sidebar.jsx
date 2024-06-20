import React from 'react'
import { HomeIcon,SubscriptionsIcon,ThumbUpIcon } from '../../assets/Icons/Icons'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import './Sidebar.css'
function Sidebar() {
  const slider = useSelector(state => state.hamburger.slider);

  return (
        <>
        <div className={slider === 'SideBar-Complete'? 'Sidebar-Complete' : 'NotVisible'}>
            <div className="Sidebar-Complete_Options">
                <div className="Sidebar-Complete_Options_logo">
                    <HomeIcon />
                </div>
                <div className="Sidebar-Complete_Options_content">
                    <h5>Home</h5>
                </div>
              
            </div>
            <div className="Sidebar-Complete_Options">
                <div className="Sidebar-Complete_Options_logo">
                    <SubscriptionsIcon />
                </div>
                <div className="Sidebar-Complete_Options_content">
                    <h5>Subscription</h5>
                </div>
              
            </div>
            <div className="Sidebar-Complete_Options">
                <div className="Sidebar-Complete_Options_logo">
                     <ThumbUpIcon />
                </div>
                <div className="Sidebar-Complete_Options_content">
                    <h5>Liked Videos</h5>
                </div>
              
            </div>
      
        </div>
        <div className={slider === 'Sidebar'? 'Sidebar' : 'NotVisible'}>
        <div className="Sidebar_Options">
                <div className="Sidebar_Options_logo">
                    <HomeIcon />
                </div>
                
              
            </div>
            <div className="Sidebar_Options">
                <div className="Sidebar_Options_logo">
                    <SubscriptionsIcon />
                </div>
                
              
            </div>
            <div className="Sidebar_Options">
                <div className="Sidebar_Options_logo">
                     <ThumbUpIcon />
                </div>
                
              
            </div>
        </div>
        
        </>
        



  )
}

export default Sidebar