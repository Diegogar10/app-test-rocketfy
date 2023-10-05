const getArrayIngredients = (data) => {

  const ingredients = [];
  const measure = [];
  const ingredientsMap = [];

  //Hamos un mapeo de la informacion organizando los ingredinetes con las cantidades y devolvemos una array con objetos
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