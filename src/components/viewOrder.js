
import React from 'react';
import ProductCard from './ProductCard';
import {  useNavigate} from 'react-router-dom';
import orders from '../api/orders';
const ViewOrder = ({cart,setCart}) => {
    const navigate = useNavigate();
 

    const handleSubmit = async(e) => {
        cart.items = cart.products;
        [].some.call(cart.items, function(e){e.quantity = e.item.quantity;})
        debugger;
        let order = await orders.saveOrder(cart); 
        order.name = cart.shippingDetails.name;
        setCart(undefined);
        navigate('/purchase/confirmation',{state:order});
      } 

    
    let products  = cart.products;
    
    return(
        <>
            <div>
                <h2>Order Summary</h2>
                <h3 >Products</h3>
                <div align="left" className="product">
                {products.map((product) => (
                        <ProductCard key={product.id} products={products} id={product.id} isPurchase={false}/>
                ))}
                
                </div>
                <div align="left" style={{"padding":"2rem", "backgroundColor":"white"}}>
                    <h3 align="center">Shipping Details</h3>
                    <p>
                       <b>Name</b>  {cart.shippingDetails.name}

                    </p>
                    <p>
                    <b>Address 1 </b>{cart.shippingDetails.addressLine1}
                        
                    </p>
                    <p>
                    <b>Address 2 </b>  {cart.shippingDetails.addressLine2}
                        
                    </p>
                    <p>
                    <b>City </b>   {cart.shippingDetails.city}
                        
                    </p>
                    <p>
                    <b>State </b>   {cart.shippingDetails.state+" "}
                    </p>
                    <p>
                    <b>Zip Code </b>   {cart.shippingDetails.zipCode}    
                    </p>
                    <button className="button" onClick={handleSubmit}>Confirm</button>
                </div>
            </div>
        </>
    )
    
}
export default ViewOrder;