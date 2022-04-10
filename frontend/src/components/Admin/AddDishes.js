import axios from "axios";
import React, { useState } from "react";

const AddDishes = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [offer, setOffer] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios.post(
      "http://localhost:5000/dish",
      {
        name,
        description,
        price,
        offer,
        image,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setName("");
    setDescription("");
    setPrice("");
    setOffer("");
    setImage("");
    window.alert("dish added");
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
      <div>
        <h1>Add dishes</h1>
        <br />
        <br />
        <form>
          <div class="form-group">
            <input
              class="form-control"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div class="form-group">
            <input
              class="form-control"
              placeholder="Enter Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div class="form-group">
            <input
              class="form-control"
              placeholder="Enter Price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>
          <div class="form-group">
            <input
              class="form-control"
              placeholder="Enter Offer"
              onChange={(e) => setOffer(e.target.value)}
              value={offer}
            />
          </div>
          <div class="form-group">
            <input
              class="form-control"
              placeholder="Enter Image url"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
          </div>

          <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDishes;
