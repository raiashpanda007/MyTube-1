import React from 'react'
import './Header.css'
import YoutubeLogo from '../../assets/Images/YoutubeLogo.png'
import {SearchIcon,MenuIcon} from '../../assets/Icons/Icons'
import { useDispatch,useSelector } from 'react-redux'
import { IconButton } from '@mui/material'
import { setSlider } from '../../features/hamburger/hamburger'



function Header ({screenName}) {
    const dispatch = useDispatch();
    const slider = useSelector(state => state.hamburger.slider);
    const Style = {cursor:'Pointer'};
    const changeSlider = () => {
        if(screenName === 'HomeScreen'){
            if(slider === 'Sidebar'){
                dispatch(setSlider('SideBar-Complete'));
                
            }else{
                dispatch(setSlider('Sidebar'));
                
            }
        }
        else if(screenName === 'VideoPlaying'){
            if(slider === 'SideBar-Complete'){
                dispatch(setSlider('None'));
            }else{
                dispatch(setSlider('SideBar-Complete'));
            }
                
        }
    }





    return (
        <div className="Header">
            <div className="Header_Logo">
                <IconButton onClick={changeSlider}>
                <MenuIcon style={Style} />
                </IconButton>
                <img src={YoutubeLogo} alt="" />
            </div>
            
            <div className="Header_SearchBar">
                <input type="text" placeholder='Search...' />
                <SearchIcon style={Style} />
            </div>

            <div className="Header_Options">

                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                
            </div>
            
        </div>
  )
}

export default Header