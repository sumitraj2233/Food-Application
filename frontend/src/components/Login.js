import React, { useState, useEffect } from "react";
import logo from "../../src/images/logo5.jpg";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userAction";
import { useSelector } from "react-redux";

const Login = () => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { error } = userState;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { userName, password };
    dispatch(loginUser(user));
    if (error) {
      // window.alert("Invalid credentials");
      console.log(error.message);
    }
  };
  return (
    <>
      <section>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexwrap: "wrap",
            alignContent: "stretch",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fcfafa",
            marginTop: "10%",
          }}
        >
          <div>
            <h2 style={{ color: "#2b6194" }}>Login</h2>
            <br />
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputusername">UserName </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your username"
                  onChange={(e) => setUserName(e.target.value)}
                  required="required"
                  value={userName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required="required"
                  value={password}
                />
              </div>

              <div>
                {error ? (
                  <h5 style={{ color: "#f00a0a" }}>Invalid credentials</h5>
                ) : (
                  <p></p>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <br />
            </form>
          </div>
          <br />
          <div>
            <img
              src={logo}
              alt="logo"
              style={{
                width: "200px",
                height: "250px",
                objectFit: "fill",
                marginLeft: "30%",
                marginTop: "5%",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
