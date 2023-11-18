import React from 'react'
import './post.css'
import cat1 from '../images/humberto-arellano-N_G2Sqdy9QY-unsplash.jpg'
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Post() {
  return (
    <div className='post container'>
        {/* <img className='img-fluid postImg' src={cat1} alt=''/>
        <div className='postInfo'>
            <div className='postCats'>
                <span className='postCat'>Music</span>
                <span className='postCat'>Life</span>
                <span className='postTitle'>Hello Guys This Vignesh here</span>
                <hr/>
                <span className='postDate'>1 hour Ago</span>
            </div>
        </div> */}
        <div class="row"> 
            <div class="col-6 mb-4"> 
                <div class="card"> 
                    <img class="card-img-top" src={cat1} alt=""/> 
                    <div class="card-body"> 
                        <span className='postCat'>Music</span>
                        <span className='postCat'>Life</span>
                        <h5 class="card-title">Card title</h5> 
                        <p class="card-text"> 
                            Some quick example text to build on  
                            the card title and make up the bulk  
                            of the card's content. 
                        </p> 
  
                        {/* <a href="#" class="btn btn-outline-primary btn-sm"> 
                            Open<ArrowRightAltIcon/>
                        </a>  */}
                    </div> 
                </div> 
            </div> 
            <div class="col-6 mb-4"> 
                <div class="card"> 
                    <img class="card-img-top" src={cat1} alt=""/> 
  
                    <div class="card-body"> 
                        <span className='postCat'>Music</span>
                        <span className='postCat'>Life</span>
                        <h5 class="card-title">Card title</h5> 
                        <p class="card-text"> 
                            Some quick example text to build on the  
                            card title and make up the bulk of the  
                            card's content. 
                        </p> 
                          
                        {/* <a href="#" class="btn btn-outline-primary btn-sm"> 
                            Open<ArrowRightAltIcon/>
                        </a>  */}
                    </div> 
                </div> 
            </div> 
        </div>
    </div>
  )
}
