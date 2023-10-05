import { useContext, useEffect, useState } from "react";
import { Link, useHref } from "react-router-dom";
import logo from './../assets/icons/logo-app.svg';
import homeIcon from './../assets/icons/home-icon.svg';
import profileIcon from './../assets/icons/profile-icon.svg';
import favoritesIcon from './../assets/icons/favorites-icon.svg';
import loginIcon from './../assets/icons/login-icon.svg';
import './Nav.scss';
import { ContextApp } from "../context";

const Nav = () => {

  const [ link, setLink ] = useState(true);
  const { isAuth, unActivateAuth } = useContext(ContextApp);
  const path = useHref();

  /* Cambia el nombre del link segun el estado global de autentificación */
  useEffect(()=>{
    if(!isAuth) {
      setLink(true);
    } else {
      setLink(false);
    }

  }, [isAuth]);

  /* Función para definir el link selecionado segun la ruta */
  const linkSeleted = (path, comparePath, children) => {
    if( path ==  comparePath ) {
      return(
        <li className="selected">
          { children }
        </li>
      )
    } else {
      return(
        <li>
          { children }
        </li>
      )
    }
  }
  return(
    <nav className="menu__container">
      <div className="menu__logo">
        <img src={logo} alt="logo de menu" />
      </div>
      <div className="menu__title">
        <h2>Menu</h2>
      </div>
      <ul className="menu__links">
        {linkSeleted(path, '/' ,<><img src={homeIcon} alt="icon home"/><Link to={'/'}>Home</Link></>)}
        {linkSeleted(path, '/favorites' ,<><img src={favoritesIcon} alt="icon favorites"/><Link to={'/favorites'}>Favorites</Link></>)}
        {linkSeleted(path, '/profile' ,<><img src={profileIcon} alt="icon profile"/><Link to={'/profile'}>Profile</Link></>)}
        {link 
          && linkSeleted(path, '/login' ,<><img src={loginIcon} alt="icon login"/><Link to={'/login'}>Login</Link></>)
          || linkSeleted(path, '/login' ,<><img src={loginIcon} alt="icon login"/><Link to={'/login'}><button onClick={unActivateAuth}>Logout</button></Link></>)}
      </ul>
    </nav>
  )
}

export default Nav;