import { createContext, useState } from "react";
import useLocalStorage, { getDataLocal } from "../hooks/useLocalStorage";

const ContextApp = createContext();

const ProviderApp = ({ children }) => {
  
  //Creamos una instancia de useLocalStorage para almacenar los favoritos con la key de la app
  const [userName, setUserName] = useState('');
  const [ localFavorites, setLocalFavorites ] = useLocalStorage(`v1-${userName}`, []);
  
  /*Estado Global para el manejo de inicio de sesión que me protege ciertas rutas */
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState('');
  const [favoritesList, setFavoritesList] = useState([]);
  
  
  const activateAuth = (token) => {
    setToken(token)
    setIsAuth(true);
  }
  const unActivateAuth = () => {
    setLocalFavorites(favoritesList);
    setToken('');
    setFavoritesList([]);
    setUserName('');
    setIsAuth(false);
  }

  const addRecipesFavorites = (list) => {
    setFavoritesList(list);
  }

  const setLoadFav = (email) => {
    setUserName(email);
    setFavoritesList(getDataLocal(`v1-${email}`));
  }

  const globalValues = {
    isAuth,
    token,
    activateAuth,
    unActivateAuth,
    favoritesList,
    addRecipesFavorites,
    setLoadFav
  }

  return(
    <ContextApp.Provider value={globalValues}>
      {children}
    </ContextApp.Provider>
  )
}

export {ContextApp, ProviderApp};