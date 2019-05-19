(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:dashboardService
     * @description
     * # dashboardService
     * Service of the app
     */

    angular
        .module('global-solusindo')
        .factory('UserSelect2Service', UserSelect2Service);

    UserSelect2Service.$inject = ['$state', 'HttpService', 'uiService', 'select2Service'];

    function UserSelect2Service($state, http, ui, select2Service) {
        var self = this;
        var controller;

        function getKategoriJabatans() {
            select2Service.liveSearch("kategoriJabatan/search", {
                selector: '#kategoriJabatan_fk',
                valueMember: 'kategoriJabatan_pk',
                displayMember: 'title',
                callback: function (data) {
                    controller.formData.kategoriJabatans = data;
                },
                onSelected: function (data) {
                    controller.model.kategoriJabatan_fk = data.kategoriJabatan_pk;
                }
            });
        }

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element(document).ready(function () {
                getKategoriJabatans();
            });
        };

        return self;
    }

})();