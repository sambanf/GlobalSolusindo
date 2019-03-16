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
        .directive('scroll', scrollDirective);

    function scrollDirective() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var el = angular.element(element);
                el.bind("scroll", function () {
                    if (el.scrollTop() >= 100) {
                        console.log('Scrolled below header.');
                    } else {
                        console.log('Header is in view.');
                    }
                });
            }
        };
    }
})();