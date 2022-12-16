import React from 'react';
import Logo from '../images/osu_cart.png';
import { mdiCartOutline } from '@mdi/js';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';

import './header.scss';



function Header({cart}) {
  let totalQuantity =0;
  if(cart!==undefined && cart.length!==0)
  [].some.call(cart.products,(e,i)=>{totalQuantity= parseInt(totalQuantity) + parseInt((e.item.quantity!==undefined ? e.item.quantity: 0))});

  return (
    <header className="header">
      <div className="header__container">
      <Link to="/" className="logo"><img className="logo__img" alt="OSU Pharma" src={Logo} /><span className="logo__country">.com</span></Link>
      <Link className="AboutUs" to='/AboutUs'><span>About Us</span></Link>
      <Link to='/ContactUs'><span>Contact Us</span></Link>
      <Link className="AboutUs" to='/login'><span>Start Shopping</span></Link>
      <Link to="/purchase/paymentEntry" className="h-cart">
      <Icon path={mdiCartOutline} size={1.4} />
      <div className="h-cart__count">{totalQuantity}</div>
      </Link>
      
      </div>
      
    </header>
  );
}

export default Header;
