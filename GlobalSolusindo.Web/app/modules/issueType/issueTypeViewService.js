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
        .factory('issueTypeViewService', issueTypeViewService);

    issueTypeViewService.$inject = ['HttpService', '$state', 'uiService'];

    function issueTypeViewService(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.issueTypeEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#issueType tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.issueType_pk);
            });

            //$("#issueType tbody").on("dblclick", "tr", function () {
            //    var data = controller.datatable.row(this).data();
            //    var id = data["issueType_pk"];
            //    self.view(id);
            //});
        };

        return self;
    }

})();