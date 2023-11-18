import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
        <h1 style={{textAlign:"center",paddingTop:"35px"}}>Update Account</h1>
        <form className="updateForm">
            <div className="form1">
            <label>Profile Picture</label>
            <img src="" alt=""></img>
            <h8 >Update Profile Picture</h8>
            <label>Username</label>
            <input className="alterform" type="text" placeholder="vignesh"></input>
            <label>Email</label>
            <input className="alterform" type="email" placeholder="vigneshten5@gmail.com"></input>
            <label>Password</label>
            <input className="alterform" type="password"></input>
            <button className="btn btn-outline-success" style={{marginTop:"30px"}} >Update</button>
            </div>
        </form>
        <button className="btn btn-outline-danger" style={{marginTop:"30px"}} >Delete Account</button>
    </div>
  )
}
