import { getSuggestedQuery } from '@testing-library/react';
import React from 'react';

class CartItem extends React.Component{
    render () {
        return (
           <div className="cart-item">
                <div className="left-block">
                    <img style= {styles.image} />
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 45} } >Phone</div>
                    <div style={ {fontSize:25,color:'grey' } }>Rs 999</div>
                    <div style={ {fontSize:25, color: 'grey'} }>1</div>
                    <div className="cart-item-action">
                        {/* Button */}
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