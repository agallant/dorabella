/**
 * Gruntfile for dorabella, a freedom.js-powered encrypted chat app
 **/

var path = require('path');
var pgpPath = path.dirname(require.resolve('freedom-pgp-e2e/package.json'));
var freedomPath = path.dirname(require.resolve('freedom'));

module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      app: {
        cwd: 'src/',
        src: ['**/**'],
        dest: 'build/',
        expand: true
      },
      freedom: {
        src: [freedomPath + '/dist/freedom.min.js*'],
        dest: 'build/',
        flatten: true,
        filter: 'isFile',
        expand: true
      },
      freedomWsServer: {
        src: [freedomPath + '/providers/social/websocket-server/*'],
        dest: 'build/websocket-server/',
        flatten: true,
        filter: 'isFile',
        expand: true
      },
      freedomPgpE2e: {
        cwd: pgpPath + '/build/',
        src: ['*.js', 'pgpapi.json'],
        dest: 'build/freedom-pgp-e2e/',
        flatten: true,
        filter: 'isFile',
        expand: true
      }
    },

    jshint: {
      all: ['src/*.js', 'spec/*.js', 'spec/integration/*.js'],
      options: {
        jshintrc: true
      }
    },

    connect: {
      demo: {
        options: {
          port: 8000,
          keepalive: true,
          base: ['./', 'build/'],
          open: 'http://localhost:8000/build/'
        }
      }
    },

    clean: ['build/']
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('build', [
    'jshint',
    'copy'
  ]);
  grunt.registerTask('test', [
    'build',
    'jasmine_node',
    'jasmine_chromeapp',
    'karma'
  ]);
  grunt.registerTask('ci', [
    'build',
    'jasmine_node'
  ]);
  grunt.registerTask('demo', [
    'build',
    'connect'
  ]);
  grunt.registerTask('default', [
    'build',
    'karma:phantom'
  ]);

}