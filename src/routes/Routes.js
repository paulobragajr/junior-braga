import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Adav from "../pages/adav/Adav";
import Curriculo from "../pages/curriculo/Curriculo";
import Profile from "../pages/profile/Profile";

function Routes() {
  return (
    <BrowserRouter basename="/junior-braga">
      <Switch>
        <Route exact path="/" component={Adav} />{" "}
        <Route exact path="/curriculo" component={Curriculo} />{" "}
        <Route exact path="/adav" component={Adav} />{" "}
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
