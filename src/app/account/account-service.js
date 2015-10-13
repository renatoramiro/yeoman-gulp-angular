(function () {
	'use strict';

	angular.module('medicos2').service('AccountService', ['LoginFactory', 'RegisterFactory', 'MeFactory',
			function (LoginFactory, RegisterFactory, MeFactory) {
		this.login = function (login, password) {
			return LoginFactory.login({username: login, password: password});
		};

		this.register = function (user) {
			return RegisterFactory.register({username: user.username, email: user.email, name: user.name, password: user.password});
		};

		this.me = function () {
			return MeFactory.get();
		};
	}]);
})();
