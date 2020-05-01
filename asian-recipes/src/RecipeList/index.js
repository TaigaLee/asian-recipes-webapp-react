import React from "react";
import { Card, Button } from "semantic-ui-react";

export default function RecipeList(props) {
  console.log(props.recipes);
  const recipes = props.recipes.map(recipe => {
    return (
      <Card key={recipe.id}>
        <Card.Content textAlign={"center"}>
          <Card.Header>{recipe.name}</Card.Header>
          <Card.Meta>
            <div>Origin Country: {recipe.origin}</div>
            <div>Posted by: {recipe.poster.username}</div>
          </Card.Meta>
          <Card.Description>
            <div>Ingredients: {recipe.ingredients}</div>
            <div>Instructions: {recipe.instructions}</div>
          </Card.Description>
        </Card.Content>
        <Button basic color="green" onClick={() => props.editRecipe(recipe.id)}>
          Edit {recipe.name}
        </Button>
        <Button basic color="red" onClick={() => props.deleteRecipe(recipe.id)}>
          Delete Recipe
        </Button>
      </Card>
    );
  });

  return <Card.Group centered={true}>{recipes}</Card.Group>;
}
