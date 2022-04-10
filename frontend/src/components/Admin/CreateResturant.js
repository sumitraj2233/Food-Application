import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

const CreateResturant = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [location, setLocation] = useState();
  const [cuisne, setCuisne] = useState("");
  const [opensAt, setOpensAt] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // await fetch("http://localhost:5000/createResturant", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name,
    //     location,
    //     cuisne,
    //     opensAt,
    //   }),
    // });
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "http://localhost:5000/createResturant",
        {
          name,
          location,
          cuisne,
          opensAt,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      history.push("/adminHome");
    } catch {
      window.alert("login first");
    }
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
      <form>
        <h5>Create a resturant </h5>
        <br />
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Cuisne type"
            onChange={(e) => setCuisne(e.target.value)}
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Opens At"
            onChange={(e) => setOpensAt(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateResturant;
