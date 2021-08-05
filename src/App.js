import "./App.css";
import React, { useState, useEffect } from "react";

const API = "http://api.icndb.com/jokes/random";

function App() {
  const [joke, setJoke] = useState("");

  const generateJoke = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setJoke(data.value.joke));
  };

  useEffect(() => {
    generateJoke();
  }, []);

  return (
    <div className="App">
      <div className="box">
        <h3>Chuck Norris Facts Generator</h3>
        <p dangerouslySetInnerHTML={{ __html: joke }} />
        <button onClick={generateJoke}>Get a new fact 😂</button>
      </div>
    </div>
  );
}

export default App;
