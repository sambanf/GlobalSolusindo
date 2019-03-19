angular.module('global-solusindo-app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/authParam/authParam.html',
    "<div class=\"animated fadeIn\">\r" +
    "\n" +
    "    <form class=\"form-horizontal\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"card\">\r" +
    "\n" +
    "                    <div class=\"card-title\">List Auth Param</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-12\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.authParamEntry({ id: '0'})\">Tambah Auth Param</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div> \r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"authParam\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Title</th>\r" +
    "\n" +
    "                                        <th>Description</th>\r" +
    "\n" +
    "                                        <th></th>\r" +
    "\n" +
    "                                    </tr>\r" +
    "\n" +
    "                                </thead>\r" +
    "\n" +
    "                            </table>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/authParamEntry/authParamEntry.html',
    "<div class=\"animated fadeIn\">\r" +
    "\n" +
    "    <form class=\"form-horizontal\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"card\">\r" +
    "\n" +
    "                    <div class=\"card-title\">Tambah AuthParam</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Auth Param Name :</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\r" +
    "\n" +
    "                                    placeholder=\"Auth Param Name\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Description :</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <textarea class=\"form-control\" ng-model=\"vm.model.description\" name=\"description\" placeholder=\"Description\">\r" +
    "\n" +
    "                                        </textarea>\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <div class=\"col-md-12\">\r" +
    "\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.authParamList\">Kembali</button> <button class=\"btn btn-success float-right\"\r" +
    "\n" +
    "                                    id=\"saveButton\">Tambah AuthParam</button>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/layouts/app.html',
    "<!-- Navbar -->\r" +
    "\n" +
    "<div ng-include=\"'app/modules/layouts/nav-bar/navbar.html'\" include-replace></div>\r" +
    "\n" +
    "<div class=\"app-body\">\r" +
    "\n" +
    "  <!-- Navigation -->\r" +
    "\n" +
    "  <div ng-include=\"'app/modules/layouts/side-bar/sidebar.html'\" include-replace></div>\r" +
    "\n" +
    "  <!-- Main content -->\r" +
    "\n" +
    "  <main class=\"main\">\r" +
    "\n" +
    "    <!-- Breadcrumb -->\r" +
    "\n" +
    "    <ol class=\"breadcrumb\" breadcrumb>\r" +
    "\n" +
    "      <ncy-breadcrumb></ncy-breadcrumb>\r" +
    "\n" +
    "      <span class=\"controls\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <span class='mr-3'>{{ lastUpdate }}</span>\r" +
    "\n" +
    "        <span class=\"scroll-control\" ng-if=\"$state.current.name == 'app.alert' || $state.current.name == 'app.summary'\">\r" +
    "\n" +
    "          <i class=\"icon-control-start\" id='ticker-previous'></i>\r" +
    "\n" +
    "          <i class=\"icon-control-play\" id='start' ng-click='start(true)'></i>\r" +
    "\n" +
    "          <i class=\"icon-control-pause\" id='stop' ng-click='start(false)'></i>\r" +
    "\n" +
    "          <i class=\"icon-control-end\" id='ticker-next'></i>\r" +
    "\n" +
    "        </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <i class=\"icon-reload\" id='reload'></i>\r" +
    "\n" +
    "        <i class=\"icon-list\" id='paginate-icon' ng-click=\"changeView(true)\" ng-if=\"$state.current.name == 'app.alert' || $state.current.name == 'app.summary'\"></i>\r" +
    "\n" +
    "        <i class=\"icon-grid\" id='scroll-icon' ng-click=\"changeView(false)\"></i>\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        <i class=\"icon-printer\" onclick=\"window.print();\"></i>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <i class=\"icon-size-fullscreen icon-full\" ng-click=\"fullscreen(true)\"></i>\r" +
    "\n" +
    "        <i class=\"icon-size-actual icon-actual\" ng-click=\"fullscreen(false)\"></i>\r" +
    "\n" +
    "      </span>\r" +
    "\n" +
    "    </ol>\r" +
    "\n" +
    "    <div class=\"container-fluid\">\r" +
    "\n" +
    "      <ui-view></ui-view>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <!-- /.conainer-fluid -->\r" +
    "\n" +
    "  </main>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"back-loader flex-row align-items-center\">\r" +
    "\n" +
    "  <div loader-css=\"line-scale\" class=\"preload-login\"></div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<!-- Footer -->\r" +
    "\n" +
    "<div ng-include=\"'app/modules/layouts/footer.html'\" include-replace></div>"
  );


  $templateCache.put('app/modules/layouts/footer.html',
    "<!-- <footer class=\"app-footer\">\n" +
    "  <span><a href=\"http://coreui.io\">CoreUI</a> &copy; 2018 creativeLabs.</span>\n" +
    "  <span class=\"ml-auto\">Powered by <a href=\"http://coreui.io\">CoreUI</a></span>\n" +
    "</footer> -->"
  );


  $templateCache.put('app/modules/layouts/nav-bar/navbar.html',
    "<header class=\"app-header navbar\">\n" +
    "  <button class=\"navbar-toggler mobile-sidebar-toggler d-lg-none\" type=\"button\">\n" +
    "    <span class=\"navbar-toggler-icon\"></span>\n" +
    "  </button>\n" +
    "  <ul class=\"nav navbar-nav d-md-down-none\">\n" +
    "    <li class=\"nav-item\">\n" +
    "      <a class=\"nav-link navbar-toggler sidebar-toggler\" href=\"#\">\n" +
    "        <span class=\"navbar-toggler-icon\"></span>\n" +
    "      </a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "  <ul class=\"nav navbar-nav ml-auto d-md-down-none\">\n" +
    "    <li class=\"nav-item dropdown\">\n" +
    "      <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "        <img src=\"app/assets/images/default.png\" class=\"img-avatar\" alt=\"\">\n" +
    "      </a>\n" +
    "      <div class=\"dropdown-menu dropdown-menu-right\">\n" +
    "        <div class=\"dropdown-header text-center\">\n" +
    "          <strong>Settings</strong>\n" +
    "        </div>\n" +
    "        <a class=\"dropdown-item\" href=\"#\"  ng-click=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n" +
    "      </div>\n" +
    "    </li>\n" +
    "\n" +
    "  </ul>\n" +
    "</header>"
  );


  $templateCache.put('app/modules/layouts/side-bar/sidebar.html',
    "<div class=\"sidebar\">\r" +
    "\n" +
    "    <div class=\"company-info\">\r" +
    "\n" +
    "        <div class=\"company-icon\">\r" +
    "\n" +
    "            <i class=\"fas fa-broadcast-tower\"></i>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"company-title\">\r" +
    "\n" +
    "            Global Solusindo\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <nav class=\"sidebar-nav\">\r" +
    "\n" +
    "        <ul class=\"nav\">\r" +
    "\n" +
    "            <li class=\"nav-item\">\r" +
    "\n" +
    "                <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.dashboard\">\r" +
    "\n" +
    "                    <i class=\"fas fa-home\"></i> <span>Homepage</span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li class=\"nav-item nav-dropdown\" ng-class=\"{open: $state.includes('app.availability')}\">\r" +
    "\n" +
    "                <a class=\"nav-link nav-dropdown-toggle\" ng-class=\"{active: $state.includes('app.availability')}\" href=\"#\">\r" +
    "\n" +
    "                    <i class=\"fa fa-user\"></i> <span>User Management</span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "                <ul class=\"nav-dropdown-items\">\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.userList\">\r" +
    "\n" +
    "                            <i class=\"fas fa-circle\"></i> <span>User</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.role-list\">\r" +
    "\n" +
    "                            <i class=\"fas fa-circle\"></i> <span>Role</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.roleGroupList\">\r" +
    "\n" +
    "                            <i class=\"fas fa-circle\"></i> <span>Role Group</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.mappingRoleToRoleGroupList\">\r" +
    "\n" +
    "                            <i class=\"fas fa-circle\"></i> <span>Mapping Role to Role Group</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.availability-summary\">\r" +
    "\n" +
    "                            <i class=\"fas fa-circle\"></i> <span>Mapping User Role Group</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.authParamList\">\r" +
    "\n" +
    "                            <i class=\"fas fa-circle\"></i> <span>Auth Param</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.availability-summary\">\r" +
    "\n" +
    "                            <i class=\"fas fa-circle\"></i> <span>Mapping User to Auth Param</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <!---\r" +
    "\n" +
    "            <li class=\"nav-item nav-dropdown\" ng-class=\"{open: $state.includes('app.availability')}\">\r" +
    "\n" +
    "                <a class=\"nav-link nav-dropdown-toggle\" ng-class=\"{active: $state.includes('app.availability')}\" href=\"#\">\r" +
    "\n" +
    "                    <i class=\"icon-screen-desktop\"></i> <span>Car Carrier</span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "                <ul class=\"nav-dropdown-items\">\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.car-carrier-activity\">\r" +
    "\n" +
    "                            <i class=\"icon-chart\"></i> <span>Car Carrier Activity</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.car-carrier-activity-summary\">\r" +
    "\n" +
    "                            <i class=\"icon-chart\"></i> <span>Car Carrier Activity Summary</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li class=\"nav-item nav-dropdown\" ng-class=\"{open: $state.includes('app.availability')}\">\r" +
    "\n" +
    "                <a class=\"nav-link nav-dropdown-toggle\" ng-class=\"{active: $state.includes('app.availability')}\" href=\"#\">\r" +
    "\n" +
    "                    <i class=\"icon-screen-desktop\"></i> <span>Utilitas CC</span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "                <ul class=\"nav-dropdown-items\">\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.utilitas-cc-monthly\">\r" +
    "\n" +
    "                            <i class=\"icon-chart\"></i> <span>Utilitas CC Monthly</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.utilitas-cc-yearly\">\r" +
    "\n" +
    "                            <i class=\"icon-chart\"></i> <span>Utilitas CC Yearly</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li class=\"nav-item\">\r" +
    "\n" +
    "                <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.actual-on-time-arrival\">\r" +
    "\n" +
    "                    <i class=\"icon-chart\"></i> <span>Actual On Time Arrival</span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li class=\"nav-item\">\r" +
    "\n" +
    "                <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.violation-traffic\">\r" +
    "\n" +
    "                    <i class=\"icon-chart\"></i> <span>Violation Traffic</span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            -->\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </nav>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/login/login.html',
    "<div class=\"app flex-row align-items-center login\" ng-controller=\"LoginCtrl\">\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "      <div class=\"row justify-content-center\">\r" +
    "\n" +
    "        <div class=\"col-md-8\">\r" +
    "\n" +
    "          <div class=\"card-group\">\r" +
    "\n" +
    "            <div class=\"card p-0\">\r" +
    "\n" +
    "              <div class=\"card-body p-0\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                  <div class=\"d-none d-sm-block col-md-6 login-bg\" >\r" +
    "\n" +
    "                    <div class=\"overlay-login\">\r" +
    "\n" +
    "                        <div>Lorem ipsum dolor</div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                  </div>\r" +
    "\n" +
    "                  <div class=\"col-md-6\">\r" +
    "\n" +
    "                    <form ng-submit=\"login()\" class=\"p-4\">\r" +
    "\n" +
    "                        <div class=\"company-icon\">\r" +
    "\n" +
    "                            <i class=\"fas fa-broadcast-tower\"></i>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                      <span class=\"title-login\">Global Solusindo</span>\r" +
    "\n" +
    "                      <div class=\"form-group\">\r" +
    "\n" +
    "                          <label>Username</label>\r" +
    "\n" +
    "                        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" ng-model=\"username\" required oninvalid=\"this.setCustomValidity('Masukkan Username')\" oninput=\"this.setCustomValidity('')\" autofocus>\r" +
    "\n" +
    "                      </div>\r" +
    "\n" +
    "                      <div class=\"form-group\">\r" +
    "\n" +
    "                          <label>Password</label>\r" +
    "\n" +
    "                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" ng-model=\"password\" required  oninvalid=\"this.setCustomValidity('Masukkan Password')\" oninput=\"this.setCustomValidity('')\">\r" +
    "\n" +
    "                      </div>\r" +
    "\n" +
    "                      <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-12\">\r" +
    "\n" +
    "                          <input type=\"submit\" class=\"btn login-btn\" value=\"Login\">\r" +
    "\n" +
    "                          </button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                      </div>\r" +
    "\n" +
    "                    </form>\r" +
    "\n" +
    "                  </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>"
  );


  $templateCache.put('app/modules/mappingRoleToRoleGroup/mappingRoleToRoleGroup.html',
    "<div class=\"animated fadeIn\">\r" +
    "\n" +
    "    <form class=\"form-horizontal\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"card\">\r" +
    "\n" +
    "                    <div class=\"card-title\">List Role Group</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"mappingRoleToRoleGroup\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Title</th>\r" +
    "\n" +
    "                                        <th>Description</th>\r" +
    "\n" +
    "                                        <th></th>\r" +
    "\n" +
    "                                    </tr>\r" +
    "\n" +
    "                                </thead>\r" +
    "\n" +
    "                            </table>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/mappingRoleToRoleGroupEntry/mappingRoleToRoleGroupEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Mapping Role To Role Group</div>\n" +
    "                    <div class=\"col-md-8\">\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-3\">Role Group Name:</label>\n" +
    "                            <label class=\"control-label col-sm-2\" type=\"text\" id=\"title\" name=\"title\">\n" +
    "                                {{vm.model.title}}\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <label class=\"control-label col-sm-3\">Description:</label>\n" +
    "                            <label class=\"control-label col-sm-2\" name=\"description\" placeholder=\"Description\">\n" +
    "                                {{vm.model.description}}\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.mappingRoleToRoleGroupList\">Kembali</button> \n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Role Group</div>\n" +
    "                    <div class=\"row\"> \n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <button role-modal on-callback=\"vm.roleModalCallback\" class=\"btn btn-success\" id=\"modalRoleButton\">\n" +
    "                                Manage Role\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"mappingRoleToRoleGroupEntry\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Role Name</th>\n" +
    "                                        <th>Description</th>\n" +
    "                                        <!--<th></th>-->\n" +
    "                                    </tr>\n" +
    "                                </thead>\n" +
    "                            </table>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/mappingRoleToRoleGroupEntry/mappingRoleToRoleGroupModal/mappingRoleToRoleGroupModal.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <h6 class=\"modal-title\">Mapping Group to Role Group</h6>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-sm-12\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-4\" ng-repeat=\"item in vm.roles\">\r" +
    "\n" +
    "                    <label class=\"control control--checkbox\">\r" +
    "\n" +
    "                        {{ item.title }}\r" +
    "\n" +
    "                        <input tabindex=\"26\" type=\"checkbox\" name=\"role\"\r" +
    "\n" +
    "                               checked=\"checked\" checklist-value=\"item\" checklist-model=\"vm.model.roles\" />\r" +
    "\n" +
    "                        <span class=\"control__indicator\"></span>\r" +
    "\n" +
    "                    </label>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-primary\" type=\"button\" ng-click=\"vm.ok()\">Simpan</button>\r" +
    "\n" +
    "    <button class=\"btn btn-default\" type=\"button\" ng-click=\"vm.cancel()\">Cancel</button>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/mappingRoleToRoleGroupEntry/modal/roleModal.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <h5 class=\"modal-title\">Roles</h5>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-12 p-0\">\r" +
    "\n" +
    "            <table id=\"roleModal\" class=\"table\">\r" +
    "\n" +
    "                <thead>\r" +
    "\n" +
    "                    <tr>\r" +
    "\n" +
    "                        <th width=\"30\" hidden>Role PK</th>\r" +
    "\n" +
    "                        <th width=\"30\" hidden>Role Group PK</th>\r" +
    "\n" +
    "                        <th width=\"200\">Role Name</th>\r" +
    "\n" +
    "                        <th class=\"text-center\">Check</th>\r" +
    "\n" +
    "                    </tr>\r" +
    "\n" +
    "                </thead>\r" +
    "\n" +
    "                <tbody>\r" +
    "\n" +
    "                    <tr ng-repeat=\"i in vm.model.mappingRoleToRoleGroups\">\r" +
    "\n" +
    "                        <td width=\"30\" hidden>{{ i.role_pk}}</td>\r" +
    "\n" +
    "                        <td width=\"30\" hidden>{{ i.roleGroup_pk}}</td>\r" +
    "\n" +
    "                        <td width=\"200\">{{i.roleName}}</td>\r" +
    "\n" +
    "                        <td class=\"text-center\"> <input type=\"checkbox\" ng-checked=\"i.isChecked\" ng-model=\"i.isChecked\"></td>\r" +
    "\n" +
    "                    </tr>\r" +
    "\n" +
    "                </tbody>\r" +
    "\n" +
    "            </table>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "    <button id=\"saveButton\" class=\"btn btn-primary\" type=\"button\">Save</button>\r" +
    "\n" +
    "    <button id=\"cancelButton\" class=\"btn btn-default\" type=\"button\">Cancel</button>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/mappingUserToRoleGroup/mappingUserToRoleGroup.html',
    "<div class=\"animated fadeIn\">\r" +
    "\n" +
    "    <form class=\"form-horizontal\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"card\">\r" +
    "\n" +
    "                    <div class=\"card-title\">List Role Group</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"mappingUserToRoleGroup\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Title</th>\r" +
    "\n" +
    "                                        <th>Description</th>\r" +
    "\n" +
    "                                        <th></th>\r" +
    "\n" +
    "                                    </tr>\r" +
    "\n" +
    "                                </thead>\r" +
    "\n" +
    "                            </table>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/mappingUserToRoleGroupEntry/mappingUserToRoleGroupEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Mapping Role To Role Group</div>\n" +
    "                    <div class=\"col-md-8\">\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Role Group Name :</label>\n" +
    "                            <label class=\"control-label col-sm-2\" type=\"text\" id=\"title\" name=\"title\">\n" +
    "                                {{vm.model.title}}\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Description :</label>\n" +
    "                            <label class=\"control-label col-sm-2\" name=\"description\" placeholder=\"Description\">\n" +
    "                                {{vm.model.description}}\n" +
    "                            </label>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12\">\r" +
    "\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.mappingRoleToRoleGroupList\">Kembali</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-success float-right\" modal-mapping-user-to-role-group param=\"vm.stateParam\" on-callback=\"vm.onCallback\">\r" +
    "\n" +
    "                                    Add Role\r" +
    "\n" +
    "                                </button>\r" +
    "\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Role Group</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"mappingRoleToRoleGroupEntry\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Role Pk</th>\n" +
    "                                        <th>Role Name</th>\n" +
    "                                        <th>Description</th>\n" +
    "                                        <th></th>\n" +
    "                                    </tr>\n" +
    "                                </thead>\n" +
    "                            </table>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/mappingUserToRoleGroupEntry/mappingUserToRoleGroupModal/mappingUserToRoleGroupModal.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <h6 class=\"modal-title\">Mapping User to Role Group</h6>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-sm-12\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-6\">\r" +
    "\n" +
    "                    <div class=\"row form-group\">\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-4\">Role Title :</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-8\">\r" +
    "\n" +
    "                            <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\r" +
    "\n" +
    "                                   placeholder=\"Role Title\">\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row form-group\">\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-4\">Description :</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-8\">\r" +
    "\n" +
    "                            <textarea class=\"form-control\" ng-model=\"vm.model.description\" name=\"description\" placeholder=\"Description\">\r" +
    "\n" +
    "                                        </textarea>\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-primary\" type=\"button\" ng-click=\"vm.ok()\">Simpan</button>\r" +
    "\n" +
    "    <button class=\"btn btn-default\" type=\"button\" ng-click=\"vm.cancel()\">Cancel</button>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/role-entry/role-entry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Tambah Role</div>\n" +
    "                    <div class=\"col-md-8\">\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Role Title :</label>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\n" +
    "                                    placeholder=\"Role Title\">\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Description :</label>\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <textarea class=\"form-control\" ng-model=\"vm.model.description\" name=\"description\" placeholder=\"Description\">\r" +
    "\n" +
    "                                        </textarea>\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.role-list\">Kembali</button> <button class=\"btn btn-success float-right\"\n" +
    "                                    id=\"saveButton\">Tambah Role</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/role/role.html',
    "<div class=\"animated fadeIn\">\r" +
    "\n" +
    "    <form class=\"form-horizontal\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"card\">\r" +
    "\n" +
    "                    <div class=\"card-title\">List Role</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-12\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.role-entry({ id: '0'})\">Tambah Role</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div> \r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"role\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Title</th>\r" +
    "\n" +
    "                                        <th>Description</th>\r" +
    "\n" +
    "                                        <th></th>\r" +
    "\n" +
    "                                    </tr>\r" +
    "\n" +
    "                                </thead>\r" +
    "\n" +
    "                            </table>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/roleGroup/roleGroup.html',
    "<div class=\"animated fadeIn\">\r" +
    "\n" +
    "    <form class=\"form-horizontal\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"card\">\r" +
    "\n" +
    "                    <div class=\"card-title\">List Role Group</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-12\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.roleGroupEntry({ id: '0'})\">Tambah Role Group</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div> \r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"roleGroup\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Title</th>\r" +
    "\n" +
    "                                        <th>Description</th>\r" +
    "\n" +
    "                                        <th></th>\r" +
    "\n" +
    "                                    </tr>\r" +
    "\n" +
    "                                </thead>\r" +
    "\n" +
    "                            </table>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/roleGroupEntry/roleGroupEntry.html',
    "<div class=\"animated fadeIn\">\r" +
    "\n" +
    "    <form class=\"form-horizontal\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"card\">\r" +
    "\n" +
    "                    <div class=\"card-title\">Tambah RoleGroup</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Role Group Name :</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\r" +
    "\n" +
    "                                    placeholder=\"Role Group Name\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Description :</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <textarea class=\"form-control\" ng-model=\"vm.model.description\" name=\"description\" placeholder=\"Description\">\r" +
    "\n" +
    "                                        </textarea>\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <div class=\"col-md-12\">\r" +
    "\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.roleGroupList\">Kembali</button> <button class=\"btn btn-success float-right\"\r" +
    "\n" +
    "                                    id=\"saveButton\">Tambah RoleGroup</button>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/user/user.html',
    "<div class=\"animated fadeIn\">\r" +
    "\n" +
    "    <form class=\"form-horizontal\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"card\">\r" +
    "\n" +
    "                    <div class=\"card-title\">List User</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-12\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.userEntry({ id: '0'})\">Tambah User</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"user\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>ID User</th>\r" +
    "\n" +
    "                                        <th>Name</th>\r" +
    "\n" +
    "                                        <!--<th>Position</th>\r" +
    "\n" +
    "                                        <th>Role</th>-->\r" +
    "\n" +
    "                                        <th>Phone Number</th>\r" +
    "\n" +
    "                                        <th></th>\r" +
    "\n" +
    "                                    </tr>\r" +
    "\n" +
    "                                </thead>\r" +
    "\n" +
    "                            </table>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/userEntry/userEntry.html',
    "<div class=\"animated fadeIn\">\r" +
    "\n" +
    "    <form class=\"form-horizontal\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"card\">\r" +
    "\n" +
    "                    <div class=\"card-title\">Tambah User</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Upload Image:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"filePhoto\" ng-model=\"vm.model.filePhoto\" name=\"filePhoto\" placeholder=\"image file\" disabled>\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Name:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" ng-model=\"vm.model.name\" placeholder=\"Name\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Role:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <select id=\"cboRoleGroup\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.roleGroup_pk\" name=\"roleGroup\" required>\r" +
    "\n" +
    "                                    <option ng-repeat=\"x in vm.formData.roleGroups\" value=\"{{x.roleGroup_pk}}\">{{x.title}}</option>\r" +
    "\n" +
    "                                </select>\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Position:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <select id=\"cboposition\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.position_pk\" name=\"position\" required>\r" +
    "\n" +
    "                                    <option ng-repeat=\"x in vm.formData.positions\" value=\"{{x.position_pk}}\">{{x.title}}</option>\r" +
    "\n" +
    "                                </select>\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Phone Number:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-2\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"noHP\" name=\"noHP\" ng-model=\"vm.model.noHP\" placeholder=\"Phone Number\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <label class=\"control-label col-md-1.5\">Email:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-3\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" ng-model=\"vm.model.email\" placeholder=\"Email\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Nomor KTP:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"noKTP\" name=\"noKTP\" ng-model=\"vm.model.noKTP\" placeholder=\"Nomor KTP\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Username:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" ng-model=\"vm.model.username\" placeholder=\"Username\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Password:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" ng-model=\"vm.model.password\" placeholder=\"Password\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Retype Password:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <input type=\"password\" class=\"form-control\" id=\"reTypePassword\" name=\"reTypePassword\" ng-model=\"vm.model.reTypePassword\" placeholder=\"Retype Password\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Address:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\" ng-model=\"vm.model.address\" placeholder=\"Address\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Description:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"description\" name=\"description\" ng-model=\"vm.model.description\" placeholder=\"Description\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <div class=\"col-md-8\">\r" +
    "\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.userList\">Kembali</button> <button class=\"btn btn-success float-right\" id=\"saveButton\">\r" +
    "\n" +
    "                                    Tambah User\r" +
    "\n" +
    "                                </button>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</div>"
  );

}]);
