import React, { FC, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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

  const handleSelect = (index: number) => {
    index === 0 ? setIsAdding(true) : setIsAdding(false);
  };

  return (
    <Tabs selectedIndex={isAdding ? 0 : 1} onSelect={handleSelect}>
      <TabList>
        <Tab>Add Recipe</Tab>
        <Tab>View Recipes</Tab>
      </TabList>
      <TabPanel>
        <AddRecipe recipe={recipe} onSubmit={addRecipe} />
      </TabPanel>
      <TabPanel>
        <ViewRecipe recipe={recipe} onEdit={editRecipe} />
      </TabPanel>
    </Tabs>
  );

};
