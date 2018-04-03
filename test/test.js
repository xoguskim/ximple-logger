var xlogger = require('../ximple-logger')('x-logger');


var dbg = {
  name: 'debug',
  value: 'debug is debug'
}

xlogger.info('Info is info');
xlogger.info('Info is %s !!!', 'info');
xlogger.error('error is error');
xlogger.debug(dbg);


