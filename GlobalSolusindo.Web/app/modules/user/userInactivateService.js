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
        .factory('userInactivateService', user);

    user.$inject = ['HttpService', 'uiService'];

    function user(http, ui) {
        var self = this;
        var controller;

        function inactivateRecords(ids) {
            return http.post('user/inactivate', {
                user_pk: ids
            }).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message, 'popup');
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        function activateRecords(ids) {
            return http.post('user/activate', {
                user_pk: ids
            }).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message, 'popup');
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        self.inactivate = function (data) {
            var ids = data.user_pk;
            var isActive = data.status_fk == 1;
            if (isActive) {
                ui.alert.confirm("Are you sure want to inactivate user '" + data.name + "'?", function () {
                    return inactivateRecords(ids);
                });
                return;
            }
            ui.alert.confirm("Are you sure want to activate user '" + data.name + "'?", function () {
                return activateRecords(ids);
            });

        };

        //self.inactivateMultiple = function (selectedRecords) {
        //    var ids = [];

        //    if (selectedRecords) {
        //        for (var i = 0; i < selectedRecords.length; i++) {
        //            ids.push(selectedRecords[i].user_pk);
        //        }
        //    }

        //    ui.alert.confirm("Are you sure want to inactivate " + ids.length + " selected data?", function () {
        //        return inactivateRecords(ids);
        //    });
        //};

        self.init = function (ctrl) {
            controller = ctrl;

            //Row inactivate button event
            $('#user tbody').on('click', '#inactivate', function () {
                var selectedRecord = controller.datatable.row($(this).parents('tr')).data();
                self.inactivate(selectedRecord);
            });

            ////Toolbar inactivate button event
            //angular.element('#inactivateButton').on('click', function () {
            //    var selectedRows = controller.datatable.rows('.selected').data();
            //    var rowsAreSelected = selectedRows.length > 0;
            //    if (!rowsAreSelected) {
            //        ui.alert.error('Please select the record you want to inactivate.');
            //        return;
            //    }

            //    var selectedRecords = [];
            //    for (var i = 0; i < selectedRows.length; i++) {
            //        selectedRecords.push(selectedRows[i]);
            //    }
            //    self.inactivateMultiple(selectedRecords);
            //});
        };

        return self;
    }

})();