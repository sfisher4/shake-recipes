import React, { FC } from 'react';

import { IRecipe } from '../models/IRecipe';

export interface BrowseRecipesProps {
  recipes: IRecipe[];
}

export const BrowseRecipes: FC<BrowseRecipesProps> = ({ recipes }) => {
  console.log(recipes);

  const recipeTitles = recipes.map((recipe) => recipe.title);

  return (
    <div className="Browse">
      <label htmlFor="title-values">Recipes: </label>
      {/* TODO: make these links of some sort */}
      <span id="title-values">{recipeTitles.join(', ')}</span>
    </div>
  );
};
