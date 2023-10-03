import Category from '../components/category';
import ListCategories from '../container/ListCategories';
import useGetCategories from '../hooks/useGetCategories';
import './Home.scss';


const Home = () => {
  
  const { categories } = useGetCategories(); 

  

  return (
    <>
      <ListCategories>
        {categories && categories.map(data => (
          <Category 
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