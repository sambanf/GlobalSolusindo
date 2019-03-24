(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:userEntryCtrl
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('SOWEntryCtrl', SOWEntryCtrl);

    SOWEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'SOWSaveService', 'SOWBindingService', 'FormControlService', 'SOWSelect2Service', 'HttpService'];

    function SOWEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, SOWSelect2Service, http) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
            SOWSelect2Service.init(self);

            self.getUsers = function (jabatanFk, keyword) {
                http.get('user/search', {
                    pageIndex: 1,
                    pageSize: 5,
                    keyword: keyword,
                    kategoriJabatan_fk: jabatanFk
                }).then(function (response) {
                    self.formData.users = response.data.records;
                });
            };
        });
         
        return self;
    }
})();