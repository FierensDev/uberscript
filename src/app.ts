import { fetchMeals } from "./meals.js"
import { User } from "./user.js";

console.log('yo')

// const meals = fetchMeals();
// const mealList = document.getElementById('mealList')
// console.log(`deunsLog : `, mealList)

async function main(){

  const user = new User(1, "Bob", 30)

  const history = localStorage.getItem('history')
  if(!history){
    console.log(`no history`)
  }
   console.log(`history :`, history)

  
  // au cas ou l'api sarrete
  // const meals = [{"id":1,"name":"Burger","calories":720,"price":10},{"id":2,"name":"Pizza Margherita","calories":850,"price":12},{"id":3,"name":"Caesar Salad","calories":320,"price":8},{"id":4,"name":"Pasta Carbonara","calories":900,"price":13},{"id":5,"name":"Chocolate Cake","calories":450,"price":6}]
  const meals = await fetchMeals();
  const mealList = document.getElementById('mealList')
  if (!mealList){
    return;
  } 

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

      user.orderMeal(meal)
    })
  })


}

main();