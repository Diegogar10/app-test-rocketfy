import './RecipeCard.scss';
import searchIcon from './../assets/icons/search-icon.svg';
import like1Icon from './../assets/icons/like-off-icon.svg';
import like2Icon from './../assets/icons/like-on-icon.svg';
import { useContext } from 'react';
import { ContextApp } from '../context';
import { Link } from 'react-router-dom';

const RecipeCard = ({
  id,
  title,
  image,
}) => {
  
  const { isAuth } = useContext(ContextApp);

  const renderButton = ()=> {
    if(!isAuth) {
      return <button className='invisble'><img src={like1Icon} alt="like icon" /></button>
    } else {
      return <button><img src={like1Icon} alt="like icon" /></button>
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