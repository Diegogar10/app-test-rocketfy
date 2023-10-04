import CategoryCard from '../components/CategoryCard';
import ListCategories from '../container/ListCategories';
import useGetCategories from '../hooks/useGetCategories';
import './Home.scss';

const Home = () => {
  
  const { categories } = useGetCategories(); 

  return (
    <>
      <ListCategories title={'Categories'}>
        {categories && categories.map(data => (
          <CategoryCard 
            key={data.idCategory}
            url={data.strCategoryThumb}
            name={data.strCategory}
          />
        ))}
      </ListCategories>
    </>
  )
};

export default Home;