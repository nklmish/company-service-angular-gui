(function() {
  'use strict';

  angular
    .module('companyServiceGui')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
      url: '/',
      templateUrl: 'app/main/company-list.html',
      controller: 'CompanyListController',
      controllerAs: 'ctrl'
    }).state('create', {
      url: '/create',
      templateUrl: 'app/main/company-create.html',
      controller: 'CompanyCreateController',
      controllerAs: 'ctrl'
    });
    $urlRouterProvider.otherwise('/');
  }

})();
