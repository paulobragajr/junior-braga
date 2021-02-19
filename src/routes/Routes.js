import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Curriculo from "../pages/curriculo/Curriculo";
import Profile from "../pages/profile/Profile";

function Routes() {
  return (
    <BrowserRouter basename="/junior-braga">
      <Switch>
        <Route exact path="/" component={Profile} />{" "}
        <Route exact path="/curriculo" component={Curriculo} />{" "}
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
