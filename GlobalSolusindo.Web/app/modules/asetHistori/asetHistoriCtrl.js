(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('AsetHistoriCtrl', AsetHistoriCtrl);

    AsetHistoriCtrl.$inject = ['$scope', '$state', 'asetHistoriDtService', 'asetHistoriDeleteService', 'asetHistoriViewService','HttpService'];

    function AsetHistoriCtrl($scope, $state, dtService, deleteService, viewService, http) {
        var self = this;
        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "AsetHistori_Input";
            var deleteRole = "AsetHistori_Delete";

            document.getElementById("addNewButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";

            setRole(res.data, "addNewButton", createRole);
            setRole(res.data, "deleteButton", deleteRole);

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