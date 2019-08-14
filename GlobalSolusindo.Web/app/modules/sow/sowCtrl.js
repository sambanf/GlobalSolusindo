(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('SOWCtrl', SOWCtrl);

    SOWCtrl.$inject = ['$scope', '$state', 'sowDtService', 'sowDeleteService', 'sowViewService','HttpService'];

    function SOWCtrl($scope, $state, dtService, deleteService, viewService, http) {
        var self = this;
        
        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "SOW_Input";
            var deleteRole = "SOW_Delete";
            var importRole = "SOW_Import";
            var readRole = "SOW_ViewAll";
            var updateRole = "SOW_Edit";
            var approvalRole = "SOW_Approval";

            document.getElementById("addButton").style.visibility = "hidden";
            document.getElementById("importButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";

            setRole(res.data, "addButton", createRole);
            setRole(res.data, "importButton", importRole);
            setRole(res.data, "deleteButton", deleteRole);

            var show = 'hidden';
            var view = 'hidden';
            var dlt = 'hidden';
            var approval = 'hidden';

            if (setRoleTable(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRoleTable(res.data, deleteRole)) {
                dlt = 'visible';
            }
            if (setRoleTable(res.data, readRole)) {
                show = 'visible';
            }
            if (setRoleTable(res.data, approvalRole)) {
                approval = 'visible';
            }

            dtService.init(self, show, view, dlt, approval);
            deleteService.init(self);
            viewService.init(self);

        })

        function setRoleTable(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

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

        angular.element('#downloadButtonViewall').on('click', function () {
            http.downloadFile('sow/exportviewall', { keyword: '' }).then(function (data) {
                var contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                var linkElement = document.createElement('a');
                try {
                    var blob = new Blob([data], { type: contentType });
                    var url = window.URL.createObjectURL(blob);

                    linkElement.setAttribute('href', url);
                    linkElement.setAttribute("download", "SOWTracker.xlsx");

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

        return self;
    }
})();