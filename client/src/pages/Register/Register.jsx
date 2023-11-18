import "./Register.css"
import regimg from '../../images/oliver-sjostrom-EztqREO1cag-unsplash.jpg'

export default function Register() {
  return (
    <div className='register'>
        <div className="leftSide">
            <img className="img-fluid regImg" src={regimg} alt=""/>
        </div>
        <div className="rightSide">
            <form className="registerForm">
              <div className="regDiv"> 
              <h3 className="regText">Register</h3>
                <label>Email</label>
                <input style={{width:"250px"}} type="email" placeholder="vigneshten5@gmail.com"></input>
                <label>Password</label>
                <input style={{width:"250px"}} type="password" placeholder="Enter Password"></input>
                <div className="regBut">
                  <button className="btn btn-success">Register</button>
                </div>
                </div>
            </form>
        </div>
    </div>
  )
}
