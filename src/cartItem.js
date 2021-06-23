import { getSuggestedQuery } from '@testing-library/react';

import React from 'react';

class CartItem extends React.Component{
    render (){
        console.log('this.props',this.props);
          const {qty,title,price}= this.props.product;
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
                             onClick={() => this.props.onIncreaseQuantity(this.props.product)}
                         />
                        <img 
                             alt="decrease" 
                             className="action-item" 
                             src="https://image.flaticon.com/icons/png/128/814/814039.png"
                             onClick={() => this.props.onDecreaseQuantity(this.props.product)}
                             
                        />
                        <img 
                             alt="delete" 
                             className="action-item" 
                             src="https://image.flaticon.com/icons/png/128/1214/1214428.png" 
                             onClick={()=> this.props.onDeleteProduct(this.props.product.id)}
                        />
                    </div>
                </div>
           </div>
        );
    }
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