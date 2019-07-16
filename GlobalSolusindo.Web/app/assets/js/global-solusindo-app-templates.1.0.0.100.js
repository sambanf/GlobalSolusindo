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
    "                                <button class=\"btn btn-default float-right\" ui-sref=\"app.areaList\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Simpan</button>\n" +
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
    "<div class=\"modal-header\">\n" +
    "    <h5 class=\"modal-title\" id=\"modal-title\">Detail</h5>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-3 form-group\">\n" +
    "            <img id=\"photo\" src=\"/app/assets/images/tower-bts.jpg\"  class=\"img-fluid\" />\n" +
    "        </div>\n" +
    "        <div class=\"col-md-9\">\n" +
    "\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Kode Asset :</label><label class=\"col-sm-8\">{{ model.asetId }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Tanggal Pembuatan :</label><label class=\"col-sm-8\">{{ model.createdDate | date: 'dd/MM/yyyy' }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Kategori Aset :</label><label class=\"col-sm-8\">{{ model.kategoriAsetName }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Nama Aset :</label><label class=\"col-sm-8\">{{ model.name }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Deskripsi Aset :</label><label class=\"col-sm-8\">{{ model.description }}</label>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"close()\">Cancel</button>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
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
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <textarea id=\"description\" name=\"description\" class=\"form-control\" ng-model=\"asetVm.model.description\"></textarea>\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div> \n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <hr />\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-9\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" id=\"saveButton\">Simpan</button>\r" +
    "\n" +
    "                            <button class=\"btn btn-default float-right\" ui-sref=\"app.asetList\">Kembali</button>\r" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/asetHistori/asetHistori.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Aset Histori</div>\n" +
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
    "\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <button id=\"addNewButton\" class=\"btn btn-success\">Tambah Aset</button>\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"asetHistori\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Kategori Aset</th>\n" +
    "                                        <th>Nama Aset</th>\n" +
    "                                        <th>Tanggal Pinjam</th>\n" +
    "                                        <th>Tanggal Kembali</th>\n" +
    "                                        <th>Keterangan</th>\n" +
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


  $templateCache.put('app/modules/asetHistori/asetHistoriDetail.html',
    "<div class=\"modal-header\">\n" +
    "    <h5 class=\"modal-title\" id=\"modal-title\">Detail</h5>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-3 form-group\">\n" +
    "            <img id=\"photo\" src=\"/app/assets/images/tower-bts.jpg\"  class=\"img-fluid\" />\n" +
    "        </div>\n" +
    "        <div class=\"col-md-9\">\n" +
    "\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Kode Asset :</label><label class=\"col-sm-8\">{{ model.asetHistoriId }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Tanggal Pembuatan :</label><label class=\"col-sm-8\">{{ model.createdDate | date: 'dd/MM/yyyy' }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Kategori AsetHistori :</label><label class=\"col-sm-8\">{{ model.kategoriAsetHistoriName }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Nama AsetHistori :</label><label class=\"col-sm-8\">{{ model.name }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Deskripsi AsetHistori :</label><label class=\"col-sm-8\">{{ model.description }}</label>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"close()\">Cancel</button>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/modules/asetHistoriEntry/asetHistoriEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\" style=\"height:-webkit-fill-available\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Tambah Aset Histori</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-8\">\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-2\">Aset :</label>\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <select id=\"aset_fk\" name=\"aset_fk\" class=\"form-control input-lg\" ng-model=\"vm.model.aset_fk\" required>\n" +
    "                                        <option ng-repeat=\"x in vm.formData.asets\" ng-value=\"x.aset_pk\">{{x.name}}</option>\n" +
    "                                    </select>\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-2\">Tanggal :</label>\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <input type=\"text\" id=\"tglMulai\" name=\"tglMulai\" ng-model=\"vm.model.tglMulai\" class=\"form-control\" date-time-picker options=\"{ format: 'DD-MM-YYYY' }\" required />\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-2\">Deskripsi :</label>\n" +
    "                                <div class=\"col-sm-8\">\n" +
    "                                    <textarea id=\"description\" name=\"description\" class=\"form-control\" ng-model=\"vm.model.description\"></textarea>\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <hr />\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-8\">\n" +
    "                            <button class=\"btn btn-default\" id=\"backButton\">Kembali</button>\n" +
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
    "                                <button class=\"btn btn-default float-right\" ui-sref=\"app.asetKategoriList\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Simpan</button>\n" +
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
    "<div class=\"modal-header\">\n" +
    "    <h6 class=\"modal-title\">Tambah Asset</h6>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-12\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12\">\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <label class=\"control-label col-sm-4\">Kategory Asset :</label>\n" +
    "                        <div class=\"col-sm-8\">\n" +
    "                            <select id=\"position_fk\" name=\"position_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.position_fk\" required>\n" +
    "                                <option ng-repeat=\"x in vm.formData.positions\" ng-value=\"x.position_pk\">{{x.name}}</option>\n" +
    "                            </select>\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <label class=\"control-label col-sm-4\">Nama Asset :</label>\n" +
    "                        <div class=\"col-sm-8\">\n" +
    "                            <input type=\"text\" class=\"form-control\" ng-model=\"vm.model.name\" required />\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <label class=\"control-label col-sm-4\">Gambar Asset :</label>\n" +
    "                        <div class=\"col-sm-8\">\n" +
    "                            <input type=\"text\" class=\"form-control\" ng-model=\"vm.model.image\" required />\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <label class=\"control-label col-sm-4\">Deskripsi :</label>\n" +
    "                        <div class=\"col-sm-8\">\n" +
    "                            <textarea class=\"form-control\" ng-model=\"vm.model.desc\"></textarea>\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-primary\" type=\"button\" ng-click=\"vm.ok()\">Simpan</button>\n" +
    "    <button class=\"btn btn-default\" type=\"button\" ng-click=\"vm.cancel()\">Cancel</button>\n" +
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
    "<div class=\"modal-header\">\n" +
    "    <h5 class=\"modal-title\" id=\"modal-title\">Detail</h5>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Title :</label><label class=\"col-sm-8\">{{ model.title }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Description :</label><label class=\"col-sm-8\">{{ model.description }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Created Date :</label><label class=\"col-sm-8\">{{ model.createdDate | date: 'dd/MM/yyyy' }}</label>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"close()\">Cancel</button>\n" +
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
    "                                <button class=\"btn btn-default float-right\" ui-sref=\"app.authParamList\">Kembali</button> <button class=\"btn btn-success\"\n" +
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
    "                            <button class=\"btn btn-success\" ui-sref=\"app.btsImportExcel({})\">Import from excel</button>\n" +
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
    "                                        <th>Cell ID</th>\n" +
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
    "<div class=\"modal-header\">\n" +
    "    <h5 class=\"modal-title\" id=\"modal-title\">Detail</h5>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Customer Site ID :</label><label class=\"col-sm-9\">{{ model.customerSite }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Tower ID :</label><label class=\"col-sm-9\">{{ model.towerId }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Cell ID :</label><label class=\"col-sm-9\">{{ model.cellId }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-3 text-right\">BTS Name :</label><label class=\"col-sm-9\">{{ model.name }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Tower Provider :</label><label class=\"col-sm-9\">{{ model.operatorTitle }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Latitude :</label><label class=\"col-sm-9\">{{ model.latitude }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Longitude :</label><label class=\"col-sm-9\">{{ model.longitude }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-3 text-right\">BTS Status :</label><label class=\"col-sm-9\">{{ model.statusBtsTitle }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Area :</label><label class=\"col-sm-9\">{{ model.areaTitle }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Kota :</label><label class=\"col-sm-9\">{{ model.kotaTitle }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Cabang :</label><label class=\"col-sm-9\">{{ model.cabangTitle }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Alamat :</label><label class=\"col-sm-9\">{{ model.alamat }}</label>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"close()\">Cancel</button>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
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
    "\n" +
    "                                <!--//Dihapus, permintaan mas indra 2019/07/01-->\n" +
    "                                <!--<div class=\"row form-group\">\n" +
    "                                    <label class=\"control-label col-md-3\">Customer Site ID:</label>\n" +
    "                                    <div class=\"col-md-9\">\n" +
    "                                        <input type=\"text\" id=\"customerSite\" name=\"customerSite\" class=\"form-control\" ng-model=\"vm.model.customerSite\" placeholder=\"Customer Site ID\">\n" +
    "                                        <div class=\"invalid-feedback\"></div>\n" +
    "                                    </div>\n" +
    "                                </div>-->\n" +
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
    "                                    <label class=\"control-label col-sm-2\">Status:</label>\n" +
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
    "                                    <button class=\"btn btn-primary\" id=\"btnAddTechnology\">Add New</button>\n" +
    "                                    <table id=\"sowAssign\" class=\"table table-striped table-assign\">\n" +
    "                                        <thead>\n" +
    "                                            <tr>\n" +
    "                                                <th hidden>BTSTechnology_PK</th>\n" +
    "                                                <th hidden>BTS FK</th>\n" +
    "                                                <th>Technology</th>\n" +
    "                                                <th></th>\n" +
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
    "                                                <td>\n" +
    "                                                    <a class=\"btn btn-sm btn-danger\" ng-click=\"vm.removeTechnology($index)\"><i class=\"fa fa-times\"></i></a>\n" +
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
    "                            <div class=\"col-md-12\">\r" +
    "\n" +
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Simpan</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-default float-right\" ui-sref=\"app.btsList\">Kembali</button>\r" +
    "\n" +
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


  $templateCache.put('app/modules/btsImportExcel/btsImportExcel.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Import BTS</div>\n" +
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
    "                    </div>\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <button class=\"btn btn-default\" ui-sref=\"app.btsList\">Kembali</button>\n" +
    "                            <button class=\"btn btn-success float-right\" id=\"uploadButton\">Submit</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Upload result</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table class=\"table table-striped\" id=\"bts\" style=\"line-height: 0;\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Tower ID</th>\n" +
    "                                        <th>BTS Name</th>\n" +
    "                                        <th>Provider</th>\n" +
    "                                        <th>Cell ID</th>\n" +
    "                                        <th class=\"text-center\">Result</th>\n" +
    "                                        <th>Reason</th>\n" +
    "                                    </tr>\n" +
    "                                    <tr ng-repeat=\"bts in vm.uploadResults\">\n" +
    "                                        <td><label>{{$index + 1}}</label></td>\n" +
    "                                        <td><label>{{bts.model.towerId}}</label></td>\n" +
    "                                        <td><label>{{bts.model.name}}</label></td>\n" +
    "                                        <td><label>{{bts.model.operatorTitle}}</label></td>\n" +
    "                                        <td><label>{{bts.model.cellId}}</label></td>\n" +
    "                                        <td class=\"text-center\">\n" +
    "                                            <div><span><i ng-show=\"!bts.success\" class=\"fa fa-times\"></i></span></div>\n" +
    "                                            <div><span><i ng-show=\"bts.success\" class=\"fa fa-check\"></i></span></div>\n" +
    "                                        </td>\n" +
    "                                        <td><label>{{bts.validationResult.errors[0] == undefined ? '' : bts.validationResult.errors[0].propertyName + ': ' +  bts.validationResult.errors[0].message}}</label></td>\n" +
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
    "                                <button class=\"btn btn-default float-right\" ui-sref=\"app.cabangList\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Simpan</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/changePasswordEntry/changePasswordEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Change Password</div>\n" +
    "\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Password:</label>\n" +
    "                                <div class=\"col-sm-9\">\n" +
    "                                    <input type=\"password\" class=\"form-control\" id=\"currentPassword\" name=\"currentPassword\" autocomplete=\"off\" ng-model=\"vm.model.currentPassword\" placeholder=\"Current Password\">\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Password:</label>\n" +
    "                                <div class=\"col-sm-9\">\n" +
    "                                    <input type=\"password\" class=\"form-control\" id=\"newPassword\" name=\"newPassword\" autocomplete=\"off\" ng-model=\"vm.model.newPassword\" placeholder=\"New Password\">\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Retype Password:</label>\n" +
    "                                <div class=\"col-sm-9\">\n" +
    "                                    <input type=\"password\" class=\"form-control\" id=\"reTypeNewPassword\" name=\"reTypeNewPassword\" autocomplete=\"off\" ng-model=\"vm.model.reTypeNewPassword\" placeholder=\"Retype New Password\">\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <hr />\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <button class=\"btn btn-success float-right\" id=\"saveButton\">Change Password</button>\n" +
    "                            <button class=\"btn btn-default\" ui-sref=\"app.dashboard\">Kembali</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/checkIn/checkIn.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Task Approval</div>\n" +
    "                    <div class=\"row\"> \n" +
    "                        <div class=\"col-md-6\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"checkIn\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>User</th>\n" +
    "                                        <th>Position</th>\n" +
    "                                        <th>SOW</th>\n" +
    "                                        <th>BTS</th>\n" +
    "                                        <th>BTS Address</th>\n" +
    "                                        <th>Check In Time</th>\n" +
    "                                        <th>Check Out Time</th> \n" +
    "                                        <th>File Submitted</th>\n" +
    "                                        <th>Status</th>\n" +
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


  $templateCache.put('app/modules/checkInEntry/checkInEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Task Detail</div>\n" +
    "                    <div class=\"row col-md-12\">\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <div class=\"card-title\">SOW Info</div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">SOW Name:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.sowName}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">User:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.userName}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Position:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.kategoriJabatanTitle}}</label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row col-md-12\">\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <div class=\"card-title\">CheckIn Info</div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">CheckIn Time</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.checkInTime | date: 'dd-MM-yyyy'}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Longitude:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.longitudeCheckIn}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Latitude:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.latitudeCheckIn}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">MCC:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.mccCheckIn}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">MNC:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.mncCheckIn}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">LAC:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.lacCheckIn}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Cell ID:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.cellIDCheckIn}}</label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <div class=\"card-title\">CheckOut Info</div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">CheckOut Time</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.waktuCheckOut | date: 'dd-MM-yyyy'}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Longitude:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.longitudeCheckOut}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Latitude:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.latitudeCheckOut}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">MCC:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.mccCheckOut}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">MNC:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.mncCheckOut}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">LAC:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.lacCheckOut}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Cell ID:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.cellIDCheckOut}}</label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"row col-md-12\">\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <div class=\"card-title\">SOW Result</div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Description</label>\n" +
    "                                <div class=\"col-md-12\">\n" +
    "                                    <textarea class=\"form-control\" ng-model=\"vm.model.SOWResult.description\" style=\"width:100%\"></textarea>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <div class=\"card-title\">Track Result</div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <button class=\"btn btn-danger\" id=\"rejectButton\">Reject</button>\r" +
    "\n" +
    "                        <button class=\"btn btn-success\" id=\"approveButton\">Approve</button>\r" +
    "\n" +
    "                        <button class=\"btn btn-default float-right\" ui-sref=\"app.checkInList\">Kembali</button>\r" +
    "\n" +
    "                    </div>\n" +
    "\n" +
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
    "                            <div class=\"col-md-12\">\r" +
    "\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"saveButton\">Simpan</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.costKategoriList\">Kembali</button>\r" +
    "\n" +
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
    "        <div class=\"col-sm-12\">\r" +
    "\n" +
    "            <div class=\"card\">\r" +
    "\n" +
    "                <div class=\"card-body\">\r" +
    "\n" +
    "                    <div class=\"row\" style=\"margin-bottom:20px\">\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-1\">Start Date</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-2\">\r" +
    "\n" +
    "                            <input type=\"text\" id=\"tglMulai1\" name=\"tglMulai\" ng-model=\"db.tglMulaiFilter1\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" value=\"{{db.TglMulai}}\" />\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-1\">End Date</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-2\">\r" +
    "\n" +
    "                            <input type=\"text\" id=\"tglAkhir1\" name=\"tglAkhir\" ng-model=\"db.tglAkhirFilter1\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" value=\"{{db.TglAkhir}}\" />\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-1\">Project</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-4\">\r" +
    "\n" +
    "                            <select id=\"project_fk1\" name=\"user_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"db.model.user_fk\" required>\r" +
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
    "                            <button id=\"searchButton1\" style=\"border-radius: 20px\" ng-click=\"db.searchFilter1()\" class=\"btn btn-success\">Cari</button>\r" +
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
    "                                            <h5>Total Jumlah PO</h5>\r" +
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
    "                                            <h5>Total Jumlah Invoice</h5>\r" +
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
    "                                            <h5>Jumlah Member</h5>\r" +
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
    "                                            <h5 class=\"mt-2\">Jumlah Asset</h5>\r" +
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
    "                            <input type=\"text\" id=\"tglMulai2\" name=\"tglMulai\" ng-model=\"db.tglMulaiFilter2\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" />\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-1\">End Date</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-2\">\r" +
    "\n" +
    "                            <input type=\"text\" id=\"tglAkhir2\" name=\"tglAkhir\" ng-model=\"db.tglAkhirFilter2\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" />\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-1\">Project</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-4\">\r" +
    "\n" +
    "                            <select id=\"operator_fk\" name=\"user_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"db.model.user_fk\" required>\r" +
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
    "                            <button id=\"searchButton2\" style=\"border-radius: 20px\" ng-click=\"db.searchFileter2()\" class=\"btn btn-success\">Cari</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"row\">\r" +
    "\n" +
    "                        <div id=\"containerSalesReport\" style=\"min-width: 700px; height: 400px; margin: 0 auto\"></div>\r" +
    "\n" +
    "                        <div id=\"containerGoalCompletion\" style=\"min-width: 700px; height: 400px; margin: 0 auto\"></div>\r" +
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
    "                            <input type=\"text\" id=\"tglMulai3\" name=\"tglMulai\" ng-model=\"db.tglMulaiFilter3\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" />\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-1\">End Date</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-2\">\r" +
    "\n" +
    "                            <input type=\"text\" id=\"tglAkhir3\" name=\"tglAkhir\" ng-model=\"db.tglAkhirFilter3\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" />\r" +
    "\n" +
    "                            <div class=\"invalid-feedback\"></div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <label class=\"control-label col-sm-1\">Project</label>\r" +
    "\n" +
    "                        <div class=\"col-sm-4\">\r" +
    "\n" +
    "                            <select id=\"project_Id\" name=\"user_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"db.model.user_fk\" required>\r" +
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
    "                            <button id=\"searchButton3\" style=\"border-radius: 20px\" ng-click=\"db.searchFilter3()\" class=\"btn btn-success\">Cari</button>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div id=\"containerRevenueCost\" style=\"min-width: 310px; height: 400px; margin: 0 auto\"></div>\r" +
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
    "                                <button class=\"btn btn-default float-right\" ui-sref=\"app.deliveryAreaList\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Simpan</button>\n" +
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
    "                                <button class=\"btn btn-default float-right\" ui-sref=\"app.issueTypeList\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Simpan</button>\n" +
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
    "                            <label class=\"control-label col-sm-3\">{{vm.model.tglMulai  | date: 'dd-MM-yyyy'}}</label> \n" +
    "                        </div>\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Alasan:</label>\n" +
    "                            <label class=\"control-label col-sm-8\">{{vm.model.alasan}}</label>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-4\">\n" +
    "                                <button class=\"btn btn-success\" id=\"approveButton\">Approve</button>\n" +
    "                                <button class=\"btn btn-danger\" id=\"rejectButton\">Reject</button>\n" +
    "                                <button class=\"btn btn-default float-right\" ui-sref=\"app.izinCutiApprovalList\">Kembali</button>\n" +
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
    "                                <button class=\"btn btn-default float-right\" ui-sref=\"app.izinCutiList\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Simpan</button>\n" +
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
    "                                <button class=\"btn btn-default float-right\" ui-sref=\"app.kategoriJabatanList\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Simpan</button>\n" +
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
    "                                <button class=\"btn btn-default float-right\" ui-sref=\"app.kotaList\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Simpan</button>\n" +
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
    "                <div><i class=\"fa fa-lock\"></i> <a ui-sref=\"app.changePasswordEntry\">Change Password</a></div>\n" +
    "            </div>\n" +
    "            <a class=\"dropdown-item\" href=\"#\" ng-click=\"nav.logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</header>"
  );


  $templateCache.put('app/modules/layouts/side-bar/sidebar.html',
    "<div class=\"sidebar\" ng-controller=\"sidebarCtrl as vm\">\n" +
    "    <div class=\"company-info\">\n" +
    "        <div class=\"company-icon\">\n" +
    "            <i class=\"fas fa-broadcast-tower\"></i>\n" +
    "        </div>\n" +
    "        <div class=\"company-title\">\n" +
    "            Global One Solusindo\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <nav class=\"sidebar-nav\">\n" +
    "        <ul class=\"nav\">\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"app.dashboard\">\n" +
    "                    <i class=\"fas fa-home\"></i> <span>Homepage</span>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <ul class=\"nav\" ng-repeat=\"groupMenu in vm.treeMenu.groupMenus\">\n" +
    "            <li class=\"nav-item nav-dropdown\" ng-class=\"{open: $state.includes('app.availability')}\">\n" +
    "                <a class=\"nav-link nav-dropdown-toggle\" ng-class=\"{active: $state.includes('app.availability')}\" href=\"#\">\n" +
    "                    <i class=\"fa fa-list-alt\"></i> <span>{{groupMenu.groupName}}</span>\n" +
    "                </a>\n" +
    "                <ul class=\"nav-dropdown-items\" ng-repeat=\"menu in groupMenu.menus\">\n" +
    "                    <li class=\"nav-item\">\n" +
    "                        <a class=\"nav-link\" ui-sref-active=\"active\" ui-sref=\"{{menu.path}}\">\n" +
    "                            <i class=\"fa fa-circle\"></i> <span>{{menu.caption}}</span>\n" +
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
    "                                            <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" placeholder=\"Username\" ng-model=\"login.model.username\" required focus-me=\"true\">\n" +
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
    "        <!--<div class=\"col-md-12 p-0\">\n" +
    "            <table id=\"roleModal\" class=\"table\">\n" +
    "                <thead>\n" +
    "                    <tr>\n" +
    "                        <th width=\"30\" hidden>Role PK</th>\n" +
    "                        <th width=\"30\" hidden>Role Group PK</th>\n" +
    "                        <th width=\"200\">Role Name</th>\n" +
    "                        <th class=\"text-center\">Check</th>\n" +
    "                    </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                    <tr ng-repeat=\"i in vm.model.mappingRoleToRoleGroups\">\n" +
    "                        <td width=\"30\" hidden>{{ i.role_pk}}</td>\n" +
    "                        <td width=\"30\" hidden>{{ i.roleGroup_pk}}</td>\n" +
    "                        <td width=\"200\">{{i.roleName}}</td>\n" +
    "                        <td class=\"text-center\"> <input type=\"checkbox\" ng-checked=\"i.isChecked\" ng-model=\"i.isChecked\"></td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>-->\n" +
    "\n" +
    "            <div class=\"col-md-4\" ng-repeat=\"i in vm.model.mappingRoleToRoleGroups\">\n" +
    "                <label class=\"control control--checkbox\">\n" +
    "                    {{i.roleName}}\n" +
    "                    <input tabindex=\"26\" type=\"checkbox\" name=\"role\"\n" +
    "                           checked=\"checked\"  ng-checked=\"i.isChecked\" ng-model=\"i.isChecked\" />\n" +
    "                    <span class=\"control__indicator\"></span>\n" +
    "                </label>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button id=\"saveButton\" class=\"btn btn-primary\" type=\"button\">Save</button>\n" +
    "    <button id=\"cancelButton\" class=\"btn btn-default\" type=\"button\">Kembali</button>\n" +
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
    "    <button id=\"cancelButton\" class=\"btn btn-default\" type=\"button\">Kembali</button>\n" +
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
    "    <button id=\"cancelButton\" class=\"btn btn-default\" type=\"button\">Kembali</button>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/menu/menu.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Menu</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.menuEntry({ id: '0'})\">Tambah Menu</button>\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"menu\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Code</th>\n" +
    "                                        <th>Caption</th>\n" +
    "                                        <th>Path</th>\n" +
    "                                        <th>Group</th>\n" +
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


  $templateCache.put('app/modules/menuEntry/menuEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Tambah Menu</div>\n" +
    "                    <div class=\"col-md-8\">\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Menu Name:</label>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <input type=\"text\" id=\"code\" name=\"code\" class=\"form-control\" ng-model=\"vm.model.code\" placeholder=\"Menu Name\">\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Caption:</label>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <input type=\"text\" id=\"caption\" name=\"caption\" class=\"form-control\" ng-model=\"vm.model.caption\" placeholder=\"Menu Name\">\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Path:</label>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <input type=\"text\" id=\"path\" name=\"path\" class=\"form-control\" ng-model=\"vm.model.path\" placeholder=\"Menu Name\">\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Group Name:</label>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <input type=\"text\" id=\"parentGroup\" name=\"parentGroup\" class=\"form-control\" ng-model=\"vm.model.parentGroup\" placeholder=\"Menu Name\">\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12\">\r" +
    "\n" +
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Simpan</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-default float-right\" ui-sref=\"app.menuList\">Kembali</button>\r" +
    "\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/myTaskList/myTaskList.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">My Task List</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-6\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"myTaskList\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>User</th>\n" +
    "                                        <th>Position</th>\n" +
    "                                        <th>SOW</th>\n" +
    "                                        <th>BTS</th>\n" +
    "                                        <th>BTS Address</th>\n" +
    "                                        <th>Check In Time</th>\n" +
    "                                        <th>Check Out Time</th>\n" +
    "                                        <th>File Submitted</th>\n" +
    "                                        <th>Status</th>\n" +
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


  $templateCache.put('app/modules/myTaskListEntry/myTaskListEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Task Detail</div>\n" +
    "                    <div class=\"row col-md-12\">\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <div class=\"card-title\">SOW Info</div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">SOW Name:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.sowName}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">User:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.userName}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Position:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.kategoriJabatanTitle}}</label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row col-md-12\">\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <div class=\"card-title\">CheckIn Info</div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">CheckIn Time</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.checkInTime  | date: 'dd-MM-yyyy'}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Longitude:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.longitudeCheckIn}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Latitude:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.latitudeCheckIn}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">MCC:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.mccCheckIn}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">MNC:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.mncCheckIn}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">LAC:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.lacCheckIn}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Cell ID:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.cellIDCheckIn}}</label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <div class=\"card-title\">CheckOut Info</div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">CheckOut Time</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.waktuCheckOut  | date: 'dd-MM-yyyy'}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Longitude:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.longitudeCheckOut}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Latitude:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.latitudeCheckOut}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">MCC:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.mccCheckOut}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">MNC:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.mncCheckOut}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">LAC:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.lacCheckOut}}</label>\n" +
    "\n" +
    "                                <label class=\"control-label col-sm-3\">Cell ID:</label>\n" +
    "                                <label class=\"control-label col-sm-9\">{{vm.model.cellIDCheckOut}}</label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"row col-md-12\">\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <div class=\"card-title\">SOW Result</div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Description</label>\n" +
    "                                <div class=\"col-md-12\">\n" +
    "                                    <textarea class=\"form-control\" ng-model=\"vm.model.SOWResult.description\" style=\"width:100%\"></textarea>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <div class=\"card-title\">Track Result</div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"col-md-12\">\r" +
    "\n" +
    "                        <button class=\"btn btn-success\" id=\"submitButton\">Submit</button>\r" +
    "\n" +
    "                        <button class=\"btn btn-default float-right\" ui-sref=\"app.myTaskListList\">Kembali</button>\r" +
    "\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
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
    "                                <button class=\"btn btn-default float-right\" ui-sref=\"app.operatorList\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Simpan</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/po/poImportExcel.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Import User</div>\n" +
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
    "                    </div>\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <button class=\"btn btn-default\" id=\"downloadButton\">Template</button>\n" +
    "                            <button class=\"btn btn-success float-right\" id=\"uploadButton\">Submit</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Upload result</div>\n" +
    "                    <div style=\"overflow:auto\">\n" +
    "\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "\n" +
    "                                <table class=\"table table-striped\" id=\"user\" >\n" +
    "                                    <thead>\n" +
    "                                        <tr>\n" +
    "                                            <th>Id</th>\n" +
    "                                            <th>Account</th>\n" +
    "                                            <th>Project code</th>\n" +
    "                                            <th>Site ID Imp</th>\n" +
    "                                            <th>Site ID</th>\n" +
    "                                            <th>Site Name</th>\n" +
    "                                            <th>DUID</th>\n" +
    "                                            <th>PMO Uniq</th>\n" +
    "                                            <th>SOW Act DU Model</th>\n" +
    "                                            <th>System</th>\n" +
    "                                            <th>SOW PO</th>\n" +
    "                                            <th>Item Description</th>\n" +
    "                                            <th>PO No</th>\n" +
    "                                            <th>Shipment No</th>\n" +
    "                                            <th>Qty</th>\n" +
    "                                            <th>PO Status</th>\n" +
    "                                            <!--<th>Payment Term</th>\n" +
    "                                            <th>Work Status</th>\n" +
    "                                            <th>OA Date</th>\n" +
    "                                            <th>SSV Date</th>\n" +
    "                                            <th>SSV App Date</th>\n" +
    "                                            <th>SOM SSV Date</th>\n" +
    "                                            <th>QC Acc Date</th>\n" +
    "                                            <th>PAC Cluster ID</th>\n" +
    "                                            <th>PAC Cluster Status</th>\n" +
    "                                            <th>SOM PAC Cluster</th>\n" +
    "                                            <th>Doc Status</th>\n" +
    "                                            <th>ESAR 1ST Status</th>\n" +
    "                                            <th>ESAR 2ND Status</th>\n" +
    "                                            <th>Remarks</th>\n" +
    "                                            <th>Created By</th>\n" +
    "                                            <th>Created Date</th>\n" +
    "                                            <th>Updated By</th>\n" +
    "                                            <th>Updated Date</th>-->\n" +
    "                                            <th>Status</th>\n" +
    "                                        </tr>\n" +
    "                                    </thead>\n" +
    "                                    <tbody>\n" +
    "                                        <tr ng-repeat=\"po in vm.uploadResults\">\n" +
    "                                            <td><label>{{po.PO_PK}}</label></td>\n" +
    "                                            <td><label>{{po.Account}}</label></td>\n" +
    "                                            <td><label>{{po.ProjectCode}}</label></td>\n" +
    "                                            <td><label>{{po.SiteIDImp}}</label></td>\n" +
    "                                            <td><label>{{po.SiteID}}</label></td>\n" +
    "                                            <td><label>{{po.SiteName}}</label></td>\n" +
    "                                            <td><label>{{po.DUID}}</label></td>\n" +
    "                                            <td><label>{{po.PMOUniq}}</label></td>\n" +
    "                                            <td><label>{{po.SOWAct}}</label></td>\n" +
    "                                            <td><label>{{po.System}}</label></td>\n" +
    "                                            <td><label>{{po.SOWPO}}</label></td>\n" +
    "                                            <td><label>{{po.ItemDesc}}</label></td>\n" +
    "                                            <td><label>{{po.PONo}}</label></td>\n" +
    "                                            <td><label>{{po.ShipmentNo}}</label></td>\n" +
    "                                            <td><label>{{po.Qty}}</label></td>\n" +
    "                                            <td><label>{{po.POStatus == 1 ? 'On Progress' : 'Done'}}</label></td>\n" +
    "                                            <!--<td><label>{{po.PaymentTerm}}</label></td>\n" +
    "                                            <td><label>{{po.WorkStatus}}</label></td>\n" +
    "                                            <td><label>{{po.OADate}}</label></td>\n" +
    "                                            <td><label>{{po.SSVDate}}</label></td>\n" +
    "                                            <td><label>{{po.SSVAppDate}}</label></td>\n" +
    "                                            <td><label>{{po.SOMSSVDate}}</label></td>\n" +
    "                                            <td><label>{{po.QCAccDate}}</label></td>\n" +
    "                                            <td><label>{{po.PACClusterID}}</label></td>\n" +
    "                                            <td><label>{{po.PACClusterStatus}}</label></td>\n" +
    "                                            <td><label>{{po.SOMPACCluster}}</label></td>\n" +
    "                                            <td><label>{{po.DocStatus}}</label></td>\n" +
    "                                            <td><label>{{po.ESAR1stStatus}}</label></td>\n" +
    "                                            <td><label>{{po.ESAR2ndStatus}}</label></td>\n" +
    "                                            <td><label>{{po.Remarks}}</label></td>\n" +
    "                                            <td><label>{{po.CreatedBy}}</label></td>\n" +
    "                                            <td><label>{{po.CreatedDate}}</label></td>\n" +
    "                                            <td><label>{{po.UpdatedBy}}</label></td>\n" +
    "                                            <td><label>{{po.UpdatedDate}}</label></td>-->\n" +
    "                                            <td><label>{{po.Status_FK}}</label></td>\n" +
    "                                        </tr>\n" +
    "                                    </tbody>\n" +
    "                                </table>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/positionEntry/positionEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Tambah Position</div>\n" +
    "                    <div class=\"col-md-8\">\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Position Name:</label>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <input type=\"text\" class=\"form-control\" id=\"name\" name=\"title\" ng-model=\"vm.model.name\"\n" +
    "                                       placeholder=\"Position Name\">\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Description:</label>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <textarea class=\"form-control\" ng-model=\"vm.model.description\" name=\"description\" placeholder=\"Description\">\n" +
    "                                        </textarea>\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.positionList\">Kembali</button>\n" +
    "                                <button id=\"saveButton\" class=\"btn btn-success float-right\">\n" +
    "                                    Tambah\n" +
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
    "                                        <th>Operator</th>\n" +
    "                                        <th>Vendor</th>\n" +
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
    "<div class=\"modal-header\">\n" +
    "    <h5 class=\"modal-title\" id=\"modal-title\">Detail</h5>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Project Name :</label><label class=\"col-sm-9\">{{ model.title }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Operator :</label><label class=\"col-sm-9\">{{ model.operatorTitle }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-3 text-right\">Delivery Area :</label><label class=\"col-sm-9\">{{ model.deliveryAreaTitle }}</label>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"close()\">Kembali</button>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('app/modules/projectEntry/projectEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "\n" +
    "                <div style=\"height:500px;\">\n" +
    "                    <div class=\"card h-100\">\n" +
    "                        <div class=\"card-title\">Tambah Project</div>\n" +
    "                        <div class=\"col-md-8\">\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-2\">Operator:</label>\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <select id=\"operator_fk\" name=\"operator_fk\" class=\"form-control input-lg\" ng-model=\"vm.model.operator_fk\" required>\n" +
    "                                        <option ng-repeat=\"x in vm.formData.operators\" ng-value=\"x.operator_pk\">{{x.title}}</option>\n" +
    "                                    </select>\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-2\">Vendor:</label>\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <select id=\"vendor_fk\" name=\"vendor_fk\" class=\"form-control input-lg\" ng-model=\"vm.model.vendor_fk\" required>\n" +
    "                                        <option ng-repeat=\"x in vm.formData.vendors\" ng-value=\"x.vendor_pk\">{{x.title}}</option>\n" +
    "                                    </select>\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-2\">Delivery Area:</label>\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <select id=\"deliveryArea_fk\" name=\"deliveryArea_fk\" class=\"form-control input-lg\" ng-model=\"vm.model.deliveryArea_fk\" required>\n" +
    "                                        <option ng-repeat=\"x in vm.formData.deliveryAreas\" ng-value=\"x.deliveryArea_pk\">{{x.title}}</option>\n" +
    "                                    </select>\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-2\">Project Manager:</label>\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <select id=\"user_fk\" name=\"user_fk\" class=\"form-control input-lg\" ng-model=\"vm.model.user_fk\" required>\n" +
    "                                        <option ng-repeat=\"x in vm.formData.users\" ng-value=\"x.user_pk\">{{x.name}}</option>\n" +
    "                                    </select>\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-md-8\">\r" +
    "\n" +
    "                                    <button class=\"btn btn-success\" id=\"saveButton\">Simpan</button>\r" +
    "\n" +
    "                                    <button class=\"btn btn-default float-right\" ui-sref=\"app.projectList\">Kembali</button>\r" +
    "\n" +
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
    "                                                <th>Checkin Time</th>\n" +
    "                                                <th>Checkout Time</th>\n" +
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
    "                            <div class=\"legend-item\">\n" +
    "                                <span class=\"dot-online\"></span><label>Online</label>\n" +
    "                            </div>\n" +
    "                            <div class=\"legend-item\">\n" +
    "                                <span class=\"dot-offline\"></span><label>Offline</label>\n" +
    "                            </div>\n" +
    "                            <div class=\"legend-item\">\n" +
    "                                <span class=\"dot-cuti\"></span><label>Cuti Izin</label>\n" +
    "                            </div>\n" +
    "                            <div class=\"legend-item\">\n" +
    "                                <span class=\"dot-unassigned\"></span><label>No Assignment</label>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row form-group\" style=\"margin-top: 2%;\">\n" +
    "                        <label class=\"control-label col-sm-2\" style=\"margin-right: -60px; top: 8px\">Nama Pekerja</label>\n" +
    "                        <div class=\"col-sm-2\" style=\"margin-left: -50px;\">\n" +
    "                            <select id=\"user_fk\" name=\"user_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.user_fk\">\n" +
    "                                <option value=\"0\">All</option>\n" +
    "                                <option ng-repeat=\"x in vm.formData.users\" ng-value=\"x.user_pk\">{{x.name}}</option>\n" +
    "                            </select>\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                        <label class=\"control-label col-sm-1\" style=\"top: 8px\">Status</label>\n" +
    "                        <div class=\"col-sm-2\" style=\"margin-left: -50px;\">\n" +
    "                            <select id=\"select_name\" name=\"user_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.statusName\">\n" +
    "                                <option ng-repeat=\"x in vm.formData.status\" ng-value=\"x.name\">{{x.name}}</option>\n" +
    "                            </select>\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group col-md-2\">\n" +
    "                            <button id=\"searchButton\" type=\"button\" class=\"btn btn-success\" style=\"border-radius: 20px\" ng-click=\"vm.search()\">Cari</button>\n" +
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
    "                    <div class=\"row form-group\" >\n" +
    "                        <label class=\"control-label col-sm-1\">User ID</label>\n" +
    "                        <div class=\"col-sm-2\">\n" +
    "                            <select id=\"user_fk\" name=\"user_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.user_fk\" required>\n" +
    "                                <option ng-repeat=\"x in vm.formData.users\" ng-value=\"x.user_pk\">{{x.username}}</option>\n" +
    "                            </select>\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                        <label class=\"control-label col-xs-1\">Name</label>\n" +
    "                        <div class=\"col-sm-2\">\n" +
    "                            <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" ng-model=\"vm.model.username\" disabled>\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                        <label class=\"control-label col-xs-1\">BTS</label>\n" +
    "                        <div class=\"col-sm-2\">\n" +
    "                            <select id=\"bts_fk\" name=\"bts_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.bts_fk\" required>\n" +
    "                                <option ng-repeat=\"x in vm.formData.btses\" ng-value=\"x.bts_pk\">{{x.name}}</option>\n" +
    "                            </select>\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row form-group col-md-2 radio\">\n" +
    "                        <label><input type=\"radio\" name=\"optradio\" value=\"1\"> Jangka Waktu</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <label class=\"control-label col-sm-1\">Tgl Mulai</label>\n" +
    "                        <div class=\"col-sm-2\">\n" +
    "                            <input type=\"text\" id=\"tglMulai\" name=\"tglMulai\" ng-model=\"vm.model.tglMulai\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" />\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                        <label class=\"control-label col-xs-1\">Tgl Akhir</label>\n" +
    "                        <div class=\"col-sm-2\">\n" +
    "                            <input type=\"text\" id=\"tglAkhir\" name=\"tglAkhir\" ng-model=\"vm.model.tglAkhir\" class=\"form-control\" date-time-picker options=\"{ format: 'DD/MM/YYYY' }\" />\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"row form-group col-md-2 radio\">\n" +
    "                        <label><input type=\"radio\" name=\"optradio\" value=\"1\"> Periode Waktu</label>\n" +
    "                    </div>\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <label class=\"control-label col-sm-1\">Periode</label>\n" +
    "                        <div class=\"col-sm-2\">\n" +
    "                            <select id=\"bulan_fk\" name=\"bulan_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.bulan_fk\" required>\n" +
    "                                <option ng-repeat=\"x in vm.formData.bulans\" ng-value=\"x.bulan_pk\">{{x.title}}</option>\n" +
    "                            </select>\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row form-group col-md-2\" >\n" +
    "                        <button id=\"searchButton\" style=\"border-radius: 20px\" ng-click=\"vm.search()\" class=\"btn btn-success\">Cari</button>\n" +
    "                    </div>\n" +
    "                    <div class=\"row form-group col-md-12\" style=\"margin-left: -1px; margin-right: -1px; border-bottom: 1px solid #ccc;\">\n" +
    "                    </div>\n" +
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
    "                                            <label class=\"control-label col-sm-6\" id=\"tglMulai\" name=\"tglMulai\">{{vm.sowAssign.tglMulai  | date: 'dd-MM-yyyy'}}</label>\n" +
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
    "                    <div class=\"row form-group\" style=\"margin-left: -1px; margin-right: -1px; border-bottom: 1px solid #ccc;\">\n" +
    "                        <label class=\"control-label col-sm-1\">User ID</label>\n" +
    "                        <div class=\"col-sm-2\" style=\"margin-left: -50px;\">\n" +
    "                            <select id=\"bts_fk\" name=\"bts_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"brc.model.user_pk\" required>\n" +
    "                                <option ng-repeat=\"x in brc.formData.users\" ng-value=\"x.user_pk\">{{x.username}}</option>\n" +
    "                            </select>\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                        <label class=\"control-label col-sm-1\">Name</label>\n" +
    "                        <div class=\"col-sm-2\" style=\"margin-left: -50px;\">\n" +
    "                            <select id=\"select_name\" name=\"user_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"brc.model.user_fk\" required>\n" +
    "                                <option ng-repeat=\"x in brc.formData.users\" ng-value=\"x.user_pk\">{{x.name}}</option>\n" +
    "                            </select>\n" +
    "                            <div class=\"invalid-feedback\"></div>\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group col-md-2\">\n" +
    "                            <button id=\"searchButton\" type=\"button\" class=\"btn btn-success\" style=\"border-radius: 20px\" ng-click=\"brc.search()\">Search</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
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
    "                                <button class=\"btn btn-default float-right\" ui-sref=\"app.role-list\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success\" id=\"saveButton\">\n" +
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
    "<div class=\"modal-header\">\n" +
    "    <h5 class=\"modal-title\" id=\"modal-title\">User Detail</h5>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Role Name :</label><label class=\"col-sm-8\">{{ model.title }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Description :</label><label class=\"col-sm-8\">{{ model.description }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Created Date :</label><label class=\"col-sm-8\">{{ model.createdDate | date: 'dd/MM/yyyy' }}</label>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"close()\">Cancel</button>\n" +
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
    "<div class=\"modal-header\">\n" +
    "    <h5 class=\"modal-title\" id=\"modal-title\">User Detail</h5>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Role Group :</label><label class=\"col-sm-8\">{{ model.title }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Description :</label><label class=\"col-sm-8\">{{ model.description }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Created Date :</label><label class=\"col-sm-8\">{{ model.createdDate | date: 'dd/MM/yyyy' }}</label>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"close()\">Cancel</button>\n" +
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
    "                                <button class=\"btn btn-default float-right\" ui-sref=\"app.roleGroupList\">Kembali</button> <button class=\"btn btn-success\"\n" +
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
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "    <meta charset=\"utf-8\" />\n" +
    "    <title></title>\n" +
    "</head>\n" +
    "<body>\n" +
    "\n" +
    "</body>\n" +
    "</html>"
  );


  $templateCache.put('app/modules/sowApproval/sowApproval.html',
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
    "                                    <label class=\"control-label col-sm-6\" id=\"tglMulai\" name=\"tglMulai\">{{vm.model.tglMulai | date: 'dd-MM-yyyy'}}</label>\n" +
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
    "                                    <!--<div class=\"row\">\n" +
    "                                        <label class=\"control-label col-sm-3\">Kota</label>\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"kotaTitle\" name=\"kotaTitle\">{{vm.model.btsInfo.kotaTitle}}</label>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"row\">\n" +
    "                                        <label class=\"control-label col-sm-3\">Cabang</label>\n" +
    "                                        <label class=\"control-label col-sm-6\" id=\"cabangTitle\" name=\"cabangTitle\">{{vm.model.btsInfo.cabangTitle}}</label>\n" +
    "                                    </div>-->\n" +
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
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-md-6\">\n" +
    "                                    <div class=\"row form-group\">\n" +
    "                                        <label class=\"control-label col-sm-3\">Job Type:</label>\n" +
    "                                        <div class=\"col-sm-9\">\n" +
    "                                            <select id=\"tipePekerjaan_fk1\" name=\"tipePekerjaan_fk1\" class=\"form-control\" ng-model=\"vm.model.sowTracks[0].tipePekerjaan_fk + ''\" disabled>\n" +
    "                                                <option value=\"0\">None</option>\n" +
    "                                                <option value=\"1\">SSO</option>\n" +
    "                                                <option value=\"2\">SSV</option>\n" +
    "                                            </select>\n" +
    "                                            <div class=\"invalid-feedback\"></div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <textarea ng-model=\"vm.model.sowTracks[0].route\" hidden></textarea>\n" +
    "                                    <div id=\"map1\" style=\"border:1px solid gray; height:500px\">\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"col-md-6\">\n" +
    "                                    <div class=\"row form-group\">\n" +
    "                                        <label class=\"control-label col-sm-3\">Job Type:</label>\n" +
    "                                        <div class=\"col-sm-9\">\n" +
    "                                            <select id=\"tipePekerjaan_fk2\" name=\"tipePekerjaan_fk2\" class=\"form-control\" ng-model=\"vm.model.sowTracks[1].tipePekerjaan_fk + ''\" disabled>\n" +
    "                                                <option value=\"0\">None</option>\n" +
    "                                                <option value=\"1\">SSO</option>\n" +
    "                                                <option value=\"2\">SSV</option>\n" +
    "                                            </select>\n" +
    "                                            <div class=\"invalid-feedback\"></div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <textarea ng-model=\"vm.model.sowTracks[1].route\" hidden></textarea>\n" +
    "                                    <div id=\"map2\" style=\"border:1px solid gray; height:500px\">\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
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
    "\n" +
    "                <div class=\"row form-group\">\n" +
    "                    <div class=\"col-md-12\">\n" +
    "                        <div class=\"card\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <button class=\"btn btn-default\" ui-sref=\"app.sowList\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success float-right\" id=\"approveButton\" ng-show=\"vm.model.sowResults.length>=3\">Approve</button>\n" +
    "                                <button class=\"btn btn-danger float-right\" id=\"rejectButton\" ng-show=\"vm.model.sowResults.length>=3\">Reject</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/sowEntry/sowEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Tambah SOW</div>\n" +
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
    "                                    <select id=\"project_fk\" name=\"project_fk\" class=\"form-control input-lg\" ng-model=\"vm.model.project_fk\" required>\n" +
    "                                        <option ng-repeat=\"x in vm.formData.projects\" ng-value=\"x.project_pk\">{{x.operatorTitle}}</option>\n" +
    "                                    </select>\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">BTS:</label>\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <select id=\"bts_fk\" name=\"bts_fk\" class=\"form-control input-lg\" ng-model=\"vm.model.bts_fk\" required>\n" +
    "                                        <option ng-repeat=\"x in vm.formData.btses\" ng-value=\"x.bts_pk\">{{x.name}}</option>\n" +
    "                                    </select>\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Tanggal :</label>\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <input type=\"text\" id=\"tglMulai\" name=\"tglMulai\" ng-model=\"vm.model.tglMulai\" class=\"form-control\" date-time-picker options=\"{ format: 'DD-MM-YYYY' }\" required />\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Technology:</label>\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <select id=\"technology_fk\" name=\"technology_fk\" class=\"form-control input-lg\" ng-model=\"vm.model.technology_fk\" required>\n" +
    "                                        <option ng-repeat=\"x in vm.formData.technologies\" ng-value=\"x.technology_pk\">{{x.title}}</option>\n" +
    "                                    </select>\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">DUID:</label>\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <input type=\"text\" id=\"duid\" name=\"duid\" class=\"form-control\" ng-model=\"vm.model.duid\" placeholder=\"DUID\">\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <div class=\"card-title\">Assign</div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <table id=\"sowAssign\" class=\"table table-sm\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th hidden>SOWAssign_PK</th>\n" +
    "                                        <th hidden>SOW FK</th>\n" +
    "                                        <th hidden>Jabatan FK</th>\n" +
    "                                        <th>Jabatan</th>\n" +
    "                                        <th>User</th>\n" +
    "                                    </tr>\n" +
    "                                </thead>\n" +
    "                                <tbody>\n" +
    "                                    <tr ng-repeat=\"sowAssign in vm.model.sowAssigns\">\n" +
    "                                        <td hidden>\n" +
    "                                            <input type=\"text\" id=\"sowAssign_pk\" name=\"sowAssign_pk\" ng-model=\"sowAssign.sowAssign_pk\" disabled />\n" +
    "                                            <div class=\"invalid-feedback\"></div>\n" +
    "                                        </td>\n" +
    "                                        <td class=\"text-center\" hidden>\n" +
    "                                            <input type=\"text\" id=\"sow_fk\" name=\"sow_fk\" ng-model=\"sowAssign.sow_fk\" disabled />\n" +
    "                                            <div class=\"invalid-feedback\"></div>\n" +
    "                                        </td>\n" +
    "                                        <td class=\"text-left\" hidden>\n" +
    "                                            <input type=\"text\" id=\"kategoriJabatan_fk\" name=\"kategoriJabatan_fk\" class=\"form-control\" ng-model=\"sowAssign.kategoriJabatan_fk\" disabled />\n" +
    "                                            <div class=\"invalid-feedback\"></div>\n" +
    "                                        </td>\n" +
    "                                        <td class=\"text-left\">\n" +
    "                                            <input type=\"text\" id=\"kategoriJabatanTitle\" name=\"kategoriJabatanTitle\" class=\"form-control\" ng-model=\"sowAssign.kategoriJabatanTitle\" disabled />\n" +
    "                                            <div class=\"invalid-feedback\"></div>\n" +
    "                                        </td>\n" +
    "                                        <td>\n" +
    "                                            <ui-select id=\"user_fk\" name=\"user_fk\" ng-model=\"sowAssign.user_fk\" size=\"0\" theme=\"select2\" ng-disabled=\"vm.disabled\" title=\"Find user\"\n" +
    "                                                       required style=\"width:200px\">\n" +
    "                                                <ui-select-match placeholder=\"Find user\">{{$select.selected.name}}</ui-select-match>\n" +
    "                                                <ui-select-choices refresh=\"vm.getUsers(sowAssign.kategoriJabatan_fk, $select.search)\" refresh-delay=\"0\" repeat=\"user.user_pk as user in vm.formData.users\">\n" +
    "                                                    <div>\n" +
    "                                                        <strong>\n" +
    "                                                            {{user.name }}\n" +
    "                                                        </strong>\n" +
    "                                                    </div>\n" +
    "                                                    <div>\n" +
    "                                                        {{\"Username: \" + user.username}}\n" +
    "                                                    </div>\n" +
    "                                                    <div style=\"margin:2px; border-bottom:1px solid #ccc\">\n" +
    "                                                        {{\"Email: \" + user.email}}\n" +
    "                                                    </div>\n" +
    "                                                </ui-select-choices>\n" +
    "                                            </ui-select>\n" +
    "                                            <div class=\"invalid-feedback\"></div>\n" +
    "                                        </td>\n" +
    "                                    </tr>\n" +
    "                                </tbody>\n" +
    "                            </table>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <div class=\"col-md-8\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" id=\"saveButton\">Simpan</button>\r" +
    "\n" +
    "                            <button class=\"btn btn-default float-right\" ui-sref=\"app.sowList\">Kembali</button>\r" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Track / Route</div>\n" +
    "                    <div ng-repeat=\"sowTrack in vm.model.sowTracks\">\n" +
    "\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Job Type:</label>\n" +
    "                                <div class=\"col-sm-9\">\n" +
    "                                    <select id=\"tipePekerjaan_fk1\" name=\"tipePekerjaan_fk1\" class=\"form-control\" ng-model=\"vm.model.sowTracks[0].tipePekerjaan_fk\" required>\n" +
    "                                        <option value=\"0\">None</option>\n" +
    "                                        <option value=\"1\">SSO</option>\n" +
    "                                        <option value=\"2\">SSV</option>\n" +
    "                                    </select>\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <div class=\"col-sm-12 input-group\">\n" +
    "                                    <div class=\"input-group-prepend\">\n" +
    "                                        <span class=\"input-group-text\" id=\"inputGroupFileAddon01\">Upload</span>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"custom-file\">\n" +
    "                                        <input type=\"file\" class=\"custom-file-input\" id=\"kmlFile1\" aria-describedby=\"inputGroupFileAddon01\">\n" +
    "                                        <label id=\"fileName1\" class=\"custom-file-label\" for=\"filePhoto\">Choose file</label>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <textarea ng-model=\"vm.model.sowTracks[0].route\" hidden></textarea>\n" +
    "                            <div id=\"map1\" style=\"border:1px solid gray; height:500px\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Job Type:</label>\n" +
    "                                <div class=\"col-sm-9\">\n" +
    "                                    <select id=\"tipePekerjaan_fk2\" name=\"tipePekerjaan_fk2\" class=\"form-control\" ng-model=\"vm.model.sowTracks[1].tipePekerjaan_fk\" required>\n" +
    "                                        <option value=\"0\">None</option>\n" +
    "                                        <option value=\"1\">SSO</option>\n" +
    "                                        <option value=\"2\">SSV</option>\n" +
    "                                    </select>\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <div class=\"col-sm-12 input-group\">\n" +
    "                                    <div class=\"input-group-prepend\">\n" +
    "                                        <span class=\"input-group-text\" id=\"inputGroupFileAddon01\">Upload</span>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"custom-file\">\n" +
    "                                        <input type=\"file\" class=\"custom-file-input\" id=\"kmlFile2\" aria-describedby=\"inputGroupFileAddon01\">\n" +
    "                                        <label id=\"fileName2\" class=\"custom-file-label\" for=\"filePhoto\">Choose file</label>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <textarea ng-model=\"vm.model.sowTracks[1].route\" hidden></textarea>\n" +
    "                            <div id=\"map2\" style=\"border:1px solid gray; height:500px\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
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
    "                                    <label class=\"control-label col-sm-6\" id=\"tglMulai\" name=\"tglMulai\">{{vm.model.tglMulai | date: 'dd-MM-yyyy'}}</label>\n" +
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
    "                            <div id=\"map\" style=\"border:1px solid gray\">\n" +
    "                            </div>\n" +
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
    "                                <button class=\"btn btn-default float-right\" ui-sref=\"app.technologyList\">Kembali</button>\n" +
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Simpan</button>\n" +
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
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List User</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.userEntry({ id: '0'})\">Tambah User</button>\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.userImportExcel({})\">Import from excel</button>\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"user\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>ID User</th>\n" +
    "                                        <th>Name</th>\n" +
    "                                        <th>Position</th>\n" +
    "                                        <!--<th>Role</th>-->\n" +
    "                                        <th>Phone Number</th>\n" +
    "                                        <th>Status</th>\n" +
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
    "</div>\n"
  );


  $templateCache.put('app/modules/user/userDetail.html',
    "<div class=\"modal-header\">\n" +
    "    <h3 class=\"modal-title\" id=\"modal-title\">User Detail</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-3 form-group text-center\">\n" +
    "            <img id=\"photo\" src=\"{{model.filePhotoInBase64 == null ? '/app/assets/images/default-large.png' : model.filePhotoInBase64}}\" style=\"width:150px;margin:0 auto\" class=\"img-fluid\" />\n" +
    "        </div>\n" +
    "        <div class=\"col-md-9\">\n" +
    "\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Name :</label><label class=\"col-sm-8\">{{ model.name }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Position :</label><label class=\"col-sm-8\">{{ model.kategoriJabatanTitle }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Phone :</label><label class=\"col-sm-8\">{{ model.noHP }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Email :</label><label class=\"col-sm-8\">{{ model.email }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Address :</label><label class=\"col-sm-8\">{{ model.address }}</label>\n" +
    "            </div>\n" +
    "            <div class=\"row form-group\">\n" +
    "                <label class=\"control-label col-sm-4 text-right\">Description :</label><label class=\"col-sm-8\">{{ model.description }}</label>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"close()\">Cancel</button>\n" +
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
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-6\">\n" +
    "\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">User ID:</label>\n" +
    "                                <div class=\"col-sm-9\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"userCode\" name=\"userCode\" autocomplete=\"off\" ng-model=\"vm.model.userCode\" placeholder=\"User ID\" disabled>\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Name:</label>\n" +
    "                                <div class=\"col-sm-9\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" ng-model=\"vm.model.name\" placeholder=\"Name\">\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Position:</label>\n" +
    "                                <div class=\"col-sm-9\">\n" +
    "                                    <select id=\"kategoriJabatan_fk\" name=\"kategoriJabatan_fk\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.kategoriJabatan_fk\" required>\n" +
    "                                        <option ng-repeat=\"x in vm.formData.kategoriJabatans\" ng-value=\"x.kategoriJabatan_pk\">{{x.title}}</option>\n" +
    "                                    </select>\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Phone Number:</label>\n" +
    "                                <div class=\"col-sm-9\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"noHP\" name=\"noHP\" ng-model=\"vm.model.noHP\" placeholder=\"Phone Number\">\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Email:</label>\n" +
    "                                <div class=\"col-sm-9\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" ng-model=\"vm.model.email\" placeholder=\"Email\">\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Nomor KTP:</label>\n" +
    "                                <div class=\"col-sm-9\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"noKTP\" name=\"noKTP\" ng-model=\"vm.model.noKTP\" placeholder=\"Nomor KTP\">\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row form-group\" ng-show=\"vm.model.user_pk == 0\">\n" +
    "                                <label class=\"control-label col-sm-3\">Password:</label>\n" +
    "                                <div class=\"col-sm-9\">\n" +
    "                                    <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" autocomplete=\"off\" ng-model=\"vm.model.password\" placeholder=\"Password\">\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row form-group\"  ng-show=\"vm.model.user_pk == 0\">\n" +
    "                                <label class=\"control-label col-sm-3\">Retype Password:</label>\n" +
    "                                <div class=\"col-sm-9\">\n" +
    "                                    <input type=\"password\" class=\"form-control\" id=\"reTypePassword\" name=\"reTypePassword\" autocomplete=\"off\" ng-model=\"vm.model.reTypePassword\" placeholder=\"Retype Password\">\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Address:</label>\n" +
    "                                <div class=\"col-sm-9\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\" ng-model=\"vm.model.address\" placeholder=\"Address\">\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Description:</label>\n" +
    "                                <div class=\"col-sm-9\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"description\" name=\"description\" ng-model=\"vm.model.description\" placeholder=\"Description\">\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6\">\n" +
    "\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Religion:</label>\n" +
    "                                <div class=\"col-sm-9\">\n" +
    "                                    <select id=\"religion\" name=\"religion\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.religion\" required>\n" +
    "                                        <option value=\"Buddha\">Buddha</option>\n" +
    "                                        <option value=\"Hindu\">Hindu</option>\n" +
    "                                        <option value=\"Islam\">Islam</option>\n" +
    "                                        <option value=\"Katolik\">Katolik</option>\n" +
    "                                        <option value=\"Protestan\">Protestan</option>\n" +
    "                                        <option value=\"Lainnya\">Lainnya</option>\n" +
    "                                    </select>\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Category Contract:</label>\n" +
    "                                <div class=\"col-sm-9\">\n" +
    "                                    <select id=\"categoryContract\" name=\"categoryContract\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.categoryContract\" required>\n" +
    "                                        <option value=\"C\">C</option>\n" +
    "                                        <option value=\"P\">P</option>\n" +
    "                                    </select>\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Gender:</label>\n" +
    "                                <div class=\"col-sm-9\">\n" +
    "                                    <select id=\"gender\" name=\"gender\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.gender\" required>\n" +
    "                                        <option value=\"L\">Laki-Laki</option>\n" +
    "                                        <option value=\"P\">Perempuan</option>\n" +
    "                                    </select>\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Marital Status:</label>\n" +
    "                                <div class=\"col-sm-9\">\n" +
    "                                    <select id=\"maritalStatus\" name=\"maritalStatus\" class=\"form-control input-lg\" size=\"0\" ng-model=\"vm.model.maritalStatus\" required>\n" +
    "                                        <option value=\"Kawin\">Kawin</option>\n" +
    "                                        <option value=\"Tidak Kawin\">Tidak Kawin</option>\n" +
    "                                        <option value=\"Cerai\">Cerai</option>\n" +
    "                                    </select>\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">NPWP:</label>\n" +
    "                                <div class=\"col-sm-9\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"npwp\" name=\"npwp\" ng-model=\"vm.model.npwp\" placeholder=\"NPWP\">\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">BPJS:</label>\n" +
    "                                <div class=\"col-sm-9\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"bpjs\" name=\"bpjs\" ng-model=\"vm.model.bpjs\" placeholder=\"BPJS\">\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Join Date :</label>\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <input type=\"text\" id=\"joinDate\" name=\"joinDate\" ng-model=\"vm.model.joinDate\" class=\"form-control\" date-time-picker options=\"{ format: 'DD-MM-YYYY' }\" required />\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Bank Name:</label>\n" +
    "                                <div class=\"col-sm-9\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"bankName\" name=\"bankName\" ng-model=\"vm.model.bankName\" placeholder=\"Bank Name\">\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Account Number:</label>\n" +
    "                                <div class=\"col-sm-9\">\n" +
    "                                    <input type=\"text\" class=\"form-control\" id=\"accountNumber\" name=\"accountNumber\" ng-model=\"vm.model.accountNumber\" placeholder=\"Account Number\">\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "\n" +
    "                            <div class=\"row form-group\">\n" +
    "                                <label class=\"control-label col-sm-3\">Salary:</label>\n" +
    "                                <div class=\"col-sm-9\">\n" +
    "                                    <input type=\"number\" class=\"form-control\" id=\"salary\" name=\"salary\" ng-model=\"vm.model.salary\" placeholder=\"Salary\">\n" +
    "                                    <div class=\"invalid-feedback\"></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <hr />\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <div class=\"col-md-12\">\r" +
    "\n" +
    "                            <button class=\"btn btn-success\" id=\"saveButton\">Tambah User</button>\r" +
    "\n" +
    "                            <button class=\"btn btn-default float-right\" ui-sref=\"app.userList\">Kembali</button>\r" +
    "\n" +
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
    "                            <button class=\"btn btn-default\" ui-sref=\"app.userList\">Kembali</button>\n" +
    "                            <button class=\"btn btn-success float-right\" id=\"uploadButton\">Submit</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );


  $templateCache.put('app/modules/userImportExcel/userImportExcel.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Import User</div>\n" +
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
    "                    </div>\n" +
    "                    <div class=\"row form-group\">\n" +
    "                        <div class=\"col-md-6\">\n" +
    "                            <button class=\"btn btn-default\" ui-sref=\"app.userList\">Kembali</button>\n" +
    "                            <button class=\"btn btn-default\" id=\"downloadButton\">Template</button>\n" +
    "                            <button class=\"btn btn-success float-right\" id=\"uploadButton\">Submit</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Upload result</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table class=\"table table-striped\" id=\"user\" style=\"line-height: 0;\">\n" +
    "                                <thead>\n" +
    "                                    <tr>\n" +
    "                                        <th>No</th>\n" +
    "                                        <th>Username</th>\n" +
    "                                        <th>Full Name</th>\n" +
    "                                        <!--<th>Email</th>-->\n" +
    "                                        <th>Phone Number</th>\n" +
    "                                        <th class=\"text-center\">Result</th>\n" +
    "                                        <th>Reason</th>\n" +
    "                                    </tr>\n" +
    "                                    <tr ng-repeat=\"user in vm.uploadResults\">\n" +
    "                                        <td><label>{{$index + 1}}</label></td>\n" +
    "                                        <td width=\"120px\"><label>{{user.model.username}}</label></td>\n" +
    "                                        <td width=\"250px\"><label>{{user.model.name}}</label></td>\n" +
    "                                        <!--<td><label>{{user.model.email}}</label></td>-->\n" +
    "                                        <td width=\"220px\"><label>{{user.model.noHP}}</label></td>\n" +
    "                                        <td class=\"text-center\">\n" +
    "                                            <div><span><i ng-show=\"!user.success\" class=\"fa fa-times\"></i></span></div>\n" +
    "                                            <div><span><i ng-show=\"user.success\" class=\"fa fa-check\"></i></span></div>\n" +
    "                                        </td>\n" +
    "                                        <td><label>{{user.validationResult.errors[0] == undefined ? '' : user.validationResult.errors[0].propertyName + ': ' +  user.validationResult.errors[0].message}}</label></td>\n" +
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


  $templateCache.put('app/modules/vendor/vendor.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">List Vendor</div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"form-group col-md-6\">\n" +
    "                            <button class=\"btn btn-success\" ui-sref=\"app.vendorEntry({ id: '0'})\">Tambah Vendor</button>\n" +
    "                            <button id=\"deleteButton\" class=\"btn btn-danger\">Delete Selected</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-md-6 text-right\" id=\"exportButtons\">\n" +
    "\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-md-12\">\n" +
    "                            <table id=\"vendor\">\n" +
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


  $templateCache.put('app/modules/vendorEntry/vendorEntry.html',
    "<div class=\"animated fadeIn\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-12\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-title\">Tambah Vendor</div>\n" +
    "                    <div class=\"col-md-8\">\n" +
    "                        <div class=\"row form-group\">\n" +
    "                            <label class=\"control-label col-sm-2\">Vendor Name:</label>\n" +
    "                            <div class=\"col-sm-10\">\n" +
    "                                <input type=\"text\" id=\"title\" name=\"title\" class=\"form-control\" ng-model=\"vm.model.title\" placeholder=\"Vendor Name\">\n" +
    "                                <div class=\"invalid-feedback\"></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12\">\r" +
    "\n" +
    "                                <button class=\"btn btn-success\" id=\"saveButton\">Simpan</button>\r" +
    "\n" +
    "                                <button class=\"btn btn-default float-right\" ui-sref=\"app.vendorList\">Kembali</button>\r" +
    "\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>"
  );

}]);
