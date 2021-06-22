import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AgeContext } from "../context/AgeContext";
const SecondComponent = () => {
  const ageContext = useContext(AgeContext);

  const [name, setName] = useState("");
  const [bookName, setBookName] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (name !== "") {
      ageContext.setDummyObject({
        ...ageContext.dummyObject,
        name: name,
      });
      setName("");
    }
  };

  const handleBookChange = (e) => {
    e.preventDefault();
    if (bookName !== "") {
      ageContext.setDummyObject({
        ...ageContext.dummyObject,
        readedBook: {
          ...ageContext.dummyObject.readedBook,
          english: {
            bookName,
          },
        },
      });
      setBookName("");
    }
  };

  return (
    <div>
      <h1> Second Component </h1>
      <div>
        <h3> AGE(State) =&gt; {ageContext.myAge} </h3>
        <h3>{ageContext.dummyObject["name"]}</h3>
        <h3>
          Name(Object) =&gt;
          {JSON.stringify(ageContext.dummyObject, null, 2)}
        </h3>
        <button onClick={() => ageContext.setAge()}>Hit ME!!!!!!</button>

        <h3>Enter a Name Which you want to change</h3>

        <form>
          <input
            placeholder="enter name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <input type="submit" onClick={(e) => handleSubmitForm(e)} />
        </form>

        <form>
          <input
            placeholder="enter book name"
            type="text"
            onChange={(e) => setBookName(e.target.value)}
          />
          <input type="submit" onClick={(e) => handleBookChange(e)} />
        </form>
        <br />
        <br />

        <button>
          <Link to="/">Back TO Home Page</Link>
        </button>
      </div>
    </div>
  );
};

export default SecondComponent;
