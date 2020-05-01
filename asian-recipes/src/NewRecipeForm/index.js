import React from "react";
import { Form, Button, Label, Modal, Header } from "semantic-ui-react";

export default class NewRecipeForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      origin: "",
      ingredients: "",
      instructions: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createRecipe({
      name: this.state.name,
      origin: this.state.origin,
      ingredients: this.state.ingredients,
      instructions: this.state.instructions
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <Form>
        <Label>Name:</Label>
        <Form.Input
          type="text"
          placeholder="Recipe name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <Label>Origin:</Label>
        <Form.Input
          type="text"
          name="origin"
          placeholder="Origin Country of Recipe"
          value={this.state.origin}
          onChange={this.handleChange}
        />

        <Label>Ingredients:</Label>
        <Form.Input
          type="textarea"
          name="ingredients"
          placeholder="Ingredients"
          value={this.state.ingredients}
          onChange={this.handleChange}
        />

        <Label>Instructions:</Label>
        <Form.Input
          type="textarea"
          name="instructions"
          placeholder="Instructions"
          value={this.state.instructions}
          onChange={this.handleChange}
        />

        <Button onClick={this.handleSubmit} type="Submit">
          Add Recipe
        </Button>
      </Form>
    );
  }
}
