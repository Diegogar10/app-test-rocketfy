import React, { useContext, useEffect, useState } from "react";
import { ContextApp } from "../context";
import { Link, useNavigate } from "react-router-dom";
import loginUtil from "../utils/loginUtil";

const Login = () => {
  
  const { isAuth, activateAuth } = useContext(ContextApp);
  const [ messageError, setMessageError ] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    isAuth ? navigate('/profile') : console.log() ;
  },[])
  
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const response = await loginUtil(form);
    if(response.access_token){
      activateAuth(response.refresh_token);
      navigate('/profile');
    } else {
      setMessageError(true);
    }
  }

  return (
    <div className="login__container">
      
      <div className="form__login">
        <form method="post" onSubmit={handleSubmitLogin}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="cami34@mail.com" required/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="clave alfanumerica" required/>
          <button type="submit">Login</button>
          { messageError && 
            <div>
              <p>User or password invalid!</p>
            </div>
          }
        </form>
        <Link to='/register'>Register</Link>
      </div>
    </div>
  )
};

export default Login;