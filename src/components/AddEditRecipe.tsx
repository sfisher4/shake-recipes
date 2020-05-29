import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { IRecipe } from '../models/IRecipe';

export interface AddEditRecipeProps {
  onSubmit?: (Recipe: IRecipe) => void;
}

export interface RecipeFormState {
  title: string;
  ingredients: string;
  instructions: string;
}

type HTMLFormControls = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export const AddEditRecipe: FC<AddEditRecipeProps> = ({ onSubmit }) => {
  const [recipeForm, setRecipeForm] = useState<RecipeFormState>({
    title: '',
    ingredients: '',
    instructions: '',
  });

  const handleChange = (event: ChangeEvent<HTMLFormControls>) => {
    const value = event.target.value;
    setRecipeForm({
      ...recipeForm,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    setRecipeForm({
      title: '',
      ingredients: '',
      instructions: '',
    });

    if (onSubmit) {
      onSubmit({
        id: uuidv4(),
        title: recipeForm.title,
        ingredients: recipeForm.ingredients,
        instructions: recipeForm.instructions,
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title-input">Title: </label>
          <input type="text" id="title-input" name="title" value={recipeForm.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="ingredients-input">Ingredients: </label>
          <textarea id="ingredients-input" name="ingredients" value={recipeForm.ingredients} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="instructions-input">Instructions: </label>
          <textarea id="instructions-input" name="instructions" value={recipeForm.instructions} onChange={handleChange} />
        </div>
        <input type="submit" value="Add Recipe" />
      </form>
    </>
  );
};
