import { fetchMeals, Meal } from "./meals.js"
import { Order, User } from "./user.js";

async function main(){

  const user: User = new User(1, "Bob", 30)

  //display wallet and history
  const historyDiv: HTMLUListElement = document.createElement('ul')
  historyDiv.id = 'history'
  historyDiv.className ='card sadow'
  historyDiv.innerHTML = "Historique :"

  const walletDiv: HTMLDivElement = document.createElement('div')
  walletDiv.id = 'wallet'
  walletDiv.className ='card sadow'
  walletDiv.innerHTML = `Portefeuille : ${user.wallet}€`

  const totalSpentDiv: HTMLDivElement = document.createElement('div')
  totalSpentDiv.id = 'totalSpent'
  totalSpentDiv.className ='card sadow'
  totalSpentDiv.innerHTML = `Total dépensé : ${user.totalOrdersSpent()}€`

  const h1: HTMLHeadingElement | null = document.querySelector('h1')
  h1?.after(walletDiv);
  h1?.after(historyDiv);
  h1?.after(totalSpentDiv);

  let history: Order[] = JSON.parse(localStorage.getItem('history') ?? '[]');
  if(history){
    history.forEach(h => {
      historyDiv.innerHTML += `<li>${h.meals[0].name} - ${h.meals[0].price}€</li>`
    });
  }
 
  //Meals
  // au cas ou l'api crash
  // const meals = [{"id":1,"name":"Burger","calories":720,"price":10},{"id":2,"name":"Pizza Margherita","calories":850,"price":12},{"id":3,"name":"Caesar Salad","calories":320,"price":8},{"id":4,"name":"Pasta Carbonara","calories":900,"price":13},{"id":5,"name":"Chocolate Cake","calories":450,"price":6}]
  const meals: Meal[] = await fetchMeals();
  const mealList: HTMLElement | null = document.getElementById('mealList')
  if (!mealList){
    return;
  } 

  meals.forEach((meal) => {
    const li: HTMLLIElement = document.createElement('li')
    li.innerHTML = `${meal.name} - ${meal.price}€ <button id="meal-${meal.id}">Commander</button>`
    mealList.appendChild(li)
  
    document.getElementById(`meal-${meal.id}`)?.addEventListener('click', () => {
      user.orderMeal(meal)
      document.getElementById('wallet')!.innerHTML = `Portefeuille : ${user.wallet}€`
      document.getElementById('totalSpent')!.innerHTML = `Total dépensé : ${user.totalOrdersSpent()}€`;
      document.getElementById('history')!.innerHTML += `<li>${meal.name} - ${meal.price}€</li>`;
    })
  })
}

main();