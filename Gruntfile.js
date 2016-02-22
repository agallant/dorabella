/**
 * Gruntfile for dorabella, a freedom.js-powered encrypted chat app
 **/

var path = require('path');
var pgpPath = path.dirname(require.resolve('freedom-pgp-e2e/package.json'));
var freedomPath = path.dirname(require.resolve('freedom'));
var tabPath = path.dirname(require.resolve('tab-strip'));

module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {
    buildcontrol: 'grunt-build-control'
  });

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
      socialWsServer: {
        src: [freedomPath + '/providers/social/websocket-server/social.ws.js*'],
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

    jshint: {
      all: ['src/*.js', 'spec/*.js', 'spec/integration/*.js'],
      options: {
        jshintrc: true
      }
    },

    karma: {
      options: {
        configFile: 'karma.conf.js'
      },
      browsers: {
        singleRun: true,
        autoWatch: false
      },
      watch: {
        singleRun: false,
        autoWatch: true,
        reporters: ['progress', 'story'],
        preprocessors: {},
        coverageReporter: {}
      },
      phantom: {
        browsers: ['PhantomJS'],
        singleRun: true,
        autoWatch: false
      }
    },

    browserify: {
      jasmine_unit: {
        files: {
          'build/spec-unit.js': 'spec/freedom-securechat.spec.js'
        }
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

  grunt.registerTask('build', [
    'jshint',
    'copy'
  ]);
  grunt.registerTask('test', [
    'build',
    'browserify',
    'karma:phantom',
    'karma:browsers'
  ]);
  grunt.registerTask('demo', [
    'build',
    'connect'
  ]);
  grunt.registerTask('deploy', [
    'build',
    'test',
    'buildcontrol'
  ]);
  grunt.registerTask('default', [
    'build',
    'browserify',
    'karma:phantom'
  ]);

};
