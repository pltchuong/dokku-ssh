'use strict';

/**
Usage: dokku logs <app>
 display recent log output

 -n, --num NUM        # the number of lines to display
 -p, --ps PS          # only display logs from the given process
 -t, --tail           # continually stream logs
 -q, --quiet          # display raw logs without colors, time and names
**/

// TODO: HAVE NOT COMPLETED AND TESTED //
function Logs(options, name) {
  this.options  = options;
  this.name     = name || '';

  this.ssh      = new (require('../utils/ssh'))(options.ssh);
}

module.exports = Logs;