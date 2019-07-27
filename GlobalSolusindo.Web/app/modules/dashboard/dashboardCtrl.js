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
