import React, { useContext } from "react";
import "./Display.css";
import star from "../Assets/sstar.png";
import { useState } from "react";
import { ShopContext } from "../context/ShopContext";
const Display = (props) => {
 
  const[psize,setpsize]=useState('')
  const { Product } = props;
  const{ addToCart } = useContext(ShopContext)
  return (
    <div className="display">
      <div className="productleft">
        <div className="imglist">
          <div className="dupimg">
            <img src={Product.image} alt="not available" />
            <img src={Product.image} alt="not available" />
            <img src={Product.image} alt="not available" />
            <img src={Product.image} alt="not available" />
          </div>
          <div className="orgimg"><img src={Product.image} alt="not available" /></div>
          
          
        </div>
      </div>
      <div className="productright">
        <h1>{Product.name}</h1>
        <div className="star">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <p>(112)</p>
        </div>

          <div className="productprice">
            <div className="newP">${Product.new_price}</div>
            <div className="oldP">${Product.old_price}</div>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              architecto, nesciunt aut facere provident natus quisquam fugit
              nulla repudiandae animi culpa saepe, ipsum tenetur totam!
            </p>
          </div>
          <div className="size">
            <h1>Select Size</h1>
            <div className="Sizelist">
            <div onClick={() => { setpsize("S");}} className={(psize ==='S') ? 'true' :''}>S</div>
          <div onClick={() => { setpsize("M") }} className={(psize ==='M') ? 'true' :''}>M</div>
          <div onClick={() => { setpsize("L") }} className={(psize ==='L') ? 'true' :''}>L</div>
          <div onClick={() => { setpsize("XL") }} className={(psize ==='XL') ? 'true' :''}>XL</div>
          <div onClick={() => { setpsize("XXL") }} className={(psize ==='XXL') ? 'true' :''}>XXL</div>
            </div>
          <button className="addcart" onClick={() => {
            addToCart(Product.id, psize);
          
            
          }}>ADD TO CART</button>
          </div>
      </div>
    </div>
  );
}
export default Display;
