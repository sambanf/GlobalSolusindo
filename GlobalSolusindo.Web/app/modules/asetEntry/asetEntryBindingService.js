(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:dashboardService
     * @description
     * # dashboardService
     * Service of the app
     */

    angular
        .module('global-solusindo')
        .factory('AsetBindingService', AsetBindingService);

    AsetBindingService.$inject = ['HttpService', '$state'];

    function AsetBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('aset/form/' + id);
        };

        function setImage(data) {
            document.getElementById("photoAset").src = data;
        }

        self.init = function (ctrl) {
            controller = ctrl;
            var id = ctrl.stateParam.id;
            return new Promise(function (resolve, reject) {
                self.applyBinding(id).then(function (res) {
                    controller.formData = res.data.formData;
                    controller.model = res.data.model;
                    if (controller.model && controller.model.filePhotoInBase64) {
                        setImage(controller.model.filePhotoInBase64);
                    }
                    controller.formControls = res.data.formControls;
                    resolve(res);
                });
            });
        };

        return self;
    }

})();