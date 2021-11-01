import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import './ItemDetail.css';

function ItemDetail({producto}) {
    console.log(producto)
 
    return (
        <>
        <Link className="button__link" to="/">
        <p className="button__inicio"> Volver al inicio <i class="fas fa-arrow-right"></i></p>
        </Link>
        <h1 className="producTitle">{producto.name}</h1>
    
            <div className="container__detail">
                <div className="container__detail__img">
                   <img src={'http://localhost:5000/'+producto.image}/>
                </div>
                <div className="container__detail__description">
                <p className="textcategory">{producto.category}</p>
                    <p className="textdescription">{producto.description}</p>
                    <p className="textrating">{producto.rating}</p>
                    
                    <div class="star-wrapper">
  <a href="#" class="fas fa-star s1"></a>
  <a href="#" class="fas fa-star s2"></a>
  <a href="#" class="fas fa-star s3"></a>
  <a href="#" class="fas fa-star s4"></a>
  <a href="#" class="fas fa-star s5"></a>
</div>
<script src="https://kit.fontawesome.com/5ea815c1d0.js"></script>
<div class="wraper">
  <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="gitlabBilal" data-color="#FFDD00" data-emoji="" data-font="Cookie" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff"></script>
</div>
                    <h2>${producto.price}</h2>
   
  

                    <button className="addButtonCart">Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
