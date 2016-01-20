(function () {
	'use strict';

	angular.module('medicos2')

	.factory('LoginFactory', function ($resource, Configuration) {
		return $resource(Configuration.API + '/api/v1/login', {},
		{
			login: { method: 'POST'}
		});
	})
	.factory('RegisterFactory', function ($resource, Configuration) {
		return $resource(Configuration.API + '/api/v1/register', {},
		{
			register: { method: 'POST'}
		});
	})
	.factory('MeFactory', function ($resource, Configuration) {
		return $resource(Configuration.API + '/api/v1/me', {}, {});
	})
	.factory('authInterceptor', function ($rootScope, $q, $window, $location) {
		return {
			request: function (config) {
				config.headers = config.headers || {};
				if ($window.sessionStorage.token) {
					config.headers['x-access-token'] = $window.sessionStorage.token;
				}
				return config;
			},
			response: function (response) {
				var headers = response.headers();
				var token = headers['x-access-token'];
				if (token !== undefined) {
					$window.sessionStorage.token = token;
				}
				return response || $q.when(response);
			},
			responseError: function (rejection) {
				if (rejection.status === 404) {
					delete $window.sessionStorage.token;
					delete $rootScope.currentUser;
					$location.path('/login');
				}
				return $q.reject(rejection);
			}
		};
	})
	.factory('AuthResolver', function ($q, $rootScope) {
		return {
			resolve: function () {
				var deferred = $q.defer();
				$rootScope.$watch('currentUser', function (currentUser) {
					try {
						if (angular.isDefined(currentUser) && angular.isDefined(currentUser._id)) {
		    			deferred.resolve(currentUser);
						}
					} catch(error) {
						deferred.reject(error);
					}
				});
				return deferred.promise;
			}
		};
	})
	.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
	})
	.run(function ($rootScope, $window, AccountService) {
		if ($window.sessionStorage.token !== undefined) {
			AccountService.me().$promise.then(function (data) {
				$rootScope.currentUser = data;
			}, function () {
				$rootScope.currentUser = null;
			});
		}
	});
})();
