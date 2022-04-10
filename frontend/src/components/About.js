import React from "react";

const About = () => {
  const token = localStorage.getItem("token");
  return (
    <div>
      {token ? (
        <div className="about-section">
          <h1>About Us Page</h1>
          <p>This is a food application.</p>
          <p>You can order your favorite food from different restaurant</p>
        </div>
      ) : (
        <h4 style={{ color: "#2b6194" }}>Login first</h4>
      )}
    </div>
  );
};

export default About;
