(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('RoleCtrl', RoleCtrl);

    RoleCtrl.$inject = ['$scope', '$state', 'roleDtService', 'roleDeleteService', 'roleViewService','HttpService'];

    function RoleCtrl($scope, $state, dtService, deleteService, viewService, http) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "Role_Input";
            var deleteRole = "Role_Delete";

            document.getElementById("addButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";

            setRole(res.data, "addButton", createRole);
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