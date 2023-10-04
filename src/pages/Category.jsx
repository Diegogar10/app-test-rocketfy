import useRecipesByCategories from "../hooks/useRecipesByCategory";
import ListCategories from "../container/ListCategories";
import RecipeCard from "../components/RecipeCard";

const Category = () => {
  const {name, recipes} = useRecipesByCategories();

  console.log(name, recipes);
  return(
    <ListCategories title={`Recipes of ${name}`}>
      {recipes && recipes.map((data)=>(
        <RecipeCard 
          key={data.idMeal}
          id={data.idMeal}
          title={data.strMeal}
          image={data.strMealThumb}
        />
      )
      )}
    </ListCategories>
    
  )
}

export default Category;