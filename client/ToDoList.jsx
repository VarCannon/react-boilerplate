import React from 'react';


function ToDoList(props) {
  return (
    props.todos.map((ele, i) => {
      return <><li key={i}>{ele}</li><button id={i}>Delete</button></>
    })
  )
}

export default ToDoList