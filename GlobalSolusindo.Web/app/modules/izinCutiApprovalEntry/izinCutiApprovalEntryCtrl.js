(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:userEntryCtrl
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('izinCutiApprovalEntryCtrl', izinCutiApprovalEntryCtrl);

    izinCutiApprovalEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'izinCutiApprovalSaveService', 'izinCutiApprovalBindingService', 'FormControlService', 'select2Service','HttpService'];

    function izinCutiApprovalEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service, http) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
        });

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var approveRejectRole = "IzinCuti_Approval";

            document.getElementById("approveButton").style.visibility = "hidden";
            document.getElementById("rejectButton").style.visibility = "hidden";

            setRole(res.data, "approveButton", approveRejectRole);
            setRole(res.data, "rejectButton", approveRejectRole);

        })
        
        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

        return self;
    }
})();