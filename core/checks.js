'use strict';

/**
Usage: dokku checks[:COMMAND]

Manage zero-downtime checks.

Additional commands:
    checks <app>           Show zero-downtime status
    checks:disable <app>   Disable zero-downtime checks
    checks:enable <app>    Enable zero-downtime checks
**/

function Checks(options, name) {
  this.options  = options;
  this.name     = name || '';

  this.ssh      = new (require('../utils/ssh'))(options.ssh);
}

Checks.prototype.list = function () {
  return this.ssh.exec(`dokku checks "${this.name}"`);
};

Checks.prototype.enable = function () {
  return this.ssh.exec(`dokku checks:enable "${this.name}"`);
};

Checks.prototype.disable = function () {
  return this.ssh.exec(`dokku checks:disable "${this.name}"`);
};

module.exports = Checks;