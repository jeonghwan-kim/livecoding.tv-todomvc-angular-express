angular.module('todomvc')
    .factory('todoStorage', function ($http) {
      var storage = {
        todos: [],

        post: function (newTodoTitle) {
          var body = {
            title: newTodoTitle
          };
          $http.post('/api/todos', body).then(function successCallback (response) {
            storage.todos.push(response.data);
          }, function errorCallback (response) {
          });
        },

        get: function (callback) {
          $http.get('/api/todos').then(function successCallback (response) {
            storage.todos = response.data
            callback(storage.todos);
          }, function errorCallback (response) {
          });
        },

        destroy: function (todo) {
          $http.delete('/api/todos/' + todo.id).then(function successCallback (response) {
            var findIdx = storage.todos.findIndex(function (t) {
              return t.id === todo.id;
            });
            if (findIdx === -1) reutrn;

            storage.todos.splice(findIdx, 1);
          }, function errorCallback (response) {
          });
        },

        destroyCompleted: function () {
          var incompletedTodos = storage.todos.filter(function (todo) {
            return !todo.completed;
          });

          angular.copy(incompletedTodos, storage.todos);
        }
      };

      return storage;
    });
