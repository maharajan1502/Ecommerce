import React, { createContext, useEffect, useState } from "react";
import Allproduct from "../Assets/data_product/Allproduct"; 


export const ShopContext = createContext(null)
const getdefaultcart = () => {
    let cart = {};
    for (let i = 0; i <= Allproduct.length + 1; i++) {
        cart[i] = 0
    }
    return cart;
}

const ShopContextProvider = (props) => {
    
    const [cartItems,setcartItems]= useState (getdefaultcart())
   

     const addToCart = (itemid,size) => {
         setcartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }))
         console.log(size)
        
    }
     const removeFromCart = (itemid) => {
         setcartItems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 })) 
    }
    console.log(cartItems)
     const Contextvalue = { Allproduct, cartItems,addToCart,removeFromCart }
    return (
        <ShopContext.Provider value={Contextvalue}>
            {props.children}
      </ShopContext.Provider>
  )
}
export default ShopContextProvider; 