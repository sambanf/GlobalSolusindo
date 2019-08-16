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
                displayMember: 'operatorTitle',
                callback: function (data) {
                    controller.formData.projects = data;
                },
                onSelected: function (data) {
                    controller.model.project_fk = data.project_pk;
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
                    var markup = '';
                    if (item.loading) {
                        markup = "<div class='select2-result-repository__statistics'>" +
                            "<div>" + item.text + "</div>" +
                            "</div>" +
                            "</div></div>";
                        return markup;
                    } else {
                        var towerId = (item.towerId == null || item.towerId == undefined) ? '' : item.towerId;
                        var cellId = (item.cellId == null || item.cellId == undefined) ? '' : item.cellId;
                        markup = "<div class='select2-result-repository__statistics'>" +
                            "<div><b>" + item.name + "</b></div>" +
                            "<div>Operator: " + item.operatorTitle + "</div>" +
                            "<div>Tower ID: " + towerId + "</div>" +
                            "<div>Cell ID: " + cellId + "</div>" +
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


        function getSOWName() {
            select2Service.liveSearch("sow/sowname", {
                selector: '#sowname',
                callback: function (data) {
                    controller.formData.sowname = data;
                },
                onSelected: function (data) {
                    controller.model.sowNames = data.sowNames;
                }
            });
        }

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element(document).ready(function () {
                getProjects();
                getBTSs();
                getTechnologies();
                getSOWName();
            });
        };

        return self;
    }

})();