(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('UserCtrl', UserCtrl);

    UserCtrl.$inject = ['$scope', '$state', 'userDtService', 'userDeleteService', 'userViewService', 'userInactivateService', 'HttpService'];

    function UserCtrl($scope, $state, dtService, deleteService, viewService, inactivateService, http) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);
        inactivateService.init(self);


        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {
            
            var createRole = "User_Input";
            var deleteRole = "User_Delete";
            var importRole = "User_Import";
            
            document.getElementById("addButton").style.visibility = "hidden";
            document.getElementById("importButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";

            setRole(res.data, "addButton", createRole);
            setRole(res.data, "importButton", importRole);
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