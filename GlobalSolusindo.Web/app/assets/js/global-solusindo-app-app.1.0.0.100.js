/*!
* global-solusindo-app - v1.0.0 - MIT LICENSE 2019-03-22. 
* @author Wizzytech
*/
(function() {
	'use strict';

	/**
	* @ngdoc index
	* @name app
	* @description
	* # app
	*
	* Main module of the application.
	*/
	angular.module('global-solusindo', []);

    angular.module('global-solusindo-app', [
        'ui.router',
        'ngResource',
        'ngAria',
        'ui.bootstrap',
        'ngCookies',
        'ngAnimate',
        'ngTouch',
        'ngSanitize',
        'ncy-angular-breadcrumb',
        'ui.layout',
        'ui.select',
        'datatables',
        'datatables.scroller',
        'datatables.select',
        'datatables.fixedcolumns',
        'angular-fancytree',
        'daterangepicker',
        'ngStorage',
        'ngTagsInput',
		//'Alertify',
        'checklist-model',
		'global-solusindo'
	]);
})();

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
                if ($cookies.get('token')) {
                    $timeout(function () {
                        $state.go('app.dashboard');
                        return false;
                    });
                }
            }

             if ($cookies.get('token') == undefined) {
                 $timeout(function () {
                     $state.go('login');
                     return false;
                 });
             }
            console.log();
        });
    }
})();
(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:dashboardModule
	 * @description
	 * # dashboardModule
	 * Module of the app
	 */

  	angular.module('global-solusindo', []);

})();

'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.asetList', {
                url: '/asetList',
                templateUrl: 'app/modules/aset/aset.html',
                controller: 'AsetCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Aset'
                }
            });
    }]);
'use strict';

/**
 * @ngdoc function
 * @name app.route:orderRoute
 * @description
 * # dashboardRoute
 * Route of the app
 */

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.asetEntry', {
                url: '/asetEntry/:id',
                templateUrl: 'app/modules/asetEntry/asetEntry.html',
                controller: 'AsetEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Aset Entry'
                }
            });
    }]);
'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.asetKategoriList', {
                url: '/asetKategoriList',
                templateUrl: 'app/modules/asetKategori/asetKategori.html',
                controller: 'AsetKategoriCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Aset Kategori'
                }
            });
    }]);
'use strict';

/**
 * @ngdoc function
 * @name app.route:orderRoute
 * @description
 * # dashboardRoute
 * Route of the app
 */

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.asetKategoriEntry', {
                url: '/asetKategoriEntry/:id',
                templateUrl: 'app/modules/asetKategoriEntry/asetKategoriEntry.html',
                controller: 'AsetKategoriEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Aset Kategori Entry'
                }
            });
    }]);
'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.assetList', {
                url: '/asset-list',
                templateUrl: 'app/modules/asset/asset.html',
                controller: 'AssetCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Asset'
                }
            });
    }]);
'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.authParamList', {
                url: '/authParamList',
                templateUrl: 'app/modules/authParam/authParam.html',
                controller: 'AuthParamCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'AuthParam'
                }
            });
    }]);
'use strict';

/**
 * @ngdoc function
 * @name app.route:orderRoute
 * @description
 * # dashboardRoute
 * Route of the app
 */

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.authParamEntry', {
                url: '/authParamEntry/:id',
                templateUrl: 'app/modules/authParamEntry/authParamEntry.html',
                controller: 'AuthParamEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Auth Param Entry'
                }
            });
    }]);
'use strict';

/**
 * @ngdoc function
 * @name app.route:dashboardRoute
 * @description
 * # dashboardRoute
 * Route of the app
 */

angular.module('global-solusindo')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('app.dashboard', {
				url:'/',
				templateUrl: 'app/modules/dashboard/dashboard.html',
				controller: 'DashboardCtrl',
				controllerAs: 'db',
				ncyBreadcrumb: {
                    label: 'Dashboard'
                },
			});
		
	}]);

'use strict';

/**
 * @ngdoc function
 * @name app.route:orderRoute
 * @description
 * # dashboardRoute
 * Route of the app
 */

angular.module('global-solusindo')
	.config(['$stateProvider', '$breadcrumbProvider', function ($stateProvider, $breadcrumbProvider) {

		$breadcrumbProvider.setOptions({
			prefixStateName: 'app',
			includeAbstract: true,
			template: '<li class="breadcrumb-item" ng-repeat="step in steps" ng-class="{active: $last}" ng-switch="$last || !!step.abstract"><a ng-switch-when="false" href="{{step.ncyBreadcrumbLink}}">{{step.ncyBreadcrumbLabel}}</a><span ng-switch-when="true">{{step.ncyBreadcrumbLabel}}</span></li>'
		});
		
		$stateProvider
			.state('app', {
				templateUrl: 'app/modules/layouts/app.html',
				abstract: true,
				controller: 'appCtrl',
				controllerAs: 'vm',
				ncyBreadcrumb: {
					label: 'App'
				}
			})
			.state('app.master', {
				abstract: true,
				ncyBreadcrumb: {
					label: 'Master'
				},
			})
			.state('app.activities', {
				abstract: true,
				ncyBreadcrumb: {
					label: 'Activities'
				},
			});

	}]);
'use strict';

/**
 * @ngdoc function
 * @name app.route:dashboardRoute
 * @description
 * # dashboardRoute
 * Route of the app
 */

angular.module('global-solusindo')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'app/modules/login/login.html',
                controller: 'LoginCtrl',
				controllerAs: 'login'
			});

	}]);
'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.mappingRoleToRoleGroupList', {
                url: '/mappingRoleToRoleGroupList',
                templateUrl: 'app/modules/mappingRoleToRoleGroup/mappingRoleToRoleGroup.html',
                controller: 'MappingRoleToRoleGroupCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Mapping Role To Role Group'
                }
            });
    }]);
'use strict';

/**
 * @ngdoc function
 * @name app.route:orderRoute
 * @description
 * # dashboardRoute
 * Route of the app
 */

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.mappingRoleToRoleGroupEntry', {
                url: '/mappingRoleToRoleGroupEntry/:id',
                templateUrl: 'app/modules/mappingRoleToRoleGroupEntry/mappingRoleToRoleGroupEntry.html',
                controller: 'MappingRoleToRoleGroupEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Mapping Role To Role Group Entry'
                }
            });
    }]);
'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.mappingUserToAuthParamList', {
                url: '/mappingUserToAuthParamList',
                templateUrl: 'app/modules/mappingUserToAuthParam/mappingUserToAuthParam.html',
                controller: 'MappingUserToAuthParamCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Mapping User To Auth Param'
                }
            });
    }]);
'use strict';

/**
 * @ngdoc function
 * @name app.route:orderRoute
 * @description
 * # dashboardRoute
 * Route of the app
 */

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.mappingUserToAuthParamEntry', {
                url: '/mappingUserToAuthParamEntry/:id',
                templateUrl: 'app/modules/mappingUserToAuthParamEntry/mappingUserToAuthParamEntry.html',
                controller: 'MappingUserToAuthParamEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Mapping User To Auth Param Entry'
                }
            });
    }]);
'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.mappingUserToRoleGroupList', {
                url: '/mappingUserToRoleGroupList',
                templateUrl: 'app/modules/mappingUserToRoleGroup/mappingUserToRoleGroup.html',
                controller: 'MappingUserToRoleGroupCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Mapping User To Role Group'
                }
            });
    }]);
'use strict';

/**
 * @ngdoc function
 * @name app.route:orderRoute
 * @description
 * # dashboardRoute
 * Route of the app
 */

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.mappingUserToRoleGroupEntry', {
                url: '/mappingUserToRoleGroupEntry/:id',
                templateUrl: 'app/modules/mappingUserToRoleGroupEntry/mappingUserToRoleGroupEntry.html',
                controller: 'MappingUserToRoleGroupEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Mapping User To Role Group Entry'
                }
            });
    }]);
'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.positionList', {
                url: '/positionList',
                templateUrl: 'app/modules/position/position.html',
                controller: 'PositionCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Position'
                }
            });
    }]);
'use strict';

/**
 * @ngdoc function
 * @name app.route:orderRoute
 * @description
 * # dashboardRoute
 * Route of the app
 */

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.positionEntry', {
                url: '/positionEntry/:id',
                templateUrl: 'app/modules/positionEntry/positionEntry.html',
                controller: 'PositionEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Position Entry'
                }
            });
    }]);
'use strict';

/**
 * @ngdoc function
 * @name app.route:orderRoute
 * @description
 * # dashboardRoute
 * Route of the app
 */

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.role-entry', {
                url: '/role-entry/:id',
                templateUrl: 'app/modules/role-entry/role-entry.html',
                controller: 'RoleEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Role Entry'
                }
            });
    }]);
'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.role-list', {
                url: '/role-list',
                templateUrl: 'app/modules/role/role.html',
                controller: 'RoleCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Role'
                }
            });
    }]);
'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.roleGroupList', {
                url: '/roleGroupList',
                templateUrl: 'app/modules/roleGroup/roleGroup.html',
                controller: 'RoleGroupCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Role Group'
                }
            });
    }]);
'use strict';

/**
 * @ngdoc function
 * @name app.route:orderRoute
 * @description
 * # dashboardRoute
 * Route of the app
 */

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.roleGroupEntry', {
                url: '/roleGroupEntry/:id',
                templateUrl: 'app/modules/roleGroupEntry/roleGroupEntry.html',
                controller: 'RoleGroupEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Role Group Entry'
                }
            });
    }]);
'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.userList', {
                url: '/userList',
                templateUrl: 'app/modules/user/user.html',
                controller: 'UserCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'User'
                }
            });
    }]);
'use strict';

/**
 * @ngdoc function
 * @name app.route:orderRoute
 * @description
 * # dashboardRoute
 * Route of the app
 */

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.userEntry', {
                url: '/userEntry/:id',
                templateUrl: 'app/modules/userEntry/userEntry.html',
                controller: 'UserEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'User Entry'
                }
            });
    }]);
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('AsetCtrl', AsetCtrl);

    AsetCtrl.$inject = ['$scope', '$state', 'asetDtService', 'asetDeleteService', 'asetViewService'];

    function AsetCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();
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

    AsetEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'AsetSaveService', 'AsetBindingService', 'FormControlService'];

    function AsetEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
        });

        return self;
    }
})();
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('AsetKategoriCtrl', AsetKategoriCtrl);

    AsetKategoriCtrl.$inject = ['$scope', '$state', 'asetKategoriDtService', 'asetKategoriDeleteService', 'asetKategoriViewService'];

    function AsetKategoriCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();
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
        .controller('AsetKategoriEntryCtrl', AsetKategoriEntryCtrl);

    AsetKategoriEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'AsetKategoriSaveService', 'AsetKategoriBindingService', 'FormControlService'];

    function AsetKategoriEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
        });

        return self;
    }
})();
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('AssetCtrl', AssetCtrl);

    AssetCtrl.$inject = ['$scope', '$state', 'roleDtService', 'roleDeleteService', 'roleViewService'];

    function AssetCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();
(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:orderCtrl
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('AssetModalCtrl', AssetModal);

    AssetModal.$inject = ['$scope', '$uibModalInstance', 'HttpService', 'MappingRoleToRoleGroupBindingModalService', 'param'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function AssetModal($scope, $uibModalInstance, HttpService, bindingService, param) {
        /*jshint validthis: true */
        var self = this;
        var http = HttpService;

        bindingService.init(self).then(function (res) {
            console.log(self.model);
        });

        self.ok = function () {
        //    var result = [];
        //    self.model.roles.forEach(function (i) {
        //        result.push({
        //            roleGroup_pk: param.id,
        //            role_pk: i.role_pk
        //        });
        //    });

        //    http.post('mappingUserToRoleGroup/bulk', result);
            $uibModalInstance.close();
        };

        self.cancel = function () {
            $uibModalInstance.close();
        };


        return self;
    }
})();
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('AuthParamCtrl', AuthParamCtrl);

    AuthParamCtrl.$inject = ['$scope', '$state', 'authParamDtService', 'authParamDeleteService', 'authParamViewService'];

    function AuthParamCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();
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
        .controller('AuthParamEntryCtrl', AuthParamEntryCtrl);

    AuthParamEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'AuthParamSaveService', 'AuthParamBindingService', 'FormControlService'];

    function AuthParamEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
        });

        return self;
    }
})();
(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:dashboardCtrl
	* @description
	* # dashboardCtrl
	* Controller of the app
	*/

  	angular
		.module('global-solusindo')
		.controller('DashboardCtrl', Dashboard);

		Dashboard.$inject = ['$scope'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Dashboard($scope) {
			/*jshint validthis: true */
			var db = this;

		}
})();

(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:SidebarCtrl
     * @description
     * # NavBarCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo-app')
        .controller('appCtrl', App);

    App.$inject = ['$rootScope', '$scope'];

    function App($rootScope, $scope) {
        var vm = this;

        vm.layout = {
            one: false,
            four: false
        };

        vm.toggle = function (which) {
            vm.layout[which] = !vm.layout[which];
        };

        return vm;
    }

})();
(function () {
    'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:NavBarCtrl
	 * @description
	 * # NavBarCtrl
	 * Controller of the app
	 */

    angular
        .module('global-solusindo')
        .controller('NavBarCtrl', NavBar);

    NavBar.$inject = ['MenuService', '$cookies', '$localStorage', '$state', '$window', 'HttpService'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

    function NavBar(MenuService, $cookies, localStorage, state, $window, HttpService) {

        /*jshint validthis: true */

        var nav = this;
        nav.user = JSON.parse($window.localStorage.getItem('user'));
        //nav.user = $cookies.getAll();
        //console.log(nav.user);

        nav.logout = function () {
            HttpService.login('/logout', {}).then(function (response) {

            });

            $cookies.remove('Token');
            $cookies.remove('User');
            localStorage.$reset();
            state.go('login');
            $window.localStorage.removeItem('userMenu');
            $window.localStorage.removeItem('user');
        }
        // vm.toggle = function () {
        //     $('#toggle').click();
        // };

        return nav;
    }

})();
(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:SidebarCtrl
     * @description
     * # NavBarCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('sidebarCtrl', Sidebar);

    Sidebar.$inject = ['$scope', 'fancytreeFactory', 'SidebarService', '$localStorage', '$window', '$state', '$compile'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function Sidebar($scope, fancytreeFactory, SidebarService, localStorage, $window, $state, $compile) {
        /*jshint validthis: true */
        var vm = this;

        vm.menu = [{
            "title": "homepage",
            "path": "homepage",
            "icon": "fas fa-chart-line"
        },
        {
            "title": "user management",
            "path": "",
            "icon": "fas fa-chart-line",
            "children": [
                {
                    "title": "user",
                    "path": "app.userList",
                    "icon": "fas fa-chart-line"
                },
                {
                    "title": "role",
                    "path": "homepage",
                    "icon": "fas fa-chart-line"
                }, {
                    "title": "role group",
                    "path": "app.roleGroup",
                    "icon": "fas fa-chart-line"
                },
                {
                    "title": "mapping role to role group",
                    "path": "homepage",
                    "icon": "fas fa-chart-line"
                },
                {
                    "title": "mapping user to role group",
                    "path": "app.mappingRoleToRoleGroupList",
                    "icon": "fas fa-chart-line"
                },
                {
                    "title": "auth param",
                    "path": "app.authParam",
                    "icon": "fas fa-chart-line"
                },
                {
                    "title": "mapping user to auth param",
                    "path": "app.mappingRoleToRoleGroup",
                    "icon": "fas fa-chart-line"
                },
                {
                    "title": "Position",
                    "path": "app.positionList",
                    "icon": "fas fa-chart-line"
                },
            ]
        },
        {
            "title": "master data",
            "path": "homepage",
            "icon": "fas fa-chart-line",
            "children": [{
                "title": "BTS",
                "path": "homepage",
                "icon": "fas fa-chart-line"
            },
            {
                "title": "Asset Kategori",
                "path": "app.asetKategoriList",
                "icon": "fas fa-chart-line"
            },
            {
                "title": "Asset",
                "path": "homepage",
                "icon": "fas fa-chart-line"
            },
            {
                "title": "sow",
                "path": "homepage",
                "icon": "fas fa-chart-line"
            }
            ]
        },
        {
            "title": "approval izin/ cuti",
            "path": "homepage",
            "icon": "fas fa-chart-line"
        },
        {
            "title": "report",
            "path": "homepage",
            "icon": "fas fa-chart-line",
            "children": [{
                "title": "timesheet engineer",
                "path": "homepage",
                "icon": "fas fa-chart-line"
            },
            {
                "title": "task engineer",
                "path": "homepage",
                "icon": "fas fa-chart-line"
            },
            {
                "title": "daily task",
                "path": "homepage",
                "icon": "fas fa-chart-line"
            }
            ]
        }
        ];
        return vm;
    }

})();
(function () {
    'use strict';

	/**
	* @ngdoc function
	* @name app.controller:loginCtrl
	* @description
	* # loginCtrl
	* Controller of the app
	*/

    angular
        .module('global-solusindo')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$state', 'serverErrorService', '$localStorage', '$cookies', 'uiService', 'HttpService', '$window'];

    /*
    * recommend
    * Using function declarations
    * and bindable members up top.
    */

    function LoginCtrl($scope, $state, serverError, localStorage, $cookies, ui, http, $window) {
        /*jshint validthis: true */
        var self = this;

        self.model = {};

        function setTokenInfo(token) {
            $cookies.put('token', token);
        }

        function setUserInfo(userInfo) {
            $window.localStorage.setItem('user', userInfo);
        }

        function goToDashboard() {
            $state.go('app.dashboard');
        }

        angular.element('#loginButton').on('click', function () {
            http.post('token', self.model)
                .then(function (res) {
                    if (res.success) {
                        ui.alert.success(res.message);
                        setTokenInfo(res.token);
                        setUserInfo(res.model);
                        goToDashboard();
                    } else {
                        serverError.show(res);
                    }
                });
        });

        return self;
    }
})();

(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('MappingRoleToRoleGroupCtrl', MappingRoleToRoleGroupCtrl);

    MappingRoleToRoleGroupCtrl.$inject = ['$scope', '$state', 'mappingRoleToRoleGroupDtService', 'mappingRoleToRoleGroupViewService'];

    function MappingRoleToRoleGroupCtrl($scope, $state, dtService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        viewService.init(self);

        return self;
    }
})();
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
        .controller('MappingRoleToRoleGroupEntryCtrl', MappingRoleToRoleGroupEntryCtrl);

    MappingRoleToRoleGroupEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'MappingRoleToRoleGroupSaveService', 'MappingRoleToRoleGroupBindingService', 'FormControlService', 'mappingRoleToRoleGroupEntryDtService'];

    function MappingRoleToRoleGroupEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, dtService) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            //formControlService.setFormControl(self);
            //saveService.init(self);
            dtService.init(self);
        });

        self.roleModalCallback = function () {
            self.roleDt.draw();
        };

        return self;
    }
})();
(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:orderCtrl
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('ModalMappingRoleToRoleGroupCtrl', ModalMappingRoleToRoleGroup);

    ModalMappingRoleToRoleGroup.$inject = ['$scope', '$uibModalInstance', 'HttpService', 'MappingRoleToRoleGroupBindingModalService', 'param'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function ModalMappingRoleToRoleGroup($scope, $uibModalInstance, HttpService, bindingService, param) {
        /*jshint validthis: true */
        var self = this;
        var http = HttpService;

        bindingService.init(self).then(function (res) {
            console.log(self.model);
        });

        self.ok = function () {
            var result = [];
            self.model.roles.forEach(function (i) {
                result.push({
                    roleGroup_pk: param.id,
                    role_pk: i.role_pk
                });
            });

            http.post('mappingRoleToRoleGroup/bulk', result);
            $uibModalInstance.close();
        };

        self.cancel = function () {
            $uibModalInstance.close();
        };


        return self;
    }
})();
(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:roleModal
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('roleModalCtrl', roleModalCtrl);

    roleModalCtrl.$inject = ['$scope', '$uibModalInstance', 'roleModalBindingService', '$stateParams', 'roleModalSaveService', 'roleModalCancelService'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */
    function roleModalCtrl($scope, $uibModalInstance, bindingService, sParam, saveService, cancelService) {
        var self = this;
        self.stateParam = sParam;
        self.modalInstance = $uibModalInstance;

        bindingService.init(self).then(function (res) {
            saveService.init(self);
            cancelService.init(self);
        });
      
        $scope.$on('ui.layout.resize', function (e, beforeContainer, afterContainer) {
            ctrl.datatable.columns.adjust();
        });

        return self;
    }
})();
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('MappingUserToAuthParamCtrl', MappingUserToAuthParamCtrl);

    MappingUserToAuthParamCtrl.$inject = ['$scope', '$state', 'mappingUserToAuthParamDtService', 'mappingUserToAuthParamViewService'];

    function MappingUserToAuthParamCtrl($scope, $state, dtService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        viewService.init(self);

        return self;
    }
})();
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
        .controller('MappingUserToAuthParamEntryCtrl', MappingUserToAuthParamEntryCtrl);

    MappingUserToAuthParamEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'MappingUserToAuthParamSaveService', 'MappingUserToAuthParamBindingService', 'FormControlService', 'mappingUserToAuthParamEntryDtService', 'select2Service', 'mappingUserToAuthParamDeleteService'];

    function MappingUserToAuthParamEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, dtService, select2Service, deleteService) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            dtService.init(self);
            deleteService.init(self);
        });

        self.userAuthParamModalCallback = function () {
            self.userDt.draw();
        };

        return self;
    }
})();
(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:userAuthParamModal
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('userAuthParamModalCtrl', userAuthParamModalCtrl);

    userAuthParamModalCtrl.$inject = ['$scope', '$uibModalInstance', 'userAuthParamModalBindingService', '$stateParams', 'userAuthParamModalSaveService', 'userAuthParamModalCancelService', 'select2Service'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */
    function userAuthParamModalCtrl($scope, $uibModalInstance, bindingService, sParam, saveService, cancelService, select2Service) {
        var self = this;
        self.stateParam = sParam;
        self.modalInstance = $uibModalInstance;

        self.formData = {};
        self.formData.users = [{
            user_pk: "1",
            name: "sadfasdf"
        }];

        self.model = {
            authParam_pk: sParam.id,
            user_pk: 0
        };

        angular.element(document).ready(function () {
            select2Service.liveSearch("user/search", {
                selector: '#user_pk',
                valueMember: 'user_pk',
                displayMember: 'name',
                callback: function (data) {
                    self.formData.users = data;
                },
                onSelected: function (data) {
                    self.model.user_pk = data.user_pk;
                }
            });
        });

        bindingService.init(self).then(function (res) {
            saveService.init(self);
            cancelService.init(self);
        });

        $scope.$on('ui.layout.resize', function (e, beforeContainer, afterContainer) {
            ctrl.datatable.columns.adjust();
        });

        return self;
    }
})();
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('MappingUserToRoleGroupCtrl', MappingUserToRoleGroupCtrl);

    MappingUserToRoleGroupCtrl.$inject = ['$scope', '$state', 'mappingUserToRoleGroupDtService', 'mappingUserToRoleGroupViewService'];

    function MappingUserToRoleGroupCtrl($scope, $state, dtService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        viewService.init(self);

        return self;
    }
})();
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
        .controller('MappingUserToRoleGroupEntryCtrl', MappingUserToRoleGroupEntryCtrl);

    MappingUserToRoleGroupEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'MappingUserToRoleGroupSaveService', 'MappingUserToRoleGroupBindingService', 'FormControlService', 'mappingUserToRoleGroupEntryDtService', 'select2Service', 'mappingUserToRoleGroupDeleteService'];

    function MappingUserToRoleGroupEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, dtService, select2Service, deleteService) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            dtService.init(self);
            deleteService.init(self);
        });

        self.userModalCallback = function () {
            self.userDt.draw();
        };

        return self;
    }
})();
(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:userModal
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('userModalCtrl', userModalCtrl);

    userModalCtrl.$inject = ['$scope', '$uibModalInstance', 'userModalBindingService', '$stateParams', 'userModalSaveService', 'userModalCancelService', 'select2Service'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */
    function userModalCtrl($scope, $uibModalInstance, bindingService, sParam, saveService, cancelService, select2Service) {
        var self = this;
        self.stateParam = sParam;
        self.modalInstance = $uibModalInstance;

        self.formData = {};
        self.formData.users = [{
            user_pk: "1",
            name: "sadfasdf"
        }];

        self.model = {
            roleGroup_pk: sParam.id,
            user_pk: 0
        };

        angular.element(document).ready(function () {
            select2Service.liveSearch("user/search", {
                selector: '#user_pk',
                valueMember: 'user_pk',
                displayMember: 'name',
                callback: function (data) {
                    self.formData.users = data;
                },
                onSelected: function (data) {
                    self.model.user_pk = data.user_pk;
                }
            });
        });

        bindingService.init(self).then(function (res) {
            saveService.init(self);
            cancelService.init(self);
        });

        $scope.$on('ui.layout.resize', function (e, beforeContainer, afterContainer) {
            ctrl.datatable.columns.adjust();
        });

        return self;
    }
})();
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('PositionCtrl', PositionCtrl);

    PositionCtrl.$inject = ['$scope', '$state', 'positionDtService', 'positionDeleteService', 'positionViewService'];

    function PositionCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();
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
        .controller('PositionEntryCtrl', PositionEntryCtrl);

    PositionEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'PositionSaveService', 'PositionBindingService', 'FormControlService'];

    function PositionEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
        });

        return self;
    }
})();
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
        .controller('RoleEntryCtrl', RoleEntryCtrl);

    RoleEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'RoleSaveService', 'RoleBindingService', 'FormControlService'];

    function RoleEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
        });

        return self;
    }
})();
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('RoleCtrl', RoleCtrl);

    RoleCtrl.$inject = ['$scope', '$state', 'roleDtService', 'roleDeleteService', 'roleViewService'];

    function RoleCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('RoleGroupCtrl', RoleGroupCtrl);

    RoleGroupCtrl.$inject = ['$scope', '$state', 'roleGroupDtService', 'roleGroupDeleteService', 'roleGroupViewService'];

    function RoleGroupCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();
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
        .controller('RoleGroupEntryCtrl', RoleGroupEntryCtrl);

    RoleGroupEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'RoleGroupSaveService', 'RoleGroupBindingService', 'FormControlService'];

    function RoleGroupEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
        });

        return self;
    }
})();
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('UserCtrl', UserCtrl);

    UserCtrl.$inject = ['$scope', '$state', 'userDtService', 'userDeleteService', 'userViewService'];

    function UserCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        return self;
    }
})();
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

    UserEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'UserSaveService', 'UserBindingService', 'FormControlService', 'select2Service'];

    function UserEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);

            select2Service.liveSearch("position/search", {
                selector: '#position_fk',
                valueMember: 'position_pk',
                displayMember: 'name',
                callback: function (data) {
                    self.formData.positions = data;
                },
                onSelected: function (data) {
                    self.model.position_fk = data.position_pk;
                }
            });
        });

        return self;
    }
})();
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
        .factory('asetDeleteService', aset);

    aset.$inject = ['HttpService', 'uiService'];

    function aset(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('aset', ids).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message);
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        self.delete = function (data) {
            var ids = [data.aset_pk];
            ui.alert.confirm("Are you sure want to delete aset '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].aset_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#aset tbody').on('click', '#delete', function () {
                var selectedRecord = controller.datatable.row($(this).parents('tr')).data();
                self.delete(selectedRecord);
            });

            //Toolbar delete button event
            angular.element('#deleteButton').on('click', function () {
                var selectedRows = controller.datatable.rows('.selected').data();
                var rowsAreSelected = selectedRows.length > 0;
                if (!rowsAreSelected) {
                    ui.alert.error('Please select the record you want to delete.');
                    return;
                }

                var selectedRecords = [];
                for (var i = 0; i < selectedRows.length; i++) {
                    selectedRecords.push(selectedRows[i]);
                }
                self.deleteMultiple(selectedRecords);
            });
        };

        return self;
    }

})();
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
        .factory('asetDtService', aset);

    aset.$inject = ['DatatableService'];

    function aset(ds) {
        var self = this;

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#aset", "aset/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "aset_pk"
                },
                {
                    "data": "asetId"
                },
                {
                    "data": "kategoriAsetName"
                },
                {
                    "data": "name"
                },
                {
                    "orderable": false,
                    "className": "text-center",
                    "render": function (data) {
                        return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success'><i class='fa fa-info'></i></button> " +
                            "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning'><i class='fas fa-pencil-alt'></i></button> " +
                            "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger'><i class='fa fa-trash-alt'></i></button>"
                    }
                }
                ]
            });
        }
        return self;
    }

})();
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
        .factory('asetViewService', asetView);

    asetView.$inject = ['HttpService', '$state', 'uiService'];

    function asetView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.asetEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#aset tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.aset_pk);
            });

            $("#aset tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["aset_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();
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

        self.init = function (ctrl) {
            controller = ctrl;
            var id = ctrl.stateParam.id;
            return new Promise(function (resolve, reject) {
                self.applyBinding(id).then(function (res) {
                    controller.model = res.data.model;
                    controller.formControls = res.data.formControls;
                    resolve(res);
                });
            });
        };

        return self;
    }

})();
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
        .factory('AsetSaveService', AsetEntry);

    AsetEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function AsetEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        self.create = function (model) {
            http.post('aset', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    $state.go('app.asetEntry', { id: res.data.model.aset_pk });
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('aset', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.save = function (model) {
            validation.clearValidationErrors({});
            if (model.aset_pk === 0) {
                return self.create(model);
            } else {
                return self.update(model);
            }
        };

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#saveButton').on('click', function () {
                self.save(controller.model);
            });
        };

        return self;
    }

})();
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
        .factory('asetKategoriDeleteService', asetKategori);

    asetKategori.$inject = ['HttpService', 'uiService'];

    function asetKategori(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('asetKategori', ids).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message);
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        self.delete = function (data) {
            var ids = [data.asetKategori_pk];
            ui.alert.confirm("Are you sure want to delete asetKategori '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].asetKategori_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#asetKategori tbody').on('click', '#delete', function () {
                var selectedRecord = controller.datatable.row($(this).parents('tr')).data();
                self.delete(selectedRecord);
            });

            //Toolbar delete button event
            angular.element('#deleteButton').on('click', function () {
                var selectedRows = controller.datatable.rows('.selected').data();
                var rowsAreSelected = selectedRows.length > 0;
                if (!rowsAreSelected) {
                    ui.alert.error('Please select the record you want to delete.');
                    return;
                }

                var selectedRecords = [];
                for (var i = 0; i < selectedRows.length; i++) {
                    selectedRecords.push(selectedRows[i]);
                }
                self.deleteMultiple(selectedRecords);
            });
        };

        return self;
    }

})();
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
        .factory('asetKategoriDtService', asetKategori);

    asetKategori.$inject = ['DatatableService'];

    function asetKategori(ds) {
        var self = this;

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#asetKategori", "asetKategori/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "asetKategori_pk"
                },
                {
                    "data": "title"
                },
                {
                    "orderable": false,
                    "className": "text-center",
                    "render": function (data) {
                        return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success'><i class='fa fa-info'></i></button> " +
                            "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning'><i class='fas fa-pencil-alt'></i></button> " +
                            "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger'><i class='fa fa-trash-alt'></i></button>"
                    }
                }
                ]
            });
        }
        return self;
    }

})();
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
        .factory('asetKategoriViewService', asetKategoriView);

    asetKategoriView.$inject = ['HttpService', '$state', 'uiService'];

    function asetKategoriView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.asetKategoriEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#asetKategori tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.asetKategori_pk);
            });

            $("#asetKategori tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["asetKategori_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();
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
        .factory('AsetKategoriBindingService', AsetKategoriBindingService);

    AsetKategoriBindingService.$inject = ['HttpService', '$state'];

    function AsetKategoriBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('asetKategori/form/' + id);
        };

        self.init = function (ctrl) {
            controller = ctrl;
            var id = ctrl.stateParam.id;
            return new Promise(function (resolve, reject) {
                self.applyBinding(id).then(function (res) {
                    controller.model = res.data.model;
                    controller.formControls = res.data.formControls;
                    resolve(res);
                });
            });
        };

        return self;
    }

})();
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
        .factory('AsetKategoriSaveService', AsetKategoriEntry);

    AsetKategoriEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function AsetKategoriEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        self.create = function (model) {
            http.post('asetKategori', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    $state.go('app.asetKategoriEntry', { id: res.data.model.asetKategori_pk });
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('asetKategori', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.save = function (model) {
            validation.clearValidationErrors({});
            if (model.asetKategori_pk === 0) {
                return self.create(model);
            } else {
                return self.update(model);
            }
        };

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#saveButton').on('click', function () {
                self.save(controller.model);
            });
        };

        return self;
    }

})();
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
        .factory('assetDeleteService', asset);

    asset.$inject = ['HttpService', 'uiService'];

    function asset(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('asset', ids).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message);
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        self.delete = function (data) {
            var ids = [data.asset_pk];
            ui.alert.confirm("Are you sure want to delete asset '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].asset_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#asset tbody').on('click', '#delete', function () {
                var selectedRecord = controller.datatable.row($(this).parents('tr')).data();
                self.delete(selectedRecord);
            });

            //Toolbar delete button event
            angular.element('#deleteButton').on('click', function () {
                var selectedRows = controller.datatable.rows('.selected').data();
                var rowsAreSelected = selectedRows.length > 0;
                if (!rowsAreSelected) {
                    ui.alert.error('Please select the record you want to delete.');
                    return;
                }

                var selectedRecords = [];
                for (var i = 0; i < selectedRows.length; i++) {
                    selectedRecords.push(selectedRows[i]);
                }
                self.deleteMultiple(selectedRecords);
            });
        };

        return self;
    }

})();
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
        .factory('assetDtService', asset);

    asset.$inject = ['DatatableService'];

    function asset(ds) {
        var self = this;

        self.init = function (ctrl) {
            return ds.init("#asset", "asset/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [1, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "asset_pk"
                },
                {
                    "data": "asset_code"
                },
                {
                    "data": "created_date"
                },
                {
                    "data": "catrgory"
                },
                {
                    "data": "name"
                },
                {
                    "orderable": false,
                    "className": "text-center",
                    "render": function (data) {
                        return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success'><i class='fa fa-info'></i></button> " +
                            "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning'><i class='fas fa-pencil-alt'></i></button> " +
                            "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger'><i class='fa fa-trash-alt'></i></button>"
                    }
                }
                ]
            });
        }
        return self;
    }

})();
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
        .factory('AssetModalService', AssetModalService);

    AssetModalService.$inject = ['HttpService', '$state'];

    function AssetModalService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function () {
            return http.get('asset/search', {
                pageIndex: 1,
                pageSize: 100
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            return new Promise(function (resolve, reject) {
                self.applyBinding().then(function (res) {
                    controller.roles = res.data.records;
                    resolve(res);
                });
            });
        };

        return self;
    }

})();
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
        .factory('assetViewService', assetView);

    assetView.$inject = ['HttpService', '$state', 'uiService'];

    function assetView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.asset-entry', {
                id: data
            })
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#asset tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.asset_pk);
            });

            $("#asset tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["asset_pk"];
                self.view(id)
            });
        }

        return self;
    }

})();
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
        .factory('authParamDeleteService', authParam);

    authParam.$inject = ['HttpService', 'uiService'];

    function authParam(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('authParam', ids).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message);
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        self.delete = function (data) {
            var ids = [data.authParam_pk];
            ui.alert.confirm("Are you sure want to delete authParam '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].authParam_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#authParam tbody').on('click', '#delete', function () {
                var selectedRecord = controller.datatable.row($(this).parents('tr')).data();
                self.delete(selectedRecord);
            });

            //Toolbar delete button event
            angular.element('#deleteButton').on('click', function () {
                var selectedRows = controller.datatable.rows('.selected').data();
                var rowsAreSelected = selectedRows.length > 0;
                if (!rowsAreSelected) {
                    ui.alert.error('Please select the record you want to delete.');
                    return;
                }

                var selectedRecords = [];
                for (var i = 0; i < selectedRows.length; i++) {
                    selectedRecords.push(selectedRows[i]);
                }
                self.deleteMultiple(selectedRecords);
            });
        };

        return self;
    }

})();
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
        .factory('authParamDtService', authParam);

    authParam.$inject = ['DatatableService'];

    function authParam(ds) {
        var self = this;

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#authParam", "authParam/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "authParam_pk"
                },
                {
                    "data": "title"
                },
                {
                    "data": "description"
                },
                {
                    "orderable": false,
                    "className": "text-center",
                    "render": function (data) {
                        return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success'><i class='fa fa-info'></i></button> " +
                            "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning'><i class='fas fa-pencil-alt'></i></button> " +
                            "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger'><i class='fa fa-trash-alt'></i></button>"
                    }
                }
                ]
            });
        }
        return self;
    }

})();
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
        .factory('authParamViewService', authParamView);

    authParamView.$inject = ['HttpService', '$state', 'uiService'];

    function authParamView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.authParamEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#authParam tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.authParam_pk);
            });

            $("#authParam tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["authParam_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();
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
        .factory('AuthParamBindingService', AuthParamBindingService);

    AuthParamBindingService.$inject = ['HttpService', '$state'];

    function AuthParamBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('authParam/form/' + id);
        };

        self.init = function (ctrl) {
            controller = ctrl;
            var id = ctrl.stateParam.id;
            return new Promise(function (resolve, reject) {
                self.applyBinding(id).then(function (res) {
                    controller.model = res.data.model;
                    controller.formControls = res.data.formControls;
                    resolve(res);
                });
            });
        };

        return self;
    }

})();
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
        .factory('AuthParamSaveService', AuthParamEntry);

    AuthParamEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function AuthParamEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        self.create = function (model) {
            http.post('authParam', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    $state.go('app.authParamEntry', { id: res.data.model.authParam_pk });
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('authParam', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.save = function (model) {
            validation.clearValidationErrors({});
            if (model.authParam_pk === 0) {
                return self.create(model);
            } else {
                return self.update(model);
            }
        };

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#saveButton').on('click', function () {
                self.save(controller.model);
            });
        };

        return self;
    }

})();
(function() {
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
		.factory('DashboardService', Dashboard);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Dashboard.$inject = ['$http'];

		function Dashboard ($http) {

		}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('global-solusindo')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {
			var menu = this;


			return menu;
		};

})();

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
		.factory('SidebarService', Sidebar);

	Sidebar.$inject = ['$http', '$state'];

	function Sidebar($http, $state) {
		var sidebar = this;

        sidebar.initSidebar = function () {
            var accordionsMenu = $('.cd-accordion-menu');

            if (accordionsMenu.length > 0) {

                accordionsMenu.each(function () {
                    var accordion = $(this);
                    accordion.on('change', 'input[type="checkbox"]', function () {
                        var checkbox = $(this);
                        (checkbox.prop('checked')) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
                    });
                });
            }
        };

		return sidebar;
	}

})();
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
        .factory('mappingRoleToRoleGroupDtService', mappingRoleToRoleGroup);

    mappingRoleToRoleGroup.$inject = ['DatatableService'];

    function mappingRoleToRoleGroup(ds) {
        var self = this;

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#mappingRoleToRoleGroup", "roleGroup/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "roleGroup_pk"
                },
                {
                    "data": "title"
                },
                {
                    "data": "description"
                },
                {
                    "orderable": false,
                    "className": "text-center",
                    "render": function (data) {
                        return "<button id='view' title='View Role' data-placement='left' class='btn btn-success'>Role</button>";
                    }
                }
                ]
            });
        };
        return self;
    }

})();
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
        .factory('mappingRoleToRoleGroupViewService', mappingRoleToRoleGroupView);

    mappingRoleToRoleGroupView.$inject = ['HttpService', '$state', 'uiService'];

    function mappingRoleToRoleGroupView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.mappingRoleToRoleGroupEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#mappingRoleToRoleGroup tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.roleGroup_pk);
            });

            $("#mappingRoleToRoleGroup tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["roleGroup_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();
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
        .factory('MappingRoleToRoleGroupBindingService', MappingRoleToRoleGroupBindingService);

    MappingRoleToRoleGroupBindingService.$inject = ['HttpService', '$state'];

    function MappingRoleToRoleGroupBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('roleGroup/form/' + id);
        };

        self.init = function (ctrl) {
            controller = ctrl;
            var id = ctrl.stateParam.id;
            return new Promise(function (resolve, reject) {
                self.applyBinding(id).then(function (res) {
                    controller.model = res.data.model;
                    controller.formControls = res.data.formControls;
                    resolve(res);
                });
            });
        };

        return self;
    }

})();
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
        .factory('mappingRoleToRoleGroupEntryDtService', mappingRoleToRoleGroupEntryDtService);

    mappingRoleToRoleGroupEntryDtService.$inject = ['DatatableService'];

    function mappingRoleToRoleGroupEntryDtService(ds) {
        var self = this;
        var controller;
        var datatable;

        self.reloadDatatable = function () {
            console.log(controller);
            controller.datatable.draw();
            console.log('finish');
        };

        self.init = function (ctrl) {
            controller = ctrl;
            var roleGroup_pk = ctrl.stateParam.id;

            var titleColumnIndex = 1;
            var dt = ds.init("#mappingRoleToRoleGroupEntry", "mappingRoleToRoleGroup/search", {
                extendRequestData: {
                    roleGroup_pk: roleGroup_pk,
                    pageIndex: 2,
                    pageSize: 5
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "roleGroup_pk"
                    },
                    //{
                    //    "orderable": false,
                    //    "data": "role_pk"
                    //},
                    {
                        "data": "roleName"
                    },
                    {
                        "data": "roleDescription"
                    },
                    //{
                    //    "orderable": false,
                    //    "className": "text-center",
                    //    "render": function (data) {
                    //        return "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger'><i class='fa fa-trash-alt'></i></button>";
                    //    }
                    //}
                ]
            });

            ctrl.roleDt = dt;
            return dt;
        };
        return self;
    }

})();
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
        .factory('MappingRoleToRoleGroupBindingModalService', MappingRoleToRoleGroupBindingModalService);

    MappingRoleToRoleGroupBindingModalService.$inject = ['HttpService', '$state'];

    function MappingRoleToRoleGroupBindingModalService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function () {
            return http.get('role/search', {
                pageIndex: 1,
                pageSize: 100
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            return new Promise(function (resolve, reject) {
                self.applyBinding().then(function (res) {
                    controller.roles = res.data.records;
                    resolve(res);
                });
            });
        };

        return self;
    }

})();
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
        .factory('MappingRoleToRoleGroupSaveService', MappingRoleToRoleGroupEntry);

    MappingRoleToRoleGroupEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function MappingRoleToRoleGroupEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        self.create = function (model) {
            http.post('mappingRoleToRoleGroup', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    $state.go('app.mappingRoleToRoleGroupEntry', { id: res.data.model.mappingRoleToRoleGroup_pk });
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('mappingRoleToRoleGroup', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                } else {
                    if (res) {
                        ui.alert.error(res.message);
                        if (res.data && res.data.errors) {
                            validation.serverValidation(res.data.errors);
                        }
                    }
                }
            });
        };

        self.save = function (model) {
            validation.clearValidationErrors({});
            if (model.mappingRoleToRoleGroup_pk === 0) {
                return self.create(model);
            } else {
                return self.update(model);
            }
        };

        //self.init = function (ctrl) {
        //    controller = ctrl;
        //    angular.element('#saveButton').on('click', function () {
        //        self.save(controller.model);
        //    });
        //};

        return self;
    }

})();
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
        .factory('roleModalBindingService', roleModalBindingService);

    roleModalBindingService.$inject = ['HttpService', '$state'];

    function roleModalBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('mappingRoleToRoleGroup/form/' + id);
        };

        self.init = function (ctrl) {
            controller = ctrl;
            var id = ctrl.stateParam.id;
            return new Promise(function (resolve, reject) {
                self.applyBinding(id).then(function (res) {
                    controller.model = res.data.model;
                    controller.formControls = res.data.formControls;
                    resolve(res);
                });
            });
        };

        return self;
    }

})();
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
        .factory('roleModalCancelService', roleModalCancelService);

    roleModalCancelService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function roleModalCancelService($state, http, ui, validation) {
        var self = this;
        var controller;
        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#cancelButton').on('click', function () {
                controller.modalInstance.close();
            });
        };

        return self;
    }
})();
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
        .factory('roleModalSaveService', roleModalSaveService);

    roleModalSaveService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function roleModalSaveService($state, http, ui, validation) {
        var self = this;
        var controller;

        self.createOrUpdate = function (model) {
            http.post('mappingRoleToRoleGroup', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    controller.modalInstance.close();
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.save = function (model) {
            validation.clearValidationErrors({});
            return self.createOrUpdate(model);
        };

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#saveButton').on('click', function () {
                self.save(controller.model);
                //console.log(controller.model);
            });
        };

        return self;
    }

})();
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
        .factory('mappingUserToAuthParamDtService', MappingUserToAuthParam);

    MappingUserToAuthParam.$inject = ['DatatableService'];

    function MappingUserToAuthParam(ds) {
        var self = this;

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#mappingUserToAuthParam", "authParam/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "authParam_pk"
                },
                {
                    "data": "title"
                },
                {
                    "data": "description"
                },
                {
                    "orderable": false,
                    "className": "text-center",
                    "render": function (data) {
                        return "<button id='view' title='View Users' data-placement='left' class='btn btn-success'>User</button>";
                    }
                }
                ]
            });
        }
        return self;
    }

})();
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
        .factory('mappingUserToAuthParamViewService', mappingUserToAuthParamView);

    mappingUserToAuthParamView.$inject = ['HttpService', '$state', 'uiService'];

    function mappingUserToAuthParamView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.mappingUserToAuthParamEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#mappingUserToAuthParam tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.authParam_pk);
            });

            $("#mappingUserToAuthParam tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["authParam_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();
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
        .factory('MappingUserToAuthParamBindingService', MappingUserToAuthParamBindingService);

    MappingUserToAuthParamBindingService.$inject = ['HttpService', '$state'];

    function MappingUserToAuthParamBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('authParam/form/' + id);
        };

        self.init = function (ctrl) {
            controller = ctrl;
            var id = ctrl.stateParam.id;
            return new Promise(function (resolve, reject) {
                self.applyBinding(id).then(function (res) {
                    controller.model = res.data.model;
                    controller.formControls = res.data.formControls;
                    resolve(res);
                });
            });
        };

        return self;
    }

})();
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
        .factory('mappingUserToAuthParamDeleteService', mappingUserToAuthParam);

    mappingUserToAuthParam.$inject = ['HttpService', 'uiService'];

    function mappingUserToAuthParam(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(data) {
            return http.delete('mappingUserToAuthParam', data).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.userDt.draw();
                    ui.alert.success(res.message);
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        self.delete = function (data) {
            ui.alert.confirm("Are you sure want to delete selected user '" + data.userUsername + "'?", function () {
                return deleteRecords(data);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#mappingUserToAuthParam tbody').on('click', '#delete', function () {
                var selectedRecord = controller.userDt.row($(this).parents('tr')).data();
                self.delete(selectedRecord);
            });
        };

        return self;
    }

})();
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
        .factory('mappingUserToAuthParamEntryDtService', mappingUserToAuthParamEntryDtService);

    mappingUserToAuthParamEntryDtService.$inject = ['DatatableService'];

    function mappingUserToAuthParamEntryDtService(ds) {
        var self = this;
        var controller;
        var datatable;

        self.reloadDatatable = function () {
            console.log(controller);
            controller.datatable.draw();
            console.log('finish');
        };

        self.init = function (ctrl) {
            controller = ctrl;
            var authParam_pk = ctrl.stateParam.id;

            var titleColumnIndex = 1;
            var dt = ds.init("#mappingUserToAuthParam", "mappingUserToAuthParam/search", {
                extendRequestData: {
                    authParam_pk: authParam_pk,
                    pageIndex: 2,
                    pageSize: 5
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "authParam_pk"
                    },
                    {
                        "orderable": false,
                        "data": "user_pk"
                    },
                    {
                        "data": "userCode"
                    },
                    {
                        "data": "userUsername"
                    },
                    {
                        "data": "userName"
                    },
                    {
                        "data": "positionName"
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger'><i class='fa fa-trash-alt'></i></button>";
                        }
                    }
                ]
            });

            ctrl.userDt = dt;
            return dt;
        };
        return self;
    }

})();
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
        .factory('MappingUserToAuthParamSaveService', MappingUserToAuthParamEntry);

    MappingUserToAuthParamEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function MappingUserToAuthParamEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        self.create = function (model) {
            http.post('mappingUserToAuthParam', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    $state.go('app.mappingUserToAuthParamEntry', { id: res.data.model.mappingUserToAuthParam_pk });
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('mappingUserToAuthParam', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.save = function (model) {
            validation.clearValidationErrors({});
            if (model.mappingUserToAuthParam_pk === 0) {
                return self.create(model);
            } else {
                return self.update(model);
            }
        };

        //self.init = function (ctrl) {
        //    controller = ctrl;
        //    angular.element('#saveButton').on('click', function () {
        //        self.save(controller.model);
        //    });
        //};

        return self;
    }

})();
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
        .factory('userAuthParamModalBindingService', userAuthParamModalBindingService);

    userAuthParamModalBindingService.$inject = ['HttpService', '$state'];

    function userAuthParamModalBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('mappingUserToAuthParam/form/' + id);
        };

        self.init = function (ctrl) {
            controller = ctrl;
            var id = ctrl.stateParam.id;
            return new Promise(function (resolve, reject) {
                self.applyBinding(id).then(function (res) {
                    if (res.success) {
                        controller.model = res.data.model;
                        controller.formControls = res.data.formControls;
                    }
                    resolve(res);
                });
            });
        };

        return self;
    }

})();
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
        .factory('userAuthParamModalCancelService', userAuthParamModalCancelService);

    userAuthParamModalCancelService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function userAuthParamModalCancelService($state, http, ui, validation) {
        var self = this;
        var controller;
        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#cancelButton').on('click', function () {
                controller.modalInstance.close();
            });
        };

        return self;
    }
})();
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
        .factory('userAuthParamModalSaveService', userAuthParamModalSaveService);

    userAuthParamModalSaveService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function userAuthParamModalSaveService($state, http, ui, validation) {
        var self = this;
        var controller;

        self.createOrUpdate = function (model) {
            http.post('mappingUserToAuthParam', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    controller.modalInstance.close();
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.save = function (model) {
            validation.clearValidationErrors({});
            return self.createOrUpdate(model);
        };

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#saveButton').on('click', function () {
                self.save(controller.model);
                //console.log(controller.model);
            });
        };

        return self;
    }

})();
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
        .factory('mappingUserToRoleGroupDtService', MappingUserToRoleGroup);

    MappingUserToRoleGroup.$inject = ['DatatableService'];

    function MappingUserToRoleGroup(ds) {
        var self = this;

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#mappingUserToRoleGroup", "roleGroup/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "roleGroup_pk"
                },
                {
                    "data": "title"
                },
                {
                    "data": "description"
                },
                {
                    "orderable": false,
                    "className": "text-center",
                    "render": function (data) {
                        return "<button id='view' title='View Users' data-placement='left' class='btn btn-success'>User</button>";
                    }
                }
                ]
            });
        }
        return self;
    }

})();
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
        .factory('mappingUserToRoleGroupViewService', mappingUserToRoleGroupView);

    mappingUserToRoleGroupView.$inject = ['HttpService', '$state', 'uiService'];

    function mappingUserToRoleGroupView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.mappingUserToRoleGroupEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#mappingUserToRoleGroup tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.roleGroup_pk);
            });

            $("#mappingUserToRoleGroup tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["roleGroup_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();
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
        .factory('MappingUserToRoleGroupBindingService', MappingUserToRoleGroupBindingService);

    MappingUserToRoleGroupBindingService.$inject = ['HttpService', '$state'];

    function MappingUserToRoleGroupBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('roleGroup/form/' + id);
        };

        self.init = function (ctrl) {
            controller = ctrl;
            var id = ctrl.stateParam.id;
            return new Promise(function (resolve, reject) {
                self.applyBinding(id).then(function (res) {
                    controller.model = res.data.model;
                    controller.formControls = res.data.formControls;
                    resolve(res);
                });
            });
        };

        return self;
    }

})();
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
        .factory('mappingUserToRoleGroupDeleteService', mappingUserToRoleGroup);

    mappingUserToRoleGroup.$inject = ['HttpService', 'uiService'];

    function mappingUserToRoleGroup(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(data) {
            return http.delete('mappingUserToRoleGroup', data).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.userDt.draw();
                    ui.alert.success(res.message);
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        self.delete = function (data) {
            ui.alert.confirm("Are you sure want to delete selected user '" + data.userUsername + "'?", function () {
                return deleteRecords(data);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#mappingUserToRoleGroup tbody').on('click', '#delete', function () {
                var selectedRecord = controller.userDt.row($(this).parents('tr')).data();
                self.delete(selectedRecord);
            });
        };

        return self;
    }

})();
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
        .factory('mappingUserToRoleGroupEntryDtService', mappingUserToRoleGroupEntryDtService);

    mappingUserToRoleGroupEntryDtService.$inject = ['DatatableService'];

    function mappingUserToRoleGroupEntryDtService(ds) {
        var self = this;
        var controller;
        var datatable;

        self.reloadDatatable = function () {
            console.log(controller);
            controller.datatable.draw();
            console.log('finish');
        };

        self.init = function (ctrl) {
            controller = ctrl;
            var roleGroup_pk = ctrl.stateParam.id;

            var titleColumnIndex = 1;
            var dt = ds.init("#mappingUserToRoleGroup", "mappingUserToRoleGroup/search", {
                extendRequestData: {
                    roleGroup_pk: roleGroup_pk,
                    pageIndex: 2,
                    pageSize: 5
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "roleGroup_pk"
                    },
                    {
                        "orderable": false,
                        "data": "user_pk"
                    },
                    {
                        "data": "userCode"
                    },
                    {
                        "data": "userUsername"
                    },
                    {
                        "data": "userName"
                    },
                    {
                        "data": "positionName"
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger'><i class='fa fa-trash-alt'></i></button>";
                        }
                    }
                ]
            });

            ctrl.userDt = dt;
            return dt;
        };
        return self;
    }

})();
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
        .factory('MappingUserToRoleGroupSaveService', MappingUserToRoleGroupEntry);

    MappingUserToRoleGroupEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function MappingUserToRoleGroupEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        self.create = function (model) {
            http.post('mappingUserToRoleGroup', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    $state.go('app.mappingUserToRoleGroupEntry', { id: res.data.model.mappingUserToRoleGroup_pk });
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('mappingUserToRoleGroup', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.save = function (model) {
            validation.clearValidationErrors({});
            if (model.mappingUserToRoleGroup_pk === 0) {
                return self.create(model);
            } else {
                return self.update(model);
            }
        };

        //self.init = function (ctrl) {
        //    controller = ctrl;
        //    angular.element('#saveButton').on('click', function () {
        //        self.save(controller.model);
        //    });
        //};

        return self;
    }

})();
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
        .factory('userModalBindingService', userModalBindingService);

    userModalBindingService.$inject = ['HttpService', '$state'];

    function userModalBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('mappingUserToRoleGroup/form/' + id);
        };

        self.init = function (ctrl) {
            controller = ctrl;
            var id = ctrl.stateParam.id;
            return new Promise(function (resolve, reject) {
                self.applyBinding(id).then(function (res) {
                    if (res.success) {
                        controller.model = res.data.model;
                        controller.formControls = res.data.formControls;
                    }
                    resolve(res);
                });
            });
        };

        return self;
    }

})();
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
        .factory('userModalCancelService', userModalCancelService);

    userModalCancelService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function userModalCancelService($state, http, ui, validation) {
        var self = this;
        var controller;
        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#cancelButton').on('click', function () {
                controller.modalInstance.close();
            });
        };

        return self;
    }
})();
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
        .factory('userModalSaveService', userModalSaveService);

    userModalSaveService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function userModalSaveService($state, http, ui, validation) {
        var self = this;
        var controller;

        self.createOrUpdate = function (model) {
            http.post('mappingUserToRoleGroup', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    controller.modalInstance.close();
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.save = function (model) {
            validation.clearValidationErrors({});
            return self.createOrUpdate(model);
        };

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#saveButton').on('click', function () {
                self.save(controller.model);
                //console.log(controller.model);
            });
        };

        return self;
    }

})();
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
        .factory('positionDeleteService', position);

    position.$inject = ['HttpService', 'uiService'];

    function position(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('position', ids).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message);
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        self.delete = function (data) {
            var ids = [data.position_pk];
            ui.alert.confirm("Are you sure want to delete position '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].position_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#position tbody').on('click', '#delete', function () {
                var selectedRecord = controller.datatable.row($(this).parents('tr')).data();
                self.delete(selectedRecord);
            });

            //Toolbar delete button event
            angular.element('#deleteButton').on('click', function () {
                var selectedRows = controller.datatable.rows('.selected').data();
                var rowsAreSelected = selectedRows.length > 0;
                if (!rowsAreSelected) {
                    ui.alert.error('Please select the record you want to delete.');
                    return;
                }

                var selectedRecords = [];
                for (var i = 0; i < selectedRows.length; i++) {
                    selectedRecords.push(selectedRows[i]);
                }
                self.deleteMultiple(selectedRecords);
            });
        };

        return self;
    }

})();
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
        .factory('positionDtService', position);

    position.$inject = ['DatatableService'];

    function position(ds) {
        var self = this;

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#position", "position/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "position_pk"
                },
                {
                    "data": "name"
                },
                {
                    "data": "description"
                },
                {
                    "orderable": false,
                    "className": "text-center",
                    "render": function (data) {
                        return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success'><i class='fa fa-info'></i></button> " +
                            "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning'><i class='fas fa-pencil-alt'></i></button> " +
                            "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger'><i class='fa fa-trash-alt'></i></button>"
                    }
                }
                ]
            });
        }
        return self;
    }

})();
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
        .factory('positionViewService', positionView);

    positionView.$inject = ['HttpService', '$state', 'uiService'];

    function positionView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.positionEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#position tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.position_pk);
            });

            $("#position tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["position_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();
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
        .factory('PositionBindingService', PositionBindingService);

    PositionBindingService.$inject = ['HttpService', '$state'];

    function PositionBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('position/form/' + id);
        };

        self.init = function (ctrl) {
            controller = ctrl;
            var id = ctrl.stateParam.id;
            return new Promise(function (resolve, reject) {
                self.applyBinding(id).then(function (res) {
                    controller.model = res.data.model;
                    controller.formControls = res.data.formControls;
                    resolve(res);
                });
            });
        };

        return self;
    }

})();
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
        .factory('PositionSaveService', PositionEntry);

    PositionEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function PositionEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        self.create = function (model) {
            http.post('position', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    $state.go('app.positionEntry', { id: res.data.model.position_pk });
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('position', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.save = function (model) {
            validation.clearValidationErrors({});
            if (model.position_pk === 0) {
                return self.create(model);
            } else {
                return self.update(model);
            }
        };

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#saveButton').on('click', function () {
                self.save(controller.model);
            });
        };

        return self;
    }

})();
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
        .factory('RoleBindingService', RoleBindingService);

    RoleBindingService.$inject = ['HttpService', '$state'];

    function RoleBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('role/form/' + id);
        };

        self.init = function (ctrl) {
            controller = ctrl;
            var id = ctrl.stateParam.id;
            return new Promise(function (resolve, reject) {
                self.applyBinding(id).then(function (res) {
                    controller.model = res.data.model;
                    controller.formControls = res.data.formControls;
                    resolve(res);
                });
            });
        };

        return self;
    }

})();
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
        .factory('RoleSaveService', RoleEntry);

    RoleEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function RoleEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        self.create = function (model) {
            http.post('role', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    $state.go('app.role-entry', { id: res.data.model.role_pk });
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('role', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.role-entry', { id: res.data.model.role_pk });
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.save = function (model) {
            validation.clearValidationErrors({});
            if (model.role_pk === 0) {
                return self.create(model);
            } else {
                return self.update(model);
            }
        };

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#saveButton').on('click', function () {
                self.save(controller.model);
            });
        };

        return self;
    }

})();
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
        .factory('roleDeleteService', role);

    role.$inject = ['HttpService', 'uiService'];

    function role(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('role', ids).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message);
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        self.delete = function (data) {
            var ids = [data.role_pk];
            ui.alert.confirm("Are you sure want to delete role '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].role_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#role tbody').on('click', '#delete', function () {
                var selectedRecord = controller.datatable.row($(this).parents('tr')).data();
                self.delete(selectedRecord);
            });

            //Toolbar delete button event
            angular.element('#deleteButton').on('click', function () {
                var selectedRows = controller.datatable.rows('.selected').data();
                var rowsAreSelected = selectedRows.length > 0;
                if (!rowsAreSelected) {
                    ui.alert.error('Please select the record you want to delete.');
                    return;
                }

                var selectedRecords = [];
                for (var i = 0; i < selectedRows.length; i++) {
                    selectedRecords.push(selectedRows[i]);
                }
                self.deleteMultiple(selectedRecords);
            });
        };

        return self;
    }

})();
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
        .factory('roleDtService', role);

    role.$inject = ['DatatableService'];

    function role(ds) {
        var self = this;

        self.init = function (ctrl) {
            return ds.init("#role", "role/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [1, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "role_pk"
                },
                {
                    "data": "title"
                },
                {
                    "data": "description"
                },
                {
                    "orderable": false,
                    "className": "text-center",
                    "render": function (data) {
                        return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success'><i class='fa fa-info'></i></button> " +
                            "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning'><i class='fas fa-pencil-alt'></i></button> " +
                            "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger'><i class='fa fa-trash-alt'></i></button>"
                    }
                }
                ]
            });
        }
        return self;
    }

})();
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
        .factory('roleViewService', roleView);

    roleView.$inject = ['HttpService', '$state', 'uiService'];

    function roleView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.role-entry', {
                id: data
            })
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#role tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.role_pk);
            });

            $("#role tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["role_pk"];
                self.view(id)
            });
        }

        return self;
    }

})();
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
        .factory('roleGroupDeleteService', roleGroup);

    roleGroup.$inject = ['HttpService', 'uiService'];

    function roleGroup(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('roleGroup', ids).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message);
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        self.delete = function (data) {
            var ids = [data.roleGroup_pk];
            ui.alert.confirm("Are you sure want to delete roleGroup '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].roleGroup_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#roleGroup tbody').on('click', '#delete', function () {
                var selectedRecord = controller.datatable.row($(this).parents('tr')).data();
                self.delete(selectedRecord);
            });

            //Toolbar delete button event
            angular.element('#deleteButton').on('click', function () {
                var selectedRows = controller.datatable.rows('.selected').data();
                var rowsAreSelected = selectedRows.length > 0;
                if (!rowsAreSelected) {
                    ui.alert.error('Please select the record you want to delete.');
                    return;
                }

                var selectedRecords = [];
                for (var i = 0; i < selectedRows.length; i++) {
                    selectedRecords.push(selectedRows[i]);
                }
                self.deleteMultiple(selectedRecords);
            });
        };

        return self;
    }

})();
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
        .factory('roleGroupDtService', roleGroup);

    roleGroup.$inject = ['DatatableService'];

    function roleGroup(ds) {
        var self = this;

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#roleGroup", "roleGroup/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "roleGroup_pk"
                },
                {
                    "data": "title"
                },
                {
                    "data": "description"
                },
                {
                    "orderable": false,
                    "className": "text-center",
                    "render": function (data) {
                        return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success'><i class='fa fa-info'></i></button> " +
                            "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning'><i class='fas fa-pencil-alt'></i></button> " +
                            "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger'><i class='fa fa-trash-alt'></i></button>"
                    }
                }
                ]
            });
        }
        return self;
    }

})();
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
        .factory('roleGroupViewService', roleGroupView);

    roleGroupView.$inject = ['HttpService', '$state', 'uiService'];

    function roleGroupView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.roleGroupEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#roleGroup tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.roleGroup_pk);
            });

            $("#roleGroup tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["roleGroup_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();
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
        .factory('RoleGroupBindingService', RoleGroupBindingService);

    RoleGroupBindingService.$inject = ['HttpService', '$state'];

    function RoleGroupBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('roleGroup/form/' + id);
        };

        self.init = function (ctrl) {
            controller = ctrl;
            var id = ctrl.stateParam.id;
            return new Promise(function (resolve, reject) {
                self.applyBinding(id).then(function (res) {
                    controller.model = res.data.model;
                    controller.formControls = res.data.formControls;
                    resolve(res);
                });
            });
        };

        return self;
    }

})();
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
        .factory('RoleGroupSaveService', RoleGroupEntry);

    RoleGroupEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function RoleGroupEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        self.create = function (model) {
            http.post('roleGroup', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    $state.go('app.roleGroupEntry', { id: res.data.model.roleGroup_pk });
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('roleGroup', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.save = function (model) {
            validation.clearValidationErrors({});
            if (model.roleGroup_pk === 0) {
                return self.create(model);
            } else {
                return self.update(model);
            }
        };

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#saveButton').on('click', function () {
                self.save(controller.model);
            });
        };

        return self;
    }

})();
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
        .factory('DatatableService', DtService);

    DtService.$inject = ['DTOptionsBuilder', 'DTColumnBuilder', '$compile', 'HttpService', '$cookies', '$state'];

    function DtService(DTOptionsBuilder, DTColumnBuilder, $compile, http, $cookies, $state) {
        var self = this;

        self.init = function dt(tableIdOrClass, apiUrl, param) { 
            var defaultDom = "lftip";

            var dt = $(tableIdOrClass).DataTable({
                destroy: true,
                processing: true,
                serverSide: true,
                full_numbers: false,
                autoWidth: true,
                pageLength: 10,
                scrolly: true,
                scrollX: true,
                scrollCollapse: true,
                stateSave: param.stateSave === undefined ? true : param.stateSave,
                stateLoadParams: function (settings, data) {
                    data.search.search = "";
                },
                select: true,
                fixedColumns: {
                    leftColumns: param.fixedColumns === undefined ? 0 : param.fixedColumns[0],
                    rightColumns: param.fixedColumns === undefined ? 0 : param.fixedColumns[1]
                },
                rowGroup: {
                    enable: param.rowGroup === undefined ? false : true,
                    dataSrc: param.rowGroup === undefined ? null : param.rowGroup
                }, 
                ajax: function (data, callback, setting) { 
                    var pageIndex = Math.floor((data.start / data.length)) + 1;

                    var defaultRequestData = {
                        "pageIndex": pageIndex,
                        "pageSize": data.length,
                        "keyword": data.search["value"],
                        "sortName": data.columns[data.order[0].column].data,
                        "sortDir": data.order[0].dir
                    };

                    var extendRequestData = param.extendRequestData;

                    if (extendRequestData) {
                        extendRequestData.pageIndex = defaultRequestData.pageIndex;
                        extendRequestData.pageSize = defaultRequestData.pageSize;
                        extendRequestData.keyword = defaultRequestData.keyword;
                        extendRequestData.sortName = defaultRequestData.sortName;
                        extendRequestData.sortDir = defaultRequestData.sortDir;
                    }

                    var requestData = (typeof (extendRequestData) != 'undefined') ? extendRequestData : defaultRequestData;
                    if (!requestData.keyword) {
                        $('.backdrop-login').fadeIn();
                    }

                    http.get(apiUrl, requestData).then(function (res) {
                        if (res.success) {
                            callback({
                                recordsTotal: res.data.count.totalRecords,
                                recordsFiltered: res.data.count.totalFiltered,
                                data: res.data.records
                            });
                        }
                    });
                },
                columns: param.columns,
                dom: (typeof (param.dom) == 'undefined') ? defaultDom : param.dom,
                searchDelay: 400,
                drawCallback: function (setting) {
                    var elem = $('[rel="tooltip"]');
                    elem.tooltip({
                        trigger: 'hover',
                        container: 'main'
                    }); 
                },
                order: typeof param.order === 'undefined' ? [
                    [0, "desc"]
                ] : param.order
            });
            if (param.rowSequence) {
                dt.on('draw.dt', function () {
                    var PageInfo = $(tableIdOrClass).DataTable().page.info();
                    dt.column(0, {
                        page: 'current'
                    }).nodes().each(function (cell, i) {
                        cell.innerHTML = i + 1 + PageInfo.start;
                    });
                });
            }

            $(tableIdOrClass + ' tbody').on("dblclick", "tr", function () {
                var data = dt.row(this).data();
                var id = data["Id"];
                if (param.route) {
                    (param.customRoute) ? param.route(data) : param.route(id);
                }
            });

            $('.dataTables_filter input[type=search]').val('').change();

            return dt;
        };

        return self;
    }

})();
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
        .filter('propsFilter', function () {
            return function (items, props) {
                var out = [];

                if (angular.isArray(items)) {
                    var keys = Object.keys(props);

                    items.forEach(function (item) {
                        var itemMatches = false;

                        for (var i = 0; i < keys.length; i++) {
                            var prop = keys[i];
                            var text = props[prop].toLowerCase();
                            if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                                itemMatches = true;
                                break;
                            }
                        }

                        if (itemMatches) {
                            out.push(item);
                        }
                    });
                } else {
                    // Let the output be the input untouched
                    out = items;
                }

                return out;
            };
        });

})();
(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:kairosService
     * @description
     * # dashboardService
     * Service of the app
     */

    angular
        .module('global-solusindo')
        .factory('FormControlService', FormControl);

        FormControl.$inject = [];

    function FormControl() {
        var self = this;

        self.setFormControl = function(ctrl){
            ctrl.formControls.forEach(function(component){
                $("#" + component.controlName).prop('disabled', !component.enabled);
                $("#" + component.controlName).text(component.text);
                $("#" + component.controlName).toggle(component.visible);
            });
        };

        return self;
    }
})();
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
        .factory('HttpService', Http)
        .factory('PendingRequest', Pending);

    Http.$inject = ['$http', '$state', '$cookies', '$q', '$httpParamSerializerJQLike', 'PendingRequest', '$httpParamSerializer'];

    function Http($http, $state, $cookies, $q, $httpParamSerializerJQLike, PendingRequest, $httpParamSerializer) {
        // var base_url = cs.config.getApiUrl();
        //var base_url = "http://global-solusindo-ws.local/";
        var base_url = "http://ws.gs.local/";
        var base_host = "";
        var auth = {};
        auth.getAccessToken = function () {
            return '';
        };

        delete $http.defaults.headers.common['X-Requested-With'];
        return {
            login: function (_url, requestData) {
                var deferred = $q.defer();

                var url = base_host + _url;

                var data = $httpParamSerializer(requestData);

                PendingRequest.add({
                    url: url,
                    canceller: deferred
                });
                delete $http.defaults.headers.common['X-Requested-With'];
                $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    timeout: deferred.promise,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }

                }).then(function (response) {
                    deferred.resolve(response.data);
                    PendingRequest.remove(url);

                }, function (response) {
                    PendingRequest.remove(url);
                    deferred.reject(response.data);
                });

                return deferred.promise;
            },
            post: function (_url, requestData) {
                var deferred = $q.defer();
                var url = base_url + _url;

                var data = JSON.stringify(requestData);

                PendingRequest.add({
                    url: url,
                    canceller: deferred
                });
                delete $http.defaults.headers.common['X-Requested-With'];
                $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    timeout: deferred.promise,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'Authorization': 'Bearer ' + auth.getAccessToken()
                    }

                }).then(function (response) {
                    deferred.resolve(response.data);
                    PendingRequest.remove(url);
                }, function (response) {
                    PendingRequest.remove(url);
                    deferred.reject();
                });
                //}, function (response) {
                //    //console.log(response.xhrStatus);
                //    PendingRequest.remove(url);
                //    deferred.reject();
                //});

                return deferred.promise;
            },
            put: function (_url, requestData) {
                var deferred = $q.defer();
                var url = base_url + _url;

                var data = JSON.stringify(requestData);

                PendingRequest.add({
                    url: url,
                    canceller: deferred
                });

                $http({
                    method: 'PUT',
                    url: url,
                    data: data,
                    timeout: deferred.promise,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'Authorization': 'Bearer ' + auth.getAccessToken()
                    }

                }).then(function (response) {
                    deferred.resolve(response.data);
                    PendingRequest.remove(url);

                }, function (response) {
                    PendingRequest.remove(url);
                    deferred.reject();
                });

                return deferred.promise;
            },
            get: function (_url, requestData) {
                var deferred = $q.defer();
                var url = base_url + _url;

                var data = requestData;
                PendingRequest.add({
                    url: url,
                    canceller: deferred
                });

                $http({
                    method: 'GET',
                    url: url,
                    params: data,
                    timeout: deferred.promise,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                    }

                }).then(function (response) {
                    deferred.resolve(response.data);
                    PendingRequest.remove(url);

                }, function (response) {
                    //console.log(response.xhrStatus);
                    PendingRequest.remove(url);
                    deferred.reject();
                });

                return deferred.promise;
            },
            delete: function (_url, requestData) {
                var deferred = $q.defer();
                var url = base_url + _url;

                //var data = JSON.stringify(requestData);
                PendingRequest.add({
                    url: url,
                    canceller: deferred
                });

                $http({
                    method: 'DELETE',
                    url: url,
                    data: requestData,
                    timeout: deferred.promise,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'Authorization': 'Bearer ' + auth.getAccessToken()
                    }

                }).then(function (response) {
                    deferred.resolve(response.data);
                    PendingRequest.remove(url);

                }, function (response) {
                    PendingRequest.remove(url);
                    deferred.reject();
                });

                return deferred.promise;
            }
        };
    }

    function Pending() {
        var pending = [];
        this.get = function () {
            return pending;
        };
        this.add = function (request) {
            pending.push(request);
        };
        this.remove = function (request) {
            pending = _.filter(pending, function (p) {
                return p.url !== request;
            });
        };
        this.cancelAll = function () {
            angular.forEach(pending, function (p) {
                p.canceller.resolve();
            });
            pending.length = 0;
        };

        return this;
    }
})();
(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:kairosService
     * @description
     * # dashboardService
     * Service of the app
     */

    angular
        .module('global-solusindo')
        .factory('select2Service', select2Service);

    select2Service.$inject = ['HttpService'];

    function select2Service(http) {
        var self = this;

        self.liveSearch = function (apiUrl, param) {
            var res = [];
            var $p = $(param.selector).parent();
            $(param.selector).select2({
                ajax: {
                    delay: 300,
                    data: function (params) {
                        return {
                            q: params.term,
                            page: params.page || 1
                        };
                    },
                    transport: function (params, success, failure) {
                        var defaultRequestData = {
                            "pageIndex": params.data.page,
                            "pageSize": 5,
                            "sortName": param.displayMember,
                            "sortDir": "asc",
                            "keyword": typeof (params.data.q) === 'undefined' ? '' : params.data.q
                        };

                        var extendRequestData = param.extendRequestData;

                        if (extendRequestData) {
                            extendRequestData.pageIndex = defaultRequestData.pageIndex;
                            extendRequestData.pageSize = defaultRequestData.pageSize;
                            extendRequestData.keyword = defaultRequestData.keyword;
                            extendRequestData.sortName = defaultRequestData.sortName;
                            extendRequestData.sortDir = defaultRequestData.sortDir;
                        }

                        var requestData = (typeof (extendRequestData) != 'undefined') ? extendRequestData : defaultRequestData;

                        if (param.onPreAjaxPost) {
                            param.onPreAjaxPost(requestData);
                        }
                        return http.get(apiUrl, requestData).then(function (response) {
                            success(response);
                        });
                    },
                    processResults: function (response, params) {
                        params.page = params.page || 1;

                        if (param.onBeforeProcessResults) {
                            param.onBeforeProcessResults(response);
                        }
                        var data = response.data.records;

                        if (typeof (data) !== 'undefined') {
                            data.forEach(function (item) {
                                for (var prop in item) {
                                    if (prop == param.valueMember) {
                                        item.id = item[prop];
                                    }
                                    if (prop == param.displayMember) {
                                        item.text = item[prop];
                                    }
                                }
                                res.push(item);
                            });

                            param.callback(data);
                            return {
                                results: data,
                                //pagination: {
                                //    more: (params.page * 5) < response.data.count.totalFiltered
                                //}
                            };
                        }
                        return { results: [] };
                    }
                },
                dropdownAutoWidth: true,
                placeholder: (param.placeholder) ? param.placeholder : 'Search..',
                allowClear: param.allowClear,
                escapeMarkup: function (m) {
                    return m;
                },
                templateResult: (typeof (param.templateResult) !== 'undefined') ? param.templateResult : function (item) {
                    var markup = "<div class='select2-result-repository__statistics'>" +
                        "<div>" + item.text + "</div>" +
                        "</div>" +
                        "</div></div>";

                    return markup;
                },
                templateSelection: typeof (param.templateSelection) !== 'undefined' ? param.templateSelection : function (item) {
                    return item.text;
                },
                dropdownParent: $p
            });

            $(param.selector).on('select2:select', function (e) {
                if (param.onSelected) {
                    param.onSelected(e.params.data);
                }
            });
            $(param.selector).on('select2:unselecting', function (e) {
                //$(this).data('unselecting', true);
            });
            $(param.selector).on('select2:opening', function (e) {
                //if ($(this).data('unselecting')) {
                //    $(this).removeData('unselecting');
                //    e.preventDefault();
                //}
                if (param.onOpening) {
                    param.onOpening(e);
                }
            });
        };

        return self;
    }
})();
(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:kairosService
     * @description 
     * When we hit api and the server return error either a message or validation errors, this service handle the response and 
     * show it on error and/or bind the message to the ui
     * # serverErrorService
     * Service of the app
     */

    angular
        .module('global-solusindo')
        .factory('serverErrorService', serverErrorService);

    serverErrorService.$inject = ['validationService', 'uiService'];

    function serverErrorService(validationService, ui) {
        var self = this;

        self.show = function (res) {
            debugger;
            if (res) {
                validationService.clearValidationErrors({});
                ui.alert.error(res.message);
                if (res.data && res.data.errors) {
                    validationService.serverValidation(res.data.errors);
                }
            }
        };

        return self;
    }
})();
(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:kairosService
     * @description
     * # dashboardService
     * Service of the app
     */

    angular
        .module('global-solusindo')
        .factory('uiService', ui);

    ui.$inject = [];

    function ui() {
        var self = this;

        self.alert = {
            error: function (message) {
                alertify.alert().setContent(message).setHeader('Alert').set({
                    transition: 'zoom'
                }).show(true, 'error');
            },
            errorToast: function (message) {
                alertify.set('notifier', 'position', 'top-center');
                alertify.notify(message, 'error', 5, null);
            },
            warningToast: function (message) {
                alertify.set('notifier', 'position', 'top-center');
                alertify.notify(message, 'warning', 5, null);
            },
            warning: function (message) {
                alertify.set('notifier', 'position', 'bottom-right');
                alertify.notify(message, 'warning', 5, null);
            },
            success: function (message) {
                alertify.set('notifier', 'position', 'bottom-right');
                alertify.notify(message, 'success', 5, null);
            },
            confirm: function (message, accept, cancel) {
                return alertify.confirm().setContent(message).setHeader('Confirm').set({
                    transition: 'zoom',
                    onok: accept,
                    oncancel: cancel
                }).show(true, 'confirm');
            }
        };

        return self;
    }
})();
(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.service:kairosService
     * @description
     * # dashboardService
     * Service of the app
     */

    angular
        .module('global-solusindo')
        .factory('validationService', validationService);

    validationService.$inject = [];

    function validationService() {
        var self = this;

        self.clearValidationErrors = function (obj) {
            var controls = document.querySelectorAll('[name]');

            var validClass = "is-valid";
            var invalidClass = "is-invalid";
            //Clear state
            controls.forEach(function (item) {
                item.className = item.className.replace(validClass, "");
                item.className = item.className.replace(invalidClass, "");
            });
        };

        self.setError = function (selector, errorMessage) {
            var element = document.getElementById(selector);

            var validClass = "form-control is-valid";
            var invalidClass = "form-control is-invalid";

            element.className = element.className.replace(validClass, "");
            element.className = element.className.replace(invalidClass, "");
            element.className += " " + validClass;


            element.className = element.className.replace(validClass, invalidClass);

            var childNodes = element.parentElement.childNodes;
            childNodes.forEach(function (element) {
                if (element.className == 'invalid-feedback') {
                    element.innerHTML = errorMessage;
                }
            });

            $('#submit').prop('disabled', false);
        };

        self.serverValidation = function (obj) {
            var controls = document.querySelectorAll('[name]');

            var errors = obj;
            var subErrors = obj.subErrors;

            errors = (typeof (errors) == 'undefined' ? obj : errors);
            var validClass = "form-control is-valid";
            var invalidClass = "form-control is-invalid";
            controls.forEach(function (item) {
                item.className = item.className.replace(validClass, "");
                item.className = item.className.replace(invalidClass, "");
                item.className += " " + validClass;
            });

            if (errors) {
                for (var i = 0; i < errors.length; i++) {
                    var error = errors[i];
                    controls.forEach(function (item) {
                        //$scope.$apply(function () {
                        var fieldName = item.name;

                        if (error.propertyName.toLowerCase() == fieldName.toLowerCase()) {
                            item.className = item.className.replace(validClass, invalidClass);

                            var childNodes = item.parentElement.childNodes;
                            childNodes.forEach(function (item) {
                                if (item.className == 'invalid-feedback') {
                                    item.innerHTML = error.message;
                                }
                            });
                        }
                        //});
                    });
                }
            }
        };

        return self;
    }
})();
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
        .factory('userDeleteService', user);

    user.$inject = ['HttpService', 'uiService'];

    function user(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('user', ids).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message);
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        self.delete = function (data) {
            var ids = [data.user_pk];
            ui.alert.confirm("Are you sure want to delete user '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].user_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#user tbody').on('click', '#delete', function () {
                var selectedRecord = controller.datatable.row($(this).parents('tr')).data();
                self.delete(selectedRecord);
            });

            //Toolbar delete button event
            angular.element('#deleteButton').on('click', function () {
                var selectedRows = controller.datatable.rows('.selected').data();
                var rowsAreSelected = selectedRows.length > 0;
                if (!rowsAreSelected) {
                    ui.alert.error('Please select the record you want to delete.');
                    return;
                }

                var selectedRecords = [];
                for (var i = 0; i < selectedRows.length; i++) {
                    selectedRecords.push(selectedRows[i]);
                }
                self.deleteMultiple(selectedRecords);
            });
        };

        return self;
    }

})();
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
        .factory('userDtService', user);

    user.$inject = ['DatatableService'];

    function user(ds) {
        var self = this;

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#user", "user/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "user_pk"
                },
                {
                    "data": "userCode"
                },
                {
                    "data": "name"
                },
                //{
                //    "data": "position"
                //},
                //{
                //    "data": "roleName"
                //},
                {
                    "data": "noHP"
                },
                {
                    "orderable": false,
                    "className": "text-center",
                    "render": function (data) {
                        return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success'><i class='fa fa-info'></i></button> " +
                            "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning'><i class='fas fa-pencil-alt'></i></button> " +
                            "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger'><i class='fa fa-trash-alt'></i></button>"
                    }
                }
                ]
            });
        }
        return self;
    }

})();
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
        .factory('userViewService', userView);

    userView.$inject = ['HttpService', '$state', 'uiService'];

    function userView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.userEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#user tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.user_pk);
            });

            $("#user tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["user_pk"];
                self.view(id);
            });
        };

        return self;
    }

})();
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
        .factory('UserBindingService', UserBindingService);

    UserBindingService.$inject = ['HttpService', '$state'];

    function UserBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('user/form/' + id);
        };

        self.init = function (ctrl) {
            controller = ctrl;
            var id = ctrl.stateParam.id;
            return new Promise(function (resolve, reject) {
                self.applyBinding(id).then(function (res) {
                    controller.formData = res.data.formData;
                    controller.model = res.data.model;
                    controller.formControls = res.data.formControls;
                    resolve(res);
                });
            });
        };

        return self;
    }

})();
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
        .factory('UserSaveService', UserEntry);

    UserEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function UserEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        self.create = function (model) {
            http.post('user', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    $state.go('app.userEntry', { id: res.data.model.user_pk });
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('user', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        function validate() {
            
            return true;
        }

        self.save = function (model) {
            if (!validate())
                return;

            model.userCode = model.username;
            if (model.user_pk === 0) {
                return self.create(model);
            } else {
                return self.update(model);
            }
        };

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#saveButton').on('click', function () {
                self.save(controller.model);
            });
        };

        return self;
    }

})();
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
        .directive('modalAsset', modalDirective);

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
                        templateUrl: 'app/modules/asset/assetModal/assetModal.html',
                        controller: 'AssetModalCtrl',
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
        .module('global-solusindo-app');
})();
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
        .directive('modalMappingRoleToRoleGroup', modalDirective);

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
                        templateUrl: 'app/modules/mappingRoleToRoleGroupEntry/mappingRoleToRoleGroupModal/mappingRoleToRoleGroupModal.html',
                        controller: 'ModalMappingRoleToRoleGroupCtrl',
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
        .directive('userModal', userModal);

    function userModal($uibModal) {
        return {
            restrict: 'A',
            scope: {
                onCallback: '='
            },
            link: function (scope, element, attrs) {
                element.on('click', function () {
                    var modalInstance = $uibModal.open({
                        templateUrl: 'app/modules/mappingUserToRoleGroupEntry/modal/userModal.html',
                        controller: 'userModalCtrl',
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
        .module('global-solusindo-app')
        .directive('crNumeric', autoNumeric);

    function autoNumeric() {
        
        // Declare a empty options object
        var options = {};
        return {
            // Require ng-model in the element attribute for watching changes.
            require: '?ngModel',
            // This directive only works when used in element's attribute (e.g: cr-numeric)
            restrict: 'A',
            compile: function (tElm, tAttrs) {

                var isTextInput = tElm.is('input:text');

                return function (scope, elm, attrs, controller) {
                    // Get instance-specific options.
                    var opts = angular.extend({}, options, scope.$eval(attrs.crNumeric));

                    // Helper method to update autoNumeric with new value.
                    var updateElement = function (element, newVal) {
                        // Only set value if value is numeric
                        if ($.isNumeric(newVal))
                            element.autoNumeric('set', newVal);
                    };

                    // Initialize element as autoNumeric with options.
                    elm.autoNumeric(opts);

                    // if element has controller, wire it (only for <input type="text" />)
                    if (controller && isTextInput) {
                        // watch for external changes to model and re-render element
                        scope.$watch(tAttrs.ngModel, function (current, old) {
                            controller.$render();
                        });
                        // render element as autoNumeric
                        controller.$render = function () {
                            updateElement(elm, controller.$viewValue);
                        }
                        // Detect changes on element and update model.
                        elm.on('change', function (e) {
                            scope.$apply(function () {
                                controller.$setViewValue(elm.autoNumeric('get'));
                            });
                        });
                    } else {
                        // Listen for changes to value changes and re-render element.
                        // Useful when binding to a readonly input field.
                        if (isTextInput) {
                            attrs.$observe('value', function (val) {
                                updateElement(elm, val);
                            });
                        }
                    }
                }
            } // compile
        } // return
    }
})();
/**
 * Checklist-model
 * AngularJS directive for list of checkboxes
 * https://github.com/vitalets/checklist-model
 * License: MIT http://opensource.org/licenses/MIT
 */

/* commonjs package manager support (eg componentjs) */
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports) {
    module.exports = 'checklist-model';
}

angular.module('checklist-model', [])
    .directive('checklistModel', ['$parse', '$compile', function ($parse, $compile) {
        // contains
        function contains(arr, item, comparator) {
            if (angular.isArray(arr)) {
                for (var i = arr.length; i--;) {
                    if (comparator(arr[i], item)) {
                        return true;
                    }
                }
            }
            return false;
        }

        // add
        function add(arr, item, comparator) {
            arr = angular.isArray(arr) ? arr : [];
            if (!contains(arr, item, comparator)) {
                arr.push(item);
            }
            return arr;
        }

        // remove
        function remove(arr, item, comparator) {
            if (angular.isArray(arr)) {
                for (var i = arr.length; i--;) {
                    if (comparator(arr[i], item)) {
                        arr.splice(i, 1);
                        break;
                    }
                }
            }
            return arr;
        }

        // http://stackoverflow.com/a/19228302/1458162
        function postLinkFn(scope, elem, attrs) {
            // exclude recursion, but still keep the model
            var checklistModel = attrs.checklistModel;
            attrs.$set("checklistModel", null);
            // compile with `ng-model` pointing to `checked`
            $compile(elem)(scope);
            attrs.$set("checklistModel", checklistModel);

            // getter for original model
            var checklistModelGetter = $parse(checklistModel);
            var checklistChange = $parse(attrs.checklistChange);
            var checklistBeforeChange = $parse(attrs.checklistBeforeChange);
            var ngModelGetter = $parse(attrs.ngModel);



            var comparator = function (a, b) {
                if (!isNaN(a) && !isNaN(b)) {
                    return String(a) === String(b);
                } else {
                    return angular.equals(a, b);
                }
            };

            if (attrs.hasOwnProperty('checklistComparator')) {
                if (attrs.checklistComparator[0] == '.') {
                    var comparatorExpression = attrs.checklistComparator.substring(1);
                    comparator = function (a, b) {
                        return a[comparatorExpression] === b[comparatorExpression];
                    };

                } else {
                    comparator = $parse(attrs.checklistComparator)(scope.$parent);
                }
            }

            // watch UI checked change
            var unbindModel = scope.$watch(attrs.ngModel, function (newValue, oldValue) {
                if (newValue === oldValue) {
                    return;
                }

                if (checklistBeforeChange && (checklistBeforeChange(scope) === false)) {
                    ngModelGetter.assign(scope, contains(checklistModelGetter(scope.$parent), getChecklistValue(), comparator));
                    return;
                }

                setValueInChecklistModel(getChecklistValue(), newValue);

                if (checklistChange) {
                    checklistChange(scope);
                }
            });

            // watches for value change of checklistValue
            var unbindCheckListValue = scope.$watch(getChecklistValue, function (newValue, oldValue) {
                if (newValue != oldValue && angular.isDefined(oldValue) && scope[attrs.ngModel] === true) {
                    var current = checklistModelGetter(scope.$parent);
                    checklistModelGetter.assign(scope.$parent, remove(current, oldValue, comparator));
                    checklistModelGetter.assign(scope.$parent, add(current, newValue, comparator));
                }
            }, true);

            var unbindDestroy = scope.$on('$destroy', destroy);

            function destroy() {
                unbindModel();
                unbindCheckListValue();
                unbindDestroy();
            }

            function getChecklistValue() {
                return attrs.checklistValue ? $parse(attrs.checklistValue)(scope.$parent) : attrs.value;
            }

            function setValueInChecklistModel(value, checked) {
                var current = checklistModelGetter(scope.$parent);
                if (angular.isFunction(checklistModelGetter.assign)) {
                    if (checked === true) {
                        checklistModelGetter.assign(scope.$parent, add(current, value, comparator));
                    } else {
                        checklistModelGetter.assign(scope.$parent, remove(current, value, comparator));
                    }
                }

            }

            // declare one function to be used for both $watch functions
            function setChecked(newArr, oldArr) {
                if (checklistBeforeChange && (checklistBeforeChange(scope) === false)) {
                    setValueInChecklistModel(getChecklistValue(), ngModelGetter(scope));
                    return;
                }
                ngModelGetter.assign(scope, contains(newArr, getChecklistValue(), comparator));
            }

            // watch original model change
            // use the faster $watchCollection method if it's available
            if (angular.isFunction(scope.$parent.$watchCollection)) {
                scope.$parent.$watchCollection(checklistModel, setChecked);
            } else {
                scope.$parent.$watch(checklistModel, setChecked, true);
            }
        }

        return {
            restrict: 'A',
            priority: 1000,
            terminal: true,
            scope: true,
            compile: function (tElement, tAttrs) {

                if (!tAttrs.checklistValue && !tAttrs.value) {
                    throw 'You should provide `value` or `checklist-value`.';
                }

                // by default ngModel is 'checked', so we set it if not specified
                if (!tAttrs.ngModel) {
                    // local scope var storing individual checkbox model
                    tAttrs.$set("ngModel", "checked");
                }

                return postLinkFn;
            }
        };
    }]);
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
        .directive('dateTimePicker', function ($timeout) {
            return {
                restrict: 'EA',
                require: 'ngModel',
                scope: {
                    options: '=?',
                    onChange: '&?',
                    onClick: '&?'
                },
                link: function ($scope, $element, $attrs, ngModel) {
                    // var dpElement = $element.parent().hasClass('input-group') ? $element.parent() : $element;
                    var dpElement = $element;

                    $scope.$watch('options', function (newValue) {
                        var dtp = dpElement.data('DateTimePicker');
                        $.map(newValue, function (value, key) {
                            dtp[key](value);
                        });
                    }, true);

                    ngModel.$render = function () {
                        // if value is undefined/null do not do anything, unless some date was set before
                        var currentDate = dpElement.data('DateTimePicker').date();
                        if (!ngModel.$viewValue && currentDate) {
                            dpElement.data('DateTimePicker').clear();
                        } else if (ngModel.$viewValue) {
                            // otherwise make sure it is moment object
                            if (!moment.isMoment(ngModel.$viewValue)) {
                                ngModel.$setViewValue(moment(ngModel.$viewValue));
                            }
                            dpElement.data('DateTimePicker').date(ngModel.$viewValue);
                        }
                    };

                    var isDateEqual = function (d1, d2) {
                        return moment.isMoment(d1) && moment.isMoment(d2) && d1.valueOf() === d2.valueOf();
                    };

                    dpElement.on('dp.change', function (e) {
                        if (!isDateEqual(e.date, ngModel.$viewValue)) {
                            var newValue = e.date === false ? null : e.date;
                            ngModel.$setViewValue(newValue);

                            $timeout(function () {
                                if (typeof $scope.onChange === 'function') {
                                    $scope.onChange();
                                }
                            });
                        }
                    });


                    dpElement.on('click', function () {
                        $timeout(function () {
                            if (typeof $scope.onClick === 'function') {
                                $scope.onClick();
                            }
                        });
                    });

                    dpElement.datetimepicker($scope.options);
                }
            }
        })
})();
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
        .directive('wzToolbar', kairosToolbar)
        .directive('wzAppbar', kairosAppbar)
        .directive('wzFilter', kairosFilter)
        .directive('a', navigationDirective)
        .directive('a', layoutToggleDirective)
        .directive('button', triggerTooltip)
        .directive('form', formEl)
        .directive('a', preventClickDirective)
        .directive('uiSelect', uiSelectFocus);

    function kairosAppbar($stateParams) {
        return {
            restrict: 'E',
            template: '<div class="row breadcrumb-container">' +
                '<div class="col-md-6"><span class="title" ng-bind="title"></span>' +
                '</div>' +
                '<div class="col-md-6 text-right">' +
                '<ncy-breadcrumb></ncy-breadcrumb>' +
                '</div>' +
                '</div>',
            replace: true,
            link: function (scope, element, attr) {
                if ($stateParams.id == 'new') {
                    scope.title = 'Create ' + attr.title;
                } else if ($stateParams.id > 0) {
                    scope.title = 'Edit ' + attr.title;
                } else {
                    scope.title = attr.title;
                }
            }
        };
    }

    function kairosFilter() {
        return {
            restrict: 'E',
            template: '<div class="filter"><ng-transclude></ng-transclude></div>',
            transclude: true,
        };
    }

    function kairosToolbar() {
        return {
            restrict: 'E',
            template: '<div class="toolbar"><ng-transclude></ng-transclude></div>',
            transclude: true,
            link: function (scope, element, attr) {
                element.parent().parent('.row').addClass('toolbar-sticky');
            }
        };
    }

    function triggerTooltip() {
        return {
            restrict: 'E',
            link: function (scope, element, attr) {
                element.on('click', function () {
                    angular.element('[uib-tooltip-popup]').addClass('ng-hide');
                });
            }
        };
    }

    //Collapse menu toggler
    function collapseMenuTogglerDirective() {
        var directive = {
            restrict: 'E',
            link: link
        }
        return directive;

        function link(scope, element, attrs) {
            element.on('click', function () {
                if (element.hasClass('navbar-toggler') && !element.hasClass('layout-toggler')) {
                    angular.element('body').toggleClass('sidebar-mobile-show')
                }
            })
        }
    }
    //LayoutToggle
    layoutToggleDirective.$inject = ['$interval'];

    function layoutToggleDirective($interval) {
        var directive = {
            restrict: 'E',
            link: link
        }
        return directive;

        function link(scope, element, attrs) {
            element.on('click', function () {

                if (element.hasClass('sidebar-toggler')) {
                    angular.element('body').toggleClass('sidebar-hidden');
                }

                if (element.hasClass('aside-menu-toggler')) {
                    angular.element('body').toggleClass('aside-menu-hidden');
                }
            });
        }
    }

    function navigationDirective() {
        var directive = {
            restrict: 'E',
            link: link
        }
        return directive;

        function link(scope, element, attrs) {
            if (element.hasClass('nav-dropdown-toggle') && angular.element('body').width() > 782) {
                element.on('click', function () {
                    if (!angular.element('body').hasClass('compact-nav')) {
                        element.parent().toggleClass('open').find('.open').removeClass('open');
                    }
                });
            } else if (element.hasClass('nav-dropdown-toggle') && angular.element('body').width() < 783) {
                element.on('click', function () {
                    element.parent().toggleClass('open').find('.open').removeClass('open');
                });
            }
        }
    }

    function formEl() {
        return {
            restrict: 'E',
            link: function (scope, elem) {
                var el = elem[0].querySelector('.form-control');
                if (el) {
                    el.focus();
                }
                // set up event handler on the form element
                elem.on('submit', function () {

                    // find the first invalid element
                    var firstInvalid = elem[0].querySelector('.ng-invalid');
                    // if we find one, set focus
                    if (firstInvalid) {
                        firstInvalid.focus();
                    }
                });
            }
        };
    }


    function uiSelectFocus($timeout) {
        return {
            //require: 'ui-select',
            link: function (scope, $element, $attributes, selectController) {

                //scope.$select.search = scope.$select.ngModel.$viewValue.name;
                scope.$on('uis:activate', function () {
                    // Give it time to appear before focus
                    $timeout(function () {
                        scope.$select.searchInput[0].focus();
                    }, 500);
                });
            }
        }
    };

    function preventClickDirective() {
        var directive = {
            restrict: 'E',
            link: link
        }
        return directive;

        function link(scope, element, attrs) {
            if (attrs.href === '#') {
                element.on('click', function (event) {
                    event.preventDefault();
                });
            }
        }
    }

})();