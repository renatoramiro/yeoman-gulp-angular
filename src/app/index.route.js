(function() {
  'use strict';

  angular
    .module('medicos2')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'app/account/login.html',
        controller: 'AccountController',
        controllerAs: 'account'
      })
      .when('/register', {
        templateUrl: 'app/account/register.html',
        controller: 'AccountController',
        controllerAs: 'account'
      })
      .when('/dashboard', {
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dash',
        resolve:{
					auth: function resolveAuthentication(AuthResolver) {
						return AuthResolver.resolve();
					}
				}
      })
      .when('/patients/:_id', {
        templateUrl: 'app/patient/show.html',
        controller: 'DashboardController',
        controllerAs: 'dash',
        resolve:{
					auth: function resolveAuthentication(AuthResolver) {
						return AuthResolver.resolve();
					}
				}
      })
      .when('/create', {
        templateUrl: 'app/main/create.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve:{
					auth: function resolveAuthentication(AuthResolver) {
						return AuthResolver.resolve();
					}
				}
      })
      .when('/print', {
        templateUrl: 'app/main/print.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve:{
					auth: function resolveAuthentication(AuthResolver) {
						return AuthResolver.resolve();
					}
				}
      })
      .otherwise({
        redirectTo: '/login'
      });
  }

})();
