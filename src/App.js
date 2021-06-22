import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import FirstComponent from "./component/FirstComponent";
import SecondComponent from "./component/SecondComponent";
import { AgeContext } from "./context/AgeContext";

function App() {
  const [age, setAge] = useState(10);
  const [dummyObject, setDummyObject] = useState({
    name: "shatish",
    address: "surat",
    readedBook: {
      english: {
        bookName: "reach dad poor dad",
      },
      gujarati: {
        bookName: "Agan pankh",
      },
      hindi: {
        bookName: "Wings of fire",
      },
    },
  });
  return (
    <div>
      <AgeContext.Provider
        value={{
          myAge: age,
          setAge: () => setAge(age + 1),
          dummyObject: dummyObject,
          setDummyObject: setDummyObject,
        }}
      >
        <Router>
          <Switch>
            <Route exact path="/" component={FirstComponent} />
            <Route exact path="/second_component" component={SecondComponent} />
          </Switch>
        </Router>
      </AgeContext.Provider>
    </div>
  );
}

export default App;
