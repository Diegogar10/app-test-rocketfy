const getArrayIngredients = (data) => {

  const ingredients = [];
  const measure = [];
  const ingredientsMap = [];

  Object.entries(data).forEach(([key,value])=>{
    if(key.includes('strIngredient')){
      if(value != ''){
        ingredients.push(value);
      }
    }
    if(key.includes('strMeasure')){
      if(value != ''){
        measure.push(value);
      }
    }
  });

  ingredients.forEach((item, index) => {
    ingredientsMap.push({ingredient: item, measure: measure[index]});
  })

  return ingredientsMap;
}

export default getArrayIngredients;