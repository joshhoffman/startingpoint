module.exports = function(grunt) {
    // load plugins
    [
        'grunt-cafe-mocha',
        'grunt-contrib-jshint',
        'grunt-contrib-less',
        'grunt-contrib-watch',
        'grunt-ember-templates'
    ].forEach(function(task) {
            grunt.loadNpmTasks(task);
        });

    grunt.initConfig({
        cafemocha: {
            all: {
                src: 'qa/**/tests-unit*.js',
                options: {ui: 'tdd'}
            }
        },
        jshint: {
            app: [
                'app.js',
                'Grunt-file.js',
                'public/qa/**/*.js',
                'public/js/**/*.js',
                'qa/**/*.js',
                'routes/**/*.js'
            ],
            qa: [
                'Grunt-file.js',
                'public/qa/**/*.js',
                'qa/**/*.js'
            ]
        },
        less: {
            development: {
                files: {"public/stylesheets/style.css": "public/stylesheets/style.less"}
            }
        },
        emberTemplates: {
            compile: {
                options: {
                    templateBasePath: /views\//
                },
                files: {
                    "public/js/app/templates/templates.js": ["views/templates/**/*.handlebars"]
                }
            }
        },
        watch: {
            scripts: {
                files: [
                    'app.js',
                    'routes/**/*.js',
                    'controllers/**/*.js',
                    'Grunt-file.js',
                    'public/qa/**/*.js',
                    'public/js/**/*.js',
                    'qa/**/*.js',
                    'public/stylesheets/style.less',
                    'templates/**/*.hbs'
                ],
                tasks: [
                    'cafemocha',
                    'jshint',
                    'less',
                    'emberTemplates'
                ]
            }
        },
        notify: {
            cafemocha: {
                message: 'Mocha done!'
            }
        }
    });

    //grunt.registerTask('default', ['cafemocha', 'jshint', 'less', 'notify:cafemocha'])
    grunt.registerTask('default', ['cafemocha', 'jshint', 'less', 'emberTemplates'])
}