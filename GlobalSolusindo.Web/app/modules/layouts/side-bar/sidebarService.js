(function () {
	'use strict';

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