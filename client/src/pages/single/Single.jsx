import React from 'react'
import './single.css'
import Sidebar from '../../sildebar/Sidebar'
import SinglePost from '../../singlePost/SinglePost'

export default function Single() {
  return (
    <div className='single'>
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}
