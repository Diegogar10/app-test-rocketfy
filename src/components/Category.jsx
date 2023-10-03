import './Category.scss';

const Category = ({url, name}) => {

  return (
    <figure  className='category__container'>
      <img src={url} alt={`image ${name}`} />
      <figcaption>{name}</figcaption>
    </figure>
  )
    

}

export default Category;