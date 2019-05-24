(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('TimesheetEngineerCtrl', TimesheetEngineerCtrl);

    TimesheetEngineerCtrl.$inject = ['$scope', '$state', 'timesheetEngineerDtService', 'timesheetEngineerViewService', 'HttpService'];

    function TimesheetEngineerCtrl($scope, $state, dtService, viewService, http) {
        var self = this;
        self.formData = {};

        dtService.init(self);
        viewService.init(self);

        function getUsers(jabatanFk, keyword) {
            http.get('user/search', {
                pageIndex: 1,
                pageSize: 10,
                keyword: keyword
            }).then(function (response) {
                self.formData.users = response.data.records;
                // console.log(response);
            });
        };
        getUsers();
        return self;
    }
})();