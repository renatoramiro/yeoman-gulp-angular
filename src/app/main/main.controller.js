(function() {
  'use strict';

  angular
    .module('medicos2')
    .factory('PatientService', function () {
      var service = {
        getPatient: function (patient) {
          return patient;
        }
      };

      return service;
    })
    .controller('MainController', ['$scope', '$timeout', '$location', 'PatientService', '$rootScope', function ($scope, $timeout, $location, patientService, $rootScope) {
      $scope.user = {};
      $scope.patient = {};
      $scope.formPatient = {};

      $scope.list = [1, 2, 3, 4, 5];
      $scope.list3 = [1, 2, 3];

      $scope.print = function (patient) {
        $location.path('/print');
        $rootScope.patientPrint = patientService.getPatient(patient);
      };
    }]);
})();
