import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  localStorage.removeItem("token");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexwrap: "wrap",
        alignContent: "stretch",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fcfafa",
      }}
    >
      <div>
        <h1 style={{ color: "#2b6194" }}>Go to login page</h1>

        <Link to="/login">
          <button type="submit" className="btn btn-primary">
            login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Logout;
