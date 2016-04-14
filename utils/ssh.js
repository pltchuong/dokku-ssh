'use strict';

var co  = require('co'),
    ssh = require('co-ssh')
;

module.exports = SSH;

function SSH(options) {
  this.options = options;
  this.ssh = ssh(this.options);
}

SSH.prototype.exec = co.wrap(function* (cmd) {

  console.log('DEBUG ' + cmd);

  yield this.ssh.connect();
  try {
    var response = yield this.ssh.exec(cmd)
    return response.trim();
  } catch(error) {
    throw new Error(error.trim());
  }
});