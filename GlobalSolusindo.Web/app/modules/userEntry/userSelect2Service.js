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

        function getProjects() {
            select2Service.liveSearch("project/search", {
                selector: '#project_fk',
                valueMember: 'project_pk',
                displayMember: 'operatorTitle',
                callback: function (data) {
                    controller.formData.projects = data;
                },
                onSelected: function (data) {
                    controller.model.project = data.project_pk;
                },
                templateResult: function (item) {
                    var markup = '';
                    if (item.loading) {
                        markup = "<div class='select2-result-repository__statistics'>" +
                            "<div>" + item.text + "</div>" +
                            "</div>" +
                            "</div></div>";
                        return markup;
                    } else {
                        markup = "<div class='select2-result-repository__statistics'>" +
                            "<div><b>" + item.operatorTitle + "</b></div>" +
                            "<div>" + item.vendorTitle + "</div>" +
                            "<div>" + item.deliveryAreaTitle + "</div>" +
                            "</div>" +
                            "</div></div>";
                        return markup;
                    }
                }
            });
        }

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
                getProjects();
            });
        };

        return self;
    }

})();