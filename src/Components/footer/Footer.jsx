import React from 'react'
import logo from '../Assets/logoo.png'
import Wa from '../Assets/whatsapp.png'
import IN from '../Assets/instagram.png'
import TW from '../Assets/twitter.png'
import './Footer.css'
const Footer = () => {
  return (
      <div className='footer'>
          <div className='fologo'>
              <img src={logo} alt="" />
              <h2>MM Sales</h2>
          </div>
          <div className='info'>
              <ul>
                  <li>Company</li>
                  <li>Products</li>
                  <li>About</li>
                  <li>contacts</li>
              </ul>
          </div>
          <div className='Fi'>
              <img src={Wa} alt="" />
              <img src={IN} alt="" />
              <img src={TW} alt="" />
          </div>
          <hr />
          <div>
              <p>Copyright &copy; 2023 - All Right Reserve</p>
          </div>
    </div>
  )
}
export default Footer;