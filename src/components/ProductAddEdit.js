import React from 'react';
import NumberInput from './NumberInput.js';

export default class ProductAddEdit extends React.Component {

  constructor(props){
    super(props);

    // console.log(this.props);

    if(this.props.location.product){
      const {id,name,price,quantity} = this.props.location.product;
      this.state={
        id,
        name,
        quantity,
        price,
        msg:null
      };
    }else{
      this.state={
        name:'',
        quantity:1,
        price:0,
        msg:null
      };
    }
  }

  save=()=>{
    const {name} = this.state;

    if(!name){
      this.setState({msg:'Informe o nome do produto'});
      return;
    }

    //TODO salvar no banco

    this.setState({msg:'Produto salvo no banco de dados.'});
  }

  changeName=(event)=>{

    if(event.target.value.length>15) return;

    this.setState({name:event.target.value,msg:null});
  }

  changePrice=(event)=>{
    let num = event.target.value.replace(/\D/g, '');//only digits

    if(parseInt(num)<0) return;

    this.setState({price:num,msg:null});
  }

  render(){
    return (
      <div className='home'>

        {(this.state.id)?
            <h2 style={{margin:'10px'}}>Editar Produto</h2>
          :
            <h2 style={{margin:'10px'}}>Adicionar Produto</h2>
        }


        {(this.state.msg)&&<div style={{color:'darkred', margin:'10px'}}>{this.state.msg}</div>}

        {(this.state.id)&&<div><b>Id: {this.state.id}</b><br/><br/></div>}


        <b>Nome</b><br/>
        <input type="text" name="name" value={this.state.name} onChange={this.changeName}/><br/>
        <br/>

        <b>Preço</b><br/>
        <input type="text" name="price" value={this.state.price} onChange={this.changePrice}/><br/>
        <br/>

        <b>Quantidade</b><br/>
        <NumberInput value={this.state.quantity} max={500} onChange={(value)=>this.setState({quantity:value,msg:null})}/><br/>

        <button onClick={this.save}>Salvar</button>
      </div>
    );
  }
}
