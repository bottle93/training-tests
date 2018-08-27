var {Client} = require('../shop.js');

test("no-discount", function () {
  var client = new Client(27, 'male', [{cost: 35}, {cost: 45}, {cost: 235}])
  expect(client.getDiscount(20)).toBe(0)
})

test("check-young-discount", function () {
  var client = new Client(16, 'male', [{cost: 25}, {cost: 5}, {cost: 875}])
  expect(client.getDiscount(15)).toBe(5)
})

test("check-old-discount", function () {
  var client = new Client(77, 'male', [{cost: 335}, {cost: 15}, {cost: 235}])
  expect(client.getDiscount(20)).toBe(5)
})

test("check-young-female-discount", function () {
  var client = new Client(16, 'female', [{cost: 25}, {cost: 5}, {cost: 875}])
  expect(client.getDiscount(15)).toBe(8)
})


test("check-old-female-discount", function () {
  var client = new Client(77, 'female', [{cost: 335}, {cost: 15}, {cost: 235}])
  expect(client.getDiscount(20)).toBe(8)
})

test("check-female-discount", function () {
  var client = new Client(25, 'female', [{cost: 34},{cost: 15}])
  expect(client.getDiscount(55)).toBe(3)

})

test('check-order-above-200', function () {
  var client = new Client(55, 'male', [{cost: 254},{cost: 115}])
  expect(client.getDiscount(212)).toBe(5)
})

test('check-all-orders-total-cost', function () {
  var client = new Client(47, 'male', [{cost: 1335}, {cost: 15}, {cost: 235}])
  expect(client.getDiscount(14)).toBe(10)
})

test('check-all-discounts-combo', function () {
  var client = new Client(17, 'female', [{cost: 1565}, {cost: 29}, {cost: 345}])
  expect(client.getDiscount(214)).toBe(23)
})
