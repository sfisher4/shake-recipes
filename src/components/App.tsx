import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Redirect } from 'react-router-dom';

import { IRecipe } from '../models/IRecipe';
import { AddEditRecipe } from './AddEditRecipe';
// import { ViewRecipe } from './ViewRecipe';
import { BrowseRecipes } from './BrowseRecipes';
import { NavBar } from '../components/NavBar';

export const App = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  const addRecipe = (recipe: IRecipe) => {
    setRecipes(
      recipes.concat({
        id: Math.max(...(recipes.map((c) => c.id) as []), 0) + 1,
        ...recipe,
      })
    );
  };

  // Logging the recipes for easy debugging for now
  console.log(recipes);

  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/add">
          <AddEditRecipe onSubmit={addRecipe} />{' '}
        </Route>
        <Route path="/browse">
          <BrowseRecipes recipes={recipes} />{' '}
        </Route>
        <Redirect from="/" to="/add" />
      </Switch>
    </>
  );
};
