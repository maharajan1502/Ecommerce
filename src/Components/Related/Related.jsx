import React from 'react'
import './Related.css'
import data from '../Assets/data_product/Data1';
import Item from '../Items/Item';
export const Related = () => {
  let count = 0;
  return (
      <div className='related'>
          <h1>RELATED PRODUCTS <hr /></h1>

          <div className="relpro">
        {data.map((item, i) => {
          if (count < 8){
            count = count + 1;
            return <Item key={i}  id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price} image={item.image} />
          }}
          )}
          </div>
    </div>
  )
}
