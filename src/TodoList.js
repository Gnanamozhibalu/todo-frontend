import React from "react";
import ReactDOM from "react-dom";
import index from "./index.css";

class TodoList extends React.Component {
  /* 
        constructor(){
        super(props)
        this.items=["Watch a movie"]   
    } */
  //es7
  /*  items=["Watch a movie","running in morning","Don't Sleep"] */

  handleDelete = (id) => {
    let update = this.props.tasks.filter(
      (task) => task._id !== id
    );
    this.props.onDelete(update,id);
  };

  render = () => {
   // console.log(this.props.tasks);
    return (
      <ul className="list-group">
        {this.props.tasks.map((item, index) => {
          return (
            <div key={index} className="d-flex">
              <li className="col-11 list-group-item">{item.items}</li>
              <button
                className="btn btn-danger m-1"
                onClick={() => this.handleDelete(item._id)}
              >
                <i className="fa fa-trash fa-lg" aria-hidden="true"></i>
              </button>
            </div>
          );
        })}
        {/*   <li className="list-group-item">Watch a movie</li>
              <li className="list-group-item">running in morning</li> */}
      </ul>
    );
  };
}
export default TodoList;
/* function TodoList() {
    return (
      <ul className="list-group">
        <li className="list-group-item">Watch a movie</li>
        <li className="list-group-item">running in morning</li>
      </ul>
    );
  }
  export default TodoList; */
