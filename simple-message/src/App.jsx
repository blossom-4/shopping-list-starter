import React from 'react';


function App() {
  const [message, setMessage] = React.useState("happy birthday");

  function handleClick(){
    setMessage("lurrveee");
  }

  return (
  <div>
    <h1>hi it me {message}</h1>
    <button onClick={handleClick}>Click Me!</button>
  </div>
);
}
export default App;