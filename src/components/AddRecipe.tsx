import React, { FC, useState, ChangeEvent } from 'react';

import {IRecipe} from '../models/IRecipe'

export interface AddRecipeProps {
  recipe: IRecipe;
}

export interface RecipeFormState {
  title: string;
  ingredients: string;
  instructions: string;
}

type HTMLFormControls = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export const AddRecipe: FC<AddRecipeProps> = (props) => {

  const [ recipeForm, setRecipeForm ] = useState<RecipeFormState> ({
    title: "",
    ingredients: "",
    instructions: "",
  })

  const handleChange = (event: ChangeEvent<HTMLFormControls>) => {
    const value = event.target.value;
    setRecipeForm({
      ...recipeForm,
      [ event.target.name ]: value
    })
  }

  console.log(recipeForm);

  return (
    <>
      <form>
        <div>
          <label htmlFor="title-input">Title: </label>
          <input 
            type="text" 
            id="title-input"
            name="title"
            value={ recipeForm.title } 
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="ingredients-input">Ingredients: </label>
          <textarea 
            id="ingredients-input"
            name="ingredients"
            value={ recipeForm.ingredients } 
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="instructions-input">Instructions: </label>
          <textarea 
            id="instructions-input"
            name="instructions"
            value={ recipeForm.instructions } 
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Add Recipe" 
        />
      </form>
    </>
  )
}
