/*!
* global-solusindo-app - v1.0.0 - MIT LICENSE 2019-03-24. 
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
            .state('app.areaList', {
                url: '/areaList',
                templateUrl: 'app/modules/area/area.html',
                controller: 'AreaCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Area'
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
            .state('app.areaEntry', {
                url: '/areaEntry/:id',
                templateUrl: 'app/modules/areaEntry/areaEntry.html',
                controller: 'AreaEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Area Entry'
                }
            });
    }]);
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
                controllerAs: 'asetVm',
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

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.btsList', {
                url: '/btsList',
                templateUrl: 'app/modules/bts/bts.html',
                controller: 'BTSCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'BTS'
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
            .state('app.btsEntry', {
                url: '/btsEntry/:id',
                templateUrl: 'app/modules/btsEntry/btsEntry.html',
                controller: 'BTSEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'BTS Entry'
                }
            });
    }]);
'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.cabangList', {
                url: '/cabangList',
                templateUrl: 'app/modules/cabang/cabang.html',
                controller: 'CabangCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Cabang'
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
            .state('app.cabangEntry', {
                url: '/cabangEntry/:id',
                templateUrl: 'app/modules/cabangEntry/cabangEntry.html',
                controller: 'CabangEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Cabang Entry'
                }
            });
    }]);
'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.costKategoriList', {
                url: '/costKategoriList',
                templateUrl: 'app/modules/costKategori/costKategori.html',
                controller: 'CostKategoriCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'CostKategori'
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
            .state('app.costKategoriEntry', {
                url: '/costKategoriEntry/:id',
                templateUrl: 'app/modules/costKategoriEntry/costKategoriEntry.html',
                controller: 'CostKategoriEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Cost Kategori Entry'
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

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.deliveryAreaList', {
                url: '/deliveryAreaList',
                templateUrl: 'app/modules/deliveryArea/deliveryArea.html',
                controller: 'DeliveryAreaCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Delivery Area'
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
            .state('app.deliveryAreaEntry', {
                url: '/deliveryAreaEntry/:id',
                templateUrl: 'app/modules/deliveryAreaEntry/deliveryAreaEntry.html',
                controller: 'DeliveryAreaEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Delivery Area Entry'
                }
            });
    }]);
'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.kategoriJabatanList', {
                url: '/kategoriJabatanList',
                templateUrl: 'app/modules/kategoriJabatan/kategoriJabatan.html',
                controller: 'KategoriJabatanCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Kategori Jabatan'
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
            .state('app.kategoriJabatanEntry', {
                url: '/kategoriJabatanEntry/:id',
                templateUrl: 'app/modules/kategoriJabatanEntry/kategoriJabatanEntry.html',
                controller: 'KategoriJabatanEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'KategoriJabatan Entry'
                }
            });
    }]);
'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.kotaList', {
                url: '/kotaList',
                templateUrl: 'app/modules/kota/kota.html',
                controller: 'KotaCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Kota'
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
            .state('app.kotaEntry', {
                url: '/kotaEntry/:id',
                templateUrl: 'app/modules/kotaEntry/kotaEntry.html',
                controller: 'KotaEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Kota Entry'
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
            .state('app.operatorList', {
                url: '/operatorList',
                templateUrl: 'app/modules/operator/operator.html',
                controller: 'OperatorCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Operator'
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
            .state('app.operatorEntry', {
                url: '/operatorEntry/:id',
                templateUrl: 'app/modules/operatorEntry/operatorEntry.html',
                controller: 'OperatorEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Operator Entry'
                }
            });
    }]);
'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.projectList', {
                url: '/projectList',
                templateUrl: 'app/modules/project/project.html',
                controller: 'ProjectCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Project'
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
            .state('app.projectEntry', {
                url: '/projectEntry/:id',
                templateUrl: 'app/modules/projectEntry/projectEntry.html',
                controller: 'ProjectEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Project Entry'
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
            .state('app.sowList', {
                url: '/sowList',
                templateUrl: 'app/modules/sow/sow.html',
                controller: 'SOWCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'SOW'
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
            .state('app.sowEntry', {
                url: '/sowEntry/:id',
                templateUrl: 'app/modules/sowEntry/sowEntry.html',
                controller: 'SOWEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'SOW Entry'
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
            .state('app.sowInfo', {
                url: '/sowInfo/:id',
                templateUrl: 'app/modules/sowInfo/sowInfo.html',
                controller: 'SOWInfoCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'SOW Detail'
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
        .controller('AreaCtrl', AreaCtrl);

    AreaCtrl.$inject = ['$scope', '$state', 'areaDtService', 'areaDeleteService', 'areaViewService'];

    function AreaCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        dtService.init(self);
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
        .controller('AreaEntryCtrl', AreaEntryCtrl);

    AreaEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'AreaSaveService', 'AreaBindingService', 'FormControlService', 'select2Service'];

    function AreaEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
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

    AsetEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'AsetSaveService', 'AsetBindingService', 'FormControlService', 'select2Service'];

    function AsetEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
        var self = this;
        self.stateParam = sParam;
       
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

    AsetKategoriEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'AsetKategoriSaveService', 'AsetKategoriBindingService', 'FormControlService', 'select2Service'];

    function AsetKategoriEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
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
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('BTSCtrl', BTSCtrl);

    BTSCtrl.$inject = ['$scope', '$state', 'btsDtService', 'btsDeleteService', 'btsViewService'];

    function BTSCtrl($scope, $state, dtService, deleteService, viewService) {
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
        .controller('BTSEntryCtrl', BTSEntryCtrl);

    BTSEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'BTSSaveService', 'BTSBindingService', 'FormControlService', 'BTSSelect2Service'];

    function BTSEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, BTSSelect2Service) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
            BTSSelect2Service.init(self);
        });

        return self;
    }
})();
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('CabangCtrl', CabangCtrl);

    CabangCtrl.$inject = ['$scope', '$state', 'cabangDtService', 'cabangDeleteService', 'cabangViewService'];

    function CabangCtrl($scope, $state, dtService, deleteService, viewService) {
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
        .controller('CabangEntryCtrl', CabangEntryCtrl);

    CabangEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'CabangSaveService', 'CabangBindingService', 'FormControlService', 'select2Service'];

    function CabangEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
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
        .controller('CostKategoriCtrl', CostKategoriCtrl);

    CostKategoriCtrl.$inject = ['$scope', '$state', 'costKategoriDtService', 'costKategoriDeleteService', 'costKategoriViewService'];

    function CostKategoriCtrl($scope, $state, dtService, deleteService, viewService) {
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
        .controller('CostKategoriEntryCtrl', CostKategoriEntryCtrl);

    CostKategoriEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'CostKategoriSaveService', 'CostKategoriBindingService', 'FormControlService', 'select2Service'];

    function CostKategoriEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
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

    angular.module('global-solusindo')
        .controller('DeliveryAreaCtrl', DeliveryAreaCtrl);

    DeliveryAreaCtrl.$inject = ['$scope', '$state', 'deliveryAreaDtService', 'deliveryAreaDeleteService', 'deliveryAreaViewService'];

    function DeliveryAreaCtrl($scope, $state, dtService, deleteService, viewService) {
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
        .controller('DeliveryAreaEntryCtrl', DeliveryAreaEntryCtrl);

    DeliveryAreaEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'DeliveryAreaSaveService', 'DeliveryAreaBindingService', 'FormControlService', 'select2Service'];

    function DeliveryAreaEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
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
        .controller('KategoriJabatanCtrl', KategoriJabatanCtrl);

    KategoriJabatanCtrl.$inject = ['$scope', '$state', 'kategoriJabatanDtService', 'kategoriJabatanDeleteService', 'kategoriJabatanViewService'];

    function KategoriJabatanCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        dtService.init(self);
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
        .controller('KategoriJabatanEntryCtrl', KategoriJabatanEntryCtrl);

    KategoriJabatanEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'KategoriJabatanSaveService', 'KategoriJabatanBindingService', 'FormControlService', 'select2Service'];

    function KategoriJabatanEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
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
        .controller('KotaCtrl', KotaCtrl);

    KotaCtrl.$inject = ['$scope', '$state', 'kotaDtService', 'kotaDeleteService', 'kotaViewService'];

    function KotaCtrl($scope, $state, dtService, deleteService, viewService) {
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
        .controller('KotaEntryCtrl', KotaEntryCtrl);

    KotaEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'KotaSaveService', 'KotaBindingService', 'FormControlService', 'select2Service'];

    function KotaEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
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
        .controller('OperatorCtrl', OperatorCtrl);

    OperatorCtrl.$inject = ['$scope', '$state', 'operatorDtService', 'operatorDeleteService', 'operatorViewService'];

    function OperatorCtrl($scope, $state, dtService, deleteService, viewService) {
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
        .controller('OperatorEntryCtrl', OperatorEntryCtrl);

    OperatorEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'OperatorSaveService', 'OperatorBindingService', 'FormControlService', 'select2Service'];

    function OperatorEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
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
        .controller('ProjectCtrl', ProjectCtrl);

    ProjectCtrl.$inject = ['$scope', '$state', 'projectDtService', 'projectDeleteService', 'projectViewService'];

    function ProjectCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

       dtService.init(self);
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
        .controller('ProjectEntryCtrl', ProjectEntryCtrl);

    ProjectEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'ProjectSaveService', 'ProjectBindingService', 'FormControlService', 'ProjectSelect2Service'];

    function ProjectEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, ProjectSelect2Service) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
            ProjectSelect2Service.init(self);
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
        .controller('SOWCtrl', SOWCtrl);

    SOWCtrl.$inject = ['$scope', '$state', 'sowDtService', 'sowDeleteService', 'sowViewService'];

    function SOWCtrl($scope, $state, dtService, deleteService, viewService) {
        var self = this;

        dtService.init(self);
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
        .controller('SOWEntryCtrl', SOWEntryCtrl);

    SOWEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'SOWSaveService', 'SOWBindingService', 'FormControlService', 'SOWSelect2Service', 'HttpService'];

    function SOWEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, SOWSelect2Service, http) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
            SOWSelect2Service.init(self);

            self.getUsers = function (jabatanFk, keyword) {
                http.get('user/search', {
                    pageIndex: 1,
                    pageSize: 5,
                    keyword: keyword,
                    kategoriJabatan_fk: jabatanFk
                }).then(function (response) {
                    self.formData.users = response.data.records;
                });
            };
        });
         
        return self;
    }
})();
(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:costEntryModal
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('costEntryModalCtrl', costEntryModalCtrl);

    costEntryModalCtrl.$inject = ['$scope', '$uibModalInstance', 'costEntryModalBindingService', '$stateParams', 'costEntryModalSaveService', 'costEntryModalCancelService', 'select2Service','cost_pk'];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */
    function costEntryModalCtrl($scope, $uibModalInstance, bindingService, sParam, saveService, cancelService, select2Service, cost_pk) {
        var self = this;
        self.stateParam = sParam;
        self.model = {};
        self.model.cost_pk = cost_pk;
        self.model.sow_fk = sParam.id; 
        self.modalInstance = $uibModalInstance;

        self.formData = {};
        self.formData.costKategoris = [{
            costKategori_pk: "1",
            title: ""
        }];
 
        bindingService.init(self).then(function (res) {
            saveService.init(self);
            cancelService.init(self);
            
            angular.element(document).ready(function () {
                select2Service.liveSearch("costKategori/search", {
                    selector: '#kategoriCost_fk',
                    valueMember: 'costKategori_pk',
                    displayMember: 'title',
                    callback: function (data) {
                        self.formData.costKategoris = data;
                    },
                    onSelected: function (data) {
                        self.model.kategoriCost_fk = data.costKategori_pk;
                    }
                });
            });

        });

        $scope.$on('ui.layout.resize', function (e, beforeContainer, afterContainer) {
            ctrl.datatable.columns.adjust();
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
        .controller('SOWInfoCtrl', SOWInfoCtrl);

    SOWInfoCtrl.$inject = ['$scope', '$stateParams', '$state', 'SOWInfoBindingService', 'HttpService', 'costDtService', 'costShowModalService', 'costDeleteService'];

    function SOWInfoCtrl($scope, sParam, $state, bindingService, http, costDtService, costShowModalService, costDeleteService) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            costDtService.init(self);
            costShowModalService.init(self);
            costDeleteService.init(self);
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

    UserEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'UserSaveService', 'UserBindingService', 'FormControlService', 'UserSelect2Service'];

    function UserEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, UserSelect2Service) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
            UserSelect2Service.init(self);
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
        .factory('areaDeleteService', area);

    area.$inject = ['HttpService', 'uiService'];

    function area(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('area', ids).then(function (response) {
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
            var ids = [data.area_pk];
            ui.alert.confirm("Are you sure want to delete area '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].area_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#area tbody').on('click', '#delete', function () {
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
        .factory('areaDtService', area);

    area.$inject = ['DatatableService'];

    function area(ds) {
        var self = this;
        var controller = {};

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#area", "area/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "area_pk"
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
            controller.datatable = dt;
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
        .factory('areaViewService', areaView);

    areaView.$inject = ['HttpService', '$state', 'uiService'];

    function areaView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.areaEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#area tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.area_pk);
            });

            $("#area tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["area_pk"];
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
        .factory('AreaBindingService', AreaBindingService);

    AreaBindingService.$inject = ['HttpService', '$state'];

    function AreaBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('area/form/' + id);
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
        .factory('AreaSaveService', AreaEntry);

    AreaEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function AreaEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        self.create = function (model) {
            http.post('area', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    $state.go('app.areaEntry', { id: res.data.model.area_pk });
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('area', model).then(function (res) {
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
            if (model.area_pk === 0) {
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
        .factory('btsDeleteService', bts);

    bts.$inject = ['HttpService', 'uiService'];

    function bts(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('bts', ids).then(function (response) {
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
            var ids = [data.bts_pk];
            ui.alert.confirm("Are you sure want to delete bts '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].bts_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#bts tbody').on('click', '#delete', function () {
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
        .factory('btsDtService', bts);

    bts.$inject = ['DatatableService'];

    function bts(ds) {
        var self = this;

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#bts", "bts/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "bts_pk"
                },
                {
                    "data": "name"
                },
                {
                    "data": "operatorTitle"
                },
                {
                    "data": "cellId"
                },
                {
                    "data": "statusBtsTitle"
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
        .factory('btsViewService', btsView);

    btsView.$inject = ['HttpService', '$state', 'uiService'];

    function btsView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.btsEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#bts tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.bts_pk);
            });

            $("#bts tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["bts_pk"];
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
        .factory('BTSBindingService', BTSBindingService);

    BTSBindingService.$inject = ['HttpService', '$state'];

    function BTSBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('bts/form/' + id);
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
        .factory('BTSSaveService', BTSEntry);

    BTSEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function BTSEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        self.create = function (model) {
            http.post('bts', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    $state.go('app.btsEntry', { id: res.data.model.bts_pk });
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('bts', model).then(function (res) {
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
            if (model.bts_pk === 0) {
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
        .factory('BTSSelect2Service', BTSSelect2Service);

    BTSSelect2Service.$inject = ['$state', 'HttpService', 'uiService', 'select2Service'];

    function BTSSelect2Service($state, http, ui, select2Service) {
        var self = this;
        var controller; 

        function getOperators() {
            select2Service.liveSearch("operator/search", {
                selector: '#operator_fk',
                valueMember: 'operator_pk',
                displayMember: 'title',
                callback: function (data) {
                    controller.formData.operators = data;
                },
                onSelected: function (data) {
                    controller.model.operator_fk = data.operator_pk;
                }
            });
        }

        function getBtsStatuses() {
            select2Service.liveSearch("btsStatus/search", {
                selector: '#statusBts_fk',
                valueMember: 'btsStatus_pk',
                displayMember: 'title',
                callback: function (data) {
                    controller.formData.btsStatuses = data;
                },
                onSelected: function (data) {
                    controller.model.statusBts_fk = data.btsStatus_pk;
                }
            });
        }

        function getAreas() {
            select2Service.liveSearch("area/search", {
                selector: '#area_fk',
                valueMember: 'area_pk',
                displayMember: 'title',
                callback: function (data) {
                    controller.formData.areas = data;
                },
                onSelected: function (data) {
                    controller.model.area_fk = data.area_pk;
                }
            });
        }

        function getKotas() {
            select2Service.liveSearch("kota/search", {
                selector: '#kota_fk',
                valueMember: 'kota_pk',
                displayMember: 'title',
                callback: function (data) {
                    controller.formData.kotas = data;
                },
                onSelected: function (data) {
                    controller.model.kota_fk = data.kota_pk;
                }
            });
        }

        function getCabang() {
            select2Service.liveSearch("cabang/search", {
                selector: '#cabang_fk',
                valueMember: 'cabang_pk',
                displayMember: 'title',
                callback: function (data) {
                    controller.formData.cabangs = data;
                },
                onSelected: function (data) {
                    controller.model.cabang_fk = data.cabang_pk;
                }
            });
        }
      
        self.init = function (ctrl) {
            controller = ctrl;
            angular.element(document).ready(function () {
                getOperators();
                getBtsStatuses();
                getAreas();
                getKotas();
                getCabang();
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
        .factory('cabangDeleteService', cabang);

    cabang.$inject = ['HttpService', 'uiService'];

    function cabang(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('cabang', ids).then(function (response) {
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
            var ids = [data.cabang_pk];
            ui.alert.confirm("Are you sure want to delete cabang '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].cabang_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#cabang tbody').on('click', '#delete', function () {
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
        .factory('cabangDtService', cabang);

    cabang.$inject = ['DatatableService'];

    function cabang(ds) {
        var self = this;

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#cabang", "cabang/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "cabang_pk"
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
        .factory('cabangViewService', cabangView);

    cabangView.$inject = ['HttpService', '$state', 'uiService'];

    function cabangView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.cabangEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#cabang tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.cabang_pk);
            });

            $("#cabang tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["cabang_pk"];
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
        .factory('CabangBindingService', CabangBindingService);

    CabangBindingService.$inject = ['HttpService', '$state'];

    function CabangBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('cabang/form/' + id);
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
        .factory('CabangSaveService', CabangEntry);

    CabangEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function CabangEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        self.create = function (model) {
            http.post('cabang', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    $state.go('app.cabangEntry', { id: res.data.model.cabang_pk });
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('cabang', model).then(function (res) {
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
            if (model.cabang_pk === 0) {
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
        .factory('costKategoriDeleteService', costKategori);

    costKategori.$inject = ['HttpService', 'uiService'];

    function costKategori(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('costKategori', ids).then(function (response) {
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
            var ids = [data.costKategori_pk];
            ui.alert.confirm("Are you sure want to delete cost kategori '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].costKategori_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#costKategori tbody').on('click', '#delete', function () {
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
        .factory('costKategoriDtService', costKategori);

    costKategori.$inject = ['DatatableService'];

    function costKategori(ds) {
        var self = this;

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#costKategori", "costKategori/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "costKategori_pk"
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
        .factory('costKategoriViewService', costKategoriView);

    costKategoriView.$inject = ['HttpService', '$state', 'uiService'];

    function costKategoriView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.costKategoriEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#costKategori tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.costKategori_pk);
            });

            $("#costKategori tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["costKategori_pk"];
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
        .factory('CostKategoriBindingService', CostKategoriBindingService);

    CostKategoriBindingService.$inject = ['HttpService', '$state'];

    function CostKategoriBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('costKategori/form/' + id);
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
        .factory('CostKategoriSaveService', CostKategoriEntry);

    CostKategoriEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function CostKategoriEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        self.create = function (model) {
            http.post('costKategori', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    $state.go('app.costKategoriEntry', { id: res.data.model.costKategori_pk });
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('costKategori', model).then(function (res) {
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
            if (model.costKategori_pk === 0) {
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
        .factory('deliveryAreaDeleteService', deliveryArea);

    deliveryArea.$inject = ['HttpService', 'uiService'];

    function deliveryArea(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('deliveryArea', ids).then(function (response) {
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
            var ids = [data.deliveryArea_pk];
            ui.alert.confirm("Are you sure want to delete delivery area '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].deliveryArea_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#deliveryArea tbody').on('click', '#delete', function () {
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
        .factory('deliveryAreaDtService', deliveryArea);

    deliveryArea.$inject = ['DatatableService'];

    function deliveryArea(ds) {
        var self = this;

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#deliveryArea", "deliveryArea/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "deliveryArea_pk"
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
        .factory('deliveryAreaViewService', deliveryAreaView);

    deliveryAreaView.$inject = ['HttpService', '$state', 'uiService'];

    function deliveryAreaView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.deliveryAreaEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#deliveryArea tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.deliveryArea_pk);
            });

            $("#deliveryArea tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["deliveryArea_pk"];
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
        .factory('DeliveryAreaBindingService', DeliveryAreaBindingService);

    DeliveryAreaBindingService.$inject = ['HttpService', '$state'];

    function DeliveryAreaBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('deliveryArea/form/' + id);
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
        .factory('DeliveryAreaSaveService', DeliveryAreaEntry);

    DeliveryAreaEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function DeliveryAreaEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        self.create = function (model) {
            http.post('deliveryArea', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    $state.go('app.deliveryAreaEntry', { id: res.data.model.deliveryArea_pk });
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('deliveryArea', model).then(function (res) {
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
            if (model.deliveryArea_pk === 0) {
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
        .factory('kategoriJabatanDeleteService', kategoriJabatan);

    kategoriJabatan.$inject = ['HttpService', 'uiService'];

    function kategoriJabatan(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('kategoriJabatan', ids).then(function (response) {
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
            var ids = [data.kategoriJabatan_pk];
            ui.alert.confirm("Are you sure want to delete kategori jabatan '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].kategoriJabatan_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#kategoriJabatan tbody').on('click', '#delete', function () {
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
        .factory('kategoriJabatanDtService', kategoriJabatan);

    kategoriJabatan.$inject = ['DatatableService'];

    function kategoriJabatan(ds) {
        var self = this;
        var controller = {};

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#kategoriJabatan", "kategoriJabatan/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "kategoriJabatan_pk"
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
            controller.datatable = dt;
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
        .factory('kategoriJabatanViewService', kategoriJabatanView);

    kategoriJabatanView.$inject = ['HttpService', '$state', 'uiService'];

    function kategoriJabatanView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.kategoriJabatanEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#kategoriJabatan tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.kategoriJabatan_pk);
            });

            $("#kategoriJabatan tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["kategoriJabatan_pk"];
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
        .factory('KategoriJabatanBindingService', KategoriJabatanBindingService);

    KategoriJabatanBindingService.$inject = ['HttpService', '$state'];

    function KategoriJabatanBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('kategoriJabatan/form/' + id);
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
     * @name 
     * @description
     * # dashboardService
     * Service of the app
     */

    angular
        .module('global-solusindo')
        .factory('KategoriJabatanSaveService', KategoriJabatanEntry);

    KategoriJabatanEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function KategoriJabatanEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        self.create = function (model) {
            http.post('kategoriJabatan', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    $state.go('app.kategoriJabatanEntry', { id: res.data.model.kategoriJabatan_pk });
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('kategoriJabatan', model).then(function (res) {
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
            if (model.kategoriJabatan_pk === 0) {
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
        .factory('kotaDeleteService', kota);

    kota.$inject = ['HttpService', 'uiService'];

    function kota(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('kota', ids).then(function (response) {
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
            var ids = [data.kota_pk];
            ui.alert.confirm("Are you sure want to delete kota '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].kota_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#kota tbody').on('click', '#delete', function () {
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
        .factory('kotaDtService', kota);

    kota.$inject = ['DatatableService'];

    function kota(ds) {
        var self = this;

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#kota", "kota/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "kota_pk"
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
        .factory('kotaViewService', kotaView);

    kotaView.$inject = ['HttpService', '$state', 'uiService'];

    function kotaView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.kotaEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#kota tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.kota_pk);
            });

            $("#kota tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["kota_pk"];
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
        .factory('KotaBindingService', KotaBindingService);

    KotaBindingService.$inject = ['HttpService', '$state'];

    function KotaBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('kota/form/' + id);
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
        .factory('KotaSaveService', KotaEntry);

    KotaEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function KotaEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        self.create = function (model) {
            http.post('kota', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    $state.go('app.kotaEntry', { id: res.data.model.kota_pk });
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('kota', model).then(function (res) {
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
            if (model.kota_pk === 0) {
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
                        "data": "kategoriJabatanName"
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
                        "data": "kategoriJabatanName"
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
        .factory('operatorDeleteService', operator);

    operator.$inject = ['HttpService', 'uiService'];

    function operator(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('operator', ids).then(function (response) {
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
            var ids = [data.operator_pk];
            ui.alert.confirm("Are you sure want to delete operator '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].operator_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#operator tbody').on('click', '#delete', function () {
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
        .factory('operatorDtService', operator);

    operator.$inject = ['DatatableService'];

    function operator(ds) {
        var self = this;

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#operator", "operator/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "operator_pk"
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
        .factory('operatorViewService', operatorView);

    operatorView.$inject = ['HttpService', '$state', 'uiService'];

    function operatorView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.operatorEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#operator tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.operator_pk);
            });

            $("#operator tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["operator_pk"];
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
        .factory('OperatorBindingService', OperatorBindingService);

    OperatorBindingService.$inject = ['HttpService', '$state'];

    function OperatorBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('operator/form/' + id);
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
        .factory('OperatorSaveService', OperatorEntry);

    OperatorEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function OperatorEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        self.create = function (model) {
            http.post('operator', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    $state.go('app.operatorEntry', { id: res.data.model.operator_pk });
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('operator', model).then(function (res) {
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
            if (model.operator_pk === 0) {
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
        .factory('projectDeleteService', project);

    project.$inject = ['HttpService', 'uiService'];

    function project(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('project', ids).then(function (response) {
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
            var ids = [data.project_pk];
            ui.alert.confirm("Are you sure want to delete project '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].project_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#project tbody').on('click', '#delete', function () {
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
        .factory('projectDtService', project);

    project.$inject = ['DatatableService'];

    function project(ds) {
        var self = this;
        var controller = {};

        self.init = function (ctrl) {
            controller = ctrl;

            var titleColumnIndex = 1;
            var dt = ds.init("#project", "project/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "project_pk"
                },
                {
                    "data": "title"
                },
                {
                    "data": "operatorTitle"
                },
                {
                    "data": "deliveryAreaTitle"
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
            controller.datatable = dt;
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
        .factory('projectViewService', projectView);

    projectView.$inject = ['HttpService', '$state', 'uiService'];

    function projectView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.projectEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#project tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.project_pk);
            });

            $("#project tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["project_pk"];
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
        .factory('ProjectBindingService', ProjectBindingService);

    ProjectBindingService.$inject = ['HttpService', '$state'];

    function ProjectBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('project/form/' + id);
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
        .factory('ProjectSaveService', ProjectEntry);

    ProjectEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function ProjectEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        self.create = function (model) {
            http.post('project', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    $state.go('app.projectEntry', { id: res.data.model.project_pk });
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('project', model).then(function (res) {
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
            if (model.project_pk === 0) {
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
        .factory('ProjectSelect2Service', ProjectSelect2Service);

    ProjectSelect2Service.$inject = ['$state', 'HttpService', 'uiService', 'select2Service'];

    function ProjectSelect2Service($state, http, ui, select2Service) {
        var self = this;
        var controller;

        function getOperators() {
            select2Service.liveSearch("operator/search", {
                selector: '#operator_fk',
                valueMember: 'operator_pk',
                displayMember: 'title',
                callback: function (data) {
                    controller.formData.operators = data;
                },
                onSelected: function (data) {
                    controller.model.operator_fk = data.operator_pk;
                }
            });
        }

        function getDeliveryArea() {
            select2Service.liveSearch("deliveryArea/search", {
                selector: '#deliveryArea_fk',
                valueMember: 'deliveryArea_pk',
                displayMember: 'title',
                callback: function (data) {
                    controller.formData.deliveryAreas = data;
                },
                onSelected: function (data) {
                    controller.model.deliveryArea_fk = data.deliveryArea_pk;
                }
            });
        }

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element(document).ready(function () {
                getOperators(); 
                getDeliveryArea();
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

    function exception(message) {
        this.message = message;
        this.toString = function () {
            return this.message;
        };
    }

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
                          
                            if (param.callback)
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

        function handleSubErrors(subErrors) {
            var validClass = "form-control is-valid";
            var invalidClass = "form-control is-invalid";
            if (subErrors) {
                var tables = document.getElementsByTagName('table');
                for (var m = 0; m < tables.length; m++) {
                    var table = tables[m];
                    for (var j = 0; j < subErrors.length; j++) {
                        var subError = subErrors[j];
                        var rows = table.tBodies[0].rows;
                        for (var k = 0; k < rows.length; k++) {
                            var cells = rows[k].querySelectorAll('[name]');
                            cells.forEach(function (cell) {
                                var rowIndex = cell.parentElement.parentElement.sectionRowIndex;
                                var elementName = cell.getAttribute('name');
                                if (subError.index == rowIndex) {
                                    subError.errors.forEach(function (subErrorItem) { 
                                        if (subErrorItem.propertyName.toLowerCase() == elementName.toLowerCase()) {
                                            cell.className = cell.className.replace(validClass, invalidClass);
                                            var childNodes = cell.parentElement.childNodes;
                                            childNodes.forEach(function (cell) {
                                                if (cell.className == 'invalid-feedback') {
                                                    cell.innerHTML = subErrorItem.message;
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    }
                }

            }
        }

        self.serverValidation = function (obj) {
            var controls = document.querySelectorAll('[name]');

            var errors = obj;


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
                        if (item.nodeName == 'META')
                            return true;
                        var fieldName = item.name; 
                        if (fieldName == undefined)
                            return true;
                        if (error.propertyName.toLowerCase() == fieldName.toLowerCase()) {
                            item.className = item.className.replace(validClass, invalidClass);

                            var childNodes = item.parentElement.childNodes;
                            childNodes.forEach(function (item) {
                                if (item.className == 'invalid-feedback') {
                                    item.innerHTML = error.message;
                                }
                            });
                        } 
                    });
                    handleSubErrors(error.subErrors);
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
        .factory('sowDeleteService', sow);

    sow.$inject = ['HttpService', 'uiService'];

    function sow(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('sow', ids).then(function (response) {
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
            var ids = [data.sow_pk];
            ui.alert.confirm("Are you sure want to delete sow '" + data.sowName + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].sow_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#sow tbody').on('click', '#delete', function () {
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
        .factory('sowDtService', sow);

    sow.$inject = ['DatatableService'];

    function sow(ds) {
        var self = this;
        var controller = {};

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#sow", "sow/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "sow_pk"
                },
                {
                    "data": "sowName"
                },
                {
                    "data": "btsName"
                },
                {
                    "data": "tglMulai"
                },
                {
                    "data": "sowStatusTitle"
                },
                {
                    "orderable": false,
                    "className": "text-center",
                    "render": function (data) {
                        return "<button id='info' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success'><i class='fa fa-info'></i></button> " +
                            "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning'><i class='fas fa-pencil-alt'></i></button> " +
                            "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger'><i class='fa fa-trash-alt'></i></button>"
                    }
                },
                {
                    "orderable": false,
                    "className": "text-center",
                    "render": function (data) {
                        return "<button id='approve' rel='tooltip' title='Approval' data-placement='left' class='btn btn-info'>Approval</button>";
                    }
                }
                ]
            });
            controller.datatable = dt;
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
        .factory('sowViewService', sowView);

    sowView.$inject = ['HttpService', '$state', 'uiService'];

    function sowView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.sowEntry', {
                id: data
            });
        };

        self.info = function (data) {
            $state.go('app.sowInfo', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#sow tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.sow_pk);
            });

            $('#sow tbody').on('click', '#info', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.info(data.sow_pk);
            });

            $("#sow tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["sow_pk"];
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
        .factory('SOWBindingService', SOWBindingService);

    SOWBindingService.$inject = ['HttpService', '$state'];

    function SOWBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('sow/form/' + id);
        };

        self.init = function (ctrl) {
            controller = ctrl;
            var id = ctrl.stateParam.id;
            return new Promise(function (resolve, reject) {
                self.applyBinding(id).then(function (res) {
                    controller.formData = res.data.formData;
                    controller.model = res.data.model;
                    controller.formData.users = [];
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
        .factory('SOWSaveService', SOWEntry);

    SOWEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function SOWEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        self.create = function (model) {
            http.post('sow', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    $state.go('app.sowEntry', { id: res.data.model.sow_pk });
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('sow', model).then(function (res) {
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
            if (model.sow_pk === 0) {
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
        .factory('SOWSelect2Service', SOWSelect2Service);

    SOWSelect2Service.$inject = ['$state', 'HttpService', 'uiService', 'select2Service'];

    function SOWSelect2Service($state, http, ui, select2Service) {
        var self = this;
        var controller = {};

        function getProjects() {
            select2Service.liveSearch("project/search", {
                selector: '#project_fk',
                valueMember: 'project_pk',
                displayMember: 'title',
                callback: function (data) {
                    controller.formData.projects = data;
                },
                onSelected: function (data) {
                    controller.model.project_fk = data.project_pk;
                }
            });
        }

        function getBTSs() {
            select2Service.liveSearch("bts/search", {
                selector: '#bts_fk',
                valueMember: 'bts_pk',
                displayMember: 'name',
                callback: function (data) {
                    controller.formData.btses = data;
                },
                onSelected: function (data) {
                    controller.model.bts_fk = data.bts_pk;
                }
            });
        }

        //function getUsers() {
        //    select2Service.liveSearch("user/search", {
        //        selector: '#user_fk',
        //        valueMember: 'user_pk',
        //        displayMember: 'name',
        //        callback: function (data) {
        //            controller.formData.users = data;
        //        },
        //        onSelected: function (data) {
        //            controller.model.user_fk = data.user_pk;
        //        }
        //    });
        //}

        function getUsers(jabatanFk, keyword) {
            http.get('user/search', {
                pageIndex: 1,
                pageSize: 5,
                keyword: keyword,
                kategoriJabatan_fk: jabatanFk
            }).then(function (response) {
                controller.formData.users = response.data.records;
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element(document).ready(function () {
                getProjects();
                getBTSs();
                //controller.getUsers = getUsers;
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
        .factory('costDeleteService', costDeleteService);

    costDeleteService.$inject = ['HttpService', 'uiService'];

    function costDeleteService(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('cost', ids).then(function (response) {
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
            var ids = [data.cost_pk];
            ui.alert.confirm("Are you sure want to delete cost '" + data.kategoriCostTitle + "'?", function () {
                return deleteRecords(ids);
            });
        };
 
        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#cost tbody').on('click', '#delete', function () {
                var selectedRecord = controller.datatable.row($(this).parents('tr')).data();
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
        .factory('costDtService', costDtService);

    costDtService.$inject = ['DatatableService'];

    function costDtService(ds) {
        var self = this;
        var controller = {};

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#cost", "cost/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10,
                    sow_fk: controller.stateParam.id
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "orderable": false,
                    "data": "cost_pk"
                },
                {
                    "data": "kategoriCostTitle"
                },
                {
                    "data": "nominal"
                },
                {
                    "data": "deskripsi"
                },
                {
                    "data": "tanggal"
                },
                {
                    "orderable": false,
                    "className": "text-center",
                    "render": function (data) {
                        return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning'><i class='fas fa-pencil-alt'></i></button> " +
                            "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger'><i class='fa fa-trash-alt'></i></button>"
                    }
                }
                ]
            });
            controller.datatable = dt;
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
        .factory('costEntryModalBindingService', costEntryModalBindingService);

    costEntryModalBindingService.$inject = ['HttpService', '$state'];

    function costEntryModalBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('cost/form/' + id);
        };

        self.init = function (ctrl) {
            controller = ctrl;
            var id = ctrl.model.cost_pk;
          
            return new Promise(function (resolve, reject) {
                self.applyBinding(id).then(function (res) {
                    if (res.success) {
                        controller.formData = res.data.formData;
                        controller.model = res.data.model;
                        controller.formControls = res.data.formControls; 

                        controller.model.sow_fk = controller.stateParam.id;
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
        .factory('costEntryModalCancelService', costEntryModalCancelService);

    costEntryModalCancelService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function costEntryModalCancelService($state, http, ui, validation) {
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
        .factory('costEntryModalSaveService', costEntryModalSaveService);

    costEntryModalSaveService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function costEntryModalSaveService($state, http, ui, validation) {
        var self = this;
        var controller;

        self.create = function (model) {
            http.post('cost', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    controller.modalInstance.close();
                } else {
                    ui.alert.error(res.message);
                    validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('cost', model).then(function (res) {
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
            if (model.cost_pk === 0) {
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
        .factory('costShowModalService', costShowModalService);

    costShowModalService.$inject = ['$state', 'HttpService', 'uiService', 'validationService', '$uibModal'];

    function costShowModalService($state, http, ui, validation, $uibModal) {
        var self = this;
        var controller;

        function openModal(cost_pk) {
            var modalInstance = $uibModal.open({
                templateUrl: 'app/modules/sowInfo/costEntryModal/costEntryModal.html',
                controller: 'costEntryModalCtrl',
                controllerAs: 'vm',
                windowTopClass: 'modal-list-user',
                resolve: {
                    cost_pk: function () {
                        return cost_pk;
                    }
                }
            });
            return modalInstance;
        }

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#addCost').on('click', function () { 
                openModal(0);
            });

            //Row delete button event
            $('#cost tbody').on('click', '#view', function () {
                var selectedRecord = controller.datatable.row($(this).parents('tr')).data();
                openModal(selectedRecord.cost_pk);
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
        .factory('SOWInfoBindingService', SOWInfoBindingService);

    SOWInfoBindingService.$inject = ['HttpService', '$state'];

    function SOWInfoBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('sow/info/' + id);
        };

        self.init = function (ctrl) {
            controller = ctrl;
            var id = ctrl.stateParam.id;
            return new Promise(function (resolve, reject) {
                self.applyBinding(id).then(function (res) {
                    controller.formData = res.data.formData;
                    controller.model = res.data;
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
                {
                    "data": "kategoriJabatanTitle"
                },
                {
                    "data": "roleGroupTitle"
                },
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
            validation.clearValidationErrors({});
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
     * @name app.service:dashboardService
     * @description
     * # dashboardService
     * Service of the app
     */

    angular
        .module('global-solusindo')
        .factory('UserSelect2Service', UserSelect2Service);

    UserSelect2Service.$inject = ['$state', 'HttpService', 'uiService', 'select2Service'];

    function UserSelect2Service($state, http, ui, select2Service) {
        var self = this;
        var controller;

        function getKategoriJabatans() {
            select2Service.liveSearch("kategoriJabatan/search", {
                selector: '#kategoriJabatan_fk',
                valueMember: 'kategoriJabatan_pk',
                displayMember: 'title',
                callback: function (data) {
                    controller.formData.kategoriJabatans = data;
                },
                onSelected: function (data) {
                    controller.model.kategoriJabatan_fk = data.kategoriJabatan_pk;
                }
            });
        }

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element(document).ready(function () {
                getKategoriJabatans();
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