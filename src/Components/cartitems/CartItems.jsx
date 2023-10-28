import React, { useContext } from "react";
import "./Cartitems.css";
import cross from "../Assets/crossed.png";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
export const CartItems = () => {
  const { Allproduct, cartItems, removeFromCart } = useContext(ShopContext);
  let TotalItem = 0;
  let TotalPrice = 0;
  function cartadd(count, price) {
    TotalItem = TotalItem + count;
    TotalPrice = TotalPrice + price;
  }
  return (
    <div className="CartItems">
      <div className="cartHead">
        <p>Product</p>
        <p>Tittle</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {Allproduct.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <>
              {cartadd(cartItems[e.id], Number(cartItems[e.id] * e.new_price))}
              <div className="cartcontent cartHead">
                <Link to={`/product/${e.id}`}>
                  <img src={e.image} alt="" width="150px" height="150px" />
                </Link>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <p className="cart-quantity">{cartItems[e.id]}</p>
                <p>${cartItems[e.id] * e.new_price}</p>
                <img
                  src={cross}
                  height="20px"
                  width="20px"
                  onClick={() => {
                    removeFromCart(e.id);
                    TotalPrice -= Number(e.new_price);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </>
          );
        }
      })}

      <div className="total">
        <h2 className="T">Cart Details</h2>
        

        <div className="T"><p>Total Items</p> {TotalItem}</div>
        <div className="T"><p>Total Amount</p>${TotalPrice}</div>
      </div>
      <hr />
      <div>
        <button className="ChButton">Proceed To CheckOut</button>
      </div>
    </div>
  );
};
