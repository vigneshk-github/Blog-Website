import React from 'react'
import './sidebar.css'
import poster from '../images/poster1.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sideItem'>
        <h3>About Me</h3>
        <img className="vijay" src={poster} alt=''></img>
        <div className='sideText'>
        <p>Lorem ipsum is a pseudo-Latin text commonly used 
        in the graphic, print, and publishing industries as a placeholder.</p>
        </div>
      </div>
      <div className='sideItem'>
        <h3>Catogeries</h3>
        <div className='sideText'>
        <span className='sideTextItem'>Life</span>
        <span className='sideTextItem'>Style</span>
        <span className='sideTextItem'>Tech</span>
        <span className='sideTextItem'>Music</span>
        <span className='sideTextItem'>Sport</span>
        <span className='sideTextItem'>Films</span>
        </div>
      </div>
      <div className='sideItem'>
        <h3>Follow Me</h3>
        <div className='sideText1'>
          <FacebookIcon/>
          <InstagramIcon/>
          <YouTubeIcon/>
          <TwitterIcon/>
        </div>
      </div>
    </div>
  )
}
