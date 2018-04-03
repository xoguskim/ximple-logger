
/**

 *
 * Expose `ximpleLogger()` as the module.
 */

var debug = require('debug');

var DEBUG = 'debug';
var INFO = 'info';
var ERROR = 'error';


exports = module.exports = ximpleLogger;


/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function ximpleLogger(namespace) {

  debug.enable('debug:*,info:*,error:*');
  debug.colors[0,3,5];

  var _debug = debug('debug:'+namespace);
  var _info = debug('info:'+namespace);
  var _error = debug('error:'+namespace);

  _debug.color = 0;
  _info.color = 3;
  _error.color = 5;

  var fnDebug = function() {
    _debug.apply(null, arguments);
  }

  var fnInfo = function() {
    _info.apply(null, arguments);
  }

  var fnError = function() {
    _error.apply(null, arguments);
  }

  return {
    debug: fnDebug,
    info: fnInfo,
    error: fnError
  }
}
