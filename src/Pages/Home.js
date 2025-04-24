import React , { useEffect , useState } from 'react' ;
import Navbar from "../components/Navbar";
import Carousel from '../components/Carousel';
import Ads from '../components/Ads';
import ProductSection from '../components/ProductSection';
import '../App.css';

function Home({categorydata}) {
  // You might want to fetch this dynamically from an API or Redux state
  const productArray = ['iphone', 'ipad', 'macbook', 'samsung']; 

  let [products , setProducts] = useState([]) ;
  let [IsSearch , setIsSearch] = useState(false) ;
  
   let getproducts = () => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProducts(data))
   }

   useEffect(getproducts,[])


   const filteredItems =
   categorydata 
     ?   products?.filter(item => item?.category===categorydata)
     : products;


  return (
    <>
      <Navbar  products={products}  setProducts={setProducts} setIsSearch={setIsSearch}/>
      
      {/* Carousel Section */}
      {!IsSearch && categorydata===undefined &&<div className='container-fluid bg-white mt-5 pt-3'>
        <div className='row'>
          <Carousel />
        </div>
      </div>}

      {/* Ads Section */}
      {!IsSearch && categorydata===undefined &&<div className='container-fluid bg-white mt-5 pt-3'>
        <div className='row'>
          <Ads />
        </div>
      </div>}
      
      {/* Product Section */}
      <div className='container-fluid bg-white'>
        <div className='row'>
          <ProductSection products={filteredItems} /> 
        </div>
      </div>
    </>
  );
}

export default Home;
