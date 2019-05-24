(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('TaskEngineerCtrl', TaskEngineerCtrl);

    TaskEngineerCtrl.$inject = ['$scope', '$state', 'taskEngineerDtService', 'taskEngineerDeleteService', 'taskEngineerViewService', 'HttpService', 'select2Service'];

    function TaskEngineerCtrl($scope, $state, dtService, deleteService, viewService, http, select2Service) {
        var self = this;
        self.formData = {};
        self.formData.users = [
            { user_fk:0, username: "ALL" }
        ];

        dtService.init(self);
        deleteService.init(self);
        viewService.init(self);
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
                // console.log(response);
            });
        };
        
        function getBTSs() {
            select2Service.liveSearch("bts/search", {
                selector: '#bts_fk',
                valueMember: 'bts_pk',
                displayMember: 'name',
                callback: function (data) {
                    self.formData.btses = data;
                    console.log(data);
                },
                onSelected: function (data) {
                    self.model.bts_fk = data.bts_pk;
                }
            });
        }

        getUsers();
        getBTSs();

        return self;
    }
})();