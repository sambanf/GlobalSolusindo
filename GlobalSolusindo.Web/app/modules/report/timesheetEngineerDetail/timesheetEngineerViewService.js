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
        .factory('timesheetEngineerDetailViewService', timesheetEngineerDetailViewService);

    timesheetEngineerDetailViewService.$inject = ['HttpService', '$state', 'uiService'];

    function timesheetEngineerDetailViewService(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (user_fk, bulan, bulanName) {
            $state.go('app.engineerActivities', {
                id: user_fk,
                bulan: bulan,
                bulanName:bulanName
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#timesheetEngineerDetail tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.user_fk, data.bulan, data.bulanName);
            });

            $('#timesheetEngineerDetail tbody').on('click', '#download', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                var user_fk = data["user_fk"];
                var bulan = data["bulan"];
                var bulanName = data["bulanName"];
                var tahun = data["tahun"];
                http.downloadFile('report/activitydl?User_FK='+user_fk+'&Bulan='+bulan, { keyword: '' }).then(function (data) {
                    var contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                    var linkElement = document.createElement('a');
                    try {
                        var blob = new Blob([data], { type: contentType });
                        var url = window.URL.createObjectURL(blob);

                        linkElement.setAttribute('href', url);
                        linkElement.setAttribute("download", document.getElementById('userId').innerText +"TimesheetDetail "+bulanName + " " + tahun+".xlsx");

                        var clickEvent = new MouseEvent("click", {
                            "view": window,
                            "bubbles": true,
                            "cancelable": false
                        });
                        linkElement.dispatchEvent(clickEvent);
                    } catch (ex) {
                        console.log(ex);
                    }
                });
            });

            $("#timesheetEngineerDetail tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var user_fk = data["user_fk"];
                var bulan = data["bulan"];
                var bulanName = data["bulanName"];
                self.view(user_fk, bulan, bulanName);
            });

        };

        return self;
    }

})();