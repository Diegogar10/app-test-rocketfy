import { Link } from 'react-router-dom';
import './CategoryCard.scss';

const CategoryCard = ({url, name}) => {

  return (
    <Link to={`category/${name}`}>
      <figure  className='category__container'>
        <img src={url} alt={`image ${name}`} />
        <figcaption>{name}</figcaption>
      </figure>
    </Link>
  )
    

}

export default CategoryCard;