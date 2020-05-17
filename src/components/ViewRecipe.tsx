import React, { FC } from 'react';

import { IRecipe } from '../models/IRecipe';
import { parseIngredients, parseInstructions } from '../utilities/RecipeParser';

export interface ViewRecipeProps {
  recipe: IRecipe;
  onEdit?: () => void;
}

export const ViewRecipe: FC<ViewRecipeProps> = ({ recipe, onEdit }) => {
  return (
    <>
      <div>
        <label htmlFor="title-value">Title: </label>
        <span id="title-value">{recipe.title}</span>
      </div>
      <div>
        <label htmlFor="ingredients-value">Ingredients: </label>
        <ul id="ingredients-value">
          {parseIngredients(recipe.ingredients).map((ingredient, idx) => (
            <li key={idx.toString()}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <label htmlFor="instructions-value">Instructions: </label>
        <ol id="instructions-value">
          {parseInstructions(recipe.instructions).map((instruction, idx) => (
            <li key={idx.toString()}>{instruction}</li>
          ))}
        </ol>
      </div>
      <button onClick={onEdit}>Edit</button>
    </>
  );
};
