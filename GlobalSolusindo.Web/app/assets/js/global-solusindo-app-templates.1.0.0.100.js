angular.module('global-solusindo-app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/area/area.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Area</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.areaEntry({ id: '0'})\">Tambah Area</button>\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"area\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Title</th>\n" +
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


  $templateCache.put('app/modules/areaEntry/areaEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Tambah Area</div>\n" +
    "                    <div class=\"col-md-8\">\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Area Name:</label>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <input type=\"text\" id=\"title\" name=\"title\" class=\"form-control\" ng-model=\"vm.model.title\" placeholder=\"Area Name\">\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.areaList\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/aset/aset.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Aset</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.asetEntry({ id: '0'})\">Tambah Aset</button>\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"aset\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Kode Aset</th>\n" +
    "                                        <th>Kategori</th>\n" +
    "                                        <th>Nama Aset</th>\n" +
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
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"close()\">Cancel</button>\r" +
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
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Tambah Aset</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-sm-4\">\n" +
    "                            <div class=\"row col-sm-12 form-group\">\n" +
    "                                <img id=\"photoAset\" src=\"/app/assets/images/tower-bts.jpg\" class=\"img-center img-fluid\" />\n" +
    "                            </div>\n" +
    "                            <div class=\"col-sm-12 input-group\">\n" +
    "                                <div class=\"input-group-prepend\">\n" +
    "                                    <span class=\"input-group-text\" id=\"inputGroupFileAddon01\">Upload</span>\n" +
    "                                </div>\n" +
    "                                <div class=\"custom-file\">\n" +
    "                                    <input type=\"file\" class=\"custom-file-input\" id=\"filePhoto\" aria-describedby=\"inputGroupFileAddon01\">\n" +
    "                                    <label id=\"fileName\" class=\"custom-file-label\" for=\"filePhoto\">Choose file</label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-8\">\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-2\">Kategory Asset :</label>\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <select id=\"kategoriAset_fk\" name=\"kategoriAset_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"asetVm.model.kategoriAset_fk\" required>\n" +
    "                                        <option ng-repeat=\"x in asetVm.formData.asetKategoris\" ng-value=\"x.asetKategori_pk\">{{x.title}}</option>\n" +
    "                                    </select>\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-2\">Asset ID:</label>\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <input type=\"text\" id=\"asetId\" name=\"asetId\" class=\"form-control\" ng-model=\"asetVm.model.asetId\" required />\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-2\">Nama Asset :</label>\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" ng-model=\"asetVm.model.name\" required />\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    " \n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-2\">Deskripsi :</label>\n" +
    "                                <div class=\"col-sm-8\">\n" +
    "                                    <textarea id=\"description\" name=\"description\" class=\"form-control\" ng-model=\"asetVm.model.description\"></textarea>\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div> \n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <hr />\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-8\">\n" +
    "                            <button class=\"btn btn-default\" ui-sref=\"app.asetList\">Kembali</button>\n" +
    "                            <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/asetKategori/asetKategori.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Aset Kategori</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.asetKategoriEntry({ id: '0'})\">Tambah Aset Kategori</button>\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"asetKategori\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Title</th>\n" +
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


  $templateCache.put('app/modules/asetKategoriEntry/asetKategoriEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Tambah AsetKategori</div>\n" +
    "                    <div class=\"col-md-8\">\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Kategori Name:</label>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\n" +
    "                                    placeholder=\"Aset Kategori Name\">\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div> \n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.asetKategoriList\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/asset/asset.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Asset</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <button class=\"btn btn-success\" modal-asset>Tambah Asset</button>\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"asset\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Kode Asset</th>\n" +
    "                                        <th>Tanggal Pembuatan</th>\n" +
    "                                        <th>Kategory</th>\n" +
    "                                        <th>Nama Asset</th>\n" +
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
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Auth Param</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.authParamEntry({ id: '0'})\">Tambah Auth Param</button>\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"authParam\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Title</th>\n" +
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
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"close()\">Cancel</button>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/authParamEntry/authParamEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Tambah AuthParam</div>\n" +
    "                    <div class=\"col-md-8\">\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Auth Param Name :</label>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\n" +
    "                                    placeholder=\"Auth Param Name\">\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Description :</label>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <textarea class=\"form-control\" ng-model=\"vm.model.description\" name=\"description\" placeholder=\"Description\">\n" +
    "                                        </textarea>\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.authParamList\">Kembali</button> <button class=\"btn btn-success float-right\"\n" +
    "                                    id=\"saveButton\">Tambah AuthParam</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/bts/bts.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Persebaran bts</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div id=\"map\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List BTS</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.btsEntry({ id: '0'})\">Tambah BTS</button>\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"bts\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>BTS Name</th>\n" +
    "                                        <th>Provider</th>\n" +
    "                                        <th>Technology</th>\n" +
    "                                        <th>BTS Status</th>\n" +
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
    "                <label class=\"control-label col-sm-3 text-right\">Customer Site ID :</label><label class=\"col-sm-9\">{{ model.customerSite }}</label>\r" +
    "\n" +
    "            </div>\r" +
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
    "                <label class=\"control-label col-sm-3 text-right\">BTS Name :</label><label class=\"col-sm-9\">{{ model.name }}</label>\r" +
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
    "                <label class=\"control-label col-sm-3 text-right\">BTS Status :</label><label class=\"col-sm-9\">{{ model.statusBtsTitle }}</label>\r" +
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
    "                <label class=\"control-label col-sm-3 text-right\">Kota :</label><label class=\"col-sm-9\">{{ model.kotaTitle }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Cabang :</label><label class=\"col-sm-9\">{{ model.cabangTitle }}</label>\r" +
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
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"close()\">Cancel</button>\r" +
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
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Tambah Data BTS</div>\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-6\">\n" +
    "                                <div class=\"row form-group\">\n" +
    "                                    <label class=\"control-label col-md-3\">Customer Site ID:</label>\n" +
    "                                    <div class=\"col-md-9\">\n" +
    "                                        <input type=\"text\" id=\"customerSite\" name=\"customerSite\" class=\"form-control\" ng-model=\"vm.model.customerSite\" placeholder=\"Customer Site ID\">\n" +
    "                                        <div class=\"invalid-feedback\"></div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"row form-group\">\n" +
    "                                    <label class=\"control-label col-md-3\">Tower ID:</label>\n" +
    "                                    <div class=\"col-md-9\">\n" +
    "                                        <input type=\"text\" id=\"towerId\" name=\"towerId\" class=\"form-control\" ng-model=\"vm.model.towerId\" placeholder=\"Tower ID\">\n" +
    "                                        <div class=\"invalid-feedback\"></div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"row form-group\">\n" +
    "                                    <label class=\"control-label col-md-3\">Cell ID:</label>\n" +
    "                                    <div class=\"col-md-9\">\n" +
    "                                        <input type=\"text\" id=\"cellId\" name=\"cellId\" class=\"form-control\" ng-model=\"vm.model.cellId\" placeholder=\"Cell ID\">\n" +
    "                                        <div class=\"invalid-feedback\"></div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"row form-group\">\n" +
    "                                    <label class=\"control-label col-md-3\">BTS Name:</label>\n" +
    "                                    <div class=\"col-md-9\">\n" +
    "                                        <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" ng-model=\"vm.model.name\" placeholder=\"Name\">\n" +
    "                                        <div class=\"invalid-feedback\"></div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"row form-group\">\n" +
    "                                    <label class=\"control-label col-md-3\">Tower Provider:</label>\n" +
    "                                    <div class=\"col-md-9\">\n" +
    "                                        <select id=\"operator_fk\" name=\"operator_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.operator_fk\" required>\n" +
    "                                            <option ng-repeat=\"x in vm.formData.operators\" ng-value=\"x.operator_pk\">{{x.title}}</option>\n" +
    "                                        </select>\n" +
    "                                        <div class=\"invalid-feedback\"></div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"row form-group\">\n" +
    "                                    <label class=\"control-label col-md-3\">Lat:</label>\n" +
    "                                    <div class=\"col-sm-3\">\n" +
    "                                        <input type=\"text\" class=\"form-control\" id=\"latitude\" name=\"latitude\" ng-model=\"vm.model.latitude\" placeholder=\"Latitude\">\n" +
    "                                        <div class=\"invalid-feedback\"></div>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <label class=\"control-label col-md-2\">Lon:</label>\n" +
    "                                    <div class=\"col-sm-4\">\n" +
    "                                        <input type=\"text\" id=\"longitude\" name=\"longitude\" class=\"form-control\" ng-model=\"vm.model.longitude\" placeholder=\"Longitude\">\n" +
    "                                        <div class=\"invalid-feedback\"></div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"col-md-6\">\n" +
    "                                <div class=\"row form-group\">\n" +
    "                                    <label class=\"control-label col-sm-2\">BTS Status:</label>\n" +
    "                                    <div class=\"col-sm-6\">\n" +
    "                                        <select id=\"statusBts_fk\" name=\"statusBts_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.statusBts_fk\" required>\n" +
    "                                            <option ng-repeat=\"x in vm.formData.btsStatuses\" ng-value=\"x.btsStatus_pk\">{{x.title}}</option>\n" +
    "                                        </select>\n" +
    "                                        <div class=\"invalid-feedback\"></div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"row form-group\">\n" +
    "                                    <label class=\"control-label col-sm-2\">Area:</label>\n" +
    "                                    <div class=\"col-sm-6\">\n" +
    "                                        <select id=\"area_fk\" name=\"area_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.area_fk\" required>\n" +
    "                                            <option ng-repeat=\"x in vm.formData.areas\" ng-value=\"x.area_pk\">{{x.title}}</option>\n" +
    "                                        </select>\n" +
    "                                        <div class=\"invalid-feedback\"></div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"row form-group\">\n" +
    "                                    <label class=\"control-label col-sm-2\">Kota:</label>\n" +
    "                                    <div class=\"col-sm-6\">\n" +
    "                                        <select id=\"kota_fk\" name=\"kota_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.kota_fk\" required>\n" +
    "                                            <option ng-repeat=\"x in vm.formData.kotas\" ng-value=\"x.kota_pk\">{{x.title}}</option>\n" +
    "                                        </select>\n" +
    "                                        <div class=\"invalid-feedback\"></div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"row form-group\">\n" +
    "                                    <label class=\"control-label col-sm-2\">Cabang:</label>\n" +
    "                                    <div class=\"col-sm-6\">\n" +
    "                                        <select id=\"cabang_fk\" name=\"cabang_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.cabang_fk\" required>\n" +
    "                                            <option ng-repeat=\"x in vm.formData.cabangs\" ng-value=\"x.cabang_pk\">{{x.title}}</option>\n" +
    "                                        </select>\n" +
    "                                        <div class=\"invalid-feedback\"></div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"row form-group\">\n" +
    "                                    <label class=\"control-label col-sm-2\">Alamat:</label>\n" +
    "                                    <div class=\"col-sm-10\">\n" +
    "                                        <textarea class=\"form-control\" ng-model=\"vm.model.alamat\" name=\"alamat\" placeholder=\"Alamat\">\n" +
    "                                        </textarea>\n" +
    "                                        <div class=\"invalid-feedback\"></div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "\n" +
    "                        <div class=\"\">\n" +
    "                            <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n" +
    "                                <li class=\"nav-item\">\n" +
    "                                    <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Technology</a>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "\n" +
    "                            <div class=\"tab-content\" id=\"myTabContent\">\n" +
    "\n" +
    "                                <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n" +
    "                                    <button class=\"btn btn-default\" id=\"btnAddTechnology\">Add New</button>\n" +
    "                                    <table id=\"sowAssign\" class=\"table table-striped\">\n" +
    "                                        <thead>\n" +
    "                                            <tr>\n" +
    "                                                <th hidden>BTSTechnology_PK</th>\n" +
    "                                                <th hidden>BTS FK</th>\n" +
    "                                                <th>Technology</th>\n" +
    "                                            </tr>\n" +
    "                                        </thead>\n" +
    "                                        <tbody>\n" +
    "                                            <tr ng-repeat=\"btsTechnology in vm.model.btsTechnologies\">\n" +
    "                                                <td hidden>\n" +
    "                                                    <input type=\"text\" id=\"btsTechnology_pk\" name=\"btsTechnology_pk\" ng-model=\"btsTechnology.btsTechnology_pk\" disabled />\n" +
    "                                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                                </td>\n" +
    "                                                <td class=\"text-center\" hidden>\n" +
    "                                                    <input type=\"text\" id=\"bts_fk\" name=\"bts_fk\" ng-model=\"btsTechnology.bts_fk\" disabled />\n" +
    "                                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                                </td>\n" +
    "                                                <td>\n" +
    "                                                    <ui-select id=\"technology_fk\" name=\"technology_fk\" ng-model=\"btsTechnology.technology_fk\" size=\"0\" theme=\"select2\" ng-disabled=\"vm.disabled\" title=\"Find technology\"\n" +
    "                                                               required style=\"width:200px\">\n" +
    "                                                        <ui-select-match placeholder=\"Find technology\">{{$select.selected.title}}</ui-select-match>\n" +
    "                                                        <ui-select-choices refresh-delay=\"0\" repeat=\"technology.technology_pk as technology in vm.formData.technologies\">\n" +
    "                                                            <div ng-bind-html=\"technology.title | highlight: $select.search\"></div>\n" +
    "                                                        </ui-select-choices>\n" +
    "                                                    </ui-select>\n" +
    "                                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                                </td>\n" +
    "                                            </tr>\n" +
    "                                        </tbody>\n" +
    "                                    </table>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "\n" +
    "                        <hr />\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.btsList\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/cabang/cabang.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Cabang</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.cabangEntry({ id: '0'})\">Tambah Cabang</button>\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"cabang\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Title</th>\n" +
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


  $templateCache.put('app/modules/cabangEntry/cabangEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Tambah Cabang</div>\n" +
    "                    <div class=\"col-md-8\">\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Cabang:</label>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\n" +
    "                                    placeholder=\"Cabang Name\">\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div> \n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.cabangList\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/costKategori/costKategori.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Cost Kategori</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.costKategoriEntry({ id: '0'})\">Tambah Cost Kategori</button>\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"costKategori\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Title</th>\n" +
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


  $templateCache.put('app/modules/costKategoriEntry/costKategoriEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Tambah Cost Kategori</div>\n" +
    "                    <div class=\"col-md-8\">\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Cost Kategori Name:</label>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\n" +
    "                                    placeholder=\"Cost Kategori Name\">\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div> \n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.costKategoriList\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/dashboard/dashboard.html',
    "<div class=\"container-fluid animated fadeIn\">\n" +
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
    "        <div class=\"col-md-20p item-container ng-scope\">\r" +
    "\n" +
    "            <div class=\"card p-0 bg-white hoverable\">\r" +
    "\n" +
    "                <div class=\"top-dashboard\">\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-5 col-lg-3\">\r" +
    "\n" +
    "                            <div class=\"the-icons\">\r" +
    "\n" +
    "                                <i class=\"fa fa-file-alt\"></i>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-7 col-lg-9 state-text\">\r" +
    "\n" +
    "                            <h5 class=\"mt-2\">Total Install PO</h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"value-dashboard\">\r" +
    "\n" +
    "                    <h4>Rp. 100.000.000</h4>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"col-md-20p item-container ng-scope\">\r" +
    "\n" +
    "            <div class=\"card p-0 bg-white hoverable\">\r" +
    "\n" +
    "                <div class=\"top-dashboard\" style=\"background-color: #0996e6;\" >\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-5 col-lg-3\">\r" +
    "\n" +
    "                            <div class=\"the-icons\">\r" +
    "\n" +
    "                                <i class=\"fa fa-file-alt\"></i>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-7 col-lg-9 state-text\">\r" +
    "\n" +
    "                            <h5>Total Jumlah PO</h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"value-dashboard\">\r" +
    "\n" +
    "                    <h4  style=\"color: #0996e6\">100</h4>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"col-md-20p item-container ng-scope\">\r" +
    "\n" +
    "            <div class=\"card p-0 bg-white hoverable\">\r" +
    "\n" +
    "                <div class=\"top-dashboard\" style=\"background-color:#e25913;\">\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-5 col-lg-3\">\r" +
    "\n" +
    "                            <div class=\"the-icons\">\r" +
    "\n" +
    "                                <i class=\"fa fa-file-alt\"></i>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-7 col-lg-9 state-text\">\r" +
    "\n" +
    "                            <h5>Total Jumlah Invoice</h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"value-dashboard\">\r" +
    "\n" +
    "                    <h4 style=\"color: #e25913\">150</h4>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"col-md-20p item-container ng-scope\">\r" +
    "\n" +
    "            <div class=\"card p-0 bg-white hoverable\">\r" +
    "\n" +
    "                <div class=\"top-dashboard\" style=\"background-color: #f6b314;\">\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-5 col-lg-3\">\r" +
    "\n" +
    "                            <div class=\"the-icons\">\r" +
    "\n" +
    "                                <i class=\"fa fa-file-alt\"></i>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-7 col-lg-9 state-text\">\r" +
    "\n" +
    "                            <h5>Total Jumlah Member</h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"value-dashboard\">\r" +
    "\n" +
    "                    <h4 style=\" color: #f6b314\">200</h4>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"col-md-20p item-container ng-scope\">\r" +
    "\n" +
    "            <div class=\"card p-0 bg-white hoverable\">\r" +
    "\n" +
    "                <div class=\"top-dashboard\"  style=\"background-color:#9f3ce8;\">\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"col-5 col-lg-3\">\r" +
    "\n" +
    "                            <div class=\"the-icons\">\r" +
    "\n" +
    "                                <i class=\"fa fa-file-alt\"></i>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"col-7 col-lg-9 state-text\">\r" +
    "\n" +
    "                            <h5 class=\"mt-2\">Jumlah Asset</h5>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"value-dashboard\">\r" +
    "\n" +
    "                    <h4 style=\" color: #9f3ce8\">200</h4>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/deliveryArea/deliveryArea.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Delivery Area</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.deliveryAreaEntry({ id: '0'})\">Tambah Delivery Area</button>\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"deliveryArea\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Title</th>\n" +
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


  $templateCache.put('app/modules/deliveryAreaEntry/deliveryAreaEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Tambah Delivery Area</div>\n" +
    "                    <div class=\"col-md-8\">\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Delivery Area Name:</label>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\n" +
    "                                    placeholder=\"Delivery Area Name\">\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div> \n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.deliveryAreaList\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/issueType/issueType.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Issue Type</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.issueTypeEntry({ id: '0'})\">Tambah Issue Type</button>\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"issueType\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Title</th>\n" +
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


  $templateCache.put('app/modules/issueTypeEntry/issueTypeEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Tambah Issue Type</div>\n" +
    "                    <div class=\"col-md-8\">\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Type Name:</label>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <input type=\"text\" id=\"title\" name=\"title\" class=\"form-control\" ng-model=\"vm.model.title\" placeholder=\"Type Name\">\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.issueTypeList\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/izinCuti/izinCuti.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Izin Cuti</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.izinCutiEntry({ id: '0'})\">Tambah Izin Cuti</button>\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"izinCuti\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Kode Izin/Cuti</th>\n" +
    "                                        <th>User</th>\n" +
    "                                        <th>Position</th>\n" +
    "                                        <th>Keterangan</th>\n" +
    "                                        <th>Tanggal Izin/Cuti</th>\n" +
    "                                        <th>Approval Status</th>\n" +
    "                                        <th>Approval By</th> \n" +
    "                                        <th>Detail</th>\n" +
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


  $templateCache.put('app/modules/izinCutiApproval/izinCutiApproval.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Approval Izin Cuti</div> \n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"izinCutiApproval\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Kode Izin/Cuti</th>\n" +
    "                                        <th>User</th>\n" +
    "                                        <th>Position</th>\n" +
    "                                        <th>Keterangan</th>\n" +
    "                                        <th>Tanggal Izin/Cuti</th>\n" +
    "                                        <th>Approval Status</th>\n" +
    "                                        <th>Approval By</th>\n" +
    "                                        <th>Detail</th>\n" +
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


  $templateCache.put('app/modules/izinCutiApprovalEntry/izinCutiApprovalEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Detail Izin Cuti</div>\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <label class=\"control-label col-sm-2\" hidden>User fk:</label>\n" +
    "                            <div class=\"col-sm-2\" hidden>\n" +
    "                                <input type=\"text\" id=\"user_fk\" name=\"user_fk\" class=\"form-control\" ng-model=\"vm.model.user_fk\" placeholder=\"User ID\" disabled>\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                            <label class=\"control-label col-sm-2\">Nama Pengaju:</label>\n" +
    "                            <label class=\"control-label col-sm-2\">{{vm.model.userIzinCutiName}}</label>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <label class=\"control-label col-sm-2\">Posisi:</label>\n" +
    "                            <label class=\"control-label col-sm-2\">{{vm.model.userIzinCutiJabatan}}</label>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <label class=\"control-label col-sm-2\">Tanggal Izin/Cuti:</label>\n" +
    "                            <label class=\"control-label col-sm-3\">{{vm.model.tglMulai}}</label> \n" +
    "                        </div>\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Alasan:</label>\n" +
    "                            <label class=\"control-label col-sm-8\">{{vm.model.alasan}}</label>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-4\">\n" +
    "                                <button class=\"btn btn-success\" id=\"approveButton\">Approve</button>\n" +
    "                                <button class=\"btn btn-danger\" id=\"rejectButton\">Reject</button>\n" +
    "                                <button class=\"btn btn-info float-right\" ui-sref=\"app.izinCutiApprovalList\">Kembali</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/izinCutiEntry/izinCutiEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Pengajuan Izin Cuti</div>\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\" hidden>User fk:</label>\n" +
    "                            <div class=\"col-sm-2\" hidden>\n" +
    "                                <input type=\"text\" id=\"user_fk\" name=\"user_fk\" class=\"form-control\" ng-model=\"vm.model.user_fk\" placeholder=\"User ID\" disabled>\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Nama Pengaju:</label>\n" +
    "                            <div class=\"col-sm-3\">\n" +
    "                                <input type=\"text\" id=\"userIzinCutiName\" name=\"userIzinCutiName\" class=\"form-control\" ng-model=\"vm.model.userIzinCutiName\" placeholder=\"Nama Pengaju\" disabled>\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Posisi:</label>\n" +
    "                            <div class=\"col-sm-2\">\n" +
    "                                <input type=\"text\" id=\"userIzinCutiJabatan\" name=\"userIzinCutiJabatan\" class=\"form-control\" ng-model=\"vm.model.userIzinCutiJabatan\" placeholder=\"Posisi\" disabled>\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Tanggal Mulai:</label>\n" +
    "                            <div class=\"col-sm-2\">\n" +
    "                                <input type=\"text\" id=\"tglMulai\" name=\"tglMulai\" ng-model=\"vm.model.tglMulai\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" required />\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Tanggal Selesai:</label>\n" +
    "                            <div class=\"col-sm-2\">\n" +
    "                                <input type=\"text\" id=\"tglSelesai\" name=\"tglSelesai\" ng-model=\"vm.model.tglSelesai\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" required />\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Alasan:</label>\n" +
    "                            <div class=\"col-sm-8\">\n" +
    "                                <textarea id=\"alasan\" name=\"alasan\" class=\"form-control\" ng-model=\"vm.model.alasan\" placeholder=\"Alasan\"></textarea>\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-8\">\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.izinCutiList\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/kategoriJabatan/kategoriJabatan.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Kategori Jabatan</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.kategoriJabatanEntry({ id: '0'})\">Tambah Kategori Jabatan</button>\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"kategoriJabatan\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Title</th>\n" +
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


  $templateCache.put('app/modules/kategoriJabatanEntry/kategoriJabatanEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Kategori Jabatan</div>\n" +
    "                    <div class=\"col-md-8\">\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Kategori Jabatan:</label>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\n" +
    "                                    placeholder=\"Kategori Jabatan\">\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div> \n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.kategoriJabatanList\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/kota/kota.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Kota</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.kotaEntry({ id: '0'})\">Tambah Kota</button>\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"kota\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Title</th>\n" +
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


  $templateCache.put('app/modules/kotaEntry/kotaEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Tambah Kota</div>\n" +
    "                    <div class=\"col-md-8\">\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Kota:</label>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\n" +
    "                                    placeholder=\"Kota Name\">\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div> \n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.kotaList\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/layouts/app.html',
    "<!-- Navbar -->\n" +
    "<div ng-include=\"'app/modules/layouts/nav-bar/navbar.html'\" include-replace></div>\n" +
    "<div class=\"app-body\">\n" +
    "    <!-- Navigation -->\n" +
    "    <div ng-include=\"'app/modules/layouts/side-bar/sidebar.html'\" include-replace></div>\n" +
    "    <!-- Main content -->\n" +
    "    <main class=\"main\">\n" +
    "        <!-- Breadcrumb -->\n" +
    "        <ol class=\"breadcrumb\" breadcrumb>\n" +
    "            <ncy-breadcrumb></ncy-breadcrumb>\n" +
    "            <span class=\"controls\">\n" +
    "\n" +
    "                <span class='mr-3'>{{ lastUpdate }}</span>\n" +
    "                <span class=\"scroll-control\" ng-if=\"$state.current.name == 'app.alert' || $state.current.name == 'app.summary'\">\n" +
    "                    <i class=\"icon-control-start\" id='ticker-previous'></i>\n" +
    "                    <i class=\"icon-control-play\" id='start' ng-click='start(true)'></i>\n" +
    "                    <i class=\"icon-control-pause\" id='stop' ng-click='start(false)'></i>\n" +
    "                    <i class=\"icon-control-end\" id='ticker-next'></i>\n" +
    "                </span>\n" +
    "\n" +
    "\n" +
    "                <i class=\"icon-reload\" id='reload'></i>\n" +
    "                <i class=\"icon-list\" id='paginate-icon' ng-click=\"changeView(true)\" ng-if=\"$state.current.name == 'app.alert' || $state.current.name == 'app.summary'\"></i>\n" +
    "                <i class=\"icon-grid\" id='scroll-icon' ng-click=\"changeView(false)\"></i>\n" +
    "\n" +
    "                <i class=\"icon-printer\" onclick=\"window.print();\"></i>\n" +
    "\n" +
    "                <i class=\"icon-size-fullscreen icon-full\" ng-click=\"fullscreen(true)\"></i>\n" +
    "                <i class=\"icon-size-actual icon-actual\" ng-click=\"fullscreen(false)\"></i>\n" +
    "            </span>\n" +
    "        </ol>\n" +
    "        <div class=\"container-fluid\">\n" +
    "            <ui-view></ui-view>\n" +
    "            <div class=\"lds-ring\">\n" +
    "                <div></div>\n" +
    "                <div></div>\n" +
    "                <div></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- /.conainer-fluid -->\n" +
    "    </main>\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"back-loader flex-row align-items-center\">\n" +
    "    <div loader-css=\"line-scale\" class=\"preload-login\"></div>\n" +
    "</div>\n" +
    "<!-- Footer -->\n" +
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
    "    <button class=\"navbar-toggler mobile-sidebar-toggler d-lg-none\" type=\"button\">\n" +
    "        <span class=\"navbar-toggler-icon\"></span>\n" +
    "    </button>\n" +
    "    <ul class=\"nav navbar-nav d-md-down-none\">\n" +
    "        <li class=\"nav-item\">\n" +
    "            <a class=\"nav-link navbar-toggler sidebar-toggler\" href=\"#\">\n" +
    "                <span class=\"navbar-toggler-icon\"></span>\n" +
    "            </a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "    <div class=\"nav navbar-nav ml-auto d-md-down-none\" uib-dropdown ng-controller=\"NavBarCtrl as nav\">\n" +
    "        <div class=\"btn-transparent\" uib-dropdown-toggle=\"\" ng-disabled=\"disabled\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "            <a data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "                <img id=\"photoProfile\" src=\"app/assets/images/default.png\" class=\"img-avatar\" alt=\"\">\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"dropdown-menu dropdown-menu-right\" uib-dropdown-menu=\"\" role=\"menu\" aria-labelledby=\"single-button\">\n" +
    "            <div class=\"dropdown-header text-left\">\n" +
    "                <strong>User Info</strong>\n" +
    "            </div>\n" +
    "            <div class=\"dropdown-item\">\n" +
    "                <div><i class=\"fa fa-user\"></i><strong> {{nav.model.name}}</strong></div>\n" +
    "                <div><i></i> {{nav.model.email}}</div>\n" +
    "            </div>\n" +
    "            <a class=\"dropdown-item\" href=\"#\" ng-click=\"nav.logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</header>"
  );


  $templateCache.put('app/modules/layouts/side-bar/sidebar.html',
    "<div class=\"sidebar\">\n" +
    "    <div class=\"company-info\">\n" +
    "        <div class=\"company-icon\">\n" +
    "            <i class=\"fas fa-broadcast-tower\"></i>\n" +
    "        </div>\n" +
    "        <div class=\"company-title\">\n" +
    "            Global Solusindo\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <nav class=\"sidebar-nav\">\n" +
    "        <ul class=\"nav\">\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.dashboard\">\n" +
    "                    <i class=\"fas fa-home\"></i> <span>Homepage</span>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item nav-dropdown\" ng-class=\"{open: $state.includes('app.availability')}\">\n" +
    "                <a class=\"nav-link nav-dropdown-toggle\" ng-class=\"{active: $state.includes('app.availability')}\" href=\"#\">\n" +
    "                    <i class=\"fa fa-user\"></i> <span>User Management</span>\n" +
    "                </a>\n" +
    "                <ul class=\"nav-dropdown-items\">\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.userList\">\n" +
    "                            <i class=\"fas fa-circle\"></i> <span>User</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.role-list\">\n" +
    "                            <i class=\"fas fa-circle\"></i> <span>Role</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.roleGroupList\">\n" +
    "                            <i class=\"fas fa-circle\"></i> <span>Role Group</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.mappingRoleToRoleGroupList\">\n" +
    "                            <i class=\"fas fa-circle\"></i> <span>Mapping Role to Role Group</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.mappingUserToRoleGroupList\">\n" +
    "                            <i class=\"fas fa-circle\"></i> <span>Mapping User Role Group</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.authParamList\">\n" +
    "                            <i class=\"fas fa-circle\"></i> <span>Auth Param</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.mappingUserToAuthParamList\">\n" +
    "                            <i class=\"fas fa-circle\"></i> <span>Mapping User to Auth Param</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.kategoriJabatanList\">\n" +
    "                            <i class=\"fas fa-circle\"></i> <span>Kategori Jabatan</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item nav-dropdown\" ng-class=\"{open: $state.includes('app.availability')}\">\n" +
    "                <a class=\"nav-link nav-dropdown-toggle\" ng-class=\"{active: $state.includes('app.availability')}\" href=\"#\">\n" +
    "                    <i class=\"fa fa-luggage-cart\"></i> <span>Master Data</span>\n" +
    "                </a>\n" +
    "                <ul class=\"nav-dropdown-items\">\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.btsList\">\n" +
    "                            <i class=\"fa fa-train\"></i> <span>BTS</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.projectList\">\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Project</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.asetList\">\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Asset</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.sowList\">\n" +
    "                            <i class=\"fa fa-user\"></i> <span>SOW</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item nav-dropdown\" ng-class=\"{open: $state.includes('app.availability')}\">\n" +
    "                <a class=\"nav-link nav-dropdown-toggle\" ng-class=\"{active: $state.includes('app.availability')}\" href=\"#\">\n" +
    "                    <i class=\"fa fa-luggage-cart\"></i> <span>Complementary</span>\n" +
    "                </a>\n" +
    "                <ul class=\"nav-dropdown-items\">\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.operatorList\">\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Operator/Tower Provider</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.costKategoriList\">\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Cost Kategori</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.areaList\">\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Area</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.deliveryAreaList\">\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Delivery Area</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.kotaList\">\n" +
    "                            <i class=\"fa fa-user\"></i> <span>Kota</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.cabangList\">\n" +
    "                            <i class=\"fa fa-user\"></i> <span>Cabang</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.asetKategoriList\">\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Aset Kategori</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.issueTypeList\">\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Issue Type</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.technologyList\">\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Technology</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "\n" +
    "            <li class=\"nav-item nav-dropdown\" ng-class=\"{open: $state.includes('app.availability')}\">\n" +
    "                <a class=\"nav-link nav-dropdown-toggle\" ng-class=\"{active: $state.includes('app.availability')}\" href=\"#\">\n" +
    "                    <i class=\"fa fa-luggage-cart\"></i> <span>Izin / Cuti</span>\n" +
    "                </a>\n" +
    "                <ul class=\"nav-dropdown-items\">\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.izinCutiList\">\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Pengajuan Izin/Cuti</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.izinCutiApprovalList\">\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Approval Izin/Cuti</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "\n" +
    "            <li class=\"nav-item nav-dropdown\" ng-class=\"{open: $state.includes('app.availability')}\">\n" +
    "                <a class=\"nav-link nav-dropdown-toggle\" ng-class=\"{active: $state.includes('app.availability')}\" href=\"#\">\n" +
    "                    <i class=\"fa fa-luggage-cart\"></i> <span>Report</span>\n" +
    "                </a>\n" +
    "                <ul class=\"nav-dropdown-items\">\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.timesheetEngineerList\">\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Timesheet Engineer</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.taskEngineerList\">\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Task Engineer</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.dailyTaskList\">\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Daily Task</span>\n" +
    "                        </a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </nav>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/login/login.html',
    "<div class=\"app flex-row align-items-center login\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row justify-content-center\">\n" +
    "            <div class=\"col-md-8\">\n" +
    "                <div class=\"card-group\">\n" +
    "                    <div class=\"card p-0\">\n" +
    "                        <div class=\"card-body p-0\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"d-none d-sm-block col-md-6 login-bg\">\n" +
    "                                    <div class=\"overlay-login\">\n" +
    "                                        <div>We are doing great works</div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-6\">\n" +
    "                                    <form class=\"p-4\">\n" +
    "                                        <div class=\"company-icon\">\n" +
    "                                            <i class=\"fas fa-broadcast-tower\"></i>\n" +
    "                                        </div>\n" +
    "                                        <span class=\"title-login\">Global One Solusindo</span>\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <label>Username</label>\n" +
    "                                            <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" placeholder=\"Username\" ng-model=\"login.model.username\" required autofocus>\n" +
    "                                            <div class=\"invalid-feedback\"></div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"form-group\">\n" +
    "                                            <label>Password</label>\n" +
    "                                            <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" ng-model=\"login.model.password\" required \">\n" +
    "                                            <div class=\"invalid-feedback\"></div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"row\">\n" +
    "                                            <div class=\"col-12\">\n" +
    "                                                <input type=\"button\" id=\"loginButton\" ng-click=\"vm.login()\" class=\"btn login-btn\" value=\"Login\">\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </form>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"lds-ring\">\n" +
    "            <div></div>\n" +
    "            <div></div>\n" +
    "            <div></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/mappingRoleToRoleGroup/mappingRoleToRoleGroup.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Role Group</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"mappingRoleToRoleGroup\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Title</th>\n" +
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
    "<div class=\"modal-header\">\n" +
    "    <h6 class=\"modal-title\">Mapping Group to Role Group</h6>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-body\">\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-12\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-4\" ng-repeat=\"item in vm.roles\">\n" +
    "                    <label class=\"control control--checkbox\">\n" +
    "                        {{ item.title }}\n" +
    "                        <input tabindex=\"26\" type=\"checkbox\" name=\"role\"\n" +
    "                               checked=\"checked\" checklist-value=\"item\" checklist-model=\"vm.model.roles\" />\n" +
    "                        <span class=\"control__indicator\"></span>\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-primary\" type=\"button\" ng-click=\"vm.ok()\">Simpan</button>\n" +
    "    <button class=\"btn btn-default\" type=\"button\" ng-click=\"vm.cancel()\">Cancel</button>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/mappingRoleToRoleGroupEntry/modal/roleModal.html',
    "<div class=\"modal-header\">\n" +
    "    <h5 class=\"modal-title\">Roles</h5>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-body\">\n" +
    "    <div class=\"row\">\n" +
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
    "            </div>\n" +
    "        </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button id=\"saveButton\" class=\"btn btn-primary\" type=\"button\">Save</button>\n" +
    "    <button id=\"cancelButton\" class=\"btn btn-default\" type=\"button\">Cancel</button>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/mappingUserToAuthParam/mappingUserToAuthParam.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Mapping User To Auth Param</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"mappingUserToAuthParam\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Auth Param</th>\n" +
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


  $templateCache.put('app/modules/mappingUserToAuthParamEntry/mappingUserToAuthParamEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Mapping User To Auth Param</div>\n" +
    "                    <div class=\"col-md-8\">\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-3\">Auth Param Name:</label>\n" +
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
    "                                <button class=\"btn btn-default\" ui-sref=\"app.mappingUserToAuthParamList\">Kembali</button> \n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Mapping User To Auth Param</div>\n" +
    "                    <div class=\"row\"> \n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <button user--auth-param-modal on-callback=\"vm.userAuthParamModalCallback\" class=\"btn btn-success\" id=\"modalRoleButton\">\n" +
    "                                Add New User\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"mappingUserToAuthParam\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>Auth Param PK</th>\n" +
    "                                        <th>User PK</th>\n" +
    "                                        <th>User Id</th>\n" +
    "                                        <th>Username</th>\n" +
    "                                        <th>Name</th>\n" +
    "                                        <th>Position</th>\n" +
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


  $templateCache.put('app/modules/mappingUserToAuthParamEntry/modal/userAuthParamModal.html',
    "<div class=\"modal-header\">\n" +
    "    <h5 class=\"modal-title\">Add New User</h5>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-body\">\n" +
    "    <div class=\"row form-group\">\n" +
    "        <label class=\"control-label col-sm-2\">User:</label>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "            <select id=\"user_pk\" name=\"user_pk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.user_pk\" required>\n" +
    "                <option ng-repeat=\"x in vm.formData.users\" ng-value=\"x.user_pk\">{{x.name}}</option>\n" +
    "            </select>\n" +
    "            <div class=\"invalid-feedback\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button id=\"saveButton\" class=\"btn btn-primary\" type=\"button\">Save</button>\n" +
    "    <button id=\"cancelButton\" class=\"btn btn-default\" type=\"button\">Cancel</button>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/mappingUserToRoleGroup/mappingUserToRoleGroup.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Mapping User To Role Group</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"mappingUserToRoleGroup\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Role Group</th>\n" +
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


  $templateCache.put('app/modules/mappingUserToRoleGroupEntry/mappingUserToRoleGroupEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Mapping User To Role Group</div>\n" +
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
    "                                <button class=\"btn btn-default\" ui-sref=\"app.mappingUserToRoleGroupList\">Kembali</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Mapping User To Role Group</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <button user-modal on-callback=\"vm.userModalCallback\" class=\"btn btn-success\" id=\"modalRoleButton\">\n" +
    "                                Add New User\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"mappingUserToRoleGroup\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>RoleGroup PK</th>\n" +
    "                                        <th>User PK</th>\n" +
    "                                        <th>User Id</th>\n" +
    "                                        <th>Username</th>\n" +
    "                                        <th>Name</th>\n" +
    "                                        <th>Kategori Jabatan</th>\n" +
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


  $templateCache.put('app/modules/mappingUserToRoleGroupEntry/modal/userModal.html',
    "<div class=\"modal-header\">\n" +
    "    <h5 class=\"modal-title\">Add New User</h5>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-body\">\n" +
    "    <div class=\"row form-group\">\n" +
    "        <label class=\"control-label col-sm-2\">User:</label>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "            <select id=\"user_pk\" name=\"user_pk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.user_pk\" required>\n" +
    "                <option ng-repeat=\"x in vm.formData.users\" ng-value=\"x.user_pk\">{{x.name}}</option>\n" +
    "            </select>\n" +
    "            <div class=\"invalid-feedback\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button id=\"saveButton\" class=\"btn btn-primary\" type=\"button\">Save</button>\n" +
    "    <button id=\"cancelButton\" class=\"btn btn-default\" type=\"button\">Cancel</button>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/operator/operator.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Operator</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.operatorEntry({ id: '0'})\">Tambah Operator</button>\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"operator\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Operator Name</th>\n" +
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


  $templateCache.put('app/modules/operatorEntry/operatorEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Tambah Operator</div>\n" +
    "                    <div class=\"col-md-8\">\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Operator Name:</label>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\n" +
    "                                    placeholder=\"Operator Name\">\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div> \n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.operatorList\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/project/project.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Project</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.projectEntry({ id: '0'})\">Tambah Project</button>\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"project\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Project Name</th>\n" +
    "                                        <th>Operator</th>\n" +
    "                                        <th>Delivery Area</th>\n" +
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
    "                <label class=\"control-label col-sm-3 text-right\">Project Name :</label><label class=\"col-sm-9\">{{ model.title }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Operator :</label><label class=\"col-sm-9\">{{ model.operatorTitle }}</label>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row form-group\">\r" +
    "\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Delivery Area :</label><label class=\"col-sm-9\">{{ model.deliveryAreaTitle }}</label>\r" +
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
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"close()\">Cancel</button>\r" +
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
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Tambah Project</div>\n" +
    "                    <div class=\"col-md-8\">\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Project Name:</label>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\n" +
    "                                       placeholder=\"Project Name\">\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Operator:</label>\n" +
    "                            <div class=\"col-sm-6\">\n" +
    "                                <select id=\"operator_fk\" name=\"operator_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.operator_fk\" required>\n" +
    "                                    <option ng-repeat=\"x in vm.formData.operators\" ng-value=\"x.operator_pk\">{{x.title}}</option>\n" +
    "                                </select>\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Delivery Area:</label>\n" +
    "                            <div class=\"col-sm-6\">\n" +
    "                                <select id=\"deliveryArea_fk\" name=\"deliveryArea_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.deliveryArea_fk\" required>\n" +
    "                                    <option ng-repeat=\"x in vm.formData.deliveryAreas\" ng-value=\"x.deliveryArea_pk\">{{x.title}}</option>\n" +
    "                                </select>\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.projectList\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/report/activities/activities.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <div class=\"card\">\n" +
    "                            <div class=\"card-title\">Activities on {{vm.monthName}}</div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <!--User Info-->\n" +
    "                                <div class=\"col-md-10\">\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <label class=\"control-label col-sm-2\">User ID</label>\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"userId\" name=\"userId\">{{vm.user.userCode}}</label>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <label class=\"control-label col-sm-2\">Name</label>\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"name\" name=\"name\">{{vm.user.name}}</label>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <label class=\"control-label col-sm-2\">Position</label>\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"kategoriJabatanTitle\" name=\"kategoriJabatanTitle\">{{vm.user.kategoriJabatanTitle}}</label>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <div class=\"card\">\n" +
    "                            <div class=\"card-title\">Activities</div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-md-6\" id=\"exportButtons\">\n" +
    "\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-md-12\">\n" +
    "                                    <table id=\"activities\">\n" +
    "                                        <thead>\n" +
    "                                            <tr>\n" +
    "                                                <th>No</th>\n" +
    "                                                <th>Tanggal</th>\n" +
    "                                                <th>Jam</th>\n" +
    "                                                <th>Aktifitas</th>\n" +
    "                                                <th>Approved By</th>\n" +
    "                                            </tr>\n" +
    "                                        </thead>\n" +
    "                                    </table>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/report/asetHistori/asetHistori.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Histori Penggunaan Aset</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <!--User Info-->\n" +
    "                        <div class=\"col-md-10\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <label class=\"control-label col-sm-2\">User ID</label>\n" +
    "                                <label class=\"control-label col-sm-6\" id=\"userId\" name=\"userId\">{{vm.user.userCode}}</label>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <label class=\"control-label col-sm-2\">Name</label>\n" +
    "                                <label class=\"control-label col-sm-6\" id=\"name\" name=\"name\">{{vm.user.name}}</label>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <label class=\"control-label col-sm-2\">Position</label>\n" +
    "                                <label class=\"control-label col-sm-6\" id=\"kategoriJabatanTitle\" name=\"kategoriJabatanTitle\">{{vm.user.kategoriJabatanTitle}}</label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"asetHistori\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Tanggal Pinjam</th>\n" +
    "                                        <th>Tanggal Kembali</th>\n" +
    "                                        <th>Kategori Aset</th>\n" +
    "                                        <th>Nama Aset</th> \n" +
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


  $templateCache.put('app/modules/report/dailyTask/dailyTask.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Daily Task Report</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-12\">\n" +
    "                            <h5>Keterangan</h5>\n" +
    "                                <div class=\"legend-item\">\n" +
    "                                    <span class=\"dot-online\"></span><label>Online</label>\n" +
    "                                </div>\n" +
    "                                <div class=\"legend-item\">\n" +
    "                                    <span class=\"dot-offline\"></span><label>Offline</label>\n" +
    "                                </div>\n" +
    "                                <div class=\"legend-item\">\n" +
    "                                    <span class=\"dot-cuti\"></span><label>Cuti Izin</label>\n" +
    "                                </div>\n" +
    "                                <div class=\"legend-item\">\n" +
    "                                    <span class=\"dot-unassigned\"></span><label>No Assignment</label>\n" +
    "                                </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-6\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"dailyTask\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>User ID</th>\n" +
    "                                        <th>Nama</th>\n" +
    "                                        <th>Role</th>\n" +
    "                                        <th>Position</th>\n" +
    "                                        <th>Status</th>\n" +
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


  $templateCache.put('app/modules/report/taskEngineer/taskEngineer.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Task Engineer</div>\n" +
    "                    <!--<div class=\"row form-group\">\n" +
    "                        <label class=\"control-label col-sm-1\">User ID:</label>\n" +
    "                        <div class=\"col-sm-2\">\n" +
    "                            <select id=\"user_fk\" name=\"user_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.user_fk\" required>\n" +
    "                                <option ng-repeat=\"x in vm.formData.users\" ng-value=\"x.user_pk\">{{x.title}}</option>\n" +
    "                            </select>\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                        <label class=\"control-label col-xs-1\">Name:</label>\n" +
    "                        <div class=\"col-sm-2\">\n" +
    "                            <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" ng-model=\"vm.model.username\" disabled>\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                        <label class=\"control-label col-xs-1\">BTS:</label>\n" +
    "                        <div class=\"col-sm-2\">\n" +
    "                            <select id=\"bts_fk\" name=\"bts_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.bts_fk\" required>\n" +
    "                                <option ng-repeat=\"x in vm.formData.btses\" ng-value=\"x.bts_pk\">{{x.title}}</option>\n" +
    "                            </select>\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row form-group col-md-2 radio\">\n" +
    "                        <label><input type=\"radio\" name=\"optradio\" value=\"1\">Jangka Waktu</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <label class=\"control-label col-sm-1\">Tgl Mulai :</label>\n" +
    "                        <div class=\"col-sm-2\">\n" +
    "                            <input type=\"text\" id=\"tglMulai\" name=\"tglMulai\" ng-model=\"vm.model.tglMulai\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" />\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                        <label class=\"control-label col-xs-1\">Tgl Akhir :</label>\n" +
    "                        <div class=\"col-sm-2\">\n" +
    "                            <input type=\"text\" id=\"tglAkhir\" name=\"tglAkhir\" ng-model=\"vm.model.tglAkhir\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" />\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"row form-group col-md-2 radio\">\n" +
    "                        <label><input type=\"radio\" name=\"optradio\" value=\"1\">Periode Waktu</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <label class=\"control-label col-sm-1\">Periode:</label>\n" +
    "                        <div class=\"col-sm-2\">\n" +
    "                            <select id=\"bulan_fk\" name=\"bulan_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.bulan_fk\" required>\n" +
    "                                <option ng-repeat=\"x in vm.formData.bulans\" ng-value=\"x.bulan_pk\">{{x.title}}</option>\n" +
    "                            </select>\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row form-group col-md-2\">\n" +
    "                        <button id=\"searchButton\" class=\"btn btn-success\">Search</button>\n" +
    "                    </div>-->\n" +
    "\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"taskEngineer\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Assign Number</th>\n" +
    "                                        <th>User ID</th>\n" +
    "                                        <th>Name</th>\n" +
    "                                        <th>Position</th>\n" +
    "                                        <th>BTS</th>\n" +
    "                                        <th>Task Status</th>\n" +
    "                                        <th>Detail</th>\n" +
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


  $templateCache.put('app/modules/report/taskEngineerDetail/taskEngineerDetail.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <div class=\"card\">\n" +
    "                            <div class=\"card-title\">Task Engineer Detail</div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <!--User Info-->\n" +
    "                                <div class=\"form-group col-md-12\">\n" +
    "                                    <div class=\"form-group col-md-12\">\n" +
    "                                        <div class=\"row\">\n" +
    "                                            <label class=\"control-label col-sm-2\">Assign Number</label>\n" +
    "                                            <label class=\"control-label col-sm-6\" id=\"assignNumber\" name=\"assignNumber\">{{vm.sowAssign.assignNumber}}</label>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"row\">\n" +
    "                                            <label class=\"control-label col-sm-2\">Tanggal</label>\n" +
    "                                            <label class=\"control-label col-sm-6\" id=\"tglMulai\" name=\"tglMulai\">{{vm.sowAssign.tglMulai}}</label>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"row\">\n" +
    "                                            <label class=\"control-label col-sm-2\">Tanggal Expired</label>\n" +
    "                                            <label class=\"control-label col-sm-6\" id=\"tglSelesai\" name=\"tglSelesai\">{{vm.sowAssign.tglSelesai}}</label>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"form-group col-md-4\">\n" +
    "                                    <div class=\"card-title\">Engineer</div>\n" +
    "                                    <!--Photo-->\n" +
    "                                    <div class=\"col-md-4\">\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <!--User Info-->\n" +
    "                                    <div class=\"col-md-12\">\n" +
    "                                        <div class=\"row\">\n" +
    "                                            <label class=\"control-label col-sm-3\">User ID</label>\n" +
    "                                            <label class=\"control-label col-sm-9\" id=\"userId\" name=\"userId\">{{vm.user.userCode}}</label>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"row\">\n" +
    "                                            <label class=\"control-label col-sm-3\">Name</label>\n" +
    "                                            <label class=\"control-label col-sm-9\" id=\"name\" name=\"name\">{{vm.user.name}}</label>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"row\">\n" +
    "                                            <label class=\"control-label col-sm-3\">Position</label>\n" +
    "                                            <label class=\"control-label col-sm-9\" id=\"kategoriJabatanTitle\" name=\"kategoriJabatanTitle\">{{vm.user.kategoriJabatanTitle}}</label>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-8\">\n" +
    "                                    <div class=\"card-title\">BTS Info</div>\n" +
    "                                    <div class=\"col-md-12\">\n" +
    "                                        <div class=\"col-md-12\">\n" +
    "                                            <div class=\"row\">\n" +
    "                                                <label class=\"control-label col-sm-2\">BTS Name</label>\n" +
    "                                                <label class=\"control-label col-sm-6\" id=\"name\" name=\"name\">{{vm.bts.name}}</label>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"row\">\n" +
    "                                                <label class=\"control-label col-sm-2\">Technology</label>\n" +
    "                                                <label class=\"control-label col-sm-6\" id=\"technology\" name=\"technology\">{{vm.bts.technology}}</label>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"row\">\n" +
    "                                                <label class=\"control-label col-sm-2\">Longitude</label>\n" +
    "                                                <label class=\"control-label col-sm-6\" id=\"longitude\" name=\"longitude\">{{vm.bts.longitude}}</label>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"row\">\n" +
    "                                                <label class=\"control-label col-sm-2\">Latitude</label>\n" +
    "                                                <label class=\"control-label col-sm-6\" id=\"latitude\" name=\"latitude\">{{vm.bts.latitude}}</label>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"row\">\n" +
    "                                                <label class=\"control-label col-sm-2\">Location</label>\n" +
    "                                                <label class=\"control-label col-sm-6\" id=\"location\" name=\"location\">{{vm.bts.location}}</label>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "\n" +
    "                                    </div>\n" +
    "\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-md-12\">\n" +
    "                                    <div class=\"card-title\">Kendala</div>\n" +
    "\n" +
    "                                    <!--User Info-->\n" +
    "                                    <div class=\"col-md-8\">\n" +
    "                                        <div class=\"row\">\n" +
    "                                            <label class=\"control-label col-sm-3\">Sebab Kendala</label>\n" +
    "                                            <label class=\"control-label col-sm-9\" id=\"userId\" name=\"userId\">{{vm.user.sebabKendala}}</label>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"row\">\n" +
    "                                            <label class=\"control-label col-sm-3\">Alasan</label>\n" +
    "                                            <label class=\"control-label col-sm-9\" id=\"alasan\" name=\"alasan\">{{vm.user.alasan}}</label>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/report/timesheetEngineer/timesheetEngineer.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Timesheet Engineer</div>\n" +
    "                    <!--<div class=\"row form-group\">\n" +
    "                        <label class=\"control-label col-sm-2\">User ID:</label>\n" +
    "                        <div class=\"col-sm-3\">\n" +
    "                            <select id=\"user_fk\" name=\"user_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.user_fk\" required>\n" +
    "                                <option ng-repeat=\"x in vm.formData.users\" ng-value=\"x.user_pk\">{{x.title}}</option>\n" +
    "                            </select>\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                        <label class=\"control-label col-sm-2\">Name:</label>\n" +
    "                        <div class=\"col-sm-3\">\n" +
    "                            <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" ng-model=\"vm.model.username\" disabled>\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group col-md-2\">\n" +
    "                            <button id=\"searchButton\" class=\"btn btn-success\">Search</button>\n" +
    "                        </div>\n" +
    "                    </div>-->\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"timesheetEngineer\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>User ID</th>\n" +
    "                                        <th>Name</th>\n" +
    "                                        <th>Position</th>\n" +
    "                                        <th>Detail</th>\n" +
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


  $templateCache.put('app/modules/report/timesheetEngineerDetail/timesheetEngineerDetail.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <div class=\"card\">\n" +
    "                            <div class=\"card-title\">User Profile</div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <!--Photo-->\n" +
    "                                <div class=\"col-md-2\">\n" +
    "                                </div>\n" +
    "\n" +
    "                                <!--User Info-->\n" +
    "                                <div class=\"col-md-10\">\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <label class=\"control-label col-sm-2\">User ID</label>\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"userId\" name=\"userId\">{{vm.user.userCode}}</label>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <label class=\"control-label col-sm-2\">Position</label>\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"kategoriJabatanTitle\" name=\"kategoriJabatanTitle\">{{vm.user.kategoriJabatanTitle}}</label>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <label class=\"control-label col-sm-2\">Username</label>\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"username\" name=\"username\">{{vm.user.username}}</label>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <label class=\"control-label col-sm-2\">Phone</label>\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"noHP\" name=\"noHP\">{{vm.user.noHP}}</label>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <label class=\"control-label col-sm-2\">Email</label>\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"email\" name=\"email\">{{vm.user.email}}</label>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <label class=\"control-label col-sm-2\">Address</label>\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"address\" name=\"address\">{{vm.user.address}}</label>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row form-group\">\n" +
    "                                        <label class=\"control-label col-sm-2\">Asset</label>\n" +
    "                                        <button class=\"btn btn-info col-sm-4\" ui-sref=\"app.asetHistoriList({ userDetail_pk: vm.user.userDetail_fk})\">Histori Penggunaan Aset</button>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <div class=\"card\">\n" +
    "                            <div class=\"card-title\">Time Sheet</div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-1\">Bulan:</label>\n" +
    "                                <div class=\"col-sm-3\">\n" +
    "                                    <select id=\"bulan\" name=\"bulan\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.bulan\" required>\n" +
    "                                        <option ng-repeat=\"x in vm.formData.months\" ng-value=\"x.bulan\">{{x.bulanName}}</option>\n" +
    "                                    </select> \n" +
    "                                </div>\n" +
    "                                <label class=\"control-label col-sm-1\">Tahun:</label>\n" +
    "                                <div class=\"col-sm-3\">\n" +
    "                                    <select id=\"tahun\" name=\"tahun\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.tahun\" required>\n" +
    "                                        <option ng-repeat=\"x in vm.formData.years\" ng-value=\"x.tahun\">{{x.tahun}}</option>\n" +
    "                                    </select> \n" +
    "                                </div>\n" +
    "                                <div class=\"form-group col-md-2\">\n" +
    "                                    <button id=\"searchButton\" class=\"btn btn-success\">Search</button>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-md-12\">\n" +
    "                                    <table id=\"timesheetEngineerDetail\">\n" +
    "                                        <thead>\n" +
    "                                            <tr>\n" +
    "                                                <th>No</th>\n" +
    "                                                <th>Bulan Number</th>\n" +
    "                                                <th>Bulan</th>\n" +
    "                                                <th>Tahun</th>\n" +
    "                                                <th>Detail</th>\n" +
    "                                            </tr>\n" +
    "                                        </thead>\n" +
    "                                    </table>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
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
    "                                       placeholder=\"Role Title\">\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Description :</label>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <textarea class=\"form-control\" ng-model=\"vm.model.description\" name=\"description\" placeholder=\"Description\">\n" +
    "                                        </textarea>\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.role-list\">Kembali</button> <button class=\"btn btn-success float-right\"\n" +
    "                                                                                                                 id=\"saveButton\">\n" +
    "                                    Tambah Role\n" +
    "                                </button>\n" +
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
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Role</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.role-entry({ id: '0'})\">Tambah Role</button>\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"role\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Title</th>\n" +
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
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"close()\">Cancel</button>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/roleGroup/roleGroup.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Role Group</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.roleGroupEntry({ id: '0'})\">Tambah Role Group</button>\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"roleGroup\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Title</th>\n" +
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
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"close()\">Cancel</button>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/roleGroupEntry/roleGroupEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Tambah RoleGroup</div>\n" +
    "                    <div class=\"col-md-8\">\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Role Group Name :</label>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\n" +
    "                                    placeholder=\"Role Group Name\">\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Description :</label>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <textarea class=\"form-control\" ng-model=\"vm.model.description\" name=\"description\" placeholder=\"Description\">\n" +
    "                                        </textarea>\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.roleGroupList\">Kembali</button> <button class=\"btn btn-success float-right\"\n" +
    "                                    id=\"saveButton\">Tambah RoleGroup</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/sow/sow.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List SOW</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.sowEntry({ id: '0'})\">Add Task</button>\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"sow\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>SOW</th>\n" +
    "                                        <th>BTS</th>\n" +
    "                                        <th>Tanggal</th>\n" +
    "                                        <th>Status</th>\n" +
    "                                        <th>Action</th>\n" +
    "                                        <th>Approval</th>\n" +
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


  $templateCache.put('app/modules/sowEntry/sowEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Tambah SOW</div>\n" +
    "\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">SOW Name:</label>\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <input type=\"text\" id=\"sowName\" name=\"sowName\" class=\"form-control\" ng-model=\"vm.model.sowName\" placeholder=\"SOW Name\">\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Project:</label>\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <select id=\"project_fk\" name=\"project_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.project_fk\" required>\n" +
    "                                        <option ng-repeat=\"x in vm.formData.projects\" ng-value=\"x.project_pk\">{{x.title}}</option>\n" +
    "                                    </select>\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">BTS:</label>\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <select id=\"bts_fk\" name=\"bts_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.bts_fk\" required>\n" +
    "                                        <option ng-repeat=\"x in vm.formData.btses\" ng-value=\"x.bts_pk\">{{x.name}}</option>\n" +
    "                                    </select>\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Tanggal :</label>\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <input type=\"text\" id=\"tglMulai\" name=\"tglMulai\" ng-model=\"vm.model.tglMulai\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" required />\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <fieldset>\n" +
    "                                    <div class=\"card-title\">Assign</div>\n" +
    "                                    <div class=\"col-md-12\">\n" +
    "                                        <table id=\"sowAssign\">\n" +
    "                                            <thead>\n" +
    "                                                <tr>\n" +
    "                                                    <th hidden>SOWAssign_PK</th>\n" +
    "                                                    <th hidden>SOW FK</th>\n" +
    "                                                    <th hidden>Jabatan FK</th>\n" +
    "                                                    <th>Jabatan</th>\n" +
    "                                                    <th>User</th>\n" +
    "                                                </tr>\n" +
    "                                            </thead>\n" +
    "                                            <tbody>\n" +
    "                                                <tr ng-repeat=\"sowAssign in vm.model.sowAssigns\">\n" +
    "                                                    <td hidden>\n" +
    "                                                        <input type=\"text\" id=\"sowAssign_pk\" name=\"sowAssign_pk\" ng-model=\"sowAssign.sowAssign_pk\" disabled />\n" +
    "                                                        <div class=\"invalid-feedback\"></div>\n" +
    "                                                    </td>\n" +
    "                                                    <td class=\"text-center\" hidden>\n" +
    "                                                        <input type=\"text\" id=\"sow_fk\" name=\"sow_fk\" ng-model=\"sowAssign.sow_fk\" disabled />\n" +
    "                                                        <div class=\"invalid-feedback\"></div>\n" +
    "                                                    </td>\n" +
    "                                                    <td class=\"text-left\" hidden>\n" +
    "                                                        <input type=\"text\" id=\"kategoriJabatan_fk\" name=\"kategoriJabatan_fk\" class=\"form-control\" ng-model=\"sowAssign.kategoriJabatan_fk\" disabled />\n" +
    "                                                        <div class=\"invalid-feedback\"></div>\n" +
    "                                                    </td>\n" +
    "                                                    <td class=\"text-left\">\n" +
    "                                                        <input type=\"text\" id=\"kategoriJabatanTitle\" name=\"kategoriJabatanTitle\" class=\"form-control\" ng-model=\"sowAssign.kategoriJabatanTitle\" disabled />\n" +
    "                                                        <div class=\"invalid-feedback\"></div>\n" +
    "                                                    </td>\n" +
    "                                                    <td>\n" +
    "                                                        <ui-select id=\"user_fk\" name=\"user_fk\" ng-model=\"sowAssign.user_fk\" size=\"0\" theme=\"select2\" ng-disabled=\"vm.disabled\" title=\"Find user\"\n" +
    "                                                                   required style=\"width:200px\">\n" +
    "                                                            <ui-select-match placeholder=\"Find user\">{{$select.selected.name}}</ui-select-match>\n" +
    "                                                            <ui-select-choices refresh=\"vm.getUsers(sowAssign.kategoriJabatan_fk, $select.search)\" refresh-delay=\"0\" repeat=\"user.user_pk as user in vm.formData.users\">\n" +
    "                                                                <div ng-bind-html=\"user.name | highlight: $select.search\"></div>\n" +
    "                                                            </ui-select-choices>\n" +
    "                                                        </ui-select>\n" +
    "                                                        <div class=\"invalid-feedback\"></div>\n" +
    "                                                    </td>\n" +
    "                                                </tr>\n" +
    "                                            </tbody>\n" +
    "                                        </table>\n" +
    "                                    </div>\n" +
    "                                </fieldset>\n" +
    "                            </div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <div class=\"col-md-8\">\n" +
    "                                    <button class=\"btn btn-default\" ui-sref=\"app.sowList\">Kembali</button>\n" +
    "                                    <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <!--<div class=\"card-title\">Track</div>-->\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <div class=\"col-sm-12 input-group\">\n" +
    "                                    <div class=\"input-group-prepend\">\n" +
    "                                        <span class=\"input-group-text\" id=\"inputGroupFileAddon01\">Upload</span>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"custom-file\">\n" +
    "                                        <input type=\"file\" class=\"custom-file-input\" id=\"kmlFile\" aria-describedby=\"inputGroupFileAddon01\">\n" +
    "                                        <label id=\"fileName\" class=\"custom-file-label\" for=\"filePhoto\">Choose file</label>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div id=\"map\" style=\"border:1px solid gray\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/sowInfo/costEntryModal/costEntryModal.html',
    "<div class=\"modal-header\">\n" +
    "    <h5 class=\"modal-title\">Add Cost</h5>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-body\">\n" +
    "    <div class=\"row form-group\">\n" +
    "        <label class=\"control-label col-sm-2\">Tanggal :</label>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "            <input type=\"text\" id=\"tanggal\" name=\"tanggal\" ng-model=\"vm.model.tanggal\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" required />\n" +
    "            <div class=\"invalid-feedback\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row form-group\">\n" +
    "        <label class=\"control-label col-sm-2\">Kategori:</label>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "            <select id=\"kategoriCost_fk\" name=\"kategoriCost_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.kategoriCost_fk\" required>\n" +
    "                <option ng-repeat=\"x in vm.formData.costKategoris\" ng-value=\"x.costKategori_pk\">{{x.title}}</option>\n" +
    "            </select>\n" +
    "            <div class=\"invalid-feedback\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row form-group\">\n" +
    "        <label class=\"control-label col-sm-2\">Nominal:</label>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "            <input type=\"Number\" id=\"nominal\" name=\"nominal\" class=\"form-control\" ng-model=\"vm.model.nominal\" placeholder=\"SOW Name\">\n" +
    "            <div class=\"invalid-feedback\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row form-group\">\n" +
    "        <label class=\"control-label col-sm-2\">Description:</label>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "            <textarea type=\"text\" class=\"form-control\" id=\"deskripsi\" name=\"deskripsi\" ng-model=\"vm.model.deskripsi\" placeholder=\"Description\"></textarea>\n" +
    "            <div class=\"invalid-feedback\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button id=\"saveButton\" class=\"btn btn-primary\" type=\"button\">Save</button>\n" +
    "    <button id=\"cancelButton\" class=\"btn btn-default\" type=\"button\">Cancel</button>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/sowInfo/sowInfo.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <div class=\"card\">\n" +
    "                            <div class=\"card-title\">SOW Detail</div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-md-6\">\n" +
    "                                    <label class=\"control-label col-sm-2\">SOW:</label>\n" +
    "                                    <label class=\"control-label col-sm-6\" id=\"sowName\" name=\"sowName\">{{vm.model.sowName}}</label>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-md-6\">\n" +
    "                                    <label class=\"control-label col-sm-3\">Tanggal:</label>\n" +
    "                                    <label class=\"control-label col-sm-6\" id=\"tglMulai\" name=\"tglMulai\">{{vm.model.tglMulai}}</label>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <!--BTS Info-->\n" +
    "                                <div class=\"col-md-6\">\n" +
    "                                    <div class=\"card-title\">BTS Info</div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <label class=\"control-label col-sm-3\">Customer Site</label>\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"customerSite\" name=\"customerSite\">{{vm.model.btsInfo.customerSite}}</label>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <label class=\"control-label col-sm-3\">Tower ID</label>\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"towerId\" name=\"towerId\">{{vm.model.btsInfo.towerId}}</label>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <label class=\"control-label col-sm-3\">Cell ID</label>\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"cellId\" name=\"cellId\">{{vm.model.btsInfo.cellId}}</label>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <label class=\"control-label col-sm-3\">BTS Name</label>\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"name\" name=\"name\">{{vm.model.btsInfo.name}}</label>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <label class=\"control-label col-sm-3\">Tower Provider</label>\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"operatorTitle\" name=\"operatorTitle\">{{vm.model.btsInfo.operatorTitle}}</label>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <label class=\"control-label col-sm-3\">Longitude</label>\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"longitude\" name=\"longitude\">{{vm.model.btsInfo.longitude}}</label>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <label class=\"control-label col-sm-3\">Latitude</label>\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"latitude\" name=\"latitude\">{{vm.model.btsInfo.latitude}}</label>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <label class=\"control-label col-sm-3\">Area</label>\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"areaTitle\" name=\"areaTitle\">{{vm.model.btsInfo.areaTitle}}</label>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <label class=\"control-label col-sm-3\">Kota</label>\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"kotaTitle\" name=\"kotaTitle\">{{vm.model.btsInfo.kotaTitle}}</label>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <label class=\"control-label col-sm-3\">Cabang</label>\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"cabangTitle\" name=\"cabangTitle\">{{vm.model.btsInfo.cabangTitle}}</label>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <label class=\"control-label col-sm-3\">Alamat</label>\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"alamat\" name=\"alamat\">{{vm.model.btsInfo.alamat}}</label>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <!--Assigned User-->\n" +
    "                                <div class=\"col-md-6\">\n" +
    "                                    <div class=\"card-title\">Assigned User</div>\n" +
    "                                    <div class=\"row form-group\">\n" +
    "                                        <table id=\"sowAssign\">\n" +
    "                                            <thead>\n" +
    "                                                <tr>\n" +
    "                                                    <th hidden>SOWAssign_PK</th>\n" +
    "                                                    <th hidden>SOW FK</th>\n" +
    "                                                    <th hidden>Jabatan FK</th>\n" +
    "                                                    <th>Jabatan</th>\n" +
    "                                                    <th>User</th>\n" +
    "                                                </tr>\n" +
    "                                            </thead>\n" +
    "                                            <tbody>\n" +
    "                                                <tr ng-repeat=\"sowAssign in vm.model.sowAssigns\">\n" +
    "                                                    <td hidden>\n" +
    "                                                        <input type=\"text\" id=\"sowAssign_pk\" name=\"sowAssign_pk\" ng-model=\"sowAssign.sowAssign_pk\" disabled />\n" +
    "                                                    </td>\n" +
    "                                                    <td class=\"text-center\" hidden>\n" +
    "                                                        <input type=\"text\" id=\"sow_fk\" name=\"sow_fk\" ng-model=\"sowAssign.sow_fk\" disabled />\n" +
    "                                                    </td>\n" +
    "                                                    <td class=\"text-left\" hidden>\n" +
    "                                                        <input type=\"text\" id=\"kategoriJabatan_fk\" name=\"kategoriJabatan_fk\" class=\"form-control\" ng-model=\"sowAssign.kategoriJabatan_fk\" disabled />\n" +
    "                                                    </td>\n" +
    "                                                    <td class=\"text-left\" style=\"width:200px\">\n" +
    "                                                        <label id=\"kategoriJabatanTitle\" name=\"kategoriJabatanTitle\">{{sowAssign.kategoriJabatanTitle}}</label>\n" +
    "                                                    </td>\n" +
    "                                                    <td>\n" +
    "                                                        <label id=\"userName\" name=\"userName\"> {{sowAssign.userName}}</label>\n" +
    "                                                    </td>\n" +
    "                                                </tr>\n" +
    "                                            </tbody>\n" +
    "                                        </table>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-md-12\">\n" +
    "                                    <button class=\"btn btn-default\" ui-sref=\"app.sowList\">Kembali</button>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <div class=\"card\">\n" +
    "                            <div class=\"card-title\">Track Location</div>\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <div class=\"card\">\n" +
    "                            <div class=\"card-title\">List Cost</div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"form-group col-md-12\">\n" +
    "                                    <button id=\"addCost\" class=\"btn btn-success\">Add Cost</button>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-md-12\">\n" +
    "                                    <table id=\"cost\">\n" +
    "                                        <thead>\n" +
    "                                            <tr>\n" +
    "                                                <th>No</th>\n" +
    "                                                <th>Kategori</th>\n" +
    "                                                <th>Nominal</th>\n" +
    "                                                <th>Deskripsi</th>\n" +
    "                                                <th>Tanggal Input</th>\n" +
    "                                                <th>Action</th>\n" +
    "                                            </tr>\n" +
    "                                        </thead>\n" +
    "                                    </table>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/technology/technology.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Technology</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.technologyEntry({ id: '0'})\">Tambah Technology</button>\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"technology\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Title</th>\n" +
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


  $templateCache.put('app/modules/technologyEntry/technologyEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Tambah Technology</div>\n" +
    "                    <div class=\"col-md-8\">\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Technology Name:</label>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <input type=\"text\" id=\"title\" name=\"title\" class=\"form-control\" ng-model=\"vm.model.title\" placeholder=\"Technology Name\">\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.technologyList\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
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
    "                            <button class=\"btn btn-success\" ui-sref=\"app.userEntry({ id: '0'})\">Tambah User</button>\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.userImportCsv({})\">Import from CSV</button>\r" +
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
    "            <img id=\"photo\" src=\"/app/assets/images/default-large.png\" style=\"width:150px;margin:0 auto\" class=\"img-fluid\" />\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"col-md-9\">\r" +
    "\n" +
    "\r" +
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
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"close()\">Cancel</button>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('app/modules/userEntry/userEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Tambah User</div>\n" +
    "\n" +
    "                    <div class=\"row col-sm-6 form-group\">\n" +
    "                        <img id=\"photo\" src=\"/app/assets/images/default.png\" class=\"img-center img-fluid\" />\n" +
    "                    </div>\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <div class=\"col-sm-6 input-group\">\n" +
    "                            <div class=\"input-group-prepend\">\n" +
    "                                <span class=\"input-group-text\" id=\"inputGroupFileAddon01\">Upload</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"custom-file\">\n" +
    "                                <input type=\"file\" class=\"custom-file-input\" id=\"filePhoto\" aria-describedby=\"inputGroupFileAddon01\">\n" +
    "                                <label id=\"fileName\" class=\"custom-file-label\" for=\"filePhoto\">Choose file</label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <label class=\"control-label col-sm-2\">Name:</label>\n" +
    "                        <div class=\"col-sm-4\">\n" +
    "                            <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" ng-model=\"vm.model.name\" placeholder=\"Name\">\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <label class=\"control-label col-sm-2\">Position:</label>\n" +
    "                        <div class=\"col-sm-4\">\n" +
    "                            <select id=\"kategoriJabatan_fk\" name=\"kategoriJabatan_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.kategoriJabatan_fk\" required>\n" +
    "                                <option ng-repeat=\"x in vm.formData.kategoriJabatans\" ng-value=\"x.kategoriJabatan_pk\">{{x.title}}</option>\n" +
    "                            </select>\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <label class=\"control-label col-sm-2\">Phone Number:</label>\n" +
    "                        <div class=\"col-sm-4\">\n" +
    "                            <input type=\"text\" class=\"form-control\" id=\"noHP\" name=\"noHP\" ng-model=\"vm.model.noHP\" placeholder=\"Phone Number\">\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <label class=\"control-label col-md-2\">Email:</label>\n" +
    "                        <div class=\"col-sm-4\">\n" +
    "                            <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" ng-model=\"vm.model.email\" placeholder=\"Email\">\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <label class=\"control-label col-sm-2\">Nomor KTP:</label>\n" +
    "                        <div class=\"col-sm-4\">\n" +
    "                            <input type=\"text\" class=\"form-control\" id=\"noKTP\" name=\"noKTP\" ng-model=\"vm.model.noKTP\" placeholder=\"Nomor KTP\">\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <label class=\"control-label col-sm-2\">Username:</label>\n" +
    "                        <div class=\"col-sm-4\">\n" +
    "                            <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" autocomplete=\"off\" ng-model=\"vm.model.username\" placeholder=\"Username\">\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <label class=\"control-label col-sm-2\">Password:</label>\n" +
    "                        <div class=\"col-sm-4\">\n" +
    "                            <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" autocomplete=\"off\" ng-model=\"vm.model.password\" placeholder=\"Password\">\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <label class=\"control-label col-sm-2\">Retype Password:</label>\n" +
    "                        <div class=\"col-sm-4\">\n" +
    "                            <input type=\"password\" class=\"form-control\" id=\"reTypePassword\" name=\"reTypePassword\" autocomplete=\"off\" ng-model=\"vm.model.reTypePassword\" placeholder=\"Retype Password\">\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <label class=\"control-label col-sm-2\">Address:</label>\n" +
    "                        <div class=\"col-sm-4\">\n" +
    "                            <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\" ng-model=\"vm.model.address\" placeholder=\"Address\">\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <label class=\"control-label col-sm-2\">Description:</label>\n" +
    "                        <div class=\"col-sm-4\">\n" +
    "                            <input type=\"text\" class=\"form-control\" id=\"description\" name=\"description\" ng-model=\"vm.model.description\" placeholder=\"Description\">\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <hr />\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <button class=\"btn btn-default\" ui-sref=\"app.userList\">Kembali</button>\n" +
    "                            <button class=\"btn btn-success float-right\" id=\"saveButton\">Tambah User</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/userImportCsv/userImportCsv.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Import User</div> \n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <div class=\"col-sm-6 input-group\">\n" +
    "                            <div class=\"input-group-prepend\">\n" +
    "                                <span class=\"input-group-text\" id=\"inputGroupFileAddon01\">Upload</span>\n" +
    "                            </div>\n" +
    "                            <div class=\"custom-file\">\n" +
    "                                <input type=\"file\" class=\"custom-file-input\" id=\"file\" aria-describedby=\"inputGroupFileAddon01\">\n" +
    "                                <label id=\"fileName\" class=\"custom-file-label\" for=\"file\">Choose file</label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div> \n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <button class=\"btn btn-default\" ui-sref=\"app.userImportCsvList\">Kembali</button>\n" +
    "                            <button class=\"btn btn-success float-right\" id=\"uploadButton\">Submit</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );

}]);
