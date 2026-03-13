import { Meal } from "./meals.js";
import { TropPauvreErreur } from "./TropPauvreErreur.js";

export type Order = {
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
    //vérifier si l'utilisateur a assez d'argent
    if(this.wallet < meal.price){
      throw new TropPauvreErreur(this.wallet, meal.price)
    }

    //retirer le prix du portefeuille
    this.wallet -= meal.price
    
    //ajouter la commande dans l'historique
    const order: Order = {
      id: this.orders.length+1,
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

  totalOrdersSpent(): number {
    return this.orders.reduce((total, order) => total + order.total, 0);
  }
}

