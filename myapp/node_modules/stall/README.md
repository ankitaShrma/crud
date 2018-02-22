# stall
pause the `node`/`iojs` async runloop until you call a `done()` callback.

# description
similar to yield, stall pauses the node/iojs default runloop. it will block everything else in its surrounding context until its completion flag is set: calling done() resumes contextual program flow back to normal asyc

# install

```bash
$ npm install stall
```

# use
```js
var stall = require('stall')

//template for a sleep function
var sleep = stall( function (timeout, done) {

  //just make sure to call done() to yield back the event loop  
  setTimeout(done, timeout)
})

console.log('this is a point in time... point A')

sleep(4000)

console.log('point A happened four seconds ago')

```

# test
```bash
$ make clean && make && make check
```
