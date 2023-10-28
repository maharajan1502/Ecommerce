import React from 'react'
import blog from '../Assets/images/blogban.png'
import './Offers.css'
 const Offers = () => {
  return (
      <div className='offers'>
          <div className="left">
              <h1>Exclusive</h1>
              <h1>Offers For You</h1>
              <p>Onle For Best Sellers Products</p>
              <button >Check Now</button>
          </div>
          <div className="offer-right">
              <img src={blog} alt="" />
          </div>
    </div>
  )
}
export default Offers;
