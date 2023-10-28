import React from 'react'
import Main from '../Components/main/Main'
import Popular from '../Components/popular/Popular';
import Offers from '../Components/offers/Offers'
import  NewsLetter  from '../News letter/NewsLetter';
import Collection from '../Components/Newcollection/Collection';


const Shop = () => {
  return (
    <div>
      <Main />
      <Popular />
      <Offers />
      <Collection />
      <NewsLetter />
      

    </div>
  )
}
export default Shop;