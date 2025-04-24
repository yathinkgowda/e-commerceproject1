const initialState = {
  cartItems: [],
  cartCounter: 0,
  totalPrice: 0,
  deliveryCharges: 50,
  taxes: 0,
  grandTotal: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      let newCartItems;

      if (existingItemIndex !== -1) {
        newCartItems = state.cartItems.map((item, index) => {
          if (index === existingItemIndex) {
            const newQty = item.quantity + 1;
            return { ...item, quantity: newQty, total_item_price: newQty * item.price };
          }
          return item;
        });
      } else {
        newCartItems = [...state.cartItems, { ...action.payload, quantity: 1, total_item_price: action.payload.price }];
      }

      const updatedTotalPrice = state.totalPrice + action.payload.price;
      const updatedTaxes = updatedTotalPrice * 0.18;

      return {
        ...state,
        cartItems: newCartItems,
        cartCounter: state.cartCounter + 1,
        totalPrice: updatedTotalPrice,
        taxes: updatedTaxes,
        grandTotal: updatedTotalPrice + state.deliveryCharges + updatedTaxes,
      };

    case 'REMOVE_FROM_CART':
      const itemToRemove = state.cartItems.find(item => item.id === action.payload.id);
      const filteredCartItems = state.cartItems.filter(item => item.id !== action.payload.id);

      if (!itemToRemove) return state;

      const priceAfterRemove = state.totalPrice - itemToRemove.price * itemToRemove.quantity;
      const newTax = priceAfterRemove * 0.18;

      return {
        ...state,
        cartItems: filteredCartItems,
        cartCounter: state.cartCounter - itemToRemove.quantity,
        totalPrice: priceAfterRemove,
        taxes: newTax,
        grandTotal: priceAfterRemove + state.deliveryCharges + newTax,
      };

    default:
      return state;
  }
};

export default cartReducer;
