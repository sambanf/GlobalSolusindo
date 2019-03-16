(function () {
    'use strict';

	/**
	 * @ngdoc configuration file
	 * @name app.config:config
	 * @description
	 * # Config and run block
	 * Configutation of the app
	 */


    angular
        .module('global-solusindo-app')
        .config(configure)
        .run(runBlock);

    configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

    function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

        $locationProvider.hashPrefix('!');

        // This is required for Browser Sync to work poperly
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $urlRouterProvider
            .otherwise('/');

    }

    runBlock.$inject = ['$rootScope', '$http', '$cookies', '$transitions', '$state', '$timeout', 'PendingRequest', '$uibModalStack'];

    function runBlock($rootScope, $http, $cookies, $transitions, $state, $timeout, PendingRequest, $uibModalStack) {
        'use strict';

        $transitions.onStart({}, function (trans) {
            PendingRequest.cancelAll();
            $uibModalStack.dismissAll();
            var state = trans._targetState._definition.name;
            $rootScope.stateName = state;
            if (state == 'login') {
                //if ($cookies.get('Token')) {
                //    $timeout(function () {
                //        $state.go('app.dashboard');
                //        return false;
                //    });
                //}
            }

            // if ($cookies.get('Token') == undefined) {
            //     $timeout(function () {
            //         $state.go('login');
            //         return false;
            //     });
            // }
            console.log();
        });
    }
})();