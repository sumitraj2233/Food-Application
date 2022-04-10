import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const ViewResturant = () => {
  const history = useHistory();
  const [views, setViews] = useState([]);

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    try {
      const data = await axios.get("http://localhost:5000/getAllResturants", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const res = data.data.results;
      setViews(res);
    } catch {
      window.alert("login first");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const deleteUser = async (id) => {
    const token = localStorage.getItem("token");
    await axios.delete(`http://localhost:5000/deleteResturant/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    history.push("/adminHome");
  };
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
      {views?.map((view) => {
        return (
          <div key={view.id} className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{view.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{view.location}</h6>
              <p className="card-text">{view.cuisne}</p>
              <p className="card-text">{view.opensAt}</p>
              <button
                className="btn btn-primary"
                onClick={() => deleteUser(view._id)}
              >
                delete resturant
              </button>
              <br />
              <br />
              <Link to="/addDishes">
                <button className="btn btn-primary">Add dishes</button>
              </Link>
              <span> </span>
              <Link to="/viewDishes">
                <button className="btn btn-primary">View dishes</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ViewResturant;
