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