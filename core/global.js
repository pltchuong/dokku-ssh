'use strict';

function Global(options, name) {
  this.options  = options;
  this.name     = name || '';

  this.ssh      = new (require('../utils/ssh'))(options.ssh);
}

Global.prototype.apps = function () {
  return this.ssh.exec('dokku apps');
};

// return this.ssh.exec('dokku checks');

// Usage: dokku config[:COMMAND] (<app>|--global)

Global.prototype.domains = function () {
  return this.ssh.exec('dokku domains:set-global');
};

// dokku ls

Global.prototype.processes = function () {
  return this.ssh.exec('dokku ps:restartall');
};

Global.prototype.processes = function () {
  return this.ssh.exec('dokku ps:rebuildall');
};

//ps
//ps:restore

module.exports = Global;