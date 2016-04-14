'use strict';

/**
Usage: dokku apps[:COMMAND]

List your apps.

Example:

$ dokku apps
=====> My Apps
example
example2

Additional commands:
    apps:create <app>                 Create a new app
    apps:destroy <app>                Permanently destroy an app
    apps                              List your apps
    apps:rename <old-app> <new-app>   Rename an app
**/

function Apps(options, name) {
  this.options  = options;
  this.name     = name || '';

  this.ssh      = new (require('../utils/ssh'))(options.ssh);
}

Apps.prototype.create = function() {
  return this.ssh.exec(`dokku apps:create "${this.name}"`);
};

Apps.prototype.destroy = function() {
  return this.ssh.exec(`echo "${this.name}" | dokku apps:destroy "${this.name}"`);
};

Apps.prototype.rename = function(name) {
  return this.ssh.exec(`dokku apps:rename "${this.name}" "${name || ''}"`);
};



Apps.prototype.certificates = function() {
  return new (require('../core/certificates'))(this.options, this.name);
};

Apps.prototype.checks = function() {
  return new (require('../core/checks'))(this.options, this.name);
};

Apps.prototype.configs = function() {
  return new (require('../core/configs'))(this.options, this.name);
};

Apps.prototype.dockerOptions = function() {
  return new (require('../core/docker-options'))(this.options, this.name);
};

Apps.prototype.domains = function() {
  return new (require('../core/domains'))(this.options, this.name);
};

Apps.prototype.events = function() {
  return new (require('../core/events'))(this.options, this.name);
};

Apps.prototype.logs = function() {
  return new (require('../core/logs'))(this.options, this.name);
};

Apps.prototype.proxy = function() {
  return new (require('../core/proxy'))(this.options, this.name);
};

Apps.prototype.processes = function() {
  return new (require('../core/processes'))(this.options, this.name);
};

Apps.prototype.tags = function() {
  return new (require('../core/tags'))(this.options, this.name);
};

Apps.prototype.urls = function() {
  return new (require('../core/urls'))(this.options, this.name);
};


Apps.prototype.mysql = function() {
  return new (require('../plugins/mysql'))(this.options, this.name);
};

Apps.prototype.redis = function() {
  return new (require('../plugins/redis'))(this.options, this.name);
};

Apps.prototype.mongo = function() {
  return new (require('../plugins/mongo'))(this.options, this.name);
};

module.exports = Apps;