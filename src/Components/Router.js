import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
import Header from "../Components/Header";

export default () => (
  <Router>
    <>
    <Header/>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/search" exact component={Search} />
      <Route path="/detail" exact component={Detail} />
    </>
  </Router>
);