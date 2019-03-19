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