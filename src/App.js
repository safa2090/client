import React from "react";
import "./App.css";
import PersonCard from "./Components/PersonCard";
function App() {
    return (
      <div className="App">
        <PersonCard firstName="John" lastName="Doe" age={30} hairColor="Brown" />
        <PersonCard firstName="Jane" lastName="Smith" age={25} hairColor="Blonde" />
        <PersonCard firstName="Mike" lastName="Johnson" age={40} hairColor="Black" />
        <PersonCard firstName="Sarah" lastName="Williams" age={35} hairColor="Red" />
      </div>
    );
  }
  
  export default App;
