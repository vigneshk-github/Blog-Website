import React from 'react'
import "./home.css"
import Header from '../../header/Header'
import Posts from '../../posts/Posts'
import Sidebar from '../../sildebar/Sidebar'
import './home.css'

export default function Home() {
  return (
    <>
    <Header/>
    <div className='home'>
      <Posts/>
      <Sidebar/>
    </div>
    </>
  )
}
