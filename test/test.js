'use strict';

var declared = require('..');

var should = require('should')
  , thus = require('thus');


it('should return the first argument that is "!= undefined"', function () {
  should(declared(undefined, 1, 'foo')).be.equal(1);
  thus({}, function (obj) {
    should(declared(null, obj)).be.equal(obj);
  });
  should(declared(false)).be.equal(false);
});


it('should return `undefined` if all arguments are null', function () {
  should(declared()).be.equal(undefined);
  should(declared(null)).be.equal(undefined);
  should(declared(undefined)).be.equal(undefined);
  should(declared(null, undefined)).be.equal(undefined);
  should(declared(false)).not.be.equal(undefined);
  should(declared(null, false, undefined)).not.be.equal(undefined);
});
