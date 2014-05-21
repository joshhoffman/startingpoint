module.exports = function(grunt) {
    // load plugins
    [
        'grunt-cafe-mocha',
        'grunt-contrib-jshint',
        'grunt-contrib-less',
        'grunt-contrib-watch',
        'grunt-ember-templates',
        'grunt-contrib-coffee',
        'grunt-coffeelint'
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
        coffee: {
            compile: {
                files: {
                    'test/test.js': 'test/test.coffee'
                }
            }
        },
        coffeelint: {
            options: {
                configFile: 'coffeelint.json'
              },
              app: ['test/*.coffee']
          },
        jshint: {
            app: [
                'app.js',
                'routes/**/*.js',
                'controllers/**/*.js',
                'Socket/**/*.js',
                'models/**/*.js',
                'lib/**/*.js'
                ],
            ember: [
                'public/js/**/*.js',
                '!public/js/app/templates/*.js'
            ],
            qa: [
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
                    amd: false,
                    templateBasePath: /views\/templates\//
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
    grunt.registerTask('default', ['cafemocha', 'jshint', 'less', 'emberTemplates', 'coffee', 'coffeelint'])
}