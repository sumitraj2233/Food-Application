import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewOrder = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const token = localStorage.getItem("token");
    try {
      const data = await axios.get("http://localhost:5000/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setItems(data.data.data.items);
      setName(data.data.data.name);
    } catch {
      window.alert("login first");
    }
  };
  return (
    <div>
      <h4 style={{ color: "#2b6194" }}>Orders</h4>
      <div>
        {items?.map((item) => {
          return (
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                {item.items?.map((p) => {
                  return (
                    <div>
                      <p>{p.name}</p>
                      <p>{p.description}</p>
                    </div>
                  );
                })}
                <h5 class="card-title">{item.price}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{item.item}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewOrder;
