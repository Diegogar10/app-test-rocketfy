import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useRecipesByCategories = () => {
  
  //cosnultamos la cateogrias desde los parametros en url
  const {name} = useParams();
  //traemos nuestra variable de entorno para la conexion a la API
  const query = `${import.meta.env.VITE_API}filter.php?c=${name}`;
  const [recipes, setRecipes] = useState([]);

  // funcion que consulta las recetas segun categoria
  const getRecipes = async (URL)=> {
    await fetch(URL)
      .then(res => res.json())
      .then(data=> setRecipes(data.meals));
  };
  
  useEffect(()=>{
    getRecipes(query);
  },[])

  return {name ,recipes};
}

export default useRecipesByCategories;