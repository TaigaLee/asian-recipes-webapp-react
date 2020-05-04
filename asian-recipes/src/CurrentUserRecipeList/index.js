import React from "react";
import { Button, Icon, Image, Item, Label } from "semantic-ui-react";
import "../index.css";

export default function CurrentUserRecipeList(props) {
  const recipes = props.recipes.map(recipe => {
    return (
      <Item key={recipe.id}>
        <Item.Content>
          <Item.Header>{recipe.name}</Item.Header>
          <Item.Meta>
            <div>Origin Country: {recipe.origin}</div>
            <div>Posted by: You</div>
          </Item.Meta>
          <Item.Description>
            <div>Ingredients: {recipe.ingredients}</div>
            <div>Instructions: {recipe.instructions}</div>
          </Item.Description>
        </Item.Content>
        <Button
          basic
          color="green"
          style={{ width: "15%", height: "10%", marginTop: "30px" }}
          onClick={() => props.editRecipe(recipe.id)}
        >
          Edit
        </Button>
        <Button
          style={{ width: "15%", height: "10%", marginTop: "30px" }}
          basic
          color="red"
          onClick={() => props.deleteRecipe(recipe.id)}
        >
          Delete
        </Button>
      </Item>
    );
  });

  return (
    <React.Fragment>
      <h1 className="CurrentUserH1">Your Posted Recipes!</h1>
      <Item.Group divided style={{ width: "50%", margin: "20px auto" }}>
        {recipes}
      </Item.Group>
    </React.Fragment>
  );
}
