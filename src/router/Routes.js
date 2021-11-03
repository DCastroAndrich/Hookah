import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "../layouts/item-list-container/ItemListContainer";
import NavBar from "../components/nav-bar/NavBar";
import ItemDetailContainer from "../layouts/item-detail-container/ItemDetailContainer";
import { CartContext } from "../context/CartContext";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route path="/category/:categoryId" component={ItemListContainer} />
        <Route path="/item/:itemId" component={ItemDetailContainer} />
        <Route path="/cart" component={CartContext} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
