import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Checkout = () => {
  const cart = useSelector((state) => state.product.cart);
  const [name, setName] = useState("");
  const [customer, setCustomer] = useState("");
  const [totalItems, setTotalItems] = useState(0);
  const history = useHistory();
  useEffect(() => {
    let items = 0;

    cart.forEach((item) => {
      items += item.qty;
    });

    setTotalItems(items);
  }, [cart, totalItems, setTotalItems]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios.post(
      "http://localhost:5000/customer",
      {
        name: name,
        orders: totalItems,
        customer: customer,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    history.push("/order");
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      <form>
        <h3>Order details</h3>
        <br />
        <label className="sr-only" for="inlineFormInputName2">
          Required
        </label>
        <input
          type="text"
          required="required"
          className="form-control mb-2 mr-sm-2"
          id="inlineFormInputName2"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <label className="sr-only" for="inlineFormInputGroupUsername2">
          Orders
        </label>
        <div className="input-group mb-2 mr-sm-2">
          <div className="input-group-prepend"></div>
          <input
            type="text"
            className="form-control"
            id="inlineFormInputGroupUsername2"
            value={totalItems}
            autoComplete="off"
          />
        </div>
        <div className="input-group mb-2 mr-sm-2">
          <select
            className="custom-select custom-select-sm"
            onChange={(e) => setCustomer(e.target.value)}
          >
            <option selected>Customer Type</option>
            <option value="Free">Free</option>
            <option value="Premium">Premium</option>
          </select>
        </div>

        <button className="btn btn-primary" onClick={handleSubmit}>
          Place order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
