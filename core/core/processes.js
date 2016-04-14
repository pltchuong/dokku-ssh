'use strict';

/**
Usage: dokku ps[:COMMAND]

List running processes in container, and restart app.

Additional commands:
    ps <app>                                           List processes running in app container(s)
    ps:rebuildall                                      Rebuild all apps
    ps:rebuild <app>                                   Rebuild an app
    ps:restartall                                      Restart all deployed app containers
    ps:restart <app>                                   Restart app container(s)
    ps:restore                                         Start previously running apps e.g. after reboot
    ps:scale [<app> <proc>=<count> [<proc>=<count>]]   Get/Set how many instances of a given process to run
    ps:start <app>                                     Start app container(s)
    ps:stop <app>                                      Stop app container(s)
**/

function Processes(options, name) {
  this.options  = options;
  this.name     = name;

  this.ssh      = new (require('../utils/ssh'))(options.ssh);
}

Processes.prototype.list = function() {
  return this.ssh.exec(`dokku ps "${this.name}"`);
};

Processes.prototype.start = function() {
  return this.ssh.exec(`dokku ps:start "${this.name}"`);
};

Processes.prototype.stop = function() {
  return this.ssh.exec(`dokku ps:stop "${this.name}"`);
};

Processes.prototype.restart = function() {
  return this.ssh.exec(`dokku ps:restart "${this.name}"`);
};

Processes.prototype.rebuild = function() {
  return this.ssh.exec(`dokku ps:rebuild "${this.name}"`);
};

Processes.prototype.scale = function(scale) {
  return this.ssh.exec(`dokku ps:scale "${this.name}" "${scale || ''}"`);
};


module.exports = Processes;