'use strict';

const express = require('express')
    , app = express()
    , logger = require('morgan')
    , bodyParser = require('body-parser')
    , path = require('path');

// Database MockUp
let todos = [{
    id: 1,
    title: 'todo title 1',
    completed: true
  }, {
    id: 2,
    title: 'todo title 2',
    completed: true
  }, {
    id: 3,
    title: 'todo title 3',
    completed: false
  }, {
    id: 4,
    title: 'todo title 4',
    completed: false
  }];

app.use('/', express.static(path.join(__dirname, '../client')));
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// REST APIs
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  var newId = todos.length ?
      todos[todos.length - 1].id + 1 :
      1;

  var todo = {
    id: newId,
    title: req.body.title,
    completed: false
  };

  todos.push(todo);
  res.json(todo);
});

app.delete('/api/todos/:id', (req, res) => {
  var id = req.params.id;
  var findIdx = todos.findIndex(function (t) {
    return t.id.toString() === id;
  });

  if (findIdx === -1) reutrn;

  todos.splice(findIdx, 1);
  res.status(204).send();
})


app.get('/', (req, res) => {
  res.sendfile('index.html');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
