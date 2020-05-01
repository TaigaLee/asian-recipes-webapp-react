import React from "react";
import RecipeList from "../RecipeList";
import NewRecipeForm from "../NewRecipeForm";

export default class RecipeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    this.getRecipes();
  }

  getRecipes = async () => {
    const url = process.env.REACT_APP_API_URL + "/api/v1/recipes/";
    try {
      const recipesResponse = await fetch(url, {
        credentials: "include"
      });

      const recipesJson = await recipesResponse.json();

      this.setState({
        recipes: recipesJson.data
      });
    } catch (err) {
      console.error(err);
    }
  };

  deleteRecipe = async idOfRecipeToDelete => {
    try {
      const url =
        process.env.REACT_APP_API_URL + "/api/v1/recipes/" + idOfRecipeToDelete;

      const deleteRecipeResponse = await fetch(url, {
        credentials: "include",
        method: "DELETE"
      });

      if (deleteRecipeResponse.status === 200) {
        this.setState({
          recipes: this.state.recipes.filter(
            recipe => recipe.id !== idOfRecipeToDelete
          )
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  createRecipe = async recipeToAdd => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/recipes/";

      const createdRecipeResponse = await fetch(url, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(recipeToAdd)
      });
      const createdRecipeJson = await createdRecipeResponse.json();

      if (createdRecipeResponse.status === 201) {
        this.setState({
          recipes: [...this.state.recipes, createdRecipeJson.data]
        });
      }
    } catch (err) {
      console.err(err);
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1>Recipe container</h1>
        <NewRecipeForm createRecipe={this.createRecipe} />

        <RecipeList
          recipes={this.state.recipes}
          deleteRecipe={this.deleteRecipe}
        />
      </React.Fragment>
    );
  }
}
