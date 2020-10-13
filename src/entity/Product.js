

export default class Product{

  constructor({id,name,price=0,quantity=0}){
      this.id=id;
      this.name=name;
      this.price=price;
      this.quantity=quantity;
  }

  get priceLabel(){
    return `R$ ${this.price.toLocaleString('pt-BR',{
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  }

}
