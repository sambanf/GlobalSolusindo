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
