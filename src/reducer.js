export const initialState = {
  cart: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_CART':
      //  Logic for adding item to the cart
      return { ...state, cart: [...state.cart, action.item] };

    case 'REMOVE_FROM_CART':
      //  Logic for removing item from the cart
      return { state };

    default:
      return state;
  }
};

export default reducer;
