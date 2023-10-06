import React, { useContext, useEffect, useState } from "react";
import { ContextApp } from "../context";
import { useNavigate } from "react-router-dom";
import imageDefault from './../assets/images/perfill.jpg';
import userService from "../services/userService";
import './Profile.scss';

const Profile = () => {
  const navigate = useNavigate();
  const { isAuth, token, setLoadFav } = useContext(ContextApp);
  const [ user, setUser ] = useState();
  
  const getUser = async () => {
    const user = await userService(token);
    await setLoadFav(user.email);
    await setUser(user);
  }

  useEffect(()=>{
    if( !isAuth ) {
      navigate('/login');
    } else {    
      if( token !== ''){
        getUser(token);
      }
    }
  },[])


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