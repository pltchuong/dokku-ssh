'use strict';

module.exports = Dokku;

function Dokku(options) {
  this.options = options;
}

Dokku.prototype.apps = function(name) {
  return new (require('./core/apps'))(this.options, name);
};

Dokku.prototype.global = function(name) {
  return new (require('./core/global'))(this.options, name);
};