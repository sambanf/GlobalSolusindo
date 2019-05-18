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
        .controller('UserEntryCtrl', UserEntryCtrl);

    UserEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'UserSaveService', 'UserBindingService', 'FormControlService', 'UserSelect2Service'];

    function UserEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, UserSelect2Service) {
        var self = this;
        self.stateParam = sParam;

        function setImage(data) {
            document.getElementById("photo").src = data;
        }

        function setModelWithImageData(data) { 
            self.model.filePhotoInBase64 = data;
        }

        function setImageFileName(fileName) {
            document.getElementById("fileName").innerHTML = fileName;
        }

        function addEventListenerOnImageChanged() { 
            document.getElementById("filePhoto").addEventListener("change", readFile);
        }

        function readFile() {

            if (this.files && this.files[0]) {
                var FR = new FileReader();
                var fileName = this.files[0].name;
                FR.addEventListener("load", function (e) {
                    setImage(e.target.result);
                    setModelWithImageData(e.target.result);
                    setImageFileName(fileName);
                });

                FR.readAsDataURL(this.files[0]);
            }
        }

        addEventListenerOnImageChanged();

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
            UserSelect2Service.init(self);
        });

        return self;
    }
})();