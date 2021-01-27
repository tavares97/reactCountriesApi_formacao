import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./components/Main";
import Planer from "./components/Planer";

import "semantic-ui-css/semantic.min.css";
import "antd/dist/antd.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Main} />
      <Route path="/plan" component={Planer} />
    </Switch>
  </BrowserRouter>,
  document.querySelector("#root")
);
