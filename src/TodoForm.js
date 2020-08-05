import React from "react";
import ReactDOM from "react-dom";
class TodoForm extends React.Component {
  state = {
    inputValue: "",
  };
  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputValue === "") return;
    this.props.onFormSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render = () => {
    return (
      <div className="row d-flex">
          <div className="form-group col-12">
            <input
              type="text"
              className="form-control"
              value={this.state.inputValue}
              onChange={this.handleChange}
              placeholder="input here.."
            />
            <button
              className="btn btn-primary col-12"
              onClick={this.handleSubmit}
            >
              Add 
            </button>
          </div>
        </div>
    );
  };
}

/* function TodoForm() {
    return (
      <div className="form-group">
        <input type="text" className="form-control"/>
        <button className="btn btn-primary btn-block" onClick={getInput}>Add</button>
      </div>
    );
  }*/
export default TodoForm;
