import React, { useContext } from "react";
import { ContextApp } from "../context";
import { Navigate } from "react-router-dom";


const Favorites = () => {
  
  const { isAuth } = useContext(ContextApp);

  if( !isAuth ) {
    return <Navigate to='/' />
  } else {    
    return <p>Favorites</p>
  }
};

export default Favorites;