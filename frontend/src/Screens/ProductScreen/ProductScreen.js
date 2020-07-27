import React from 'react';
import data from '../../data';
import { Link } from 'react-router-dom';

function ProductScreen(props){
    const product= data.products.find((x)=>{return x.id==props.match.params.id});
    console.log(product);
    return (
    <div>
        <div className="back-to-result">
            <Link to="/">Back to Home</Link>
        </div>
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product"/>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4> - <span>{product.brand}</span>
                    </li>
                    <li>
                        <h4>{product.rating}</h4> stars <p>{product.numReviews}</p>
                    </li>
                    <li>
                        <h4>{product.price}</h4> 
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Price : {product.price}
                    </li>
                    <li>
                        Status : {product.status}
                    </li>
                    <li>
                        Quantity : <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </li>
                    <li>
                        <button className="button primary"> Add to cart</button>
                    </li>
                </ul>

            </div>
        </div>
       
    </div>
    );
}

export default ProductScreen;