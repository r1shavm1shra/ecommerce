import React from 'react';
import classNames from 'classnames';
import './ProductCard.scss';

function calculatePriceDetails(priceDetails) {
  const basePrice = parseInt(priceDetails.value, 10);
  const finalPrice = parseInt(
    (basePrice * (100 - priceDetails.discount)) / 100,
    10,
  );
  return {
    basePrice,
    finalPrice,
    isDiscounted: finalPrice !== basePrice,
  };
}
function ProductCard({ className, products, id, isPurchase, cart, setCart }) {
  let product = products.filter(e=>e.id===id)[0];
  const { finalPrice, basePrice, isDiscounted } = calculatePriceDetails(
    product.item.price,
  );

  return (
    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 product-card-wrapper">
      <div className={classNames('product-card', { [className]: className })}>
        <div className="product-card__title">{product.item.title}</div>
        <div className="product-card__price">
          { (isPurchase) && (
              <span className="product-card__amount">${finalPrice}</span>
          )
          }
          { (!isPurchase) && (
              <span className="product-card__amount">Total: ${finalPrice*product.item.quantity}</span>
          )
          }
          {isDiscounted && isPurchase && (
            <span className="product-card__amount product-card__amount--discount">
            ${basePrice}
          </span>
          )}
        </div>

        <div className="product-card__gallery">
          <img
            className="product-card__image"
            alt={product.item.title}
            src={product.item.images[0]}
          />
        </div>

        <div className="product-card__actions">
          { (isPurchase) && (
          <div><span> Quantity: </span><input min="0" max="5" value={product.item.quantity} type="number" onChange={(e)=>{product.item.quantity=e.target.value;setCart({"products":products.filter(e=>e.item.quantity>0)})}}/></div>
          )
          }
          {!isPurchase && (
          <span className="product-card__amount">Quantity: {product.item.quantity}</span>
          )
          }
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
