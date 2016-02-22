(function() {
  'use strict';

  angular
    .module('companyServiceGui')
    .controller('CompanyCreateController', CompanyCreateController);
  /** @ngInject */
  function CompanyCreateController(CompanyService, toastr) {
    var vm = this;

    vm.companyForm = {
      name : "",
      address : {
        locationDescription: "",
        city : "",
        country: ""
      },
      beneficialOwners : [{
        name : ""
      }],
      contact : {
        email : "",
        phoneNumber : ""
      }
    };

    vm.save = function() {
      CompanyService.fetch()
        .then( function(resource) {
          return resource.$post('companies', {}, vm.companyForm);
        })
        .then( function() {
          vm.afterSave();
        }, function () {
          toastr.error("error during save, make sure you supplied correct input");
        });
    };

    vm.afterSave = function() {
      toastr.success("new company added");
      vm.clear();
    };

    vm.clear = function () {
      vm.companyForm.name = "";
      vm.companyForm.address  = {
        locationDescription: "",
          city : "",
          country: ""
      };

      _.forEach(vm.companyForm.beneficialOwners, function (owner) {
        owner.name = "";
      });

      vm.companyForm.contact = {
        email : "",
        phoneNumber : ""
      }
    };
  }
})();
