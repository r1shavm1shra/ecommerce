// import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './common/header';
import Footer from './common/footer';
import './App.scss';

import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Products from './components/Products';
import Confirmation from './components/Confirmation';
import PaymentEntry from './components/paymentEntry';
import ShippingEntry from './components/shippingEntry';
import ViewOrder from './components/viewOrder';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import TermsOfUse from './components/terms';
import Login from './components/login';





//app component
function App() {
// const [counter, setCounter] = useState(0);
const [cart, setCart] = useState([]);
  return (
    <div className="App"> 
    <Router>
      <Header cart={cart}/>
      <div className='page-container'>
        <Routes>
          <Route  path ="/" element={<Home cart={cart} setCart={setCart}/>} />
          <Route  path ='/purchase' element={<Products cart={cart} setCart={setCart} />} />
          <Route  path ='/purchase/confirmation' element={<Confirmation />} />
          <Route  path ='/purchase/paymentEntry' element={<PaymentEntry cart={cart} setCart={setCart}/>} />
          <Route  path ='/purchase/shippingEntry' element={<ShippingEntry cart={cart} setCart={setCart}/>} />
          <Route  path ='/purchase/viewOrder' element={<ViewOrder cart={cart} setCart={setCart}/>} />
          <Route  path ='/terms' element={<TermsOfUse cart={cart} setCart={setCart}/>} />
          <Route  path ='/AboutUs' element={<AboutUs />} />
          <Route  path ='/ContactUs' element={<ContactUs />} />
          <Route  path ='/Login' element={<Login cart={cart} setCart={setCart}/>} />
        </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
