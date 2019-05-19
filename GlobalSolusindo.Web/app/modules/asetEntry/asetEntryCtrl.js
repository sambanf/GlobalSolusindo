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
        .controller('AsetEntryCtrl', AsetEntryCtrl);

    AsetEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'AsetSaveService', 'AsetBindingService', 'FormControlService', 'select2Service'];

    function AsetEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
        var self = this;
        self.stateParam = sParam;

        function setImage(data) {
            document.getElementById("photoAset").src = data;
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
            
            select2Service.liveSearch("asetKategori/search", {
                selector: '#kategoriAset_fk',
                valueMember: 'asetKategori_pk',
                displayMember: 'title',
                callback: function (data) { 
                    self.formData.asetKategoris = data;
                },
                onSelected: function (data) {
                    self.model.kategoriAset_fk = data.asetKategori_pk;
                }
            });
        });

        return self;
    }
})();