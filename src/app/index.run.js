(function() {
  'use strict';

  angular
    .module('companyServiceGui')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('completed');
  }

})();
