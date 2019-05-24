(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('DailyTaskCtrl', DailyTaskCtrl);

        DailyTaskCtrl.$inject = ['$scope', '$state', 'dailyTaskDtService', 'HttpService'];

        function DailyTaskCtrl($scope, $state, dtService, http) {
        var self = this;

        self.formData ={};
        self.formData.users = [
            { user_fk:0, name: "ALL" }
        ];
        
        dtService.init(self);

        function getUsers(jabatanFk, keyword) {
            http.get('user/search', {
                pageIndex: 1,
                pageSize: 10,
                keyword: keyword
            }).then(function (response) {
                response.data.records.forEach(function(item){
                    self.formData.users.push(item);
                });
                console.log(self.formData.users);
                self.formData.status = [
                    {statusId: 0, name: "ALL"},
                    {statusId: 1, name: "Online"},
                    {statusId: 2, name: "Cuti"},
                    {statusId: 3, name: "Unassigned"},
                    {statusId: 4, name: "Offline"},
                ]
                // console.log(response);
            });
        };
        getUsers();
        return self;
    }
})();