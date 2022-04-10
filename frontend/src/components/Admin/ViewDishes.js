import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewDishes = () => {
  const [views, setViews] = useState([]);

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    try {
      const data = await axios.get("http://localhost:5000/dish", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data.data.data.dishes);
      const res = data.data.data.dishes;

      setViews(res);
    } catch {
      window.alert("login first");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {views?.map((view) => {
        return (
          <div key={view.id} className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <img class="card-img-top" src={view.image} alt="Card image cap" />
              <h5 className="card-title">{view.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {view.description}
              </h6>
              <p className="card-text">{view.price}</p>
              <p className="card-text">{view.offer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ViewDishes;
