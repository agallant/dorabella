/**
 * Gruntfile for dorabella, a freedom.js-powered encrypted chat app
 **/

var path = require('path');
var pgpPath = path.dirname(require.resolve('freedom-pgp-e2e/package.json'));
var freedomPath = path.dirname(require.resolve('freedom'));
var providersPath = path.dirname(require.resolve('radiatus-providers'));
var hexPath = path.dirname(require.resolve('hex2words'));
var tabPath = path.dirname(require.resolve('tab-strip'));

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
      radiatusWsServer: {
        src: [providersPath + '/src/providers/social.radiatus.js*'],
        dest: 'build/websocket-server/',
        flatten: true,
        filter: 'isFile',
        expand: true
      },
      freedomPgpE2e: {
        cwd: pgpPath + '/dist/',
        src: ['*.js', 'pgpapi.json'],
        dest: 'build/freedom-pgp-e2e/',
        flatten: true,
        filter: 'isFile',
        expand: true
      },
      tabStrip: {
        cwd: tabPath,
        src: ['TabStrip.js'],
        dest: 'build/',
        flatten: true,
        filter: 'isFile',
        expand: true
      },
      dist: {
	      cwd: 'build/',
	      src: ['**/**'],
	      dest: 'dist/',
	      expand: true
      }
    },

    browserify: {
      hex2words: {
        files: {
          'build/hex2words.js': [require.resolve('hex2words')]
        }
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

    buildcontrol: {
      options: {
	      dir: 'dist/',
	      commit: true,
	      push: true,
	      message: 'Built %sourceName% from commit %sourceCommit% on branch ' +
	        '%sourceBranch%'
      },
      pages: {
	      options: {
          remote: 'https://github.com/soycode/dorabella.git',
          branch: 'gh-pages'
	      }
      }
    },

    clean: ['build/']
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-build-control');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('build', [
    'jshint',
    'browserify',
    'copy'
  ]);
  grunt.registerTask('demo', [
    'build',
    'connect'
  ]);
  grunt.registerTask('deploy', [
    'build',
    'buildcontrol'
  ]);
  grunt.registerTask('default', [
    'build'
  ]);

};
