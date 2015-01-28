module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // libraries
      'http://maps.google.com/maps/api/js?sensor=false',
      'http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/src/markerclusterer.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',

      // our app
      'dist/ng-clustered-map.js',

      // tests
      'test/*.js',
    ],

    autoWatch: true,

    browsers: ['Firefox']
  });
};
