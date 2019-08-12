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