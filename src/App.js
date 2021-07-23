import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import ListingForm from "./components/ListingForm";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/listing">
            <ListingForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
