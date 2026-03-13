import { Meal } from "./meals.js";

type Order = {
  id: number
  meals: Meal[]
  total: number
}

export class User {
  id: number;
  name: string;
  wallet: number;
  orders: Order[];

  constructor(id: number, name: string, wallet: number) {
    this.id = id;
    this.name = name;
    this.wallet = wallet;
    this.orders = [];
  }

  orderMeal(meal: Meal){
    console.log(`deunsLog : try to order meal`, meal)
    console.log(`deunsLog : check argent`, this.wallet, meal.price )
    console.log(`deunsLog : order`,{
      id: this.orderMeal.length+1,
      meals: [meal],
      total: meal.price
    })
    //vérifier si l'utilisateur a assez d'argent
    if(this.wallet < meal.price){
      throw new Error("Fonds insuffisants")
    }

    //retirer le prix du portefeuille
    this.wallet -= meal.price
    
    //ajouter la commande dans l'historique
    const order = {
      id: this.orderMeal.length+1,
      meals: [meal],
      total: meal.price
    }
    this.orders.push(order)
    this.addOrderToHistory(order)
  }

  addOrderToHistory(order: Order){
    const history= localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')!) : [];
    history.push(order);
    localStorage.setItem('history', JSON.stringify(history));
  }
}

