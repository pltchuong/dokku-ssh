'use strict';

/**
Usage: dokku config[:COMMAND] (<app>|--global)

Manage global or app-specific config vars.

Additional commands:
    config (<app>|--global)                                     Display all global or app-specific config vars
    config:get (<app>|--global) KEY                             Display a global or app-specific config value
    config:set (<app>|--global) KEY1=VALUE1 [KEY2=VALUE2 ...]   Set one or more config vars
    config:unset (<app>|--global) KEY1 [KEY2 ...]               Unset one or more config vars
**/

function Configs(options, name) {
  this.options  = options;
  this.name     = name;

  this.ssh      = new (require('../utils/ssh'))(options.ssh);
}

Configs.prototype.list = function() {
  return this.ssh.exec(`dokku config "${this.name}"`);
};

Configs.prototype.get = function(config) {
  return this.ssh.exec(`dokku config:get "${this.name}" "${config || ''}"`);
};

Configs.prototype.set = function(configs) {
  return this.ssh.exec(`dokku config:set "${this.name}" "${configs || ''}"`);
};

Configs.prototype.unset = function(configs) {
  return this.ssh.exec(`dokku config:unset "${this.name}" "${configs || ''}"`);
};

module.exports = Configs;