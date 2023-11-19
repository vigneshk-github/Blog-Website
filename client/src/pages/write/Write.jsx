    import React from 'react'
    import './write.css'
    import AddIcon from '@mui/icons-material/Add';
    import img1 from "../../images/pexels-jeremy-bishop-2422915.jpg"

    export default function Write() {
    return (
        <div className='write'>
        <div className='form-img1'>
            <img className='img-fluid formImg' src={img1} alt=''/>
        </div>
            <div className='writeformDiv'>
            <form className='writeform'>
                <div className='writeformGroup'>
                    <label htmlFor='fileInput'>
                        <AddIcon/>
                    </label>
                    <input type='file' id='fileInput' style={{display:"none"}}/>
                    <input type='text' style={{border:" 0 none transparent",width:"700px"}} placeholder='Titile' className='writeInput' autoFocus={true}></input>
                </div>
                <div className='writeformGroup1'>
                    <textarea
                    style={{border:" 0 none transparent ",resize:"none",width:"870px",overflow:"hidden",height:"300px"}}
                    placeholder='Tell Your Story...'
                    type="text"
                    className='writeInput writetext'
                    ></textarea>
                </div>
                <button className='btn btn-outline-success writeSubmit'>Publish</button>
            </form>
            </div>
        </div>
    )
    }
