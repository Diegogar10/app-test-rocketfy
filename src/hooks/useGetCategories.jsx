import { useEffect, useState } from "react";

const useGetCategories = () => {
  
  //traemos nuestra variable de entorno para la conexion a la API
  const urlAPI = `${import.meta.env.VITE_API}categories.php`;
  const [categories, setCategories] = useState([]);
  
  // funcion que consulta las categorias
  const getCategories = async (URL)=> {
    await fetch(URL)
            .then(res => res.json())
            .then(data => setCategories(data))
  };

  useEffect(()=>{
    getCategories(urlAPI);
  },[])

  return categories;
}

export default useGetCategories;