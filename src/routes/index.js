import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./../Pages/Home";
import ViewPokemon from "./../Pages/ViewPokemon/index";
import Header from "./../components/Header/index";
import Pokedex from "./../Pages/Pokedex/index";

const Routes = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path={"/"} component={Home} exact />
        <Route path={"/pokedex/:name"} component={ViewPokemon} />
        <Route path={"/pokedex"} component={Pokedex} />
      </Switch>
    </div>
  );
};

export default Routes;
