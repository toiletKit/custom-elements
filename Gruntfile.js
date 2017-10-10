module.exports = (grunt) => {
  String.prototype.capitalizeFirstLetter = () => {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  if (grunt.file.exists('settings-custom.yaml')) {
    // We have a custom setup
    grunt.settings = grunt.file.readYAML('settings-custom.yaml');
    console.log('Custom settings supplied')
  } else {
    // We will use the default options
    grunt.settings = grunt.file.readYAML('settings.yaml');
  }

  // Load required modules
  grunt.loadNpmTasks('grunt-postcss-x');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-copy');

  const fs = require('fs');
  const deleteFolderRecursive = (path) => {
    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach((file, index) => {
        const curPath = path + "/" + file;
        if (fs.lstatSync(curPath).isDirectory()) { // recurse
          deleteFolderRecursive(curPath);
        } else { // delete file
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(path);
    }
  };

  // Compile the css
  grunt.registerTask('compile', 'Compile css files', () => {
    const compileCss = (element) => {
      // Compile the css files
      grunt.config.set('sass.' + element + '.files', [{
        src: 'src/scss/' + element + '/' + element + '.scss',
        dest: 'dist/css/' + grunt.settings.prefix + '-' + element + '.css'
      }]);

      grunt.task.run('sass:' + element);

      // Autoprefix the CSS files
      grunt.config.set('postcss.' + element + '.files', [{
        map: false,
        processors: [
          require('autoprefixer')({
            browsers: [
              `grunt.settings.browsers`,
            ]
          })
        ],
        src: 'dist/css/' + grunt.settings.prefix + '-' + element + '.css',
      }]);

      grunt.task.run('postcss:' + element);

      // Autoprefix the CSS files
      grunt.config.set('cssmin.' + element + '.files', [{
        src: 'dist/css/' + grunt.settings.prefix + '-' + element + '.css',
        dest: 'dist/css/' + grunt.settings.prefix + '-' + element + '.min.css'
      }]);

      grunt.task.run('cssmin:' + element);
    };

    console.info('Build the stylesheets')
    deleteFolderRecursive('dist/css');
    grunt.settings.elements.forEach((element) => {
      // Create the css for each element
      compileCss(element);
    });
  });

  // Compile the css for docs
  grunt.registerTask('compileButtons', 'Compile css for docs', () => {
    const compileButtons = () => {
      // Compile the css files
      grunt.config.set('sass.buttons.files', [{
        src: 'src/scss/buttons.scss',
        dest: 'docs/_media/buttons.css'
      }]);

      grunt.task.run('sass:buttons');

      // Autoprefix the CSS files
      grunt.config.set('cssmin.buttons.files', [{
        src: 'docs/_media/buttons.css',
        dest: 'docs/_media/buttons.min.css'
      }]);

      grunt.task.run('cssmin:buttons');
    };

    console.info('Build the stylesheet')
    compileButtons();
  });

  // Create the Custom Elements
  grunt.registerTask('createElements', 'Create the Custom Elemets', () => {
    // Create the custom element
    const createElement = (element, settings) => {
      let tmpJs = '';
      let tmpJsPlain = '';

      if (grunt.file.exists('src/js/' + element + '/' + element + '.js')) {
        tmpJs = grunt.file.read('src/js/' + element + '/' + element + '.js');

        // Repeat
        tmpJs = grunt.file.read('src/js/' + element + '/' + element + '.js');
        tmpJs = tmpJs.replace(/tk-/g, settings.prefix + '-');

        grunt.file.write('src/js/' + element + '/' + element + '_es6.js', tmpJs);

        // Browserify the ES5 Element
        grunt.config.set('browserify.options', {
          "transform": [
            [
              "babelify",
              {
                "presets": [
                  "es2015",
                  "minify"
                ],
                "plugins": [
                  "static-fs"
                ]
              }
            ]
          ]
        });

        // As custom elements (plain Js and css)
        grunt.config.set('browserify.' + element + '.files', [{
          dest: 'dist/js/' + settings.prefix + '-' + element + '-es5.js',
          src: 'src/js/' + element + '/' + element + '_es6.js',
        }]);

        grunt.task.run('browserify:' + element);

        // Uglify the scripts
        grunt.config.set('uglify.' + element + '-js' + '.files', [{
          src: ['dist/js/' + settings.prefix + '-' + element + '-es5.js', '!dist/js/' + settings.prefix + '-' + element + '.min.js'],
          dest: '',
          ext: '.min.js',
          expand: true
        }]);

        grunt.task.run('uglify:' + element + '-js');

        // Put an ES6 copy in the dist folder
        grunt.config.set('copy.' + element + '-es6' + '.files', [{
          src: 'src/js/' + element + '/' + element + '_es6.js',
          dest: 'dist/js/' + settings.prefix + '-' + element + '.js'
        }]);

        grunt.task.run('copy:' + element + '-es6');

        // Uglify the ES6 script
        grunt.config.set('uglify.' + element + '-es6' + '.files', [{
          src: ['dist/js/' + settings.prefix + '-' + element + '.js', '!dist/js/' + settings.prefix + '-' + element + '.min.js'],
          dest: '',
          ext: '.min.js',
          expand: true
        }]);

        grunt.task.run('uglify:' + element + '-es6');

        // Put a copy in the demo folder
        grunt.config.set('copy.' + element + '-js-es6' + '.files', [{
          src: 'dist/js/' + settings.prefix + '-' + element + '-es6.min.js',
          dest: 'dist/js/' + settings.prefix + '-' + element + '.min.js'
        }]);

        grunt.task.run('copy:' + element + '-js-es6');
      }
    };

    console.info('Build the custom Elements')
    grunt.settings.elements.forEach((element) => {
      // Create elements as html files, compatible with document-register-element polyfill
      createElement(element, grunt.settings);

    });
  });

  // Cleanup process
  grunt.registerTask('clearFiles', 'Clean up', () => {

    // Remove the minified/non minified css
    deleteFolderRecursive('src/scss/css');

    grunt.settings.elements.forEach((element) => {
      // Remove the extracripts
      if (grunt.file.exists('src/js/' + element + '/' + element + '_es6.js')) {
        grunt.file.delete('src/js/' + element + '/' + element + '_es6.js');
      }
    });

    if (grunt.file.exists('dist/polyfills/webcomponents-loader.js')) {
      grunt.file.delete('dist/polyfills/webcomponents-loader.js');
    }
    if (grunt.file.exists('dist/polyfills/webcomponents-loader.min.js')) {
      grunt.file.delete('dist/polyfills/webcomponents-loader.min.js');
    }
    if (grunt.file.exists('docs/_media/buttons.css')) {
      grunt.file.delete('docs/_media/buttons.css');
    }
  });

  // Copy files to the docs and demo foders
  grunt.registerTask('copyDist', 'Copy the distribution files to docs and demo', () => {
    // Put a copy in the docs folder
    grunt.config.set('copy.docscss.files', [{
      expand: true,
      filter: 'isFile',
      cwd: 'dist/css/',
      src: ['*'],
      dest: 'docs/_media/css/'
    }]);

    grunt.task.run('copy:docscss');

    // Put a copy in the docs folder
    grunt.config.set('copy.docsjs.files', [{
      expand: true,
      filter: 'isFile',
      cwd: 'dist/js/',
      src: ['*'],
      dest: 'docs/_media/js/'
    }]);

    grunt.task.run('copy:docsjs');
  });

  grunt.registerTask('elements', () => {
    // Clear the polyfills folder
    // deleteFolderRecursive('dist/polyfills');
    deleteFolderRecursive('dist/js');

    // Create the css files
    grunt.task.run('compile');

    // Create the buttons.css file
    grunt.task.run('compileButtons');

    // Create the elements
    grunt.task.run('createElements');

    // Do the clean up
    grunt.task.run('clearFiles');

    // Copy files to docs and demo
    grunt.task.run('copyDist');
  });

  grunt.registerTask('default', ['elements']);
};
