import React from 'react'
import './Main.css'
import Hi from '../Assets/images/wave.png'
import Ar from '../Assets/arrow.png'
import Hero from '../Assets/images/blog-1.png'
 const Main = () => {
  return (
      <div className='Hmain'>
          <div className="head-left">
              <p>New Arrivals </p>
              <div className="hand-icon">
                  <img src={Hi}  alt='none' />
                  
              </div>
              <div className="para">
                  <p>collections</p>
                  <p> For Everyone</p>
              </div>
              <div className='latestB'>
                  <div>Latest Arrivals</div>
                  <img src={Ar} alt="none" />
              </div>
          </div>
          <div className="head-right">
              <img src={Hero}  alt="none" />
          </div>
    </div>
  )
}
export default Main;