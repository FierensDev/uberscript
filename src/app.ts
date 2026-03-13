import { fetchMeals } from "./meals.js"
import { User } from "./user.js";

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
    // mealList.innerHTML += `<li>${meal.name} - ${meal.price}€ <button id="meal-${meal.id}">Commander</button></li>`
  
    // document.getElementById(`meal-${meal.id}`)?.addEventListener('click', () => {
    //   console.log(`deunsLog : click on meal-${meal.id}`)
    // })

    const li = document.createElement('li')
    li.innerHTML = `${meal.name} - ${meal.price}€ <button id="meal-${meal.id}">Commander</button>`
    mealList.appendChild(li)
  
    document.getElementById(`meal-${meal.id}`)?.addEventListener('click', () => {
      console.log(`deunsLog : click on meal-${meal.id}`)
    })
  })



  const user = new User(1, "Bob", 30);


}

main();