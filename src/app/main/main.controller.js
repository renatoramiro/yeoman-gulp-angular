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
    .controller('MainController', ['$scope', '$timeout', '$location', 'PatientService', '$rootScope', '$routeParams', 'MainService', '$http', '$sce',
      function ($scope, $timeout, $location, patientService, $rootScope, $routeParams, MainService, $http, $sce) {
      // $scope.user = {};
      $scope.patient = {
        procedimentos: []
      };
      $scope.formPatient = {};

      $scope.list = [1, 2, 3, 4, 5];
      $scope.list3 = [1, 2, 3];

      $scope.print = function (patient) {
        var geap = 'http://localhost:4000/api/v1/report/geap';
        var unimed = 'http://localhost:4000/api/v1/report/unimed';
        var url = '';
        if (patient.convenio === 'GEAP') {
          url = geap
        } else if (patient.convenio === 'Unimed') {
          url = unimed;
        }

        $http.get(url, { params: {data: patient}, responseType: 'arraybuffer' }).
    			success(function(data, status, headers, config){
            var file = new Blob([data], {type: 'application/pdf'});
            var fileURL = URL.createObjectURL(file);
            window.open($sce.trustAsResourceUrl(fileURL));
    			}).
    			error(function(err){
            console.error(err);
    			});
      };

      $scope.addOnList = function () {
        if ($scope.patient.procedimentos === undefined) {
          $scope.patient.procedimentos = [];
        }

        if ($scope.patient.procedimentos.length < 5) {
          $scope.patient.procedimentos.push({
            procedimento: '',
            descricao: '',
            quantidade: ''
          });
        }
      };

      $scope.removeItemList = function (index) {
        $scope.patient.procedimentos.splice(index, 1);
      };

      if ($routeParams.anameneseId) {
        $scope.patient = patientService.get($routeParams.anameneseId);
      }
    }]);
})();
