(function () {
  'use strict';
  angular.module('medicos2').service('Configuration', function () {

    if (window.location.host.indexof("heroku") > -1) {
      return this.API = 'https://fast-plains-6359.herokuapp.com';
    } else {
      return this.API = 'http://localhost:4000';
    }
  });
})();
