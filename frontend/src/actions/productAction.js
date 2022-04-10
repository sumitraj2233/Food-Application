export const addProductAction = (product) => {
  return {
    type: "CREATE_PRODUCT",
    payload: product,
  };
};
export const addToCart = (itemID) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      id: itemID,
    },
  };
};
