import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
class App extends React.Component {
  //items = ["Watch a movie", "running in morning", "Don't Sleep"];
  state = {
    /* items: ["Watch a movie", "running in morning", "Don't Sleep"], */
    items:[]
  };
  componentDidMount = () => {
    //ajax
    fetch("https://todo-backend-mongodb.herokuapp.com/list")
      .then((response) => response.json())
      .then((data) =>{
       // console.log(data.data);
        this.setState({
          items: data.data,
        })
        console.log(data.tasks.data);
      } 
      )
      .catch((err) => {
        console.log(err);
      });
  };

  handleSubmit = (task) => {
    /*     this.setState({ items: [...this.state.items, task] }); */
    // const id = Math.floor(Math.random() * 100) + 1;
    const data = { items: task };
    fetch("https://todo-backend-mongodb.herokuapp.com/", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        this.setState({ items: [...this.state.items, data] });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  handleDelete = (val,id) => {
    /* console.log(val);
    console.log(id);  */
    fetch("https://todo-backend-mongodb.herokuapp.com" + "/" + id, {
      method: "delete",
    })
      .then((response) => response.json())
      .then(() => {
        console.log("message:Success");
        this.setState({ items: val });
      });
  };
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            My Todo App
          </a>
        </nav>
        <TodoForm onFormSubmit={this.handleSubmit} />
        <TodoList tasks={this.state.items} onDelete={this.handleDelete} />
      </div>
    );
  }
}

/* function App() {
  return (
    <div>
      {/* <h1>My Todo App</h1>
            <div>
                <input type="text"/>
                <button>Add</button>
            </div>
            <ul>
                <li>Watch a movie</li>
                <li>running in morning</li>
            </ul> 

      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          My Todo App
        </a>
      </nav>
      <TodoForm />
      <TodoList />
    </div>
  );
} */
/* function TodoForm() {
  return (
    <div className="form-group">
      <input type="text" className="form-control"/>
      <button className="btn btn-primary btn-block">Add</button>
    </div>
  );
} */
/* function TodoList() {
  return (
    <ul className="list-group">
      <li className="list-group-item">Watch a movie</li>
      <li className="list-group-item">running in morning</li>
    </ul>
  );
} */

export default App;
