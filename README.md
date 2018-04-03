# ximple-logger

  tiny node.js logging utility modelled after node core's debugging technique.

## Installation

```bash
$ npm install ximple-logger
```

## Usage

 With `ximple-logger` use `debug` node.js library. This library does not support general purposes. my personal use.

 This library supports 3 logging functions.

    info(), debug() and error()


Example _app.js_:

```js
var xlogger = require('ximple-logger')('http')
  , http = require('http')
  , name = 'My App';

// fake app

xlogger.debug('booting %s', name);

try {
    http.createServer(function(req, res){
      xlogger.info(req.method + ' ' + req.url);
      res.end('hello\n');
    }).listen(3000, function(){
      xlogger.info('listening');
    });
} catch (ex) {
    xlogger.error(ex.message);
}

// fake worker of some kind

require('./worker');
```

Example _worker.js_:

```js
var xlogger = require('ximple-logger')('worker');

setInterval(function(){
  xlogger.debug('doing some work');
}, 1000);
```

## Authors

 - TaeHyun KIM

## License

(The MIT License)

Copyright (c) 2014 TaeHyun KIM &lt;xogus.kim@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
