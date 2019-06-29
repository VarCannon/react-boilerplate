import React from 'react';
import App from './App.jsx';


function AddToDo(props) {
  return (
    <div>
    <input type="text" placeholder='Add Stuff?' id="addToDo" onKeyPress={props.handleKeyPress} />
    </div>
  )
}

export default AddToDo;