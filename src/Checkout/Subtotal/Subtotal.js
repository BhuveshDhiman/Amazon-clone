import './Subtotal.css';

import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import { getCartTotal } from '../../reducer';

function Subtotal() {
  const [{ cart }] = useStateValue();
  return (
    <div className='subtotal'>
      {/* Price*/}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox'></input> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={'text'}
        thousandSeparator={true}
        thousandSpacing='2s'
        prefix={'₹'}
      ></CurrencyFormat>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
