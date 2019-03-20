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
        .directive('modalMappingUserToAuthParam', modalDirective);

    function modalDirective($uibModal) {
        return {
            restrict: 'A',
            scope: {
                onCallback: '=',
                param: '='
            },
            link: function (scope, element, attrs) {
                element.on('click', function () {
                    var modalInstance = $uibModal.open({
                        templateUrl: 'app/modules/mappingUserToAuthParamEntry/mappingUserToAuthParamModal/mappingUserToAuthParamModal.html',
                        controller: 'ModalMappingUserToAuthParamCtrl',
                        controllerAs: 'vm',
                        resolve: {
                            param: function () {
                                return scope.param;
                            }
                        }
                    });

                    modalInstance.result.then(function (data) {
                        scope.onCallback(data);
                    }, function () { });
                });
            }
        };
    }

})();