(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('UserHistoryCtrl', UserHistoryCtrl);

    UserHistoryCtrl.$inject = ['$scope', '$state', 'userHistoryDtService', 'userHistoryViewService', 'HttpService', '$stateParams'];
    //UserHistoryCtrl.$inject = ['$scope', '$state'];

    function UserHistoryCtrl($scope, $state, dtService, viewService, http, $stateParams) {
        var self = this;
        self.datatable = dtService.init(self);
        viewService.init(self);
        
        http.get('aset/'+ $stateParams.aset_fk, {
            pageIndex: 1,
            pageSize: 10
        }).then(function (response) {
            
            $scope.kodeAset = response.data.asetId;
            $scope.kategori = response.data.kategoriAsetName;
            $scope.namaAset = response.data.name; 
        });

        //http.get('userHistori/search', {
        //    pageIndex: 1,
        //    pageSize: 10,
        //    aset_fk: $stateParams.aset_fk
        //}).then(function (response) {

        //    console.log(response);
        //});

        return self;
    }
})();