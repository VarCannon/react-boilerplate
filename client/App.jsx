import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }



  render() {
    return (
      <div>
        <h1>React Engaged</h1>
        {/* {<AddToDo />}
        {<ToDoList todos={this.state.todos} />} */}
      </div>
    );
  }
}

export default App;