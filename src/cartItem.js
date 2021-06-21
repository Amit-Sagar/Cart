import { getSuggestedQuery } from '@testing-library/react';
import React from 'react';

class CartItem extends React.Component{

    constructor (){
        super();
        this.state= {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }
       increaseQuantity = () =>{
           console.log('this', this.state)
       }
    render () {
        return (
           <div className="cart-item">
                <div className="left-block">
                    <img style= {styles.image} />
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 55} } >{this.state.title}</div>
                    <div style={ {fontSize:35,color:'grey' } }>Rs {this.state.price}</div>
                    <div style={ {fontSize:25, color: 'grey'} }>Qty: {this.state.qty}</div>
                    <div className="cart-item-action">
                        {/* Button */}
                        <img 
                             alt="increase" 
                             className="action-item"
                             src="https://image.flaticon.com/icons/png/128/149/149145.png" 
                             onClick={this.increaseQuantity.bind(this)}
                         />
                        <img 
                             alt="decrease" 
                             className="action-item" 
                             src="https://image.flaticon.com/icons/png/128/814/814039.png" 
                        />
                        <img 
                             alt="delete" 
                             className="action-item" 
                             src="https://image.flaticon.com/icons/png/128/1214/1214428.png" 
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