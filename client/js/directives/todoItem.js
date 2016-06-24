angular.module('todomvc')
    .directive('todoItem', function() {
      return {
        scope: {
          todoData: '=',
          onRemove: '&'
        },
        link: function (scope) {
          scope.remove = function (todoData) {
            scope.onRemove({todoData: todoData});
          }
        },
        template:
          '<div class="input-group">' +
            '<span class="input-group-addon">' +
              '<input type="checkbox" ng-model="todoData.completed">' +
            '</span>' +
            '<input type="text" class="form-control" ng-model="todoData.title">' +
            '<span class="input-group-btn">' +
              '<button type="button" class="btn btn-danger" ng-click="remove(todoData)">Remove</button>' +
            '</span>' +
         '</div>'
      };
    });
