import { fetchMeals } from "./meals.js"

console.log('yo')

// const meals = fetchMeals();
// const mealList = document.getElementById('mealList')
// console.log(`deunsLog : `, mealList)

async function main(){
  const meals = await fetchMeals();
  const mealList = document.getElementById('mealList')
  if (!mealList){
    return;
  } 

  console.log(`deunsLog : `, meals)

  meals.forEach((meal) => {
    mealList.innerHTML += `<li>${meal.name} - ${meal.price}€</li>`
  })
}

main();