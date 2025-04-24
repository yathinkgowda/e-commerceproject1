
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import Beauty from './Pages/Beauty'
import Living from './Pages/Living'
import Details from './Pages/Details';
import CartDetails from './Pages/CartDetails';
import PaymentPage from './Pages/PaymentPage';
import  WishList from './Pages/Wishlist';
import Loginpage from "./login/views/login"
import ForgotPassword from './login/views/forgot-password';
import Register from "./login/views/register";

function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/'>
        <Route index element={<Home/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/women' element={<Women/>} />
        <Route path='/jewelery' element={<  Kids/>} />
        <Route path='/electronics' element={<Beauty/>} />
        <Route path='/living' element={<Living/>} />
        <Route path='/Details' element={<Details/>} />
        <Route path="/cart" element={<CartDetails/>} />
         <Route path="/payment" element={<PaymentPage />} />
         <Route path="/WishList" element={<WishList />} />
         <Route path="/loginpage" element={<Loginpage />} />
         <Route path="/forgot-password" element={<ForgotPassword />} />
         <Route path="/register" element={<Register />} />


       </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
