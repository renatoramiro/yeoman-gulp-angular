(function () {
  'use strict';

  angular.module('medicos2')
  .directive('newpatient', function () {
    return {
      templateUrl: 'app/dashboard/new_patient.html'
    };
  })
  .directive('patientsaved', function () {
    return {
      templateUrl: 'app/dashboard/patient_saved.html'
    };
  })
  .directive('patientupdated', function () {
    return {
      templateUrl: 'app/dashboard/patient_updated.html'
    };
  })
  .directive('patientremoved', function () {
    return {
      templateUrl: 'app/dashboard/patient_removed.html'
    };
  })
  .directive('modalpatientremoved', function () {
    return {
      templateUrl: 'app/dashboard/modal_remove_patient.html'
    };
  });
})();
