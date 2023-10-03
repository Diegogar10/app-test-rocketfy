import React, { useContext } from "react";
import { ContextApp } from "../context";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { isAuth } = useContext(ContextApp);
  
  if( !isAuth ) {
    return <Navigate to='/login' />
  } else {    
    return <p>Profile</p>
  }

};

export default Profile;