import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./components/HomePage/Home";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
