export class TropPauvreErreur extends Error {
  wallet: number;  
  orderPrice: number

  constructor(wallet: number, orderPrice: number){
    super(`Fonds insuffisants : Montant restant sur le portefeuille ${wallet}€ et prix du menu : ${orderPrice}€`)
    this.name = "TropPauvreErreur"
    this.wallet = wallet
    this.orderPrice = orderPrice
  }
}