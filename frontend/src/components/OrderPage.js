import React from "react";

const OrderPage = () => {
  const token = localStorage.getItem("token");
  return (
    <div>
      {/* <h3 style={{ color: "#2b6194", marginLeft: "42%" }}>Order details</h3> */}
      <br />
      <br />
      {token ? (
        <ul className="list-group">
          <h1 style={{ marginLeft: "33%", marginTop: "10%", color: "#2b6194" }}>
            Thank you for your order
          </h1>
        </ul>
      ) : (
        <h3>Login first</h3>
      )}
    </div>
  );
};

export default OrderPage;
