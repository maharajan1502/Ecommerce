import React from 'react'
import { useContext } from 'react'
import {ShopContext} from '../Components/context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/breadcums/Breadcrum'
import Display from '../Components/Display/Display'
import { Related } from '../Components/Related/Related'

 const Product = () => {
  const { Allproduct } = useContext(ShopContext)
   const { ProductId } = useParams();
   const Products = Allproduct.find((e) => (e.id === Number(ProductId))); 
   return (
     <div className='product'>
      <Breadcrum Product={Products} />
       <Display Product={Products} />
       <Related />
    </div>
  )
}
export default Product;