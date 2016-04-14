'use strict';

/**
Usage: dokku tags[:COMMAND]

Manage docker image tags.

Additional commands:
    tags <app>                 List all app image tags
    tags:create <app> <tag>    Add tag to latest running app image
    tags:deploy <app> <tag>    Deploy tagged app image
    tags:destroy <app> <tag>   Remove app image tag
**/

// TODO: HAVE NOT COMPLETED AND TESTED //
function Tags(options, name) {
  this.options  = options;
  this.name     = name || '';

  this.ssh      = new (require('../utils/ssh'))(options.ssh);
}

module.exports = Tags;