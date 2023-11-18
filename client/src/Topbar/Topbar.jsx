import React from 'react'
import "./topbar.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import leo from "../images/new-leo-update-133404688-16x9_0-sixteen_nine.avif"
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default function  () {
  const user = false;
  return (
    <div className='topbar'>
       <div className='left'>
          <FacebookIcon/>
          <InstagramIcon/>
          <YouTubeIcon/>
          <TwitterIcon/>
       </div>
       <div className='middle'>
        <ul className='list'>
          <li><Link className='link' to="/">Home</Link></li>
          <li><Link className='link' to="/">About</Link></li>
          <li><Link className='link' to="/">Contact Me</Link></li>
          <li><Link className='link' to="/">Write</Link></li>
          <li>{user && "Logout"}</li>
        </ul>
       </div>
       <div className='right'>
       {
        user ? ( <img className="leo" src={leo} alt='leo'></img> )
        : (
          <>
          <Link className='link' to="/Register">Register</Link>
          <Link className='link' to="/Login">Login</Link>
          </>
        )
       }
        <SearchIcon/>
       </div>
    </div>
  )
}
