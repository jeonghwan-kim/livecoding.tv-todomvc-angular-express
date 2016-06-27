'use strict';

const express = require('express')
    , router = express.Router();

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

router.get('/todos', (req, res) => {
  res.json(todos);
});

router.post('/todos', (req, res) => {
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

router.delete('/todos/:id', (req, res) => {
  var id = req.params.id;
  var findIdx = todos.findIndex(function (t) {
    return t.id.toString() === id;
  });

  if (findIdx === -1) reutrn;

  todos.splice(findIdx, 1);
  res.status(204).send();
});

router.get('/', (req, res) => {
  res.sendfile('index.html');
});

module.exports = router;
