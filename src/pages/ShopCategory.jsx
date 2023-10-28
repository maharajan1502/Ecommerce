import React from "react";
import "./shopcate/ShopCategory.css";
import { useContext } from "react";
import { ShopContext } from "../Components/context/ShopContext";
import Item from "../Components/Items/Item";
import caretdown from "../Components/Assets/caret-down.png";

const ShopCategory = (props) => {
  const { Allproduct } = useContext(ShopContext);
  return (
    <div className="ShopCategory">
      <img className="ban" src={props.banner} alt="no banner" /> <br />
      <h1>
        {props.category} <hr />
      </h1>
      <div className="sort">
        Sort by <img src={caretdown} alt="" />
      </div>
      <div className="catp">
        {Allproduct.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                keys={i}
                id={item.id}
                name={item.name}
                old_price={item.old_price}
                new_price={item.new_price}
                image={item.image}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="loadmore">
        Explore More
      </div>
    </div>
  );
};
export default ShopCategory;
