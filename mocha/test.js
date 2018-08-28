var {Client} = require('../shop.js');
var assert = require('assert');

describe('clientDiscount', function () {
  it('should-count-all-discount-combo', function () {
    var client = new Client(16, 'female', [{cost: 25}, {cost: 1005}, {cost: 875}])
    assert.equal(client.getDiscount(234), 23)
  })
  it('should-count-no-discount', function () {
    var client = new Client(26, 'male', [{cost: 25}, {cost: 15}, {cost: 85}])
    assert.equal(client.getDiscount(100), 0)
  })
  it('should-discount-young', function () {
    var client = new Client(16, 'male', [{cost: 25}, {cost: 15}, {cost: 85}])
    assert.equal(client.getDiscount(10), 5)
  })
  it('should-discount-old', function () {
    var client = new Client(86, 'male', [{cost: 25}, {cost: 15}, {cost: 85}])
    assert.equal(client.getDiscount(10), 5)
  })
  it('should-discount-female', function () {
    var client = new Client(56, 'female', [{cost: 25}, {cost: 15}, {cost: 85}])
    assert.equal(client.getDiscount(10), 3)
  })
  it('should-discount-above-200', function () {
    var client = new Client(36, 'male', [{cost: 25}, {cost: 15}, {cost: 85}])
    assert.equal(client.getDiscount(210), 5)
  })
  it('should-discount-all-orders-above-1000', function () {
    var client = new Client(36, 'male', [{cost: 2545}, {cost: 15}, {cost: 85}])
    assert.equal(client.getDiscount(29), 10)
  })
})