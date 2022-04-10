import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "C:/Users/sumit/OneDrive/Desktop/FinalAssesment/frontend/src/images/logo3.jpeg";
import { useSelector } from "react-redux";

const Navbar = () => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  const cart = useSelector((state) => state.product.cart);
  const [count, setCount] = useState(0);
  useEffect(() => {
    let count = 0;
    cart.forEach(
      (item) => {
        count += item.qty;
        setCount(count);
      },
      [cart, count]
    );
  });
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="logo"
            style={{ width: "40px", marginLeft: "30px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            {currentUser ? (
              <li className="nav-item">
                <Link className="nav-link">{currentUser.user.name}</Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
              </>
            )}

            {/* {currentUser ? (
              <li className="nav-item">
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
            ) : (
              <li></li>
            )} */}
            <Link className="nav-link" to="/logout">
              Logout
            </Link>

            <li className="nav-item">
              <Link className="nav-link" to="/adminHome">
                Admin
              </Link>
            </li>
            <li className="nav-bar">
              <Link to="/cart">
                <div className="nav-bag">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-handbag-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
                  </svg>
                  <span className="bag-quantity">
                    <span>{count}</span>
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
