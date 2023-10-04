import { useParams } from "react-router-dom";
import useRecipeById from "../hooks/useRecipeById";
import getArrayIngredients from "../utils/organizeUtil";
import './Detail.scss';

const Detail = () => {
  
  const { id } = useParams(); 
  const recipe = useRecipeById(id);
  const data = recipe.meals;
 
  return(
    <>
      { data && <section className="recipe__container">
      <div className="recipe__origin">
          <h3>Country: </h3>
          <p>{data[0].strArea}</p>
          <h3>Category: </h3>
          <p>{data[0].strCategory}</p>
        </div>
        <div className="recipe__title">
          <h1>{data[0].strMeal}</h1>
        </div>
        <div className="recipe__image">
          <img src={data[0].strMealThumb} alt={data[0].strMeal} />
        </div>
        <div className="recipe__ingredients">
          <h4>Ingredients</h4>
          <ul>
            {getArrayIngredients(data[0])
              .map(({ingredient, measure}, key) => 
                <li key={key}>
                  <p>{ingredient}</p>
                  <p>{measure}</p>
                </li>)
            }
          </ul>
        </div>
        <div className="recipe__preparation">
          <h4>Preparation</h4>
          <p>{data[0].strInstructions}</p>
        </div>
        <div className="recipe__video">
          <p>View video in <a href={data[0].strYoutube}>recipe</a></p>
        </div>
      </section>}
    </>
  ) 
}

export default  Detail;