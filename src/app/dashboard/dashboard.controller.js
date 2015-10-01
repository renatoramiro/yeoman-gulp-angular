(function () {
  'use strict';

  angular.module('medicos2').controller('DashboardController', ['$scope', '$rootScope', '$location', '$timeout', 'PatientService',
function ($scope, $rootScope, $location, $timeout, PatientService) {
    if (!angular.isDefined($rootScope.currentUser) && !angular.isDefined($rootScope.currentUser._id)) {
      $location.path('/login');
      return;
    }

    $scope.patients = PatientService.query($rootScope.currentUser._id);

    $scope.newPatient = false;
    $scope.actionForm = '';
    $scope.form = {};
    $scope.patient = {};

    $scope.saved = false;
    $scope.deleted = false;

    $scope.createPatient = function () {
      $scope.newPatient = true;
      $scope.actionForm = 'Salvar';
    };

    $scope.save = function () {
      if ($scope.form.patient.$valid) {
        $scope.patient.parentId = $rootScope.currentUser._id;
        PatientService.save($scope.patient).$promise.then(function (data) {
          $scope.newPatient = false;
          $scope.patient = {};
          $scope.saved = true;
          $scope.patients = PatientService.query($rootScope.currentUser._id);
          $timeout(function () {
            $scope.saved = false;
          }, 1000);
        })
      }
    };

    $scope.openModalRemove = function (patient) {
      $scope.patient = patient;
    };

    $scope.remove = function (id) {
      PatientService.remove(id).$promise.then(function () {
        $scope.deleted = true;
        $scope.patient = {};
        $scope.patients = PatientService.query($rootScope.currentUser._id);
        $timeout(function () {
          $scope.deleted = false;
        }, 1000);
      });
    };

    $scope.cancel = function () {
      $scope.newPatient = false;
      $scope.patient = {};
      $scope.actionForm = '';
      resetForm($scope.form.patient)
    };

    var resetForm = function(form) {
  		if (form != undefined && Object.keys(form).length != 0) {
  			form.$setPristine();
  			form.$setUntouched();
  			form.$setDirty();
  		};
  	};
  }]);
})();
