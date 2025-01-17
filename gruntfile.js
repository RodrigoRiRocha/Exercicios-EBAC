module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    "dist/styles/main.min.css": "src/styles/main.less"
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.min.html': 'src/index.html'
                }
            }
        },
        replace: {
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'CSS_PATH',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'JS_PATH',
                            replacement: './scripts/main.min.js'
                        }
                    ]
                },
                files: [
                    { expand: true, flatten: true, src: ['dist/index.min.html'], dest: 'dist/' }
                ]
            }
        },
        watch: {
            styles: {
                files: ['src/styles/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'htmlmin', 'replace', 'watch']);
};