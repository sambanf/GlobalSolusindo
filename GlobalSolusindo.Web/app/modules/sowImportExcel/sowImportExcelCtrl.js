(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:SOWImportExcelCtrl
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('SOWImportExcelCtrl', SOWImportExcelCtrl);

    SOWImportExcelCtrl.$inject = ['$scope', '$stateParams', '$state', 'SOWImportExcelUploadService', 'SOWImportExcelBindingService', 'FormControlService'];

    function SOWImportExcelCtrl($scope, sParam, $state, uploadService, bindingService, formControlService) {
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
        return self;
    }
})();