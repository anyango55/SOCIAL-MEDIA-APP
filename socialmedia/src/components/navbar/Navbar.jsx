// import React from 'react'
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import "./navbar.scss";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailOutlinedIcon from '@mui/icons-material/PersonOutlined';

import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left'>
            <Link to="/" style={{textDecoration:"none"}}>
            <span>socialapp</span>
            </Link> 
            <HomeOutlinedIcon />
            <DarkModeOutlinedIcon/>
            <GridViewOutlinedIcon/>
            <div className="search">
                <SearchOutlinedIcon/>
                <input type='text' placeholder='Search'/>
            </div>
            
        </div>
        <div className='right'>
            <PersonOutlinedIcon/>
            <EmailOutlinedIcon/>
            <NotificationsOutlinedIcon/>
            <div className="user">
                <img src='' alt=''/>
                <span>Cynthia Anynago</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar