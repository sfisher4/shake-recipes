import React, { FC } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import { LinkContainer } from 'react-router-bootstrap';

import { IRecipe } from '../models/IRecipe';

export interface BrowseRecipesProps {
  recipes: IRecipe[];
}

export const BrowseRecipes: FC<BrowseRecipesProps> = ({ recipes }) => {
  return (
    <div className="Browse">
      <label htmlFor="title-values">Recipes: </label>

      <CardDeck>
        {recipes.map((recipe) => (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{recipe.title}</Card.Title>
              <Card.Text>We can insert some print here if we wanted</Card.Text>
              <LinkContainer to={`/recipe/${recipe.id}`}>
                <Button event-key={1}>View Recipe: {recipe.title}</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </div>
  );
};
