'use strict';

/**
Usage: dokku proxy[:COMMAND]

Control the proxy used by dokku, per app.

Additional commands:
    proxy <app>                    Show proxy for app
    proxy:disable <app>            Disable proxy for app
    proxy:enable <app>             Enable proxy for app
    proxy:set <app> <proxy_type>   NOT IMPLEMENTED YET!!
**/

// TODO: HAVE NOT COMPLETED AND TESTED //
function Proxy(options, name) {
  this.options  = options;
  this.name     = name || '';

  this.ssh      = new (require('../utils/ssh'))(options.ssh);
}

module.exports = Proxy;