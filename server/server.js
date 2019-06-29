const express = require('express'); // bring in express
const path = require('path'); // bring in path
const app = express();  // use app variable for express methods
const port = 3010; // save port number



app.use(express.json());
app.use(express.static('../dist'));

app.get('/', (req, res) => res.send())

app.listen(port, () => console.log(`I'm watching you at port ${port} "mwuahaha"`))