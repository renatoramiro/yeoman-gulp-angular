(function() {
  'use strict';

  angular
    .module('medicos2')
    .controller('MainController', ['$scope', '$timeout', '$location', function ($scope, $timeout, $location) {
      $scope.user = {};
      $scope.list = [1, 2, 3, 4, 5];
      $scope.list3 = [1, 2, 3];

      $scope.signIn = function (user) {
        console.log(user);
        $scope.user = {};
        $location.path('/create');
      }

      $scope.signUp = function (user) {
        console.log(user);
        $scope.user = {};
        $location.path('/create');
      }

      $scope.logout = function () {
        $scope.user = {};
        $location.path('/login');
      }
    }]);
})();
