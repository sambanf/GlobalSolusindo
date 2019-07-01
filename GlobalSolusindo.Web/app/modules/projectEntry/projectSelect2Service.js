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
        .factory('ProjectSelect2Service', ProjectSelect2Service);

    ProjectSelect2Service.$inject = ['$state', 'HttpService', 'uiService', 'select2Service'];

    function ProjectSelect2Service($state, http, ui, select2Service) {
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

        function getUsers() {
            select2Service.liveSearch("user/search", {
                selector: '#user_fk',
                valueMember: 'user_pk',
                displayMember: 'name',
                callback: function (data) {
                    controller.formData.users = data;
                },
                onSelected: function (data) {
                    controller.model.user_fk = data.user_pk;
                }
            });
        }

        function getDeliveryArea() {
            select2Service.liveSearch("deliveryArea/search", {
                selector: '#deliveryArea_fk',
                valueMember: 'deliveryArea_pk',
                displayMember: 'title',
                callback: function (data) {
                    controller.formData.deliveryAreas = data;
                },
                onSelected: function (data) {
                    controller.model.deliveryArea_fk = data.deliveryArea_pk;
                }
            });
        }

        function getVendors() {
            select2Service.liveSearch("vendor/search", {
                selector: '#vendor_fk',
                valueMember: 'vendor_pk',
                displayMember: 'title',
                callback: function (data) {
                    controller.formData.vendors = data;
                },
                onSelected: function (data) {
                    controller.model.vendor_fk = data.vendor_pk;
                }
            });
        }

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element(document).ready(function () {
                getOperators(); 
                getDeliveryArea();
                getVendors();
                getUsers();
            });
        };

        return self;
    }

})();