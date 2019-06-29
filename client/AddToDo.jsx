import React from 'react';
import App from './App.jsx';


function AddToDo(props) {
  return (
    <div>
    <input type="text" id="addToDo" onKeyPress={props.handleKeyPress} />
    </div>
  )
}

export default AddToDo;