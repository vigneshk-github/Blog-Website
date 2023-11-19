import React from 'react'
import "./header.css"
import poster from "../images/poster.jpg"

export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitle'>
            <span>React and Node</span>
            <span>Blog</span>
        </div>
        <div className='headerimg'>
        <img src={poster} class="img-fluid" alt="..."></img>
        </div>
    </div>
  )
}
