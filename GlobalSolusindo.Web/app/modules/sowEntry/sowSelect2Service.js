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
        .factory('SOWSelect2Service', SOWSelect2Service);

    SOWSelect2Service.$inject = ['$state', 'HttpService', 'uiService', 'select2Service'];

    function SOWSelect2Service($state, http, ui, select2Service) {
        var self = this;
        var controller = {};

        function getProjects() {
            select2Service.liveSearch("project/search", {
                selector: '#project_fk',
                valueMember: 'project_pk',
                displayMember: 'title',
                callback: function (data) {
                    controller.formData.projects = data;
                },
                onSelected: function (data) {
                    controller.model.project_fk = data.project_pk;
                },
                templateResult: function (item) {
                    if (item.loading) {
                        var markup = "<div class='select2-result-repository__statistics'>" +
                            "<div>" + item.text + "</div>" +
                            "</div>" +
                            "</div></div>";
                        return markup;
                    } else {
                        var markup = "<div class='select2-result-repository__statistics'>" +
                            "<div><b>" + item.title + "</b></div>" +
                            "<div>" + item.operatorTitle + "</div>" +
                            "<div>" + item.deliveryAreaTitle + "</div>" +
                            "</div>" +
                            "</div></div>";
                        return markup;
                    }
                }
            });
        }

        function getBTSs() {
            select2Service.liveSearch("bts/search", {
                selector: '#bts_fk',
                valueMember: 'bts_pk',
                displayMember: 'name',
                callback: function (data) {
                    controller.formData.btses = data;
                },
                onSelected: function (data) {
                    controller.model.bts_fk = data.bts_pk;
                },
                templateResult: function (item) {
                    if (item.loading) {
                        var markup = "<div class='select2-result-repository__statistics'>" +
                            "<div>" + item.text + "</div>" +
                            "</div>" +
                            "</div></div>";
                        return markup;
                    } else {
                        var markup = "<div class='select2-result-repository__statistics'>" +
                            "<div><b>" + item.name + "</b></div>" +
                            "<div>Operator: " + item.operatorTitle + "</div>" +
                            "<div>Tower ID: " + item.towerId + "</div>" +
                            "<div>Cell ID: " + item.cellId + "</div>" +
                            "<div>Cabang: " + item.cabangTitle + "</div>" +
                            "</div>" +
                            "</div></div>";
                        return markup;
                    }
                }
            });
        }

        function getTechnologies() {
            select2Service.liveSearch("technology/search", {
                selector: '#technology_fk',
                valueMember: 'technology_pk',
                displayMember: 'title',
                callback: function (data) {
                    controller.formData.technologies = data;
                },
                onSelected: function (data) {
                    controller.model.technology_fk = data.technology_pk;
                    if (controller.model.sowTracks && controller.model.sowTracks[0]) {
                        controller.model.sowTracks[0].technology_fk = data.technology_pk;
                    }

                }
            });
        }

        function getUsers(jabatanFk, keyword) {
            http.get('user/search', {
                pageIndex: 1,
                pageSize: 5,
                keyword: keyword,
                kategoriJabatan_fk: jabatanFk
            }).then(function (response) {
                controller.formData.users = response.data.records;
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element(document).ready(function () {
                getProjects();
                getBTSs();
                getTechnologies();
                //controller.getUsers = getUsers;
            });
        };

        return self;
    }

})();