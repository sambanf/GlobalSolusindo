/*!
* global-solusindo-app - v1.0.0 - MIT LICENSE 2019-08-26. 
* @author Kairos
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
            //if (state == 'login') {
            //    if ($cookies.get('token')) {
            //        $timeout(function () {
            //            $state.go('app.dashboard');
            //            return false;
            //        });
            //    }
            //}

            // if ($cookies.get('token') == undefined) {
            //     $timeout(function () {
            //         $state.go('login');
            //         return false;
            //     });
            // }
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
            .state('app.asetHistoriList', {
                url: '/asetHistoriList/:user_fk',
                templateUrl: 'app/modules/asetHistori/asetHistori.html',
                controller: 'AsetHistoriCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Aset Histori'
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
            .state('app.asetHistoriEntry', {
                url: '/asetHistoriEntry/:id/:user_fk',
                templateUrl: 'app/modules/asetHistoriEntry/asetHistoriEntry.html',
                controller: 'AsetHistoriEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Aset Histori Entry'
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
                    label: 'Site'
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
                    label: 'Site Entry'
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
            .state('app.btsImportExcel', {
                url: '/btsImportExcel',
                templateUrl: 'app/modules/btsImportExcel/btsImportExcel.html',
                controller: 'BTSImportExcelCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Import BTS'
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
            .state('app.changePasswordEntry', {
                url: '/changePasswordEntry/',
                templateUrl: 'app/modules/changePasswordEntry/changePasswordEntry.html',
                controller: 'ChangePasswordEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Change Password'
                }
            });
    }]);
'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.checkInList', {
                url: '/checkInList',
                templateUrl: 'app/modules/checkIn/checkIn.html',
                controller: 'CheckInCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'CheckIn'
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
            .state('app.checkInEntry', {
                url: '/checkInEntry/:id',
                templateUrl: 'app/modules/checkInEntry/checkInEntry.html',
                controller: 'CheckInEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Task Approval'
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
			.state('app.dashboardNull', {
				url:'/',
				templateUrl: 'app/modules/dashboard/dashboardNull.html',
				controller: 'DashboardNullCtrl',
				controllerAs: 'db',
				ncyBreadcrumb: {
                    label: 'Global One Solusindo'
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
            .state('app.issueTypeList', {
                url: '/issueTypeList',
                templateUrl: 'app/modules/issueType/issueType.html',
                controller: 'IssueTypeCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Issue Type'
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
            .state('app.issueTypeEntry', {
                url: '/issueTypeEntry/:id',
                templateUrl: 'app/modules/issueTypeEntry/issueTypeEntry.html',
                controller: 'IssueTypeEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Issue Type Entry'
                }
            });
    }]);
'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.izinCutiList', {
                url: '/izinCutiList',
                templateUrl: 'app/modules/izinCuti/izinCuti.html',
                controller: 'IzinCutiCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Izin Cuti'
                }
            });
    }]);
'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.izinCutiApprovalList', {
                url: '/izinCutiApprovalList',
                templateUrl: 'app/modules/izinCutiApproval/izinCutiApproval.html',
                controller: 'izinCutiApprovalCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Approval Izin Cuti'
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
            .state('app.izinCutiApprovalEntry', {
                url: '/izinCutiApprovalEntry/:id',
                templateUrl: 'app/modules/izinCutiApprovalEntry/izinCutiApprovalEntry.html',
                controller: 'izinCutiApprovalEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Approval Izin Cuti'
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
            .state('app.izinCutiEntry', {
                url: '/izinCutiEntry/:id',
                templateUrl: 'app/modules/izinCutiEntry/izinCutiEntry.html',
                controller: 'IzinCutiEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Pengajuan Izin Cuti'
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
            .state('app.menuList', {
                url: '/menuList',
                templateUrl: 'app/modules/menu/menu.html',
                controller: 'MenuCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Menu'
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
            .state('app.menuEntry', {
                url: '/menuEntry/:id',
                templateUrl: 'app/modules/menuEntry/menuEntry.html',
                controller: 'MenuEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Menu Entry'
                }
            });
    }]);
'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.myTaskListList', {
                url: '/myTaskListList',
                templateUrl: 'app/modules/myTaskList/myTaskList.html',
                controller: 'MyTaskListCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'MyTaskList'
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
            .state('app.myTaskListEntry', {
                url: '/myTaskListEntry/:id',
                templateUrl: 'app/modules/myTaskListEntry/myTaskListEntry.html',
                controller: 'MyTaskListEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Task Approval'
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
            .state('app.poImportExcel', {
                url: '/poImportExcel',
                templateUrl: 'app/modules/po/poImportExcel.html',
                controller: 'POImportExcelCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Import PO'
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
            .state('app.engineerActivities', {
                url: '/activities/:id/:bulan/:bulanName',
                templateUrl: 'app/modules/report/activities/activities.html',
                controller: 'ActivitiesCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Activities'
                }
            });
    }]);
'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.dailyTaskList', {
                url: '/dailyTaskList',
                templateUrl: 'app/modules/report/dailyTask/dailyTask.html',
                controller: 'DailyTaskCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'DailyTask'
                }
            });
    }]);
'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.taskEngineerList', {
                url: '/taskEngineerList',
                templateUrl: 'app/modules/report/taskEngineer/taskEngineer.html',
                controller: 'TaskEngineerCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'TaskEngineer'
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
            .state('app.taskEngineerDetail', {
                url: '/taskEngineerDetail/:id:checkIn_fk',
                templateUrl: 'app/modules/report/taskEngineerDetail/taskEngineerDetail.html',
                controller: 'TaskEngineerDetailCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Task Engineer Detail'
                }
            });
    }]);
'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.timesheetEngineerList', {
                url: '/timesheetEngineerList',
                templateUrl: 'app/modules/report/timesheetEngineer/timesheetEngineer.html',
                controller: 'TimesheetEngineerCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Timesheet Engineer'
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
            .state('app.timesheetEngineerDetail', {
                url: '/timesheetEngineerDetail/:id',
                templateUrl: 'app/modules/report/timesheetEngineerDetail/timesheetEngineerDetail.html',
                controller: 'TimesheetEngineerDetailCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Timesheet Detail'
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
            .state('app.sowApproval', {
                url: '/sowApproval/:id',
                templateUrl: 'app/modules/sowApproval/sowApproval.html',
                controller: 'SOWApprovalCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'SOW Approval'
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
            .state('app.sowImportExcel', {
                url: '/sowImportExcel',
                templateUrl: 'app/modules/sowImportExcel/sowImportExcel.html',
                controller: 'SOWImportExcelCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Import SOW'
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
            .state('app.technologyList', {
                url: '/technologyList',
                templateUrl: 'app/modules/technology/technology.html',
                controller: 'TechnologyCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Technology'
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
            .state('app.technologyEntry', {
                url: '/technologyEntry/:id',
                templateUrl: 'app/modules/technologyEntry/technologyEntry.html',
                controller: 'TechnologyEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Technology Entry'
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
'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.userHistory', {
                url: '/userHistory/:aset_fk',
                templateUrl: 'app/modules/userHistory/userHistory.html',
                controller: 'UserHistoryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'User History'
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
            .state('app.userImportCsv', {
                url: '/userImportCsv',
                templateUrl: 'app/modules/userImportCsv/userImportCsv.html',
                controller: 'UserImportCsvCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Import User'
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
            .state('app.userImportExcel', {
                url: '/userImportExcel',
                templateUrl: 'app/modules/userImportExcel/userImportExcel.html',
                controller: 'UserImportExcelCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Import User'
                }
            });
    }]);
'use strict';

angular.module('global-solusindo')
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('app.vendorList', {
                url: '/vendorList',
                templateUrl: 'app/modules/vendor/vendor.html',
                controller: 'VendorCtrl',
                controllerAs: 'brc',
                ncyBreadcrumb: {
                    label: 'Vendor'
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
            .state('app.vendorEntry', {
                url: '/vendorEntry/:id',
                templateUrl: 'app/modules/vendorEntry/vendorEntry.html',
                controller: 'VendorEntryCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Vendor Entry'
                }
            });
    }]);
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('AreaCtrl', AreaCtrl);

    AreaCtrl.$inject = ['$scope', '$state', 'areaDtService', 'areaDeleteService', 'areaViewService','HttpService'];

    function AreaCtrl($scope, $state, dtService, deleteService, viewService, http) {
        var self = this;

        dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "Area_Input";
            var deleteRole = "Area_Delete";

            document.getElementById("addButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";

            setRole(res.data, "addButton", createRole);
            setRole(res.data, "deleteButton", deleteRole);

        })



        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }
        
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

    AsetCtrl.$inject = ['$scope', '$state', 'asetDtService', 'asetDeleteService', 'asetViewService','HttpService'];

    function AsetCtrl($scope, $state, dtService, deleteService, viewService, http) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "Aset_Input";
            var deleteRole = "Aset_Delete";

            document.getElementById("addButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";

            setRole(res.data, "addButton", createRole);
            setRole(res.data, "deleteButton", deleteRole);

        })

        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

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
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('AsetHistoriCtrl', AsetHistoriCtrl);

    AsetHistoriCtrl.$inject = ['$scope', '$state', 'asetHistoriDtService', 'asetHistoriDeleteService', 'asetHistoriViewService','HttpService'];

    function AsetHistoriCtrl($scope, $state, dtService, deleteService, viewService, http) {
        var self = this;
        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "AsetHistori_Input";
            var deleteRole = "AsetHistori_Delete";

            document.getElementById("addNewButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";

            setRole(res.data, "addNewButton", createRole);
            setRole(res.data, "deleteButton", deleteRole);

        })



        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

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
        .controller('AsetHistoriEntryCtrl', AsetHistoriEntryCtrl);

    AsetHistoriEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'AsetHistoriSaveService', 'AsetHistoriBindingService', 'FormControlService', 'select2Service'];

    function AsetHistoriEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
            
            select2Service.liveSearch("aset/searchAvaible", {
                selector: '#aset_fk',
                valueMember: 'aset_pk',
                displayMember: 'name',
                callback: function (data) { 
                    self.formData.asets = data;
                },
                onSelected: function (data) {
                    self.model.aset_fk = data.aset_pk;
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

    AsetKategoriCtrl.$inject = ['$scope', '$state', 'asetKategoriDtService', 'asetKategoriDeleteService', 'asetKategoriViewService','HttpService'];

    function AsetKategoriCtrl($scope, $state, dtService, deleteService, viewService, http) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "AsetKategori_Input";
            var deleteRole = "AsetKategori_Delete";

            document.getElementById("addButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";

            setRole(res.data, "addButton", createRole);
            setRole(res.data, "deleteButton", deleteRole);

        })



        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

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

    AuthParamCtrl.$inject = ['$scope', '$state', 'authParamDtService', 'authParamDeleteService', 'authParamViewService','HttpService'];

    function AuthParamCtrl($scope, $state, dtService, deleteService, viewService, http) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "AuthParam_Input";
            var deleteRole = "AuthParam_Delete";

            document.getElementById("addButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";

            setRole(res.data, "addButton", createRole);
            setRole(res.data, "deleteButton", deleteRole);

        })
        
        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

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

    BTSCtrl.$inject = ['$scope', '$state', 'btsDtService', 'btsDeleteService', 'btsViewService', 'HttpService','btsMapService'];

    function BTSCtrl($scope, $state, dtService, deleteService, viewService, http, mapService) {
        var self = this;
         
        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self); 
        setMap();

        function setMap() {
            http.get('bts/search', {
                keyword: '',
                forMaps: true
            }, true).then(function (response) {
                //console.log(res);
                var cities = [];
                var marker = [];

                if (response && response.data && response.data.records) {
                    response.data.records.forEach(function (bts) {

                        marker.push(bts.name);
                        marker.push(parseFloat(bts.latitude));
                        marker.push(parseFloat(bts.longitude));
                        marker.push(5);
                        marker.push(bts.operatorTitle);
                        marker.push(bts.statusBtsTitle);
                        cities.push(marker);
                        marker = [];
                    });

                    mapService.init(cities);
                }
            })
        }

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "BTS_Input";
            var deleteRole = "BTS_Delete";
            var importRole = 'BTS_Import';

            document.getElementById("addButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";
            document.getElementById("importButton").style.visibility = "hidden";

            setRole(res.data, "addButton", createRole);
            setRole(res.data, "deleteButton", deleteRole);
            setRole(res.data, "importButton", importRole);

        })
        
        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }


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

    BTSEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'BTSSaveService', 'BTSBindingService', 'FormControlService', 'BTSSelect2Service', 'BTSAddTechnologyService', 'BTSRemoveTechnologyService'];

    function BTSEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, BTSSelect2Service, addTechnology, removeTechnology) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
            BTSSelect2Service.init(self);
            addTechnology.init(self);
            removeTechnology.init(self);
        });

        return self;
    }
})();
(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:btsImportExcelCtrl
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('BTSImportExcelCtrl', BTSImportExcelCtrl);

    BTSImportExcelCtrl.$inject = ['$scope', '$stateParams', '$state', 'BTSImportExcelUploadService', 'BTSImportExcelBindingService', 'FormControlService'];

    function BTSImportExcelCtrl($scope, sParam, $state, uploadService, bindingService, formControlService) {
        var self = this;
        self.stateParam = sParam;

        function setModelWithFileData(data) { 
            self.model.file = data;
        }

        function setFileName(fileName) {
            document.getElementById("fileName").innerHTML = fileName;
        }

        function addEventListenerOnImageChanged() { 
            document.getElementById("file").addEventListener("change", readFile);
        }

        function readFile() {

            if (this.files && this.files[0]) {
                var FR = new FileReader();
                var fileName = this.files[0].name;
                FR.addEventListener("load", function (e) { 
                    setModelWithFileData(e.target.result);
                    setFileName(fileName);
                });

                FR.readAsDataURL(this.files[0]);
            }
        }

        addEventListenerOnImageChanged();

        bindingService.init(self);
        uploadService.init(self);
        return self;
    }
})();
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('CabangCtrl', CabangCtrl);

    CabangCtrl.$inject = ['$scope', '$state', 'cabangDtService', 'cabangDeleteService', 'cabangViewService','HttpService'];

    function CabangCtrl($scope, $state, dtService, deleteService, viewService, http) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "Cabang_Input";
            var deleteRole = "Cabang_Delete";

            document.getElementById("addButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";

            setRole(res.data, "addButton", createRole);
            setRole(res.data, "deleteButton", deleteRole);

        })



        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

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

    /**
     * @ngdoc function
     * @name app.controller:changePasswordEntryCtrl
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('ChangePasswordEntryCtrl', ChangePasswordEntryCtrl);

    ChangePasswordEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'ChangePasswordSaveService'];

    function ChangePasswordEntryCtrl($scope, sParam, $state, saveService) {
        var self = this;
        self.stateParam = sParam;

        self.model = {
            currentPassword: "",
            newPassword: "",
            reTypeNewPassword: ""
        };

        saveService.init(self);

        return self;
    }
})();
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('CheckInCtrl', CheckInCtrl);

    CheckInCtrl.$inject = ['$scope', '$state', 'checkInDtService', 'checkInDeleteService', 'checkInViewService'];

    function CheckInCtrl($scope, $state, dtService, deleteService, viewService) {
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
        .controller('CheckInEntryCtrl', CheckInEntryCtrl);

    CheckInEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'CheckInSaveService', 'CheckInBindingService', 'FormControlService', 'select2Service', 'checkInMapService'];

    function CheckInEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service, map) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) { 
            formControlService.setFormControl(self);
            saveService.init(self);
            try {
                map.init(self);
            } catch (e) {

            }
        });

        return self;
    }
})();
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('CostKategoriCtrl', CostKategoriCtrl);

    CostKategoriCtrl.$inject = ['$scope', '$state', 'costKategoriDtService', 'costKategoriDeleteService', 'costKategoriViewService','HttpService'];

    function CostKategoriCtrl($scope, $state, dtService, deleteService, viewService, http) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "CostKategori_Input";
            var deleteRole = "CostKategori_Delete";

            document.getElementById("addButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";

            setRole(res.data, "addButton", createRole);
            setRole(res.data, "deleteButton", deleteRole);

        })



        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

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
(function () {
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

    Dashboard.$inject = ['$scope', 'HttpService', 'uiService','$state'];

    /*
    * recommend
    * Using function declarations
    * and bindable members up top.
    */

    function Dashboard($scope, http, ui, $state) {
        /*jshint validthis: true */
        var db = this;
        
        //http.get('dashboard/IsDashboardViewAll', {
        //    dashboard: ''
        //}, true).then(function (res) {

        //    console.log(res);

        //})

        http.get('dashboard/IsDashboardViewAll', {
            dashboard: ''
        }, true).then(function (res) {
            
            var isDashboardViewAll = res.data;

            ShowDashboard(isDashboardViewAll);

        })


        //var isDashboardViewAll = true;


        function ShowDashboard(isDashboardViewAll) {
            if (isDashboardViewAll) {

                document.getElementById("dashboard").style.display = 'inherit';
                
                db.TglMulai = '2019-01-01';
                db.TglAkhir = '2019-06-30';

                var today = new Date();
                var thisyear = today.getFullYear();
                var newyear = thisyear + '/01/01';
                var dd = today.getDate();
                var mm = today.getMonth() + 1;
                var yyyy = today.getFullYear();
                if (dd < 10) {
                    dd = '0' + dd;
                }
                if (mm < 10) {
                    mm = '0' + mm;
                }
                today = yyyy + '/' + mm + '/' + dd;

                $scope.tglMulaiFilter1 = newyear;
                $scope.tglAkhirFilter1 = today;
                $scope.tglMulaiFilter2 = newyear;
                $scope.tglAkhirFilter2 = today;
                $scope.tglMulaiFilter3 = newyear;
                $scope.tglAkhirFilter3 = today;

                getDashbord1(newyear, today, 0);
                getGoalCompletion(newyear, today, 0);
                getRevenueCost(newyear, today, 0);
                getSalesReport(newyear, today, 0);


                function getDashbord1(startDate, endDate, project) {

                    if (!startDate && !endDate) {
                        startDate = '1900-01-01';
                        endDate = '1900-01-01';
                    }

                    http.get('dashboard/GetDashboardValue', {
                        start: startDate,
                        end: endDate,
                        project: project
                    }, true).then(function (res) {
                        db.totalpo = convertToRupiah(res.data[0].TotalValuePo);
                        db.jmlpo = res.data[0].TotalJumlahPo;
                        db.jmlInvoice = res.data[0].TotalJumlahInvoice;
                        db.jmlMember = res.data[0].JumlahMember;
                        db.jmlAset = res.data[0].JumlahAset;
                    })
                }

                function getGoalCompletion(startDate, endDate, project) {

                    http.get('dashboard/GetGoalCompletion', {
                        start: startDate,
                        end: endDate,
                        project: project
                    }, true).then(function (res) {

                        var ProjectName = [];
                        var Complete = [];
                        var NotComplete = [];
                        var ValComplete = [];
                        var ValNotComplete = [];

                        for (var i = 0; i < res.data.length; i++) {
                            ProjectName[i] = res.data[i].ProjectName;
                            Complete[i] = res.data[i].Complete;
                            NotComplete[i] = res.data[i].NotComplete;
                            ValComplete[i] = res.data[i].SumInvoice;
                            ValNotComplete[i] = res.data[i].SumNotInvoice;
                        }


                        var JsonComplete = []
                        for (var i = 0; i < res.data.length; i++) {
                            var myObj1 = {
                                "y": res.data[i].Complete,
                                "name": res.data[i].ProjectName,
                                "valueNotComplete": "Rp " + convertToRupiah(res.data[i].SumInvoice)
                            };
                            JsonComplete.push(myObj1);
                        }

                        var JsonNotComplete = []
                        for (var j = 0; j < res.data.length; j++) {
                            var myObj2 = {
                                "y": res.data[j].NotComplete,
                                "name": res.data[j].ProjectName,
                                "valueComplete": "Rp " + convertToRupiah(res.data[j].SumNotInvoice)
                            };
                            JsonNotComplete.push(myObj2);
                        }

                        Highcharts.chart('containerGoalCompletion', {
                            chart: {
                                type: 'bar'
                            },
                            title: {
                                text: 'Goal Completion'
                            },
                            xAxis: {
                                type: 'category',
                                lineWidth: 0,
                                tickWidth: 0
                            },
                            yAxis: {
                                min: 0,
                                max: 100,
                                title: {
                                    text: ''
                                }
                            },
                            legend: {
                                reversed: true
                            },
                            plotOptions: {
                                series: {
                                    dataLabels: {
                                        enabled: true,
                                        inside: true
                                    },
                                    stacking: 'normal',
                                    borderColor: '#00BFFF'
                                }
                            },
                            credits: {
                                enabled: false
                            },
                            exporting: { enabled: false },
                            series: [{
                                dataLabels: [{
                                    align: 'left',
                                    color: '#000000',
                                    format: '- {point.valueComplete}'
                                }, {
                                    align: 'right',
                                    color: '#000000',
                                    format: '{y} %'
                                }],
                                name: 'Not Complete',
                                color: '#DCDCDC',
                                data: JsonNotComplete
                            }, {
                                dataLabels: [{
                                    align: 'left',
                                    color: '#000000',
                                    format: '+ {point.valueNotComplete}'
                                }, {
                                    align: 'right',
                                    color: '#000000',
                                    format: '{y} %'
                                }],
                                name: 'Complete',
                                color: '#00BFFF',
                                data: JsonComplete
                            }]
                        });
                    })

                }
                function getRevenueCost(startDate, endDate, project_pk) {

                    http.get('dashboard/GetRevenueCost', {
                        start: startDate,
                        end: endDate,
                        project: project_pk
                    }, true).then(function (res) {

                        var Month = [];
                        var Revenue = [];
                        var Cost = [];

                        for (var i = 0; i < res.data.length; i++) {
                            Month[i] = res.data[i].NameMonth;
                            Revenue[i] = res.data[i].Revenue;
                            Cost[i] = res.data[i].Cost;
                        }

                        Highcharts.chart('containerRevenueCost', {
                            chart: {
                                type: 'column'
                            },
                            title: {
                                text: 'Revenue Cost'
                            },
                            xAxis: {
                                categories: Month,
                                crosshair: true
                            },
                            yAxis: {
                                min: 0,
                                title: {
                                    //text: 'Revenue Cost ' + startDate + ' - ' + endDate + ''
                                    text: ''
                                }
                            },
                            exporting: { enabled: false },
                            tooltip: {
                                valueSuffix: '',
                                //headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                                //pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                //'<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
                                //footerFormat: '</table>',
                                shared: true,
                                useHTML: true
                            },
                            plotOptions: {
                                column: {
                                    pointPadding: 0,
                                    borderWidth: 0
                                }
                            },
                            credits: {
                                enabled: false
                            },
                            series: [{
                                name: 'Revenue',
                                data: Revenue,
                                color: '#4dbd74'

                            }, {
                                name: 'Cost',
                                data: Cost,
                                color: '#FF8C00'

                            }]
                        });
                    })

                    http.get('dashboard/GetRevenueCostProfit', {
                        start: startDate,
                        end: endDate,
                        project: project_pk
                    }, true).then(function (res) {
                        db.TotalRevenue = convertToRupiah(res.data[0].TotalRevenue);
                        db.TotalCost = convertToRupiah(res.data[0].TotalCost);
                        db.TotalProfit = convertToRupiah(res.data[0].TotalProfit);
                        //db.PersentaseRevenue = res.data[0].PersentaseRevenue;
                        //db.PersentaseCost = res.data[0].PersentaseCost;
                        db.PersentageProfit = res.data[0].PersentaseProfit;
                        if (res.data[0].PersentaseProfit > 0) { document.getElementById('lblPersentage').style.color = "green"; }
                        else { document.getElementById('lblPersentage').style.color = "red"; }


                    })

                }

                angular.element('#searchButton1').on('click', function () {
                    var e = document.getElementById("project_fk1");
                    var projectId = e.options[e.selectedIndex].value;
                    var ProjectIdVal = projectId.replace('number:', '')
                    getDashbord1($scope.tglMulaiFilter1, $scope.tglAkhirFilter1, ProjectIdVal);
                });
                angular.element('#searchButton2').on('click', function () {
                    var e = document.getElementById("operator_fk");
                    var operatorId = e.options[e.selectedIndex].value;
                    var operatorIdVal = operatorId.replace('number:', '');
                    var tglMulai = new Date($scope.tglMulaiFilter2);
                    var tglAkhir = new Date($scope.tglAkhirFilter2);

                    var year = tglMulai.getFullYear();
                    var month = tglMulai.getMonth();
                    var oneYear = new Date(year + 1, month, 1)
                    oneYear.setDate(oneYear.getDate() - 1);

                    if (tglAkhir > oneYear) {
                        ui.alert.warningToast("Can't entry more than one year");
                    }
                    else {
                        getGoalCompletion(tglMulai, tglAkhir, operatorIdVal);
                        getSalesReport(tglMulai, tglAkhir, operatorIdVal);
                    }

                });
                angular.element('#searchButton3').on('click', function () {
                    var e = document.getElementById("project_Id");
                    var projectId = e.options[e.selectedIndex].value;
                    var ProjectIdVal = projectId.replace('number:', '');

                    var tglMulai = new Date($scope.tglMulaiFilter3);
                    var tglAkhir = new Date($scope.tglAkhirFilter3);

                    var year = tglMulai.getFullYear();
                    var month = tglMulai.getMonth();
                    var oneYear = new Date(year + 1, month, 1)
                    oneYear.setDate(oneYear.getDate() - 1);

                    if (tglAkhir > oneYear) {
                        ui.alert.warningToast("Can't entry more than one year");
                    }
                    else {

                        getRevenueCost(tglMulai, tglAkhir, ProjectIdVal);
                    }

                });

                function getSalesReport(startDate, endDate, vendor) {

                    http.get('dashboard/GetSalesReport', {
                        start: startDate,
                        end: endDate,
                        vendor: vendor
                    }, true).then(function (res) {

                        var Data = res;

                        var Month = [];
                        var NewData = [];


                        var lookup = {};
                        var lookup2 = {};
                        var Project = [];
                        var items = Data.data;

                        for (var item, i = 0; item = items[i++];) {
                            var name = item.Month;

                            if (!(name in lookup)) {
                                lookup[name] = 1;
                                Month.push(name);
                            }
                        }
                        for (var item, i = 0; item = items[i++];) {
                            var name2 = item.ProjectName;

                            if (!(name2 in lookup2)) {
                                lookup2[name2] = 1;
                                Project.push(name2);
                            }
                        }

                        for (var a = 0; a < Project.length; a++) {
                            var Nameproject = Project[a];
                            var Newvalue = []
                            for (var b = 0; b < Data.data.length; b++) {
                                if (Nameproject == Data.data[b].ProjectName) {
                                    Newvalue.push(Data.data[b].Value)

                                }
                            }
                            var Datanew = { "name": Nameproject, "data": Newvalue }
                            NewData.push(Datanew);
                        }

                        Highcharts.chart('containerSalesReport', {
                            title: {
                                text: 'Sales Report'
                            },
                            yAxis: {
                                title: {
                                    text: ''
                                }
                            },
                            legend: {
                                layout: 'vertical',
                                align: 'right',
                                verticalAlign: 'middle'
                            },
                            credits: {
                                enabled: false
                            },

                            xAxis: {
                                categories: Month
                            },
                            exporting: { enabled: false },
                            series: NewData,

                            responsive: {
                                rules: [{
                                    condition: {
                                        maxWidth: 500
                                    },
                                    chartOptions: {
                                        legend: {
                                            layout: 'horizontal',
                                            align: 'center',
                                            verticalAlign: 'bottom'
                                        }
                                    }
                                }]
                            }

                        });

                    });
                }

                function convertToRupiah(angka) {
                    var rupiah = '';
                    var angkarev = angka.toString().split('').reverse().join('');
                    for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
                    return '' + rupiah.split('', rupiah.length - 1).reverse().join('');
                }

                db.formData = {};
                db.formData.users = [
                    { project_pk: 0, operatorTitle: "ALL", deliveryAreaTitle: "", vendorTitle: "" }
                ];

                db.formData.operator = [
                    { operator_pk: 0, title: "ALL" }
                ];

                function getProject() {
                    http.get('project/search', {
                        pageIndex: 1,
                        pageSize: 10
                    }).then(function (response) {

                        response.data.records.forEach(function (item) {

                            db.formData.users.push(item);
                        });

                    });
                };

                function getOperator() {

                    http.get('operator/search', {
                        pageIndex: 1,
                        pageSize: 10
                    }).then(function (response) {

                        response.data.records.forEach(function (item) {

                            db.formData.operator.push(item);
                        });

                    });
                }


                getProject();
                getOperator();
                $scope.project_fk1 = 0;
                $scope.operator_fk2 = 0;
                $scope.project_fk3 = 0;

            }
            else {
                document.getElementById("dashboard").style.display = 'none';
                $state.go('app.dashboardNull');

            }
        }
    }
})();

(function () {
    'use strict';

	/**
	* @ngdoc function
	* @name app.controller:dashboardNullCtrl
	* @description
	* # dashboardCtrl
	* Controller of the app
	*/

    angular
        .module('global-solusindo')
        .controller('DashboardNullCtrl', DashboardNull);

    DashboardNull.$inject = ['$scope'];

    /*
    * recommend
    * Using function declarations
    * and bindable members up top.
    */

    function DashboardNull($scope) {
        /*jshint validthis: true */
        var db = this;
        
    }
})();

(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('DeliveryAreaCtrl', DeliveryAreaCtrl);

    DeliveryAreaCtrl.$inject = ['$scope', '$state', 'deliveryAreaDtService', 'deliveryAreaDeleteService', 'deliveryAreaViewService','HttpService'];

    function DeliveryAreaCtrl($scope, $state, dtService, deleteService, viewService, http) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "DeliveryArea_Input";
            var deleteRole = "DeliveryArea_Delete";

            document.getElementById("addButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";

            setRole(res.data, "addButton", createRole);
            setRole(res.data, "deleteButton", deleteRole);

        })



        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

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
        .controller('IssueTypeCtrl', IssueTypeCtrl);

    IssueTypeCtrl.$inject = ['$scope', '$state', 'issueTypeDtService', 'issueTypeDeleteService', 'issueTypeViewService','HttpService'];

    function IssueTypeCtrl($scope, $state, dtService, deleteService, viewService, http) {
        var self = this;

        dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "IssueType_Input";
            var deleteRole = "IssueType_Delete";

            document.getElementById("addButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";

            setRole(res.data, "addButton", createRole);
            setRole(res.data, "deleteButton", deleteRole);

        })



        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

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
        .controller('IssueTypeEntryCtrl', IssueTypeEntryCtrl);

    IssueTypeEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'IssueTypeSaveService', 'IssueTypeBindingService', 'FormControlService', 'select2Service'];

    function IssueTypeEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
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
        .controller('IzinCutiCtrl', IzinCutiCtrl);

    IzinCutiCtrl.$inject = ['$scope', '$state', 'izinCutiDtService', 'izinCutiDeleteService', 'izinCutiViewService','HttpService'];

    function IzinCutiCtrl($scope, $state, dtService, deleteService, viewService, http) {
        var self = this;

        dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "IzinCuti_Input";
            var deleteRole = "IzinCuti_Delete";

            document.getElementById("addButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";

            setRole(res.data, "addButton", createRole);
            setRole(res.data, "deleteButton", deleteRole);

        })
        
        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

        return self;
    }
})();
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('izinCutiApprovalCtrl', izinCutiApprovalCtrl);

    izinCutiApprovalCtrl.$inject = ['$scope', '$state', 'izinCutiApprovalDtService', 'izinCutiApprovalViewService'];

    function izinCutiApprovalCtrl($scope, $state, dtService, viewService) {
        var self = this;

        dtService.init(self);
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
        .controller('izinCutiApprovalEntryCtrl', izinCutiApprovalEntryCtrl);

    izinCutiApprovalEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'izinCutiApprovalSaveService', 'izinCutiApprovalBindingService', 'FormControlService', 'select2Service','HttpService'];

    function izinCutiApprovalEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service, http) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            formControlService.setFormControl(self);
            saveService.init(self);
        });

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var approveRejectRole = "IzinCuti_Approval";

            document.getElementById("approveButton").style.visibility = "hidden";
            document.getElementById("rejectButton").style.visibility = "hidden";

            setRole(res.data, "approveButton", approveRejectRole);
            setRole(res.data, "rejectButton", approveRejectRole);

        })
        
        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

        angular.element('#download').on('click', function () {
            var id = self.stateParam.id;
            //http.get('izinCuti/DownloadImage/' + id, true).then(function (res) {
            //    var contentType = 'image/jpeg';
            //    var linkElement = document.createElement('a');
            //    try {
            //        var blob = new Blob([data], { type: contentType });
            //        var url = window.URL.createObjectURL(blob);

            //        linkElement.setAttribute('href', url);
            //        linkElement.setAttribute("download", "filePhoto.jpg");

            //        var clickEvent = new MouseEvent("click", {
            //            "view": window,
            //            "bubbles": true,
            //            "cancelable": false
            //        });
            //        linkElement.dispatchEvent(clickEvent);
            //    } catch (ex) {
            //        console.log(ex);
            //    }
            //});
            http.downloadFile('izinCuti/DownloadImage/' + id).then(function (data) {
                var contentType = 'image/jpeg';
                var linkElement = document.createElement('a');
                try {
                    var blob = new Blob([data], { type: contentType });
                    var url = window.URL.createObjectURL(blob);

                    linkElement.setAttribute('href', url);
                    linkElement.setAttribute("download", "testPhoto.JPG");

                    var clickEvent = new MouseEvent("click", {
                        "view": window,
                        "bubbles": true,
                        "cancelable": false
                    });
                    linkElement.dispatchEvent(clickEvent);
                } catch (ex) {
                    console.log(ex);
                }
            });
            //alert('download');
        });

        //izinCuti / DownloadImage / { id }

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
        .controller('IzinCutiEntryCtrl', IzinCutiEntryCtrl);

    IzinCutiEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'IzinCutiSaveService', 'IzinCutiBindingService', 'FormControlService', 'select2Service'];

    function IzinCutiEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
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

    KategoriJabatanCtrl.$inject = ['$scope', '$state', 'kategoriJabatanDtService', 'kategoriJabatanDeleteService', 'kategoriJabatanViewService','HttpService'];

    function KategoriJabatanCtrl($scope, $state, dtService, deleteService, viewService, http) {
        var self = this;

        dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "KategoriJabatan_Input";
            var deleteRole = "KategoriJabatan_Delete";

            document.getElementById("addButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";

            setRole(res.data, "addButton", createRole);
            setRole(res.data, "deleteButton", deleteRole);

        })
        
        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

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

    KotaCtrl.$inject = ['$scope', '$state', 'kotaDtService', 'kotaDeleteService', 'kotaViewService','HttpService'];

    function KotaCtrl($scope, $state, dtService, deleteService, viewService, http) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "Kota_Input";
            var deleteRole = "Kota_Delete";

            document.getElementById("addButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";

            setRole(res.data, "addButton", createRole);
            setRole(res.data, "deleteButton", deleteRole);

        })



        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

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

    App.$inject = ['$rootScope', '$scope', '$state', 'tokenService'];

    function App($rootScope, $scope, $state, tokenService) {
        var vm = this;

        vm.layout = {
            one: false,
            four: false
        };

        vm.toggle = function (which) {
            vm.layout[which] = !vm.layout[which];
        };

        function goToLoginPage() {
            $state.go('login');
        }

        function validateToken() {
            var token = tokenService.getToken();
            if (token && (token != '' || token != null)) {
                return true;
            }
            return false;
        }

        function goToLoginPageIfNotLoggedIn() {
            if (!validateToken())
                goToLoginPage();
        }

        goToLoginPageIfNotLoggedIn();

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
        .controller('NavBarCtrl', NavBarCtrl);

    NavBarCtrl.$inject = ['MenuService', '$cookies', '$localStorage', '$state', '$window', 'HttpService', 'uiService', '$scope', '$rootScope'];

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

    function NavBarCtrl(MenuService, $cookies, localStorage, state, $window, http, ui, $scope, $rootScope) {

        /*jshint validthis: true */
        var nav = this;
        var user = JSON.parse($window.localStorage.getItem('user'));
        nav.model = user;
 
        nav.resizeDt = function () {
            //console.log($rootScope);
            $('.dataTables_scrollHeadInner').width('100%');
            //console.log(header);
        }
    
        function setImage(data) { 
            document.getElementById("photoProfile").src = data;
        }

        if (nav.model && nav.model.filePhotoInBase64) {
            setImage(nav.model.filePhotoInBase64);
        }

        function resetApplicationData() {
            $cookies.remove('token');
            $window.localStorage.removeItem('user');
            $window.localStorage.clear();
        }

        nav.logout = function () {
            http.post('/logout', {}).then(function (response) {
                state.go('login');
                window.location.reload(true);
            });
            resetApplicationData();
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

        var treeMenu = JSON.parse($window.localStorage.getItem('treeMenu'));
        vm.treeMenu = treeMenu;
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

    LoginCtrl.$inject = ['$scope', '$state', 'serverErrorService', '$localStorage', '$cookies', 'uiService', 'HttpService', '$window', 'userInfoService'];

    /*
    * recommend
    * Using function declarations
    * and bindable members up top.
    */

    function LoginCtrl($scope, $state, serverError, localStorage, $cookies, ui, http, $window, userInfoService) {
        /*jshint validthis: true */
        var self = this;

        self.model = {};

        function setTokenInfo(token) {
            $cookies.put('token', token);
        }

        function setTreeMenuOnStorage(treeMenu) {
            $window.localStorage.setItem('treeMenu', JSON.stringify(treeMenu));
        }

        function setUserInfo(userInfo) {
            userInfoService.setUserInfo(userInfo);
        }

        function goToDashboard() {
            $state.go('app.dashboard');
        }

        function login() {
            http.post('token', self.model)
                .then(function (res) {
                    if (res.success) {
                        ui.alert.success(res.message);
                        setTokenInfo(res.token);
                        setUserInfo(res.model);
                        setTreeMenuOnStorage(res.treeMenu);
                        goToDashboard();
                    } else {
                        serverError.show(res);
                    }
                });
        }

        angular.element('#loginButton').on('click', function () {
            login();
        });

        angular.element('#username').on('keyup', function (e) {
            if (e.keyCode === 13) {
                angular.element('#password').focus();
            }
        });

        angular.element('#password').on('keyup', function (e) {
            if (e.keyCode === 13) {
                login();
            }
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

    MappingRoleToRoleGroupEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'MappingRoleToRoleGroupSaveService', 'MappingRoleToRoleGroupBindingService', 'FormControlService', 'mappingRoleToRoleGroupEntryDtService','HttpService'];

    function MappingRoleToRoleGroupEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, dtService, http) {
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
        
        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "MappingRoleToRoleGroup_Input";

            document.getElementById("modalRoleButton").style.visibility = "hidden";

            setRole(res.data, "modalRoleButton", createRole);

        })
        
        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

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

    MappingUserToAuthParamEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'MappingUserToAuthParamSaveService', 'MappingUserToAuthParamBindingService', 'FormControlService', 'mappingUserToAuthParamEntryDtService', 'select2Service', 'mappingUserToAuthParamDeleteService','HttpService'];

    function MappingUserToAuthParamEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, dtService, select2Service, deleteService, http) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            dtService.init(self);
            deleteService.init(self);
        });

        self.userAuthParamModalCallback = function () {
            self.userDt.draw();
        };
        
        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "MappingUserToAuthParam_Input";

            document.getElementById("modalRoleButton").style.visibility = "hidden";

            setRole(res.data, "modalRoleButton", createRole);

        })

        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

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

    MappingUserToRoleGroupEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'MappingUserToRoleGroupSaveService', 'MappingUserToRoleGroupBindingService', 'FormControlService', 'mappingUserToRoleGroupEntryDtService', 'select2Service', 'mappingUserToRoleGroupDeleteService','HttpService'];

    function MappingUserToRoleGroupEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, dtService, select2Service, deleteService, http) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            dtService.init(self);
            deleteService.init(self);
        });

        self.userModalCallback = function () {
            self.userDt.draw();
        };

        
        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "MappingUserToRoleGroup_Input";

            document.getElementById("modalRoleButton").style.visibility = "hidden";

            setRole(res.data, "modalRoleButton", createRole);

        })
        
        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }
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
        .controller('MenuCtrl', MenuCtrl);

    MenuCtrl.$inject = ['$scope', '$state', 'menuDtService', 'menuDeleteService', 'menuViewService'];

    function MenuCtrl($scope, $state, dtService, deleteService, viewService) {
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
        .controller('MenuEntryCtrl', MenuEntryCtrl);

    MenuEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'MenuSaveService', 'MenuBindingService', 'FormControlService', 'select2Service'];

    function MenuEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
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
        .controller('MyTaskListCtrl', MyTaskListCtrl);

    MyTaskListCtrl.$inject = ['$scope', '$state', 'myTaskListDtService', 'myTaskListDeleteService', 'myTaskListViewService'];

    function MyTaskListCtrl($scope, $state, dtService, deleteService, viewService) {
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
        .controller('MyTaskListEntryCtrl', MyTaskListEntryCtrl);

    MyTaskListEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'MyTaskListSaveService', 'MyTaskListBindingService', 'FormControlService', 'select2Service'];

    function MyTaskListEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
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
        .controller('OperatorCtrl', OperatorCtrl);

    OperatorCtrl.$inject = ['$scope', '$state', 'operatorDtService', 'operatorDeleteService', 'operatorViewService','HttpService'];

    function OperatorCtrl($scope, $state, dtService, deleteService, viewService, http) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "Operator_Input";
            var deleteRole = "Operator_Delete";

            document.getElementById("addButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";

            setRole(res.data, "addButton", createRole);
            setRole(res.data, "deleteButton", deleteRole);

        })

        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

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

    /**
     * @ngdoc function
     * @name app.controller:userImportExcelCtrl
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('POImportExcelCtrl', poImportExcelCtrl);

    poImportExcelCtrl.$inject = ['$scope', '$stateParams', '$state', 'POImportExcelUploadService', 'POImportExcelBindingService', 'FormControlService', 'HttpService', 'poviewDtService'];

    function poImportExcelCtrl($scope, sParam, $state, uploadService, bindingService, formControlService, http, poview) {
        var self = this;
        self.stateParam = sParam;

        function setModelWithFileData(data) {
            self.model.file = data;
        }

        function setFileName(fileName) {
            document.getElementById("fileName").innerHTML = fileName;
        }

        function addEventListenerOnImageChanged() {
            document.getElementById("file").addEventListener("change", readFile);
        }

        function readFile() {

            if (this.files && this.files[0]) {
                var FR = new FileReader();
                var fileName = this.files[0].name;
                FR.addEventListener("load", function (e) { 
                    setModelWithFileData(e.target.result);
                   
                    setFileName(fileName);
                });

                FR.readAsDataURL(this.files[0]);
            }
        }

        addEventListenerOnImageChanged();

        bindingService.init(self);
        uploadService.init(self);
        poview.init(self);

        
        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var importRole = "PO_Import";
            var exportRole = "PO_Export";

            document.getElementById("downloadButton").style.visibility = "hidden";
            document.getElementById("uploadButton").style.visibility = "hidden";

            setRole(res.data, "downloadButton", exportRole);
            setRole(res.data, "uploadButton", importRole);

        })



        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }


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

    angular.module('global-solusindo')
        .controller('ProjectCtrl', ProjectCtrl);

    ProjectCtrl.$inject = ['$scope', '$state', 'projectDtService', 'projectDeleteService', 'projectViewService','HttpService'];

    function ProjectCtrl($scope, $state, dtService, deleteService, viewService, http) {
        var self = this;

        dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "Project_Input";
            var deleteRole = "Project_Delete";

            document.getElementById("addButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";

            setRole(res.data, "addButton", createRole);
            setRole(res.data, "deleteButton", deleteRole);

        })



        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

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
        .controller('ActivitiesCtrl', ActivitiesCtrl);

    ActivitiesCtrl.$inject = ['$scope', '$stateParams', '$state', 'FormControlService', 'activitiesDtService'];

    function ActivitiesCtrl($scope, sParam, $state, formControlService, dtService) {
        var self = this;
        self.stateParam = sParam;

        dtService.init(self);

        return self;
    }
})();
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('DailyTaskCtrl', DailyTaskCtrl);

    DailyTaskCtrl.$inject = ['$scope', '$state', 'dailyTaskDtService', 'HttpService', 'select2Service'];

    function DailyTaskCtrl($scope, $state, dtService, http, select2Service) {
        var self = this;

        self.model = {
            user_fk: 0,
            statusName: "ALL"
        };

        self.formData = {};

        self.formData.status = [
            { statusId: 0, name: "ALL" },
            { statusId: 1, name: "Online" },
            { statusId: 2, name: "Cuti" },
            { statusId: 3, name: "Unassigned" },
            { statusId: 4, name: "Offline" },
        ];

        dtService.init(self);

        function getUsers() {
            select2Service.liveSearch("user/search", {
                selector: '#user_fk',
                valueMember: 'user_pk',
                displayMember: 'name',
                callback: function (data) {
                    self.formData.users = [];
                    data.forEach(function (user) {
                        self.formData.users.push(user);
                    });
                },
                onSelected: function (data) {
                    self.model.user_fk = data.user_pk;
                }
            });
        }

        getUsers();
        return self;
    }
})();
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('TaskEngineerCtrl', TaskEngineerCtrl);

    TaskEngineerCtrl.$inject = ['$scope', '$state', 'taskEngineerDtService', 'taskEngineerDeleteService', 'taskEngineerViewService', 'HttpService', 'select2Service', 'taskEngineerSearchService'];

    function TaskEngineerCtrl($scope, $state, dtService, deleteService, viewService, http, select2Service, search) {
        var self = this;
        self.formData = {};
        //self.formData.users = [
        //    { user_fk:0, username: "ALL" }
        //];
        self.model = {
            user_fk: 0,
            bts_fk: 0
        };

        dtService.init(self);
        deleteService.init(self);
        viewService.init(self);
        //function getUsers(jabatanFk, keyword) {
        //    http.get('user/search', {
        //        pageIndex: 1,
        //        pageSize: 10,
        //        keyword: keyword
        //    }).then(function (response) {
        //        response.data.records.forEach(function(item){
        //            self.formData.users.push(item);
        //        });
        //        console.log(self.formData.users);
        //        // console.log(response);
        //    });
        //};
        function getUsers() {
            select2Service.liveSearch("user/search", {
                selector: '#user_fk',
                valueMember: 'user_pk',
                displayMember: 'name',
                callback: function (data) {
                    self.formData.users = [];
                    data.forEach(function (user) {
                        self.formData.users.push(user);
                    });
                },
                onSelected: function (data) {
                    self.model.user_fk = data.user_pk;
                }
            });
        }

        //function getBulans() {
        //    select2Service.liveSearch("taskEngineer/getPeriod", {
        //        selector: '#bulan_fk',
        //        valueMember: 'value',
        //        displayMember: 'name',
        //        callback: function (data) {
        //            console.log(data);
        //            self.formData.bulans = data;
        //            console.log(data);
        //        },
        //        onSelected: function (data) {
        //            self.model.bulan_pk = data.value;
        //        }
        //    });
        //}

        function getBulans() {
            select2Service.liveSearch("taskEngineer/getPeriod", {
                selector: '#bulan_fk',
                valueMember: 'value',
                displayMember: 'name',
                callback: function (data) {
                    self.formData.bulans = data;
                    //console.log(data);
                },
                onSelected: function (data) {
                    self.model.bulans_fk = data.value;
                }
            });
        }

        function getBTSs() {
            select2Service.liveSearch("bts/search", {
                selector: '#bts_fk',
                valueMember: 'bts_pk',
                displayMember: 'name',
                callback: function (data) {
                    self.formData.btses = data;
                    //console.log(data);
                },
                onSelected: function (data) {
                    self.model.bts_fk = data.bts_pk;
                }
            });
        }

        angular.element('#searchButton').on('click', function () {
            search.search(self);
        });

        getUsers();
        getBTSs();
        getBulans();
        console.log(self);

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
        .controller('TaskEngineerDetailCtrl', TaskEngineerDetailCtrl);

    TaskEngineerDetailCtrl.$inject = ['$scope', '$stateParams', '$state', 'TaskEngineerDetailBindingService'];

    function TaskEngineerDetailCtrl($scope, sParam, $state, bindingService) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self)

        return self;
    }
})();
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('TimesheetEngineerCtrl', TimesheetEngineerCtrl);

    TimesheetEngineerCtrl.$inject = ['$scope', '$state', 'timesheetEngineerDtService', 'timesheetEngineerViewService', 'HttpService'];

    function TimesheetEngineerCtrl($scope, $state, dtService, viewService, http) {
        var self = this;
        self.formData = {};

        dtService.init(self);
        viewService.init(self);

        function getUsers(jabatanFk, keyword) {
            http.get('user/search', {
                pageIndex: 1,
                pageSize: 10,
                keyword: keyword
            }).then(function (response) {
                self.formData.users = response.data.records;
                // console.log(response);
            });
        };
        getUsers();
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
        .controller('TimesheetEngineerDetailCtrl', TimesheetEngineerDetailCtrl);

    TimesheetEngineerDetailCtrl.$inject = ['$scope', '$stateParams', '$state', 'FormControlService', 'timesheetEngineerDetailDtService', 'timesheetEngineerDetailViewService', 'select2Service','HttpService'];

    function TimesheetEngineerDetailCtrl($scope, sParam, $state, formControlService, dtService, timesheetEngineerDetailViewService, select2Service, http) {
        var self = this;
        self.stateParam = sParam;
        self.model = {};
        self.formData = {};

        dtService.init(self);
        timesheetEngineerDetailViewService.init(self);

        function getMonths() {
            select2Service.liveSearch("report/timesheetDetail", {
                selector: '#bulan',
                valueMember: 'bulan',
                displayMember: 'bulanName',
                extendRequestData: {
                    user_fk: sParam.id
                },
                callback: function (data) {
                    self.formData.months = data;
                },
                onSelected: function (data) { 
                    self.model.bulan = data.bulan;
                    self.datatable.draw(); 
                }
            });
        }

        function getYears() {
            select2Service.liveSearch("report/timesheetDetail", {
                selector: '#tahun',
                valueMember: 'tahun',
                displayMember: 'tahun',
                extendRequestData: {
                    user_fk: sParam.id
                },
                callback: function (data) {
                    self.formData.years = data;
                },
                onSelected: function (data) {
                    self.model.tahun = data.tahun;
                    self.datatable.draw();
                }
            });
        }

        getMonths();
        getYears();
        
        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var readRole = "AsetHistori_ViewAll";
            
            document.getElementById("asetHistoriButton").style.visibility = "hidden";

            setRole(res.data, "asetHistoriButton", readRole);

        })
        
        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

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

    RoleCtrl.$inject = ['$scope', '$state', 'roleDtService', 'roleDeleteService', 'roleViewService','HttpService'];

    function RoleCtrl($scope, $state, dtService, deleteService, viewService, http) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "Role_Input";
            var deleteRole = "Role_Delete";

            document.getElementById("addButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";

            setRole(res.data, "addButton", createRole);
            setRole(res.data, "deleteButton", deleteRole);

        })

        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }


        return self;
    }
})();
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('RoleGroupCtrl', RoleGroupCtrl);

    RoleGroupCtrl.$inject = ['$scope', '$state', 'roleGroupDtService', 'roleGroupDeleteService', 'roleGroupViewService','HttpService'];

    function RoleGroupCtrl($scope, $state, dtService, deleteService, viewService, http) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "RoleGroup_Input";
            var deleteRole = "RoleGroup_Delete";

            document.getElementById("addButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";

            setRole(res.data, "addButton", createRole);
            setRole(res.data, "deleteButton", deleteRole);

        })
        
        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

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

    SOWCtrl.$inject = ['$scope', '$state', 'sowDtService', 'sowDeleteService', 'sowViewService','HttpService'];

    function SOWCtrl($scope, $state, dtService, deleteService, viewService, http) {
        var self = this;
        
        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "SOW_Input";
            var deleteRole = "SOW_Delete";
            var importRole = "SOW_Import";
            var readRole = "SOW_ViewAll";
            var updateRole = "SOW_Edit";
            var approvalRole = "SOW_Approval";

            document.getElementById("addButton").style.visibility = "hidden";
            document.getElementById("importButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";

            setRole(res.data, "addButton", createRole);
            setRole(res.data, "importButton", importRole);
            setRole(res.data, "deleteButton", deleteRole);

            var show = 'hidden';
            var view = 'hidden';
            var dlt = 'hidden';
            var approval = 'hidden';

            if (setRoleTable(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRoleTable(res.data, deleteRole)) {
                dlt = 'visible';
            }
            if (setRoleTable(res.data, readRole)) {
                show = 'visible';
            }
            if (setRoleTable(res.data, approvalRole)) {
                approval = 'visible';
            }

            dtService.init(self, show, view, dlt, approval);
            deleteService.init(self);
            viewService.init(self);

        })

        function setRoleTable(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

        angular.element('#downloadButtonViewall').on('click', function () {
            http.downloadFile('sow/exportviewall', { keyword: '' }).then(function (data) {
                var contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                var linkElement = document.createElement('a');
                try {
                    var blob = new Blob([data], { type: contentType });
                    var url = window.URL.createObjectURL(blob);

                    linkElement.setAttribute('href', url);
                    linkElement.setAttribute("download", "SOWTracker.xlsx");

                    var clickEvent = new MouseEvent("click", {
                        "view": window,
                        "bubbles": true,
                        "cancelable": false
                    });
                    linkElement.dispatchEvent(clickEvent);
                } catch (ex) {
                    console.log(ex);
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
     * @name app.controller:userEntryCtrl
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('SOWApprovalCtrl', SOWApprovalCtrl);

    SOWApprovalCtrl.$inject = ['$scope', '$stateParams', '$state', 'SOWApprovalBindingService', 'HttpService', 'costDtService', 'sowMapService', 'SOWApprovalService'];

    function SOWApprovalCtrl($scope, sParam, $state, bindingService, http, costDtService, map, approval) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            costDtService.init(self);
            approval.init(self);
            try {
                map.init(self);
            } catch (e) {

            }
        });

        return self;
    }
})();
(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:sowEntryCtrl
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('SOWEntryCtrl', SOWEntryCtrl);

    SOWEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'SOWSaveService', 'SOWBindingService', 'FormControlService', 'SOWSelect2Service', 'HttpService', 'sowMapService', 'kmlService', 'uiService'];

    function SOWEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, SOWSelect2Service, http, map, kml, ui) {
        var self = this;
        self.stateParam = sParam;

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var isTL = setRole(res.data, "SOW_Edit_IsTL");
            var isDTCoor = setRole(res.data, "SOW_Edit_IsDTCoor");

            if (isTL == true) {
                document.getElementById('sowName').disabled = false;
                document.getElementById('project_fk').disabled = false;
                document.getElementById('bts_fk').disabled = false;
                document.getElementById('codate').disabled = false;
                document.getElementById('tglMulai').disabled = false;
                document.getElementById('technology_fk').disabled = false;
                document.getElementById('duid').disabled = false;
                document.getElementById('tipePekerjaan_fk2').disabled = false;
                document.getElementById('tipePekerjaan_fk1').disabled = false;
                document.getElementById('kmlFile1').disabled = false;
                document.getElementById('kmlFile2').disabled = false;
            }
            else if (isDTCoor == true) {
                document.getElementById('sowName').disabled = true;
                document.getElementById('project_fk').disabled = true;
                document.getElementById('bts_fk').disabled = true;
                document.getElementById('codate').disabled = true;
                document.getElementById('tglMulai').disabled = true;
                document.getElementById('technology_fk').disabled = true;
                document.getElementById('duid').disabled = true;
                document.getElementById('tipePekerjaan_fk2').disabled = true;
                document.getElementById('tipePekerjaan_fk1').disabled = true;
                document.getElementById('kmlFile1').disabled = true;
                document.getElementById('kmlFile2').disabled = true;
            }
            else {
                document.getElementById('sowName').disabled = false;
                document.getElementById('project_fk').disabled = false;
                document.getElementById('bts_fk').disabled = false;
                document.getElementById('codate').disabled = false;
                document.getElementById('tglMulai').disabled = false;
                document.getElementById('technology_fk').disabled = false;
                document.getElementById('duid').disabled = false;
                document.getElementById('tipePekerjaan_fk2').disabled = false;
                document.getElementById('tipePekerjaan_fk1').disabled = false;
                document.getElementById('kmlFile1').disabled = false;
                document.getElementById('kmlFile2').disabled = false;
            }

            bindingService.init(self, isDTCoor, isTL).then(function (res) {
                formControlService.setFormControl(self);
                saveService.init(self);
                SOWSelect2Service.init(self);

                self.getUsers = function (jabatanFk, keyword) {
                    var pfk = document.getElementById('project_fk').value.split(':')[1];
                    var requestData = {
                        pageIndex: 1,
                        pageSize: 10000,
                        keyword: keyword,
                        kategoriJabatan_fk: jabatanFk,
                        project_fk: pfk
                    };

                    http.get('user/search', requestData)
                        .then(function (response) {
                            self.formData.users = response.data.records;
                        });
                };

                try {
                    addEventListenerOnImageChanged1();
                    addEventListenerOnImageChanged2();
                    map.init(self);
                } catch (e) {
                    console.log(e);
                }
            });
        })

        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }

            return role
        }

        function readFile1() {
            if (this.files && this.files[0]) {
                var FR = new FileReader();
                var fileName = this.files[0].name;
                FR.readAsText(this.files[0]);
                FR.addEventListener("load", function (e) {
                    try {

                        //showRouteInMaps;
                        var xmlString = e.target.result;
                        var routes = kml.createRoutes(xmlString);
                        map.setRoute1(routes);

                        //showFileNameInTextbox
                        document.getElementById("fileName1").innerHTML = fileName;

                        //setSowTracksModel; 
                        if (self.model.sowTracks[0].tipePekerjaan_fk) {
                            self.model.sowTracks[0].route = e.target.result;

                            $scope.$apply();
                        }
                        else {
                            ui.alert.error('Please pick job type first');
                        }

                    } catch (e) {
                        console.log(e);
                    }
                });
            }
        }

        function addEventListenerOnImageChanged1() {

            document.getElementById("kmlFile1").addEventListener("change", readFile1);
        }

        function readFile2() {
            if (this.files && this.files[0]) {
                var FR = new FileReader();
                var fileName = this.files[0].name;
                FR.readAsText(this.files[0]);
                FR.addEventListener("load", function (e) {
                    if (!self.model.sowTracks[1]) {
                        ui.alert.error('Please pick job type first');
                        return;
                    }

                    try {

                        //showRouteInMaps;
                        var xmlString = e.target.result;
                        var routes = kml.createRoutes(xmlString);
                        map.setRoute2(routes);

                        //showFileNameInTextbox
                        document.getElementById("fileName2").innerHTML = fileName;

                        //setSowTracksModel; 
                        self.model.sowTracks[1].route = e.target.result; 
                        $scope.$apply();
                    } catch (e) {
                        console.log(e);
                    }

                });
            }
        }

        function addEventListenerOnImageChanged2() {
            document.getElementById("kmlFile2").addEventListener("change", readFile2);
        }

        

        return self;
    }
})();
(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:SOWImportExcelCtrl
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('SOWImportExcelCtrl', SOWImportExcelCtrl);

    SOWImportExcelCtrl.$inject = ['$scope', '$stateParams', '$state', 'SOWImportExcelUploadService', 'SOWImportExcelBindingService', 'FormControlService'];

    function SOWImportExcelCtrl($scope, sParam, $state, uploadService, bindingService, formControlService) {
        var self = this;
        self.stateParam = sParam;

        function setModelWithFileData(data) {
            self.model.file = data;
        }

        function setFileName(fileName) {
            document.getElementById("fileName").innerHTML = fileName;
        }

        function addEventListenerOnImageChanged() {
            document.getElementById("file").addEventListener("change", readFile);
        }

        function readFile() {

            if (this.files && this.files[0]) {
                var FR = new FileReader();
                var fileName = this.files[0].name;
                FR.addEventListener("load", function (e) { 
                    setModelWithFileData(e.target.result);
                   
                    setFileName(fileName);
                });

                FR.readAsDataURL(this.files[0]);
            }
        }

        addEventListenerOnImageChanged();

        bindingService.init(self);
        uploadService.init(self);
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

    SOWInfoCtrl.$inject = ['$scope', '$stateParams', '$state', 'SOWInfoBindingService', 'HttpService', 'costDtService', 'costShowModalService', 'costDeleteService', 'sowMapService', 'sowlinkDtService', 'sowissueDtService'];

    function SOWInfoCtrl($scope, sParam, $state, bindingService, http, costDtService, costShowModalService, costDeleteService, map, sowlinkDtService, sowissueDtService) {
        var self = this;
        self.stateParam = sParam;

        bindingService.init(self).then(function (res) {
            costDtService.init(self);
            costShowModalService.init(self);
            costDeleteService.init(self);
            sowlinkDtService.init(self);
            sowissueDtService.init(self);
            try {
                map.init(self);
            } catch (e) {

            }
        });

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "Cost_Input";

            document.getElementById("addCost").style.visibility = "hidden";
            
            setRole(res.data, "addCost", createRole);
            
        })
        
        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

        return self;
    }
})();
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('TechnologyCtrl', TechnologyCtrl);

    TechnologyCtrl.$inject = ['$scope', '$state', 'technologyDtService', 'technologyDeleteService', 'technologyViewService','HttpService'];

    function TechnologyCtrl($scope, $state, dtService, deleteService, viewService, http) {
        var self = this;

        dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "Technology_Input";
            var deleteRole = "Technology_Delete";

            document.getElementById("addButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";

            setRole(res.data, "addButton", createRole);
            setRole(res.data, "deleteButton", deleteRole);

        })
        
        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

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
        .controller('TechnologyEntryCtrl', TechnologyEntryCtrl);

    TechnologyEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'TechnologySaveService', 'TechnologyBindingService', 'FormControlService', 'select2Service'];

    function TechnologyEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
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

    UserCtrl.$inject = ['$scope', '$state', 'userDtService', 'userDeleteService', 'userViewService', 'userInactivateService', 'HttpService'];

    function UserCtrl($scope, $state, dtService, deleteService, viewService, inactivateService, http) {
        var self = this;

        self.datatable = dtService.init(self);
        deleteService.init(self);
        viewService.init(self);
        inactivateService.init(self);


        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {
            
            var createRole = "User_Input";
            var deleteRole = "User_Delete";
            var importRole = "User_Import";
            
            document.getElementById("addButton").style.visibility = "hidden";
            document.getElementById("importButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";

            setRole(res.data, "addButton", createRole);
            setRole(res.data, "importButton", importRole);
            setRole(res.data, "deleteButton", deleteRole);

        })

        

        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                } 
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }
            
        }
        
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
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('UserHistoryCtrl', UserHistoryCtrl);

    UserHistoryCtrl.$inject = ['$scope', '$state', 'userHistoryDtService', 'userHistoryViewService', 'HttpService', '$stateParams'];
    //UserHistoryCtrl.$inject = ['$scope', '$state'];

    function UserHistoryCtrl($scope, $state, dtService, viewService, http, $stateParams) {
        var self = this;
        self.datatable = dtService.init(self);
        viewService.init(self);
        
        http.get('aset/'+ $stateParams.aset_fk, {
            pageIndex: 1,
            pageSize: 10
        }).then(function (response) {
            
            $scope.kodeAset = response.data.asetId;
            $scope.kategori = response.data.kategoriAsetName;
            $scope.namaAset = response.data.name; 
        });

        //http.get('userHistori/search', {
        //    pageIndex: 1,
        //    pageSize: 10,
        //    aset_fk: $stateParams.aset_fk
        //}).then(function (response) {

        //    console.log(response);
        //});

        return self;
    }
})();
(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:userImportCsvCtrl
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('UserImportCsvCtrl', UserImportCsvCtrl);

    UserImportCsvCtrl.$inject = ['$scope', '$stateParams', '$state', 'UserImportCsvUploadService', 'UserImportCsvBindingService', 'FormControlService'];

    function UserImportCsvCtrl($scope, sParam, $state, uploadService, bindingService, formControlService) {
        var self = this;
        self.stateParam = sParam;

        function setModelWithFileData(data) { 
            self.model.file = data;
        }

        function setFileName(fileName) {
            document.getElementById("fileName").innerHTML = fileName;
        }

        function addEventListenerOnImageChanged() { 
            document.getElementById("file").addEventListener("change", readFile);
        }

        function readFile() {

            if (this.files && this.files[0]) {
                var FR = new FileReader();
                var fileName = this.files[0].name;
                FR.addEventListener("load", function (e) { 
                    setModelWithFileData(e.target.result);
                    setFileName(fileName);
                });

                FR.readAsDataURL(this.files[0]);
            }
        }

        addEventListenerOnImageChanged();

        bindingService.init(self);
        uploadService.init(self);
        return self;
    }
})();
(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.controller:userImportExcelCtrl
     * @description
     * # dashboardCtrl
     * Controller of the app
     */

    angular
        .module('global-solusindo')
        .controller('UserImportExcelCtrl', UserImportExcelCtrl);

    UserImportExcelCtrl.$inject = ['$scope', '$stateParams', '$state', 'UserImportExcelUploadService', 'UserImportExcelBindingService', 'FormControlService'];

    function UserImportExcelCtrl($scope, sParam, $state, uploadService, bindingService, formControlService) {
        var self = this;
        self.stateParam = sParam;

        function setModelWithFileData(data) {
            self.model.file = data;
        }

        function setFileName(fileName) {
            document.getElementById("fileName").innerHTML = fileName;
        }

        function addEventListenerOnImageChanged() {
            document.getElementById("file").addEventListener("change", readFile);
        }

        function readFile() {

            if (this.files && this.files[0]) {
                var FR = new FileReader();
                var fileName = this.files[0].name;
                FR.addEventListener("load", function (e) { 
                    setModelWithFileData(e.target.result);
                   
                    setFileName(fileName);
                });

                FR.readAsDataURL(this.files[0]);
            }
        }

        addEventListenerOnImageChanged();

        bindingService.init(self);
        uploadService.init(self);
        return self;
    }
})();
(function () {
    'use strict';

    angular.module('global-solusindo')
        .controller('VendorCtrl', VendorCtrl);

    VendorCtrl.$inject = ['$scope', '$state', 'vendorDtService', 'vendorDeleteService', 'vendorViewService','HttpService'];

    function VendorCtrl($scope, $state, dtService, deleteService, viewService, http) {
        var self = this;

        dtService.init(self);
        deleteService.init(self);
        viewService.init(self);

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var createRole = "Vendor_Input";
            var deleteRole = "Vendor_Delete";

            document.getElementById("addButton").style.visibility = "hidden";
            document.getElementById("deleteButton").style.visibility = "hidden";

            setRole(res.data, "addButton", createRole);
            setRole(res.data, "deleteButton", deleteRole);

        })
        
        function setRole(roles, control, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            if (role) {
                document.getElementById(control).style.visibility = "visible";
            }
            else {
                document.getElementById(control).style.visibility = "hidden";
            }

        }

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
        .controller('VendorEntryCtrl', VendorEntryCtrl);

    VendorEntryCtrl.$inject = ['$scope', '$stateParams', '$state', 'VendorSaveService', 'VendorBindingService', 'FormControlService', 'select2Service'];

    function VendorEntryCtrl($scope, sParam, $state, saveService, bindingService, formControlService, select2Service) {
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
     * @name app.service:dashboardService
     * @description
     * # dashboardService
     * Service of the app
     */

    angular
        .module('global-solusindo')
        .factory('areaDeleteService', areaDeleteService);

    areaDeleteService.$inject = ['HttpService', 'uiService'];

    function areaDeleteService(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('area', ids).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message, 'popup');
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
        .factory('areaDtService', areaDtService);

    areaDtService.$inject = ['DatatableService','HttpService'];

    function areaDtService(ds,http) {
        var self = this;
        var controller = {};
        
        var view = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "Area_Edit";
            var deleteRole = "Area_Delete";
            
            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
        })



        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }


        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#area", "area/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
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
                            return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
                        }
                    }
                ],
                exportButtons: {
                    columns: [1],
                    title: "Area"
                }
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
        .factory('areaViewService', areaViewService);

    areaViewService.$inject = ['HttpService', '$state', 'uiService'];

    function areaViewService(http, $state, ui) {
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

            //$("#area tbody").on("dblclick", "tr", function () {
            //    var data = controller.datatable.row(this).data();
            //    var id = data["area_pk"];
            //    self.view(id);
            //});
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
        .factory('AreaSaveService', AreaSaveService);

    AreaSaveService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function AreaSaveService($state, http, ui, validation) {
        var self = this;
        var controller;

        function goToListPage() {
            $state.go('app.areaList');
        }

        self.create = function (model) {
            http.post('area', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.areaEntry', { id: res.data.model.area_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('area', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
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
                    ui.alert.success(res.message, 'popup');
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

    aset.$inject = ['DatatableService','HttpService'];

    function aset(ds, http) {
        var self = this;

        var show = 'hidden';
        var view = 'hidden';
        var userHistory = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "Aset_Edit";
            var readRole = "Aset_ViewAll";
            var deleteRole = "Aset_Delete";
            var userHistoryRole = "UserHistori_ViewAll";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, readRole)) {
                show = 'visible';
            }
            if (setRole(res.data, userHistoryRole)) {
                userHistory = 'visible';
            }
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
        })

        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#aset", "aset/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
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
                        "data": "status",
                        "render": function (data) {
                            if(data.length>0)
                                return "Not Available"
                            else
                                return "Available"
                        }
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success' style='visibility:" + show +"'><i class='fa fa-info'></i></button> " +
                                "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='userHistory' rel='tooltip' title='Asset History' data-placement='left' class='btn btn-success' style='visibility:" + userHistory +"'><i class='fas fa-book'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
                        }
                    }
                ],
                exportButtons: {
                    columns: [1, 2, 3],
                    title: "Aset"
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
     * @name app.service:dashboardService
     * @description
     * # dashboardService
     * Service of the app
     */

    angular
        .module('global-solusindo')
        .factory('asetViewService', asetView);

    asetView.$inject = ['HttpService', '$state', 'uiService', '$uibModal'];

    function asetView(http, $state, ui, $uibModal) {
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
                var modalInstance = $uibModal.open({
                    templateUrl: 'app/modules/aset/asetDetail.html',
                    controller: function ($scope, $uibModalInstance) {
                        http.get('aset/form/' + data.aset_pk).then(function (res) {
                            $scope.model = res.data.model;
                            if ($scope.model && $scope.model.filePhotoInBase64) {
                                document.getElementById("photo").src = $scope.model.filePhotoInBase64;
                            }
                        });
                        $scope.close = function () {
                            $uibModalInstance.close();
                        };
                    }
                });
                modalInstance.result.then(function (selectedItem) { }, function () { });
            });
            $('#aset tbody').on('click', '#userHistory', function () {
                //alert('User History');
                var data = controller.datatable.row($(this).parents('tr')).data();

                $state.go('app.userHistory', { aset_fk: data.aset_pk });
            });
            $("#aset tbody").on("click", "#show", function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                var modalInstance = $uibModal.open({
                    templateUrl: 'app/modules/aset/asetDetail.html',
                    controller: function ($scope, $uibModalInstance) {
                        http.get('aset/form/' + data.aset_pk).then(function (res) { 
                            $scope.model = res.data.model;
                            if ($scope.model && $scope.model.filePhotoInBase64) {
                                document.getElementById("photo").src = $scope.model.filePhotoInBase64;
                            }
                        });
                        $scope.close = function () {
                            $uibModalInstance.close();
                        };
                    }
                });
                modalInstance.result.then(function (selectedItem) { }, function () { });
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

        function goToListPage() {
            $state.go('app.asetList');
        }

        self.create = function (model) {
            http.post('aset', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    // $state.go('app.asetEntry', { id: res.data.model.aset_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('aset', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
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
        .factory('asetHistoriDeleteService', asetHistori);

    asetHistori.$inject = ['HttpService', 'uiService', '$uibModal'];

    function asetHistori(http, ui, $uibModal) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('asetHistori', ids).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message, 'popup');
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        function returnAset(data, remark) {
            
            data.tglSelesai = data.updatedDate;
            data.description = remark;
            return http.put('asetHistori', data).then(function (res) {
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message, 'popup');
                } else {
                    ui.alert.error(res.message);
                }
            });
            
        }

        self.return = function (data) {
            var modalInstance =
                $uibModal.open({
                    templateUrl: 'app/modules/asetHistori/asetHistoriRemark.html',
                    controller: function ($scope, $uibModalInstance) {
                        $scope.close = function () {
                            $uibModalInstance.close();
                        };
                        $scope.ok = function (remark) {
                            $uibModalInstance.close($scope.remark);
                            returnAset(data, document.getElementById('remark').value);
;                        };
                    }
                }).result.then(function (result) {
                    $scope.remark = result;
                });
        };


        self.delete = function (data) {
            var ids = [data.asetHistori_pk];
            ui.alert.confirm("Are you sure want to delete aset histori '" + data.asetName + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].asetHistori_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#asetHistori tbody').on('click', '#delete', function () {
                var selectedRecord = controller.datatable.row($(this).parents('tr')).data();
                self.kembali(selectedRecord);
            });

            $('#asetHistori tbody').on('click', '#return', function () {
                var selectedRecord = controller.datatable.row($(this).parents('tr')).data();
                self.return(selectedRecord);
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
        .factory('asetHistoriDtService', asetHistori);

    asetHistori.$inject = ['DatatableService', '$stateParams','HttpService'];

    function asetHistori(ds, $stateParams, http) {
        var self = this;
        var controller = {};

        var show = 'hidden';
        var view = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var readRole = "AsetHistori_ViewAll";
            var updateRole = "AsetHistori_Edit";
            var deleteRole = "AsetHistori_Delete";

            if (setRole(res.data, readRole)) {
                show = 'visible';
            }
            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
        })
        
        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            controller = ctrl;
            return ds.init("#asetHistori", "asetHistori/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10,
                    user_fk: $stateParams.user_fk,
                    SortName:'tglSelesai',
                    SortDir:'ASC'
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "asetHistori_pk"
                    },
                    {
                        "data": "asetKategoriTitle"
                    },
                    {
                        "data": "asetID"
                    },
                    {
                        "data": "asetName"
                    },
                    {
                        "data": "tglMulai",
                        "render": function (data) { return data ? moment(data).format("DD-MM-YYYY") : "-"; }
                    },
                    {
                        "data": "tglSelesai",
                        "render": function (data) { return data ? moment(data).format("DD-MM-YYYY") : "-"; }
                    },
                    {
                        "data": "description"
                    },
                    {
                        "data": "tglSelesai",
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            if (data == null) { return "<button id='return' rel='tooltip' title='return' data-placement='left' class='btn btn-success'><i class='fa fa-arrow-left'></i></button> " }
                            else
                            { return "" }

                        }
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success' style='visibility:" + show + "'><i class='fa fa-info'></i></button> " +
                                "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
                               
                        }
                    }
                ],
                ajaxCallback: function (response) {
                    controller.user = response.data.user;
                },
                exportButtons: {
                    columns: [1, 2, 3],
                    title: "AsetHistori"
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
     * @name app.service:dashboardService
     * @description
     * # dashboardService
     * Service of the app
     */

    angular
        .module('global-solusindo')
        .factory('asetHistoriViewService', asetHistoriView);

    asetHistoriView.$inject = ['HttpService', '$state', '$stateParams', 'uiService', '$uibModal'];

    function asetHistoriView(http, $state, $stateParams, ui, $uibModal) {
        var self = this;
        var controller;

        self.view = function (id, user_fk) {
            $state.go('app.asetHistoriEntry', {
                id: id,
                user_fk: user_fk
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#asetHistori tbody').on('click', '#view', function () {
                var asetHistori = controller.datatable.row($(this).parents('tr')).data();
                self.view(asetHistori.asetHistori_pk, asetHistori.user_fk);
            });

            $("#asetHistori tbody").on("dblclick", "tr", function () {
                var asetHistori = controller.datatable.row(this).data();
                //var data = controller.datatable.row($(this).parents('tr')).data();
                var modalInstance = $uibModal.open({
                    templateUrl: 'app/modules/asetHistori/asetHistoriDetail.html',
                    controller: function ($scope, $uibModalInstance) {
                        $scope.model = asetHistori;
                        $scope.close = function () {
                            $uibModalInstance.close();
                        };
                    }
                });
                modalInstance.result.then(function (selectedItem) { }, function () { });
                //self.view(asetHistori.asetHistori_pk, asetHistori.user_fk);
            });

            angular.element('#addNewButton').on('click', function () {
                self.view(0, $stateParams.user_fk);
            });

            $("#asetHistori tbody").on("click", "#show", function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                var modalInstance = $uibModal.open({
                    templateUrl: 'app/modules/asetHistori/asetHistoriDetail.html',
                    controller: function ($scope, $uibModalInstance) {
                        $scope.model = data;
                        $scope.close = function () {
                            $uibModalInstance.close();
                        };
                    }
                });
                modalInstance.result.then(function (selectedItem) { }, function () { });
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
        .factory('AsetHistoriBindingService', AsetHistoriBindingService);

    AsetHistoriBindingService.$inject = ['HttpService', '$state'];

    function AsetHistoriBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('asetHistori/form/' + id);
        };

        function setImage(data) {
            document.getElementById("photoAsetHistori").src = data;
        }

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
        .factory('AsetHistoriSaveService', AsetHistoriEntry);

    AsetHistoriEntry.$inject = ['$state', '$stateParams', 'HttpService', 'uiService', 'validationService'];

    function AsetHistoriEntry($state, $stateParams, http, ui, validation) {
        var self = this;
        var controller;

        function goToListPage() {
            $state.go('app.asetHistoriList', { user_fk: $stateParams.user_fk });
        }

        self.create = function (model) {
            model.user_fk = $stateParams.user_fk;
            http.post('asetHistori', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    // $state.go('app.asetHistoriEntry', { id: res.data.model.asetHistori_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            model.user_fk = $stateParams.user_fk;
            http.put('asetHistori', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.save = function (model) {
            validation.clearValidationErrors({});
            if (model.asetHistori_pk === 0) {
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

            angular.element('#backButton').on('click', function () {
                goToListPage();
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
                    ui.alert.success(res.message, 'popup');
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

    asetKategori.$inject = ['DatatableService','HttpService'];

    function asetKategori(ds,http) {
        var self = this;

        var view = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "AsetKategori_Edit";
            var deleteRole = "AsetKategori_Delete";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
        })



        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#asetKategori", "asetKategori/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
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
                            return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
                        }
                    }
                ],
                exportButtons: {
                    columns: [1],
                    title: "Kategori Aset"
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

            //$("#asetKategori tbody").on("dblclick", "tr", function () {
            //    var data = controller.datatable.row(this).data();
            //    var id = data["asetKategori_pk"];
            //    self.view(id);
            //});
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

        function goToListPage() {
            $state.go('app.asetKategoriList');
        }

        self.create = function (model) {
            http.post('asetKategori', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.asetKategoriEntry', { id: res.data.model.asetKategori_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('asetKategori', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
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
                    ui.alert.success(res.message, 'popup');
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
                    ui.alert.success(res.message, 'popup');
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

    authParam.$inject = ['DatatableService','HttpService'];

    function authParam(ds, http) {
        var self = this;

        var show = 'hidden';
        var view = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var readRole = "AuthParam_ViewAll";
            var updateRole = "AuthParam_Edit";
            var deleteRole = "AuthParam_Delete";

            if (setRole(res.data, readRole)) {
                show = 'visible';
            }
            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
        })
        
        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#authParam", "authParam/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
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
                            return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success' style='visibility:" + show +"'><i class='fa fa-info'></i></button> " +
                                "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
                        }
                    }
                ],
                exportButtons: {
                    columns: [1, 2],
                    title: "Auth Param"
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
     * @name app.service:dashboardService
     * @description
     * # dashboardService
     * Service of the app
     */

    angular
        .module('global-solusindo')
        .factory('authParamViewService', authParamView);

    authParamView.$inject = ['HttpService', '$state', 'uiService', '$uibModal'];

    function authParamView(http, $state, ui, $uibModal) {
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
                var modalInstance = $uibModal.open({
                    templateUrl: 'app/modules/authParam/authParamDetail.html',
                    windowClass: 'small-modal',
                    controller: function ($scope, $uibModalInstance) {
                        $scope.model = data;
                        $scope.close = function () {
                            $uibModalInstance.close();
                        };
                    }
                });
                modalInstance.result.then(function (selectedItem) { }, function () { });
                //var id = data["authParam_pk"];
                //self.view(id);
            });

            $("#authParam tbody").on("click", "#show", function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                var modalInstance = $uibModal.open({
                    templateUrl: 'app/modules/authParam/authParamDetail.html',
                    windowClass: 'small-modal',
                    controller: function ($scope, $uibModalInstance) {
                        $scope.model = data;
                        $scope.close = function () {
                            $uibModalInstance.close();
                        };
                    }
                });
                modalInstance.result.then(function (selectedItem) { }, function () { });
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
        function goToListPage() {
            $state.go('app.authParamList');
        }
        self.create = function (model) {
            http.post('authParam', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.authParamEntry', { id: res.data.model.authParam_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('authParam', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
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
                    ui.alert.success(res.message, 'popup');
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        self.delete = function (data) {
            var ids = [data.bts_pk];
            ui.alert.confirm("Are you sure want to delete Site '" + data.name + "'?", function () {
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

    bts.$inject = ['DatatableService', 'btsMapService','HttpService'];

    function bts(ds, mapService, http) {
        var self = this;

        var show = 'hidden';
        var view = 'hidden';
        var assetHistory = 'hidden';
        var inactivate = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "BTS_Edit";
            var readRole = "BTS_ViewAll";
            var deleteRole = "BTS_Delete";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, readRole)) {
                show = 'visible';
            }
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
        })

        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }
        
        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            var dt = ds.init("#bts", "bts/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
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
                            return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success' style='visibility:" + show +"'><i class='fa fa-info'></i></button> " +
                                "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
                        }
                    }
                ],
                exportButtons: {
                    columns: [1, 2, 3, 4],
                    title: "Site"
                },
                ajaxCallback: function (response) {
                    //var cities = [];
                    //var marker = [];

                    //if (response && response.data && response.data.records) {
                    //    response.data.records.forEach(function (bts) {
                             
                    //        marker.push(bts.name);
                    //        marker.push(parseFloat(bts.latitude));
                    //        marker.push(parseFloat(bts.longitude));
                    //        marker.push(5);
                    //        marker.push(bts.operatorTitle);
                    //        marker.push(bts.statusBtsTitle);
                    //        cities.push(marker);
                    //        marker = [];
                    //    });

                    //    mapService.init(cities);
                    //}
                }
            });

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
        .factory('btsMapService', btsMapService);

    btsMapService.$inject = ['HttpService', '$state', 'uiService'];

    function btsMapService(http, $state, ui) {
        var self = this;

        function initMap() {
            // The location of indonesia
            var indonesia = { lat: -2.548926, lng: 118.0148634 };
            // The map, centered at indonesia
            var map = new google.maps.Map(
                document.getElementById('map'), { zoom: 4, center: indonesia });
            // The markers, positioned at indonesia
            setMarkers(map);
        }

        var cities = [];
        //[
        //    ['Jakarta', -6.121435, 106.774124, 4],
        //    ['Bogor', -6.595038, 106.816635, 5],
        //    ['Banjarmasin', -3.316694, 114.590111, 5],
        //    ['Medan', 3.597031, 98.678513, 5],
        //];

        function setMarkers(map) {
            for (var i = 0; i < cities.length; i++) {
                var city = cities[i];
                var name = city[0];
                var operator = city[4];
                var status = city[5];
                var marker = new google.maps.Marker({
                    position: { lat: city[1], lng: city[2] },
                    map: map,
                    title: name + ', ' + operator + ', ' + status + '(' + city[1] + ', ' + city[2] + ')',
                    zIndex: city[3]
                });
            }
        }

        self.init = function (citiesArg) {
            cities = citiesArg;
            initMap();
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
        .factory('btsViewService', btsView);

    btsView.$inject = ['HttpService', '$state', 'uiService', '$uibModal'];

    function btsView(http, $state, ui, $uibModal) {
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
                var modalInstance = $uibModal.open({
                    templateUrl: 'app/modules/bts/btsDetail.html',
                    controller: function ($scope, $uibModalInstance) {
                        $scope.model = data;
                        $scope.close = function () {
                            $uibModalInstance.close();
                        };
                    }
                });
                modalInstance.result.then(function (selectedItem) { }, function () { });
            });

            $("#bts tbody").on("click", "#show", function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                var modalInstance = $uibModal.open({
                    templateUrl: 'app/modules/bts/btsDetail.html',
                    controller: function ($scope, $uibModalInstance) {
                        $scope.model = data;
                        $scope.close = function () {
                            $uibModalInstance.close();
                        };
                    }
                });
                modalInstance.result.then(function (selectedItem) { }, function () { });
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
        .factory('BTSAddTechnologyService', BTSAddTechnologyService);

    BTSAddTechnologyService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function BTSAddTechnologyService($state, http, ui, validation) {
        var self = this;
        var controller; 

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#btnAddTechnology').on('click', function () {
                ctrl.model.btsTechnologies.push({});
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
        .factory('BTSRemoveTechnologyService', BTSRemoveTechnologyService);

    BTSRemoveTechnologyService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function BTSRemoveTechnologyService($state, http, ui, validation) {
        var self = this;
        var controller;

        function removeTechnology(index) {
            controller.model.btsTechnologies.splice(index, 1);
        }

        self.init = function (ctrl) {
            controller = ctrl;
            controller.removeTechnology = removeTechnology;
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
        function goToListPage() {
            $state.go('app.btsList');
        }
        self.create = function (model) {
            http.post('bts', model).then(function (res) {
                debugger;
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.btsEntry', { id: res.data.model.bts_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('bts', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
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
                //getKotas();
                //getCabang();
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
        .factory('BTSImportExcelBindingService', BTSImportExcelBindingService);

    BTSImportExcelBindingService.$inject = ['HttpService', '$state'];

    function BTSImportExcelBindingService(http, $state) {
        var self = this;
        var controller = {};
       
        self.init = function (ctrl) {
            controller = ctrl; 
            controller.model = {};
            controller.model.file = {};
            controller.uploadResuls = [];
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
        .factory('BTSImportExcelUploadService', BTSImportExcelUploadService);

    BTSImportExcelUploadService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function BTSImportExcelUploadService($state, http, ui, validation) {
        var self = this;
        var btsImportExcelCtrl;

        function goToListPage() {
            $state.go('app.btsList');
        }

        self.save = function (model) {
            http.post('bts/import', model).then(function (res) {
                btsImportExcelCtrl.uploadResults = res.data;
                if (res.success) {
                    ui.alert.success('Upload process complete.');
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.downloadTpl = function () {
            http.downloadFile('bts/export', { keyword: '' }).then(function (data) {
                var contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                var linkElement = document.createElement('a');
                try {
                    var blob = new Blob([data], { type: contentType });
                    var url = window.URL.createObjectURL(blob);

                    linkElement.setAttribute('href', url);
                    linkElement.setAttribute("download", "SiteUpload.xlsx");

                    var clickEvent = new MouseEvent("click", {
                        "view": window,
                        "bubbles": true,
                        "cancelable": false
                    });
                    linkElement.dispatchEvent(clickEvent);
                } catch (ex) {
                    console.log(ex);
                }
            });


        };

        self.init = function (ctrl) {
            btsImportExcelCtrl = ctrl;
            angular.element('#uploadButton').on('click', function () {
                self.save(btsImportExcelCtrl.model);
            });

            angular.element('#downloadButton').on('click', function () {
                self.downloadTpl();
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
                    ui.alert.success(res.message, 'popup');
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

    cabang.$inject = ['DatatableService','HttpService'];

    function cabang(ds, http) {
        var self = this;

        var view = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "Cabang_Edit";
            var deleteRole = "Cabang_Delete";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
        })
        
        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#cabang", "cabang/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
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
                            return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
                        }
                    }
                ],
                exportButtons: {
                    columns: [1],
                    title: "Cabang"
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

            //$("#cabang tbody").on("dblclick", "tr", function () {
            //    var data = controller.datatable.row(this).data();
            //    var id = data["cabang_pk"];
            //    self.view(id);
            //});
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
                    if (res.data && res.data.errors)
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
                    if (res.data && res.data.errors)
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
        .factory('ChangePasswordSaveService', ChangePasswordSaveService);

    ChangePasswordSaveService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function ChangePasswordSaveService($state, http, ui, validation) {
        var self = this;
        var changePasswordCtrl;

        self.create = function (model) {

        };

        function validatePassword(password) {
            return (password != undefined && password != null && password.length > 0);
        }

        function validateRetypePassword(password, retypePassword) {
            return (password === retypePassword);
        }

        function validate() {
            validation.clearValidationErrors({});
            if (changePasswordCtrl && changePasswordCtrl.model) {

                var isValid = true;
                if (!validatePassword(changePasswordCtrl.model.currentPassword)) {
                    validation.setError('currentPassword', "Password is required.");
                    isValid = false;
                }

                if (!validatePassword(changePasswordCtrl.model.newPassword)) {
                    validation.setError('newPassword', "New password is required.");
                    isValid = false;
                }

                if (changePasswordCtrl.model.reTypeNewPassword === '') {
                    validation.setError('reTypeNewPassword', "Please retype new password.");
                    return false;
                } 

                if (!validateRetypePassword(changePasswordCtrl.model.newPassword, changePasswordCtrl.model.reTypeNewPassword)) {
                    validation.setError('reTypeNewPassword', "Password doesn't match.");
                    isValid = false;
                }
                return isValid;
            }
            return false;
        }

        self.save = function (model) {
            if (validate()) {
                return http.post('user/changePassword', model).then(function (res) {
                    if (res.success) {
                        ui.alert.success("Password has been changed.");
                    } else {
                        ui.alert.error(res.message);
                        if (res.data && res.data.errors)
                            validation.serverValidation(res.data.errors);
                    }
                });
            }
        };

        self.init = function (ctrl) {
            changePasswordCtrl = ctrl;
            angular.element('#saveButton').on('click', function () {
                self.save(changePasswordCtrl.model);
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
        .factory('checkInDeleteService', checkInDeleteService);

    checkInDeleteService.$inject = ['HttpService', 'uiService'];

    function checkInDeleteService(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('checkIn', ids).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message, 'popup');
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        self.delete = function (data) {
            var ids = [data.checkIn_pk];
            ui.alert.confirm("Are you sure want to delete checkIn '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].checkIn_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#checkIn tbody').on('click', '#delete', function () {
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
        .factory('checkInDtService', checkInDtService);

    checkInDtService.$inject = ['DatatableService'];

    function checkInDtService(ds) {
        var self = this;
        var controller = {};

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#checkIn", "checkIn/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10,
                    SortName:'checkIn_pk' ,
                    SortDir:'desc'
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "checkIn_pk"
                    },
                    {
                        "data": "userName"
                    },
                    {
                        "data": "kategoriJabatanTitle"
                    },
                    {
                        "data": "sowName"
                    },
                    {
                        "data": "btsName"
                    },
                    {
                        "data": "btsAddress"
                    },
                    {
                        "data": "checkInTime",
                        "render": function (data) { return data ? moment(data).format("DD-MM-YYYY HH:mm")  : "-"; }
                    },
                    {
                        "data": "waktuCheckOut",
                        "render": function (data) { return data ? moment(data).format("DD-MM-YYYY HH:mm") : "-"; }
                    },
                    {
                        "data": "fileSubmitted"
                    },
                    {
                        "data": "status"
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning'><i class='fas fa-pencil-alt'></i></button> ";
                        }
                    }
                ],
                exportButtons: {
                    columns: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                    title: "CheckIn"
                }
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
        .factory('checkInViewService', checkInViewService);

    checkInViewService.$inject = ['HttpService', '$state', 'uiService'];

    function checkInViewService(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.checkInEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#checkIn tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.checkIn_pk);
            });

            $("#checkIn tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["checkIn_pk"];
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
        .factory('CheckInBindingService', CheckInBindingService);

    CheckInBindingService.$inject = ['HttpService', '$state'];

    function CheckInBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('checkIn/form/' + id);
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
        .factory('checkInMapService', checkInMapService);

    checkInMapService.$inject = ['HttpService', '$state', 'uiService', 'kmlService'];

    function checkInMapService(http, $state, ui, kml) {
        var self = this;

        var checkInCtrl = {};

        function initMap() {
            // The location of indonesia
            var indonesia = { lat: -2.548926, lng: 118.0148634 };
            // The map, centered at indonesia
            var map1 = new google.maps.Map(document.getElementById('map1'), {
                zoom: 2,
                center: indonesia //{ lat: 0, lng: -180 }
            }); 
        }

        self.setRoute1 = function (routes) {
            
            if (routes) {
                
                var map = new google.maps.Map(document.getElementById('map1'), {
                    zoom: 14,
                    center: { lat: routes[0].lat, lng: routes[0].lng }
                });
                var flightPath = new google.maps.Polyline({
                    path: routes,
                    geodesic: true,
                    strokeColor: '#FF0000',
                    strokeOpacity: 1.0,
                    strokeWeight: 2
                }); 
                flightPath.setMap(map);
            }
        };
 

        self.init = function (ctrl) {
            checkInCtrl = ctrl;
            initMap();
            if (checkInCtrl && checkInCtrl.model && checkInCtrl.model.sowTracks && checkInCtrl.model.sowTracks[0]) {
                var xmlString = checkInCtrl.model.sowTracks[0].route;
                var routes = kml.createRoutes(xmlString);
                self.setRoute1(routes);
            }

            if (checkInCtrl && checkInCtrl.model && checkInCtrl.model.SOWTrackResults && checkInCtrl.model.SOWTrackResults[0]) {
                
                var routeResult = [];
                var coordinates = JSON.parse(checkInCtrl.model.SOWTrackResults[0].routeResult);
                coordinates.forEach(function (coordinate) {
                    routeResult.push({
                        lat: coordinate.latitude,
                        lng: coordinate.longitude
                    });
                });
                self.setRoute1(routeResult);
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
        .factory('CheckInSaveService', CheckInSaveService);

    CheckInSaveService.$inject = ['$state', 'HttpService', 'uiService', 'validationService', '$uibModal'];

    function CheckInSaveService($state, http, ui, validation, $uibModal) {
        var self = this;
        var controller;
        function goToListPage() {
            $state.go('app.checkInList');
        }

        self.approve = function (model, isApproved, remark) {
            var request = {
                "checkInID": model.checkIn_pk,
                "isApproved": isApproved,
                "remark": remark
            };
            http.post('mobile/doCloseTask', request).then(function (res) {
                if (res.status == true) {
                    ui.alert.success("Data successfuly updated.");
                    //$state.go('app.checkInEntry', { id: res.data.model.checkIn_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#approveButton').on('click', function () {
                self.approve(controller.model, true, '');
            });
            angular.element('#rejectButton').on('click', function () {
                var modalInstance =
                    $uibModal.open({
                        templateUrl: 'app/modules/checkInEntry/checkinRemark.html',
                        controller: function ($scope, $uibModalInstance) {
                            $scope.close = function () {
                                $uibModalInstance.close();
                            };
                            $scope.ok = function (remark) {
                                $uibModalInstance.close($scope.remark);
                                self.approve(controller.model, false, document.getElementById('remark').value);
                            };
                        }
                    }).result.then(function (result) {
                        $scope.remark = result;
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
                    ui.alert.success(res.message, 'popup');
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

    costKategori.$inject = ['DatatableService','HttpService'];

    function costKategori(ds, http) {
        var self = this;

        var view = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "CostKategori_Edit";
            var deleteRole = "CostKategori_Delete";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
        })



        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#costKategori", "costKategori/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
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
                            return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
                        }
                    }
                ],
                exportButtons: {
                    columns: [1],
                    title: "Cost Category"
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

            //$("#costKategori tbody").on("dblclick", "tr", function () {
            //    var data = controller.datatable.row(this).data();
            //    var id = data["costKategori_pk"];
            //    self.view(id);
            //});
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

        function goToListPage() {
            $state.go('app.costKategoriList');
        }

        self.create = function (model) {
            http.post('costKategori', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.costKategoriEntry', { id: res.data.model.costKategori_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('costKategori', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
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
                    ui.alert.success(res.message, 'popup');
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

    deliveryArea.$inject = ['DatatableService','HttpService'];

    function deliveryArea(ds, http) {
        var self = this;

        var view = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "DeliveryArea_Edit";
            var deleteRole = "DeliveryArea_Delete";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
        })



        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#deliveryArea", "deliveryArea/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
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
                            return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
                        }
                    }
                ],
                exportButtons: {
                    columns: [1],
                    title: "Delivery Area"
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

            //$("#deliveryArea tbody").on("dblclick", "tr", function () {
            //    var data = controller.datatable.row(this).data();
            //    var id = data["deliveryArea_pk"];
            //    self.view(id);
            //});
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

        function goToListPage() {
            $state.go('app.deliveryAreaList');
        }

        self.create = function (model) {
            http.post('deliveryArea', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.deliveryAreaEntry', { id: res.data.model.deliveryArea_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('deliveryArea', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
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
        .factory('issueTypeDeleteService', issueTypeDeleteService);

    issueTypeDeleteService.$inject = ['HttpService', 'uiService'];

    function issueTypeDeleteService(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('issueType', ids).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message, 'popup');
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        self.delete = function (data) {
            var ids = [data.issueType_pk];
            ui.alert.confirm("Are you sure want to delete issueType '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].issueType_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#issueType tbody').on('click', '#delete', function () {
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
        .factory('issueTypeDtService', issueTypeDtService);

    issueTypeDtService.$inject = ['DatatableService','HttpService'];

    function issueTypeDtService(ds, http) {
        var self = this;
        var controller = {};

        var view = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "IssueType_Edit";
            var deleteRole = "IssueType_Delete";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
        })
        
        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#issueType", "issueType/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "issueType_pk"
                    },
                    {
                        "data": "title"
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
                        }
                    }
                ],
                exportButtons: {
                    columns: [1],
                    title: "Issue Type"
                }
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
        .factory('issueTypeViewService', issueTypeViewService);

    issueTypeViewService.$inject = ['HttpService', '$state', 'uiService'];

    function issueTypeViewService(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.issueTypeEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#issueType tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.issueType_pk);
            });

            //$("#issueType tbody").on("dblclick", "tr", function () {
            //    var data = controller.datatable.row(this).data();
            //    var id = data["issueType_pk"];
            //    self.view(id);
            //});
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
        .factory('IssueTypeBindingService', IssueTypeBindingService);

    IssueTypeBindingService.$inject = ['HttpService', '$state'];

    function IssueTypeBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('issueType/form/' + id);
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
        .factory('IssueTypeSaveService', IssueTypeSaveService);

    IssueTypeSaveService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function IssueTypeSaveService($state, http, ui, validation) {
        var self = this;
        var controller;

        function goToListPage() {
            $state.go('app.issueTypeList');
        }

        self.create = function (model) {
            http.post('issueType', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.issueTypeEntry', { id: res.data.model.issueType_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('issueType', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.save = function (model) {
            validation.clearValidationErrors({});
            if (model.issueType_pk === 0) {
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
        .factory('izinCutiDeleteService', izinCuti);

    izinCuti.$inject = ['HttpService', 'uiService'];

    function izinCuti(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('izinCuti', ids).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message, 'popup');
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        self.delete = function (data) {
            var ids = [data.izinCuti_pk];
            ui.alert.confirm("Are you sure want to delete izinCuti '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].izinCuti_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#izinCuti tbody').on('click', '#delete', function () {
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
        .factory('izinCutiDtService', izinCuti);

    izinCuti.$inject = ['DatatableService', 'HttpService', "userInfoService"];

    function izinCuti(ds, http, userInfo) {
        var self = this;
        var controller = {};

        var view = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "IzinCuti_Edit";
            var deleteRole = "IzinCuti_Delete";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
        })



        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }
        var userId = JSON.parse(userInfo.getUserInfo()).user_pk;
        self.init = function (ctrl) {
            controller = ctrl;
            var tanggalColumnIndex = 5;
            var dt = ds.init("#izinCuti", "izinCuti/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 20,
                    userId: userId
                },
                order: [tanggalColumnIndex, "desc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "izinCuti_pk"
                    },
                    {
                        "render": function (data) {
                            return '';
                        }
                    },
                    {
                        "data": "userIzinCutiName"
                    },
                    {
                        "data": "userIzinCutiJabatan"
                    },
                    {
                        "data": "alasan"
                    },
                    {
                        "data": "tglMulai",
                        "render": function (data) { return data ? moment(data).format("DD-MM-YYYY") : "-"; }
                    },
                    {
                        "data": "izinCutiStatusTitle"
                    },
                    {
                        "data": "approvalByUserName"
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
                        }
                    }
                ],
                exportButtons: {
                    columns: [1, 2, 3, 4, 5, 6, 7],
                    title: "Izin Cuti"
                }
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
        .factory('izinCutiViewService', izinCutiView);

    izinCutiView.$inject = ['HttpService', '$state', 'uiService'];

    function izinCutiView(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.izinCutiEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#izinCuti tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.izinCuti_pk);
            });

            //$("#izinCuti tbody").on("dblclick", "tr", function () {
            //    var data = controller.datatable.row(this).data();
            //    var id = data["izinCuti_pk"];
            //    self.view(id);
            //});
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
        .factory('izinCutiApprovalDtService', izinCutiApprovalDtService);

    izinCutiApprovalDtService.$inject = ['DatatableService','HttpService'];

    function izinCutiApprovalDtService(ds, http) {
        var self = this;
        var controller = {};

        var view = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var readRole = "IzinCutiApproval_ViewAll";

            if (setRole(res.data, readRole)) {
                view = 'visible';
            }
        })



        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

        self.init = function (ctrl) {
            controller = ctrl;
            var tanggalColumnIndex = 5;
            var dt = ds.init("#izinCutiApproval", "izinCuti/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [tanggalColumnIndex, "desc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "izinCuti_pk"
                    },
                    {
                        "render": function (data) {
                            return '';
                        }
                    },
                    {
                        "data": "userIzinCutiName"
                    },
                    {
                        "data": "userIzinCutiJabatan"
                    },
                    {
                        "data": "alasan"
                    },
                    {
                        "data": "tglMulai",
                        "render": function (data) { return data ? moment(data).format("DD-MM-YYYY") : "-"; }
                    },
                    {
                        "data": "izinCutiStatusTitle"
                    },
                    {
                        "data": "approvalByUserName"
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='view' rel='tooltip' title='Detail' data-placement='left' class='btn btn-info' style='visibility:" + view +"'>Detail</button>";
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
        .factory('izinCutiApprovalViewService', izinCutiApprovalViewService);

    izinCutiApprovalViewService.$inject = ['HttpService', '$state', 'uiService'];

    function izinCutiApprovalViewService(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.izinCutiApprovalEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#izinCutiApproval tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.izinCuti_pk);
            });

            $("#izinCutiApproval tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["izinCuti_pk"];
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
        .factory('izinCutiApprovalBindingService', izinCutiApprovalBindingService);

    izinCutiApprovalBindingService.$inject = ['HttpService', '$state'];

    function izinCutiApprovalBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('izinCuti/form/' + id);
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
        .factory('izinCutiApprovalSaveService', izinCutiApprovalSaveService);

    izinCutiApprovalSaveService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function izinCutiApprovalSaveService($state, http, ui, validation) {
        var self = this;
        var controller;

        function goToIzinCutiApprovalList() {
            $state.go('app.izinCutiApprovalList');
        }

        self.approve = function (model) {
            http.put('izinCuti/approval', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToIzinCutiApprovalList();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.reject = function (model) {
            http.put('izinCuti/approval', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToIzinCutiApprovalList();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            var approved = 2;
            var rejected = 3;
            var waiting = 1;

            angular.element('#approveButton').on('click', function () {
                self.approve({
                    izinCuti_pk: ctrl.stateParam.id,
                    izinCutiStatus: approved
                });
            });

            angular.element('#rejectButton').on('click', function () {
                self.reject({
                    izinCuti_pk: ctrl.stateParam.id,
                    izinCutiStatus: rejected
                });
            });

            //angular.element('#waitingButton').on('click', function () {
            //    self.approve({
            //        izinCuti_pk: ctrl.sParam.id,
            //        izinCutiStatus: waiting
            //    });
            //});
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
        .factory('IzinCutiBindingService', IzinCutiBindingService);

    IzinCutiBindingService.$inject = ['HttpService', '$state'];

    function IzinCutiBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('izinCuti/form/' + id);
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
        .factory('IzinCutiSaveService', IzinCutiEntry);

    IzinCutiEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function IzinCutiEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        function goToListPage() {
            $state.go('app.izinCutiList');
        }

        self.create = function (model) {
            http.post('izinCuti', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.izinCutiEntry', { id: res.data.model.izinCuti_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                    var error = changeValueValidation(res.data.errors);
                    validation.serverValidation(error);
                }
            });
        };

        self.update = function (model) {
            http.put('izinCuti', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                    var error = changeValueValidation(res.data.errors);
                    validation.serverValidation(error);
                }
            });
        };

        self.save = function (model) {
            validation.clearValidationErrors({});
            if (model.izinCuti_pk === 0) {
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

        function changeValueValidation(data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].propertyName == 'Alasan') {
                    data[i].message = 'The Reason field is required'
                }
            }
            return data;
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
                    ui.alert.success(res.message, 'popup');
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

    kategoriJabatan.$inject = ['DatatableService','HttpService'];

    function kategoriJabatan(ds, http) {
        var self = this;
        var controller = {};

        var view = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "KategoriJabatan_Edit";
            var deleteRole = "KategoriJabatan_Delete";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
        })



        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#kategoriJabatan", "kategoriJabatan/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
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
                            return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
                        }
                    }
                ],
                exportButtons: {
                    columns: [1],
                    title: "Kategori Jabatan"
                }
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

            //$("#kategoriJabatan tbody").on("dblclick", "tr", function () {
            //    var data = controller.datatable.row(this).data();
            //    var id = data["kategoriJabatan_pk"];
            //    self.view(id);
            //});
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

        function goToListPage() {
            $state.go('app.kategoriJabatanList');
        }

        self.create = function (model) {
            http.post('kategoriJabatan', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    // $state.go('app.kategoriJabatanEntry', { id: res.data.model.kategoriJabatan_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('kategoriJabatan', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
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
                    ui.alert.success(res.message, 'popup');
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

    kota.$inject = ['DatatableService','HttpService'];

    function kota(ds, http) {
        var self = this;

        var view = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "Kota_Edit";
            var deleteRole = "Kota_Delete";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
        })
        
        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#kota", "kota/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
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
                            return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
                        }
                    }
                ],
                exportButtons: {
                    columns: [1],
                    title: "Kota"
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

            //$("#kota tbody").on("dblclick", "tr", function () {
            //    var data = controller.datatable.row(this).data();
            //    var id = data["kota_pk"];
            //    self.view(id);
            //});
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

        function goToListPage() {
            $state.go('app.kotaList');
        }

        self.create = function (model) {
            http.post('kota', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.kotaEntry', { id: res.data.model.kota_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('kota', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
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

    mappingRoleToRoleGroup.$inject = ['DatatableService','HttpService'];

    function mappingRoleToRoleGroup(ds, http) {
        var self = this;

        var view = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "MappingRoleToRoleGroup_ViewAll";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
        })
        
        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

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
                        return "<button id='view' title='View Role' data-placement='left' class='btn btn-success' style='visibility:" + view +"'>Role</button>";
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
                    if (res.data && res.data.errors)
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

    MappingUserToAuthParam.$inject = ['DatatableService','HttpService'];

    function MappingUserToAuthParam(ds, http) {
        var self = this;
        
        var view = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "MappingUserToAuthParam_ViewAll";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
        })
        
        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

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
                        return "<button id='view' title='View Users' data-placement='left' class='btn btn-success' style='visibility:" + view +"'>User</button>";
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

    mappingUserToAuthParamEntryDtService.$inject = ['DatatableService','HttpService'];

    function mappingUserToAuthParamEntryDtService(ds, http) {
        var self = this;
        var controller;
        var datatable;

        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var deleteRole = "MappingUserToAuthParam_Delete";

            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
        })

        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

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
                            return "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>";
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
                    if (res.data && res.data.errors)
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
                    if (res.data && res.data.errors)
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
                    debugger;
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
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

    MappingUserToRoleGroup.$inject = ['DatatableService','HttpService'];

    function MappingUserToRoleGroup(ds, http) {
        var self = this;

        

        var view = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "MappingUserToRoleGroup_ViewAll";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
        })
        
        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

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
                        return "<button id='view' title='View Users' data-placement='left' class='btn btn-success' style='visibility:" + view +"'>User</button>";
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

    mappingUserToRoleGroupEntryDtService.$inject = ['DatatableService','HttpService'];

    function mappingUserToRoleGroupEntryDtService(ds, http) {
        var self = this;
        var controller;
        var datatable;
        
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {
            
            var deleteRole = "MappingUserToRoleGroup_Delete";
            
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
        })
        
        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

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
                            return "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>";
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
                    if (res.data && res.data.errors)
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
                    if (res.data && res.data.errors)
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
                resolve(id);
                //self.applyBinding(id).then(function (res) {
                //    if (res.success) {
                //        controller.model = res.data.model;
                //        controller.formControls = res.data.formControls;
                //    }
                //    resolve(res);
                //});
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
                    if (res.data && res.data.errors)
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
        .factory('menuDeleteService', menuDeleteService);

    menuDeleteService.$inject = ['HttpService', 'uiService'];

    function menuDeleteService(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('menu', ids).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message, 'popup');
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        self.delete = function (data) {
            var ids = [data.menu_pk];
            ui.alert.confirm("Are you sure want to delete menu '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].menu_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#menu tbody').on('click', '#delete', function () {
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
        .factory('menuDtService', menuDtService);

    menuDtService.$inject = ['DatatableService'];

    function menuDtService(ds) {
        var self = this;
        var controller = {};

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#menu", "menu/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "menu_pk"
                    },
                    {
                        "data": "code"
                    },
                    {
                        "data": "caption"
                    },
                    {
                        "data": "path"
                    },
                    {
                        "data": "parentGroup"
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger'><i class='fa fa-trash-alt'></i></button>"
                        }
                    }
                ],
                exportButtons: {
                    columns: [1],
                    title: "Menu"
                }
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
        .factory('menuViewService', menuViewService);

    menuViewService.$inject = ['HttpService', '$state', 'uiService'];

    function menuViewService(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.menuEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#menu tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.menu_pk);
            });

            $("#menu tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["menu_pk"];
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
        .factory('MenuBindingService', MenuBindingService);

    MenuBindingService.$inject = ['HttpService', '$state'];

    function MenuBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('menu/form/' + id);
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
        .factory('MenuSaveService', MenuSaveService);

    MenuSaveService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function MenuSaveService($state, http, ui, validation) {
        var self = this;
        var controller;

        function goToListPage() {
            $state.go('app.menuList');
        }

        self.create = function (model) {
            http.post('menu', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.menuEntry', { id: res.data.model.menu_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('menu', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.save = function (model) {
            validation.clearValidationErrors({});
            if (model.menu_pk === 0) {
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
        .factory('myTaskListDeleteService', myTaskListDeleteService);

    myTaskListDeleteService.$inject = ['HttpService', 'uiService'];

    function myTaskListDeleteService(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('myTaskList', ids).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message, 'popup');
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        self.delete = function (data) {
            var ids = [data.myTaskList_pk];
            ui.alert.confirm("Are you sure want to delete myTaskList '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].myTaskList_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#myTaskList tbody').on('click', '#delete', function () {
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
        .factory('myTaskListDtService', myTaskListDtService);

    myTaskListDtService.$inject = ['DatatableService','HttpService'];

    function myTaskListDtService(ds, http) {
        var self = this;
        var controller = {};

        var view = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "MyTaskList_ViewAll";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
        })
        
        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#myTaskList", "myTaskList/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "checkIn_pk"
                    },
                    {
                        "data": "userName"
                    },
                    {
                        "data": "kategoriJabatanTitle"
                    },
                    {
                        "data": "sowName"
                    },
                    {
                        "data": "btsName"
                    },
                    {
                        "data": "btsAddress"
                    },
                    {
                        "data": "checkInTime",
                        "render": function (data) { return data ? moment(data).format("DD-MM-YYYY HH:mm") : "-"; }
                    },
                    {
                        "data": "waktuCheckOut",
                        "render": function (data) { return data ? moment(data).format("DD-MM-YYYY HH:mm") : "-"; }
                    },
                    {
                        "data": "fileSubmitted"
                    },
                    {
                        "data": "status"
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> ";
                        }
                    }
                ],
                exportButtons: {
                    columns: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                    title: "MyTaskList"
                }
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
        .factory('myTaskListViewService', myTaskListViewService);

    myTaskListViewService.$inject = ['HttpService', '$state', 'uiService'];

    function myTaskListViewService(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.myTaskListEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#myTaskList tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.checkIn_pk);
            });

            //$("#myTaskList tbody").on("dblclick", "tr", function () {
            //    var data = controller.datatable.row(this).data();
            //    var id = data["checkIn_pk"];
            //    self.view(id);
            //});
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
        .factory('MyTaskListBindingService', MyTaskListBindingService);

    MyTaskListBindingService.$inject = ['HttpService', '$state'];

    function MyTaskListBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('checkIn/form/' + id);
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
        .factory('MyTaskListSaveService', MyTaskListSaveService);

    MyTaskListSaveService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function MyTaskListSaveService($state, http, ui, validation) {
        var self = this;
        var controller;

        function goToListPage() {
            $state.go('app.myTaskListList');
        }

        self.submit = function (model) {
            var request = {
                "checkInID": model.checkIn_pk,
                "description": model.SOWResult.description
            };
            http.post('mobile/doSubmitUrl', request).then(function (res) {
                if (res.status == true) {
                    ui.alert.success("Data successfuly updated.");
                    //$state.go('app.myTaskListEntry', { id: res.data.model.myTaskList_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#submitButton').on('click', function () {
                self.submit(controller.model, true);
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
                    ui.alert.success(res.message, 'popup');
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

    operator.$inject = ['DatatableService','HttpService'];

    function operator(ds, http) {
        var self = this;

        var view = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "Operator_Edit";
            var deleteRole = "Operator_Delete";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
        })
        
        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#operator", "operator/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
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
                            return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
                        }
                    }
                ],
                exportButtons: {
                    columns: [1],
                    title: "Operator"
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

            //$("#operator tbody").on("dblclick", "tr", function () {
            //    var data = controller.datatable.row(this).data();
            //    var id = data["operator_pk"];
            //    self.view(id);
            //});
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

        function goToListPage() {
            $state.go('app.operatorList');
        }

        self.create = function (model) {
            http.post('operator', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.operatorEntry', { id: res.data.model.operator_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('operator', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
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
        .factory('POImportExcelBindingService', poImportExcelBindingService);

    poImportExcelBindingService.$inject = ['HttpService', '$state'];

    function poImportExcelBindingService(http, $state) {
        var self = this;
        var controller = {};
       
        self.init = function (ctrl) {
            controller = ctrl; 
            controller.model = {};
            controller.model.file = {};
            controller.uploadResults = [];

            http.get('po/search', {keyword:''}).then(function (res) {
                controller.uploadResults = res.data.records;
                //console.log('controller.uploadResults', controller.uploadResults);
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
        .factory('poviewDtService', poviewDtService);

    poviewDtService.$inject = ['DatatableService', 'HttpService'];

    function poviewDtService(ds, http) {
        var self = this;
        var controller = {};

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#poview", "po/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10,
                },
                order: [titleColumnIndex, "asc"],
                columns: [{
                    "data": "PO_PK"
                },
                {
                    "data": "Account"
                },
                {
                    "data": "ProjectCode"
                },
                {
                    "data": "SiteIDImp"
                },
                {
                    "data": "SiteID"
                },
                {
                    "data": "SiteName"
                },
                {
                    "data": "DUID"
                },
                {
                    "data": "PMOUniq"
                },
                {
                    "data": "SOWAct"
                },
                {
                    "data": "System"
                },
                {
                    "data": "SOWPO"
                },
                {
                    "data": "ItemDesc"
                },
                {
                    "data": "PONo"
                },
                {
                    "data": "ShipmentNo"
                },
                {
                    "data": "Qty"
                },
                {
                    "data": "POStatus"
                },
                {
                    "data": "status_fk"
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
        .factory('POImportExcelUploadService', poImportExcelUploadService);

    poImportExcelUploadService.$inject = ['$state', 'HttpService', 'uiService', 'validationService', '$http'];

    function poImportExcelUploadService($state, http, ui, validation, $http) {
        var self = this;
        var userImportExcelCtrl;



        self.save = function (model) {
            http.post('po/import', model).then(function (res) {
                userImportExcelCtrl.uploadResults = res.data.map(function (item) { return item.model });

                if (res.success) {
                    ui.alert.success('Upload process complete.');
                    window.location.reload();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                    window.location.reload();
                }
            });
        };

        self.downloadTpl = function () {
            http.downloadFile('po/export', { keyword: '' }).then(function (data) {
                var contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                var linkElement = document.createElement('a');
                try {
                    var blob = new Blob([data], { type: contentType });
                    var url = window.URL.createObjectURL(blob);

                    linkElement.setAttribute('href', url);
                    linkElement.setAttribute("download", "POUpload.xlsx");

                    var clickEvent = new MouseEvent("click", {
                        "view": window,
                        "bubbles": true,
                        "cancelable": false
                    });
                    linkElement.dispatchEvent(clickEvent);
                } catch (ex) {
                    console.log(ex);
                }
            });


        };

        self.init = function (ctrl) {
            userImportExcelCtrl = ctrl;
            angular.element('#uploadButton').on('click', function () {
                self.save(userImportExcelCtrl.model);
            });

            angular.element('#downloadButton').on('click', function () {
                self.downloadTpl();
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
                    ui.alert.success(res.message, 'popup');
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

    project.$inject = ['DatatableService','HttpService'];

    function project(ds, http) {
        var self = this;
        var controller = {};

        var show = 'hidden';
        var view = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var readRole = "Project_Edit";
            var updateRole = "Project_Edit";
            var deleteRole = "Project_Delete";

            if (setRole(res.data, readRole)) {
                show = 'visible';
            }
            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
        })



        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

        self.init = function (ctrl) {
            controller = ctrl;

            var titleColumnIndex = 1;
            var dt = ds.init("#project", "project/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "project_pk"
                    },
                    {
                        "data": "operatorTitle"
                    },
                    {
                        "data": "vendorTitle"
                    },
                    {
                        "data": "deliveryAreaTitle"
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success' style='visibility:" + show +"'><i class='fa fa-info'></i></button> " +
                                "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
                        }
                    }
                ],
                exportButtons: {
                    columns: [1, 2, 3],
                    title: "Project"
                }
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

    projectView.$inject = ['HttpService', '$state', 'uiService', '$uibModal'];

    function projectView(http, $state, ui, $uibModal) {
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
                var modalInstance = $uibModal.open({
                    templateUrl: 'app/modules/project/projectDetail.html',
                    controller: function ($scope, $uibModalInstance) {
                        $scope.model = data;
                        $scope.close = function () {
                            $uibModalInstance.close();
                        };
                    }
                });
                modalInstance.result.then(function (selectedItem) { }, function () { });
                //var id = data["project_pk"];
                //self.view(id);
            });

            $("#project tbody").on("click", "#show", function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                var modalInstance = $uibModal.open({
                    templateUrl: 'app/modules/project/projectDetail.html',
                    controller: function ($scope, $uibModalInstance) {
                        $scope.model = data;
                        $scope.close = function () {
                            $uibModalInstance.close();
                        };
                    }
                });
                modalInstance.result.then(function (selectedItem) { }, function () { });
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

        function goToListPage() {
            $state.go('app.projectList');
        }

        self.create = function (model) {
            http.post('project', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.projectEntry', { id: res.data.model.project_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        var error = changeValueValidation(res.data.errors)
                        validation.serverValidation(error);
                        //validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('project', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        var error = changeValueValidation(res.data.errors)
                        validation.serverValidation(error);
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

        function changeValueValidation(data)
        {
            for (var i = 0; i < data.length; i++) {
                if (data[i].propertyName == 'Operator_FK'){
                    data[i].message = 'The Operator field is required'
                }
                if (data[i].propertyName == 'Vendor_FK') {
                    data[i].message = 'The Vendor field is required'
                }
                if (data[i].propertyName == 'DeliveryArea_FK') {
                    data[i].message = 'The Delivery Area field is required'
                }
                if (data[i].propertyName == 'User_FK') {
                    data[i].message = 'The User field is required'
                }
            }
            return data;
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

        function getUsers() {
            select2Service.liveSearch("user/search", {
                extendRequestData: {
                    kategoriJabatan_fk: 7
                },
                selector: '#user_fk',
                valueMember: 'user_pk',
                displayMember: 'name',
                callback: function (data) {
                    controller.formData.users = data;
                },
                onSelected: function (data) {
                    controller.model.user_fk = data.user_pk;
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

        function getVendors() {
            select2Service.liveSearch("vendor/search", {
                selector: '#vendor_fk',
                valueMember: 'vendor_pk',
                displayMember: 'title',
                callback: function (data) {
                    controller.formData.vendors = data;
                },
                onSelected: function (data) {
                    controller.model.vendor_fk = data.vendor_pk;
                }
            });
        }

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element(document).ready(function () {
                getOperators(); 
                getDeliveryArea();
                getVendors();
                getUsers();
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
        .factory('activitiesDtService', activitiesDtService);

    activitiesDtService.$inject = ['DatatableService'];

    function activitiesDtService(ds) {
        var self = this;
        var controller = {};

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#activities", "report/activities", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10,
                    user_fk: controller.stateParam.id,
                    bulan: controller.stateParam.bulan
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "user_fk"
                    },
                    {
                        "data": "tanggal",
                        "render": function (data) { return data ? moment(data).format("DD-MM-YYYY") : "-"; }
                    },
                    {
                        "data": "checkInTime"
                    },
                    {
                        "data": "checkOutTime"
                    },
                    {
                        "data": "aktifitas"
                    },
                    {
                        "data": "approvedBy"
                    }
                ],
                exportButtons: {
                    columns: [1, 2, 3, 4],
                    title: "Activities"
                },
                ajaxCallback: function (response) {
                    controller.user = response.data.user;
                }
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
        .factory('dailyTaskDtService', dailyTaskDtService);

    dailyTaskDtService.$inject = ['DatatableService', 'dailyTaskSearchService'];

    function dailyTaskDtService(ds, search) {
        var self = this;
        var controller = {};

        self.init = function (ctrl) {
            controller = ctrl;

            var titleColumnIndex = 1;
            var dt = ds.init("#dailyTask", "dailyTask/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10,
                    status: controller.model.statusName,
                    user_fk: controller.model.user_fk
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "user_fk"
                    },
                    {
                        "data": "userId"
                    },
                    {
                        "data": "userName"
                    },
                    {
                        "data": "kategoriJabatanTitle"
                    },
                    {
                        "data": "status",
                        "className": "text-center",
                        "render": function (data) {
                            var className = 'dot-online';
                            switch (data) {
                                case "Online":
                                    className = 'dot-online';
                                    break;
                                case "Offline":
                                    className = 'dot-offline';
                                    break;
                                case "Cuti":
                                    className = 'dot-cuti';
                                    break;
                                case "Unassigned":
                                    className = 'dot-unassigned';
                                    break;
                                default:
                            }
                            return "<span class='" + className + "'></span>";
                        }
                    }
                ],
                exportButtons: {
                    columns: [1, 2, 3, 4, 5],
                    title: "Daily Task"
                }
            });
            ctrl.datatable = dt;
            search.init(ctrl);
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
        .factory('dailyTaskSearchService', searchService);

    searchService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function searchService($state, http, ui, validation) {
        var self = this;
        var controller;

        function goToListPage() {
            $state.go('app.role-list');
        }

        function search() {
            controller.datatable.requestData.user_fk = controller.model.user_fk;
            controller.datatable.requestData.status = controller.model.statusName;
            controller.datatable.draw();
        }

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#searchButton').on('click', function () {
                search();
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
        .factory('taskEngineerDeleteService', taskEngineerDeleteService);

    taskEngineerDeleteService.$inject = ['HttpService', 'uiService'];

    function taskEngineerDeleteService(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('taskEngineer', ids).then(function (response) {
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
            var ids = [data.taskEngineer_pk];
            ui.alert.confirm("Are you sure want to delete taskEngineer '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].taskEngineer_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#taskEngineer tbody').on('click', '#delete', function () {
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
        .factory('taskEngineerDtService', taskEngineerDtService);

    taskEngineerDtService.$inject = ['DatatableService', 'HttpService', 'taskEngineerSearchService'];

    function taskEngineerDtService(ds, http, search) {
        var self = this;
        var controller = {};

        var view = 'hidden';
        
        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "TaskEngineer_ViewAll";
        
            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
        })
        
        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

        //instantiate DatatableService
        self.dtService = ds;

        self.dtService.param = {
            user_fk: 0
        };

        self.init = function (ctrl) {
            controller = ctrl;
            //console.log(controller);
            //console.log(controller.model);
            //controller.search = function (ctrl) {
            //    controller = ctrl;
            //    console.log(controller);
            //    if (controller.model) {
            //        console.log(controller.model.user_fk);
            //        self.dtService.param.user_fk = controller.model.user_fk;
            //    }
            //    // console.log(self.dtService.param);
            //    controller.datatable.draw();
            //}
            var titleColumnIndex = 1;
            var dt = ds.init("#taskEngineer", "taskEngineer/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "sowAssign_fk"
                    },
                    {
                        "data": "userId"
                    },
                    {
                        "data": "userName"
                    },
                    {
                        "data": "kategoriJabatanTitle"
                    },
                    {
                        "data": "btsName"
                    },
                    {
                        data: 'taskStatus', defaultContent: "",
                        render: function (data, type, row) {
                            if (row.taskStatus == true ) {
                                return "Approve";
                            }
                            else if (row.taskStatus == false) {
                                return "Reject";
                            }
                            else if (!row.taskStatus && !row.checkin_fk) {
                                return "New";
                            }
                            else {
                                return "Waiting Approval";
                            }
                        }
                    },
                    //{
                    //    "data": "taskStatus"
                    //},
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='view' rel='tooltip' title='Detail' data-placement='left' class='btn btn-info' style='visibility:" + view +"'>Detail</button>";
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
        .factory('taskEngineerSearchService', tasksearchService);

    tasksearchService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function tasksearchService($state, http, ui, validation) {
        var self = this;
        var controller;

        //function goToListPage() {
        //    $state.go('app.role-list');
        //}

        

        self.search = function (ctrl) {
            controller = ctrl;
            console.log(controller);
            //user_fk, bts_fk, tglMulai, tglSelesai, periode, timeFilter
            controller.datatable.requestData.user_fk = controller.model.user_fk;
            controller.datatable.requestData.bts_fk = controller.model.bts_fk;
            controller.datatable.requestData.tglMulai = controller.model.tglMulai;
            controller.datatable.requestData.tglSelesai = controller.model.tglAkhir;
            controller.datatable.requestData.timeFilter = controller.model.timePeriod;
            controller.datatable.requestData.periode = controller.model.bulan_fk;
            controller.datatable.draw();
        }

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#searchButton').on('click', function () {
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
        .factory('taskEngineerViewService', taskEngineerViewService);

    taskEngineerViewService.$inject = ['HttpService', '$state', 'uiService'];

    function taskEngineerViewService(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data, datacheckIn_fk) {
            $state.go('app.taskEngineerDetail', {
                id: data,
                checkIn_fk: datacheckIn_fk
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#taskEngineer tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                var checkIn_fk = data.checkin_fk;
                if (!checkIn_fk) { checkIn_fk = 0 }
                self.view(data.sowAssign_fk, checkIn_fk);
            });

            $("#taskEngineer tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var id = data["sowAssign_fk"];
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
        .factory('TaskEngineerDetailBindingService', TaskEngineerDetailBindingService);

    TaskEngineerDetailBindingService.$inject = ['HttpService', '$state'];

    function TaskEngineerDetailBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id, checkIn_fk) {
            return http.get('taskEngineerDetail/' + id + '/'+checkIn_fk);
        };

        self.init = function (ctrl) {
            controller = ctrl;
            var id = ctrl.stateParam.id;
            var checkIn_fk = ctrl.stateParam.checkIn_fk;
            return new Promise(function (resolve, reject) {
                self.applyBinding(id, checkIn_fk).then(function (res) {
                    controller.sowAssign = res.data.sowAssign;
                    controller.user = res.data.user;
                    controller.bts = res.data.bts;
                    controller.cellid = res.data.cellidstatus;
                    controller.sOWIssue = res.data.sOWIssue;
                    controller.remark = res.data.remark;
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
        .factory('timesheetEngineerDtService', timesheetEngineerDtService);

    timesheetEngineerDtService.$inject = ['DatatableService','HttpService'];

    function timesheetEngineerDtService(ds, http) {
        var self = this;
        var controller = {};

        var view = 'hidden';
       
        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "TimesheetEngineer_ViewAll";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
        })
        
        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }


        self.dtCallback = function (dt) {
            self.datatable = dt.DataTable;
        };

        //instantiate DatatableService
        self.dtService = ds;

        self.dtService.param = {
            user_pk: 0
        };
        self.init = function (ctrl) {
            controller = ctrl;
            console.log(controller.model);
            controller.search = function (){
                if(controller.model)
                    self.dtService.param.user_pk = controller.model.user_pk;
                // console.log(self.dtService.param);
                controller.datatable.draw();
            }

            var titleColumnIndex = 1;
           var dt = self.dtService.init("#timesheetEngineer", "user/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10,
                    userId: self.userId,
                    name:self.name
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
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
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='view' rel='tooltip' title='Detail' data-placement='left' class='btn btn-info' style='visibility:" + view +"'>Detail</button>";
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
        .factory('timesheetEngineerViewService', timesheetEngineerViewService);

    timesheetEngineerViewService.$inject = ['HttpService', '$state', 'uiService'];

    function timesheetEngineerViewService(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.timesheetEngineerDetail', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#timesheetEngineer tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.user_pk);
            });

            $("#timesheetEngineer tbody").on("dblclick", "tr", function () {
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
        .factory('timesheetEngineerDetailDtService', timesheetEngineerDetailDtService);

    timesheetEngineerDetailDtService.$inject = ['DatatableService','HttpService'];

    function timesheetEngineerDetailDtService(ds, http) {
        var self = this;
        var controller = {};

        var view = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "TimesheetEngineer_ViewAll";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            
        })
        
        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var user_fk = controller.stateParam.id;
            var dt = ds.init("#timesheetEngineerDetail", "report/timesheetDetail", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10,
                    user_fk: user_fk,
                    bulan: controller.model.bulan,
                    tahun: controller.model.tahun
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "user_fk"
                    },
                    {
                        "data": "bulan",
                        "visible": false,
                    },
                    {
                        "data": "bulanName"
                    },
                    {
                        "data": "tahun"
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='view' rel='tooltip' title='Detail' data-placement='left' class='btn btn-info' style='visibility:" + view + "'>Detail</button>";
                        }
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='download' rel='tooltip' title='Download' data-placement='left' class='btn btn-success' style='visibility:" + view + "'>Download</button>" 
                        }
                    }
                ],
                ajaxCallback: function (response) {
                    controller.user = response.data.user;
                }
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
        .factory('timesheetEngineerDetailViewService', timesheetEngineerDetailViewService);

    timesheetEngineerDetailViewService.$inject = ['HttpService', '$state', 'uiService'];

    function timesheetEngineerDetailViewService(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (user_fk, bulan, bulanName) {
            $state.go('app.engineerActivities', {
                id: user_fk,
                bulan: bulan,
                bulanName:bulanName
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#timesheetEngineerDetail tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.user_fk, data.bulan, data.bulanName);
            });

            $('#timesheetEngineerDetail tbody').on('click', '#download', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                var user_fk = data["user_fk"];
                var bulan = data["bulan"];
                var bulanName = data["bulanName"];
                var tahun = data["tahun"];
                http.downloadFile('report/activitydl?User_FK='+user_fk+'&Bulan='+bulan, { keyword: '' }).then(function (data) {
                    var contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                    var linkElement = document.createElement('a');
                    try {
                        var blob = new Blob([data], { type: contentType });
                        var url = window.URL.createObjectURL(blob);

                        linkElement.setAttribute('href', url);
                        linkElement.setAttribute("download", document.getElementById('userId').innerText +"TimesheetDetail "+bulanName + " " + tahun+".xlsx");

                        var clickEvent = new MouseEvent("click", {
                            "view": window,
                            "bubbles": true,
                            "cancelable": false
                        });
                        linkElement.dispatchEvent(clickEvent);
                    } catch (ex) {
                        console.log(ex);
                    }
                });
            });

            $("#timesheetEngineerDetail tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                var user_fk = data["user_fk"];
                var bulan = data["bulan"];
                var bulanName = data["bulanName"];
                self.view(user_fk, bulan, bulanName);
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
                    if (!res.success) {

                        return;
                    }
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
        .factory('RoleSaveService', RoleEntry);

    RoleEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function RoleEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        function goToListPage() {
            $state.go('app.role-list');
        }

        self.create = function (model) {
            http.post('role', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.role-entry', { id: res.data.model.role_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('role', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.role-entry', { id: res.data.model.role_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
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
                    ui.alert.success(res.message, 'popup');
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

    role.$inject = ['DatatableService','HttpService'];

    function role(ds, http) {
        var self = this;

        var view = 'hidden';
        var show = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var readRole = "Role_Edit";
            var updateRole = "Role_Edit";
            var deleteRole = "Role_Delete";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
            if (setRole(res.data, readRole)) {
                show = 'visible';
            }
        })



        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

        self.init = function (ctrl) {
            return ds.init("#role", "role/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [1, "asc"],
                columns: [
                    {
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
                            return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success' style='visibility:" + show +"'><i class='fa fa-info'></i></button> " +
                                "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
                        }
                    }
                ],
                exportButtons: {
                    columns: [1, 2],
                    title: "Role"
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
     * @name app.service:dashboardService
     * @description
     * # dashboardService
     * Service of the app
     */

    angular
        .module('global-solusindo')
        .factory('roleViewService', roleView);

    roleView.$inject = ['HttpService', '$state', 'uiService', '$uibModal'];

    function roleView(http, $state, ui, $uibModal) {
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
                var modalInstance = $uibModal.open({
                    templateUrl: 'app/modules/role/roleDetail.html',
                    windowClass: 'small-modal',
                    controller: function ($scope, $uibModalInstance) {
                        $scope.model = data;
                        $scope.close = function () {
                            $uibModalInstance.close();
                        };
                    }
                });
                modalInstance.result.then(function (selectedItem) { }, function () { });
                //var id = data["role_pk"];
                //self.view(id)
            });

            $("#role tbody").on("click", "#show", function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                var modalInstance = $uibModal.open({
                    templateUrl: 'app/modules/role/roleDetail.html',
                    windowClass: 'small-modal',
                    controller: function ($scope, $uibModalInstance) {
                        $scope.model = data;
                        $scope.close = function () {
                            $uibModalInstance.close();
                        };
                    }
                });
                modalInstance.result.then(function (selectedItem) { }, function () { });
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
                    ui.alert.success(res.message, 'popup');
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

    roleGroup.$inject = ['DatatableService','HttpService'];

    function roleGroup(ds, http) {
        var self = this;

        var show = 'hidden';
        var view = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var readRole = "RoleGroup_Edit";
            var updateRole = "RoleGroup_Edit";
            var deleteRole = "RoleGroup_Delete";

            if (setRole(res.data, readRole)) {
                show = 'visible';
            }
            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
        })



        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#roleGroup", "roleGroup/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
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
                            return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success' style='visibility:" + show +"'><i class='fa fa-info'></i></button> " +
                                "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
                        }
                    }
                ],
                exportButtons: {
                    columns: [1, 2],
                    title: "Role Group"
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
     * @name app.service:dashboardService
     * @description
     * # dashboardService
     * Service of the app
     */

    angular
        .module('global-solusindo')
        .factory('roleGroupViewService', roleGroupView);

    roleGroupView.$inject = ['HttpService', '$state', 'uiService', '$uibModal'];

    function roleGroupView(http, $state, ui, $uibModal) {
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
                var modalInstance = $uibModal.open({
                    templateUrl: 'app/modules/roleGroup/roleGroupDetail.html',
                    windowClass: 'small-modal',
                    controller: function ($scope, $uibModalInstance) {
                        $scope.model = data;
                        $scope.close = function () {
                            $uibModalInstance.close();
                        };
                    }
                });
                modalInstance.result.then(function (selectedItem) { }, function () { });
                //var id = data["roleGroup_pk"];
                //self.view(id);
            });

            $("#roleGroup tbody").on("click", "#show", function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                var modalInstance = $uibModal.open({
                    templateUrl: 'app/modules/roleGroup/roleGroupDetail.html',
                    windowClass: 'small-modal',
                    controller: function ($scope, $uibModalInstance) {
                        $scope.model = data;
                        $scope.close = function () {
                            $uibModalInstance.close();
                        };
                    }
                });
                modalInstance.result.then(function (selectedItem) { }, function () { });
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

        function goToListPage() {
            $state.go('app.roleGroupList');
        }

        self.create = function (model) {
            http.post('roleGroup', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.roleGroupEntry', { id: res.data.model.roleGroup_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('roleGroup', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
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

    DtService.$inject = ['DTOptionsBuilder', 'DTColumnBuilder', '$compile', 'HttpService', '$cookies', '$state', 'uiService', '$rootScope'];

    function DtService(DTOptionsBuilder, DTColumnBuilder, $compile, http, $cookies, $state, ui, $rootScope) {
        var self = this;
        self.param = {};
        var dtRequestData = {};

        function getExportColumns(params) {
            if (params && params.exportButtons && params.exportButtons.columns) {
                return params.exportButtons.columns;
            }
            return [0];
        }

        function getExportTitle(params) {
            if (params && params.exportButtons && params.exportButtons.title) {
                return params.exportButtons.title;
            }
            return [0];
        }

        function createExportButtons(params, dtInstance) {
            var exportColumns = getExportColumns(params);
            var title = getExportTitle(params);

            var buttons = new $.fn.dataTable.Buttons(dtInstance, {
                buttons: [
                    {
                        extend: 'excel',
                        "exportOptions": {
                            columns: exportColumns
                        },
                        title: title,
                        className: "btn-success"
                    },
                    {
                        extend: 'pdf',
                        "exportOptions": {
                            columns: exportColumns
                        },
                        title: title
                    }
                ]
            }).container().appendTo($('#exportButtons'));

            $('#exportButtons')[0].childNodes[1].classList.remove("dt-buttons");

            return buttons;
        }

        self.init = function dt(selector, apiUrl, param) {
            
            var defaultDom = "lftip";

            var dt = $(selector).DataTable({
                destroy: true,
                processing: true,
                serverSide: true,
                full_numbers: false,
                autoWidth: true,
                pageLength: 10,
                scrolly: true,
                scrollX: true,
                scrollCollapse: true,
                stateSave: param.stateSave,
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
                    //self.param.pageIndex = defaultRequestData.pageIndex;
                    //self.param.pageSize = defaultRequestData.pageSize;
                    //self.param.keyword = defaultRequestData.keyword;
                    //self.param.sortName = defaultRequestData.sortName;
                    //self.param.sortDir = defaultRequestData.sortDir; 

                    var requestData = (typeof (extendRequestData) != 'undefined') ? extendRequestData : defaultRequestData;
                    dtRequestData = requestData;
                    //var requestData = self.param;
                    if (!requestData.keyword) {
                        $('.backdrop-login').fadeIn();
                    }
                    http.get(apiUrl, requestData).then(function (res) {
                        if (res && res.success) {
                            callback({
                                recordsTotal: res.data.count.totalRecords,
                                recordsFiltered: res.data.count.totalFiltered,
                                data: res.data.records
                            });
                            if (param.ajaxCallback) {
                                param.ajaxCallback(res);
                            }
                        }
                        else {
                            ui.alert.error(res.message);
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
                ] : param.order,
                fnRowCallback: function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {

                    if (param && param.rowCallback) {
                        param.rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull);
                    }

                    var index = iDisplayIndex + 1;
                    $('td:eq(0)', nRow).html(index);

                    return nRow;
                },
                initComplete: function () {
                    if (param.exportButtons) {
                        createExportButtons(param, dt);
                    }
                }
            });
            if (param.rowSequence) {
                dt.on('draw.dt', function () {
                    var PageInfo = $(selector).DataTable().page.info();
                    dt.column(0, {
                        page: 'current'
                    }).nodes().each(function (cell, i) {
                        cell.innerHTML = i + 1 + PageInfo.start;
                    });
                });
            }

            $(selector + ' tbody').on("dblclick", "tr", function () {
                var data = dt.row(this).data();
                var id = data["Id"];
                if (param.route) {
                    (param.customRoute) ? param.route(data) : param.route(id);
                }
            });

            $('.dataTables_filter input[type=search]').val('').change();
            dt.requestData = dtRequestData;
             
            $(window).resize(function () {
                dt.columns.adjust();
            });
            angular.element('ui-view').on('resize', function () {
                alert('hello')
                dt.columns.adjust();
            });

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

    Http.$inject = ['$http', '$state', '$cookies', '$q', '$httpParamSerializerJQLike', 'PendingRequest', '$httpParamSerializer', 'uiService', 'tokenService'];

    function Http($http, $state, $cookies, $q, $httpParamSerializerJQLike, PendingRequest, $httpParamSerializer, ui, tokenService) {
        var debugMode = false;
        //var base_url = "http://gsapi.local/";
        var base_url = "http://globaloneapi.kairos-it.com/";
        //var base_url = "http://localhost/GlobalAPI/";

        var base_host = "";

        var auth = {};

        auth.getAccessToken = function () {
            return tokenService.getToken();
        };

        function showLoader() {
            ui.loader.show();
        }

        function hideLoader() {
            ui.loader.hide();
        }

        function goToLoginPage() {
            $state.go('login');
        }

        function handleUnauthorized() {
            tokenService.clearToken();
            ui.alert.error('Authorization is required.');
            goToLoginPage();
        }

        function handleHttpError(response) {
            hideLoader();
            var status = response.status;
            var message = response.statusText;
            var debugMessage = debugMode ? "<br/>Status: " + status + "<br/> Message: " + message + "" : "";
            if (debugMode) {
                console.log(response);
                ui.alert.error("Error. Debug mode is ON." + debugMessage);
            }
            if (status === 500) {
                ui.alert.error("Something error happen on the server." + debugMessage);
            }
            //if (status === -1) {
            //    ui.alert.error("Connection error, please check network or internet connection." + debugMessage);
            //}
            if (status === 401) {
                handleUnauthorized();
            }
        }

        function handleHttpSuccess(response) {
            hideLoader();
            var status = response.status;
            if (status != 200 && response.data.message) {
                ui.alert.error(response.message);
            }
            if (response.data && !response.data.success) {
                if (response.data.status != 200 && response.data.message) {
                    ui.alert.error(response.data.message);
                }
            }
        }

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
                showLoader();
                $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    timeout: deferred.promise,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }

                }).then(function (response) {
                    handleHttpSuccess(response);
                    deferred.resolve(response.data);
                    PendingRequest.remove(url);

                }, function (response) {
                    handleHttpError(response);
                    PendingRequest.remove(url);
                    deferred.reject(response.data);
                });

                return deferred.promise;
            },
            downloadFile: function (_url, requestData) {
                var deferred = $q.defer();
                var url = base_url + _url;

                var data = JSON.stringify(requestData);

                PendingRequest.add({
                    url: url,
                    canceller: deferred
                });
                delete $http.defaults.headers.common['X-Requested-With'];
                showLoader();
                $http({
                    method: 'POST',
                    responseType: 'arraybuffer',
                    url: url,
                    data: data,
                    timeout: deferred.promise,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'Authorization': 'Bearer ' + auth.getAccessToken()
                    }

                }).then(function (response) {
                    handleHttpSuccess(response);
                    deferred.resolve(response.data);
                    PendingRequest.remove(url);
                }, function (response) {
                    handleHttpError(response);
                    PendingRequest.remove(url);
                    deferred.reject();
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
                showLoader();
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
                    handleHttpSuccess(response);
                    deferred.resolve(response.data);
                    PendingRequest.remove(url);
                }, function (response) {
                    handleHttpError(response);
                    PendingRequest.remove(url);
                    deferred.reject();
                });

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
                showLoader();
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
                    handleHttpSuccess(response);
                    deferred.resolve(response.data);
                    PendingRequest.remove(url);

                }, function (response) {
                    handleHttpError(response);
                    PendingRequest.remove(url);
                    deferred.reject();
                });

                return deferred.promise;
            },
            get: function (_url, requestData, loadAnimation = true) {
                var deferred = $q.defer();
                var url = base_url + _url;

                var data = requestData;
                PendingRequest.add({
                    url: url,
                    canceller: deferred
                });
                if (loadAnimation) {
                    showLoader();
                }
                $http({
                    method: 'GET',
                    url: url,
                    params: data,
                    timeout: deferred.promise,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'Authorization': 'Bearer ' + auth.getAccessToken()
                    }

                }).then(function (response) {

                    handleHttpSuccess(response);
                    deferred.resolve(response.data);
                    PendingRequest.remove(url);

                }, function (response) {
                    handleHttpError(response);
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
                showLoader();
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
                    handleHttpSuccess(response);
                    deferred.resolve(response.data);
                    PendingRequest.remove(url);

                }, function (response) {
                    handleHttpError(response);
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
     * @name app.service:dashboardService
     * @description
     * # dashboardService
     * Service of the app
     */

    angular
        .module('global-solusindo')
        .factory('kmlService', kmlService);

    kmlService.$inject = ['$state', '$cookies', 'uiService', '$window'];

    function kmlService($state, $cookies, ui, $window) {
        var self = this;

        function parseXml(xmlString) {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(xmlString, "text/xml");
            return xmlDoc;
        }

        function getKmlNode(xmlDoc) {
            return xmlDoc.querySelector("kml");
        }

        function getDocumentNode(xmlDoc) {
            return getKmlNode(xmlDoc).querySelector("Document");
        }

        function getPlacemarkNodes(xmlDoc) {
            return getDocumentNode(xmlDoc).querySelectorAll("Placemark");
        }

        function getLineStringNode(placemark) {
            return placemark.querySelector("LineString");
        }

        function getCoordinatesCollection(placemark) {
            var coordinateString = getLineStringNode(placemark).querySelector("coordinates").innerHTML;
            function trim(coordinates) {
                return coordinates
                    .trim()
                    .replace(" ", "")
                    .replace("\t", "")
                    .replace("\n", "")
                    .replace("\r", "")
                    .replace("\v", "");
            }
            coordinateString = trim(coordinateString);

            var coordinateArray = coordinateString.split(",0 ");
            var coordinatesCollection = [];

            coordinateArray.forEach(function (coordinate) {
                var coordinates = coordinate.split(",");
                coordinatesCollection.push({
                    lat: parseFloat(coordinates[1]),
                    lng: parseFloat(coordinates[0])
                });
            });
            return coordinatesCollection;
        }

        self.createRoutes = function (xmlString) {
            var xmlDoc = parseXml(xmlString);
            var placemarks = getPlacemarkNodes(xmlDoc);

            var routes = [];

            placemarks.forEach(function (placemark) {
                var coordinatesCollection = getCoordinatesCollection(placemark);
                routes.push(coordinatesCollection);
            });

            return routes;
        }

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
                    dataType: 'json',
                    data: function (params) {
                        return {
                            q: params.term || '',
                            page: params.page || 1
                        };
                    },
                    transport: function (params, success, failure) { 
                        var defaultRequestData = {
                            "pageIndex": params.data.page,
                            "pageSize": 10,
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
                        return http.get(apiUrl, requestData, false)
                            .then(function (response) {
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
                                pagination: {
                                    more: (params.page * 10) < response.data.count.totalFiltered
                                }
                            };
                        }
                        return { results: [] };
                    }
                },
                cache: true,
                dropdownAutoWidth: true,
                placeholder: (param.placeholder) ? param.placeholder : 'Search..',
                allowClear: true,
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
     * @name app.service:dashboardService
     * @description
     * # dashboardService
     * Service of the app
     */

    angular
        .module('global-solusindo')
        .factory('tokenService', tokenService);

    tokenService.$inject = ['$state', '$cookies', 'uiService', '$window'];

    function tokenService($state, $cookies, ui, $window) {
        var self = this;

        self.getToken = function () {
            return $cookies.get('token');
        }

        self.clearToken = function (token) {
            $cookies.remove('token');
        }

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
        .factory('uiService', uiService);

    uiService.$inject = [];

    function uiService() {
        var self = this;

        self.alert = {
            error: function (message) {
                if (message) {
                    alertify.alert().setContent(message).setHeader('Error').set({
                        transition: 'zoom'
                    }).show(true, 'error');
                }
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
            success: function (message, style = 'toast') {
                switch (style) {
                    case 'popup':
                        alertify.alert().setContent(message).setHeader('Info').set({
                            transition: 'zoom'
                        }).show(true, 'error');
                        break;
                    default:
                        alertify.set('notifier', 'position', 'bottom-right');
                        alertify.notify(message, 'success', 5, null);
                }
            },
            confirm: function (message, accept, cancel) {
                return alertify.confirm().setContent(message).setHeader('Confirm').set({
                    transition: 'zoom',
                    onok: accept,
                    oncancel: cancel
                }).show(true, 'confirm');
            }
        };

        self.loader = {
            show: function () {
                angular.element('.lds-ring').fadeIn();
            },
            hide: function () {
                angular.element('.lds-ring').fadeOut();
            }
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
        .factory('userInfoService', userInfoService);

    userInfoService.$inject = ['$state', 'HttpService', 'uiService', 'validationService', '$window'];

    function userInfoService($state, http, ui, validation, $window) {
        var self = this;

        self.getUserInfo = function () {
            return $window.localStorage.getItem('user');
        };

        self.setUserInfo = function (userInfo) {
            $window.localStorage.setItem('user', JSON.stringify(userInfo));
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
                    ui.alert.success(res.message, 'popup');
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

    sow.$inject = ['DatatableService','HttpService'];

    function sow(ds, http) {
        var self = this;
        var controller = {};
        
        self.init = function (ctrl, show, view, dlt, approval) {
            controller = ctrl;
            var sortColumnIndex = 3;
            var tempview;
            var dt = ds.init("#sow", "sow/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [sortColumnIndex, "desc"],
                columns: [
                    {
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
                        "data": "tglMulai",
                        "render": function (data) { return data ? moment(data).format("DD-MM-YYYY") : "-"; }
                    },
                    {
                        "data": "sowStatusTitle"
                    },
                    {
                        "data": "statusSow_fk",
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='info' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success' style='visibility:" + show + "'><i class='fa fa-info'></i></button> " +
                                "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + (data == '4'? 'hidden' : view) + "'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + (data == '4' ? 'hidden' : dlt) + "'><i class='fa fa-trash-alt'></i></button>"
                        }
                    },
                    {
                        "data": "statusSow_fk",
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='approval' rel='tooltip' title='Approval' data-placement='left' class='btn btn-info' style='visibility:" + (data == '3' ? approval : 'hidden') + "'>Close</button>";
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

        self.approval = function (data) {
            $state.go('app.sowApproval', {
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

            $('#sow tbody').on('click', '#approval', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.approval(data.sow_pk);
            });

            $("#sow tbody").on("dblclick", "tr", function () {
                var data = controller.datatable.row(this).data();
                //var id = data["sow_pk"];
                //self.view(id);
                //var data = controller.datatable.row($(this).parents('tr')).data();
                self.info(data.sow_pk);
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
        .factory('SOWApprovalBindingService', SOWApprovalBindingService);

    SOWApprovalBindingService.$inject = ['HttpService', '$state'];

    function SOWApprovalBindingService(http, $state) {
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
        .factory('SOWApprovalService', SOWApprovalService);

    SOWApprovalService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function SOWApprovalService($state, http, ui, validation) {
        var self = this;
        var controller;

        function goToListPage() {
            $state.go('app.sowList');
        }

        self.approve = function (model, statusSow_fk) {
            var request = {
                "sow_pk": model.sow_pk,
                "statusSow_fk": statusSow_fk
            };
            http.put('sow/approval', request).then(function (res) {
                if (res.success) {
                    ui.alert.success("Data successfuly updated.");
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#approveButton').on('click', function () {
                self.approve(controller.model, 4);
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
        
        function applyConversion(model, isDTCoor, isTL) {
            if (model && model.sowTracks) {
                model.sowTracks.forEach(function (sowTrack, index) {
                    sowTrack.tipePekerjaan_fk = sowTrack.tipePekerjaan_fk + '';
                });
            }
            if (model && model.sowTracks) {

                if (model.sowTracks.length > 0) {
                    if (model.sowTracks[0].tipePekerjaan_fk == 2) {
                        var newValuesowTracks = model.sowTracks[0];
                        model.sowTracks[1] = newValuesowTracks;
                        model.sowTracks[0] = null;
                    }
                }
                
            }
            if (model && model.sowAssigns) {
                model.sowAssigns.forEach(function (sowAssign, index) {
                    if (isDTCoor == true) {
                        if (index < 3) {
                            sowAssign.createdBy = true;
                        }
                        else {
                            sowAssign.createdBy = false;
                        }
                    }
                    else if (isTL == true) {

                        if (index > 0) {
                            sowAssign.createdBy = false;
                        }
                        else {
                            sowAssign.createdBy = true;
                        }
                    }
                    else {
                        sowAssign.createdBy = false;
                    }
                });
            }
        }

        self.init = function (ctrl, isDTCoor, isTL) {
            controller = ctrl;
            var id = ctrl.stateParam.id;
            return new Promise(function (resolve, reject) {
                self.applyBinding(id).then(function (res) {
                    controller.formData = res.data.formData;

                    applyConversion(res.data.model, isDTCoor, isTL);
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
        .factory('sowMapService', sowMapService);

    sowMapService.$inject = ['HttpService', '$state', 'uiService', 'kmlService'];

    function sowMapService(http, $state, ui, kml) {
        var self = this;

        var sowCtrl = {};

        function initMap() {
            // The location of indonesia
            var indonesia = { lat: -2.548926, lng: 118.0148634 };
            // The map, centered at indonesia
            var map1 = new google.maps.Map(document.getElementById('map1'), {
                zoom: 2,
                center: indonesia //{ lat: 0, lng: -180 }
            });

            var map2 = new google.maps.Map(document.getElementById('map2'), {
                zoom: 2,
                center: indonesia //{ lat: 0, lng: -180 }
            });
        }

        self.setRoute1 = function (routes) {
            if (routes && routes[0] && routes[0][0]) {
                var map = new google.maps.Map(document.getElementById('map1'), {
                    zoom: 14,
                    center: { lat: routes[0][0].lat, lng: routes[0][0].lng }
                });
                routes.forEach(function (route) {
                    var flightPath = new google.maps.Polyline({
                        path: route,
                        geodesic: true,
                        strokeColor: '#FF0000',
                        strokeOpacity: 1.0,
                        strokeWeight: 2
                    });
                    flightPath.setMap(map);
                });
            }
        };

        self.setRoute2 = function (routes) {
            if (routes && routes[0] && routes[0][0]) {
                var map = new google.maps.Map(document.getElementById('map2'), {
                    zoom: 14,
                    center: { lat: routes[0][0].lat, lng: routes[0][0].lng }
                });
                routes.forEach(function (route) {
                    var flightPath = new google.maps.Polyline({
                        path: route,
                        geodesic: true,
                        strokeColor: '#FF0000',
                        strokeOpacity: 1.0,
                        strokeWeight: 2
                    });
                    flightPath.setMap(map);
                });
            }
        };

        self.init = function (ctrl) {
            sowCtrl = ctrl;
            initMap();
            if (sowCtrl && sowCtrl.model && sowCtrl.model.sowTracks && sowCtrl.model.sowTracks[0]) {
                var xmlString = sowCtrl.model.sowTracks[0].route;
                var routes = kml.createRoutes(xmlString);
                self.setRoute1(routes);
                //self.setRoute2(routes);
            }

            if (sowCtrl && sowCtrl.model && sowCtrl.model.SOWTrackResults && sowCtrl.model.SOWTrackResults[0]) {
                var routeResult = [];
                var coordinates = JSON.parse(sowCtrl.model.SOWTrackResults[0].routeResult);
                coordinates.forEach(function (coordinate) {
                    routeResult.push({
                        lat: coordinate.latitude,
                        lng: coordinate.longitude
                    });
                });
                self.setRoute1(routeResult);
                //self.setRoute2(routeResult);
            }

            if (sowCtrl && sowCtrl.model && sowCtrl.model.sowTracks && sowCtrl.model.sowTracks[1]) {
                xmlString = sowCtrl.model.sowTracks[1].route;
                routes = kml.createRoutes(xmlString);
                self.setRoute2(routes);
                //self.setRoute1(routes);
            }

            if (sowCtrl && sowCtrl.model && sowCtrl.model.SOWTrackResults && sowCtrl.model.SOWTrackResults[1]) {
                routeResult = [];
                coordinates = JSON.parse(sowCtrl.model.SOWTrackResults[1].routeResult);
                coordinates.forEach(function (coordinate) {
                    routeResult.push({
                        lat: coordinate.latitude,
                        lng: coordinate.longitude
                    });
                });
                self.setRoute2(routeResult);
                //self.setRoute1(routeResult);
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
        .factory('SOWSaveService', SOWEntry);

    SOWEntry.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function SOWEntry($state, http, ui, validation) {
        var self = this;
        var controller;

        function goToListPage() {
            $state.go('app.sowList');
        }

        self.create = function (model) {
            http.post('sow', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.sowEntry', { id: res.data.model.sow_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('sow', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
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
                displayMember: 'operatorTitle',
                callback: function (data) {
                    controller.formData.projects = data;
                },
                onSelected: function (data) {
                    controller.model.project_fk = data.project_pk;
                },
                templateResult: function (item) {
                    var markup = '';
                    if (item.loading) {
                        markup = "<div class='select2-result-repository__statistics'>" +
                            "<div>" + item.text + "</div>" +
                            "</div>" +
                            "</div></div>";
                        return markup;
                    } else {
                        markup = "<div class='select2-result-repository__statistics'>" +
                            "<div><b>" + item.operatorTitle + "</b></div>" +
                            "<div>" + item.vendorTitle + "</div>" +
                            "<div>" + item.deliveryAreaTitle + "</div>" +
                            "</div>" +
                            "</div></div>";
                        return markup;
                    }
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
                },
                templateResult: function (item) {
                    var markup = '';
                    if (item.loading) {
                        markup = "<div class='select2-result-repository__statistics'>" +
                            "<div>" + item.text + "</div>" +
                            "</div>" +
                            "</div></div>";
                        return markup;
                    } else {
                        var towerId = (item.towerId == null || item.towerId == undefined) ? '' : item.towerId;
                        var cellId = (item.cellId == null || item.cellId == undefined) ? '' : item.cellId;
                        markup = "<div class='select2-result-repository__statistics'>" +
                            "<div><b>" + item.name + "</b></div>" +
                            "<div>Operator: " + item.operatorTitle + "</div>" +
                            "<div>Tower ID: " + towerId + "</div>" +
                            "<div>Cell ID: " + cellId + "</div>" +
                            "</div>" +
                            "</div></div>";
                        return markup;
                    }
                }
            });
        }

        function getTechnologies() {
            select2Service.liveSearch("technology/search", {
                selector: '#technology_fk',
                valueMember: 'technology_pk',
                displayMember: 'title',
                callback: function (data) {
                    controller.formData.technologies = data;
                },
                onSelected: function (data) {
                    controller.model.technology_fk = data.technology_pk;
                    if (controller.model.sowTracks && controller.model.sowTracks[0]) {
                        controller.model.sowTracks[0].technology_fk = data.technology_pk;
                    }

                }
            });
        }


        function getSOWName() {
            select2Service.liveSearch("sow/sowname", {
                selector: '#sowname',
                callback: function (data) {
                    controller.formData.sowname = data;
                },
                onSelected: function (data) {
                    controller.model.sowNames = data.sowNames;
                }
            });
        }

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element(document).ready(function () {
                getProjects();
                getBTSs();
                getTechnologies();
                getSOWName();
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
        .factory('SOWImportExcelBindingService', SOWImportExcelBindingService);

    SOWImportExcelBindingService.$inject = ['HttpService', '$state'];

    function SOWImportExcelBindingService(http, $state) {
        var self = this;
        var controller = {};
       
        self.init = function (ctrl) {
            controller = ctrl; 
            controller.model = {};
            controller.model.file = {};
            controller.uploadResuls = [];
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
        .factory('SOWImportExcelUploadService', SOWImportExcelUploadService);

    SOWImportExcelUploadService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function SOWImportExcelUploadService($state, http, ui, validation) {
        var self = this;
        var SOWImportExcelCtrl;

        function goToListPage() {
            $state.go('app.sowList');
        }

        self.save = function (model) {
            http.post('sow/import', model).then(function (res) {
                SOWImportExcelCtrl.uploadResults = res.data;
                if (res.success) {
                    ui.alert.success('Upload process complete.');
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.downloadTpl = function () {
            debugger;
            http.downloadFile('sow/export', { keyword: '' }).then(function (data) {
                var contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                var linkElement = document.createElement('a');
                try {
                    var blob = new Blob([data], { type: contentType });
                    var url = window.URL.createObjectURL(blob);

                    linkElement.setAttribute('href', url);
                    linkElement.setAttribute("download", "SOWUpload.xlsx");

                    var clickEvent = new MouseEvent("click", {
                        "view": window,
                        "bubbles": true,
                        "cancelable": false
                    });
                    linkElement.dispatchEvent(clickEvent);
                } catch (ex) {
                    console.log(ex);
                }
            });


        };
        self.init = function (ctrl) {
            SOWImportExcelCtrl = ctrl;
            angular.element('#uploadButton').on('click', function () {
                self.save(SOWImportExcelCtrl.model);
            });

            angular.element('#downloadButton').on('click', function () {
                self.downloadTpl();
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
                    controller.costDt.draw();
                    ui.alert.success(res.message, 'popup');
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
                var selectedRecord = controller.costDt.row($(this).parents('tr')).data();
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

    costDtService.$inject = ['DatatableService', 'HttpService'];

    function costDtService(ds, http) {
        var self = this;
        var controller = {};

        var view = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "Cost_Edit";
            var deleteRole = "Cost_Delete";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
        })

        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

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
                    "data": "tanggal"
                },
                {
                    "data": "nominal",
                    "render": function (data) {
                        return numberWithCommas(data);
                    }
                },
                {
                    "data": "deskripsi"
                },
                {
                    "orderable": false,
                    "className": "text-center",
                    "render": function (data) {
                        return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view + "'><i class='fas fa-pencil-alt'></i></button> " +
                            "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt + "'><i class='fa fa-trash-alt'></i></button>"
                    }
                }
                ]
            });
            //controller.datatable = dt;
            controller.costDt = dt;
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
                    controller.modalInstance.close();
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
            modalInstance.result.then(function (data) {
                //controller.datatable.draw();
                controller.costDt.draw();
            }, function () { });

            return modalInstance;
        }

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element('#addCost').on('click', function () { 
                openModal(0);
            });

            //Row delete button event
            $('#cost tbody').on('click', '#view', function () {
                var selectedRecord = controller.costDt.row($(this).parents('tr')).data();
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
        .factory('sowissueDtService', sowissueDtService);

    sowissueDtService.$inject = ['DatatableService', 'HttpService'];

    function sowissueDtService(ds, http) {
        var self = this;
        var controller = {};

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#sowissue", "sow/issue", {
                extendRequestData: {
                    sow_fk: controller.stateParam.id
                },
                columns: [{
                    "data": "jabatan"
                },
                {
                    "data": "jabatan"
                },
                {
                    "data": "issuename"
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
        .factory('sowlinkDtService', sowlinkDtService);

    sowlinkDtService.$inject = ['DatatableService', 'HttpService'];

    function sowlinkDtService(ds, http) {
        var self = this;
        var controller = {};

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#link", "sow/link", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10,
                    sow_fk: controller.stateParam.id
                },
                columns: [{
                    "data": "nama"
                },
                {
                    "data": "jabatan"
                },
                {
                    "data": "nama"
                },
                {
                    "data": "link"
                },
                {
                    "data": "ssv"
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
        .factory('technologyDeleteService', technologyDeleteService);

    technologyDeleteService.$inject = ['HttpService', 'uiService'];

    function technologyDeleteService(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('technology', ids).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message, 'popup');
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        self.delete = function (data) {
            var ids = [data.technology_pk];
            ui.alert.confirm("Are you sure want to delete technology '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].technology_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#technology tbody').on('click', '#delete', function () {
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
        .factory('technologyDtService', technologyDtService);

    technologyDtService.$inject = ['DatatableService','HttpService'];

    function technologyDtService(ds, http) {
        var self = this;
        var controller = {};

        var view = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "Technology_Edit";
            var deleteRole = "Technology_Delete";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
        })
        
        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#technology", "technology/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "technology_pk"
                    },
                    {
                        "data": "title"
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
                        }
                    }
                ],
                exportButtons: {
                    columns: [1],
                    title: "Technology"
                }
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
        .factory('technologyViewService', technologyViewService);

    technologyViewService.$inject = ['HttpService', '$state', 'uiService'];

    function technologyViewService(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.technologyEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#technology tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.technology_pk);
            });

            //$("#technology tbody").on("dblclick", "tr", function () {
            //    var data = controller.datatable.row(this).data();
            //    var id = data["technology_pk"];
            //    self.view(id);
            //});
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
        .factory('TechnologyBindingService', TechnologyBindingService);

    TechnologyBindingService.$inject = ['HttpService', '$state'];

    function TechnologyBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('technology/form/' + id);
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
        .factory('TechnologySaveService', TechnologySaveService);

    TechnologySaveService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function TechnologySaveService($state, http, ui, validation) {
        var self = this;
        var controller;

        function goToListPage() {
            $state.go('app.technologyList');
        }

        self.create = function (model) {
            http.post('technology', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.technologyEntry', { id: res.data.model.technology_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('technology', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.save = function (model) {
            validation.clearValidationErrors({});
            if (model.technology_pk === 0) {
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
                    ui.alert.success(res.message, 'popup');
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        self.delete = function (data) {
            var ids = [data.user_pk];
            ui.alert.confirm("Are you sure want to delete user '" + data.name + "'?", function () {
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

    user.$inject = ['DatatableService','HttpService'];

    function user(ds,http) {
        var self = this;

        var show = 'hidden';
        var view = 'hidden';
        var assetHistory = 'hidden';
        var inactivate = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {
            
            var updateRole = "User_Edit";
            var readRole = "User_ViewAll";
            var asetHistoryRole = "AsetHistori_ViewAll";
            var deleteRole = "User_Delete";
            var activateRole = "User_Activate";
            var deactivateRole = "User_Deactivate";
            
            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, readRole)) {
                show = 'visible';
            }
            if (setRole(res.data, asetHistoryRole)) {
                assetHistory = 'visible';
            }
            if (setRole(res.data, deactivateRole)) {
                inactivate = 'visible';
            }
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
        })



        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }
        
        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            return ds.init("#user", "user/list", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
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
                    //{
                    //    "data": "roleGroupTitle"
                    //},
                    {
                        "data": "noHP"
                    },
                    {
                        "data": "email"
                    },
                    {
                        "data": "status_fk",
                        "render": function (status) {
                            switch (status) {
                                case 1:
                                    return "Active";
                                case 2:
                                    return "Inactive";
                                case 3:
                                    return "Deleted";
                                default:
                                    return "Active";
                            }
                        }
                    },
                    {
                        "data": "status_fk",
                        "orderable": false,
                        "className": "text-center",
                        "render": function (statusFk) {
                            var activateClassName = statusFk == 1 ? "btn btn-danger" : "btn btn-primary";
                            var activateTitle = statusFk == 1 ? "Deactivate User" : "Activate User";
                            var activateIcon = statusFk == 1 ? "fas fa-user-times" : "fas fa-user";

                            return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='showButton btn btn-success' style='visibility:"+ show +"'><i class='fa fa-info'></i></button> " +
                                "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='assetHistory' rel='tooltip' title='Asset History' data-placement='left' class='btn btn-success' style='visibility:" + assetHistory +"'><i class='fas fa-book'></i></button> " +
                                "<button id='inactivate' rel='tooltip' title='" + activateTitle + "' data-placement='left' class='" + activateClassName + "' style='visibility:" + inactivate +"'><i class='" + activateIcon + "'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>";
                        }
                    }
                ], 
                exportButtons: {
                    columns: [1, 2, 3, 4],
                    title: "Users"
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
     * @name app.service:dashboardService
     * @description
     * # dashboardService
     * Service of the app
     */

    angular
        .module('global-solusindo')
        .factory('userInactivateService', user);

    user.$inject = ['HttpService', 'uiService'];

    function user(http, ui) {
        var self = this;
        var controller;

        function inactivateRecords(ids) {
            return http.post('user/inactivate', {
                user_pk: ids
            }).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message, 'popup');
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        function activateRecords(ids) {
            return http.post('user/activate', {
                user_pk: ids
            }).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message, 'popup');
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        self.inactivate = function (data) {
            var ids = data.user_pk;
            var isActive = data.status_fk == 1;
            if (isActive) {
                ui.alert.confirm("Are you sure want to inactivate user '" + data.name + "'?", function () {
                    return inactivateRecords(ids);
                });
                return;
            }
            ui.alert.confirm("Are you sure want to activate user '" + data.name + "'?", function () {
                return activateRecords(ids);
            });

        };

        //self.inactivateMultiple = function (selectedRecords) {
        //    var ids = [];

        //    if (selectedRecords) {
        //        for (var i = 0; i < selectedRecords.length; i++) {
        //            ids.push(selectedRecords[i].user_pk);
        //        }
        //    }

        //    ui.alert.confirm("Are you sure want to inactivate " + ids.length + " selected data?", function () {
        //        return inactivateRecords(ids);
        //    });
        //};

        self.init = function (ctrl) {
            controller = ctrl;

            //Row inactivate button event
            $('#user tbody').on('click', '#inactivate', function () {
                var selectedRecord = controller.datatable.row($(this).parents('tr')).data();
                self.inactivate(selectedRecord);
            });

            ////Toolbar inactivate button event
            //angular.element('#inactivateButton').on('click', function () {
            //    var selectedRows = controller.datatable.rows('.selected').data();
            //    var rowsAreSelected = selectedRows.length > 0;
            //    if (!rowsAreSelected) {
            //        ui.alert.error('Please select the record you want to inactivate.');
            //        return;
            //    }

            //    var selectedRecords = [];
            //    for (var i = 0; i < selectedRows.length; i++) {
            //        selectedRecords.push(selectedRows[i]);
            //    }
            //    self.inactivateMultiple(selectedRecords);
            //});
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
        .factory('userViewService', userView);

    userView.$inject = ['HttpService', '$state', 'uiService', '$uibModal'];

    function userView(http, $state, ui, $uibModal) {
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

            $('#user tbody').on('click', '#assetHistory', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                $state.go('app.asetHistoriList', { user_fk: data.userDetail_pk });
            });

            $("#user tbody").on("dblclick", "tr", function () {
                //var data = controller.datatable.row(this).data();
                //var id = data["user_pk"];
                //self.view(id);
                var data = controller.datatable.row(this).data();

                http.get('user/form/' + data.user_pk).then(function (response) {
                    var user = response.data.model;

                    var modalInstance = $uibModal.open({
                        templateUrl: 'app/modules/user/userDetail.html',
                        controller: function ($scope, $uibModalInstance) {

                            $scope.model = user;
                            $scope.close = function () {
                                $uibModalInstance.close();
                            };
                        }
                    });
                    modalInstance.result.then(function (selectedItem) { }, function () { });
                });
            });

            $("#user tbody").on("click", "#show", function () {
                var data = controller.datatable.row($(this).parents('tr')).data();

                http.get('user/form/' + data.user_pk).then(function (response) {
                    var user = response.data.model;

                    var modalInstance = $uibModal.open({
                        templateUrl: 'app/modules/user/userDetail.html',
                        controller: function ($scope, $uibModalInstance) {

                            $scope.model = user;
                            $scope.close = function () {
                                $uibModalInstance.close();
                            };
                        }
                    });
                    modalInstance.result.then(function (selectedItem) { }, function () { });
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
        .factory('UserBindingService', UserBindingService);

    UserBindingService.$inject = ['HttpService', '$state'];

    function UserBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('user/form/' + id);
        };

        function setImage(data) {
            document.getElementById("photo").src = data;
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
        .factory('UserSaveService', UserSaveService);

    UserSaveService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function UserSaveService($state, http, ui, validation) {
        var self = this;
        var userCtrl;

        function goToListPage() {
            $state.go('app.userList');
        }

        self.create = function (model) {
            http.post('user', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.userEntry', { id: res.data.model.user_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('user', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };


        function validatePassword(password) {
            return (password != undefined && password != null && password.length > 0);
        }

        function validateRetypePassword(password, retypePassword) {
            return (password === retypePassword);
        }

        function validate() { 
            if (userCtrl && userCtrl.model) {
                if (userCtrl.model.user_pk > 0)
                    return true;

                var isValid = true;
                if (!validatePassword(userCtrl.model.password)) {
                    validation.setError('password', "Password is required.");
                    isValid = false;
                }

                if (!validateRetypePassword(userCtrl.model.password, userCtrl.model.reTypePassword)) {
                    validation.setError('reTypePassword', "Password doesn't match.");
                    isValid = false;
                }
                return isValid;
            }
            return false;
        }

        self.save = function (model) {
            validation.clearValidationErrors({});
            if (!validate())
                return;

            if (model.user_pk === 0) {
                return self.create(model);
            } else {
                return self.update(model);
            }
        };

        self.init = function (ctrl) {
            userCtrl = ctrl;
            angular.element('#saveButton').on('click', function () {
                self.save(userCtrl.model);
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

        function getProjects() {
            select2Service.liveSearch("project/search", {
                selector: '#project_fk',
                valueMember: 'project_pk',
                displayMember: 'operatorTitle',
                callback: function (data) {
                    controller.formData.projects = data;
                },
                onSelected: function (data) {
                    controller.model.project = data.project_pk;
                },
                templateResult: function (item) {
                    var markup = '';
                    if (item.loading) {
                        markup = "<div class='select2-result-repository__statistics'>" +
                            "<div>" + item.text + "</div>" +
                            "</div>" +
                            "</div></div>";
                        return markup;
                    } else {
                        markup = "<div class='select2-result-repository__statistics'>" +
                            "<div><b>" + item.operatorTitle + "</b></div>" +
                            "<div>" + item.vendorTitle + "</div>" +
                            "<div>" + item.deliveryAreaTitle + "</div>" +
                            "</div>" +
                            "</div></div>";
                        return markup;
                    }
                }
            });
        }

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

        function getReligions() {
            select2Service.liveSearch("religion/search", {
                selector: '#religion',
                valueMember: 'religion_pk',
                displayMember: 'name',
                callback: function (data) {
                    controller.formData.religions = data;
                },
                onSelected: function (data) {
                    controller.model.religion = data.religion_pk;
                }
            });
        }

        function getMaritalStatuses() {
            select2Service.liveSearch("maritalStatus/search", {
                selector: '#maritalStatus',
                valueMember: 'maritalStatus_pk',
                displayMember: 'name',
                callback: function (data) {
                    controller.formData.maritalStatuses = data;
                },
                onSelected: function (data) {
                    controller.model.maritalStatus = data.maritalStatus_pk;
                }
            });
        }

        function getGenders() {
            select2Service.liveSearch("gender/search", {
                selector: '#gender',
                valueMember: 'gender_pk',
                displayMember: 'name',
                callback: function (data) {
                    controller.formData.genders = data;
                },
                onSelected: function (data) {
                    controller.model.gender = data.gender_pk;
                }
            });
        }

        function getCategoryContracts() {
            select2Service.liveSearch("categoryContract/search", {
                selector: '#categoryContract',
                valueMember: 'categoryContract_pk',
                displayMember: 'name',
                callback: function (data) {
                    controller.formData.categoryContracts = data;
                },
                onSelected: function (data) {
                    controller.model.categoryContract = data.categoryContract_pk;
                }
            });
        }

        self.init = function (ctrl) {
            controller = ctrl;
            angular.element(document).ready(function () {
                getKategoriJabatans();
                getProjects();
                getReligions();
                getCategoryContracts();
                getMaritalStatuses();
                getGenders();
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
        .factory('userHistoryDtService', userHistory);

    userHistory.$inject = ['DatatableService', '$stateParams'];

    function userHistory(ds, $stateParams) {
        var self = this;
        var controller = {};
        self.init = function (ctrl) {
            var titleColumnIndex = 1;
            controller = ctrl;
            return ds.init("#userHistori", "userHistori/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10,
                    aset_fk: $stateParams.aset_fk,
                    SortName: 'tglSelesai',
                    SortDir: 'DESC'
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "asetHistori_pk"
                    },
                    {
                        "data": "userFullName"
                    },
                    {
                        "data": "userPosition"
                    },
                    {
                        "data": "tglMulai",
                        "render": function (data) { return data ? moment(data).format("DD-MM-YYYY") : "-"; }
                    },
                    {
                        "data": "tglSelesai",
                        "render": function (data) { return data ? moment(data).format("DD-MM-YYYY") : "-"; }
                    },
                    {
                        "data": "description"
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            //return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning'><i class='fas fa-pencil-alt'></i></button> " +
                            //    "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger'><i class='fa fa-trash-alt'></i></button>";
                            ////"<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success'><i class='fa fa-info'></i></button> " +
                            return "<button id='show' rel='tooltip' title='Detail' data-placement='left' class='btn btn-success'><i class='fa fa-info'></i></button> "
                                //"<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning'><i class='fas fa-pencil-alt'></i></button> " +
                                //"<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger'><i class='fa fa-trash-alt'></i></button>"
                               
                        }
                    }
                ],
                ajaxCallback: function (response) {
                    controller.user = response.data.user;
                }//,
                //exportButtons: {
                //    columns: [1, 2, 3],
                //    title: "AsetHistori"
                //}
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
        .factory('userHistoryViewService', userHistoryView);

    userHistoryView.$inject = ['HttpService', '$state', '$stateParams', 'uiService', '$uibModal'];

    function userHistoryView(http, $state, $stateParams, ui, $uibModal) {
        var self = this;
        var controller;

        //self.view = function (id, user_fk) {
        //    $state.go('app.asetHistoriEntry', {
        //        id: id,
        //        user_fk: user_fk
        //    });
        //};

        self.init = function (ctrl) {
            controller = ctrl;
            //$('#asetHistori tbody').on('click', '#view', function () {
            //    var asetHistori = controller.datatable.row($(this).parents('tr')).data();
            //    self.view(asetHistori.asetHistori_pk, asetHistori.user_fk);
            //});

            //$("#asetHistori tbody").on("dblclick", "tr", function () {
            //    var asetHistori = controller.datatable.row(this).data();
            //    self.view(asetHistori.asetHistori_pk, asetHistori.user_fk);
            //});

            //angular.element('#addNewButton').on('click', function () {
            //    self.view(0, $stateParams.user_fk);
            //});

            $("#userHistori tbody").on("click", "#show", function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                //var modalInstance = $uibModal.open({
                //    templateUrl: 'app/modules/userHistory/userHistoryDetail.html',
                //    controller: function ($scope, $uibModalInstance) {
                //        $scope.model = data;
                //        $scope.close = function () {
                //            $uibModalInstance.close();
                //        };
                //    }
                //});
                //modalInstance.result.then(function (selectedItem) { }, function () { });

                http.get('user/form/' + data.user_fk).then(function (response) {
                    var user = response.data.model;

                    var modalInstance = $uibModal.open({
                        templateUrl: 'app/modules/userHistory/userHistoryDetail.html',
                        controller: function ($scope, $uibModalInstance) {

                            $scope.model = user;
                            $scope.close = function () {
                                $uibModalInstance.close();
                            };
                        }
                    });
                    modalInstance.result.then(function (selectedItem) { }, function () { });
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
        .factory('UserImportCsvBindingService', UserImportCsvBindingService);

    UserImportCsvBindingService.$inject = ['HttpService', '$state'];

    function UserImportCsvBindingService(http, $state) {
        var self = this;
        var controller = {};
       
        self.init = function (ctrl) {
            controller = ctrl; 
            controller.model = {};
            controller.model.file = {};
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
        .factory('UserImportCsvUploadService', UserImportCsvUploadService);

    UserImportCsvUploadService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function UserImportCsvUploadService($state, http, ui, validation) {
        var self = this;
        var userImportCsvCtrl;

        function goToListPage() {
            $state.go('app.userList');
        }

        self.save = function (model) {
            http.post('user/import', model).then(function (res) {
                if (res.success) {

                    var successCount = 0;
                    res.data.forEach(function (result) {
                        if (result.success)
                            successCount += 1;
                    });
                    if (successCount > 0) {
                        ui.alert.success(successCount + ' record(s) successfully imported.');
                    }
                    else {
                        ui.alert.error(res.message);
                    }

                    //$state.go('app.userImportCsv', { id: res.data.model.userImportCsv_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.init = function (ctrl) {
            userImportCsvCtrl = ctrl;
            angular.element('#uploadButton').on('click', function () {
                self.save(userImportCsvCtrl.model);
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
        .factory('UserImportExcelBindingService', UserImportExcelBindingService);

    UserImportExcelBindingService.$inject = ['HttpService', '$state'];

    function UserImportExcelBindingService(http, $state) {
        var self = this;
        var controller = {};
       
        self.init = function (ctrl) {
            controller = ctrl; 
            controller.model = {};
            controller.model.file = {};
            controller.uploadResuls = [];
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
        .factory('UserImportExcelUploadService', UserImportExcelUploadService);

    UserImportExcelUploadService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function UserImportExcelUploadService($state, http, ui, validation) {
        var self = this;
        var userImportExcelCtrl;

        function goToListPage() {
            $state.go('app.userList');
        }

        self.save = function (model) {
            http.post('user/import', model).then(function (res) {
                userImportExcelCtrl.uploadResults = res.data;
                if (res.success) {
                    ui.alert.success('Upload process complete.');
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.downloadTpl = function () {
            http.downloadFile('user/export', { keyword: '' }).then(function (data) {
                var contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
                var linkElement = document.createElement('a');
                try {
                    var blob = new Blob([data], { type: contentType });
                    var url = window.URL.createObjectURL(blob);

                    linkElement.setAttribute('href', url);
                    linkElement.setAttribute("download", "UserUpload.xlsx");

                    var clickEvent = new MouseEvent("click", {
                        "view": window,
                        "bubbles": true,
                        "cancelable": false
                    });
                    linkElement.dispatchEvent(clickEvent);
                } catch (ex) {
                    console.log(ex);
                }
            });


        };
        self.init = function (ctrl) {
            userImportExcelCtrl = ctrl;
            angular.element('#uploadButton').on('click', function () {
                self.save(userImportExcelCtrl.model);
            });

            angular.element('#downloadButton').on('click', function () {
                self.downloadTpl();
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
        .factory('vendorDeleteService', vendorDeleteService);

    vendorDeleteService.$inject = ['HttpService', 'uiService'];

    function vendorDeleteService(http, ui) {
        var self = this;
        var controller;

        function deleteRecords(ids) {
            return http.delete('vendor', ids).then(function (response) {
                var res = response;
                if (res.success) {
                    controller.datatable.draw();
                    ui.alert.success(res.message, 'popup');
                } else {
                    ui.alert.error(res.message);
                }
            });
        }

        self.delete = function (data) {
            var ids = [data.vendor_pk];
            ui.alert.confirm("Are you sure want to delete vendor '" + data.title + "'?", function () {
                return deleteRecords(ids);
            });
        };

        self.deleteMultiple = function (selectedRecords) {
            var ids = [];

            if (selectedRecords) {
                for (var i = 0; i < selectedRecords.length; i++) {
                    ids.push(selectedRecords[i].vendor_pk);
                }
            }

            ui.alert.confirm("Are you sure want to delete " + ids.length + " selected data?", function () {
                return deleteRecords(ids);
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;

            //Row delete button event
            $('#vendor tbody').on('click', '#delete', function () {
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
        .factory('vendorDtService', vendorDtService);

    vendorDtService.$inject = ['DatatableService','HttpService'];

    function vendorDtService(ds, http) {
        var self = this;
        var controller = {};

        var view = 'hidden';
        var dlt = 'hidden';

        http.get('dashboard/getRole', {
            dashboard: ''
        }, true).then(function (res) {

            var updateRole = "Vendor_Edit";
            var deleteRole = "Vendor_Delete";

            if (setRole(res.data, updateRole)) {
                view = 'visible';
            }
            if (setRole(res.data, deleteRole)) {
                dlt = 'visible';
            }
        })



        function setRole(roles, roleName) {

            var role = false;

            for (var i = 0; i < roles.length; i++) {
                if (roleName == roles[i].title) {

                    role = true;
                    break;
                }
            }
            return role;
        }

        self.init = function (ctrl) {
            controller = ctrl;
            var titleColumnIndex = 1;
            var dt = ds.init("#vendor", "vendor/search", {
                extendRequestData: {
                    pageIndex: 1,
                    pageSize: 10
                },
                order: [titleColumnIndex, "asc"],
                columns: [
                    {
                        "orderable": false,
                        "data": "vendor_pk"
                    },
                    {
                        "data": "title"
                    },
                    {
                        "orderable": false,
                        "className": "text-center",
                        "render": function (data) {
                            return "<button id='view' rel='tooltip' title='Edit' data-placement='left' class='btn btn-warning' style='visibility:" + view +"'><i class='fas fa-pencil-alt'></i></button> " +
                                "<button id='delete' rel='tooltip' title='Delete' data-placement='left' class='btn btn-danger' style='visibility:" + dlt +"'><i class='fa fa-trash-alt'></i></button>"
                        }
                    }
                ],
                exportButtons: {
                    columns: [1],
                    title: "Vendor"
                }
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
        .factory('vendorViewService', vendorViewService);

    vendorViewService.$inject = ['HttpService', '$state', 'uiService'];

    function vendorViewService(http, $state, ui) {
        var self = this;
        var controller;

        self.view = function (data) {
            $state.go('app.vendorEntry', {
                id: data
            });
        };

        self.init = function (ctrl) {
            controller = ctrl;
            $('#vendor tbody').on('click', '#view', function () {
                var data = controller.datatable.row($(this).parents('tr')).data();
                self.view(data.vendor_pk);
            });

            //$("#vendor tbody").on("dblclick", "tr", function () {
            //    var data = controller.datatable.row(this).data();
            //    var id = data["vendor_pk"];
            //    self.view(id);
            //});
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
        .factory('VendorBindingService', VendorBindingService);

    VendorBindingService.$inject = ['HttpService', '$state'];

    function VendorBindingService(http, $state) {
        var self = this;
        var controller = {};

        self.applyBinding = function (id) {
            return http.get('vendor/form/' + id);
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
        .factory('VendorSaveService', VendorSaveService);

    VendorSaveService.$inject = ['$state', 'HttpService', 'uiService', 'validationService'];

    function VendorSaveService($state, http, ui, validation) {
        var self = this;
        var controller;

        function goToListPage() {
            $state.go('app.vendorList');
        }

        self.create = function (model) {
            http.post('vendor', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    //$state.go('app.vendorEntry', { id: res.data.model.vendor_pk });
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.update = function (model) {
            http.put('vendor', model).then(function (res) {
                if (res.success) {
                    ui.alert.success(res.message);
                    goToListPage();
                } else {
                    ui.alert.error(res.message);
                    if (res.data && res.data.errors)
                        validation.serverValidation(res.data.errors);
                }
            });
        };

        self.save = function (model) {
            validation.clearValidationErrors({});
            if (model.vendor_pk === 0) {
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
                    if ($scope.options == undefined) {
                        $scope.options = {
                            format: "DD/MM/YYYY HH:mm"
                        };
                    }
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
                                $timeout(function () {
                                    ngModel.$setViewValue(moment(ngModel.$viewValue).format());
                                });
                            } else {
                                ngModel.$setViewValue(ngModel.format());
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
                            ngModel.$setViewValue(newValue.format());
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
        .directive('button', collapseMenuTogglerDirective)
        .directive('form', formEl)
        .directive('a', preventClickDirective)
        .directive('loading', loadingSpinner)
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
                    angular.element('body').toggleClass('sidebar-mobile-show');
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
                console.log('a');
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

    function loadingSpinner() {
        return {
            restrict: 'E',
            template: '<div class="loading flex-row align-items-center">'+
                '<div class="loader" >'+
                    '<svg class="circular" viewBox="25 25 50 50">'+
                        '<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />'+
                    '</svg>'+
                '</div>'+
                '</div>',
            transclude: false
        };
    }

})();