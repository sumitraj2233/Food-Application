// import axios from "axios";
// const data = axios.get("http://localhost:5000/products");
const initialState = {
  cart: [],
  items: {},
  isLogin: false,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PRODUCT":
      return {
        ...state,
        items: [action.payload],
      };
    case "ADD_TO_CART":
      const item = state.items[0].find(
        (product) => product._id === action.payload.id
      );
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      // console.log(inCart);

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    default:
      return state;
  }
};
