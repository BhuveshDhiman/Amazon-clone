import React from 'react';
import './Checkout.css';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal/Subtotal';

function Checkout() {
  const [{ cart }] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/unrecPC/Main_header_PC_T2.jpg'
          alt=''
        ></img>
        {cart?.length === 0 ? (
          <div>
            <h2>Your shopping cart is empty!</h2>
            <p>
              You have no items in your shopping cart. To buy please click on
              'Add to cart' next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className='checkout__title'>Your shopping cart</h2>
            {/* List all the products in the shopping cart */}
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              ></CheckoutProduct>
            ))}
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className='checkout__right'>
          <Subtotal></Subtotal>
        </div>
      )}
    </div>
  );
}

export default Checkout;
