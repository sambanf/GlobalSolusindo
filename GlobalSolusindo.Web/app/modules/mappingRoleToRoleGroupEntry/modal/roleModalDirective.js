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
        .directive('roleModal', roleModal);

    function roleModal($uibModal) {
        return {
            restrict: 'A',
            scope: {
                onCallback: '='
            },
            link: function (scope, element, attrs) {
                element.on('click', function () {
                    var modalInstance = $uibModal.open({
                        templateUrl: 'app/modules/mappingRoleToRoleGroupEntry/modal/roleModal.html',
                        controller: 'roleModalCtrl',
                        controllerAs: 'vm',
                        windowTopClass: 'modal-list-role'
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