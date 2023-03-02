import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const data = ["Nishant", "Reddy", "Sahil", "Swayam"];
  const [myName, setMyName] = useState(data);

  const changeName = () => {
    console.log(myName);
    myName.length === 4 ? setMyName(["Nishant", "Redddy"]) : setMyName(data);
  };

  const Temp = () => {
    return myName.map((data) => {
      return <h1>Name : {data}</h1>;
    });
  };

  return (
    <>
      <Temp />
      <button className="btn" onClick={changeName}>
        click here
      </button>
    </>
  );
};

export default App;
