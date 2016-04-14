'use strict';

/**
Usage: dokku events:COMMAND [-t]

Interact with Dokku event logger.

Additional commands:
    events:list   List logged events
    events:off    Disable events logger
    events:on     Enable events logger
    events [-t]   Show the last events (-t follows)
**/

// TODO: HAVE NOT COMPLETED AND TESTED //
function Events(options, name) {
  this.options  = options;
  this.name     = name || '';

  this.ssh      = new (require('../utils/ssh'))(options.ssh);
}

module.exports = Events;