export const initialState = {
  cart: [
    // {
    //   id: 105,
    //   title: 'Samsung S20 Ultra',
    //   price: 97999,
    //   rating: 4,
    //   image: 'https://m.media-amazon.com/images/I/71cD4NUIBWL._AC_UY218_.jpg',
    // },
    // {
    //   id: 105,
    //   title: 'Samsung S20 Ultra',
    //   price: 97999,
    //   rating: 4,
    //   image: 'https://m.media-amazon.com/images/I/71cD4NUIBWL._AC_UY218_.jpg',
    // },
  ],
  user: null,
};
export const getCartTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_CART':
      //  Logic for adding item to the cart
      return { ...state, cart: [...state.cart, action.item] };

    case 'REMOVE_FROM_CART':
      //  Logic for removing item from the cart

      // cloned the cart
      let newCart = [...state.cart];

      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      if (index >= 0) {
        // item exists in the cart, remove it...
        newCart.splice(index, 1);
      } else {
        console.warn('Product $(action.id) is not present');
      }
      return { ...state, cart: newCart };

    default:
      return state;
  }
};

export default reducer;
