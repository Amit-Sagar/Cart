import { getSuggestedQuery } from '@testing-library/react';

import React from 'react';

const Navbar = () =>{

        return (
           <div style={styles.nav} >
               <div style={styles.logoContainer} >
                   <img style={styles.logo} src="https://image.flaticon.com/icons/png/128/3479/3479404.png"/>
                   <img style={styles.logo} src="https://image.flaticon.com/icons/png/128/3479/3479404.png"/>
                  <div style={styles.navbarItems}>
                  <p style={{fontSize:15}}>Home</p>
                   <p style={{fontSize:15, paddingLeft:10}}>About</p>
                   <p style={{fontSize:15,paddingLeft:10}}>Categories</p>
                   <p style={{fontSize:15,paddingLeft:10}}>Contact Us</p>
                   </div> 
               </div>
               <div style={styles.cartContainer}>
                   <img style={styles.cartIcon} src="https://image.flaticon.com/icons/png/512/3144/3144456.png" alt="cart-icon"/>
                   <span style={styles.cartCount} >3</span>
               </div>
                
           </div>
        );
    }
const styles = {
    cartContainer:{
        position:'relative'

      },
     cartIcon:{
          height:32,
          marginRight:20,
          paddingLeft:1020,
     },    
      nav:{
         background: 'lightblue',
         height: 70,
         display: 'flex',
         justyfyContent:'flex-end',
         alignItems: 'center'
      },
      cartCount:{
      background:'yellow',
        padding: '4px 8px',
        borderRadius:'50%',
        position: 'absolute',
        right:0,
        top:-9
      },
      logo:{
          height:32,
          paddingLeft:20,
      },
      logoContainer:{
        display:'flex'
      },
      navbarItems:{
        paddingLeft: 25,
        display: 'inline-flex'
      }
     
    }

export default Navbar;