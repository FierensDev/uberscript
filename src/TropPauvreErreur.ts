export class TropPauvreErreur extends Error {
  wallet: number;  

  constructor(wallet: number){
    super(`Fonds insuffisants : Montant restant sur le portefeuille ${wallet}€`)
    this.name = "TropPauvreErreur"
    this.wallet = wallet
  }
}