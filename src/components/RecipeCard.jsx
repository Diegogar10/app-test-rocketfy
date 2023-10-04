import './RecipeCard.scss';

const RecipeCard = ({
  id,
  title,
  image,
}) => {
  
  return(
    <section className='recipes__card'>
      <div className='card__head'>
        <h2>{title}</h2>
      </div>
      <figure className='card__image'>
        <img src={image} alt={`image of ${title}`} />
      </figure>
      <div className='card__buttons'>
        <button></button>
        <button>View Recipe</button>
      </div>
    </section>
  );
}

export default RecipeCard;