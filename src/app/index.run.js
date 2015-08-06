(function() {
  'use strict';

  angular
    .module('medicos2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
