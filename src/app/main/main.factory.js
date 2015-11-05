(function () {
  'use strict';
  angular.module('medicos2').factory('MainFactory', function ($resource, Configuration) {
    return $resource(Configuration.API + '/api/v1/report', {}, {});
  });
})();
