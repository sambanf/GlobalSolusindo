// Grunt tasks

module.exports = function (grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
            '* <%= pkg.name %> - v<%= pkg.version %> - MIT LICENSE <%= grunt.template.today("yyyy-mm-dd") %>. \n' +
            '* @author <%= pkg.author %>\n' +
            '*/\n',

        clean: {
            dist: ['src']
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            app: {
                src: ['app/modules/**/*.js']
            }
        },

        exec: {
            npmInstaller: 'npm install'
        },

        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: false
            },
            base: {
                src: [
                    // Angular Project Dependencies,
                    'app/app.js',
                    'app/app.config.js',
                    'app/modules/**/*Module.js',
                    'app/modules/**/*Route.js',
                    'app/modules/**/*Ctrl.js',
                    'app/modules/**/*Service.js',
                    'app/modules/**/*Directive.js'
                ],
                dest: 'app/assets/js/<%= pkg.name %>-app.<%= pkg.version %>.<%= pkg.build %>.js'
            },
            build: {
                src: [
                    // Angular Project Dependencies,

                    'node_modules/jquery/dist/jquery.min.js',
                    'node_modules/underscore/underscore.js',
                    'node_modules/moment/moment.js',
                    'node_modules/moment-timezone/moment-timezone.js',
                    'node_modules/jquery-ui-dist/jquery-ui.js',
                    'node_modules/datatables/media/js/jquery.dataTables.min.js',
                    'node_modules/datatables.net-scroller/js/dataTables.scroller.js',
                    'node_modules/datatables.net-select/js/dataTables.select.js',
                    'node_modules/datatables.net-fixedcolumns/js/dataTables.fixedColumns.js',
                    'node_modules/es5-shim/es5-shim.js',
                    'node_modules/json3/json3.js',
                    'node_modules/angular/angular.js',
                    'node_modules/angular-ui-router/release/angular-ui-router.js',
                    'node_modules/angular-resource/angular-resource.js',
                    'node_modules/angular-aria/angular-aria.js',
                    'node_modules/angular-cookies/angular-cookies.js',
                    'node_modules/angular-animate/angular-animate.js',
                    'node_modules/angular-touch/angular-touch.js',
                    'node_modules/angular-sanitize/angular-sanitize.js',
                    'node_modules/ui-bootstrap4/dist/ui-bootstrap-tpls-3.0.5.js',
                    'node_modules/angular-ui-layout/src/ui-layout.js',
                    'node_modules/angular-breadcrumb/dist/angular-breadcrumb.min.js',
                    'node_modules/angular-datatables/dist/angular-datatables.min.js',
                    'node_modules/angular-datatables/dist/plugins/scroller/angular-datatables.scroller.min.js',
                    'node_modules/angular-datatables/dist/plugins/select/angular-datatables.select.min.js',
                    'node_modules/angular-datatables/dist/plugins/fixedcolumns/angular-datatables.fixedcolumns.js',
                    'node_modules/select2/dist/js/select2.js',
                    'node_modules/ui-select/dist/select.min.js',
                    'node_modules/ngstorage/ngStorage.js',
                    'node_modules/daterangepicker/daterangepicker.js',
                    'node_modules/angular-daterangepicker/js/angular-daterangepicker.js',
                    'node_modules/pc-bootstrap4-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
                    'node_modules/angular-fancytree/dist/angular-fancytree.js',
                    'node_modules/alertifyjs/build/alertify.js',
                    'app/modules/service/lib/autoNumeric-1.8.3.js',
                    'node_modules/jquery.fancytree/dist/jquery.fancytree-all.min.js',
                    'node_modules/ng-tags-input/build/ng-tags-input.js'
                ],
                dest: 'app/assets/js/<%= pkg.name %>-dist.<%= pkg.version %>.<%= pkg.build %>.js'
            }
        },

        uglify: {
            options: {
                banner: '<%= banner %>',
                report: 'min'
            },
            base: {
                //src: ['<%= concat.base.dest %>'],
                src: [
                    'app/assets/js/<%= pkg.name %>-dist.<%= pkg.version %>.<%= pkg.build %>.js',
                    // 'app/assets/js/<%= pkg.name %>-appbundle.<%= pkg.version %>.<%= pkg.build %>.js',
                ],
                dest: 'app/assets/js/<%= pkg.name %>-dist.min.<%= pkg.version %>.<%= pkg.build %>.js'
            },
            basePlugin: {
                src: ['src/plugins/**/*.js'],
                dest: 'app/assets/js/plugins/',
                expand: true,
                flatten: true,
                ext: '.min.js'
            }
        },

        connect: {
            server: {
                options: {
                    keepalive: true,
                    port: 4000,
                    base: '.',
                    hostname: 'localhost',
                    debug: true,
                    livereload: false,
                    open: true
                }
            }
        },
        concurrent: {
            tasks: ['connect', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        },

        watch: {
            app: {
                files: '<%= jshint.app.src %>',
                tasks: ['jshint:app'],
                options: {
                    livereload: true
                }
            }
        },


        injector: {
            options: {},
            dev: {
                files: {
                    'index.html': [
                        'node_modules/jquery-ui-dist/jquery-ui.css',
                        'node_modules/datatables/media/css/jquery.dataTables.min.css',
                        'node_modules/datatables-select/dist/css/select.bootstrap.css',
                        'node_modules/angular-datatables/dist/css/angular-datatables.min.css',
                        'node_modules/daterangepicker/daterangepicker.css',
                        'node_modules/angular-ui-layout/src/ui-layout.css',
                        'node_modules/ui-bootstrap4/dist/ui-bootstrap-3.0.5-csp.css',
                        'node_modules/@fortawesome/fontawesome-free/css/all.css',
                        'node_modules/ui-select/dist/select.css',
                        'node_modules/alertifyjs/build/css/alertify.css',
                        'node_modules/alertifyjs/build/css/themes/default.css',
                        'node_modules/jquery.fancytree/dist/skin-material/ui.fancytree.css',
                        'node_modules/pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                        'node_modules/ng-tags-input/build/ng-tags-input.css',
                        'app/assets/css/*.css',
                        // 'app/assets/css/**/*.css',
                        'app/assets/js/<%= pkg.name %>-dist.<%= pkg.version %>.<%= pkg.build %>.js',
                        //'app/assets/js/angular-ui-router.js.map',
                        /** Insert any Development JS or CSS */
                        'app/app.js',
                        'app/app.config.js',
                        'app/**/*Module.js',
                        'app/**/*Model.js',
                        'app/**/*Endpoint.js',
                        'app/**/*Route.js',
                        'app/**/*Ctrl.js',
                        'app/**/*Service.js',
                        'app/**/*Directive.js'
                    ]
                }
            },
            production: {
                files: {
                    'index.html': [
						'app/assets/fonts/**',
                        'app/assets/css/<%= pkg.name %>-style.<%= pkg.version %>.<%= pkg.build %>.css',
                        'app/assets/css/*.css',
                        'app/assets/js/<%= pkg.name %>-dist.min.<%= pkg.version %>.<%= pkg.build %>.js',
                        'app/assets/js/<%= pkg.name %>-app.<%= pkg.version %>.<%= pkg.build %>.js',
                        'app/assets/js/<%= pkg.name %>-templates.<%= pkg.version %>.<%= pkg.build %>.js'
                    ]
                }
            }
        },

        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1,
                banner: '<%= banner %>',
            },
            target: {
                files: {
                    'app/assets/css/<%= pkg.name %>-style.<%= pkg.version %>.<%= pkg.build %>.css': [
                        'node_modules/jquery-ui-dist/jquery-ui.css',
                        'node_modules/datatables/media/css/jquery.dataTables.min.css',
                        'node_modules/datatables-select/dist/css/select.bootstrap.css',
                        'node_modules/angular-datatables/dist/css/angular-datatables.min.css',
                        'node_modules/daterangepicker/daterangepicker.css',
                        'node_modules/angular-ui-layout/src/ui-layout.css',
                        'node_modules/ui-bootstrap4/dist/ui-bootstrap-3.0.5-csp.css',
                        'node_modules/@fortawesome/fontawesome-free/css/all.css',
                        'node_modules/select2/dist/css/select2.css',
                        'node_modules/ui-select/dist/select.css',
                        'node_modules/alertifyjs/build/css/alertify.css',
                        'node_modules/alertifyjs/build/css/themes/default.css',
                        'node_modules/jquery.fancytree/dist/skin-material/ui.fancytree.css',
                        'node_modules/pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
                        'node_modules/ng-tags-input/build/ng-tags-input.css'
                    ]
                }
            }
        },
		copy: {
			main: {
				files: [
					{
						expand: true,
						src: ['node_modules/@fortawesome/fontawesome-free/css/all.css'],
						dest: 'app/assets/fonts/',
						rename: function (dest, src) {
                            return dest + src.replace('node_modules/@fortawesome/', '');
                        }
					},
					{
						expand: true,
						src: ['node_modules/@fortawesome/fontawesome-free/webfonts/**'],
						dest: 'app/assets/fonts/',
						rename: function (dest, src) {
                            return dest + src.replace('node_modules/@fortawesome/', '');
                        }
					},
					{
						expand: true,
						src: ['node_modules/datatables/media/images/**'],
						dest: 'app/assets/images/',
						rename: function (dest, src) {
                            return dest + src.replace('node_modules/datatables/media/images', '');
                        }
                    },
				],
			},
		},
        ngtemplates: {
            app: {
                src: 'app/modules/**/*.html',
                dest: 'app/assets/js/<%= pkg.name %>-templates.<%= pkg.version %>.<%= pkg.build %>.js',
                options: {
                    module: '<%= pkg.name %>',
                    root: 'app/',
                    standAlone: false
                }
            }
        }
    });

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    // Making grunt default to force in order not to break the project if something fail.
    grunt.option('force', true);

    // Register grunt for release
    grunt.registerTask("build", [
        "jshint",
        "concat",
        "ngtemplates",
        "cssmin",
        "uglify",
        "injector:production",
		"copy:main",
        //"concurrent",
        "clean"
    ]);

    // Register grunt tasks for deps installer
    grunt.registerTask("install", [
        "exec"
    ]);

    // Development task(s).
    grunt.registerTask('dev', [
        "jshint",
        "concat",
        'injector:dev',
        //'concurrent'
    ]);

};
