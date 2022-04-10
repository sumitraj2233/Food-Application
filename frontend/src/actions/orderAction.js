import axios from "axios";

export const placeOrder = (token, totalPrice) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  //   const currentUser = getState().loginUserReducer.currentUser;
  const cartItems = getState().product.cart;
  try {
    const res = await axios.post("/api/orders/placeOrder", {
      token,
      totalPrice,
      //   currentUser,
      cartItems,
    });
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
    window.location.href = "/order";
    console.log(res);
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_ERROR" });
    console.log(error);
  }
};
