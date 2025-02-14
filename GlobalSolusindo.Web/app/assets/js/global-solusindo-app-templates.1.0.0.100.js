angular.module('global-solusindo-app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/area/area.html',
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
    "                    <div class=\"card-title\">List Area</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-6\">\r" +
    "\n" +
    "                            <button id=\"addButton\" class=\"btn btn-success\" ui-sref=\"app.areaEntry({ id: '0'})\">Add Area</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"area\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Title</th>\r" +
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


  $templateCache.put('app/modules/areaEntry/areaEntry.html',
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
    "                    <div class=\"card-title\">Add Area</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Area Name:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <input type=\"text\" id=\"title\" name=\"title\" class=\"form-control\" ng-model=\"vm.model.title\" placeholder=\"Area Name\">\r" +
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
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Save</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-default ml-1\" ui-sref=\"app.areaList\">Back</button>\r" +
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


  $templateCache.put('app/modules/aset/aset.html',
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
    "                    <div class=\"card-title\">List Aset</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-6\">\r" +
    "\n" +
    "                            <button id=\"addButton\" class=\"btn btn-success\" ui-sref=\"app.asetEntry({ id: '0'})\">Add Asset</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"aset\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Asset Code</th>\r" +
    "\n" +
    "                                        <th>Category</th>\r" +
    "\n" +
    "                                        <th>Asset Name</th>\r" +
    "\n" +
    "                                        <th>Status</th>\r" +
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


  $templateCache.put('app/modules/aset/asetDetail.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <h5 class=\"modal-title\" id=\"modal-title\">Detail</h5>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-sm-3 form-group\">\r" +
    "\n" +
    "            <img id=\"photo\" src=\"/app/assets/images/blank-img.jpg\"  class=\"img-fluid\" />\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-9\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Kode Asset :</label><label class=\"col-sm-8\">{{ model.asetId }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Tanggal Pembuatan :</label><label class=\"col-sm-8\">{{ model.createdDate | date: 'dd/MM/yyyy' }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Kategori Aset :</label><label class=\"col-sm-8\">{{ model.kategoriAsetName }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Nama Aset :</label><label class=\"col-sm-8\">{{ model.name }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Deskripsi Aset :</label><label class=\"col-sm-8\">{{ model.description }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"close()\">Back</button>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('app/modules/asetEntry/asetEntry.html',
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
    "                    <div class=\"card-title\">Add Aset</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-sm-4\">\r" +
    "\n" +
    "                            <div class=\"row col-sm-12 form-group\">\r" +
    "\n" +
    "                                <img id=\"photoAset\" src=\"/app/assets/images/blank-img.jpg\" class=\"img-center img-fluid\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"col-sm-12 input-group\">\r" +
    "\n" +
    "                                <div class=\"input-group-prepend\">\r" +
    "\n" +
    "                                    <span class=\"input-group-text\" id=\"inputGroupFileAddon01\">Upload</span>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"custom-file\">\r" +
    "\n" +
    "                                    <input type=\"file\" class=\"custom-file-input\" id=\"filePhoto\" aria-describedby=\"inputGroupFileAddon01\">\r" +
    "\n" +
    "                                    <label id=\"fileName\" class=\"custom-file-label\" for=\"filePhoto\">Choose file</label>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-8\">\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-2\">Asset Category :</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                    <select id=\"kategoriAset_fk\" name=\"kategoriAset_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"asetVm.model.kategoriAset_fk\" required>\r" +
    "\n" +
    "                                        <option ng-repeat=\"x in asetVm.formData.asetKategoris\" ng-value=\"x.asetKategori_pk\">{{x.title}}</option>\r" +
    "\n" +
    "                                    </select>\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-2\">Asset ID:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                    <input type=\"text\" id=\"asetId\" name=\"asetId\" class=\"form-control\" ng-model=\"asetVm.model.asetId\" required />\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-2\">Asset Name :</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                    <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" ng-model=\"asetVm.model.name\" required />\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    " \r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-2\">Description :</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                    <textarea id=\"description\" name=\"description\" class=\"form-control\" ng-model=\"asetVm.model.description\"></textarea>\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div> \r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <hr />\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-9\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" id=\"saveButton\">Save</button>\r" +
    "\n" +
    "                            <button class=\"btn btn-default ml-1\" ui-sref=\"app.asetList\">Back</button>\r" +
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


  $templateCache.put('app/modules/asetHistori/asetHistori.html',
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
    "                    <div class=\"card-title\">List Aset Histori</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <!--User Info-->\r" +
    "\n" +
    "                        <div class=\"col-md-10\">\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-2\">User ID</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-6\" id=\"userId\" name=\"userId\">{{vm.user.userCode}}</label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-2\">Name</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-6\" id=\"name\" name=\"name\">{{vm.user.name}}</label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-2\">Position</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-6\" id=\"kategoriJabatanTitle\" name=\"kategoriJabatanTitle\">{{vm.user.kategoriJabatanTitle}}</label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-6\">\r" +
    "\n" +
    "                            <button id=\"addNewButton\" class=\"btn btn-success\">Add Aset</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"asetHistori\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Asset Category</th>\r" +
    "\n" +
    "                                        <th>Asset Code</th>\r" +
    "\n" +
    "                                        <th>Asset Name</th>\r" +
    "\n" +
    "                                        <th>Borrow Date</th>\r" +
    "\n" +
    "                                        <th>Return Date</th>\r" +
    "\n" +
    "                                        <th>Information</th>\r" +
    "\n" +
    "                                        <th></th>\r" +
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


  $templateCache.put('app/modules/asetHistori/asetHistoriDetail.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <h5 class=\"modal-title\" id=\"modal-title\">Detail</h5>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-sm-3 form-group\">\r" +
    "\n" +
    "            <img id=\"photo\" src=\"/app/assets/images/tower-bts.jpg\"  class=\"img-fluid\" />\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-9\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Kode Asset :</label><label class=\"col-sm-8\">{{ model.asetID }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Tanggal Pembuatan :</label><label class=\"col-sm-8\">{{ model.createdDate | date: 'dd/MM/yyyy' }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Kategori AsetHistori :</label><label class=\"col-sm-8\">{{ model.asetKategoriTitle }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Nama AsetHistori :</label><label class=\"col-sm-8\">{{ model.asetName }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Deskripsi AsetHistori :</label><label class=\"col-sm-8\">{{ model.description }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"close()\">Back</button>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('app/modules/asetHistori/asetHistoriRemark.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <h5 class=\"modal-title\" id=\"modal-title\">Remark</h5>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<form ng-submit=\"submit()\">\r" +
    "\n" +
    "    <div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-10\">\r" +
    "\n" +
    "                <div class=\"row form-group\">\r" +
    "\n" +
    "                    <label class=\"control-label col-sm-1 text-right\"></label>\r" +
    "\n" +
    "                    <textarea rows=\"5\" class=\"col-sm-8\" id=\"remark\" ng-model=\"data.remark\"></textarea>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"modal-footer\">\r" +
    "\n" +
    "        <button class=\"btn btn-success\" id=\"rejectb\" type=\"button\" ng-click=\"ok(document.getElementById('remark').value)\">Return</button>\r" +
    "\n" +
    "        <button class=\"btn btn-default\" type=\"button\" ng-click=\"close()\">Back</button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</form>"
  );


  $templateCache.put('app/modules/asetHistoriEntry/asetHistoriEntry.html',
    "<div class=\"animated fadeIn\">\r" +
    "\n" +
    "    <form class=\"form-horizontal\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\" style=\"height:-webkit-fill-available\">\r" +
    "\n" +
    "                <div class=\"card\">\r" +
    "\n" +
    "                    <div class=\"card-title\">Add Asset History</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-8\">\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-2\">Aset :</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                    <select id=\"aset_fk\" name=\"aset_fk\" class=\"form-control input-lg\" ng-model=\"vm.model.aset_fk\" required>\r" +
    "\n" +
    "                                        <option ng-repeat=\"x in vm.formData.asets\" ng-value=\"x.aset_pk\">{{x.name}}</option>\r" +
    "\n" +
    "                                    </select>\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-2\">Date :</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                    <input type=\"text\" id=\"tglMulai\" name=\"tglMulai\" ng-model=\"vm.model.tglMulai\" class=\"form-control\" date-time-picker options=\"{ format: 'DD-MM-YYYY' }\" required />\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-2\">Description :</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-8\">\r" +
    "\n" +
    "                                    <textarea id=\"description\" name=\"description\" class=\"form-control\" ng-model=\"vm.model.description\"></textarea>\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <hr />\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-8\">\r" +
    "\n" +
    "                            <button class=\"btn btn-default\" id=\"backButton\">Back</button>\r" +
    "\n" +
    "                            <button class=\"btn btn-success float-right\" id=\"saveButton\">Save</button>\r" +
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


  $templateCache.put('app/modules/asetKategori/asetKategori.html',
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
    "                    <div class=\"card-title\">Asset Category List </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-6\">\r" +
    "\n" +
    "                            <button id=\"addButton\" class=\"btn btn-success\" ui-sref=\"app.asetKategoriEntry({ id: '0'})\">Add Asset Category</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"asetKategori\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Title</th>\r" +
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


  $templateCache.put('app/modules/asetKategoriEntry/asetKategoriEntry.html',
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
    "                    <div class=\"card-title\">Add Asset Category</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Category Name:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\r" +
    "\n" +
    "                                    placeholder=\"Asset Category Name\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div> \r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <div class=\"col-md-12\">\r" +
    "\n" +
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Save</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-default ml-1\" ui-sref=\"app.asetKategoriList\">Back</button>\r" +
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


  $templateCache.put('app/modules/asset/asset.html',
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
    "                    <div class=\"card-title\">List Asset</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-6\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" modal-asset>Tambah Asset</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"asset\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Kode Asset</th>\r" +
    "\n" +
    "                                        <th>Tanggal Pembuatan</th>\r" +
    "\n" +
    "                                        <th>Kategory</th>\r" +
    "\n" +
    "                                        <th>Nama Asset</th>\r" +
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


  $templateCache.put('app/modules/asset/assetModal/assetModal.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <h6 class=\"modal-title\">Tambah Asset</h6>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-sm-12\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-md-12\">\r" +
    "\n" +
    "                    <div class=\"row form-group\">\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-4\">Kategory Asset :</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-8\">\r" +
    "\n" +
    "                            <select id=\"position_fk\" name=\"position_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.position_fk\" required>\r" +
    "\n" +
    "                                <option ng-repeat=\"x in vm.formData.positions\" ng-value=\"x.position_pk\">{{x.name}}</option>\r" +
    "\n" +
    "                            </select>\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"row form-group\">\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-4\">Nama Asset :</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-8\">\r" +
    "\n" +
    "                            <input type=\"text\" class=\"form-control\" ng-model=\"vm.model.name\" required />\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"row form-group\">\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-4\">Gambar Asset :</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-8\">\r" +
    "\n" +
    "                            <input type=\"text\" class=\"form-control\" ng-model=\"vm.model.image\" required />\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"row form-group\">\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-4\">Deskripsi :</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-8\">\r" +
    "\n" +
    "                            <textarea class=\"form-control\" ng-model=\"vm.model.desc\"></textarea>\r" +
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
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-primary\" type=\"button\" ng-click=\"vm.ok()\">Simpan</button>\r" +
    "\n" +
    "    <button class=\"btn btn-default\" type=\"button\" ng-click=\"vm.cancel()\">Cancel</button>\r" +
    "\n" +
    "</div>"
  );


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
    "                        <div class=\"form-group col-md-6\">\r" +
    "\n" +
    "                            <button id=\"addButton\" class=\"btn btn-success\" ui-sref=\"app.authParamEntry({ id: '0'})\">Add Auth Param</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
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


  $templateCache.put('app/modules/authParam/authParamDetail.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <h5 class=\"modal-title\" id=\"modal-title\">Detail</h5>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-12\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Title :</label><label class=\"col-sm-8\">{{ model.title }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Description :</label><label class=\"col-sm-8\">{{ model.description }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Created Date :</label><label class=\"col-sm-8\">{{ model.createdDate | date: 'dd/MM/yyyy' }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"close()\">Kembali</button>\r" +
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
    "                    <div class=\"card-title\">Add AuthParam</div>\r" +
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
    "                            <div class=\"col-md-12\"> <button class=\"btn btn-success\"\r" +
    "\n" +
    "                                id=\"saveButton\">Add AuthParam</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-default ml-1\" ui-sref=\"app.authParamList\">Back</button>\r" +
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


  $templateCache.put('app/modules/bts/bts.html',
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
    "                    <div class=\"card-title\">Site Distribution</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div id=\"map\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"card\">\r" +
    "\n" +
    "                    <div class=\"card-title\">Site List</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-6\">\r" +
    "\n" +
    "                            <button id=\"addButton\" class=\"btn btn-success\" ui-sref=\"app.btsEntry({ id: '0'})\">Add Site</button>\r" +
    "\n" +
    "                            <button id=\"importButton\" class=\"btn btn-success\" ui-sref=\"app.btsImportExcel({})\">Import & Download Template</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"bts\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Site Name</th>\r" +
    "\n" +
    "                                        <th>Provider</th>\r" +
    "\n" +
    "                                        <th>Cell ID</th>\r" +
    "\n" +
    "                                        <th>Site Status</th>\r" +
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


  $templateCache.put('app/modules/bts/btsDetail.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <h5 class=\"modal-title\" id=\"modal-title\">Detail</h5>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-12\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Tower ID :</label><label class=\"col-sm-9\">{{ model.towerId }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Cell ID :</label><label class=\"col-sm-9\">{{ model.cellId }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Site Name :</label><label class=\"col-sm-9\">{{ model.name }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Tower Provider :</label><label class=\"col-sm-9\">{{ model.operatorTitle }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Latitude :</label><label class=\"col-sm-9\">{{ model.latitude }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Longitude :</label><label class=\"col-sm-9\">{{ model.longitude }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Site Status :</label><label class=\"col-sm-9\">{{ model.statusBtsTitle }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Area :</label><label class=\"col-sm-9\">{{ model.areaTitle }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Alamat :</label><label class=\"col-sm-9\">{{ model.alamat }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"close()\">Back</button>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('app/modules/btsEntry/btsEntry.html',
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
    "                    <div class=\"card-title\">Add Data Site</div>\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <div class=\"col-md-6\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <!--//Dihapus, permintaan mas indra 2019/07/01-->\r" +
    "\n" +
    "                                <!--<div class=\"row form-group\">\r" +
    "\n" +
    "                                    <label class=\"control-label col-md-3\">Customer Site ID:</label>\r" +
    "\n" +
    "                                    <div class=\"col-md-9\">\r" +
    "\n" +
    "                                        <input type=\"text\" id=\"customerSite\" name=\"customerSite\" class=\"form-control\" ng-model=\"vm.model.customerSite\" placeholder=\"Customer Site ID\">\r" +
    "\n" +
    "                                        <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"row form-group\">\r" +
    "\n" +
    "                                    <label class=\"control-label col-md-3\">Tower ID:</label>\r" +
    "\n" +
    "                                    <div class=\"col-md-9\">\r" +
    "\n" +
    "                                        <input type=\"text\" id=\"towerId\" name=\"towerId\" class=\"form-control\" ng-model=\"vm.model.towerId\" placeholder=\"Tower ID\">\r" +
    "\n" +
    "                                        <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"row form-group\">\r" +
    "\n" +
    "                                    <label class=\"control-label col-md-3\">Cell ID:</label>\r" +
    "\n" +
    "                                    <div class=\"col-md-9\">\r" +
    "\n" +
    "                                        <input type=\"text\" id=\"cellId\" name=\"cellId\" class=\"form-control\" ng-model=\"vm.model.cellId\" placeholder=\"Cell ID\">\r" +
    "\n" +
    "                                        <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"row form-group\">\r" +
    "\n" +
    "                                    <label class=\"control-label col-md-3\">Site Name:</label>\r" +
    "\n" +
    "                                    <div class=\"col-md-9\">\r" +
    "\n" +
    "                                        <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" ng-model=\"vm.model.name\" placeholder=\"Name\">\r" +
    "\n" +
    "                                        <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"row form-group\">\r" +
    "\n" +
    "                                    <label class=\"control-label col-md-3\">Tower Provider:</label>\r" +
    "\n" +
    "                                    <div class=\"col-md-9\">\r" +
    "\n" +
    "                                        <select id=\"operator_fk\" name=\"operator_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.operator_fk\" required>\r" +
    "\n" +
    "                                            <option ng-repeat=\"x in vm.formData.operators\" ng-value=\"x.operator_pk\">{{x.title}}</option>\r" +
    "\n" +
    "                                        </select>\r" +
    "\n" +
    "                                        <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"row form-group\">\r" +
    "\n" +
    "                                    <label class=\"control-label col-md-3\">Lat:</label>\r" +
    "\n" +
    "                                    <div class=\"col-sm-3\">\r" +
    "\n" +
    "                                        <input type=\"text\" class=\"form-control\" id=\"latitude\" name=\"latitude\" ng-model=\"vm.model.latitude\" placeholder=\"Latitude\">\r" +
    "\n" +
    "                                        <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <label class=\"control-label col-md-2\">Lon:</label>\r" +
    "\n" +
    "                                    <div class=\"col-sm-4\">\r" +
    "\n" +
    "                                        <input type=\"text\" id=\"longitude\" name=\"longitude\" class=\"form-control\" ng-model=\"vm.model.longitude\" placeholder=\"Longitude\">\r" +
    "\n" +
    "                                        <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"col-md-6\">\r" +
    "\n" +
    "                                <div class=\"row form-group\">\r" +
    "\n" +
    "                                    <label class=\"control-label col-sm-2\">Status:</label>\r" +
    "\n" +
    "                                    <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                        <select id=\"statusBts_fk\" name=\"statusBts_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.statusBts_fk\" required>\r" +
    "\n" +
    "                                            <option ng-repeat=\"x in vm.formData.btsStatuses\" ng-value=\"x.btsStatus_pk\">{{x.title}}</option>\r" +
    "\n" +
    "                                        </select>\r" +
    "\n" +
    "                                        <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"row form-group\">\r" +
    "\n" +
    "                                    <label class=\"control-label col-sm-2\">Area:</label>\r" +
    "\n" +
    "                                    <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                        <select id=\"area_fk\" name=\"area_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.area_fk\" required>\r" +
    "\n" +
    "                                            <option ng-repeat=\"x in vm.formData.areas\" ng-value=\"x.area_pk\">{{x.title}}</option>\r" +
    "\n" +
    "                                        </select>\r" +
    "\n" +
    "                                        <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"row form-group\">\r" +
    "\n" +
    "                                    <label class=\"control-label col-sm-2\">Alamat:</label>\r" +
    "\n" +
    "                                    <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                        <textarea class=\"form-control\" ng-model=\"vm.model.alamat\" name=\"alamat\" placeholder=\"Alamat\">\r" +
    "\n" +
    "                                        </textarea>\r" +
    "\n" +
    "                                        <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <!-- UNCOMMENT IF TECHNOLOGY ON SITE NEEDED -->\r" +
    "\n" +
    "                        <!--<div class=\"\">\r" +
    "\n" +
    "                            <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r" +
    "\n" +
    "                                <li class=\"nav-item\">\r" +
    "\n" +
    "                                    <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Technology</a>\r" +
    "\n" +
    "                                </li>\r" +
    "\n" +
    "                            </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"tab-content\" id=\"myTabContent\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\r" +
    "\n" +
    "                                    <button class=\"btn btn-primary\" id=\"btnAddTechnology\">Add New</button>\r" +
    "\n" +
    "                                    <table id=\"sowAssign\" class=\"table table-striped table-assign\">\r" +
    "\n" +
    "                                        <thead>\r" +
    "\n" +
    "                                            <tr>\r" +
    "\n" +
    "                                                <th hidden>BTSTechnology_PK</th>\r" +
    "\n" +
    "                                                <th hidden>BTS FK</th>\r" +
    "\n" +
    "                                                <th>Technology</th>\r" +
    "\n" +
    "                                                <th></th>\r" +
    "\n" +
    "                                            </tr>\r" +
    "\n" +
    "                                        </thead>\r" +
    "\n" +
    "                                        <tbody>\r" +
    "\n" +
    "                                            <tr ng-repeat=\"btsTechnology in vm.model.btsTechnologies\">\r" +
    "\n" +
    "                                                <td hidden>\r" +
    "\n" +
    "                                                    <input type=\"text\" id=\"btsTechnology_pk\" name=\"btsTechnology_pk\" ng-model=\"btsTechnology.btsTechnology_pk\" disabled />\r" +
    "\n" +
    "                                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                                </td>\r" +
    "\n" +
    "                                                <td class=\"text-center\" hidden>\r" +
    "\n" +
    "                                                    <input type=\"text\" id=\"bts_fk\" name=\"bts_fk\" ng-model=\"btsTechnology.bts_fk\" disabled />\r" +
    "\n" +
    "                                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                                </td>\r" +
    "\n" +
    "                                                <td>\r" +
    "\n" +
    "                                                    <ui-select id=\"technology_fk\" name=\"technology_fk\" ng-model=\"btsTechnology.technology_fk\" size=\"0\" theme=\"select2\" ng-disabled=\"vm.disabled\" title=\"Find technology\"\r" +
    "\n" +
    "                                                               required style=\"width:200px\">\r" +
    "\n" +
    "                                                        <ui-select-match placeholder=\"Find technology\">{{$select.selected.title}}</ui-select-match>\r" +
    "\n" +
    "                                                        <ui-select-choices refresh-delay=\"0\" repeat=\"technology.technology_pk as technology in vm.formData.technologies\">\r" +
    "\n" +
    "                                                            <div ng-bind-html=\"technology.title | highlight: $select.search\"></div>\r" +
    "\n" +
    "                                                        </ui-select-choices>\r" +
    "\n" +
    "                                                    </ui-select>\r" +
    "\n" +
    "                                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                                </td>\r" +
    "\n" +
    "                                                <td>\r" +
    "\n" +
    "                                                    <a class=\"btn btn-sm btn-danger\" ng-click=\"vm.removeTechnology($index)\"><i class=\"fa fa-times\"></i></a>\r" +
    "\n" +
    "                                                </td>\r" +
    "\n" +
    "                                            </tr>\r" +
    "\n" +
    "                                        </tbody>\r" +
    "\n" +
    "                                    </table>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <hr />\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <div class=\"col-md-12\">\r" +
    "\n" +
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Save</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-default ml-1\" ui-sref=\"app.btsList\">Back</button>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
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


  $templateCache.put('app/modules/btsImportExcel/btsImportExcel.html',
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
    "                    <div class=\"card-title\">Import Site</div>\r" +
    "\n" +
    "                    <div class=\"row form-group\">\r" +
    "\n" +
    "                        <div class=\"col-sm-6 input-group\">\r" +
    "\n" +
    "                            <div class=\"input-group-prepend\">\r" +
    "\n" +
    "                                <span class=\"input-group-text\" id=\"inputGroupFileAddon01\">Upload</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"custom-file\">\r" +
    "\n" +
    "                                <input type=\"file\" class=\"custom-file-input\" id=\"file\" aria-describedby=\"inputGroupFileAddon01\">\r" +
    "\n" +
    "                                <label id=\"fileName\" class=\"custom-file-label\" for=\"file\">Choose file</label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row form-group\">\r" +
    "\n" +
    "                        <div class=\"col-md-6\">\r" +
    "\n" +
    "                            <button class=\"btn btn-default\" ui-sref=\"app.btsList\">Back</button>\r" +
    "\n" +
    "                            <button class=\"btn btn-default\" id=\"downloadButton\">Template</button>\r" +
    "\n" +
    "                            <button class=\"btn btn-success float-right\" id=\"uploadButton\">Submit</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"card\">\r" +
    "\n" +
    "                    <div class=\"card-title\">Upload result</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table class=\"table table-striped\" id=\"bts\" style=\"line-height: 0;\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Tower ID</th>\r" +
    "\n" +
    "                                        <th>Site Name</th>\r" +
    "\n" +
    "                                        <th>Provider</th>\r" +
    "\n" +
    "                                        <th>Cell ID</th>\r" +
    "\n" +
    "                                        <th class=\"text-center\">Result</th>\r" +
    "\n" +
    "                                        <th>Reason</th>\r" +
    "\n" +
    "                                    </tr>\r" +
    "\n" +
    "                                    <tr ng-repeat=\"bts in vm.uploadResults\">\r" +
    "\n" +
    "                                        <td><label>{{$index + 1}}</label></td>\r" +
    "\n" +
    "                                        <td><label>{{bts.model.towerId}}</label></td>\r" +
    "\n" +
    "                                        <td><label>{{bts.model.name}}</label></td>\r" +
    "\n" +
    "                                        <td><label>{{bts.model.operatorTitle}}</label></td>\r" +
    "\n" +
    "                                        <td><label>{{bts.model.cellId}}</label></td>\r" +
    "\n" +
    "                                        <td class=\"text-center\">\r" +
    "\n" +
    "                                            <div><span><i ng-show=\"!bts.success\" class=\"fa fa-times\"></i></span></div>\r" +
    "\n" +
    "                                            <div><span><i ng-show=\"bts.success\" class=\"fa fa-check\"></i></span></div>\r" +
    "\n" +
    "                                        </td>\r" +
    "\n" +
    "                                        <td><label>{{bts.validationResult.errors[0] == undefined ? '' : bts.validationResult.errors[0].propertyName + ': ' +  bts.validationResult.errors[0].message}}</label></td>\r" +
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


  $templateCache.put('app/modules/cabang/cabang.html',
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
    "                    <div class=\"card-title\">List Cabang</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-6\">\r" +
    "\n" +
    "                            <button id=\"addButton\" class=\"btn btn-success\" ui-sref=\"app.cabangEntry({ id: '0'})\">Add Cabang</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"cabang\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Title</th>\r" +
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


  $templateCache.put('app/modules/cabangEntry/cabangEntry.html',
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
    "                    <div class=\"card-title\">Tambah Cabang</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Cabang:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\r" +
    "\n" +
    "                                    placeholder=\"Cabang Name\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div> \r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <div class=\"col-md-12\">\r" +
    "\n" +
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Save</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-default ml-1\" ui-sref=\"app.cabangList\">Back</button>\r" +
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


  $templateCache.put('app/modules/changePasswordEntry/changePasswordEntry.html',
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
    "                    <div class=\"card-title\">Change Password</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-6\">\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Password:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                    <input type=\"password\" class=\"form-control\" id=\"currentPassword\" name=\"currentPassword\" autocomplete=\"off\" ng-model=\"vm.model.currentPassword\" placeholder=\"Current Password\">\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Password:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                    <input type=\"password\" class=\"form-control\" id=\"newPassword\" name=\"newPassword\" autocomplete=\"off\" ng-model=\"vm.model.newPassword\" placeholder=\"New Password\">\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Retype Password:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                    <input type=\"password\" class=\"form-control\" id=\"reTypeNewPassword\" name=\"reTypeNewPassword\" autocomplete=\"off\" ng-model=\"vm.model.reTypeNewPassword\" placeholder=\"Retype New Password\">\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <hr />\r" +
    "\n" +
    "                    <div class=\"row form-group\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success float-right\" id=\"saveButton\">Change Password</button>\r" +
    "\n" +
    "                            <button class=\"btn btn-default\" ui-sref=\"app.dashboard\">Back</button>\r" +
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


  $templateCache.put('app/modules/checkIn/checkIn.html',
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
    "                    <div class=\"card-title\">Task Approval</div>\r" +
    "\n" +
    "                    <div class=\"row\"> \r" +
    "\n" +
    "                        <div class=\"col-md-6\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"checkIn\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>User</th>\r" +
    "\n" +
    "                                        <th>Position</th>\r" +
    "\n" +
    "                                        <th>SOW</th>\r" +
    "\n" +
    "                                        <th>Site</th>\r" +
    "\n" +
    "                                        <th>Site Address</th>\r" +
    "\n" +
    "                                        <th>Check In Time</th>\r" +
    "\n" +
    "                                        <th>Check Out Time</th> \r" +
    "\n" +
    "                                        <th>File Submitted</th>\r" +
    "\n" +
    "                                        <th>Status</th>\r" +
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


  $templateCache.put('app/modules/checkInEntry/checkInEntry.html',
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
    "                    <div class=\"card-title\">Task Detail</div>\r" +
    "\n" +
    "                    <div class=\"row col-md-12\">\r" +
    "\n" +
    "                        <div class=\"col-md-6\">\r" +
    "\n" +
    "                            <div class=\"card-title\">SOW Info</div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">SOW Name:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.sowName}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">User:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.userName}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Position:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.kategoriJabatanTitle}}</label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row col-md-12\">\r" +
    "\n" +
    "                        <div class=\"col-md-4\">\r" +
    "\n" +
    "                            <div class=\"card-title\">CheckIn Photo</div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <img id=\"photo\" src=\"{{vm.model.photo == null ? '/app/assets/images/blank-img.jpg' : vm.model.photo}}\" style=\"width:300px;margin:0 auto\" class=\"img-fluid\" />\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-4\">\r" +
    "\n" +
    "                            <div class=\"card-title\">CheckIn Info</div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">CheckIn Time</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.checkInTime | date: 'dd-MM-yyyy HH:mm'}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Longitude:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.longitudeCheckIn}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Latitude:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.latitudeCheckIn}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">MCC:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.mccCheckIn}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">MNC:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.mncCheckIn}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">LAC:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.lacCheckIn}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Cell ID:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.cellIDCheckIn}}</label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-4\">\r" +
    "\n" +
    "                            <div class=\"card-title\">CheckOut Info</div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">CheckOut Time</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.waktuCheckOut | date: 'dd-MM-yyyy HH:mm'}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Longitude:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.longitudeCheckOut}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Latitude:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.latitudeCheckOut}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">MCC:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.mccCheckOut}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">MNC:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.mncCheckOut}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">LAC:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.lacCheckOut}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Cell ID:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.cellIDCheckOut}}</label>\r" +
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
    "\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"card\">\r" +
    "\n" +
    "                    <div class=\"row col-md-12\">\r" +
    "\n" +
    "                        <div class=\"col-md-6\">\r" +
    "\n" +
    "                            <div class=\"card-title\">SOW Result</div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Description</label>\r" +
    "\n" +
    "                                <div class=\"col-md-12\">\r" +
    "\n" +
    "                                    <textarea class=\"form-control\" ng-model=\"vm.model.SOWResult.description\" style=\"width:100%; height:500px\"></textarea>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6\">\r" +
    "\n" +
    "                            <div class=\"card-title\">Track Result</div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-md-12\">\r" +
    "\n" +
    "                                    <div class=\"row form-group\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Job Type:</label>\r" +
    "\n" +
    "                                        <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                            <select id=\"tipePekerjaan_fk1\" name=\"tipePekerjaan_fk1\" class=\"form-control\" ng-model=\"vm.model.SOWTrackResults[0].tipePekerjaan_fk + ''\" disabled>\r" +
    "\n" +
    "                                                <option value=\"0\">None</option>\r" +
    "\n" +
    "                                                <option value=\"1\">SSV</option>\r" +
    "\n" +
    "                                                <option value=\"2\">SSO</option>\r" +
    "\n" +
    "                                            </select>\r" +
    "\n" +
    "                                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div> \r" +
    "\n" +
    "                                    <textarea ng-model=\"vm.model.SOWTrackResults[0].routeResult\" hidden></textarea>\r" +
    "\n" +
    "                                    <div id=\"map1\" style=\"border:1px solid gray; height:500px\">\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                 \r" +
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
    "\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"card\">\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <button ng-show=\"vm.model.status === 'Waiting'\" class=\"btn btn-success\" id=\"approveButton\">Approve</button>\r" +
    "\n" +
    "                        <button ng-show=\"vm.model.status === 'Waiting'\" class=\"btn btn-danger ml-1\" id=\"rejectButton\">Reject</button>\r" +
    "\n" +
    "                        <button class=\"btn btn-default ml-1\" ui-sref=\"app.checkInList\">Back</button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
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


  $templateCache.put('app/modules/checkInEntry/checkinRemark.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <h5 class=\"modal-title\" id=\"modal-title\">Remark</h5>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<form ng-submit=\"submit()\">\r" +
    "\n" +
    "    <div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-10\">\r" +
    "\n" +
    "                <div class=\"row form-group\">\r" +
    "\n" +
    "                    <label class=\"control-label col-sm-1 text-right\"></label>\r" +
    "\n" +
    "                    <textarea rows=\"5\" class=\"col-sm-8\" id=\"remark\" ng-model=\"data.remark\"></textarea>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"modal-footer\">\r" +
    "\n" +
    "        <button class=\"btn btn-danger\" id=\"rejectb\" type=\"button\" ng-click=\"ok(document.getElementById('remark').value)\">Reject</button>\r" +
    "\n" +
    "        <button class=\"btn btn-default\" type=\"button\" ng-click=\"close()\">Back</button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</form>"
  );


  $templateCache.put('app/modules/costKategori/costKategori.html',
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
    "                    <div class=\"card-title\">Cost Category List</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-6\">\r" +
    "\n" +
    "                            <button id=\"addButton\" class=\"btn btn-success\" ui-sref=\"app.costKategoriEntry({ id: '0'})\">Add Cost Category</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"costKategori\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Title</th>\r" +
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


  $templateCache.put('app/modules/costKategoriEntry/costKategoriEntry.html',
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
    "                    <div class=\"card-title\">Add Cost Category</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Cost Category Name:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\r" +
    "\n" +
    "                                    placeholder=\"Cost Category Name\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div> \r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <div class=\"col-md-12\">\r" +
    "\n" +
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Save</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-default ml-1\" ui-sref=\"app.costKategoriList\">Back</button>\r" +
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


  $templateCache.put('app/modules/dashboard/dashboard.html',
    "<div id=\"dashboard\" class=\"container-fluid animated fadeIn\" style=\"display:none\">\r" +
    "\n" +
    "    <div class=\"row card-header\">\r" +
    "\n" +
    "        <div class=\"col-md-12\">\r" +
    "\n" +
    "            <div class=\"header-dashboard\">\r" +
    "\n" +
    "                <div class=\"month-pick\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-sm-12\">\r" +
    "\n" +
    "            <div class=\"card\">\r" +
    "\n" +
    "                <div class=\"card-header\" style=\"background:white\">\r" +
    "\n" +
    "                    <h4>Summary Report</h4>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"card-body\">\r" +
    "\n" +
    "                    <div class=\"row\" style=\"margin-bottom:20px\">\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-1\">Start Date</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-2\">\r" +
    "\n" +
    "                            <input type=\"text\" id=\"tglMulai1\" name=\"tglMulai\" ng-model=\"tglMulaiFilter1\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" />\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-1\">End Date</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-2\">\r" +
    "\n" +
    "                            <input type=\"text\" id=\"tglAkhir1\" name=\"tglAkhir\" ng-model=\"tglAkhirFilter1\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" />\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-1\">Project</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-4\">\r" +
    "\n" +
    "                            <select id=\"project_fk1\" name=\"project_fk1\" class=\"form-control input-lg\" size=\"0\" ng-model=\"project_fk1\" required>\r" +
    "\n" +
    "                                <option ng-repeat=\"x in db.formData.users\" ng-value=\"x.project_pk\">{{x.operatorTitle}}  {{x.deliveryAreaTitle}} {{x.vendorTitle}}</option>\r" +
    "\n" +
    "                            </select>\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-1\">\r" +
    "\n" +
    "                            <button id=\"searchButton1\" style=\"border-radius: 20px\" ng-click=\"db.searchFilter1()\" class=\"btn btn-success mt-xs-2\">Search</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-20p item-container ng-scope\">\r" +
    "\n" +
    "                            <div class=\"card p-0 bg-white hoverable\">\r" +
    "\n" +
    "                                <div class=\"top-dashboard\">\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <div class=\"col-5 col-lg-3\">\r" +
    "\n" +
    "                                            <div class=\"the-icons\">\r" +
    "\n" +
    "                                                <i class=\"fa fa-file-alt\"></i>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div class=\"col-7 col-lg-9 state-text\">\r" +
    "\n" +
    "                                            <h5 class=\"mt-2\">Total Value PO</h5>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"value-dashboard\">\r" +
    "\n" +
    "                                    <h4>Rp {{db.totalpo}}</h4>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-20p item-container ng-scope\">\r" +
    "\n" +
    "                            <div class=\"card p-0 bg-white hoverable\">\r" +
    "\n" +
    "                                <div class=\"top-dashboard\" style=\"background-color: #0996e6;\">\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <div class=\"col-5 col-lg-3\">\r" +
    "\n" +
    "                                            <div class=\"the-icons\">\r" +
    "\n" +
    "                                                <i class=\"fa fa-file-alt\"></i>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div class=\"col-7 col-lg-9 state-text\">\r" +
    "\n" +
    "                                            <h5>Total PO</h5>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"value-dashboard\">\r" +
    "\n" +
    "                                    <h4 style=\"color: #0996e6\">{{db.jmlpo}}</h4>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-20p item-container ng-scope\">\r" +
    "\n" +
    "                            <div class=\"card p-0 bg-white hoverable\">\r" +
    "\n" +
    "                                <div class=\"top-dashboard\" style=\"background-color:#e25913;\">\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <div class=\"col-5 col-lg-3\">\r" +
    "\n" +
    "                                            <div class=\"the-icons\">\r" +
    "\n" +
    "                                                <i class=\"fa fa-file-alt\"></i>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div class=\"col-7 col-lg-9 state-text\">\r" +
    "\n" +
    "                                            <h5>Total Invoice</h5>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"value-dashboard\">\r" +
    "\n" +
    "                                    <h4 style=\"color: #e25913\">{{db.jmlInvoice}}</h4>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-20p item-container ng-scope\">\r" +
    "\n" +
    "                            <div class=\"card p-0 bg-white hoverable\">\r" +
    "\n" +
    "                                <div class=\"top-dashboard\" style=\"background-color: #f6b314;\">\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <div class=\"col-5 col-lg-3\">\r" +
    "\n" +
    "                                            <div class=\"the-icons\">\r" +
    "\n" +
    "                                                <i class=\"fa fa-file-alt\"></i>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div class=\"col-7 col-lg-9 state-text\">\r" +
    "\n" +
    "                                            <h5>Number of Members</h5>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"value-dashboard\">\r" +
    "\n" +
    "                                    <h4 style=\" color: #f6b314\">{{db.jmlMember}}</h4>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-20p item-container ng-scope\">\r" +
    "\n" +
    "                            <div class=\"card p-0 bg-white hoverable\">\r" +
    "\n" +
    "                                <div class=\"top-dashboard\" style=\"background-color:#9f3ce8;\">\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <div class=\"col-5 col-lg-3\">\r" +
    "\n" +
    "                                            <div class=\"the-icons\">\r" +
    "\n" +
    "                                                <i class=\"fa fa-file-alt\"></i>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div class=\"col-7 col-lg-9 state-text\">\r" +
    "\n" +
    "                                            <h5 class=\"mt-2\">Number of Assets</h5>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"value-dashboard\">\r" +
    "\n" +
    "                                    <h4 style=\" color: #9f3ce8\">{{db.jmlAset}}</h4>\r" +
    "\n" +
    "                                </div>\r" +
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
    "        <div class=\"col-sm-12\">\r" +
    "\n" +
    "            <div class=\"card\">\r" +
    "\n" +
    "                <div class=\"card-header\" style=\"background:white\">\r" +
    "\n" +
    "                    <h4>Monthly Recap Report</h4>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"card-body\">\r" +
    "\n" +
    "                    <div class=\"row\" style=\"margin-bottom:20px\">\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-1\">Start Date</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-2\">\r" +
    "\n" +
    "                            <input type=\"text\" id=\"tglMulai2\" name=\"tglMulai\" ng-model=\"tglMulaiFilter2\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" />\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-1\">End Date</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-2\">\r" +
    "\n" +
    "                            <input type=\"text\" id=\"tglAkhir2\" name=\"tglAkhir\" ng-model=\"tglAkhirFilter2\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" />\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-1\">Project</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-4\">\r" +
    "\n" +
    "                            <select id=\"operator_fk\" name=\"operator_fk2\" class=\"form-control input-lg\" size=\"0\" ng-model=\"operator_fk2\" required>\r" +
    "\n" +
    "                                <option ng-repeat=\"x in db.formData.operator\" ng-value=\"x.operator_pk\">{{x.title}}</option>\r" +
    "\n" +
    "                            </select>\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-1\">\r" +
    "\n" +
    "                            <button id=\"searchButton2\" style=\"border-radius: 20px\" ng-click=\"db.searchFileter2()\" class=\"btn btn-success mt-xs-2\">Search</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div id=\"containerSalesReport\" style=\" width:700px; height: 400px; margin: 0 auto\"></div>\r" +
    "\n" +
    "                        <div id=\"containerGoalCompletion\" style=\" width:700px; height: 400px; margin: 0 auto\"></div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-sm-12\">\r" +
    "\n" +
    "            <div class=\"card\">\r" +
    "\n" +
    "                <div class=\"card-header\" style=\"background:white\">\r" +
    "\n" +
    "                    <h4 id=\"revCost\">Revenue vs Cost</h4>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"card-body\">\r" +
    "\n" +
    "                    <div class=\"row\" style=\"margin-bottom:20px\">\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-1\">Start Date</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-2\">\r" +
    "\n" +
    "                            <input type=\"text\" id=\"tglMulai3\" name=\"tglMulai\" ng-model=\"tglMulaiFilter3\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" />\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-1\">End Date</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-2\">\r" +
    "\n" +
    "                            <input type=\"text\" id=\"tglAkhir3\" name=\"tglAkhir\" ng-model=\"tglAkhirFilter3\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" />\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-1\">Project</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-4\">\r" +
    "\n" +
    "                            <select id=\"project_Id\" name=\"project_fk3\" class=\"form-control input-lg\" size=\"0\" ng-model=\"project_fk3\" required>\r" +
    "\n" +
    "                                <option ng-repeat=\"x in db.formData.users\" ng-value=\"x.project_pk\">{{x.operatorTitle}}  {{x.deliveryAreaTitle}} {{x.vendorTitle}}</option>\r" +
    "\n" +
    "                            </select>\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row col-md-1\">\r" +
    "\n" +
    "                            <button id=\"searchButton3\" style=\"border-radius: 20px\" ng-click=\"db.searchFilter3()\" class=\"btn btn-success mt-xs-2\">Search</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div id=\"containerRevenueCost\" style=\" height: 400px; margin: 0 auto\"></div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-sm-4\">\r" +
    "\n" +
    "                            <div style=\"text-align:center\">\r" +
    "\n" +
    "                                <label></label><br />\r" +
    "\n" +
    "                                <label style=\"font-weight:bold\">Rp {{db.TotalRevenue}}</label><br />\r" +
    "\n" +
    "                                <label>Total Revenue</label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-sm-4\">\r" +
    "\n" +
    "                            <div style=\"text-align:center\">\r" +
    "\n" +
    "                                <label></label><br />\r" +
    "\n" +
    "                                <label style=\"font-weight:bold\">Rp {{db.TotalCost}}</label><br />\r" +
    "\n" +
    "                                <label>Total Cost</label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-sm-4\">\r" +
    "\n" +
    "                            <div style=\"text-align:center\">\r" +
    "\n" +
    "                                <label id=\"lblPersentage\" style=\"font-weight:bold\">{{db.PersentageProfit}} %</label><br />\r" +
    "\n" +
    "                                <label style=\"font-weight:bold\">Rp {{db.TotalProfit}}</label><br />\r" +
    "\n" +
    "                                <label>Total Profit</label>\r" +
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
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/modules/dashboard/dashboardNull.html',
    "<div class=\"container-fluid animated fadeIn\">\r" +
    "\n" +
    "    <div class=\"row card-header\">\r" +
    "\n" +
    "        <div class=\"col-md-12\">\r" +
    "\n" +
    "            <div class=\"header-dashboard\">\r" +
    "\n" +
    "                <div class=\"month-pick\">\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <h1></h1>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/modules/deliveryArea/deliveryArea.html',
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
    "                    <div class=\"card-title\">Delivery Area List</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-6\">\r" +
    "\n" +
    "                            <button id=\"addButton\" class=\"btn btn-success\" ui-sref=\"app.deliveryAreaEntry({ id: '0'})\">Add Delivery Area</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"deliveryArea\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Title</th>\r" +
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


  $templateCache.put('app/modules/deliveryAreaEntry/deliveryAreaEntry.html',
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
    "                    <div class=\"card-title\">Add Delivery Area</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Delivery Area Name:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\r" +
    "\n" +
    "                                    placeholder=\"Delivery Area Name\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div> \r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <div class=\"col-md-12\">\r" +
    "\n" +
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Save</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-default ml-1\" ui-sref=\"app.deliveryAreaList\">Back</button>\r" +
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


  $templateCache.put('app/modules/issueType/issueType.html',
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
    "                    <div class=\"card-title\">List Issue Type</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-6\">\r" +
    "\n" +
    "                            <button id=\"addButton\" class=\"btn btn-success\" ui-sref=\"app.issueTypeEntry({ id: '0'})\">Add Issue Type</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"issueType\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Title</th>\r" +
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


  $templateCache.put('app/modules/issueTypeEntry/issueTypeEntry.html',
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
    "                    <div class=\"card-title\">Add Issue Type</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Type Name:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <input type=\"text\" id=\"title\" name=\"title\" class=\"form-control\" ng-model=\"vm.model.title\" placeholder=\"Type Name\">\r" +
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
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Save</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-default ml-1\" ui-sref=\"app.issueTypeList\">Back</button>\r" +
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


  $templateCache.put('app/modules/izinCuti/izinCuti.html',
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
    "                    <div class=\"card-title\">Permit/Leave List</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-6\">\r" +
    "\n" +
    "                            <button id=\"addButton\" class=\"btn btn-success\" ui-sref=\"app.izinCutiEntry({ id: '0'})\">Add Permit/Leave</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"izinCuti\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Permit/Leave Code</th>\r" +
    "\n" +
    "                                        <th>User</th>\r" +
    "\n" +
    "                                        <th>Position</th>\r" +
    "\n" +
    "                                        <th>Information</th>\r" +
    "\n" +
    "                                        <th>Permit/Leave Date</th>\r" +
    "\n" +
    "                                        <th>Approval Status</th>\r" +
    "\n" +
    "                                        <th>Approval By</th> \r" +
    "\n" +
    "                                        <th>Detail</th>\r" +
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


  $templateCache.put('app/modules/izinCutiApproval/izinCutiApproval.html',
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
    "                    <div class=\"card-title\">List Approval Permit/Leave</div> \r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"izinCutiApproval\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Permit/Leave Code</th>\r" +
    "\n" +
    "                                        <th>User</th>\r" +
    "\n" +
    "                                        <th>Position</th>\r" +
    "\n" +
    "                                        <th>Information</th>\r" +
    "\n" +
    "                                        <th>Permit/Leave Date</th>\r" +
    "\n" +
    "                                        <th>Approval Status</th>\r" +
    "\n" +
    "                                        <th>Approval By</th>\r" +
    "\n" +
    "                                        <th>Details</th>\r" +
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


  $templateCache.put('app/modules/izinCutiApprovalEntry/izinCutiApprovalEntry.html',
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
    "                    <div class=\"card-title\">Permit/Leave Detail</div>\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\" hidden>User fk:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-2\" hidden>\r" +
    "\n" +
    "                                <input type=\"text\" id=\"user_fk\" name=\"user_fk\" class=\"form-control\" ng-model=\"vm.model.user_fk\" placeholder=\"User ID\" disabled>\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Requestor Name:</label>\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">{{vm.model.userIzinCutiName}}</label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Position:</label>\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">{{vm.model.userIzinCutiJabatan}}</label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Permit/Leave Date:</label>\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-3\">{{vm.model.tglMulai  | date: 'dd-MM-yyyy'}}</label> \r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Reason:</label>\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-8\">{{vm.model.alasan}}</label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\"></label>\r" +
    "\n" +
    "                            <button class=\"btn btn-info control\" id=\"download\">Download File</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row\" hidden>\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Photo:</label>\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-8\"><img id=\"photo\" src=\"{{vm.model.photo == null ? '/app/assets/images/blank-img.jpg' : vm.model.photo}}\" style=\"width:300px;margin:0 auto\" class=\"img-fluid\" /></label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <div class=\"col-md-4\">\r" +
    "\n" +
    "                                <button class=\"btn btn-success\" id=\"approveButton\">Approve</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-danger ml-1\" id=\"rejectButton\">Reject</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-default ml-1\" ui-sref=\"app.izinCutiApprovalList\">Back</button>\r" +
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
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/modules/izinCutiEntry/izinCutiEntry.html',
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
    "                    <div class=\"card-title\">Permit/Leave Submission</div>\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\" hidden>User fk:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-2\" hidden>\r" +
    "\n" +
    "                                <input type=\"text\" id=\"user_fk\" name=\"user_fk\" class=\"form-control\" ng-model=\"vm.model.user_fk\" placeholder=\"User ID\" disabled>\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Requestor Name:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-3\">\r" +
    "\n" +
    "                                <input type=\"text\" id=\"userIzinCutiName\" name=\"userIzinCutiName\" class=\"form-control\" ng-model=\"vm.model.userIzinCutiName\" placeholder=\"Requestor Name\" disabled>\r" +
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
    "                            <div class=\"col-sm-2\">\r" +
    "\n" +
    "                                <input type=\"text\" id=\"userIzinCutiJabatan\" name=\"userIzinCutiJabatan\" class=\"form-control\" ng-model=\"vm.model.userIzinCutiJabatan\" placeholder=\"Position\" disabled>\r" +
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
    "                            <label class=\"control-label col-sm-2\">Start Date:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-2\">\r" +
    "\n" +
    "                                <input type=\"text\" id=\"tglMulai\" name=\"tglMulai\" ng-model=\"vm.model.tglMulai\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" required />\r" +
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
    "                            <label class=\"control-label col-sm-2\">End Date:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-2\">\r" +
    "\n" +
    "                                <input type=\"text\" id=\"tglSelesai\" name=\"tglSelesai\" ng-model=\"vm.model.tglSelesai\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" required />\r" +
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
    "                            <label class=\"control-label col-sm-2\">Reason:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-8\">\r" +
    "\n" +
    "                                <textarea id=\"alasan\" name=\"alasan\" class=\"form-control\" ng-model=\"vm.model.alasan\" placeholder=\"Reason\"></textarea>\r" +
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
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Save</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-default ml-1\" ui-sref=\"app.izinCutiList\">Back</button>\r" +
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


  $templateCache.put('app/modules/kategoriJabatan/kategoriJabatan.html',
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
    "                    <div class=\"card-title\">List Position Category</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-6\">\r" +
    "\n" +
    "                            <button id=\"addButton\" class=\"btn btn-success\" ui-sref=\"app.kategoriJabatanEntry({ id: '0'})\">Add Position Category</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"kategoriJabatan\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Title</th>\r" +
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


  $templateCache.put('app/modules/kategoriJabatanEntry/kategoriJabatanEntry.html',
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
    "                    <div class=\"card-title\">Position Category</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Position Category:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\r" +
    "\n" +
    "                                    placeholder=\"Position Category\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div> \r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <div class=\"col-md-12\">\r" +
    "\n" +
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Save</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-default ml-1\" ui-sref=\"app.kategoriJabatanList\">Back</button>\r" +
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


  $templateCache.put('app/modules/kota/kota.html',
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
    "                    <div class=\"card-title\">City List</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-6\">\r" +
    "\n" +
    "                            <button id=\"addButton\" class=\"btn btn-success\" ui-sref=\"app.kotaEntry({ id: '0'})\">Add City</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"kota\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Title</th>\r" +
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


  $templateCache.put('app/modules/kotaEntry/kotaEntry.html',
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
    "                    <div class=\"card-title\">Add City</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">City:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\r" +
    "\n" +
    "                                    placeholder=\"Kota Name\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div> \r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <div class=\"col-md-12\">\r" +
    "\n" +
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Save</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-default ml-1\" ui-sref=\"app.kotaList\">Back</button>\r" +
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
    "    <!-- Navigation -->\r" +
    "\n" +
    "    <div ng-include=\"'app/modules/layouts/side-bar/sidebar.html'\" include-replace></div>\r" +
    "\n" +
    "    <!-- Main content -->\r" +
    "\n" +
    "    <main class=\"main\">\r" +
    "\n" +
    "        <!-- Breadcrumb -->\r" +
    "\n" +
    "        <ol class=\"breadcrumb\" breadcrumb>\r" +
    "\n" +
    "            <ncy-breadcrumb></ncy-breadcrumb>\r" +
    "\n" +
    "            <span class=\"controls\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <span class='mr-3'>{{ lastUpdate }}</span>\r" +
    "\n" +
    "                <span class=\"scroll-control\" ng-if=\"$state.current.name == 'app.alert' || $state.current.name == 'app.summary'\">\r" +
    "\n" +
    "                    <i class=\"icon-control-start\" id='ticker-previous'></i>\r" +
    "\n" +
    "                    <i class=\"icon-control-play\" id='start' ng-click='start(true)'></i>\r" +
    "\n" +
    "                    <i class=\"icon-control-pause\" id='stop' ng-click='start(false)'></i>\r" +
    "\n" +
    "                    <i class=\"icon-control-end\" id='ticker-next'></i>\r" +
    "\n" +
    "                </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <i class=\"icon-reload\" id='reload'></i>\r" +
    "\n" +
    "                <i class=\"icon-list\" id='paginate-icon' ng-click=\"changeView(true)\" ng-if=\"$state.current.name == 'app.alert' || $state.current.name == 'app.summary'\"></i>\r" +
    "\n" +
    "                <i class=\"icon-grid\" id='scroll-icon' ng-click=\"changeView(false)\"></i>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <i class=\"icon-printer\" onclick=\"window.print();\"></i>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <i class=\"icon-size-fullscreen icon-full\" ng-click=\"fullscreen(true)\"></i>\r" +
    "\n" +
    "                <i class=\"icon-size-actual icon-actual\" ng-click=\"fullscreen(false)\"></i>\r" +
    "\n" +
    "            </span>\r" +
    "\n" +
    "        </ol>\r" +
    "\n" +
    "        <div class=\"container-fluid\">\r" +
    "\n" +
    "            <ui-view></ui-view>\r" +
    "\n" +
    "            <div class=\"lds-ring\">\r" +
    "\n" +
    "                <div></div>\r" +
    "\n" +
    "                <div></div>\r" +
    "\n" +
    "                <div></div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!-- /.conainer-fluid -->\r" +
    "\n" +
    "    </main>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"back-loader flex-row align-items-center\">\r" +
    "\n" +
    "    <div loader-css=\"line-scale\" class=\"preload-login\"></div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<!-- Footer -->\r" +
    "\n" +
    "<div ng-include=\"'app/modules/layouts/footer.html'\" include-replace></div>"
  );


  $templateCache.put('app/modules/layouts/footer.html',
    "<!-- <footer class=\"app-footer\">\r" +
    "\n" +
    "  <span><a href=\"http://coreui.io\">CoreUI</a> &copy; 2018 creativeLabs.</span>\r" +
    "\n" +
    "  <span class=\"ml-auto\">Powered by <a href=\"http://coreui.io\">CoreUI</a></span>\r" +
    "\n" +
    "</footer> -->"
  );


  $templateCache.put('app/modules/layouts/nav-bar/navbar.html',
    "<header class=\"app-header navbar\" ng-controller=\"NavBarCtrl as nav\">\r" +
    "\n" +
    "    <button class=\"navbar-toggler mobile-sidebar-toggler d-lg-none\" type=\"button\">\r" +
    "\n" +
    "        <span class=\"navbar-toggler-icon\"></span>\r" +
    "\n" +
    "    </button>\r" +
    "\n" +
    "    <ul class=\"nav navbar-nav d-md-down-none\">\r" +
    "\n" +
    "        <li class=\"nav-item\">\r" +
    "\n" +
    "            <a class=\"nav-link navbar-toggler sidebar-toggler\" href=\"#\">\r" +
    "\n" +
    "                <span class=\"navbar-toggler-icon\" ng-click=\"nav.resizeDt()\"></span>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "    <div class=\"nav navbar-nav ml-auto\" uib-dropdown>\r" +
    "\n" +
    "        <div class=\"btn-transparent\" uib-dropdown-toggle=\"\" ng-disabled=\"disabled\" aria-haspopup=\"true\" aria-expanded=\"false\">\r" +
    "\n" +
    "            <a data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r" +
    "\n" +
    "                <img id=\"photoProfile\" src=\"app/assets/images/default.png\" class=\"img-avatar\" alt=\"\">\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"dropdown-menu dropdown-menu-right\" uib-dropdown-menu=\"\" role=\"menu\" aria-labelledby=\"single-button\">\r" +
    "\n" +
    "            <div class=\"dropdown-header text-left\">\r" +
    "\n" +
    "                <strong>User Info</strong>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"dropdown-item\">\r" +
    "\n" +
    "                <div><i class=\"fa fa-user\"></i><strong> {{nav.model.name}}</strong></div>\r" +
    "\n" +
    "                <div><i></i> {{nav.model.email}}</div>\r" +
    "\n" +
    "                <div><i class=\"fa fa-lock\"></i> <a ui-sref=\"app.changePasswordEntry\">Change Password</a></div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <a class=\"dropdown-item\" href=\"#\" ng-click=\"nav.logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</header>"
  );


  $templateCache.put('app/modules/layouts/side-bar/sidebar.html',
    "<div class=\"sidebar\" ng-controller=\"sidebarCtrl as vm\">\r" +
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
    "            Global One Solusindo\r" +
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
    "        </ul>\r" +
    "\n" +
    "        <ul class=\"nav\" ng-repeat=\"groupMenu in vm.treeMenu.groupMenus\">\r" +
    "\n" +
    "            <li class=\"nav-item nav-dropdown\" ng-class=\"{open: $state.includes('app.availability')}\">\r" +
    "\n" +
    "                <a class=\"nav-link nav-dropdown-toggle\" ng-class=\"{active: $state.includes('app.availability')}\" href=\"#\">\r" +
    "\n" +
    "                    <i class=\"fa fa-list-alt\"></i> <span>{{groupMenu.groupName}}</span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "                <ul class=\"nav-dropdown-items\" ng-repeat=\"menu in groupMenu.menus\">\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"{{menu.path}}\">\r" +
    "\n" +
    "                            <i class=\"fa fa-circle\"></i> <span>{{menu.caption}}</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "    </nav>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/login/login.html',
    "<div class=\"app flex-row align-items-center login\">\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"row justify-content-center\">\r" +
    "\n" +
    "            <div class=\"col-md-8\">\r" +
    "\n" +
    "                <div class=\"card-group\">\r" +
    "\n" +
    "                    <div class=\"card p-0\">\r" +
    "\n" +
    "                        <div class=\"card-body p-0\">\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"d-none d-sm-block col-md-6 login-bg\">\r" +
    "\n" +
    "                                    <div class=\"overlay-login\">\r" +
    "\n" +
    "                                        <div>We are doing great works</div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"col-md-6\">\r" +
    "\n" +
    "                                    <form class=\"p-4\">\r" +
    "\n" +
    "                                        <div class=\"company-icon\">\r" +
    "\n" +
    "                                            <i class=\"fas fa-broadcast-tower\"></i>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <span class=\"title-login\">Global One Solusindo</span>\r" +
    "\n" +
    "                                        <div class=\"form-group\">\r" +
    "\n" +
    "                                            <label>Username</label>\r" +
    "\n" +
    "                                            <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" placeholder=\"Username\" ng-model=\"login.model.username\" required focus-me=\"true\">\r" +
    "\n" +
    "                                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div class=\"form-group\">\r" +
    "\n" +
    "                                            <label>Password</label>\r" +
    "\n" +
    "                                            <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" ng-model=\"login.model.password\" required \">\r" +
    "\n" +
    "                                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div class=\"row\">\r" +
    "\n" +
    "                                            <div class=\"col-12\">\r" +
    "\n" +
    "                                                <input type=\"button\" id=\"loginButton\" ng-click=\"vm.login()\" class=\"btn login-btn\" value=\"Login\">\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </form>\r" +
    "\n" +
    "                                </div>\r" +
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
    "        <div class=\"lds-ring\">\r" +
    "\n" +
    "            <div></div>\r" +
    "\n" +
    "            <div></div>\r" +
    "\n" +
    "            <div></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
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
    "                    <div class=\"card-title\">Mapping Role To Role Group</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-3\">Role Group Name:</label>\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\" type=\"text\" id=\"title\" name=\"title\">\r" +
    "\n" +
    "                                {{vm.model.title}}\r" +
    "\n" +
    "                            </label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-3\">Description:</label>\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\" name=\"description\" placeholder=\"Description\">\r" +
    "\n" +
    "                                {{vm.model.description}}\r" +
    "\n" +
    "                            </label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <div class=\"col-md-12\">\r" +
    "\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.mappingRoleToRoleGroupList\">Back</button> \r" +
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
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"card\">\r" +
    "\n" +
    "                    <div class=\"card-title\">List Role Group</div>\r" +
    "\n" +
    "                    <div class=\"row\"> \r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <button role-modal on-callback=\"vm.roleModalCallback\" class=\"btn btn-success\" id=\"modalRoleButton\">\r" +
    "\n" +
    "                                Manage Role\r" +
    "\n" +
    "                            </button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"mappingRoleToRoleGroupEntry\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Role Name</th>\r" +
    "\n" +
    "                                        <th>Description</th>\r" +
    "\n" +
    "                                        <!--<th></th>-->\r" +
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
    "        <!--<div class=\"col-md-12 p-0\">\r" +
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
    "            </table>-->\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"col-md-4\" ng-repeat=\"i in vm.model.mappingRoleToRoleGroups\">\r" +
    "\n" +
    "                <label class=\"control control--checkbox\">\r" +
    "\n" +
    "                    {{i.roleName}}\r" +
    "\n" +
    "                    <input tabindex=\"26\" type=\"checkbox\" name=\"role\"\r" +
    "\n" +
    "                           checked=\"checked\"  ng-checked=\"i.isChecked\" ng-model=\"i.isChecked\" />\r" +
    "\n" +
    "                    <span class=\"control__indicator\"></span>\r" +
    "\n" +
    "                </label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "    <button id=\"saveButton\" class=\"btn btn-primary\" type=\"button\">Save</button>\r" +
    "\n" +
    "    <button id=\"cancelButton\" class=\"btn btn-default\" type=\"button\">Back</button>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/mappingUserToAuthParam/mappingUserToAuthParam.html',
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
    "                    <div class=\"card-title\">List Mapping User To Auth Param</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"mappingUserToAuthParam\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Auth Param</th>\r" +
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


  $templateCache.put('app/modules/mappingUserToAuthParamEntry/mappingUserToAuthParamEntry.html',
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
    "                    <div class=\"card-title\">Mapping User To Auth Param</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-3\">Auth Param Name:</label>\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\" type=\"text\" id=\"title\" name=\"title\">\r" +
    "\n" +
    "                                {{vm.model.title}}\r" +
    "\n" +
    "                            </label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-3\">Description:</label>\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\" name=\"description\" placeholder=\"Description\">\r" +
    "\n" +
    "                                {{vm.model.description}}\r" +
    "\n" +
    "                            </label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <div class=\"col-md-12\">\r" +
    "\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.mappingUserToAuthParamList\">Back</button> \r" +
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
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"card\">\r" +
    "\n" +
    "                    <div class=\"card-title\">List Mapping User To Auth Param</div>\r" +
    "\n" +
    "                    <div class=\"row\"> \r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <button user--auth-param-modal on-callback=\"vm.userAuthParamModalCallback\" class=\"btn btn-success\" id=\"modalRoleButton\">\r" +
    "\n" +
    "                                Add New User\r" +
    "\n" +
    "                            </button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"mappingUserToAuthParam\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>Auth Param PK</th>\r" +
    "\n" +
    "                                        <th>User PK</th>\r" +
    "\n" +
    "                                        <th>User Id</th>\r" +
    "\n" +
    "                                        <th>Username</th>\r" +
    "\n" +
    "                                        <th>Name</th>\r" +
    "\n" +
    "                                        <th>Position</th>\r" +
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


  $templateCache.put('app/modules/mappingUserToAuthParamEntry/modal/userAuthParamModal.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <h5 class=\"modal-title\">Add New User</h5>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"row form-group\">\r" +
    "\n" +
    "        <label class=\"control-label col-sm-2\">User:</label>\r" +
    "\n" +
    "        <div class=\"col-sm-6\">\r" +
    "\n" +
    "            <select id=\"user_pk\" name=\"user_pk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.user_pk\" required>\r" +
    "\n" +
    "                <option ng-repeat=\"x in vm.formData.users\" ng-value=\"x.user_pk\">{{x.name}}</option>\r" +
    "\n" +
    "            </select>\r" +
    "\n" +
    "            <div class=\"invalid-feedback\"></div>\r" +
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
    "    <button id=\"cancelButton\" class=\"btn btn-default\" type=\"button\">Back</button>\r" +
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
    "                    <div class=\"card-title\">List Mapping User To Role Group</div>\r" +
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
    "                                        <th>Role Group</th>\r" +
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
    "                    <div class=\"card-title\">Mapping User To Role Group</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-3\">Role Group Name:</label>\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\" type=\"text\" id=\"title\" name=\"title\">\r" +
    "\n" +
    "                                {{vm.model.title}}\r" +
    "\n" +
    "                            </label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-3\">Description:</label>\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\" name=\"description\" placeholder=\"Description\">\r" +
    "\n" +
    "                                {{vm.model.description}}\r" +
    "\n" +
    "                            </label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <div class=\"col-md-12\">\r" +
    "\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.mappingUserToRoleGroupList\">Back</button>\r" +
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
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"card\">\r" +
    "\n" +
    "                    <div class=\"card-title\">List Mapping User To Role Group</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <button user-modal on-callback=\"vm.userModalCallback\" class=\"btn btn-success\" id=\"modalRoleButton\">\r" +
    "\n" +
    "                                Add New User\r" +
    "\n" +
    "                            </button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
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
    "                                        <th>RoleGroup PK</th>\r" +
    "\n" +
    "                                        <th>User PK</th>\r" +
    "\n" +
    "                                        <th>User Id</th>\r" +
    "\n" +
    "                                        <th>Username</th>\r" +
    "\n" +
    "                                        <th>Name</th>\r" +
    "\n" +
    "                                        <th>Position Category</th>\r" +
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


  $templateCache.put('app/modules/mappingUserToRoleGroupEntry/modal/userModal.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <h5 class=\"modal-title\">Add New User</h5>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"row form-group\">\r" +
    "\n" +
    "        <label class=\"control-label col-sm-2\">User:</label>\r" +
    "\n" +
    "        <div class=\"col-sm-6\">\r" +
    "\n" +
    "            <select id=\"user_pk\" name=\"user_pk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.user_pk\" required>\r" +
    "\n" +
    "                <option ng-repeat=\"x in vm.formData.users\" ng-value=\"x.user_pk\">{{x.name}}</option>\r" +
    "\n" +
    "            </select>\r" +
    "\n" +
    "            <div class=\"invalid-feedback\"></div>\r" +
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
    "    <button id=\"cancelButton\" class=\"btn btn-default\" type=\"button\">Back</button>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/menu/menu.html',
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
    "                    <div class=\"card-title\">List Menu</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-6\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.menuEntry({ id: '0'})\">Tambah Menu</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"menu\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Code</th>\r" +
    "\n" +
    "                                        <th>Caption</th>\r" +
    "\n" +
    "                                        <th>Path</th>\r" +
    "\n" +
    "                                        <th>Group</th>\r" +
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


  $templateCache.put('app/modules/menuEntry/menuEntry.html',
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
    "                    <div class=\"card-title\">Add Menu</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Menu Name:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <input type=\"text\" id=\"code\" name=\"code\" class=\"form-control\" ng-model=\"vm.model.code\" placeholder=\"Menu Name\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Caption:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <input type=\"text\" id=\"caption\" name=\"caption\" class=\"form-control\" ng-model=\"vm.model.caption\" placeholder=\"Menu Name\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Path:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <input type=\"text\" id=\"path\" name=\"path\" class=\"form-control\" ng-model=\"vm.model.path\" placeholder=\"Menu Name\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Group Name:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <input type=\"text\" id=\"parentGroup\" name=\"parentGroup\" class=\"form-control\" ng-model=\"vm.model.parentGroup\" placeholder=\"Menu Name\">\r" +
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
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Save</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-default ml-1\" ui-sref=\"app.menuList\">Back</button>\r" +
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


  $templateCache.put('app/modules/myTaskList/myTaskList.html',
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
    "                    <div class=\"card-title\">My Task List</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-6\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"myTaskList\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>User</th>\r" +
    "\n" +
    "                                        <th>Position</th>\r" +
    "\n" +
    "                                        <th>SOW</th>\r" +
    "\n" +
    "                                        <th>Site</th>\r" +
    "\n" +
    "                                        <th>Site Address</th>\r" +
    "\n" +
    "                                        <th>Check In Time</th>\r" +
    "\n" +
    "                                        <th>Check Out Time</th>\r" +
    "\n" +
    "                                        <th>File Submitted</th>\r" +
    "\n" +
    "                                        <th>Status</th>\r" +
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


  $templateCache.put('app/modules/myTaskListEntry/myTaskListEntry.html',
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
    "                    <div class=\"card-title\">Task Detail</div>\r" +
    "\n" +
    "                    <div class=\"row col-md-12\">\r" +
    "\n" +
    "                        <div class=\"col-md-6\">\r" +
    "\n" +
    "                            <div class=\"card-title\">SOW Info</div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">SOW Name:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.sowName}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">User:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.userName}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Position:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.kategoriJabatanTitle}}</label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row col-md-12\">\r" +
    "\n" +
    "                        <div class=\"col-md-6\">\r" +
    "\n" +
    "                            <div class=\"card-title\">CheckIn Info</div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">CheckIn Time</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.checkInTime  | date: 'dd-MM-yyyy'}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Longitude:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.longitudeCheckIn}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Latitude:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.latitudeCheckIn}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">MCC:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.mccCheckIn}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">MNC:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.mncCheckIn}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">LAC:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.lacCheckIn}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Cell ID:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.cellIDCheckIn}}</label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6\">\r" +
    "\n" +
    "                            <div class=\"card-title\">CheckOut Info</div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">CheckOut Time</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.waktuCheckOut  | date: 'dd-MM-yyyy'}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Longitude:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.longitudeCheckOut}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Latitude:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.latitudeCheckOut}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">MCC:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.mccCheckOut}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">MNC:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.mncCheckOut}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">LAC:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.lacCheckOut}}</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Cell ID:</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.cellIDCheckOut}}</label>\r" +
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
    "\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"card\">\r" +
    "\n" +
    "                    <div class=\"row col-md-12\">\r" +
    "\n" +
    "                        <div class=\"col-md-6\">\r" +
    "\n" +
    "                            <div class=\"card-title\">SOW Result</div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Description</label>\r" +
    "\n" +
    "                                <div class=\"col-md-12\">\r" +
    "\n" +
    "                                    <textarea class=\"form-control\" ng-model=\"vm.model.SOWResult.description\" style=\"width:100%\"></textarea>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6\">\r" +
    "\n" +
    "                            <div class=\"card-title\">Track Result</div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
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
    "\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"card\">\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <button class=\"btn btn-success\" id=\"submitButton\">Submit</button>\r" +
    "\n" +
    "                        <button class=\"btn btn-default ml-1\" ui-sref=\"app.myTaskListList\">Back</button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
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


  $templateCache.put('app/modules/operator/operator.html',
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
    "                    <div class=\"card-title\">List Operator</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-6\">\r" +
    "\n" +
    "                            <button id=\"addButton\" class=\"btn btn-success\" ui-sref=\"app.operatorEntry({ id: '0'})\">Add Operator</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"operator\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Operator Name</th>\r" +
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


  $templateCache.put('app/modules/operatorEntry/operatorEntry.html',
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
    "                    <div class=\"card-title\">Add Operator</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Operator Name:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\r" +
    "\n" +
    "                                    placeholder=\"Operator Name\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div> \r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <div class=\"col-md-12\">\r" +
    "\n" +
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Save</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-default ml-1\" ui-sref=\"app.operatorList\">Back</button>\r" +
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


  $templateCache.put('app/modules/po/poImportExcel.html',
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
    "                    <div class=\"card-title\">Import User</div>\r" +
    "\n" +
    "                    <div class=\"row form-group\">\r" +
    "\n" +
    "                        <div class=\"col-sm-6 input-group\">\r" +
    "\n" +
    "                            <div class=\"input-group-prepend\">\r" +
    "\n" +
    "                                <span class=\"input-group-text\" id=\"inputGroupFileAddon01\">Upload</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"custom-file\">\r" +
    "\n" +
    "                                <input type=\"file\" class=\"custom-file-input\" id=\"file\" aria-describedby=\"inputGroupFileAddon01\">\r" +
    "\n" +
    "                                <label id=\"fileName\" class=\"custom-file-label\" for=\"file\">Choose file</label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row form-group\">\r" +
    "\n" +
    "                        <div class=\"col-md-6\">\r" +
    "\n" +
    "                            <button class=\"btn btn-default\" id=\"downloadButton\">Template</button>\r" +
    "\n" +
    "                            <button class=\"btn btn-success float-right\" id=\"uploadButton\">Submit</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"card\">\r" +
    "\n" +
    "                    <div class=\"card-title\">Upload result</div>\r" +
    "\n" +
    "                    <div style=\"overflow:auto\">\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <div class=\"col-md-12\">\r" +
    "\n" +
    "                                <table class=\"table table-striped\" id=\"poview\">\r" +
    "\n" +
    "                                    <thead>\r" +
    "\n" +
    "                                        <tr>\r" +
    "\n" +
    "                                            <th>Id</th>\r" +
    "\n" +
    "                                            <th>Account</th>\r" +
    "\n" +
    "                                            <th>Project code</th>\r" +
    "\n" +
    "                                            <th>Site ID Imp</th>\r" +
    "\n" +
    "                                            <th>Site ID</th>\r" +
    "\n" +
    "                                            <th>Site Name</th>\r" +
    "\n" +
    "                                            <th>DUID</th>\r" +
    "\n" +
    "                                            <th>PMO Uniq</th>\r" +
    "\n" +
    "                                            <th>SOW Act DU Model</th>\r" +
    "\n" +
    "                                            <th>System</th>\r" +
    "\n" +
    "                                            <th>SOW PO</th>\r" +
    "\n" +
    "                                            <th>Item Description</th>\r" +
    "\n" +
    "                                            <th>PO No</th>\r" +
    "\n" +
    "                                            <th>Shipment No</th>\r" +
    "\n" +
    "                                            <th>Qty</th>\r" +
    "\n" +
    "                                            <th>PO Status</th>\r" +
    "\n" +
    "                                            <th>Status</th>\r" +
    "\n" +
    "                                        </tr>\r" +
    "\n" +
    "                                    </thead>\r" +
    "\n" +
    "                                </table>\r" +
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


  $templateCache.put('app/modules/positionEntry/positionEntry.html',
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
    "                    <div class=\"card-title\">Tambah Position</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Position Name:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"title\" ng-model=\"vm.model.name\"\r" +
    "\n" +
    "                                       placeholder=\"Position Name\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Description:</label>\r" +
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
    "                                <button class=\"btn btn-default\" ui-sref=\"app.positionList\">Kembali</button>\r" +
    "\n" +
    "                                <button id=\"saveButton\" class=\"btn btn-success float-right\">\r" +
    "\n" +
    "                                    Tambah\r" +
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


  $templateCache.put('app/modules/project/project.html',
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
    "                    <div class=\"card-title\">List Project</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-6\">\r" +
    "\n" +
    "                            <button id=\"addButton\" class=\"btn btn-success\" ui-sref=\"app.projectEntry({ id: '0'})\">Add Project</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"project\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Operator</th>\r" +
    "\n" +
    "                                        <th>Vendor</th>\r" +
    "\n" +
    "                                        <th>Delivery Area</th>\r" +
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


  $templateCache.put('app/modules/project/projectDetail.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <h5 class=\"modal-title\" id=\"modal-title\">Detail</h5>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-12\">\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Operator:</label><label class=\"col-sm-9\">{{ model.operatorTitle }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Vendor:</label><label class=\"col-sm-9\">{{ model.vendorTitle }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Delivery Area:</label><label class=\"col-sm-9\">{{ model.deliveryAreaTitle }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Project Manager:</label><label class=\"col-sm-9\">{{ model.userName }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"close()\">Back</button>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('app/modules/projectEntry/projectEntry.html',
    "<div class=\"animated fadeIn\">\r" +
    "\n" +
    "    <form class=\"form-horizontal\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div style=\"height:500px;\">\r" +
    "\n" +
    "                    <div class=\"card h-100\">\r" +
    "\n" +
    "                        <div class=\"card-title\">Add Project</div>\r" +
    "\n" +
    "                        <div class=\"col-md-8\">\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-2\">Operator:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                    <select id=\"operator_fk\" name=\"operator_fk\" class=\"form-control input-lg\" ng-model=\"vm.model.operator_fk\" required>\r" +
    "\n" +
    "                                        <option ng-repeat=\"x in vm.formData.operators\" ng-value=\"x.operator_pk\">{{x.title}}</option>\r" +
    "\n" +
    "                                    </select>\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-2\">Vendor:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                    <select id=\"vendor_fk\" name=\"vendor_fk\" class=\"form-control input-lg\" ng-model=\"vm.model.vendor_fk\" required>\r" +
    "\n" +
    "                                        <option ng-repeat=\"x in vm.formData.vendors\" ng-value=\"x.vendor_pk\">{{x.title}}</option>\r" +
    "\n" +
    "                                    </select>\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-2\">Delivery Area:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                    <select id=\"deliveryArea_fk\" name=\"deliveryArea_fk\" class=\"form-control input-lg\" ng-model=\"vm.model.deliveryArea_fk\" required>\r" +
    "\n" +
    "                                        <option ng-repeat=\"x in vm.formData.deliveryAreas\" ng-value=\"x.deliveryArea_pk\">{{x.title}}</option>\r" +
    "\n" +
    "                                    </select>\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-2\">Project Manager:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                    <select id=\"user_fk\" name=\"user_fk\" class=\"form-control input-lg\" ng-model=\"vm.model.user_fk\" required>\r" +
    "\n" +
    "                                        <option ng-repeat=\"x in vm.formData.users\" ng-value=\"x.user_pk\">{{x.name}}</option>\r" +
    "\n" +
    "                                    </select>\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-md-8\">\r" +
    "\n" +
    "                                    <button class=\"btn btn-success\" id=\"saveButton\">Save</button>\r" +
    "\n" +
    "                                    <button class=\"btn btn-default ml-1\" ui-sref=\"app.projectList\">Back</button>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/report/activities/activities.html',
    "<div class=\"animated fadeIn\">\r" +
    "\n" +
    "    <form class=\"form-horizontal\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <div class=\"card\">\r" +
    "\n" +
    "                            <div class=\"card-title\">Activities on {{vm.monthName}}</div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <!--User Info-->\r" +
    "\n" +
    "                                <div class=\"col-md-10\">\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-2\">User ID</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"userId\" name=\"userId\">{{vm.user.userCode}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-2\">Name</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"name\" name=\"name\">{{vm.user.name}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-2\">Position</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"kategoriJabatanTitle\" name=\"kategoriJabatanTitle\">{{vm.user.kategoriJabatanTitle}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <div class=\"card\">\r" +
    "\n" +
    "                            <div class=\"card-title\">Activities</div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-md-6\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-md-12\">\r" +
    "\n" +
    "                                    <table id=\"activities\">\r" +
    "\n" +
    "                                        <thead>\r" +
    "\n" +
    "                                            <tr>\r" +
    "\n" +
    "                                                <th>No</th>\r" +
    "\n" +
    "                                                <th>Date</th>\r" +
    "\n" +
    "                                                <th>Checkin Time</th>\r" +
    "\n" +
    "                                                <th>Checkout Time</th>\r" +
    "\n" +
    "                                                <th>Activity</th>\r" +
    "\n" +
    "                                                <th>Approved By</th>\r" +
    "\n" +
    "                                            </tr>\r" +
    "\n" +
    "                                        </thead>\r" +
    "\n" +
    "                                    </table>\r" +
    "\n" +
    "                                </div>\r" +
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


  $templateCache.put('app/modules/report/dailyTask/dailyTask.html',
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
    "                    <div class=\"card-title\">Daily Task Report</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-12\">\r" +
    "\n" +
    "                            <h5>Details</h5>\r" +
    "\n" +
    "                            <div class=\"legend-item\">\r" +
    "\n" +
    "                                <span class=\"dot-online\"></span><label>Online</label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"legend-item\">\r" +
    "\n" +
    "                                <span class=\"dot-offline\"></span><label>Offline</label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"legend-item\">\r" +
    "\n" +
    "                                <span class=\"dot-cuti\"></span><label>Permit/Leave</label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"legend-item\">\r" +
    "\n" +
    "                                <span class=\"dot-unassigned\"></span><label>No Assignment</label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row form-group\" style=\"margin-top: 2%;\">\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-2\" style=\"top: 8px\">Employee Name</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-2\">\r" +
    "\n" +
    "                            <select id=\"user_fk\" name=\"user_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.user_fk\">\r" +
    "\n" +
    "                                <option value=\"0\">All</option>\r" +
    "\n" +
    "                                <option ng-repeat=\"x in vm.formData.users\" ng-value=\"x.user_pk\">{{x.name}}</option>\r" +
    "\n" +
    "                            </select>\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-1\" style=\"top: 8px\">Status</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-2\">\r" +
    "\n" +
    "                            <select id=\"select_name\" name=\"user_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.statusName\">\r" +
    "\n" +
    "                                <option ng-repeat=\"x in vm.formData.status\" ng-value=\"x.name\">{{x.name}}</option>\r" +
    "\n" +
    "                            </select>\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"form-group col-md-2\">\r" +
    "\n" +
    "                            <button id=\"searchButton\" type=\"button\" class=\"btn btn-success\" style=\"border-radius: 20px\" ng-click=\"vm.search()\">Search</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-6\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"dailyTask\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>User ID</th>\r" +
    "\n" +
    "                                        <th>Nama</th>\r" +
    "\n" +
    "                                        <th>Position</th>\r" +
    "\n" +
    "                                        <th>Status</th>\r" +
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


  $templateCache.put('app/modules/report/taskEngineer/taskEngineer.html',
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
    "                    <div class=\"card-title\">List Task Engineer</div>\r" +
    "\n" +
    "                    <div class=\"row form-group\" >\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-1\">Name</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-2\">\r" +
    "\n" +
    "                            <select id=\"user_fk\" name=\"user_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.user_fk\">\r" +
    "\n" +
    "                                <option value=\"0\">All</option>\r" +
    "\n" +
    "                                <option ng-repeat=\"x in vm.formData.users\" ng-value=\"x.user_pk\">{{x.name}}</option>\r" +
    "\n" +
    "                            </select>\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <!--<label class=\"control-label col-sm-1\">Name</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-2\">\r" +
    "\n" +
    "                            <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" ng-model=\"vm.model.username\" disabled>\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>-->\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-1\">Site</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-2\">\r" +
    "\n" +
    "                            <select id=\"bts_fk\" name=\"bts_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.bts_fk\" required>\r" +
    "\n" +
    "                                <option ng-repeat=\"x in vm.formData.btses\" ng-value=\"x.bts_pk\">{{x.name}}</option>\r" +
    "\n" +
    "                            </select>\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row form-group col-md-2 radio\">\r" +
    "\n" +
    "                        <label><input type=\"radio\" name=\"optradio\" value=\"1\" ng-model=\"vm.model.timePeriod\">Timespan</label>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row form-group\">\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-1\">Start Date</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-2\">\r" +
    "\n" +
    "                            <input type=\"text\" id=\"tglMulai\" name=\"tglMulai\" ng-model=\"vm.model.tglMulai\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" />\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-1\">End Date</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-2\">\r" +
    "\n" +
    "                            <input type=\"text\" id=\"tglAkhir\" name=\"tglAkhir\" ng-model=\"vm.model.tglAkhir\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" />\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"row form-group col-md-2 radio\">\r" +
    "\n" +
    "                        <label><input type=\"radio\" name=\"optradio\" value=\"2\" ng-model=\"vm.model.timePeriod\">Period</label>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row form-group\">\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-1\">Period</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-2\">\r" +
    "\n" +
    "                            <select id=\"bulan_fk\" name=\"bulan_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.bulan_fk\" required>\r" +
    "\n" +
    "                                <option ng-repeat=\"x in vm.formData.bulans\" ng-value=\"x.value\">{{x.name}}</option>\r" +
    "\n" +
    "                            </select>\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row form-group col-md-2\" >\r" +
    "\n" +
    "                        <!--<button id=\"searchButton\" style=\"border-radius: 20px\" ng-click=\"vm.search()\" class=\"btn btn-success\">Cari</button>-->\r" +
    "\n" +
    "                        <button id=\"searchButton\" type=\"button\" class=\"btn btn-success\" style=\"border-radius: 20px\" ng-click=\"vm.search()\">Search</button>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row form-group col-md-12\" style=\"margin-left: -1px; margin-right: -1px; border-bottom: 1px solid #ccc;\">\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"taskEngineer\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <!--<th>Assign Number</th>-->\r" +
    "\n" +
    "                                        <th>User ID</th>\r" +
    "\n" +
    "                                        <th>Name</th>\r" +
    "\n" +
    "                                        <th>Position</th>\r" +
    "\n" +
    "                                        <th>Site</th>\r" +
    "\n" +
    "                                        <th>Task Status</th>\r" +
    "\n" +
    "                                        <th>Detail</th>\r" +
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


  $templateCache.put('app/modules/report/taskEngineerDetail/taskEngineerDetail.html',
    "<div class=\"animated fadeIn\">\r" +
    "\n" +
    "    <form class=\"form-horizontal\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <div class=\"card\">\r" +
    "\n" +
    "                            <div class=\"card-title\">Task Engineer Detail</div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <!--User Info-->\r" +
    "\n" +
    "                                <div class=\"form-group col-md-12\">\r" +
    "\n" +
    "                                    <div class=\"form-group col-md-12\">\r" +
    "\n" +
    "                                        <div class=\"row\">\r" +
    "\n" +
    "                                            <label class=\"control-label col-sm-2\">Assign Number</label>\r" +
    "\n" +
    "                                            <label class=\"control-label col-sm-6\" id=\"assignNumber\" name=\"assignNumber\">{{vm.sowAssign.assignNumber}}</label>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div class=\"row\">\r" +
    "\n" +
    "                                            <label class=\"control-label col-sm-2\">Date</label>\r" +
    "\n" +
    "                                            <label class=\"control-label col-sm-6\" id=\"tglMulai\" name=\"tglMulai\">{{vm.sowAssign.tglMulai  | date: 'dd-MM-yyyy'}}</label>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div class=\"row\">\r" +
    "\n" +
    "                                            <label class=\"control-label col-sm-2\">Expired Date</label>\r" +
    "\n" +
    "                                            <label class=\"control-label col-sm-6\" id=\"tglSelesai\" name=\"tglSelesai\">{{vm.sowAssign.tglSelesai}}</label>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"form-group col-md-4\">\r" +
    "\n" +
    "                                    <div class=\"card-title\">Engineer</div>\r" +
    "\n" +
    "                                    <!--Photo-->\r" +
    "\n" +
    "                                    <div class=\"col-md-4\">\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <!--User Info-->\r" +
    "\n" +
    "                                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                                        <div class=\"row\">\r" +
    "\n" +
    "                                            <label class=\"control-label col-sm-3\">User ID</label>\r" +
    "\n" +
    "                                            <label class=\"control-label col-sm-9\" id=\"userId\" name=\"userId\">{{vm.user.userCode}}</label>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div class=\"row\">\r" +
    "\n" +
    "                                            <label class=\"control-label col-sm-3\">Name</label>\r" +
    "\n" +
    "                                            <label class=\"control-label col-sm-9\" id=\"name\" name=\"name\">{{vm.user.name}}</label>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div class=\"row\">\r" +
    "\n" +
    "                                            <label class=\"control-label col-sm-3\">Position</label>\r" +
    "\n" +
    "                                            <label class=\"control-label col-sm-9\" id=\"kategoriJabatanTitle\" name=\"kategoriJabatanTitle\">{{vm.user.kategoriJabatanTitle}}</label>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"form-group col-md-8\">\r" +
    "\n" +
    "                                    <div class=\"card-title\">Site Info</div>\r" +
    "\n" +
    "                                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                                            <div class=\"row\">\r" +
    "\n" +
    "                                                <label class=\"control-label col-sm-2\">Site Name</label>\r" +
    "\n" +
    "                                                <label class=\"control-label col-sm-6\" id=\"name\" name=\"name\">{{vm.bts.name}}</label>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                            <div class=\"row\">\r" +
    "\n" +
    "                                                <label class=\"control-label col-sm-2\">Technology</label>\r" +
    "\n" +
    "                                                <label class=\"control-label col-sm-6\" id=\"technology\" name=\"technology\">{{vm.bts.technology}}</label>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                            <div class=\"row\">\r" +
    "\n" +
    "                                                <label class=\"control-label col-sm-2\">Longitude</label>\r" +
    "\n" +
    "                                                <label class=\"control-label col-sm-6\" id=\"longitude\" name=\"longitude\">{{vm.bts.longitude}}</label>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                            <div class=\"row\">\r" +
    "\n" +
    "                                                <label class=\"control-label col-sm-2\">Latitude</label>\r" +
    "\n" +
    "                                                <label class=\"control-label col-sm-6\" id=\"latitude\" name=\"latitude\">{{vm.bts.latitude}}</label>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                            <div class=\"row\">\r" +
    "\n" +
    "                                                <label class=\"control-label col-sm-2\">Location</label>\r" +
    "\n" +
    "                                                <label class=\"control-label col-sm-6\" id=\"location\" name=\"location\">{{vm.bts.location}}</label>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                            <div class=\"row\">\r" +
    "\n" +
    "                                                <label class=\"control-label col-sm-2\">Cell ID Status</label>\r" +
    "\n" +
    "                                                <label class=\"control-label col-sm-6\" ng-show=\"vm.cellid === true\" id=\"statuscellid\" name=\"statuscellid\">Ya (Cell ID CheckIn sesuai dengan BTS)</label>\r" +
    "\n" +
    "                                                <label class=\"control-label col-sm-6\" ng-show=\"vm.cellid === false\" id=\"statuscellid\" name=\"statuscellid\">Tidak (Cell ID CheckIn tidak sesuai dengan BTS)</label>\r" +
    "\n" +
    "                                                <label class=\"control-label col-sm-6\" ng-show=\"vm.cellid === null\" id=\"statuscellid\" name=\"statuscellid\">(Data Cell ID pada BTS tidak ada)</label>\r" +
    "\n" +
    "                                            </div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-md-12\">\r" +
    "\n" +
    "                                    <div class=\"card-title\">Issue</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    <!--User Info-->\r" +
    "\n" +
    "                                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                                        <div class=\"row\">\r" +
    "\n" +
    "                                            <label class=\"control-label col-sm-3\">Issue Cause </label>\r" +
    "\n" +
    "                                            <label class=\"control-label col-sm-9\" id=\"userId\" name=\"userId\">{{vm.sOWIssue.issuename}}</label>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div class=\"row\">\r" +
    "\n" +
    "                                            <label class=\"control-label col-sm-3\">Reason</label>\r" +
    "\n" +
    "                                            <label class=\"control-label col-sm-9\" id=\"alasan\" name=\"alasan\">{{vm.sOWIssue.description}}</label>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div class=\"row\">\r" +
    "\n" +
    "                                            <label class=\"control-label col-sm-3\">Remark </label>\r" +
    "\n" +
    "                                            <label class=\"control-label col-sm-9\" id=\"remark\" name=\"remark\">{{vm.remark}}</label>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/report/timesheetEngineer/timesheetEngineer.html',
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
    "                    <div class=\"card-title\">Timesheet Engineer</div>\r" +
    "\n" +
    "                    <div class=\"row form-group\" style=\"margin-left: -1px; margin-right: -1px; border-bottom: 1px solid #ccc; display:none\">\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-1\">User ID</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-2\">\r" +
    "\n" +
    "                            <select id=\"bts_fk\" name=\"bts_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"brc.model.user_pk\" required>\r" +
    "\n" +
    "                                <option ng-repeat=\"x in brc.formData.users\" ng-value=\"x.user_pk\">{{x.username}}</option>\r" +
    "\n" +
    "                            </select>\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-1\">Name</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-2\">\r" +
    "\n" +
    "                            <select id=\"select_name\" name=\"user_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"brc.model.user_fk\" required>\r" +
    "\n" +
    "                                <option ng-repeat=\"x in brc.formData.users\" ng-value=\"x.user_pk\">{{x.name}}</option>\r" +
    "\n" +
    "                            </select>\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"form-group col-md-2\">\r" +
    "\n" +
    "                            <button id=\"searchButton\" type=\"button\" class=\"btn btn-success mt-xs-2\" style=\"border-radius: 20px\" ng-click=\"brc.search()\">Search</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"timesheetEngineer\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>User ID</th>\r" +
    "\n" +
    "                                        <th>Name</th>\r" +
    "\n" +
    "                                        <th>Position</th>\r" +
    "\n" +
    "                                        <th>Detail</th>\r" +
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


  $templateCache.put('app/modules/report/timesheetEngineerDetail/timesheetEngineerDetail.html',
    "<div class=\"animated fadeIn\">\r" +
    "\n" +
    "    <form class=\"form-horizontal\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <div class=\"card\">\r" +
    "\n" +
    "                            <div class=\"card-title\">User Profile</div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <!--Photo-->\r" +
    "\n" +
    "                                <div class=\"col-md-2\">\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <!--User Info-->\r" +
    "\n" +
    "                                <div class=\"col-md-10\">\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-2\">User ID</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"userId\" name=\"userId\">{{vm.user.userCode}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-2\">Position</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"kategoriJabatanTitle\" name=\"kategoriJabatanTitle\">{{vm.user.kategoriJabatanTitle}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-2\">Username</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"username\" name=\"username\">{{vm.user.username}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-2\">Phone</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"noHP\" name=\"noHP\">{{vm.user.noHP}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-2\">Email</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"email\" name=\"email\">{{vm.user.email}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-2\">Address</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"address\" name=\"address\">{{vm.user.address}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"row form-group\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-2\">Asset</label>\r" +
    "\n" +
    "                                        <button id=\"asetHistoriButton\" class=\"btn btn-info col-sm-4\" ui-sref=\"app.asetHistoriList({ user_fk: vm.user.userDetail_fk})\">Histori Penggunaan Aset</button>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <div class=\"card\">\r" +
    "\n" +
    "                            <div class=\"card-title\">Time Sheet</div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-1\">Bulan:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-3\">\r" +
    "\n" +
    "                                    <select id=\"bulan\" name=\"bulan\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.bulan\" required>\r" +
    "\n" +
    "                                        <option ng-repeat=\"x in vm.formData.months\" ng-value=\"x.bulan\">{{x.bulanName}}</option>\r" +
    "\n" +
    "                                    </select> \r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-1\">Tahun:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-3\">\r" +
    "\n" +
    "                                    <select id=\"tahun\" name=\"tahun\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.tahun\" required>\r" +
    "\n" +
    "                                        <option ng-repeat=\"x in vm.formData.years\" ng-value=\"x.tahun\">{{x.tahun}}</option>\r" +
    "\n" +
    "                                    </select> \r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"form-group col-md-2\">\r" +
    "\n" +
    "                                    <button id=\"searchButton\" class=\"btn btn-success\">Search</button>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-md-12\">\r" +
    "\n" +
    "                                    <table id=\"timesheetEngineerDetail\">\r" +
    "\n" +
    "                                        <thead>\r" +
    "\n" +
    "                                            <tr>\r" +
    "\n" +
    "                                                <th>No</th>\r" +
    "\n" +
    "                                                <th>Bulan Number</th>\r" +
    "\n" +
    "                                                <th>Bulan</th>\r" +
    "\n" +
    "                                                <th>Tahun</th>\r" +
    "\n" +
    "                                                <th>Detail</th>\r" +
    "\n" +
    "                                                <th>Download</th>\r" +
    "\n" +
    "                                            </tr>\r" +
    "\n" +
    "                                        </thead>\r" +
    "\n" +
    "                                    </table>\r" +
    "\n" +
    "                                </div>\r" +
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


  $templateCache.put('app/modules/role-entry/role-entry.html',
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
    "                    <div class=\"card-title\">Add Role</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Role Title :</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\r" +
    "\n" +
    "                                       placeholder=\"Role Title\">\r" +
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
    "                                <button class=\"btn btn-success\" id=\"saveButton\">\r" +
    "\n" +
    "                                    Add Role\r" +
    "\n" +
    "                                </button>\r" +
    "\n" +
    "                                <button class=\"btn btn-default ml-1\" ui-sref=\"app.role-list\">Back</button>\r" +
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
    "                        <div class=\"form-group col-md-6\">\r" +
    "\n" +
    "                            <button id=\"addButton\" class=\"btn btn-success\" ui-sref=\"app.role-entry({ id: '0'})\">Add Role</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
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


  $templateCache.put('app/modules/role/roleDetail.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <h5 class=\"modal-title\" id=\"modal-title\">User Detail</h5>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-12\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Role Name :</label><label class=\"col-sm-8\">{{ model.title }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Description :</label><label class=\"col-sm-8\">{{ model.description }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Created Date :</label><label class=\"col-sm-8\">{{ model.createdDate | date: 'dd/MM/yyyy' }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"close()\">Back</button>\r" +
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
    "                        <div class=\"form-group col-md-6\">\r" +
    "\n" +
    "                            <button id=\"addButton\" class=\"btn btn-success\" ui-sref=\"app.roleGroupEntry({ id: '0'})\">Add Role Group</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
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


  $templateCache.put('app/modules/roleGroup/roleGroupDetail.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <h5 class=\"modal-title\" id=\"modal-title\">User Detail</h5>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-12\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Role Group :</label><label class=\"col-sm-8\">{{ model.title }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Description :</label><label class=\"col-sm-8\">{{ model.description }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Created Date :</label><label class=\"col-sm-8\">{{ model.createdDate | date: 'dd/MM/yyyy' }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"close()\">Back</button>\r" +
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
    "                    <div class=\"card-title\">Add RoleGroup</div>\r" +
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
    "                            <div class=\"col-md-12\"><button class=\"btn btn-success\"\r" +
    "\n" +
    "                                    id=\"saveButton\">Add RoleGroup</button>\r" +
    "\n" +
    "                                    <button class=\"btn btn-default ml-1\" ui-sref=\"app.roleGroupList\">Back</button> \r" +
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


  $templateCache.put('app/modules/sow/sow.html',
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
    "                    <div class=\"card-title\">List SOW</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-6\">\r" +
    "\n" +
    "                            <button id=\"addButton\" class=\"btn btn-success\" ui-sref=\"app.sowEntry({ id: '0'})\">Add Task</button>\r" +
    "\n" +
    "                            <button id=\"importButton\" class=\"btn btn-success\" ui-sref=\"app.sowImportExcel({})\">Import & Download Template</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\r" +
    "\n" +
    "                            <button class=\"btn btn-default\" id=\"downloadButtonViewall\">Download Tracker</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"sow\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>SOW</th>\r" +
    "\n" +
    "                                        <th>Site Name</th>\r" +
    "\n" +
    "                                        <th>Assign Date</th>\r" +
    "\n" +
    "                                        <th>Status</th>\r" +
    "\n" +
    "                                        <th>Action</th>\r" +
    "\n" +
    "                                        <th>Approval</th>\r" +
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


  $templateCache.put('app/modules/sow/sowDetail.html',
    "<!DOCTYPE html>\r" +
    "\n" +
    "<html>\r" +
    "\n" +
    "<head>\r" +
    "\n" +
    "    <meta charset=\"utf-8\" />\r" +
    "\n" +
    "    <title></title>\r" +
    "\n" +
    "</head>\r" +
    "\n" +
    "<body>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</body>\r" +
    "\n" +
    "</html>"
  );


  $templateCache.put('app/modules/sowApproval/sowApproval.html',
    "<div class=\"animated fadeIn\">\r" +
    "\n" +
    "    <form class=\"form-horizontal\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <div class=\"card\">\r" +
    "\n" +
    "                            <div class=\"card-title\">SOW Detail</div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-md-6\">\r" +
    "\n" +
    "                                    <label class=\"control-label col-sm-2\">SOW:</label>\r" +
    "\n" +
    "                                    <label class=\"control-label col-sm-6\" id=\"sowName\" name=\"sowName\">{{vm.model.sowName}}</label>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"col-md-6\">\r" +
    "\n" +
    "                                    <label class=\"control-label col-sm-3\">Date :</label>\r" +
    "\n" +
    "                                    <label class=\"control-label col-sm-6\" id=\"tglMulai\" name=\"tglMulai\">{{vm.model.tglMulai | date: 'dd-MM-yyyy'}}</label>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <!--Site Info-->\r" +
    "\n" +
    "                                <div class=\"col-md-6\">\r" +
    "\n" +
    "                                    <div class=\"card-title\">Site Info</div>\r" +
    "\n" +
    "                                    <!--<div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Customer Site</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"customerSite\" name=\"customerSite\">{{vm.model.btsInfo.customerSite}}</label>\r" +
    "\n" +
    "                                    </div>-->\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Tower ID</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"towerId\" name=\"towerId\">{{vm.model.btsInfo.towerId}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Cell ID</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"cellId\" name=\"cellId\">{{vm.model.btsInfo.cellId}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">BTS Name</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"name\" name=\"name\">{{vm.model.btsInfo.name}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Tower Provider</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"operatorTitle\" name=\"operatorTitle\">{{vm.model.btsInfo.operatorTitle}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Longitude</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"longitude\" name=\"longitude\">{{vm.model.btsInfo.longitude}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Latitude</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"latitude\" name=\"latitude\">{{vm.model.btsInfo.latitude}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Area</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"areaTitle\" name=\"areaTitle\">{{vm.model.btsInfo.areaTitle}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <!--<div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Kota</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"kotaTitle\" name=\"kotaTitle\">{{vm.model.btsInfo.kotaTitle}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Cabang</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"cabangTitle\" name=\"cabangTitle\">{{vm.model.btsInfo.cabangTitle}}</label>\r" +
    "\n" +
    "                                    </div>-->\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Address</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"alamat\" name=\"alamat\">{{vm.model.btsInfo.alamat}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <!--Assigned User-->\r" +
    "\n" +
    "                                <div class=\"col-md-6\">\r" +
    "\n" +
    "                                    <div class=\"card-title\">Assigned User</div>\r" +
    "\n" +
    "                                    <div class=\"row form-group\">\r" +
    "\n" +
    "                                        <table id=\"sowAssign\">\r" +
    "\n" +
    "                                            <thead>\r" +
    "\n" +
    "                                                <tr>\r" +
    "\n" +
    "                                                    <th hidden>SOWAssign_PK</th>\r" +
    "\n" +
    "                                                    <th hidden>SOW FK</th>\r" +
    "\n" +
    "                                                    <th hidden>Jabatan FK</th>\r" +
    "\n" +
    "                                                    <th>Jabatan</th>\r" +
    "\n" +
    "                                                    <th>User</th>\r" +
    "\n" +
    "                                                </tr>\r" +
    "\n" +
    "                                            </thead>\r" +
    "\n" +
    "                                            <tbody>\r" +
    "\n" +
    "                                                <tr ng-repeat=\"sowAssign in vm.model.sowAssigns\">\r" +
    "\n" +
    "                                                    <td hidden>\r" +
    "\n" +
    "                                                        <input type=\"text\" id=\"sowAssign_pk\" name=\"sowAssign_pk\" ng-model=\"sowAssign.sowAssign_pk\" disabled />\r" +
    "\n" +
    "                                                    </td>\r" +
    "\n" +
    "                                                    <td class=\"text-center\" hidden>\r" +
    "\n" +
    "                                                        <input type=\"text\" id=\"sow_fk\" name=\"sow_fk\" ng-model=\"sowAssign.sow_fk\" disabled />\r" +
    "\n" +
    "                                                    </td>\r" +
    "\n" +
    "                                                    <td class=\"text-left\" hidden>\r" +
    "\n" +
    "                                                        <input type=\"text\" id=\"kategoriJabatan_fk\" name=\"kategoriJabatan_fk\" class=\"form-control\" ng-model=\"sowAssign.kategoriJabatan_fk\" disabled />\r" +
    "\n" +
    "                                                    </td>\r" +
    "\n" +
    "                                                    <td class=\"text-left\" style=\"width:200px\">\r" +
    "\n" +
    "                                                        <label id=\"kategoriJabatanTitle\" name=\"kategoriJabatanTitle\">{{sowAssign.kategoriJabatanTitle}}</label>\r" +
    "\n" +
    "                                                    </td>\r" +
    "\n" +
    "                                                    <td>\r" +
    "\n" +
    "                                                        <label id=\"userName\" name=\"userName\"> {{sowAssign.userName}}</label>\r" +
    "\n" +
    "                                                    </td>\r" +
    "\n" +
    "                                                </tr>\r" +
    "\n" +
    "                                            </tbody>\r" +
    "\n" +
    "                                        </table>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-md-12\">\r" +
    "\n" +
    "                                    <button class=\"btn btn-default\" ui-sref=\"app.sowList\">Back</button>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <div class=\"card\">\r" +
    "\n" +
    "                            <div class=\"card-title\">Track Location</div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-md-6\">\r" +
    "\n" +
    "                                    <div class=\"row form-group\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Job Type:</label>\r" +
    "\n" +
    "                                        <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                            <select id=\"tipePekerjaan_fk1\" name=\"tipePekerjaan_fk1\" class=\"form-control\" ng-model=\"vm.model.sowTracks[0].tipePekerjaan_fk + ''\" disabled>\r" +
    "\n" +
    "                                                <option value=\"0\">None</option>\r" +
    "\n" +
    "                                                <!--<option value=\"1\">SSO</option>-->\r" +
    "\n" +
    "                                                <option value=\"2\">SSV</option>\r" +
    "\n" +
    "                                            </select>\r" +
    "\n" +
    "                                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <textarea ng-model=\"vm.model.sowTracks[0].route\" hidden></textarea>\r" +
    "\n" +
    "                                    <div id=\"map1\" style=\"border:1px solid gray; height:500px\">\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"col-md-6\">\r" +
    "\n" +
    "                                    <div class=\"row form-group\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Job Type:</label>\r" +
    "\n" +
    "                                        <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                            <select id=\"tipePekerjaan_fk2\" name=\"tipePekerjaan_fk2\" class=\"form-control\" ng-model=\"vm.model.sowTracks[1].tipePekerjaan_fk + ''\" disabled>\r" +
    "\n" +
    "                                                <option value=\"0\">None</option>\r" +
    "\n" +
    "                                                <option value=\"1\">SSO</option>\r" +
    "\n" +
    "                                                <!--<option value=\"2\">SSV</option>-->\r" +
    "\n" +
    "                                            </select>\r" +
    "\n" +
    "                                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <textarea ng-model=\"vm.model.sowTracks[1].route\" hidden></textarea>\r" +
    "\n" +
    "                                    <div id=\"map2\" style=\"border:1px solid gray; height:500px\">\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <div class=\"card\">\r" +
    "\n" +
    "                            <div class=\"card-title\">List Cost</div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-md-12\">\r" +
    "\n" +
    "                                    <table id=\"cost\">\r" +
    "\n" +
    "                                        <thead>\r" +
    "\n" +
    "                                            <tr>\r" +
    "\n" +
    "                                                <th>No</th>\r" +
    "\n" +
    "                                                <th>Category</th>\r" +
    "\n" +
    "                                                <th>Nominal</th>\r" +
    "\n" +
    "                                                <th>Description</th>\r" +
    "\n" +
    "                                                <th>Input Date</th>\r" +
    "\n" +
    "                                                <th>Action</th>\r" +
    "\n" +
    "                                            </tr>\r" +
    "\n" +
    "                                        </thead>\r" +
    "\n" +
    "                                    </table>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"row form-group\">\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <div class=\"card\">\r" +
    "\n" +
    "                            <div class=\"col-md-12\">\r" +
    "\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.sowList\">Back</button>\r" +
    "\n" +
    "                                <!--<button class=\"btn btn-success float-right\" id=\"approveButton\" ng-show=\"vm.model.sowResults.length>=3 || vm.model.statusSow_fk != 3\">Approve</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-danger float-right\" id=\"rejectButton\" ng-show=\"vm.model.sowResults.length>=3 || vm.model.statusSow_fk != 4\">Reject</button>-->\r" +
    "\n" +
    "                                <!--<button class=\"btn btn-success float-right\" id=\"approveButton\" ng-hide=\"vm.model.statusSow_fk == 3 || vm.model.statusSow_fk == 4\">Approve</button>-->\r" +
    "\n" +
    "                                <button class=\"btn btn-danger float-right\" id=\"approveButton\" ng-hide=\"vm.model.statusSow_fk == 4\">Close</button>\r" +
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


  $templateCache.put('app/modules/sowEntry/sowEntry.html',
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
    "                    <div class=\"card-title\">Add SOW</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-6\">\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">PMOUniq:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                    <input type=\"text\" id=\"pmouniq\" name=\"pmouniq\" class=\"form-control\" ng-model=\"vm.model.pmouniq\">\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">SOW (PO):</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                    <select id=\"sowName\" name=\"sowName\" class=\"form-control input-lg\" ng-model=\"vm.model.sowName\" required>\r" +
    "\n" +
    "                                        <option ng-repeat=\"x in vm.formData.sownames\" ng-value=\"x.sowNames\">{{x.sowNames}}</option>\r" +
    "\n" +
    "                                    </select>\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Project Name:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                    <select id=\"project_fk\" name=\"project_fk\" class=\"form-control input-lg\" ng-model=\"vm.model.project_fk\" required>\r" +
    "\n" +
    "                                        <option ng-repeat=\"x in vm.formData.projects\" ng-value=\"x.project_pk\">{{x.operatorTitle + ' - ' + x.vendorTitle + ' - ' + x.deliveryAreaTitle}}</option>\r" +
    "\n" +
    "                                    </select>\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Site Name:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                    <select id=\"bts_fk\" name=\"bts_fk\" class=\"form-control input-lg\" ng-model=\"vm.model.bts_fk\" required>\r" +
    "\n" +
    "                                        <option ng-repeat=\"x in vm.formData.btses\" ng-value=\"x.bts_pk\">{{x.name}}</option>\r" +
    "\n" +
    "                                    </select>\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">CO date :</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                    <input type=\"text\" id=\"codate\" name=\"codate\" ng-model=\"vm.model.codate\" class=\"form-control\" date-time-picker options=\"{ format: 'DD-MM-YYYY' }\" required />\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Assignment Date:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                    <input type=\"text\" id=\"tglMulai\" name=\"tglMulai\" ng-model=\"vm.model.tglMulai\" class=\"form-control\" date-time-picker options=\"{ format: 'DD-MM-YYYY' }\" required />\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Technology:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                    <select id=\"technology_fk\" name=\"technology_fk\" class=\"form-control input-lg\" ng-model=\"vm.model.technology_fk\" required>\r" +
    "\n" +
    "                                        <option ng-repeat=\"x in vm.formData.technologies\" ng-value=\"x.technology_pk\">{{x.title}}</option>\r" +
    "\n" +
    "                                    </select>\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">DUID:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                    <input type=\"text\" id=\"duid\" name=\"duid\" class=\"form-control\" ng-model=\"vm.model.duid\" placeholder=\"DUID\" required>\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">LV Date:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                    <input type=\"text\" id=\"lvdate\" name=\"lvdate\" ng-model=\"vm.model.lvdate\" class=\"form-control\" date-time-picker options=\"{ format: 'DD-MM-YYYY' }\" />\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Accepted Date:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                    <input type=\"text\" id=\"accdate\" name=\"accdate\" ng-model=\"vm.model.accdate\" class=\"form-control\" date-time-picker options=\"{ format: 'DD-MM-YYYY' }\" />\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <div class=\"card-title\">Assign</div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6\">\r" +
    "\n" +
    "                            <table id=\"sowAssign\" class=\"table table-sm\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th hidden>SOWAssign_PK</th>\r" +
    "\n" +
    "                                        <th hidden>SOW FK</th>\r" +
    "\n" +
    "                                        <th hidden>Jabatan FK</th>\r" +
    "\n" +
    "                                        <th>Jabatan</th>\r" +
    "\n" +
    "                                        <th>User</th>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                    </tr>\r" +
    "\n" +
    "                                </thead>\r" +
    "\n" +
    "                                <tbody>\r" +
    "\n" +
    "                                    <tr ng-repeat=\"sowAssign in vm.model.sowAssigns\">\r" +
    "\n" +
    "                                        <td hidden>\r" +
    "\n" +
    "                                            <input type=\"text\" id=\"sowAssign_pk\" name=\"sowAssign_pk\" ng-model=\"sowAssign.sowAssign_pk\" disabled />\r" +
    "\n" +
    "                                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                        </td>\r" +
    "\n" +
    "                                        <td class=\"text-center\" hidden>\r" +
    "\n" +
    "                                            <input type=\"text\" id=\"sow_fk\" name=\"sow_fk\" ng-model=\"sowAssign.sow_fk\" disabled />\r" +
    "\n" +
    "                                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                        </td>\r" +
    "\n" +
    "                                        <td class=\"text-left\" hidden>\r" +
    "\n" +
    "                                            <input type=\"text\" id=\"kategoriJabatan_fk\" name=\"kategoriJabatan_fk\" class=\"form-control\" ng-model=\"sowAssign.kategoriJabatan_fk\" disabled />\r" +
    "\n" +
    "                                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                        </td>\r" +
    "\n" +
    "                                        <td class=\"text-left\">\r" +
    "\n" +
    "                                            <input type=\"text\" id=\"kategoriJabatanTitle\" name=\"kategoriJabatanTitle\" class=\"form-control\" ng-model=\"sowAssign.kategoriJabatanTitle\" disabled />\r" +
    "\n" +
    "                                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                        </td>\r" +
    "\n" +
    "                                        <td>\r" +
    "\n" +
    "                                            <ui-select id=\"user_fk\" name=\"user_fk\" ng-model=\"sowAssign.user_fk\" size=\"0\" theme=\"select2\" ng-disabled=\"sowAssign.createdBy\" title=\"Find user\"\r" +
    "\n" +
    "                                                       required style=\"width:200px\">\r" +
    "\n" +
    "                                                <ui-select-match placeholder=\"Find user\">{{$select.selected.name}}</ui-select-match>\r" +
    "\n" +
    "                                                <ui-select-choices refresh=\"vm.getUsers(sowAssign.kategoriJabatan_fk, $select.search)\" refresh-delay=\"0\" repeat=\"user.user_pk as user in vm.formData.users\">\r" +
    "\n" +
    "                                                    <div>\r" +
    "\n" +
    "                                                        <strong>\r" +
    "\n" +
    "                                                            {{user.name }}\r" +
    "\n" +
    "                                                        </strong>\r" +
    "\n" +
    "                                                    </div>\r" +
    "\n" +
    "                                                    <div>\r" +
    "\n" +
    "                                                        {{\"Username: \" + user.username}}\r" +
    "\n" +
    "                                                    </div>\r" +
    "\n" +
    "                                                    <div style=\"margin:2px; border-bottom:1px solid #ccc\">\r" +
    "\n" +
    "                                                        {{\"Email: \" + user.email}}\r" +
    "\n" +
    "                                                    </div>\r" +
    "\n" +
    "                                                </ui-select-choices>\r" +
    "\n" +
    "                                            </ui-select>\r" +
    "\n" +
    "                                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                        </td>\r" +
    "\n" +
    "                                    </tr>\r" +
    "\n" +
    "                                </tbody>\r" +
    "\n" +
    "                            </table>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row form-group\">\r" +
    "\n" +
    "                        <div class=\"col-md-8\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" id=\"saveButton\">Save</button>\r" +
    "\n" +
    "                            <button class=\"btn btn-default ml-1\" ui-sref=\"app.sowList\">Back</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"card\">\r" +
    "\n" +
    "                    <div class=\"card-title\">Track / Route</div>\r" +
    "\n" +
    "                    <div ng-repeat=\"sowTrack in vm.model.sowTracks\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-6\">\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Job Type:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                    <select id=\"tipePekerjaan_fk2\" name=\"tipePekerjaan_fk2\" class=\"form-control\" ng-model=\"vm.model.sowTracks[0].tipePekerjaan_fk\" required>\r" +
    "\n" +
    "                                        <option value=\"0\">None</option>\r" +
    "\n" +
    "                                        <option value=\"1\">SSV</option>\r" +
    "\n" +
    "                                    </select>\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <div class=\"col-sm-12 input-group\">\r" +
    "\n" +
    "                                    <div class=\"input-group-prepend\">\r" +
    "\n" +
    "                                        <span class=\"input-group-text\" id=\"inputGroupFileAddon01\">Upload</span>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"custom-file\">\r" +
    "\n" +
    "                                        <input type=\"file\" class=\"custom-file-input\" id=\"kmlFile1\" aria-describedby=\"inputGroupFileAddon01\">\r" +
    "\n" +
    "                                        <label id=\"fileName1\" class=\"custom-file-label\" for=\"filePhoto\">Choose file</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <textarea ng-model=\"vm.model.sowTracks[0].route\" hidden></textarea>\r" +
    "\n" +
    "                            <div id=\"map1\" style=\"border:1px solid gray; height:500px\">\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"col-md-6\">\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Job Type:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                    <select id=\"tipePekerjaan_fk1\" name=\"tipePekerjaan_fk1\" class=\"form-control\" ng-model=\"vm.model.sowTracks[1].tipePekerjaan_fk\" required>\r" +
    "\n" +
    "                                        <option value=\"0\">None</option>\r" +
    "\n" +
    "                                        <option value=\"2\">SSO</option>\r" +
    "\n" +
    "                                    </select>\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <div class=\"col-sm-12 input-group\">\r" +
    "\n" +
    "                                    <div class=\"input-group-prepend\">\r" +
    "\n" +
    "                                        <span class=\"input-group-text\" id=\"inputGroupFileAddon01\">Upload</span>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"custom-file\">\r" +
    "\n" +
    "                                        <input type=\"file\" class=\"custom-file-input\" id=\"kmlFile2\" aria-describedby=\"inputGroupFileAddon01\">\r" +
    "\n" +
    "                                        <label id=\"fileName2\" class=\"custom-file-label\" for=\"filePhoto\">Choose file</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <textarea ng-model=\"vm.model.sowTracks[1].route\" hidden></textarea>\r" +
    "\n" +
    "                            <div id=\"map2\" style=\"border:1px solid gray; height:500px\">\r" +
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


  $templateCache.put('app/modules/sowImportExcel/sowImportExcel.html',
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
    "                    <div class=\"card-title\">Import SOW</div>\r" +
    "\n" +
    "                    <div class=\"row form-group\">\r" +
    "\n" +
    "                        <div class=\"col-sm-6 input-group\">\r" +
    "\n" +
    "                            <div class=\"input-group-prepend\">\r" +
    "\n" +
    "                                <span class=\"input-group-text\" id=\"inputGroupFileAddon01\">Upload</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"custom-file\">\r" +
    "\n" +
    "                                <input type=\"file\" class=\"custom-file-input\" id=\"file\" aria-describedby=\"inputGroupFileAddon01\">\r" +
    "\n" +
    "                                <label id=\"fileName\" class=\"custom-file-label\" for=\"file\">Choose file</label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row form-group\">\r" +
    "\n" +
    "                        <div class=\"col-md-6\">\r" +
    "\n" +
    "                            <button class=\"btn btn-default\" ui-sref=\"app.sowList\">Back</button>\r" +
    "\n" +
    "                            <button class=\"btn btn-default\" id=\"downloadButton\">Template</button>\r" +
    "\n" +
    "                            <button class=\"btn btn-success float-right\" id=\"uploadButton\">Submit</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"card\">\r" +
    "\n" +
    "                    <div class=\"card-title\">Upload result</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table class=\"table table-striped\" id=\"sow\" style=\"line-height: 0;\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No.</th>\r" +
    "\n" +
    "                                        <th>Project</th>\r" +
    "\n" +
    "                                        <th>DUID</th>\r" +
    "\n" +
    "                                        <th>SiteName</th>\r" +
    "\n" +
    "                                        <th>SOWName</th>\r" +
    "\n" +
    "                                        <th>CODate</th>\r" +
    "\n" +
    "                                        <th>LVDate</th>\r" +
    "\n" +
    "                                        <th>AcceptedDate</th>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                        <th class=\"text-center\">Result</th>\r" +
    "\n" +
    "                                        <th>Reason</th>\r" +
    "\n" +
    "                                    </tr>\r" +
    "\n" +
    "                                    <tr ng-repeat=\"sow in vm.uploadResults\">\r" +
    "\n" +
    "                                        <td><label>{{$index + 1}}</label></td>\r" +
    "\n" +
    "                                        <td><label>{{sow.model.projectname}}</label></td>\r" +
    "\n" +
    "                                        <td><label>{{sow.model.duid}}</label></td>\r" +
    "\n" +
    "                                        <td><label>{{sow.model.btsName}}</label></td>\r" +
    "\n" +
    "                                        <td><label>{{sow.model.sowName}}</label></td>\r" +
    "\n" +
    "                                        <td><label>{{sow.model.codate}}</label></td>\r" +
    "\n" +
    "                                        <td><label>{{sow.model.lvdate}}</label></td>\r" +
    "\n" +
    "                                        <td><label>{{sow.model.accdate}}</label></td>\r" +
    "\n" +
    "                                        <td class=\"text-center\">\r" +
    "\n" +
    "                                            <div><span><i ng-show=\"!sow.success\" class=\"fa fa-times\"></i></span></div>\r" +
    "\n" +
    "                                            <div><span><i ng-show=\"sow.success\" class=\"fa fa-check\"></i></span></div>\r" +
    "\n" +
    "                                        </td>\r" +
    "\n" +
    "                                        <td><label>{{sow.validationResult.errors[0] == undefined ? '' : sow.validationResult.errors[0].propertyName + ': ' +  sow.validationResult.errors[0].message}}</label></td>\r" +
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


  $templateCache.put('app/modules/sowInfo/costEntryModal/costEntryModal.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <h5 class=\"modal-title\">Add Cost</h5>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"row form-group\">\r" +
    "\n" +
    "        <label class=\"control-label col-sm-2\">Tanggal :</label>\r" +
    "\n" +
    "        <div class=\"col-sm-6\">\r" +
    "\n" +
    "            <input type=\"text\" id=\"tanggal\" name=\"tanggal\" ng-model=\"vm.model.tanggal\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" required />\r" +
    "\n" +
    "            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"row form-group\">\r" +
    "\n" +
    "        <label class=\"control-label col-sm-2\">Kategori:</label>\r" +
    "\n" +
    "        <div class=\"col-sm-6\">\r" +
    "\n" +
    "            <select id=\"kategoriCost_fk\" name=\"kategoriCost_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.kategoriCost_fk\" required>\r" +
    "\n" +
    "                <option ng-repeat=\"x in vm.formData.costKategoris\" ng-value=\"x.costKategori_pk\">{{x.title}}</option>\r" +
    "\n" +
    "            </select>\r" +
    "\n" +
    "            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"row form-group\">\r" +
    "\n" +
    "        <label class=\"control-label col-sm-2\">Nominal:</label>\r" +
    "\n" +
    "        <div class=\"col-sm-6\">\r" +
    "\n" +
    "            <input type=\"Number\" id=\"nominal\" name=\"nominal\" class=\"form-control\" ng-model=\"vm.model.nominal\" placeholder=\"SOW Name\">\r" +
    "\n" +
    "            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"row form-group\">\r" +
    "\n" +
    "        <label class=\"control-label col-sm-2\">Description:</label>\r" +
    "\n" +
    "        <div class=\"col-sm-6\">\r" +
    "\n" +
    "            <textarea type=\"text\" class=\"form-control\" id=\"deskripsi\" name=\"deskripsi\" ng-model=\"vm.model.deskripsi\" placeholder=\"Description\"></textarea>\r" +
    "\n" +
    "            <div class=\"invalid-feedback\"></div>\r" +
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


  $templateCache.put('app/modules/sowInfo/sowInfo.html',
    "<div class=\"animated fadeIn\">\r" +
    "\n" +
    "    <form class=\"form-horizontal\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <div class=\"card\">\r" +
    "\n" +
    "                            <div class=\"card-title\">SOW Detail</div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-md-6\">\r" +
    "\n" +
    "                                    <label class=\"control-label col-sm-2\">SOW:</label>\r" +
    "\n" +
    "                                    <label class=\"control-label col-sm-6\" id=\"sowName\" name=\"sowName\">{{vm.model.sowName}}</label>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                                <div class=\"col-md-6\">\r" +
    "\n" +
    "                                    <label class=\"control-label col-sm-3\">Assign Date:</label>\r" +
    "\n" +
    "                                    <label class=\"control-label col-sm-6\" id=\"tglMulai\" name=\"tglMulai\">{{vm.model.tglMulai | date: 'dd-MM-yyyy'}}</label>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <!--Site Info-->\r" +
    "\n" +
    "                                <div class=\"col-md-6\">\r" +
    "\n" +
    "                                    <div class=\"card-title\">Site Info</div>\r" +
    "\n" +
    "                                    <!--<div class=\"row\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-3\">Customer Site</label>\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-6\" id=\"customerSite\" name=\"customerSite\">{{vm.model.btsInfo.customerSite}}</label>\r" +
    "\n" +
    "                        </div>-->\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Site ID PO</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"towerId\" name=\"towerId\">{{vm.model.btsInfo.towerId}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Cell ID</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"cellId\" name=\"cellId\">{{vm.model.btsInfo.cellId}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Site Name</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"name\" name=\"name\">{{vm.model.btsInfo.name}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Tower Provider</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"operatorTitle\" name=\"operatorTitle\">{{vm.model.btsInfo.operatorTitle}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Longitude</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"longitude\" name=\"longitude\">{{vm.model.btsInfo.longitude}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Latitude</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"latitude\" name=\"latitude\">{{vm.model.btsInfo.latitude}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Area</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"areaTitle\" name=\"areaTitle\">{{vm.model.btsInfo.areaTitle}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <!--<div class=\"row\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-3\">Kota</label>\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-6\" id=\"kotaTitle\" name=\"kotaTitle\">{{vm.model.btsInfo.kotaTitle}}</label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-3\">Cabang</label>\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-6\" id=\"cabangTitle\" name=\"cabangTitle\">{{vm.model.btsInfo.cabangTitle}}</label>\r" +
    "\n" +
    "                        </div>-->\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Address</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"alamat\" name=\"alamat\">{{vm.model.btsInfo.alamat}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <!--Assigned User-->\r" +
    "\n" +
    "                                <div class=\"col-md-6\">\r" +
    "\n" +
    "                                    <div class=\"card-title\">Assigned User</div>\r" +
    "\n" +
    "                                    <div class=\"row form-group\">\r" +
    "\n" +
    "                                        <table id=\"sowAssign\">\r" +
    "\n" +
    "                                            <thead>\r" +
    "\n" +
    "                                                <tr>\r" +
    "\n" +
    "                                                    <th hidden>SOWAssign_PK</th>\r" +
    "\n" +
    "                                                    <th hidden>SOW FK</th>\r" +
    "\n" +
    "                                                    <th hidden>Jabatan FK</th>\r" +
    "\n" +
    "                                                    <th>Jabatan</th>\r" +
    "\n" +
    "                                                    <th>User</th>\r" +
    "\n" +
    "                                                </tr>\r" +
    "\n" +
    "                                            </thead>\r" +
    "\n" +
    "                                            <tbody>\r" +
    "\n" +
    "                                                <tr ng-repeat=\"sowAssign in vm.model.sowAssigns\">\r" +
    "\n" +
    "                                                    <td hidden>\r" +
    "\n" +
    "                                                        <input type=\"text\" id=\"sowAssign_pk\" name=\"sowAssign_pk\" ng-model=\"sowAssign.sowAssign_pk\" disabled />\r" +
    "\n" +
    "                                                    </td>\r" +
    "\n" +
    "                                                    <td class=\"text-center\" hidden>\r" +
    "\n" +
    "                                                        <input type=\"text\" id=\"sow_fk\" name=\"sow_fk\" ng-model=\"sowAssign.sow_fk\" disabled />\r" +
    "\n" +
    "                                                    </td>\r" +
    "\n" +
    "                                                    <td class=\"text-left\" hidden>\r" +
    "\n" +
    "                                                        <input type=\"text\" id=\"kategoriJabatan_fk\" name=\"kategoriJabatan_fk\" class=\"form-control\" ng-model=\"sowAssign.kategoriJabatan_fk\" disabled />\r" +
    "\n" +
    "                                                    </td>\r" +
    "\n" +
    "                                                    <td class=\"text-left\" style=\"width:200px\">\r" +
    "\n" +
    "                                                        <label id=\"kategoriJabatanTitle\" name=\"kategoriJabatanTitle\">{{sowAssign.kategoriJabatanTitle}}</label>\r" +
    "\n" +
    "                                                    </td>\r" +
    "\n" +
    "                                                    <td>\r" +
    "\n" +
    "                                                        <label id=\"userName\" name=\"userName\"> {{sowAssign.userName}}</label>\r" +
    "\n" +
    "                                                    </td>\r" +
    "\n" +
    "                                                </tr>\r" +
    "\n" +
    "                                            </tbody>\r" +
    "\n" +
    "                                        </table>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-md-12\">\r" +
    "\n" +
    "                                    <button class=\"btn btn-default\" ui-sref=\"app.sowList\">Back</button>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <div class=\"card\">\r" +
    "\n" +
    "                            <div class=\"card-title\">Task Link</div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-md-12\">\r" +
    "\n" +
    "                                    <table id=\"link\">\r" +
    "\n" +
    "                                        <thead>\r" +
    "\n" +
    "                                            <tr>\r" +
    "\n" +
    "                                                <th>Id</th>\r" +
    "\n" +
    "                                                <th>Position</th>\r" +
    "\n" +
    "                                                <th>Name</th>\r" +
    "\n" +
    "                                                <th>Link / SSO</th>\r" +
    "\n" +
    "                                                <th>SSV</th>\r" +
    "\n" +
    "                                            </tr>\r" +
    "\n" +
    "                                        </thead>\r" +
    "\n" +
    "                                    </table>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <div class=\"card\">\r" +
    "\n" +
    "                            <div class=\"card-title\">Issue List</div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-md-12\">\r" +
    "\n" +
    "                                    <table id=\"sowissue\">\r" +
    "\n" +
    "                                        <thead>\r" +
    "\n" +
    "                                            <tr>\r" +
    "\n" +
    "                                                <th>Id</th>\r" +
    "\n" +
    "                                                <th>Position</th>\r" +
    "\n" +
    "                                                <th>Issue</th>\r" +
    "\n" +
    "                                            </tr>\r" +
    "\n" +
    "                                        </thead>\r" +
    "\n" +
    "                                    </table>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <div class=\"card\">\r" +
    "\n" +
    "                            <div class=\"card-title\">Track Location</div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-md-6\">\r" +
    "\n" +
    "                                    <div class=\"row form-group\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Job Type:</label>\r" +
    "\n" +
    "                                        <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                            <select id=\"tipePekerjaan_fk1\" name=\"tipePekerjaan_fk1\" class=\"form-control\" ng-model=\"vm.model.sowTracks[0].tipePekerjaan_fk + ''\" disabled>\r" +
    "\n" +
    "                                                <option value=\"0\">None</option>\r" +
    "\n" +
    "                                                <option value=\"1\">SSO</option>\r" +
    "\n" +
    "                                                <option value=\"2\">SSV</option>\r" +
    "\n" +
    "                                            </select>\r" +
    "\n" +
    "                                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <textarea ng-model=\"vm.model.sowTracks[0].route\" hidden></textarea>\r" +
    "\n" +
    "                                    <div id=\"map1\" style=\"border:1px solid gray; height:500px\">\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                                <div class=\"col-md-6\">\r" +
    "\n" +
    "                                    <div class=\"row form-group\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Job Type:</label>\r" +
    "\n" +
    "                                        <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                            <select id=\"tipePekerjaan_fk2\" name=\"tipePekerjaan_fk2\" class=\"form-control\" ng-model=\"vm.model.sowTracks[1].tipePekerjaan_fk + ''\" disabled>\r" +
    "\n" +
    "                                                <option value=\"0\">None</option>\r" +
    "\n" +
    "                                                <option value=\"1\">SSO</option>\r" +
    "\n" +
    "                                                <option value=\"2\">SSV</option>\r" +
    "\n" +
    "                                            </select>\r" +
    "\n" +
    "                                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                    <textarea ng-model=\"vm.model.sowTracks[1].route\" hidden></textarea>\r" +
    "\n" +
    "                                    <div id=\"map2\" style=\"border:1px solid gray; height:500px\">\r" +
    "\n" +
    "                                    </div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <div class=\"card\">\r" +
    "\n" +
    "                            <div class=\"card-title\">List Cost</div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"form-group col-md-12\">\r" +
    "\n" +
    "                                    <button id=\"addCost\" class=\"btn btn-success\">Add Cost</button>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <div class=\"col-md-12\">\r" +
    "\n" +
    "                                    <table id=\"cost\">\r" +
    "\n" +
    "                                        <thead>\r" +
    "\n" +
    "                                            <tr>\r" +
    "\n" +
    "                                                <th>No</th>\r" +
    "\n" +
    "                                                <th>Category</th>\r" +
    "\n" +
    "                                                <th>Input Date</th>\r" +
    "\n" +
    "                                                <th>Nominal</th>\r" +
    "\n" +
    "                                                <th>Description</th>\r" +
    "\n" +
    "                                                <th>Action</th>\r" +
    "\n" +
    "                                            </tr>\r" +
    "\n" +
    "                                        </thead>\r" +
    "\n" +
    "                                    </table>\r" +
    "\n" +
    "                                </div>\r" +
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


  $templateCache.put('app/modules/technology/technology.html',
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
    "                    <div class=\"card-title\">List Technology</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-6\">\r" +
    "\n" +
    "                            <button id=\"addButton\" class=\"btn btn-success\" ui-sref=\"app.technologyEntry({ id: '0'})\">Add Technology</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"technology\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Title</th>\r" +
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


  $templateCache.put('app/modules/technologyEntry/technologyEntry.html',
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
    "                    <div class=\"card-title\">Add Technology</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Technology Name:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <input type=\"text\" id=\"title\" name=\"title\" class=\"form-control\" ng-model=\"vm.model.title\" placeholder=\"Technology Name\">\r" +
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
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Save</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-default ml-1\" ui-sref=\"app.technologyList\">Back</button>\r" +
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
    "                        <div class=\"form-group col-md-6\">\r" +
    "\n" +
    "                            <button id=\"addButton\" class=\"btn btn-success\" ui-sref=\"app.userEntry({ id: '0'})\">Add User</button>\r" +
    "\n" +
    "                            <button id=\"importButton\" class=\"btn btn-success\" ui-sref=\"app.userImportExcel({})\">Import & Download Template</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\r" +
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
    "                                        <th>Position</th>\r" +
    "\n" +
    "                                        <!--<th>Role</th>-->\r" +
    "\n" +
    "                                        <th>Phone Number</th>\r" +
    "\n" +
    "                                        <th>E-Mail</th>\r" +
    "\n" +
    "                                        <th>Status</th>\r" +
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
    "</div>\r" +
    "\n"
  );


  $templateCache.put('app/modules/user/userDetail.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <h3 class=\"modal-title\" id=\"modal-title\">User Detail</h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-sm-3 form-group text-center\">\r" +
    "\n" +
    "            <img id=\"photo\" src=\"{{model.filePhotoInBase64 == null ? '/app/assets/images/default-large.png' : model.filePhotoInBase64}}\" style=\"width:150px;margin:0 auto\" class=\"img-fluid\" />\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-9\">\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">User ID :</label><label class=\"col-sm-8\">{{ model.userCode }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Name :</label><label class=\"col-sm-8\">{{ model.name }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Tanggal Lahir :</label><label class=\"col-sm-8\">{{ model.tglLahir | date: 'dd/MM/yyyy' }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Position :</label><label class=\"col-sm-8\">{{ model.kategoriJabatanTitle }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Project :</label><label class=\"col-sm-8\">{{ model.projectName }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Phone :</label><label class=\"col-sm-8\">{{ model.noHP }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Email :</label><label class=\"col-sm-8\">{{ model.email }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Address :</label><label class=\"col-sm-8\">{{ model.address }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Description :</label><label class=\"col-sm-8\">{{ model.description }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Religion :</label><label class=\"col-sm-8\">{{ model.religionName }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Category Contract :</label><label class=\"col-sm-8\">{{ model.categoryContractName }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Gender :</label><label class=\"col-sm-8\">{{ model.genderName }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Marital Status :</label><label class=\"col-sm-8\">{{ model.maritalStatusName }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">NPWP :</label><label class=\"col-sm-8\">{{ model.npwp }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">BPJS :</label><label class=\"col-sm-8\">{{ model.bpjs }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Join Date :</label><label class=\"col-sm-8\">{{ model.joinDate | date: 'dd/MM/yyyy' }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">End Date :</label><label class=\"col-sm-8\">{{ model.endDate | date: 'dd/MM/yyyy' }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"close()\">Back</button>\r" +
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
    "                    <div class=\"card-title\">Add User</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"row col-sm-6 form-group\">\r" +
    "\n" +
    "                        <img id=\"photo\" src=\"/app/assets/images/default.png\" class=\"img-center img-fluid\" />\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row form-group\">\r" +
    "\n" +
    "                        <div class=\"col-sm-6 input-group\">\r" +
    "\n" +
    "                            <div class=\"input-group-prepend\">\r" +
    "\n" +
    "                                <span class=\"input-group-text\" id=\"inputGroupFileAddon01\">Upload</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"custom-file\">\r" +
    "\n" +
    "                                <input type=\"file\" class=\"custom-file-input\" id=\"filePhoto\" aria-describedby=\"inputGroupFileAddon01\">\r" +
    "\n" +
    "                                <label id=\"fileName\" class=\"custom-file-label\" for=\"filePhoto\">Choose file</label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-6\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">User ID:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"userCode\" name=\"userCode\" autocomplete=\"off\" ng-model=\"vm.model.userCode\" placeholder=\"User ID\" disabled>\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Name:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" ng-model=\"vm.model.name\" placeholder=\"Name\">\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Tanggal Lahir :</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                    <input type=\"text\" id=\"tglLahir\" name=\"tglLahir\" ng-model=\"vm.model.tglLahir\" class=\"form-control\" date-time-picker options=\"{ format: 'DD-MM-YYYY' }\" required />\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Position:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                    <select id=\"kategoriJabatan_fk\" name=\"kategoriJabatan_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.kategoriJabatan_fk\" required>\r" +
    "\n" +
    "                                        <option ng-repeat=\"x in vm.formData.kategoriJabatans\" ng-value=\"x.kategoriJabatan_pk\">{{x.title}}</option>\r" +
    "\n" +
    "                                    </select>\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Project:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                    <select id=\"project_fk\" name=\"project_fk\" class=\"form-control input-lg\" ng-model=\"vm.model.project\" required>\r" +
    "\n" +
    "                                        <option ng-repeat=\"x in vm.formData.projects\" ng-value=\"x.project_pk\">{{x.operatorTitle + ' - ' + x.vendorTitle + ' - ' + x.deliveryAreaTitle}}</option>\r" +
    "\n" +
    "                                    </select>\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Phone Number:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"noHP\" name=\"noHP\" ng-model=\"vm.model.noHP\" placeholder=\"Phone Number\">\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Email:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" ng-model=\"vm.model.email\" placeholder=\"Email\">\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Nomor KTP:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"noKTP\" name=\"noKTP\" ng-model=\"vm.model.noKTP\" placeholder=\"Nomor KTP\">\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\" ng-show=\"vm.model.user_pk == 0\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Password:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                    <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" autocomplete=\"off\" ng-model=\"vm.model.password\" placeholder=\"Password\">\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\" ng-show=\"vm.model.user_pk == 0\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Retype Password:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                    <input type=\"password\" class=\"form-control\" id=\"reTypePassword\" name=\"reTypePassword\" autocomplete=\"off\" ng-model=\"vm.model.reTypePassword\" placeholder=\"Retype Password\">\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Address:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\" ng-model=\"vm.model.address\" placeholder=\"Address\">\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Description:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"description\" name=\"description\" ng-model=\"vm.model.description\" placeholder=\"Description\">\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Religion:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                    <select id=\"religion\" name=\"religion\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.religion\" required>\r" +
    "\n" +
    "                                        <option ng-repeat=\"x in vm.formData.religions\" ng-value=\"x.religion_pk\">{{x.name}}</option>\r" +
    "\n" +
    "                                    </select>\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Category Contract:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                    <select id=\"categoryContract\" name=\"categoryContract\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.categoryContract\" required>\r" +
    "\n" +
    "                                        <option ng-repeat=\"x in vm.formData.categoryContracts\" ng-value=\"x.categoryContract_pk\">{{x.name}}</option>\r" +
    "\n" +
    "                                    </select>\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Gender:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                    <select id=\"gender\" name=\"gender\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.gender\" required>\r" +
    "\n" +
    "                                        <option ng-repeat=\"x in vm.formData.genders\" ng-value=\"x.gender_pk\">{{x.name}}</option>\r" +
    "\n" +
    "                                    </select>\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Marital Status:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                    <select id=\"maritalStatus\" name=\"maritalStatus\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.maritalStatus\" required>\r" +
    "\n" +
    "                                        <option ng-repeat=\"x in vm.formData.maritalStatuses\" ng-value=\"x.maritalStatus_pk\">{{x.name}}</option>\r" +
    "\n" +
    "                                    </select>\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">NPWP:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"npwp\" name=\"npwp\" ng-model=\"vm.model.npwp\" placeholder=\"NPWP\">\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">BPJS:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"bpjs\" name=\"bpjs\" ng-model=\"vm.model.bpjs\" placeholder=\"BPJS\">\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Join Date :</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                    <input type=\"text\" id=\"joinDate\" name=\"joinDate\" ng-model=\"vm.model.joinDate\" class=\"form-control\" date-time-picker options=\"{ format: 'DD-MM-YYYY' }\" required />\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">End Date :</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                    <input type=\"text\" id=\"endDate\" name=\"endDate\" ng-model=\"vm.model.endDate\" class=\"form-control\" date-time-picker options=\"{ format: 'DD-MM-YYYY' }\" required />\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Bank Name:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"bankName\" name=\"bankName\" ng-model=\"vm.model.bankName\" placeholder=\"Bank Name\">\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Account Number:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"accountNumber\" name=\"accountNumber\" ng-model=\"vm.model.accountNumber\" placeholder=\"Account Number\">\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <div class=\"row form-group\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Salary:</label>\r" +
    "\n" +
    "                                <div class=\"col-sm-9\">\r" +
    "\n" +
    "                                    <input type=\"number\" class=\"form-control\" id=\"salary\" name=\"salary\" ng-model=\"vm.model.salary\" placeholder=\"Salary\">\r" +
    "\n" +
    "                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <hr />\r" +
    "\n" +
    "                    <div class=\"row form-group\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" id=\"saveButton\">Tambah User</button>\r" +
    "\n" +
    "                            <button class=\"btn btn-default ml-1\" ui-sref=\"app.userList\">Back</button>\r" +
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


  $templateCache.put('app/modules/userHistory/userHistory.html',
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
    "                    <div class=\"card-title\">List User History</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <!--Asset Info-->\r" +
    "\n" +
    "                        <div class=\"col-md-10\">\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-2\">Asset Code</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-6\" id=\"kodeAset\" name=\"userId\">{{kodeAset}}</label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-2\">Category</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-6\" id=\"kategori\" name=\"name\">{{kategori}}</label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-2\">Asset Name</label>\r" +
    "\n" +
    "                                <label class=\"control-label col-sm-6\" id=\"namaAset\" name=\"kategoriJabatanTitle\">{{namaAset}}</label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                    <!--<div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-6\">\r" +
    "\n" +
    "                            <button id=\"addNewButton\" class=\"btn btn-success\">Tambah Aset</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>-->\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"userHistori\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Name</th>\r" +
    "\n" +
    "                                        <th>Position</th>\r" +
    "\n" +
    "                                        <th>Borrow Date</th>\r" +
    "\n" +
    "                                        <th>Return Date</th>\r" +
    "\n" +
    "                                        <th>Information</th>\r" +
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


  $templateCache.put('app/modules/userHistory/userHistoryDetail.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <h3 class=\"modal-title\" id=\"modal-title\">User History Detail</h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-sm-3 form-group text-center\">\r" +
    "\n" +
    "            <img id=\"photo\" src=\"{{model.filePhotoInBase64 == null ? '/app/assets/images/default-large.png' : model.filePhotoInBase64}}\" style=\"width:150px;margin:0 auto\" class=\"img-fluid\" />\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-9\">\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Name :</label><label class=\"col-sm-8\">{{ model.name }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Position :</label><label class=\"col-sm-8\">{{ model.kategoriJabatanTitle }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Phone :</label><label class=\"col-sm-8\">{{ model.noHP }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Email :</label><label class=\"col-sm-8\">{{ model.email }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Address :</label><label class=\"col-sm-8\">{{ model.address }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Description :</label><label class=\"col-sm-8\">{{ model.description }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"close()\">Back</button>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/userImportCsv/userImportCsv.html',
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
    "                    <div class=\"card-title\">Import User</div> \r" +
    "\n" +
    "                    <div class=\"row form-group\">\r" +
    "\n" +
    "                        <div class=\"col-sm-6 input-group\">\r" +
    "\n" +
    "                            <div class=\"input-group-prepend\">\r" +
    "\n" +
    "                                <span class=\"input-group-text\" id=\"inputGroupFileAddon01\">Upload</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"custom-file\">\r" +
    "\n" +
    "                                <input type=\"file\" class=\"custom-file-input\" id=\"file\" aria-describedby=\"inputGroupFileAddon01\">\r" +
    "\n" +
    "                                <label id=\"fileName\" class=\"custom-file-label\" for=\"file\">Choose file</label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div> \r" +
    "\n" +
    "                    <div class=\"row form-group\">\r" +
    "\n" +
    "                        <div class=\"col-md-6\">\r" +
    "\n" +
    "                            <button class=\"btn btn-default\" ui-sref=\"app.userList\">Back</button>\r" +
    "\n" +
    "                            <button class=\"btn btn-success float-right\" id=\"uploadButton\">Submit</button>\r" +
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


  $templateCache.put('app/modules/userImportExcel/userImportExcel.html',
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
    "                    <div class=\"card-title\">Import User</div>\r" +
    "\n" +
    "                    <div class=\"row form-group\">\r" +
    "\n" +
    "                        <div class=\"col-sm-6 input-group\">\r" +
    "\n" +
    "                            <div class=\"input-group-prepend\">\r" +
    "\n" +
    "                                <span class=\"input-group-text\" id=\"inputGroupFileAddon01\">Upload</span>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"custom-file\">\r" +
    "\n" +
    "                                <input type=\"file\" class=\"custom-file-input\" id=\"file\" aria-describedby=\"inputGroupFileAddon01\">\r" +
    "\n" +
    "                                <label id=\"fileName\" class=\"custom-file-label\" for=\"file\">Choose file</label>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row form-group\">\r" +
    "\n" +
    "                        <div class=\"col-md-6\">\r" +
    "\n" +
    "                            <button class=\"btn btn-default\" ui-sref=\"app.userList\">Back</button>\r" +
    "\n" +
    "                            <button class=\"btn btn-default\" id=\"downloadButton\">Template</button>\r" +
    "\n" +
    "                            <button class=\"btn btn-success float-right\" id=\"uploadButton\">Submit</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div class=\"card\">\r" +
    "\n" +
    "                    <div class=\"card-title\">Upload result</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table class=\"table table-striped\" id=\"user\" style=\"line-height: 0;\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Username</th>\r" +
    "\n" +
    "                                        <th>Full Name</th>\r" +
    "\n" +
    "                                        <!--<th>Email</th>-->\r" +
    "\n" +
    "                                        <th>Phone Number</th>\r" +
    "\n" +
    "                                        <th class=\"text-center\">Result</th>\r" +
    "\n" +
    "                                        <th>Reason</th>\r" +
    "\n" +
    "                                    </tr>\r" +
    "\n" +
    "                                    <tr ng-repeat=\"user in vm.uploadResults\">\r" +
    "\n" +
    "                                        <td><label>{{$index + 1}}</label></td>\r" +
    "\n" +
    "                                        <td width=\"120px\"><label>{{user.model.username}}</label></td>\r" +
    "\n" +
    "                                        <td width=\"250px\"><label>{{user.model.name}}</label></td>\r" +
    "\n" +
    "                                        <!--<td><label>{{user.model.email}}</label></td>-->\r" +
    "\n" +
    "                                        <td width=\"220px\"><label>{{user.model.noHP}}</label></td>\r" +
    "\n" +
    "                                        <td class=\"text-center\">\r" +
    "\n" +
    "                                            <div><span><i ng-show=\"!user.success\" class=\"fa fa-times\"></i></span></div>\r" +
    "\n" +
    "                                            <div><span><i ng-show=\"user.success\" class=\"fa fa-check\"></i></span></div>\r" +
    "\n" +
    "                                        </td>\r" +
    "\n" +
    "                                        <td><label>{{user.validationResult.errors[0] == undefined ? '' : user.validationResult.errors[0].propertyName + ': ' +  user.validationResult.errors[0].message}}</label></td>\r" +
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


  $templateCache.put('app/modules/vendor/vendor.html',
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
    "                    <div class=\"card-title\">List Vendor</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-6\">\r" +
    "\n" +
    "                            <button id=\"addButton\" class=\"btn btn-success\" ui-sref=\"app.vendorEntry({ id: '0'})\">Add Vendor</button>\r" +
    "\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <table id=\"vendor\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Title</th>\r" +
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


  $templateCache.put('app/modules/vendorEntry/vendorEntry.html',
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
    "                    <div class=\"card-title\">Add Vendor</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Vendor Name:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <input type=\"text\" id=\"title\" name=\"title\" class=\"form-control\" ng-model=\"vm.model.title\" placeholder=\"Vendor Name\">\r" +
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
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Save</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-default ml-1\" ui-sref=\"app.vendorList\">Back</button>\r" +
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
