'use strict';

/**
Usage: dokku domains[:COMMAND]

Manage vhost domains used by the Dokku proxy.

Additional commands:
    domains:add <app> DOMAIN      Add a domain to app
    domains [<app>]               List domains
    domains:clear <app>           Clear all domains for app
    domains:disable <app>         Disable VHOST support
    domains:enable <app>          Enable VHOST support
    domains:remove <app> DOMAIN   Remove a domain from app
    domains:set-global <domain>   Set global domain name
**/

function Domains(options, name) {
  this.options  = options;
  this.name     = name;

  this.ssh      = new (require('../utils/ssh'))(options.ssh);
}

Domains.prototype.list = function() {
  return this.ssh.exec(`dokku domains "${this.name}"`);
};

Domains.prototype.add = function(domain) {
  return this.ssh.exec(`dokku domains:add "${this.name}" "${domain}"`);
};

Domains.prototype.remove = function(domain) {
  return this.ssh.exec(`dokku domains:remove "${this.name}" "${domain}"`);
};

Domains.prototype.disable = function() {
  return this.ssh.exec(`dokku domains:disable "${this.name}"`);
};

Domains.prototype.enable = function() {
  return this.ssh.exec(`dokku domains:enable "${this.name}"`);
};

Domains.prototype.clear = function() {
  return this.ssh.exec(`dokku domains:clear "${this.name}"`);
};

module.exports = Domains;