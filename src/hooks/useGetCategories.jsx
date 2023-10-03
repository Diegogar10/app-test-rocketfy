import { useEffect, useState } from "react";

const useGetCategories = () => {
  
  const urlAPI = import.meta.env.VITE_API;
  console.log(urlAPI);
  const [categories, setCategories] = useState([]);
  
  const queryAPI = async (URL)=> {
    await fetch(URL)
            .then(res => res.json())
            .then(data => setCategories(data))
  };

  useEffect(()=>{
    queryAPI(urlAPI);
  },[])

  return categories;
}

export default useGetCategories;