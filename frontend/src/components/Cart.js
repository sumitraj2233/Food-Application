import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";
import Payment from "./Payment";

const Cart = () => {
  const history = useHistory();
  const cart = useSelector((state) => state.product.cart);
  const token = localStorage.getItem("token");

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    await axios.post(
      "http://localhost:5000/cart",
      {
        price: totalPrice,
        item: totalItems,
        items: cart[0],
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setTotalItems(0);
    setTotalPrice(0);
    console.log(totalItems);
    history.push("/checkout");
  };
  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
  return (
    <>
      {token ? (
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            {cart?.map((item) => {
              return (
                <div key={item.id}>
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <img class="card-img-top" src={item.image} alt="image" />
                      <h5 className="card-title">{item.title}</h5>
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}</p>
                      <h5 className="card-title">
                        <span>$ </span>
                        {item.price}
                      </h5>
                      <p className="card-text">
                        <span>Quantity </span>
                        {item.qty}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                <h3>Cart summary</h3>
                <h4>
                  Total items <span class="card-title">{totalItems}</span>
                </h4>

                <h6>
                  <span>$</span>
                  {totalPrice}
                </h6>
                {/* <Link to="/checkout"> */}
                {/* <button className="btn btn-primary" onClick={handleSubmit}>
                    Proceed to checkout
                  </button> */}
                <Payment totalPrice={totalPrice} />
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h4 style={{ marginleft: "40%", color: "#2b6194" }}>Login first</h4>
      )}
    </>
  );
};

export default Cart;
