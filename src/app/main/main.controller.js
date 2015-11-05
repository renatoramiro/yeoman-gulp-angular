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
    .controller('MainController', ['$scope', '$timeout', '$location', 'PatientService', '$rootScope', '$routeParams', 'MainService', '$http', '$sce', 'Configuration',
      function ($scope, $timeout, $location, patientService, $rootScope, $routeParams, MainService, $http, $sce, Configuration) {
      $scope.user = {};
      $scope.patient = {};
      $scope.formPatient = {};

      $scope.list = [1, 2, 3, 4, 5];
      $scope.list3 = [1, 2, 3];

      $scope.print = function (patient) {
        // console.log(MainService.generate(patient));
        // return MainService.generate(patient);
        $http.get(Configuration.API + '/api/v1/report', { params: {data: patient}, responseType: 'arraybuffer' }).
    			success(function(data, status, headers, config){
            var file = new Blob([data], {type: 'application/pdf'});
            var fileURL = URL.createObjectURL(file);
            window.open($sce.trustAsResourceUrl(fileURL));
    			}).
    			error(function(err){
    				console.log(err);
    			});
      };

      $scope.addOnList = function () {
        if ($scope.patient.list === undefined) {
          $scope.patient.list = [];
        }

        if ($scope.patient.list.length < 5) {
          $scope.patient.list.push({
            procedimento: '',
            descricao: '',
            quantidade: ''
          });
        }
      };

      $scope.removeItemList = function (index) {
        $scope.patient.list.splice(index, 1);
      };

      if ($routeParams.anameneseId) {
        $scope.patient = patientService.get($routeParams.anameneseId);
      }
    }]);
})();
