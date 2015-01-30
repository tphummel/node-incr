var test = require('tape')
var Increment = require('../')

test('default behavior', function(t){
  var inc = new Increment()

  t.equal(inc.next(), 1)
  t.equal(inc.next(), 2)
  t.equal(inc.next(), 3)

  t.end()
})

test('seed with start position', function(t){
  var inc = new Increment({start: 5})

  t.equal(inc.next(), 6)
  t.equal(inc.next(), 7)
  t.equal(inc.next(), 8)

  t.end()
})

test('reset', function(t){
  var inc = new Increment()

  t.equal(inc.next(), 1)
  t.equal(inc.next(), 2)
  t.equal(inc.next(), 3)

  t.ok(inc.reset(), 'reset returns true')
  t.notOk(inc.reset(), 'reset returns false')

  t.equal(inc.next(), 1)
  t.equal(inc.next(), 2)
  t.equal(inc.next(), 3)

  t.end()
})

test('base16', function(t){
  var inc = new Increment({start: 10, radix: 16})

  t.equal(inc.next(), 'b')
  t.equal(inc.next(), 'c')
  t.equal(inc.next(), 'd')

  t.end()
})

test('base36', function(t){
  var inc = new Increment({start: 25, radix: 36})

  t.equal(inc.next(), 'q')
  t.equal(inc.next(), 'r')
  t.equal(inc.next(), 's')

  t.end()
})
