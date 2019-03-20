(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.directive:Directive
     * @description
     * # navbarDirective
     * Directive of the app
     */

    angular
        .module('global-solusindo')
        .directive('userAuthParamModal', userAuthParamModal);

    function userAuthParamModal($uibModal) {
        return {
            restrict: 'A',
            scope: {
                onCallback: '='
            },
            link: function (scope, element, attrs) {
                element.on('click', function () {
                    var modalInstance = $uibModal.open({
                        templateUrl: 'app/modules/mappingUserToAuthParamEntry/modal/userAuthParamModal.html',
                        controller: 'userAuthParamModalCtrl',
                        controllerAs: 'vm',
                        windowTopClass: 'modal-list-user'
                    });

                    modalInstance.result.then(function (data) {
                        if (scope.onCallback) {
                            scope.onCallback(data);
                        }
                    }, function () { });
                });
            }
        };
    }

})();