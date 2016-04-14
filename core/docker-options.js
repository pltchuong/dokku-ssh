'use strict';

/**
Usage: dokku docker-options[:COMMAND]

Display app's Docker options for all phases.

Additional commands:
    docker-options:add <app> <phase(s)> OPTION      Add Docker option to app for phase (comma separated phase list)
    docker-options <app> [phase(s)]                 Display app's Docker options for all phases (or comma separated phase list)
    docker-options:remove <app> <phase(s)> OPTION   Remove Docker option from app for phase (comma separated phase list)
**/

// TODO: HAVE NOT COMPLETED AND TESTED //
function DockerOptions(options, name) {
  this.options  = options;
  this.name     = name || '';

  this.ssh      = new (require('../utils/ssh'))(options.ssh);
}

Checks.prototype.list = function () {
  return this.ssh.exec(`dokku docker-options "${this.name}"`);
};

module.exports = DockerOptions;