import React from 'react'
import "./singlepost.css"
import img1 from '../images/pexels-luis-del-río-15286.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function SinglePost() {
  return (
    <div className='singlepost'>
        <img className='img-fluid img-fluid1' src={img1} alt=''/>
        <div className='title1'>
            <h3 className='text'>Title</h3>
            <div className='icon'>
                <DeleteIcon/>
                <EditIcon/>
            </div>
        </div>
        <span className='author'>Author: Vk</span>
        <div className='content'>
             <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         when an unknown printer took a galley of type and scrambled it to make a type 
         specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in
           the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
           and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.</span>
        </div>
    </div>
  )
}
