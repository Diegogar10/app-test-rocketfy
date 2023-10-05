import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ContextApp = createContext();

const ProviderApp = ({ children }) => {

  //Creamos una instancia de useLocalStorage para almacenar los favoritos con la key de la app
  const [ localFavorites, setLocalFavorites ] = useLocalStorage('app-recipes-favorites', []);

/*Estado Global para el manejo de inicio de sesión que me protege ciertas rutas */
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState('');
  const [favoritesList, setFavoritesList] = useState(localFavorites);


  
  const activateAuth = (token) => {
    setToken(token)
    setIsAuth(true);
  }
  const unActivateAuth = () => {
    setToken('');
    setIsAuth(false);
  }

  const addRecipesFavorites = (list) => {
    setFavoritesList(list);
    setLocalFavorites(list);
  }

  const globalValues = {
    isAuth,
    token,
    activateAuth,
    unActivateAuth,
    favoritesList,
    addRecipesFavorites
  }

  return(
    <ContextApp.Provider value={globalValues}>
      {children}
    </ContextApp.Provider>
  )
}

export {ContextApp, ProviderApp};