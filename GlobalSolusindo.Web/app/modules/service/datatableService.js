(function () {
    'use strict';

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

    DtService.$inject = ['DTOptionsBuilder', 'DTColumnBuilder', '$compile', 'HttpService', '$cookies', '$state', 'uiService'];

    function DtService(DTOptionsBuilder, DTColumnBuilder, $compile, http, $cookies, $state, ui) {
        var self = this;
        self.param = {};

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
                    //self.param.pageIndex = defaultRequestData.pageIndex;
                    //self.param.pageSize = defaultRequestData.pageSize;
                    //self.param.keyword = defaultRequestData.keyword;
                    //self.param.sortName = defaultRequestData.sortName;
                    //self.param.sortDir = defaultRequestData.sortDir; 

                    var requestData = (typeof (extendRequestData) != 'undefined') ? extendRequestData : defaultRequestData;
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

            return dt;
        };

        return self;
    }

})();