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

  // function orderMeal(meal: Meal){
  //   //vérifier si l'utilisateur a assez d'argent
  //   if(this.wallet < meal.total){
  //     //faire une meilleure erreur
  //     throw new Error("Fonds insuffisants")
  //   }
  //   //retirer le prix du portefeuille
  //   //ajouter la commande dans l'historique
  // }
}

