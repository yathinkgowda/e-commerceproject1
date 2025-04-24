import React from 'react'
import Navbar from '../components/Navbar'
import Home from './Home'
import ProductSection from '../components/ProductSection'
import { useParams } from 'react-router-dom';

function Men() {
  return (
    <div>
        {/* <Navbar/>
        <ProductSection/> */}
       <Home  categorydata="men's clothing"/>
      
        </div>
  )
}

export default Men