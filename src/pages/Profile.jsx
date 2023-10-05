import React, { useContext, useState } from "react";
import { ContextApp } from "../context";
import { Navigate } from "react-router-dom";
import userService from "../services/userService";
import imageDefault from './../assets/images/perfill.jpg'
import './profile.scss';

const Profile = () => {
  const { isAuth, token } = useContext(ContextApp);
  const [ user, setUser ] = useState();
  
  const getUser = async () => {
    const user = await userService(token);
    await setUser(user);
  }

  if( !isAuth ) {
    return <Navigate to='/login' />
  } else {    
    if( token !== ''){
      getUser(token);
    }
  }

  return (
    <>
    { user &&
      <div className="profile__container">
        <h2>Profile</h2>
        <img src={imageDefault} alt="image deafult prfile" />
        <p>Name: <span>{user.name}</span></p>
        <p>Email: <span>{user.email}</span></p>
      </div> 
    }
    </>
  )

};

export default Profile;