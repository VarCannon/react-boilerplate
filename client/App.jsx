import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AddToDo from './AddToDo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  handleKeyPress(event) {
    if(event.key === 'Enter'){
      console.log('event -->', event, 'event.target.value -->',event.target.value)
    }
  }



  render() {
    return (
      <div>
        <h1>React Engaged</h1>
        {<AddToDo handleKeyPress={this.handleKeyPress.bind(this)}/>}
        {/* {<ToDoList todos={this.state.todos} />} */}
      </div>
    );
  }
}

export default App;