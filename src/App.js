import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./components/HomePage/Home";


function App() {

  const [activeClass, setActiveClass] = useState(true);

  const liftData = data => {
    if (data) {
      setActiveClass(!activeClass)
    }
  }

  return (
    <Router>
      <Navbar liftData={liftData} activeClass={activeClass} />
      <Switch>
        <Route path='/'>
          <Home activeClass={activeClass} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
