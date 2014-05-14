# node-autoinc

[![Build Status](https://travis-ci.org/tphummel/node-incr.png)](https://travis-ci.org/tphummel/node-incr)

[![NPM](https://nodei.co/npm/incr.png?downloads=true)](https://nodei.co/npm/incr/)

[![testling badge](https://ci.testling.com/tphummel/node-incr.png)](https://ci.testling.com/tphummel/node-incr)

a counter that will return decimal integers starting at 1 by default. optionally start the counter at another number and/or use a different radix

# install

    npm install incr

# test

    npm test

# usage

    var Increment = require("incr");

    var inc = new Increment();
    console.log(inc.next()); // 1
    console.log(inc.next()); // 2
    console.log(inc.next()); // 3
    inc.reset();
    console.log(inc.next()); // 1

    var inc = new Increment({start: 10});
    console.log(inc.next()); // 11
    console.log(inc.next()); // 12
    console.log(inc.next()); // 13

    var inc = new Increment({radix: 36});
    console.log(inc.next()); // "1"
    console.log(inc.next()); // "2"
    console.log(inc.next()); // "3"

    var inc = new Increment({start: 20, radix: 36});
    console.log(inc.next()); // "l"
    console.log(inc.next()); // "m"
    console.log(inc.next()); // "n"
