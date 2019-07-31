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

        function getReligions() {
            select2Service.liveSearch("religion/search", {
                selector: '#religion',
                valueMember: 'religion_pk',
                displayMember: 'name',
                callback: function (data) {
                    controller.formData.religions = data;
                },
                onSelected: function (data) {
                    controller.model.religion = data.religion_pk;
                }
            });
        }

        function getMaritalStatuses() {
            select2Service.liveSearch("maritalStatus/search", {
                selector: '#maritalStatus',
                valueMember: 'maritalStatus_pk',
                displayMember: 'name',
                callback: function (data) {
                    controller.formData.maritalStatuses = data;
                },
                onSelected: function (data) {
                    controller.model.maritalStatus = data.maritalStatus_pk;
                }
            });
        }

        function getGenders() {
            select2Service.liveSearch("gender/search", {
                selector: '#gender',
                valueMember: 'gender_pk',
                displayMember: 'name',
                callback: function (data) {
                    controller.formData.genders = data;
                },
                onSelected: function (data) {
                    controller.model.gender = data.gender_pk;
                }
            });
        }

        function getCategoryContracts() {
            select2Service.liveSearch("categoryContract/search", {
                selector: '#categoryContract',
                valueMember: 'categoryContract_pk',
                displayMember: 'name',
                callback: function (data) {
                    controller.formData.categoryContracts = data;
                },
                onSelected: function (data) {
                    controller.model.categoryContract = data.categoryContract_pk;
                }
            });
        }

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element(document).ready(function () {
                getKategoriJabatans();
                getProjects();
                getReligions();
                getCategoryContracts();
                getMaritalStatuses();
                getGenders();
            });
        };

        return self;
    }

})();