(function () {
  'use strict';
  angular.module('medicos2').factory('PatientFactory', function ($resource, Configuration) {
    return $resource(Configuration.API + '/api/v1/patients/:_id', { _id: '@_id' },
		{
			update: { method: 'PUT'},
      query: { method: 'GET', params: { parentId: '@parentId' }, isArray: true }
		});
  });
})();
