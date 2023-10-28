import React from "react";
import "./collection.css";
import data_product from "../Assets/data_product/Data1";
import Item from "../Items/Item";
const Collection = () => {
  return (
    <div className="collection">
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collection-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              old_price={item.old_price}
              new_price={item.new_price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Collection;
