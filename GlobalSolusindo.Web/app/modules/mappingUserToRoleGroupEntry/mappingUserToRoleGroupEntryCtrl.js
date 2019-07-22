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
        .controller('MappingUserToRoleGroupEntryCtrl', MappingUserToRoleGroupEntryCtrl);

    MappingUserToRoleGroupEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'MappingUserToRoleGroupSaveService', 'MappingUserToRoleGroupBindingService', 'FormControlService', 'mappingUserToRoleGroupEntryDtService', 'select2Service', 'mappingUserToRoleGroupDeleteService','HttpService'];

    function MappingUserToRoleGroupEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, dtService, select2Service, deleteService, http) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            dtService.init(self);
            deleteService.init(self);
        });

        self.userModalCallback = function () {
            self.userDt.draw();
        };

        
        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "MappingUserToRoleGroup_Input";

            document.getElementById("modalRoleButton").style.visibility = "hidden";

            setRole(res.data, "modalRoleButton", createRole);

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