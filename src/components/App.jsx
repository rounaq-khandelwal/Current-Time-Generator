import React from "react";

function App() {
  setInterval(getTime, 1000);
  const [currTime, setTime] = React.useState(new Date().toLocaleTimeString());
  function getTime() {
    setTime(new Date().toLocaleTimeString());
  }
  return (
    <div className="container">
      <h1>Current Time</h1>
      <h1>{currTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
