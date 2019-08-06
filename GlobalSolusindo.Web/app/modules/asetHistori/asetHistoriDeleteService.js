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
        .factory('asetHistoriDeleteService', asetHistori);

    asetHistori.$inject = ['HttpService', 'uiService', '$uibModal'];

    function asetHistori(http, ui, $uibModal) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('asetHistori', ids).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message, 'popup');
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        function returnAset(data, remark) {
            
            data.tglSelesai = data.updatedDate;
            data.description = remark;
            return http.put('asetHistori', data).then(function (res) {
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message, 'popup');
                } else {
                    ui.alert.error(res.message);
                }
            });
            
        }

        self.return = function (data) {
            var modalInstance =
                $uibModal.open({
                    templateUrl: 'app/modules/asetHistori/asetHistoriRemark.html',
                    controller: function ($scope, $uibModalInstance) {
                        $scope.close = function () {
                            $uibModalInstance.close();
                        };
                        $scope.ok = function (remark) {
                            $uibModalInstance.close($scope.remark);
                            returnAset(data, document.getElementById('remark').value);
;                        };
                    }
                }).result.then(function (result) {
                    $scope.remark = result;
                });
        };


        self.delete = function (data) {
            var ids = [data.asetHistori_pk];
            ui.alert.confirm("Are you sure want to delete aset histori '" + data.asetName + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].asetHistori_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#asetHistori tbody').on('click', '#delete', function () {
                var selectedRecord = controller.datatable.row($(this).parents('tr')).data();
                self.kembali(selectedRecord);
            });

            $('#asetHistori tbody').on('click', '#return', function () {
                var selectedRecord = controller.datatable.row($(this).parents('tr')).data();
                self.return(selectedRecord);
            });

            //Toolbar delete button event
            angular.element('#deleteButton').on('click', function () {
                var selectedRows = controller.datatable.rows('.selected').data();
                var rowsAreSelected = selectedRows.length > 0;
                if (!rowsAreSelected) {
                    ui.alert.error('Please select the record you want to delete.');
                    return;
                }

                var selectedRecords = [];
                for (var i = 0; i < selectedRows.length; i++) {
                    selectedRecords.push(selectedRows[i]);
                }
                self.deleteMultiple(selectedRecords);
            });
        };

        return self;
    }

})();