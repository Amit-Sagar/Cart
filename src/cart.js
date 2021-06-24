import { getSuggestedQuery } from '@testing-library/react';
import React from 'react';
import CartItem from './cartItem';

class Cart extends React.Component{
    constructor (){
        super();
        this.state= {products :
         [ {  price: 99,
               title: 'Watch',
               qty: 1,
               img: 'https://image.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg',
               id: 1
            },
            {  price: 999,
                title: 'Phone',
                qty: 1,
                img: 'https://image.freepik.com/free-psd/premium-mobile-phone-screen-mockup-template_53876-65749.jpg',
                id: 2
             },
             {  price: 999,
                title: 'Laptop',
                qty: 1,
                img: 'https://image.freepik.com/free-psd/laptop-screen-mockup-design-isolated_53876-98834.jpg',
                id: 3
             }
         ]}
    }
    handleIncreaseQuantity= (product) => {
        console.log('hey increase the qty of product',product);
        const {products} =this.state;
        const index= products.indexOf(product);

        products[index].qty +=1;
        this.setState({
            products
        })
     }
     handleDecreaseQuantity= (product) => {
        const {products} =this.state;
        const index= products.indexOf(product);
         
        if (products[index].qty === 0){
            return;
        }
                products[index].qty -=1;
        this.setState({
            products:products
        })
    }
    handleDeleteProduct = (id) =>{
       const {products}=this.state;
       const items =products.filter((items)=>items.id!==id);
       this.setState({
           products:items
       })
    } 
render() {
    const {products}= this.state;
    return (
           <div className="cart">
               {products.map((product) =>{
                  return (<CartItem product={product}
                Key= {product.id} 
                onIncreaseQuantity={this.handleIncreaseQuantity}
                onDecreaseQuantity={this.handleDecreaseQuantity}
                onDeleteProduct={this.handleDeleteProduct}
                />
                ) })}
                </div>  
            );
         }
}  
    

export default Cart;