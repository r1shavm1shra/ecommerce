import React from 'react';
import Logo from '../images/osu_cart.png';
import { Link } from 'react-router-dom';
import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <Link align="center" to="/terms" className="tnc">Terms of Use</Link>
    </footer>
  );
}

export default Footer;
