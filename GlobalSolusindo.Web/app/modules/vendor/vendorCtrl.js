(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('VendorCtrl', VendorCtrl);

    VendorCtrl.$inject = ['$scope', '$state', 'vendorDtService', 'vendorDeleteService', 'vendorViewService','HttpService'];

    function VendorCtrl($scope, $state, dtService, deleteService, viewService, http) {
        var self = this;

        dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "Vendor_Input";
            var deleteRole = "Vendor_Delete";

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