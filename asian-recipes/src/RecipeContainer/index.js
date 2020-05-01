import React from "react";
import RecipeList from "../RecipeList";
import NewRecipeForm from "../NewRecipeForm";
import EditRecipeModal from "../EditRecipeModal";
import Header from "../Header";

export default class RecipeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      idOfRecipeToEdit: -1
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

  editRecipe = idOfRecipeToEdit => {
    this.setState({
      idOfRecipeToEdit: idOfRecipeToEdit
    });
  };

  updateRecipe = async updatedRecipeInfo => {
    try {
      const url =
        process.env.REACT_APP_API_URL +
        "/api/v1/recipes/" +
        this.state.idOfRecipeToEdit;

      const updatedRecipeResponse = await fetch(url, {
        credentials: "include",
        method: "PUT",
        body: JSON.stringify(updatedRecipeInfo),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const updatedRecipeJson = await updatedRecipeResponse.json();

      if (updatedRecipeResponse.status === 200) {
        const recipes = this.state.recipes;
        const indexOfRecipeBeingUpdated = recipes.findIndex(
          recipe => recipe.id === this.state.idOfRecipeToEdit
        );

        recipes[indexOfRecipeBeingUpdated] = updatedRecipeJson.data;

        this.setState({
          recipes: recipes,
          idOfRecipeToEdit: -1
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  closeModal = () => {
    this.setState({
      idOfRecipeToEdit: -1
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <NewRecipeForm createRecipe={this.createRecipe} />

        <RecipeList
          recipes={this.state.recipes}
          deleteRecipe={this.deleteRecipe}
          editRecipe={this.editRecipe}
        />

        {this.state.idOfRecipeToEdit !== -1 && (
          <EditRecipeModal
            key={this.state.idOfRecipeToEdit}
            recipeToEdit={this.state.recipes.find(
              recipe => recipe.id === this.state.idOfRecipeToEdit
            )}
            updateRecipe={this.updateRecipe}
            closeModal={this.closeModal}
          />
        )}
      </React.Fragment>
    );
  }
}
