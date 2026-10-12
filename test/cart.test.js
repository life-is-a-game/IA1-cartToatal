import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

const standardOptions = {
  vatRate: 0.08,
  freeShipFrom: 500000,
  shipFee: 30000,
}

test('an empty cart returns zero', () => {
  assert.equal(cartTotal([], standardOptions), 0)
})

test('shipping is free when subtotal equals the free-shipping threshold', () => {
  const items = [{ name: 'Threshold item', price: 500000, qty: 1 }]

  assert.equal(cartTotal(items, standardOptions), 540000)
})

test('a negative price throws RangeError', () => {
  const items = [{ name: 'Negative price item', price: -1, qty: 1 }]

  assert.throws(() => cartTotal(items, standardOptions), RangeError)
})

test('a zero quantity throws RangeError', () => {
  const items = [{ name: 'Zero quantity item', price: 100000, qty: 0 }]

  assert.throws(() => cartTotal(items, standardOptions), RangeError)
})

test('a negative quantity throws RangeError', () => {
  const items = [{ name: 'Negative quantity item', price: 100000, qty: -1 }]

  assert.throws(() => cartTotal(items, standardOptions), RangeError)
})

test('a fractional quantity throws RangeError', () => {
  const items = [{ name: 'Fractional quantity item', price: 100000, qty: 1.5 }]

  assert.throws(() => cartTotal(items, standardOptions), RangeError)
})
