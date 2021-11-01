import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import './Item.css'
function Item({prod}) {
console.log(prod)
   
    
const [amount, setAmount] = useState(0);
const [stockAmount, setStockAmount] = useState(20);

   
 const increaseButton=()=>{
     if(stockAmount == 0){
         console.log("lo siento, no queda más stock")
     }else{
 
 setStockAmount(stockAmount-1)
 setAmount( amount+1);
     }
     
    }
 const decreaseButton=()=>{
     if(amount >= 1){
        setAmount( amount-1);
        setStockAmount(stockAmount+1)
     }else{
         console.log("ya está en 0");
     }
   
}
const addToCart =() =>{

    

}
    return (
        <div className="container__itemCount" >
            <h3>{prod.name}</h3><span class={prod.countInStock==0?'colorred':'colorblack'}>Stock: {prod.countInStock}</span>
            <h2>${prod.price}</h2>
            <img src={'http://localhost:5000/'+prod.image} width="250px"/>
            <div className="container__itemCount__counter">
            
             
             <button className="buttonLess" onClick={decreaseButton}>-</button>
             <input className="inputCount" type="text" id="fname" name="fname" value={amount}  disabled></input>
            <button  className="buttonMore" onClick={increaseButton}>+</button>
             <div className="containerButtonsCard">
            
             <Link className="detalleButtonCart" to={'/Item/'+prod._id}>
          Ver Detalle
            </Link>
            <Link className="addButtonCart" to={'/Item/'+prod._id}  disabled={prod.countInStock==0}>
           Agregar
            </Link>
            </div>
            {/* <p>{prod.description}</p> */}
            </div>
        </div>
    )
}

export default Item
