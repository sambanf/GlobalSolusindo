(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('DailyTaskCtrl', DailyTaskCtrl);

    DailyTaskCtrl.$inject = ['$scope', '$state', 'dailyTaskDtService', 'HttpService', 'select2Service'];

    function DailyTaskCtrl($scope, $state, dtService, http, select2Service) {
        var self = this;

        self.model = {
            user_fk: 0,
            statusName: "ALL"
        };

        self.formData = {};

        self.formData.status = [
            { statusId: 0, name: "ALL" },
            { statusId: 1, name: "Online" },
            { statusId: 2, name: "Cuti" },
            { statusId: 3, name: "Unassigned" },
            { statusId: 4, name: "Offline" },
        ];

        dtService.init(self);

        function getUsers() {
            select2Service.liveSearch("user/search", {
                selector: '#user_fk',
                valueMember: 'user_pk',
                displayMember: 'name',
                callback: function (data) {
                    self.formData.users = [];
                    data.forEach(function (user) {
                        self.formData.users.push(user);
                    });
                },
                onSelected: function (data) {
                    self.model.user_fk = data.user_pk;
                }
            });
        }

        getUsers();
        return self;
    }
})();