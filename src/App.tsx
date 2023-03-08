import React from "react";
import { LoggedIn } from "./components/state/loggedIn";
import { User } from "./components/state/user";
import { Counter } from "./components/state/counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/box";
import "./App.css";
import "./components/basics/style.css"
import { Restaurant } from "./components/basics/restaurant";
function App() {
  return (
    <div className="App">
      {/* <LoggedIn></LoggedIn>
      <User></User>
      <Counter></Counter> */}
      <ThemeContextProvider>
        <Box></Box>
      </ThemeContextProvider>
      <Restaurant></Restaurant>      
    </div>
  );
}

export default App;
