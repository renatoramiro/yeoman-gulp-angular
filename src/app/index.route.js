(function() {
  'use strict';

  angular
    .module('medicos2')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/register', {
        templateUrl: 'app/main/register.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/create', {
        templateUrl: 'app/main/create.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
