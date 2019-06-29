const express = require('express'); // bring in express
const path = require('path'); // bring in path
const app = express();  // use app variable for express methods
const port = 3010; // save port number
const db = require('../database/database')


app.use(express.json());
app.use(express.static('../dist'));

app.get('/todos', (req, res) => {
  db.getAll()
  .then((todos)=> {
    console.log('this is in the todos.then',todos)

    res.send(todos)
  })
});

app.post('/todos', (req, res) => {
  console.log('this is when we post',req.body.todo)
  db.post(req.body.todo)
  .then(()=> db.getAll())
  .then((todos)=> res.send(todos))
})

app.listen(port, () => console.log(`I'm watching you at port ${port} mwuahaha`))