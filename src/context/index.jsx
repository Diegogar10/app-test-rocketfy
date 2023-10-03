import { createContext, useState } from "react";

const ContextApp = createContext();

const ProviderApp = ({ children }) => {

/*Estado Global para el manejo de inicio de sesión que me protege ciertas rutas */
  const [isAuth, setIsAuth] = useState(false);

  const activateAuth = () => {
    setIsAuth(true);
  }
  const unActivateAuth = () => {
    setIsAuth(false);
  }

  const globalValues = {
    isAuth,
    activateAuth,
    unActivateAuth

  }

  return(
    <ContextApp.Provider value={globalValues}>
      {children}
    </ContextApp.Provider>
  )
}

export {ContextApp, ProviderApp};