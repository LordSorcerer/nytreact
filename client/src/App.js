import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Main from "./pages/Main";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/search" component={Search} />
        <Route component={Main} />
      </Switch>
    </div>
  </Router>;

export default App;
