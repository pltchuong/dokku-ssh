'use strict';

/**
Usage: dokku certs:COMMAND

Manage Dokku apps SSL (TLS) certs.

Additional commands:
    certs:add <app> CRT KEY             Add an ssl endpoint to an app. Can also import from a tarball on stdin
    certs:chain CRT [CRT ...]           [NOT IMPLEMENTED] Print the ordered and complete chain for the given certificate.
    certs:generate <app> DOMAIN         Generate a key and certificate signing request (and self-signed certificate)
    certs:info <app>                    Show certificate information for an ssl endpoint.
    certs:key <app> CRT KEY [KEY ...]   [NOT IMPLEMENTED] Print the correct key for the given certificate.
    certs:remove <app>                  Remove an SSL Endpoint from an app.
    certs:rollback <app>                [NOT IMPLEMENTED] Rollback an SSL Endpoint for an app.
    certs:update <app> CRT KEY          Update an SSL Endpoint on an app. Can also import from a tarball on stdin
**/

// TODO: HAVE NOT TESTED YET //
function Certificates(options, name) {
  this.options  = options;
  this.name     = name;

  this.ssh      = new (require('../utils/ssh'))(options.ssh);
}

Certificates.prototype.list = function() {
  return this.ssh.exec(`dokku certs:info "${this.name}"`);
};

Certificates.prototype.generate = function(domain) {
  return this.ssh.exec(`dokku certs:generate "${this.name}" "${domain || ''}"`);
};

Certificates.prototype.add = function(crt, key) {
  return this.ssh.exec(`dokku certs:add "${this.name}" "${crt || ''}" "${key || ''}"`);
};

Certificates.prototype.update = function(crt, key) {
  return this.ssh.exec(`dokku certs:update "${this.name}" "${crt || ''}" "${key || ''}"`);
};

Certificates.prototype.remove = function() {
  return this.ssh.exec(`dokku certs:remove "${this.name}"`);
};

module.exports = Certificates;