import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  useEffect(() => {
    if (localStorage.getItem("token") === null || !currentUser?.user.isAdmin) {
      window.location.href = "/";
    }
  });
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
        <Link to="/createResturan">Create resturant</Link>
        <br />
        <Link to="/viewResturant">View Resturant </Link>
        <br />
        <Link to="/viewOrder">View orders </Link>
        <br />
      </div>
    </div>
  );
};

export default AdminHome;
