(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('TaskEngineerCtrl', TaskEngineerCtrl);

    TaskEngineerCtrl.$inject = ['$scope', '$state', 'taskEngineerDtService', 'taskEngineerDeleteService', 'taskEngineerViewService', 'HttpService', 'select2Service', 'taskEngineerSearchService'];

    function TaskEngineerCtrl($scope, $state, dtService, deleteService, viewService, http, select2Service, search) {
        var self = this;
        self.formData = {};
        //self.formData.users = [
        //    { user_fk:0, username: "ALL" }
        //];
        self.model = {
            user_fk: 0,
            bts_fk: 0
        };

        dtService.init(self);
        deleteService.init(self);
        viewService.init(self);
        //function getUsers(jabatanFk, keyword) {
        //    http.get('user/search', {
        //        pageIndex: 1,
        //        pageSize: 10,
        //        keyword: keyword
        //    }).then(function (response) {
        //        response.data.records.forEach(function(item){
        //            self.formData.users.push(item);
        //        });
        //        console.log(self.formData.users);
        //        // console.log(response);
        //    });
        //};
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

        //function getBulans() {
        //    select2Service.liveSearch("taskEngineer/getPeriod", {
        //        selector: '#bulan_fk',
        //        valueMember: 'value',
        //        displayMember: 'name',
        //        callback: function (data) {
        //            console.log(data);
        //            self.formData.bulans = data;
        //            console.log(data);
        //        },
        //        onSelected: function (data) {
        //            self.model.bulan_pk = data.value;
        //        }
        //    });
        //}

        function getBulans() {
            select2Service.liveSearch("taskEngineer/getPeriod", {
                selector: '#bulan_fk',
                valueMember: 'value',
                displayMember: 'name',
                callback: function (data) {
                    self.formData.bulans = data;
                    //console.log(data);
                },
                onSelected: function (data) {
                    self.model.bulans_fk = data.value;
                }
            });
        }

        function getBTSs() {
            select2Service.liveSearch("bts/search", {
                selector: '#bts_fk',
                valueMember: 'bts_pk',
                displayMember: 'name',
                callback: function (data) {
                    self.formData.btses = data;
                    //console.log(data);
                },
                onSelected: function (data) {
                    self.model.bts_fk = data.bts_pk;
                }
            });
        }

        angular.element('#searchButton').on('click', function () {
            search.search(self);
        });

        getUsers();
        getBTSs();
        getBulans();
        console.log(self);

        return self;
    }
})();