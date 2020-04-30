import React from "react";
import { Card, Button } from "semantic-ui-react";

export default function RecipeList(props) {
  console.log(props.recipes);
  const recipes = props.recipes.map(recipe => {
    return (
      <Card key={recipe.id}>
        <Card.Content textAlign={"center"}>
          <Card.Header>{recipe.name}</Card.Header>
          <Card.Meta>Origin Country: {recipe.origin}</Card.Meta>
          <Card.Description>
            <div>Ingredients: {recipe.ingredients}</div>
            <div>Instructions: {recipe.instructions}</div>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  });

  return <Card.Group centered={true}>{recipes}</Card.Group>;
}
