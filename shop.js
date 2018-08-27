/*
Write program for calculating discount for clients:
Client has age, gender, information about previous buys (list of previous orders)


Application should calculate discounts:
1. For young (< 18) and for old clients (>70): -5%
2. For women: -3%
3. For order above 200$: -5%
4. If previously ordered more than 1000$ in total: -10%
*/

function Client (age, gender, orders) {
  this.age = age
  this.gender = gender
  this.orders = orders
}

Client.prototype.getDiscount = function getDiscount(orderCost) {
  var discount = 0
  if (this.age < 18 || this.age > 70) {
    discount += 5
  }
  if (this.gender === 'female') {
    discount += 3
  }
  if (orderCost >= 200) {
    discount += 5
  }
  if (this.orders.length > 0) {
    var ordersTotalCost = 0
    for(var i = 0; i < this.orders.length; i++) {
      ordersTotalCost += this.orders[i].cost
    }
    if (ordersTotalCost >= 1000) {
      discount += 10
    }
  }
  return discount
}

module.exports = {Client: Client}