(function () {
  'use strict';
  angular.module('medicos2').service('MainService', function (MainFactory) {

    this.generate = function (data) {
      return MainFactory.save(data);
    };
  });
})();
