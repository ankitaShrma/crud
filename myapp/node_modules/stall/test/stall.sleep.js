var stall   = require('..')
var should  = require('should')

describe('stall.sleep', function() {

  var sleep = stall(function (timeout, done) {
    setTimeout(done, timeout)
  })

  it('should be able to produce a sleep function', function(done){

    var start = Date.now()

    sleep(2000)

    var diff = Date.now() - start

    diff.should.be.within(1990,2015)

    done()

  })

})
