import React, { useContext } from "react";
import { ContextApp } from "../context";

const Login = () => {
  
  const { isAuth, activateAuth, unActivateAuth } = useContext(ContextApp);

  return (
    <>
      { !isAuth && <button onClick={activateAuth}>Iniciar Sesión</button> 
                  || <button onClick={unActivateAuth}>Cerrar Sesión</button>}
    </>
  )
};

export default Login;