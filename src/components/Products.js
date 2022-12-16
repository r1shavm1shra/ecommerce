import React, { useCallback, useEffect, useState } from 'react';

import productsApi from '../api/products';
import Loader from '../common/Loader';
import Error from '../common/Error';
import ProductCard from './ProductCard';
import './Products.scss';
import { useNavigate} from 'react-router-dom';

function Products({cart,setCart}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    let cartProduct = (products.filter(e=>e.item.quantity>0));
    cart = {products: cartProduct};
    setCart(cart);
    let state = {cart: cart};
    navigate('/purchase/paymentEntry',  {state: state});
  } 
  const loadProducts = useCallback(async () => {
    if (loading || products.length > 0) return;

    setLoading(true);
    setError(null);

    try {
      const json = await productsApi.getList();
      if(cart.length!=0)
      {
        cart.products.forEach(product => {
          json[product.id-"1"].item.quantity = product.item.quantity
        });
      }
      setProducts(json);
    } catch (_error) {
      setError(_error);
    }
    setLoading(false);
  }, [loading, products]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  if (loading) {
    return <Loader size={50} />;
  } else if (error) {
    return <Error message="Failed to load products" actionFn={loadProducts} />;
  } else {
    return (
      <div>
        <div>
          <h1>Purchase Page</h1>
        </div>
        <div className='home'>
            <div className='home__section'>
              <div className="row product">
                {products.map((product) => (
                  <ProductCard key={product.id} products={products} id={product.id} isPurchase={true} cart={cart} setCart={setCart}/>
                ))}
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Products;
