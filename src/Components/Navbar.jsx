import './Navbar.css';
import logoo from './Assets/logoo.png'
import cartlogo from './Assets/cartlogo.png'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() { 
  const [Bar, setBar] = useState("Shop");

    return (
      <>
        <div className="nav">
          <div className="logo">
            <img src={ logoo }  height="50px" width="50px"   alt="" />
            <p>MM Sales</p>
          </div>
          <div className="Menu">
            <ul>
              <li onClick={() => { setBar("Shop") }}><Link style={{ textDecoration: 'none', }} to='/'>Shop</Link> {Bar === "Shop" ? <hr /> : ""}</li>
              <li onClick={()=>{setBar("Mens")}}><Link style={{ textDecoration: 'none', }} to='/men'>Mens</Link>{Bar === "Mens" ? <hr /> : ""}</li>
              <li onClick={()=>{setBar("Womens")}}><Link style={{ textDecoration: 'none', }} to='/women'>Womens</Link>{Bar === "Womens" ? <hr /> : ""}</li>
              <li onClick={()=>{setBar("Kids")}}><Link style={{ textDecoration: 'none', }} to='/Kids'>Kids </Link>{Bar === "Kids" ? <hr /> : ""}</li>
            </ul>
          </div>
            {/* <div className="MobileMenu">
            <ul>
              <li onClick={() => { setBar("Shop") }}><Link style={{ textDecoration: 'none', }} to='/'>@</Link> {Bar === "Shop" ? <hr /> : ""}</li>
              <li onClick={()=>{setBar("Mens")}}><Link style={{ textDecoration: 'none', }} to='/men'>#</Link>{Bar === "Mens" ? <hr /> : ""}</li>
              <li onClick={()=>{setBar("Womens")}}><Link style={{ textDecoration: 'none', }} to='/women'>$</Link>{Bar === "Womens" ? <hr /> : ""}</li>
              <li onClick={()=>{setBar("Kids")}}><Link style={{ textDecoration: 'none', }} to='/Kids'> &</Link>{Bar === "Kids" ? <hr /> : ""}</li>
            </ul>
          </div> */}
           
          <div className="Cart">
            <Link to='/Login'><button className='Login'>Login</button></Link>
            
            <Link to='/Cart'> <img src={cartlogo} height="50px" width="50px"  alt="no image" /></Link>
            <p className="cart-count" >{}</p>
          </div>
        </div>
        <hr />
      </>
    );
}
export default Navbar;