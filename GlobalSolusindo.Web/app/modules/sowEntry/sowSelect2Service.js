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
                }
            });
        }

        //function getUsers() {
        //    select2Service.liveSearch("user/search", {
        //        selector: '#user_fk',
        //        valueMember: 'user_pk',
        //        displayMember: 'name',
        //        callback: function (data) {
        //            controller.formData.users = data;
        //        },
        //        onSelected: function (data) {
        //            controller.model.user_fk = data.user_pk;
        //        }
        //    });
        //}

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
                //controller.getUsers = getUsers;
            });
        };

        return self;
    }

})();