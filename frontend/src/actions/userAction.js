import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    await axios.post("http://localhost:5000/register", user);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAIL", payload: error });
  }
};
export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUSET" });
  try {
    const response = await axios.post("http://localhost:5000/login", user);
    // console.log(response);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data.data });
    localStorage.setItem("token", response.data.data.token);
    // window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAIL", payload: error });
  }
};
