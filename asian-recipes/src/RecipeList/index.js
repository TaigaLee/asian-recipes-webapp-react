import React from "react";
import { Button, Icon, Image, Item, Label } from "semantic-ui-react";

export default function RecipeList(props) {
  const recipes = props.recipes.map(recipe => {
    return (
      <Item key={recipe.id}>
        <Item.Content textAlign={"center"}>
          <Item.Header>{recipe.name}</Item.Header>
          <Item.Meta>
            <div>Origin Country: {recipe.origin}</div>
            <div>Posted by: {recipe.poster.username}</div>
          </Item.Meta>
          <Item.Description>
            <div>Ingredients: {recipe.ingredients}</div>
            <div>Instructions: {recipe.instructions}</div>
          </Item.Description>
        </Item.Content>
        <Button
          basic
          color="green"
          style={{ width: "20%", height: "10%", marginTop: "30px" }}
          onClick={() => props.editRecipe(recipe.id)}
        >
          Edit {recipe.name}
        </Button>
        <Button
          style={{ width: "20%", height: "10%", marginTop: "30px" }}
          basic
          color="red"
          onClick={() => props.deleteRecipe(recipe.id)}
        >
          Delete Recipe
        </Button>
      </Item>
    );
  });

  return (
    <Item.Group divided style={{ width: "50%", margin: "20px auto" }}>
      {recipes}
    </Item.Group>
  );
}
