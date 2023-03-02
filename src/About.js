import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const goToContact = () => {
    navigate("/contact");
  };
  return (
    <>
      <h1>About Page </h1>
      <button onClick={() => goToContact()}> GO to contact Page</button>
    </>
  );
};

export default About;
