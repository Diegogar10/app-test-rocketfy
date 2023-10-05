import React, { useContext, useEffect, useState } from "react";
import { ContextApp } from "../context";
import { Link, useNavigate } from "react-router-dom";
import loginService from "../services/loginService";
import './Login.scss';

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
    const response = await loginService(form);
    if(response.access_token){
      activateAuth(response.access_token);
      navigate('/profile');
    } else {
      setMessageError(true);
    }
  }

  return (
    <div className="form__login">
      <form method="post" onSubmit={handleSubmitLogin}>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="your@email.com" required/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder="password" required/>
        <button type="submit">Validate</button>
        { messageError && 
          <div>
            <p>User or password invalid!</p>
          </div>
        }
      </form>
      <Link to='/register'>Register</Link>
    </div>
  )
};

export default Login;