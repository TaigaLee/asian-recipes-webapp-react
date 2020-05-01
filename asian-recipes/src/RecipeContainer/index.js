import React from "react";
import RecipeList from "../RecipeList";

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

  render() {
    return (
      <React.Fragment>
        <h1>Recipe container</h1>
        <RecipeList
          recipes={this.state.recipes}
          deleteRecipe={this.deleteRecipe}
        />
      </React.Fragment>
    );
  }
}
