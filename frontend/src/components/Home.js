import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProductAction, addToCart } from "../actions/productAction";
import { useSelector } from "react-redux";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.product.items[0]);

  useEffect(() => {
    fetchData();
  }, []);
  const [dishes, setDishes] = useState([]);
  const [name, setName] = useState("");
  const fetchData = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get("http://localhost:5000/dish", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(res.data.data.name);
      setName(res.data.data.name);
      const data = await res.data.data.dishes;

      setDishes(data);
    } catch {
      window.alert("login first");
    }
  };
  dispatch(addProductAction(dishes));

  return (
    <div>
      <div style={{ marginLeft: "40%" }}>
        <h3 style={{ color: "#2b6194" }}>
          <span>Welcome </span>
          {name}
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {items?.map((item) => {
          return (
            <div key={item.id}>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  {/* <h5 className="card-title">{item.title}</h5> */}
                  <img class="card-img-top" src={item.image} alt="image" />
                  <h5 className="card-title">{item.name}</h5>
                  {/* <h5 className="card-title">{item._id}</h5> */}
                  <p className="card-text">{item.description}</p>
                  <h5 className="card-title">
                    <span>$ </span>
                    {item.price}
                  </h5>
                  <p className="card-text">{item.offer}</p>
                  {/* <img src="url" alt="alternatetext"/> */}
                  <button
                    onClick={(e) => dispatch(addToCart(item._id))}
                    className="btn btn-primary"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
