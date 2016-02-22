(function () {
  'use strict';

  angular
    .module('companyServiceGui')
    .controller('CompanyListController', CompanyListController);
  /** @ngInject */
  function CompanyListController(CompanyService, toastr, $q) {
    var vm = this;
    vm.companies = [];

    var init = function (pageNumber) {
      CompanyService.fetch()
        .then(function (resource) {
          return resource.$get('companies', {'page' : pageNumber,'size' : 1,'sort' : null});
      }).then(function (apiResource) {
        vm.page = apiResource.page;
        vm.page.currentPage = vm.page.number + 1;

        if (apiResource.$has('companies')) {
          return apiResource.$get('companies');
        }

        vm.companies = [];
        vm.page.currentPage = 0;

        return $q.reject("no companies found");
      }).then(function (companies) {
        vm.companies = companies;
      });
    };

    init(0);
    vm.pageChanged = function() {
      init(vm.page.currentPage - 1);
    };


    vm.delete =  function (company) {
      if (confirm("Are you sure you want to delete, this operation cannot be restored?")) {
        company.$del('self').then( function() {
          init(0);
          toastr.success('deleted');
        });
      }
    };

    vm.update = function (editedData, company) {
      var updatedCompany = copyEditedCompany(editedData, company);
      company.$put('self', {}, updatedCompany)
        .then(function() {
          toastr.success("updated");
        }, function() {
          toastr.error("error during updating, make sure you entered valid inputs");
      });
    };

    function copyEditedCompany(editedData, company) {

      if(!editedData) {
        return angular.copy(company);
      }

      var name = editedData.name ? editedData.name : company.name;
      var address = {
        city: editedData.address && editedData.address.city ? editedData.address.city : company.address.city,
        country: editedData.address && editedData.address.country ? editedData.address.country : company.address.country,
        locationDescription: editedData.address && editedData.address.locationDescription ? editedData.address.locationDescription : company.address.locationDescription
      };


      var contact = {
        email: editedData.contact && editedData.contact.email ? editedData.contact.email : company.contact.email,
        phoneNumber: editedData.contact && editedData.contact.phoneNumber ? editedData.contact.phoneNumber : company.contact.phoneNumber
      };

      var beneficialOwners = editedData.beneficialOwners && !_.isEmpty(editedData.beneficialOwners) ? $.parseJSON(editedData.beneficialOwners) : company.beneficialOwners;
      return {
        name : name,
        address : address,
        beneficialOwners : beneficialOwners,
        contact : contact
      };
    }
  }
})();
