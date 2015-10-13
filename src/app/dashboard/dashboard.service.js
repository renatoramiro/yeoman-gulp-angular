(function () {
  'use strict';
  angular.module('medicos2').service('PatientService', function (PatientFactory) {

    this.query = function (parent) {
      return PatientFactory.query({}, {parentId: parent});
    };

    this.get = function (id) {
      return PatientFactory.get({}, {_id: id});
    };

    this.save = function (patient) {
      return PatientFactory.save(patient);
    };

    this.update = function (id, patient) {
      return PatientFactory.update({_id: id}, patient);
    };

    this.remove = function (id) {
      return PatientFactory.delete({_id: id});
    };
  });
})();
