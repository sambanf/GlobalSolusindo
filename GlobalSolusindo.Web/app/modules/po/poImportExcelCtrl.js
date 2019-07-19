(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:userImportExcelCtrl
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('POImportExcelCtrl', poImportExcelCtrl);

    poImportExcelCtrl.$inject = ['$scope', '$stateParams', '$state', 'POImportExcelUploadService', 'POImportExcelBindingService', 'FormControlService','HttpService'];

    function poImportExcelCtrl($scope, sParam, $state, uploadService, bindingService, formControlService, http) {
        var self = this;
        self.stateParam = sParam;

        function setModelWithFileData(data) {
            self.model.file = data;
        }

        function setFileName(fileName) {
            document.getElementById("fileName").innerHTML = fileName;
        }

        function addEventListenerOnImageChanged() {
            document.getElementById("file").addEventListener("change", readFile);
        }

        function readFile() {

            if (this.files && this.files[0]) {
                var FR = new FileReader();
                var fileName = this.files[0].name;
                FR.addEventListener("load", function (e) { 
                    setModelWithFileData(e.target.result);
                   
                    setFileName(fileName);
                });

                FR.readAsDataURL(this.files[0]);
            }
        }

        addEventListenerOnImageChanged();

        bindingService.init(self);
        uploadService.init(self);

        
        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var importRole = "PO_Import";
            var exportRole = "PO_Export";

            document.getElementById("downloadButton").style.visibility = "hidden";
            document.getElementById("uploadButton").style.visibility = "hidden";

            setRole(res.data, "downloadButton", exportRole);
            setRole(res.data, "uploadButton", importRole);

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