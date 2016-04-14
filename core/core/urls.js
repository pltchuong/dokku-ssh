'use strict';

/**
    urls <app>   Show all URLs for an application
**/

// TODO: HAVE NOT COMPLETED AND TESTED //
function Urls(options, name) {
  this.options  = options;
  this.name     = name || '';

  this.ssh      = new (require('../utils/ssh'))(options.ssh);
}

module.exports = Urls;