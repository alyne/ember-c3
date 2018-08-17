/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-c3',
  included: function(app) {
    this._super.included(app);

    app.import({
      production: 'node_modules/d3/d3.min.js',
      development: 'node_modules/d3/d3.js',
      test: 'node_modules/d3/d3.js'
    });
    app.import({
      production: 'node_modules/c3/c3.min.css',
      development: 'node_modules/c3/c3.css',
      test: 'node_modules/c3/c3.css'
    });
    app.import({
      production: 'node_modules/c3/c3.min.js',
      development: 'node_modules/c3/c3.js',
      test: 'node_modules/c3/c3.js'
    });
  }
};
