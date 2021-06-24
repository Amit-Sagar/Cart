import React from 'react';

import Cart from './cart';
import Navbar from './Navbar';

class App extends React.Component {
  
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
  getCartCount= ()=> {
        const {products}= this.state;
         let count =0;
          products.forEach((product)=>{
         count += product.qty;
       } )
    return count;
     }
render (){
  const {products}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()} />
      <Cart
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct}
       />
    </div>
  
  );
}
 
}

export default App;
