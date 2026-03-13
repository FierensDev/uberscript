import { fetchMeals } from "./meals.js"
import { Order, User } from "./user.js";

async function main(){

  const user = new User(1, "Bob", 30)

  //display wallet and history
  const historyDiv = document.createElement('ul')
  historyDiv.id = 'history'
  historyDiv.className ='card sadow'
  historyDiv.innerHTML = "Historique :"

  const walletDiv = document.createElement('div')
  walletDiv.id = 'wallet'
  walletDiv.className ='card sadow'
  walletDiv.innerHTML = `Portefeuille : ${user.wallet}€`

  const h1 = document.querySelector('h1')
  h1?.after(walletDiv);
  h1?.after(historyDiv);

  let history: Order[] = JSON.parse(localStorage.getItem('history') ?? '[]');
  if(history){
    history.forEach(h => {
      historyDiv.innerHTML += `<li>${h.meals[0].name} - ${h.meals[0].price}€</li>`
    });
  }
 
  //Meals
  // au cas ou l'api sarrete
  // const meals = [{"id":1,"name":"Burger","calories":720,"price":10},{"id":2,"name":"Pizza Margherita","calories":850,"price":12},{"id":3,"name":"Caesar Salad","calories":320,"price":8},{"id":4,"name":"Pasta Carbonara","calories":900,"price":13},{"id":5,"name":"Chocolate Cake","calories":450,"price":6}]
  const meals = await fetchMeals();
  const mealList = document.getElementById('mealList')
  if (!mealList){
    return;
  } 

  meals.forEach((meal) => {
    const li = document.createElement('li')
    li.innerHTML = `${meal.name} - ${meal.price}€ <button id="meal-${meal.id}">Commander</button>`
    mealList.appendChild(li)
  
    document.getElementById(`meal-${meal.id}`)?.addEventListener('click', () => {
      user.orderMeal(meal)
    })
  })
}

main();