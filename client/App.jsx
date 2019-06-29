import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AddToDo from './AddToDo.jsx';
import ToDoList from './ToDoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      new: 'Add Stuff?',
      todos: []
    }
  }
  componentDidMount(){
    axios.get('/todos')
    .then((res) => {
      console.log(res);
      let a = [];
      for (let i = 0; i < res.data.length; i++){
        a.push(res.data[i].todo);
      }
      this.setState({todos: a})
    })
  }

  handleKeyPress(event) {
    if(event.key === 'Enter'){
      axios.post('/todos', {todo: event.target.value})
      .then((res) => {
        console.log(res);
        let a = [];
        for (let i = 0; i < res.data.length; i++){
          a.push(res.data[i].todo);
        }
        this.setState({todos: a})
        {document.getElementById('addToDo').value = ''}
      })
      .then((res)=> {
      })
    }
  }


  render() {
    return (
      <div>
        <h1>This is react now ya dum dum</h1>
        <h1>HUR DUR TO DO SILLY TIME YAY GO GO</h1>
        {<AddToDo handleKeyPress={this.handleKeyPress.bind(this)}/>}
        {<ToDoList todos={this.state.todos} />}
      </div>
    );
  }
}

export default App;