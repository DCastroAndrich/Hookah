import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "../layouts/item-list-container/ItemListContainer";
import NavBar from "../components/nav-bar/NavBar";
import ItemDetailContainer from "../layouts/item-detail-container/ItemDetailContainer";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route path="/category/:categoryId" component={ItemListContainer} />
        <Route path="/item/:itemId" component={ItemDetailContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
