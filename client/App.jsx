import React from ('react');
import ReactDOM from ('react-dom');
import axios from ('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }



  render() {
    return 
      (
        <div>
          {<AddToDo />}
          {<ToDoList todos={this.state.todos} />}
        </div>
      )
  }
}