import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [ value, setValue] = useState(()=>{
    try{
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item): initialValue ;
    }catch (e){
      return false;
    } 
  });
  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key,JSON.stringify(value));
      setValue(value);
    } catch (e) {
      console.error(e);
    }
  }
  return [value, setLocalStorage];
}

export default useLocalStorage;

const getDataLocal = (key) => {
    const item = window.localStorage.getItem(key);
    return item !== null ? JSON.parse(item): [];
}

export {getDataLocal};
