import React, { useContext } from "react";
import { ContextApp } from "../context";
import { Navigate } from "react-router-dom";
import ListCategories from "../container/ListCategories";
import RecipeCard from "../components/RecipeCard";


const Favorites = () => {
  
  const { isAuth, favoritesList } = useContext(ContextApp);

  //Llama a la lista de favoritos del estado global y reutiliza la vista de recetas
  const recipes = favoritesList;
  

  if( !isAuth ) {
    return <Navigate to='/' />
  } else {    
    return(
      <ListCategories title={`Favorites`}>
      {recipes && recipes.map((data)=>(
        <RecipeCard 
          key={data.id}
          id={data.id}
          title={data.title}
          image={data.image}
        />
      )
      )}
    </ListCategories>
    )
  }
};

export default Favorites;