import React from "react";
import { LoggedIn } from "./components/state/loggedIn";
import { User } from "./components/state/user";
import { Counter } from "./components/state/counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/box";
import "./App.css";

import { Restaurant } from "./components/basics/restaurant";
import { UseState } from "./components/hooks/useState";
import { UseEffect } from "./components/hooks/useEffect";
import { UseReducer } from "./components/hooks/useReducer";
function App() {
  return (
    <div className="App">
      {/* <LoggedIn></LoggedIn>
      <User></User>
      <Counter></Counter> */}
      {/* <UseState></UseState> */}
      {/* <UseEffect></UseEffect> */}
      <UseReducer/>
      {/* <ThemeContextProvider>
        <Box></Box>
      </ThemeContextProvider> */}
      {/* <Restaurant></Restaurant> */}
    </div>
  );
}

export default App;
