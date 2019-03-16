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
                        "path": "app.user-list",
                        "icon": "fas fa-chart-line"
                    },
                    {
                        "title": "role",
                        "path": "homepage",
                        "icon": "fas fa-chart-line"
                    },{
                        "title": "role group",
                        "path": "homepage",
                        "icon": "fas fa-chart-line"
                    }, 
                    {
                        "title": "mapping role to role group",
                        "path": "homepage",
                        "icon": "fas fa-chart-line"
                    },
                    {
                        "title": "mapping user to role group",
                        "path": "homepage",
                        "icon": "fas fa-chart-line"
                    },
                    {
                        "title": "auth param",
                        "path": "homepage",
                        "icon": "fas fa-chart-line"
                    },
                    {
                        "title": "mapping user to auth param",
                        "path": "homepage",
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