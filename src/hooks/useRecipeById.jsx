import { useEffect, useState } from "react";

const useRecipeById = (id) => {

  //traemos nuestra variable de entorno para la conexion a la API
  const urlAPI = `${import.meta.env.VITE_API}lookup.php?i=${id}`;

  const [ recipe, setRecipe ] = useState({});
  
  // funcion que consulta las categorias
  const getRecipe = async (URL)=> {
    await fetch(URL)
      .then(res => res.json())
      .then(data => setRecipe(data));
  };

  useEffect(()=>{
    getRecipe(urlAPI);
  },[])

  return recipe;
}

export default useRecipeById;