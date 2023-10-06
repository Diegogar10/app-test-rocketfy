import { useContext } from 'react';
import { ContextApp } from '../context';
import menuIcon from './../assets/icons/menu-icon.svg'
import closeIcon from './../assets/icons/close-icon.svg'
import './ButtonFly.scss';

const ButtonFly = () => {

  const { toggleHandler, isVisible } = useContext(ContextApp);


  return(
    <button onClick={toggleHandler} className='button__fly'><img src={!isVisible ? menuIcon : closeIcon} alt="" /></button>
  )
}

export default ButtonFly;