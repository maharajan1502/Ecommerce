import React from 'react'
// import Data from '../Assets/data_product/Data'
import './Item.css'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/Product/${props.id}`}> <img onClick={window.scrollTo(0,4)} src={props.image} alt='nothing' /></Link>
      
      <p>{props.name}</p>
      
          <div className='price'>
              <div className="new-price">
                ${props.new_price}
              </div>
              <div className="old-price">
                ${props.old_price}
              </div>
          </div>
    </div>
  )
}
export default Item;
