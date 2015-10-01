(function () {
	'use strict';

	angular.module('medicos2')
	.controller('AccountController', ['$scope', '$rootScope', '$window', '$location', 'AccountService',
		function ($scope, $rootScope, $window, $location, AccountService) {
		$scope.user = {};
		$scope.error = undefined;
		$scope.success = undefined;

		$scope.login = function (user) {
			$scope.error = undefined;
			AccountService.login(user.username, user.password).$promise.then(function (data) {
				$rootScope.currentUser = data.currentUser;
				var token = data.token;
				if(token !== undefined) {
					$window.sessionStorage.token = token;
				}
				$location.path('/dashboard');
			}, function (err) {
				$scope.user = {};
				$scope.error = err.data;
			});
		};

		$scope.register = function (user) {
			$scope.error = undefined;
			AccountService.register(user).$promise.then(function (data) {
				$scope.user = {};
				$scope.success = data;
			}, function (err) {
				$scope.error = err.data;
			});
		};

		$scope.logout = function () {
			delete $rootScope.currentUser;
			delete $window.sessionStorage.token;
			$location.path('/login');
		};
	}]);
})();
