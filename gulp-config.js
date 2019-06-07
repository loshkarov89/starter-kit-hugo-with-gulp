module.exports = {
  folder: {
    tasks: 'tasks',
    src: 'src',
    build: 'assets',
    prod: 'production',
    theme: 'project_theme'
  },
  file: {
    mainHtml: 'index.html',
    mainJs: 'app.js',
    vendorJs: 'vendor.js',
    vendorJsMin: 'vendor.min.js',
    mainScss: 'style.scss',
    mainScssMin: 'style.min.css',
    vendorScss: 'vendor.scss',
    vendorScssMin: 'vendor.min.css'
  },
  task: {
    esLint: 'es-lint',
    buildCustomJs: 'build-custom-js',
    buildJsVendors: 'build-js-vendors',
    buildSass: 'build-sass',
    buildSassFiles: 'compile-sass-files',
    buildStylesVendors: 'build-styles-vendors',
    cleanBuild: 'clean-build',
    copyFolders: 'copy-folders',
    watch: 'watch'
  },
  autoprefixer: {
    versions: 'last 4 versions'
  },
  imageExtensions: 'jpg|jpeg|png|svg|gif|ico|tiff',
  getPathesForSassCompiling: function () {
    return {
      files: [],
      isGcmq: false
     };
  },
  getPathesToCopyForProduction: function() {
    return [
      './**/*',
      `!{${this.folder.src},${this.folder.src}/**}`,
      '!{bower,bower/**}',
      '!{node_modules,node_modules/**}',
      `!${this.folder.build}/css/**.map`,
      `!${this.folder.build}/images/info.txt`,
      '!.bowerrc',
      '!bower.json',
      '!.gitignore',
      '!gulpfile.js',
      '!LICENSE',
      '!package.json',
      `!${this.folder.prod}`,
      '!README.md',
      '!readme.txt',
      '!CONTRIBUTING.md',
      '!gulp-config.js',
      '!package-lock.json',
      '!{tasks,tasks/**}',
      '!{.git,.git/**}',
      '!{.history,.history/**}',
      '!.gitattributes',
      '!.travis.yml',
      '!.eslintrc'
    ];
  },
  getPathesToCopy: function() {
    return [
      `./${this.folder.src}/**`,
      `!{${this.folder.src}/images,${this.folder.src}/images/**}`,
      `!{${this.folder.src}/js,${this.folder.src}/js/**}`,
      `!{${this.folder.src}/scss,${this.folder.src}/scss/**}`,
      `!{${this.folder.src}/vendor_entries,${this.folder.src}/vendor_entries/**}`
    ];
  }
};