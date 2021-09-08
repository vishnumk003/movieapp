import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../loginpage/LoginPage.scss'

export default function LoginPage ({props}){
  // const [input,setInput] = useState({username:"",password:""})
  // const [error, setError] = useState({title:""})
  // const [showPassword,setShowPassword] = useState(false)
  
  useEffect(() => {
    const listener =( event) => {	
      if (event.code === "Enter") {
        tryLogin()
      }
		};
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  });

 

  const tryLogin =async (event) =>{
   
  }

  const handleInputChange = (field,value) =>{
    // setInput({...input,[field]:value})
  }
  return(
    <div  className="col-lg-12 col-md-6">
      <div className="login-form-wrap" >
        <div className="form-wrap">
          <form onSubmit={(e)=>tryLogin(e)}> 
            {/* <label style={{fontSize:'14px',color:'red'}}>{error.title}</label> */}

            <div className="form-group">
              <input type="text" 
              className="form-control" 
              placeholder="Username" 
              // required autofocus 
              onChange={(e) => handleInputChange("username",e.target.value)}
              />
            </div>
            <div className="form-group">
              <input 
              type="password"
              className="form-control" 
              placeholder="Password" 
              // required
              onChange={(e) => handleInputChange("password",e.target.value)}
              />
            </div>
              <Link to="/movie-home">

              <button className="btn btn-primary btn-block" type="submit">Sign in</button>
              </Link>
          </form>

        </div>
      </div>
    </div>
  )
}