import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
