import React from "react";
import {
  Form,
  Button,
  Label,
  Modal,
  Header,
  TextArea
} from "semantic-ui-react";

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

    this.props.changeStateWhenAddingRecipe();
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <Modal
          open={true}
          closeIcon={true}
          onClose={this.props.changeStateWhenAddingRecipe}
        >
          <Header
            style={{
              color: "#6e9a42",
              textAlign: "center",
              fontFamily: "Bungee",
              fontSize: "30px"
            }}
          >
            Add New Recipe!
          </Header>
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <Label color="red">Name</Label>
              <Form.Input
                type="text"
                placeholder="Recipe name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />

              <Label color="red">Origin</Label>
              <Form.Input
                type="text"
                name="origin"
                placeholder="Origin Country of Recipe"
                value={this.state.origin}
                onChange={this.handleChange}
              />

              <Label color="red">Ingredients</Label>
              <TextArea
                name="ingredients"
                placeholder="Ingredients"
                value={this.state.ingredients}
                onChange={this.handleChange}
              />

              <Label color="red" style={{ marginTop: "10px" }}>
                Instructions
              </Label>
              <TextArea
                name="instructions"
                placeholder="Instructions"
                value={this.state.instructions}
                onChange={this.handleChange}
              />
              <Modal.Actions>
                <Button style={{ marginTop: "15px" }} color="red" type="Submit">
                  Add Recipe
                </Button>
              </Modal.Actions>
            </Form>
          </Modal.Content>
        </Modal>
        }
      </React.Fragment>
    );
  }
}
