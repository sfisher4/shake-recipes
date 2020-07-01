import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { IRecipe } from '../models/IRecipe';
import { AddEditRecipe } from './AddEditRecipe';
import { ViewRecipe } from './ViewRecipe';
import { BrowseRecipes } from './BrowseRecipes';
import { NavBar } from '../components/NavBar';
import { withAuthenticator } from '@aws-amplify/ui-react';

const App = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  const addRecipe = (recipe: IRecipe) => {
    setRecipes(
      recipes.concat({
        ...recipe,
      })
    );
  };

  // Logging the recipes for easy debugging for now
  console.log(recipes);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/recipe/add">
          <AddEditRecipe onSubmit={addRecipe} />{' '}
        </Route>
        <Route path="/recipes">
          <BrowseRecipes recipes={recipes} />{' '}
        </Route>
        <Route path={`/recipe/:recipeId`}>
          <ViewRecipe recipes={recipes} />
        </Route>
        <Redirect from="/" to="recipe/add" />
      </Switch>
    </Router>
  );
};

export default withAuthenticator(App);
