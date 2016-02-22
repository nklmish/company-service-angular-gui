(function() {
  'use strict';

  angular
    .module('companyServiceGui')
    .factory('CompanyService', CompanyService);

    /** @ngInject */
    function CompanyService(halClient, API_URL) {
        return {
          'fetch' :
            function() {
              return halClient.$get(API_URL);
            }
        };
    }

})();
