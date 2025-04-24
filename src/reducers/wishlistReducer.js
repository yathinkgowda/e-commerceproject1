const initialState = {
  wishlistItems: [],
  wishlistCounter: 0,
  totalPrice: 0,
  deliveryCharges: 50,
  taxes: 0,
  grandTotal: 0,
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      const existingItemIndex = state.wishlistItems.findIndex(item => item.id === action.payload.id);
      let newWishlistItems;

      if (existingItemIndex !== -1) {
        newWishlistItems = state.wishlistItems.map((item, index) => {
          if (index === existingItemIndex) {
            const newQty = item.quantity + 1;
            return { ...item, quantity: newQty, total_item_price: newQty * item.price };
          }
          return item;
        });
      } else {
        newWishlistItems = [...state.wishlistItems, { ...action.payload, quantity: 1, total_item_price: action.payload.price }];
      }

      const updatedTotalPrice = state.totalPrice + action.payload.price;
      const updatedTaxes = updatedTotalPrice * 0.18;

      return {
        ...state,
        wishlistItems: newWishlistItems,
        wishlistCounter: state.wishlistCounter + 1,
        totalPrice: updatedTotalPrice,
        taxes: updatedTaxes,
        grandTotal: updatedTotalPrice + state.deliveryCharges + updatedTaxes,
      };

    case 'REMOVE_FROM_WISHLIST':
      const itemToRemove = state.wishlistItems.find(item => item.id === action.payload.id);
      const filteredWishlistItems = state.wishlistItems.filter(item => item.id !== action.payload.id);

      if (!itemToRemove) return state;

      const priceAfterRemove = state.totalPrice - itemToRemove.price * itemToRemove.quantity;
      const newTax = priceAfterRemove * 0.18;

      return {
        ...state,
        wishlistItems: filteredWishlistItems,
        wishlistCounter: state.wishlistCounter - itemToRemove.quantity,
        totalPrice: priceAfterRemove,
        taxes: newTax,
        grandTotal: priceAfterRemove + state.deliveryCharges + newTax,
      };

    default:
      return state;
  }
};

export default wishlistReducer;
