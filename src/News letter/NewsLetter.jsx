import React from 'react'
import './NewsLetter.css'
 const NewsLetter = () => {
  return (
      <div className='newsletter'>
          <h1>Get your exclusive offers in your mail</h1>
          <p>Subscribe our news letter and stay updated</p>
          <div className='Newin'>
              <input type="email" name="" id="" placeholder='Your mail id' />
              <button>Subscribe</button>
          </div>
    </div>
  )
}
export default NewsLetter;