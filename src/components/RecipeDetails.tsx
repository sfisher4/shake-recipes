import React, { FC, useState } from 'react';

import { IRecipe } from '../models/IRecipe';
import { AddRecipe } from './AddRecipe';
import { ViewRecipe } from './ViewRecipe';

export interface RecipeDetailsProps {
  recipe: IRecipe;
}

export const RecipeDetails: FC<RecipeDetailsProps> = (props) => {
  const [isAdding, setIsAdding] = useState(true);
  const [recipe, setRecipe] = useState(props.recipe);

  const addRecipe = (newRecipe: IRecipe) => {
    setIsAdding(false);
    setRecipe(newRecipe);
  };

  const editRecipe = () => {
    setIsAdding(true);
  };

  return isAdding ? <AddRecipe recipe={recipe} onSubmit={addRecipe} /> : <ViewRecipe recipe={recipe} onEdit={editRecipe} />;
};
