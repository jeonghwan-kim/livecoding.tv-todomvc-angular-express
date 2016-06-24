angular.module('todomvc')
    .controller('TodomvcCtrl', function ($scope, todoStorage) {

      todoStorage.get(function (todos) {
        $scope.todos = todos;
      });

      $scope.add = function (newTodoTitle) {
        newTodoTitle = newTodoTitle.trim();
        $scope.newTodoTitle = '';
        if (!newTodoTitle) return;

        todoStorage.post(newTodoTitle);
      };

      $scope.remove = function (todo) {
        if (!todo || !todo.id) return;

        todoStorage.destroy(todo);
      },

      $scope.clearCompleted = function () {
        todoStorage.destroyCompleted();
      }

    });
