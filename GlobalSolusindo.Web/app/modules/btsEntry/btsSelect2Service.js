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
        .factory('BTSSelect2Service', BTSSelect2Service);

    BTSSelect2Service.$inject = ['$state', 'HttpService', 'uiService', 'select2Service'];

    function BTSSelect2Service($state, http, ui, select2Service) {
        var self = this;
        var controller; 

        function getOperators() {
            select2Service.liveSearch("operator/search", {
                selector: '#operator_fk',
                valueMember: 'operator_pk',
                displayMember: 'title',
                callback: function (data) {
                    controller.formData.operators = data;
                },
                onSelected: function (data) {
                    controller.model.operator_fk = data.operator_pk;
                }
            });
        }

        function getBtsStatuses() {
            select2Service.liveSearch("btsStatus/search", {
                selector: '#statusBts_fk',
                valueMember: 'btsStatus_pk',
                displayMember: 'title',
                callback: function (data) {
                    controller.formData.btsStatuses = data;
                },
                onSelected: function (data) {
                    controller.model.statusBts_fk = data.btsStatus_pk;
                }
            });
        }

        function getAreas() {
            select2Service.liveSearch("area/search", {
                selector: '#area_fk',
                valueMember: 'area_pk',
                displayMember: 'title',
                callback: function (data) {
                    controller.formData.areas = data;
                },
                onSelected: function (data) {
                    controller.model.area_fk = data.area_pk;
                }
            });
        }

        function getKotas() {
            select2Service.liveSearch("kota/search", {
                selector: '#kota_fk',
                valueMember: 'kota_pk',
                displayMember: 'title',
                callback: function (data) {
                    controller.formData.kotas = data;
                },
                onSelected: function (data) {
                    controller.model.kota_fk = data.kota_pk;
                }
            });
        }

        function getCabang() {
            select2Service.liveSearch("cabang/search", {
                selector: '#cabang_fk',
                valueMember: 'cabang_pk',
                displayMember: 'title',
                callback: function (data) {
                    controller.formData.cabangs = data;
                },
                onSelected: function (data) {
                    controller.model.cabang_fk = data.cabang_pk;
                }
            });
        }
      
        self.init = function (ctrl) {
            controller = ctrl;
            angular.element(document).ready(function () {
                getOperators();
                getBtsStatuses();
                getAreas();
                //getKotas();
                //getCabang();
            });
        };

        return self;
    }

})();