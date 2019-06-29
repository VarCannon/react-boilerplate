const express = require('express');
const path = require('path');
const app = express();
const port = 3010;



app.use(express.json());
app.use(express.static('../dist'));

app.get('/', (req, res) => res.send())

app.listen(port, () => console.log(`I'm watching you at port ${port} "mwuahaha"`))