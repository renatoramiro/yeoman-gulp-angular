(function () {
  'use strict';
  angular.module('medicos2').factory('PatientFactory', function ($resource) {
    return $resource('http://localhost:4000/api/v1/patients/:_id', { _id: '@_id' },
		{
			update: { method: 'PUT'},
      query: { method: 'GET', params: { parentId: '@parentId' }, isArray: true }
		});
  });
})();
