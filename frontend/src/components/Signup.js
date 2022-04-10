import React, { useState } from "react";
import logo from "../../src/images/logo5.jpg";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/userAction";

const Signup = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, userName, password };
    // console.log(user);
    dispatch(registerUser(user));
    history.push("/login");
  };
  return (
    <div>
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
            marginTop: "9%",
          }}
        >
          <div>
            <h2 style={{ color: "#2b6194" }}>Signup</h2>
            <br />
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputName">Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputusername">UserName </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter username"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword">Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>

              <button
                type="submit"
                class="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
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
    </div>
  );
};

export default Signup;
