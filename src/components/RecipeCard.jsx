import './RecipeCard.scss';
import searchIcon from './../assets/icons/search-icon.svg';
import like1Icon from './../assets/icons/like-off-icon.svg';
import like2Icon from './../assets/icons/like-on-icon.svg';
import { useContext, useEffect, useState } from 'react';
import { ContextApp } from '../context';
import { Link } from 'react-router-dom';

const RecipeCard = ({
  id,
  title,
  image,
}) => {
  
  //agregamos estado al componente para que cada vez que le den like se renderice de nuevo el boton de like
  const [ like, setLike ] = useState(false);
  const { isAuth, favoritesList, addRecipesFavorites } = useContext(ContextApp);

  //Realizamos la consulta para saber si el id de la receta ya esta en la lista de favoritos
  const isFavorite = favoritesList.map(item=>item.id).includes(id);

  const addFavorites = () => {
    const newElement = favoritesList;
    
    if(!isFavorite){
      newElement.push({
        id,
        title,
        image
      });
    } else {
      //Consultamos el indice para eliminar de la lista
      const index = newElement.map(item=>item.id).findIndex(item => item === id);
      newElement.splice(index,1);
    }
    addRecipesFavorites(newElement);
    setLike(!like);
  }

  /*Funcion que renderiza el boton like segun sea la condicion, 
    puede no mostrarse, poner like sin agragar a favoritos o like
    rojo cuando esta agregado a favoritos
  */  
  const renderButton = ()=> {
    if(!isAuth) {
      return <button onClick={addFavorites} className='invisble'><img src={like1Icon} alt="like icon" /></button>
    } else {
      if(isFavorite) {
        return <button onClick={addFavorites}><img src={like2Icon} alt="like icon" /></button>
      } else {
        return <button onClick={addFavorites}><img src={like1Icon} alt="like icon" /></button>
      } 
    }
  }

  return(
    <section className='recipes__card'>
      <div className='card__head'>
        <h2>{title}</h2>
      </div>
      <figure className='card__image'>
        <img src={image} alt={`image of ${title}`} />
      </figure>
      <div className='card__buttons'>
        {renderButton()}
        <Link to={`detail/${id}`}>
          <button><img src={searchIcon} alt="view more icon" /></button>
        </Link>
      </div>
    </section>
  );
}

export default RecipeCard;