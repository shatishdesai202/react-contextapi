import React, { useContext } from "react";
import { AgeContext } from "../context/AgeContext";
import { Link } from "react-router-dom";

const FirstComponent = () => {
  const ageContext = useContext(AgeContext);

  return (
    <div>
      <h1> First Component </h1>
      <h3> AGE(State) =&gt; {ageContext.myAge} </h3>
      <h3> Name(Object) =&gt; {ageContext.dummyObject["name"]}</h3>
      <h3> Name(Object) =&gt; {JSON.stringify(ageContext.dummyObject)}</h3>
      <br />
      <button onClick={() => ageContext.setAge()}>Hit ME!!!!!!</button>
      <br />
      <br />
      <br />
      <button>
        <Link to="/second_component">Change Route</Link>{" "}
      </button>
    </div>
  );
};

export default FirstComponent;
