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
    "                        <div class=\"form-group col-md-12\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.areaEntry({ id: '0'})\">Tambah Area</button>\r" +
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
    "                    <div class=\"card-title\">Tambah Area</div>\r" +
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
    "                                <button class=\"btn btn-default\" ui-sref=\"app.areaList\">Kembali</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\r" +
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
    "                        <div class=\"form-group col-md-12\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.asetEntry({ id: '0'})\">Tambah Aset</button>\r" +
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
    "                            <table id=\"aset\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Kode Aset</th>\r" +
    "\n" +
    "                                        <th>Kategori</th>\r" +
    "\n" +
    "                                        <th>Nama Aset</th>\r" +
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
    "                    <div class=\"card-title\">Tambah Aset</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-4\">Kategory Asset :</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-8\">\r" +
    "\n" +
    "                                <select id=\"kategoriAset_fk\" name=\"kategoriAset_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"asetVm.model.kategoriAset_fk\" required>\r" +
    "\n" +
    "                                    <option ng-repeat=\"x in asetVm.formData.asetKategoris\" ng-value=\"x.asetKategori_pk\">{{x.title}}</option>\r" +
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
    "                            <label class=\"control-label col-sm-4\">Asset ID:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-8\">\r" +
    "\n" +
    "                                <input type=\"text\" id=\"asetId\" name=\"asetId\" class=\"form-control\" ng-model=\"asetVm.model.asetId\" required />\r" +
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
    "                            <label class=\"control-label col-sm-4\">Nama Asset :</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-8\">\r" +
    "\n" +
    "                                <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" ng-model=\"asetVm.model.name\" required />\r" +
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
    "                            <label class=\"control-label col-sm-4\">Gambar Asset :</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-8\">\r" +
    "\n" +
    "                                <input type=\"text\" id=\"filePhoto\" name=\"filePhoto\" class=\"form-control\" ng-model=\"asetVm.model.filePhoto\" />\r" +
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
    "                            <label class=\"control-label col-sm-4\">Deskripsi :</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-8\">\r" +
    "\n" +
    "                                <textarea id=\"description\" name=\"description\" class=\"form-control\" ng-model=\"asetVm.model.description\"></textarea>\r" +
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
    "                                <button class=\"btn btn-default\" ui-sref=\"app.asetList\">Kembali</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\r" +
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
    "                    <div class=\"card-title\">List Aset Kategori</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-12\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.asetKategoriEntry({ id: '0'})\">Tambah Aset Kategori</button>\r" +
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
    "                    <div class=\"card-title\">Tambah AsetKategori</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Kategori Name:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\r" +
    "\n" +
    "                                    placeholder=\"Aset Kategori Name\">\r" +
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
    "                                <button class=\"btn btn-default\" ui-sref=\"app.asetKategoriList\">Kembali</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\r" +
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
    "                        <div class=\"form-group col-md-12\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" modal-asset>Tambah Asset</button>\r" +
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
    "                    <div class=\"card-title\">List BTS</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-12\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.btsEntry({ id: '0'})\">Tambah BTS</button>\r" +
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
    "                            <table id=\"bts\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>BTS Name</th>\r" +
    "\n" +
    "                                        <th>Provider</th>\r" +
    "\n" +
    "                                        <th>Technology</th>\r" +
    "\n" +
    "                                        <th>BTS Status</th>\r" +
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
    "                    <div class=\"card-title\">Tambah Data BTS</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Customer Site ID:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <input type=\"text\" id=\"customerSite\" name=\"customerSite\" class=\"form-control\" ng-model=\"vm.model.customerSite\" placeholder=\"Customer Site ID\">\r" +
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
    "                            <label class=\"control-label col-sm-2\">Tower ID:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <input type=\"text\" id=\"towerId\" name=\"towerId\" class=\"form-control\" ng-model=\"vm.model.towerId\" placeholder=\"Tower ID\">\r" +
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
    "                            <label class=\"control-label col-sm-2\">Cell ID:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <input type=\"text\" id=\"cellId\" name=\"cellId\" class=\"form-control\" ng-model=\"vm.model.cellId\" placeholder=\"Cell ID\">\r" +
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
    "                            <label class=\"control-label col-sm-2\">BTS Name:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" ng-model=\"vm.model.name\" placeholder=\"Name\">\r" +
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
    "                            <label class=\"control-label col-sm-2\">Tower Provider:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <select id=\"operator_fk\" name=\"operator_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.operator_fk\" required>\r" +
    "\n" +
    "                                    <option ng-repeat=\"x in vm.formData.operators\" ng-value=\"x.operator_pk\">{{x.title}}</option>\r" +
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
    "                            <label class=\"control-label col-sm-2\">Longitude:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-2\">\r" +
    "\n" +
    "                                <input type=\"text\" id=\"longitude\" name=\"longitude\" class=\"form-control\" ng-model=\"vm.model.longitude\" placeholder=\"Longitude\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                            <label class=\"control-label col-md-1.5\">Latitude:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-3\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"latitude\" name=\"latitude\" ng-model=\"vm.model.latitude\" placeholder=\"Latitude\">\r" +
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
    "                            <label class=\"control-label col-sm-2\">BTS Status:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <select id=\"statusBts_fk\" name=\"statusBts_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.statusBts_fk\" required>\r" +
    "\n" +
    "                                    <option ng-repeat=\"x in vm.formData.btsStatuses\" ng-value=\"x.btsStatus_pk\">{{x.title}}</option>\r" +
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
    "                            <label class=\"control-label col-sm-2\">Area:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <select id=\"area_fk\" name=\"area_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.area_fk\" required>\r" +
    "\n" +
    "                                    <option ng-repeat=\"x in vm.formData.areas\" ng-value=\"x.area_pk\">{{x.title}}</option>\r" +
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
    "                            <label class=\"control-label col-sm-2\">Kota:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <select id=\"kota_fk\" name=\"kota_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.kota_fk\" required>\r" +
    "\n" +
    "                                    <option ng-repeat=\"x in vm.formData.kotas\" ng-value=\"x.kota_pk\">{{x.title}}</option>\r" +
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
    "                            <label class=\"control-label col-sm-2\">Cabang:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <select id=\"cabang_fk\" name=\"cabang_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.cabang_fk\" required>\r" +
    "\n" +
    "                                    <option ng-repeat=\"x in vm.formData.cabangs\" ng-value=\"x.cabang_pk\">{{x.title}}</option>\r" +
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
    "                            <label class=\"control-label col-sm-2\">Alamat:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <textarea class=\"form-control\" ng-model=\"vm.model.alamat\" name=\"alamat\" placeholder=\"Alamat\">\r" +
    "\n" +
    "                                        </textarea>\r" +
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
    "                            <div class=\"col-md-12\">\r" +
    "\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.btsList\">Kembali</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\r" +
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
    "                        <div class=\"form-group col-md-12\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.cabangEntry({ id: '0'})\">Tambah Cabang</button>\r" +
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
    "                                <button class=\"btn btn-default\" ui-sref=\"app.cabangList\">Kembali</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\r" +
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
    "                    <div class=\"card-title\">List Cost Kategori</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-12\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.costKategoriEntry({ id: '0'})\">Tambah Cost Kategori</button>\r" +
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
    "                    <div class=\"card-title\">Tambah Cost Kategori</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Cost Kategori Name:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\r" +
    "\n" +
    "                                    placeholder=\"Cost Kategori Name\">\r" +
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
    "                                <button class=\"btn btn-default\" ui-sref=\"app.costKategoriList\">Kembali</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\r" +
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
    "                    <div class=\"card-title\">List Delivery Area</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-12\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.deliveryAreaEntry({ id: '0'})\">Tambah Delivery Area</button>\r" +
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
    "                    <div class=\"card-title\">Tambah Delivery Area</div>\r" +
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
    "                                <button class=\"btn btn-default\" ui-sref=\"app.deliveryAreaList\">Kembali</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\r" +
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
    "                    <div class=\"card-title\">List Izin Cuti</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-12\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.izinCutiEntry({ id: '0'})\">Tambah Izin Cuti</button>\r" +
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
    "                            <table id=\"izinCuti\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Kode Izin/Cuti</th>\r" +
    "\n" +
    "                                        <th>User</th>\r" +
    "\n" +
    "                                        <th>Position</th>\r" +
    "\n" +
    "                                        <th>Keterangan</th>\r" +
    "\n" +
    "                                        <th>Tanggal Izin/Cuti</th>\r" +
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
    "                    <div class=\"card-title\">List Approval Izin Cuti</div> \r" +
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
    "                                        <th>Kode Izin/Cuti</th>\r" +
    "\n" +
    "                                        <th>User</th>\r" +
    "\n" +
    "                                        <th>Position</th>\r" +
    "\n" +
    "                                        <th>Keterangan</th>\r" +
    "\n" +
    "                                        <th>Tanggal Izin/Cuti</th>\r" +
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
    "                    <div class=\"card-title\">Detail Izin Cuti</div>\r" +
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
    "                            <label class=\"control-label col-sm-2\">Nama Pengaju:</label>\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">{{vm.model.userIzinCutiName}}</label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Posisi:</label>\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">{{vm.model.userIzinCutiJabatan}}</label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Tanggal Izin/Cuti:</label>\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-3\">{{vm.model.tglMulai}}</label> \r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Alasan:</label>\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-8\">{{vm.model.alasan}}</label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <div class=\"col-md-4\">\r" +
    "\n" +
    "                                <button class=\"btn btn-success\" id=\"approveButton\">Approve</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-danger\" id=\"rejectButton\">Reject</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-info float-right\" ui-sref=\"app.izinCutiApprovalList\">Kembali</button>\r" +
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
    "                    <div class=\"card-title\">Pengajuan Izin Cuti</div>\r" +
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
    "                            <label class=\"control-label col-sm-2\">Nama Pengaju:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-3\">\r" +
    "\n" +
    "                                <input type=\"text\" id=\"userIzinCutiName\" name=\"userIzinCutiName\" class=\"form-control\" ng-model=\"vm.model.userIzinCutiName\" placeholder=\"Nama Pengaju\" disabled>\r" +
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
    "                            <label class=\"control-label col-sm-2\">Posisi:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-2\">\r" +
    "\n" +
    "                                <input type=\"text\" id=\"userIzinCutiJabatan\" name=\"userIzinCutiJabatan\" class=\"form-control\" ng-model=\"vm.model.userIzinCutiJabatan\" placeholder=\"Posisi\" disabled>\r" +
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
    "                            <label class=\"control-label col-sm-2\">Tanggal Izin/Cuti:</label>\r" +
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
    "                            <label class=\"control-label col-sm-2\">Alasan:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-8\">\r" +
    "\n" +
    "                                <textarea id=\"alasan\" name=\"alasan\" class=\"form-control\" ng-model=\"vm.model.alasan\" placeholder=\"Alasan\"></textarea>\r" +
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
    "                                <button class=\"btn btn-default\" ui-sref=\"app.izinCutiList\">Kembali</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\r" +
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
    "                    <div class=\"card-title\">List Kategori Jabatan</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-12\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.kategoriJabatanEntry({ id: '0'})\">Tambah Kategori Jabatan</button>\r" +
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
    "                    <div class=\"card-title\">Kategori Jabatan</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Kategori Jabatan:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\r" +
    "\n" +
    "                                    placeholder=\"Kategori Jabatan\">\r" +
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
    "                                <button class=\"btn btn-default\" ui-sref=\"app.kategoriJabatanList\">Kembali</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\r" +
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
    "                    <div class=\"card-title\">List Kota</div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div class=\"form-group col-md-12\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.kotaEntry({ id: '0'})\">Tambah Kota</button>\r" +
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
    "                    <div class=\"card-title\">Tambah Kota</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Kota:</label>\r" +
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
    "                                <button class=\"btn btn-default\" ui-sref=\"app.kotaList\">Kembali</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\r" +
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
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.mappingUserToRoleGroupList\">\r" +
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
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.mappingUserToAuthParamList\">\r" +
    "\n" +
    "                            <i class=\"fas fa-circle\"></i> <span>Mapping User to Auth Param</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.kategoriJabatanList\">\r" +
    "\n" +
    "                            <i class=\"fas fa-circle\"></i> <span>Kategori Jabatan</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li class=\"nav-item nav-dropdown\" ng-class=\"{open: $state.includes('app.availability')}\">\r" +
    "\n" +
    "                <a class=\"nav-link nav-dropdown-toggle\" ng-class=\"{active: $state.includes('app.availability')}\" href=\"#\">\r" +
    "\n" +
    "                    <i class=\"fa fa-luggage-cart\"></i> <span>Master Data</span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "                <ul class=\"nav-dropdown-items\">\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.btsList\">\r" +
    "\n" +
    "                            <i class=\"fa fa-train\"></i> <span>BTS</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.projectList\">\r" +
    "\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Project</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.asetList\">\r" +
    "\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Asset</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.sowList\">\r" +
    "\n" +
    "                            <i class=\"fa fa-user\"></i> <span>SOW</span>\r" +
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
    "                    <i class=\"fa fa-luggage-cart\"></i> <span>Complementary</span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "                <ul class=\"nav-dropdown-items\">\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.operatorList\">\r" +
    "\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Operator/Tower Provider</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.costKategoriList\">\r" +
    "\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Cost Kategori</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.areaList\">\r" +
    "\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Area</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.deliveryAreaList\">\r" +
    "\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Delivery Area</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.kotaList\">\r" +
    "\n" +
    "                            <i class=\"fa fa-user\"></i> <span>Kota</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.cabangList\">\r" +
    "\n" +
    "                            <i class=\"fa fa-user\"></i> <span>Cabang</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.asetKategoriList\">\r" +
    "\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Aset Kategori</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <li class=\"nav-item nav-dropdown\" ng-class=\"{open: $state.includes('app.availability')}\">\r" +
    "\n" +
    "                <a class=\"nav-link nav-dropdown-toggle\" ng-class=\"{active: $state.includes('app.availability')}\" href=\"#\">\r" +
    "\n" +
    "                    <i class=\"fa fa-luggage-cart\"></i> <span>Izin / Cuti</span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "                <ul class=\"nav-dropdown-items\">\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.izinCutiList\">\r" +
    "\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Pengajuan Izin/Cuti</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.izinCutiApprovalList\">\r" +
    "\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Approval Izin/Cuti</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <li class=\"nav-item nav-dropdown\" ng-class=\"{open: $state.includes('app.availability')}\">\r" +
    "\n" +
    "                <a class=\"nav-link nav-dropdown-toggle\" ng-class=\"{active: $state.includes('app.availability')}\" href=\"#\">\r" +
    "\n" +
    "                    <i class=\"fa fa-luggage-cart\"></i> <span>Report</span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "                <ul class=\"nav-dropdown-items\">\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.timesheetEngineerList\">\r" +
    "\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Timesheet Engineer</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.taskEngineerList\">\r" +
    "\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Task Engineer</span>\r" +
    "\n" +
    "                        </a>\r" +
    "\n" +
    "                    </li>\r" +
    "\n" +
    "                    <li class=\"nav-item\">\r" +
    "\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.dailyTaskList\">\r" +
    "\n" +
    "                            <i class=\"fa fa-train\"></i> <span>Daily Task</span>\r" +
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
    "                                        <span class=\"title-login\">Global Solusindo</span>\r" +
    "\n" +
    "                                        <div class=\"form-group\">\r" +
    "\n" +
    "                                            <label>Username</label>\r" +
    "\n" +
    "                                            <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" placeholder=\"Username\" ng-model=\"login.model.username\" required autofocus>\r" +
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
    "                                <button class=\"btn btn-default\" ui-sref=\"app.mappingUserToRoleGroupList\">Kembali</button>\r" +
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
    "                                        <th>Kategori Jabatan</th>\r" +
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
    "    <button id=\"cancelButton\" class=\"btn btn-default\" type=\"button\">Cancel</button>\r" +
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
    "                        <div class=\"form-group col-md-12\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.operatorEntry({ id: '0'})\">Tambah Operator</button>\r" +
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
    "                    <div class=\"card-title\">Tambah Operator</div>\r" +
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
    "                                <button class=\"btn btn-default\" ui-sref=\"app.operatorList\">Kembali</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\r" +
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
    "                        <div class=\"form-group col-md-12\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.projectEntry({ id: '0'})\">Tambah Project</button>\r" +
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
    "                            <table id=\"project\">\r" +
    "\n" +
    "                                <thead>\r" +
    "\n" +
    "                                    <tr>\r" +
    "\n" +
    "                                        <th>No</th>\r" +
    "\n" +
    "                                        <th>Project Name</th>\r" +
    "\n" +
    "                                        <th>Operator</th>\r" +
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


  $templateCache.put('app/modules/projectEntry/projectEntry.html',
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
    "                    <div class=\"card-title\">Tambah Project</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Project Name:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-10\">\r" +
    "\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"title\" ng-model=\"vm.model.title\" name=\"title\"\r" +
    "\n" +
    "                                       placeholder=\"Project Name\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Operator:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <select id=\"operator_fk\" name=\"operator_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.operator_fk\" required>\r" +
    "\n" +
    "                                    <option ng-repeat=\"x in vm.formData.operators\" ng-value=\"x.operator_pk\">{{x.title}}</option>\r" +
    "\n" +
    "                                </select>\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Delivery Area:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <select id=\"deliveryArea_fk\" name=\"deliveryArea_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.deliveryArea_fk\" required>\r" +
    "\n" +
    "                                    <option ng-repeat=\"x in vm.formData.deliveryAreas\" ng-value=\"x.deliveryArea_pk\">{{x.title}}</option>\r" +
    "\n" +
    "                                </select>\r" +
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
    "                                <button class=\"btn btn-default\" ui-sref=\"app.projectList\">Kembali</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\r" +
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
    "                                                <th>Tanggal</th>\r" +
    "\n" +
    "                                                <th>Jam</th>\r" +
    "\n" +
    "                                                <th>Aktifitas</th>\r" +
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


  $templateCache.put('app/modules/report/asetHistori/asetHistori.html',
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
    "                    <div class=\"card-title\">Histori Penggunaan Aset</div>\r" +
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
    "                                        <th>Tanggal Pinjam</th>\r" +
    "\n" +
    "                                        <th>Tanggal Kembali</th>\r" +
    "\n" +
    "                                        <th>Kategori Aset</th>\r" +
    "\n" +
    "                                        <th>Nama Aset</th> \r" +
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
    "                    <!--<div class=\"row form-group\">\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-2\">User ID:</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-3\">\r" +
    "\n" +
    "                            <select id=\"user_fk\" name=\"user_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.user_fk\" required>\r" +
    "\n" +
    "                                <option ng-repeat=\"x in vm.formData.users\" ng-value=\"x.user_pk\">{{x.title}}</option>\r" +
    "\n" +
    "                            </select>\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-2\">Name:</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-3\">\r" +
    "\n" +
    "                            <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" ng-model=\"vm.model.username\" disabled>\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"form-group col-md-2\">\r" +
    "\n" +
    "                            <button id=\"searchButton\" class=\"btn btn-success\">Search</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>-->\r" +
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
    "                                        <button class=\"btn btn-info col-sm-4\" ui-sref=\"app.asetHistoriList({ userDetail_pk: vm.user.userDetail_fk})\">Histori Penggunaan Aset</button>\r" +
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
    "                    <div class=\"card-title\">Tambah Role</div>\r" +
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
    "                                <button class=\"btn btn-default\" ui-sref=\"app.role-list\">Kembali</button> <button class=\"btn btn-success float-right\"\r" +
    "\n" +
    "                                                                                                                 id=\"saveButton\">\r" +
    "\n" +
    "                                    Tambah Role\r" +
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
    "                        <div class=\"form-group col-md-12\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.sowEntry({ id: '0'})\">Add Task</button>\r" +
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
    "                                        <th>BTS</th>\r" +
    "\n" +
    "                                        <th>Tanggal</th>\r" +
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
    "                    <div class=\"card-title\">Tambah SOW</div>\r" +
    "\n" +
    "                    <div class=\"col-md-8\">\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">SOW Name:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <input type=\"text\" id=\"sowName\" name=\"sowName\" class=\"form-control\" ng-model=\"vm.model.sowName\" placeholder=\"SOW Name\">\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Project:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <select id=\"project_fk\" name=\"project_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.project_fk\" required>\r" +
    "\n" +
    "                                    <option ng-repeat=\"x in vm.formData.projects\" ng-value=\"x.project_pk\">{{x.title}}</option>\r" +
    "\n" +
    "                                </select>\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">BTS:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <select id=\"bts_fk\" name=\"bts_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.bts_fk\" required>\r" +
    "\n" +
    "                                    <option ng-repeat=\"x in vm.formData.btses\" ng-value=\"x.bts_pk\">{{x.name}}</option>\r" +
    "\n" +
    "                                </select>\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row form-group\">\r" +
    "\n" +
    "                            <label class=\"control-label col-sm-2\">Tanggal :</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <input type=\"text\" id=\"tglMulai\" name=\"tglMulai\" ng-model=\"vm.model.tglMulai\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" required />\r" +
    "\n" +
    "                                <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <fieldset>\r" +
    "\n" +
    "                                <div class=\"card-title\">Assign</div>\r" +
    "\n" +
    "                                <div class=\"col-md-12\">\r" +
    "\n" +
    "                                    <table id=\"sowAssign\">\r" +
    "\n" +
    "                                        <thead>\r" +
    "\n" +
    "                                            <tr>\r" +
    "\n" +
    "                                                <th hidden>SOWAssign_PK</th>\r" +
    "\n" +
    "                                                <th hidden>SOW FK</th>\r" +
    "\n" +
    "                                                <th hidden>Jabatan FK</th>\r" +
    "\n" +
    "                                                <th>Jabatan</th>\r" +
    "\n" +
    "                                                <th>User</th>\r" +
    "\n" +
    "                                            </tr>\r" +
    "\n" +
    "                                        </thead>\r" +
    "\n" +
    "                                        <tbody>\r" +
    "\n" +
    "                                            <tr ng-repeat=\"sowAssign in vm.model.sowAssigns\">\r" +
    "\n" +
    "                                                <td hidden>\r" +
    "\n" +
    "                                                    <input type=\"text\" id=\"sowAssign_pk\" name=\"sowAssign_pk\" ng-model=\"sowAssign.sowAssign_pk\" disabled />\r" +
    "\n" +
    "                                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                                </td>\r" +
    "\n" +
    "                                                <td class=\"text-center\" hidden>\r" +
    "\n" +
    "                                                    <input type=\"text\" id=\"sow_fk\" name=\"sow_fk\" ng-model=\"sowAssign.sow_fk\" disabled />\r" +
    "\n" +
    "                                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                                </td>\r" +
    "\n" +
    "                                                <td class=\"text-left\" hidden>\r" +
    "\n" +
    "                                                    <input type=\"text\" id=\"kategoriJabatan_fk\" name=\"kategoriJabatan_fk\" class=\"form-control\" ng-model=\"sowAssign.kategoriJabatan_fk\" disabled />\r" +
    "\n" +
    "                                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                                </td>\r" +
    "\n" +
    "                                                <td class=\"text-left\">\r" +
    "\n" +
    "                                                    <input type=\"text\" id=\"kategoriJabatanTitle\" name=\"kategoriJabatanTitle\" class=\"form-control\" ng-model=\"sowAssign.kategoriJabatanTitle\" disabled />\r" +
    "\n" +
    "                                                    <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                                                </td>\r" +
    "\n" +
    "                                                <td>\r" +
    "\n" +
    "                                                    <ui-select id=\"user_fk\" name=\"user_fk\" ng-model=\"sowAssign.user_fk\" size=\"0\" theme=\"select2\" ng-disabled=\"vm.disabled\" title=\"Find user\"\r" +
    "\n" +
    "                                                               required style=\"width:200px\">\r" +
    "\n" +
    "                                                        <ui-select-match placeholder=\"Find user\">{{$select.selected.name}}</ui-select-match>\r" +
    "\n" +
    "                                                        <ui-select-choices refresh=\"vm.getUsers(sowAssign.kategoriJabatan_fk, $select.search)\" refresh-delay=\"0\" repeat=\"user.user_pk as user in vm.formData.users\">\r" +
    "\n" +
    "                                                            <div ng-bind-html=\"user.name | highlight: $select.search\"></div>\r" +
    "\n" +
    "                                                        </ui-select-choices>\r" +
    "\n" +
    "                                                    </ui-select>\r" +
    "\n" +
    "                                                    <div class=\"invalid-feedback\"></div>\r" +
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
    "                            </fieldset>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"row\">\r" +
    "\n" +
    "                            <div class=\"col-md-12\">\r" +
    "\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.sowList\">Kembali</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\r" +
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
    "                                    <label class=\"control-label col-sm-3\">Tanggal:</label>\r" +
    "\n" +
    "                                    <label class=\"control-label col-sm-6\" id=\"tglMulai\" name=\"tglMulai\">{{vm.model.tglMulai}}</label>\r" +
    "\n" +
    "                                </div>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"row\">\r" +
    "\n" +
    "                                <!--BTS Info-->\r" +
    "\n" +
    "                                <div class=\"col-md-6\">\r" +
    "\n" +
    "                                    <div class=\"card-title\">BTS Info</div>\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Customer Site</label>\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"customerSite\" name=\"customerSite\">{{vm.model.btsInfo.customerSite}}</label>\r" +
    "\n" +
    "                                    </div>\r" +
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
    "                                    <div class=\"row\">\r" +
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
    "                                    </div>\r" +
    "\n" +
    "                                    <div class=\"row\">\r" +
    "\n" +
    "                                        <label class=\"control-label col-sm-3\">Alamat</label>\r" +
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
    "                                    <button class=\"btn btn-default\" ui-sref=\"app.sowList\">Kembali</button>\r" +
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
    "                                                <th>Kategori</th>\r" +
    "\n" +
    "                                                <th>Nominal</th>\r" +
    "\n" +
    "                                                <th>Deskripsi</th>\r" +
    "\n" +
    "                                                <th>Tanggal Input</th>\r" +
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
    "                                        <th>Position</th>\r" +
    "\n" +
    "                                        <th>Role</th>\r" +
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
    "                            <label class=\"control-label col-sm-2\">Position:</label>\r" +
    "\n" +
    "                            <div class=\"col-sm-6\">\r" +
    "\n" +
    "                                <select id=\"kategoriJabatan_fk\" name=\"kategoriJabatan_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.kategoriJabatan_fk\" required>\r" +
    "\n" +
    "                                    <option ng-repeat=\"x in vm.formData.kategoriJabatans\" ng-value=\"x.kategoriJabatan_pk\">{{x.title}}</option>\r" +
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
