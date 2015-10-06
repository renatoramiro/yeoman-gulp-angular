(function () {
  'use strict';
  angular.module('medicos2').factory('MainFactory', function ($resource) {
    return $resource('http://localhost:4000/api/v1/report', {}, {});
  });
})();
