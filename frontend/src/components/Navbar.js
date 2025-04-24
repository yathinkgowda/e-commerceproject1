// import React from 'react';
// import { Link , Outlet } from 'react-router-dom';

// function Navbar( {products}) {

// console.log(products,"productsproducts")
// const handleClickSearch = ()=>{
//   console.log("Search button clicked");
// }
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//         <Link to="/" className="navbar-brand">
  
//   <img src="data:image/png;base64,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" 
//   alt="" width="35" height="30" />
// </Link>



     



//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" aria-current="page" to="/men">Men</Link>
//               </li>
//               <li className="nav-item">
//                 <Link  className="nav-link"  aria-current="page" to="/Women">Women</Link>
//               </li>
//               <li className="nav-item">
//                 <Link  className="nav-link" aria-current="page" to="/Kids">Kids</Link>
//               </li>
//               <li className="nav-item">
//                 <Link  className="nav-link" aria-current="page" to="/Beauty">Beauty</Link>
//               </li>
//               <li className="nav-item">
//                 <Link  className="nav-link" aria-current="page" to="/Living">Living</Link>
//               </li>
//               <li className="icon mt-2 px-3" to='/cart'>
//               <Link className="fas fa-shopping-bag" aria-current="page" to="/cart"></Link>

//               </li>
//             </ul>
//             <form className="d-flex">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               <button className="btn btn-outline-success" type="submit" onClick={handleClickSearch}>Search</button>
//             </form>
//           </div>
//         </div>
//       </nav>
//       <Outlet/>
//     </div>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
function Navbar({ products,setProducts,setIsSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleClickSearch = (e) => {
    e.preventDefault();
    const search = searchTerm.toLowerCase();
    const filtered = products?.filter((product) =>
      product?.category?.toLowerCase()?.includes(search)
    );
    setProducts(filtered)
    setIsSearch(true)
    // You can redirect or update state to show these products on a page
  };

  const handleClickLogin = () =>{
    navigate('/loginpage');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="data:image/png;base64,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" alt="" width="35" height="30" />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link to="/" className="nav-link active">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/men">Men</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/women">Women</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/jewelery">jewelery</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/electronics">electronics</Link></li>
              {/* <li className="nav-item"><Link className="nav-link" to="/living">Living</Link></li> */}
              
            </ul>

            <form
  onSubmit={handleClickSearch}
  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5rem' }}
>
  <input
    className="form-control"
    type="search"
    placeholder="Search by category"
    aria-label="Search"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <button className="btn btn-outline-success" type="submit">
    Search
  </button>
</form>

            
            <div>  </div>
            <button 
  type="button" className="btn btn-secondary" onClick={handleClickLogin} style={{ margin: 20 }}> Login</button>
              <div>  <Link className="fas fa-shopping-bag" to="/cart" style={{ paddingRight: 10 }}></Link> </div>
                <Link className="far fa-heart" to="/wishlist" style={{ paddingLeft: 10 ,color:"red"}}></Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;

