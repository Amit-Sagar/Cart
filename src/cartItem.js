import { getSuggestedQuery } from '@testing-library/react';

import React from 'react';

const CartItem =(props)=>{
          const {qty,title,price}= props.product;
          const {product, onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}= props;
        return (
           <div className="cart-item">
                <div className="left-block">
                    <img style= {styles.image} />
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 55} } >{title}</div>
                    <div style={ {fontSize:35,color:'grey' } }>Rs {price}</div>
                    <div style={ {fontSize:25, color: 'grey'} }>Qty: {qty}</div>
                    <div className="cart-item-action">
                        {/* Button */}
                        <img 
                             alt="increase" 
                             className="action-item"
                             src="https://image.flaticon.com/icons/png/128/149/149145.png" 
                             onClick={() => onIncreaseQuantity(product)}
                         />
                        <img 
                             alt="decrease" 
                             className="action-item" 
                             src="https://image.flaticon.com/icons/png/128/814/814039.png"
                             onClick={() => onDecreaseQuantity(product)}
                             
                        />
                        <img 
                             alt="delete" 
                             className="action-item" 
                             src="https://image.flaticon.com/icons/png/128/1214/1214428.png" 
                             onClick={()=> onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
           </div>
        );
    }

const styles = {
    image: {
        height: 210,
        width: 210,
        borderRadius: 4,
        color: 'grey',
    }
}

export default CartItem;