import React from 'react'
import './Breadcrum.css'
import rar from '../Assets/rarr.svg'
 const Breadcrum = (props) => {
    const { Product } = props;
   return (
     <div className="Breadcrum">
       HOME <img src={rar} alt="" />
       SHOP <img src={rar} alt="" />
       {Product.category} <img src={rar} alt="" />
       {Product.name}
     </div>
   );
}
export default Breadcrum;