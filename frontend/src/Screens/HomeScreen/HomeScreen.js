import React from 'react';
import data from '../../data'
import {
    Link
  } from "react-router-dom";

function HomeScreen(props){
    return (<ul className="products">
    {
      data.products.map((product)=>
        <li>
            <div className="product"> 
                <Link to={'/products/' + product.id}><img className="product-image" src={product.image} alt="product1" /></Link>
                <div className="product-name"><Link to={'/products/' + product.id}>{product.name}</Link></div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">{product.price}</div>
                <div className="product-rating">{product.rating} star {product.numReviews}</div>
          </div>
      </li>

      )
    }
      
  </ul>);
}

export default HomeScreen;