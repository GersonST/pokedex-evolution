import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home/index";
import ViewPokemon from "./Pages/ViewPokemon/index";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={"/"} component={Home} exact />
          <Route path={"/:name"} component={ViewPokemon} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
