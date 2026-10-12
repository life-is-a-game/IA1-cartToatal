# Assignment brief - `cartTotal` with quality harness

## Scope

Complete the Session 2 `cartTotal` assignment using plain JavaScript and no
third-party dependencies.

Files that may be changed for this work:

- `src/cart.js`
- `test/cart.test.js`
- `AGENTS.md`
- `scripts/lint.js`
- `package.json`
- `.github/workflows/ci.yml`
- `AI_LOG.md`

Do not change the public API, add packages, or modify unrelated files.

## Function contract

Keep this named export and signature:

```js
export function cartTotal(items, options)
```

`items` is an array of `{ name, price, qty }` objects. `options` contains
`vatRate`, `freeShipFrom`, and `shipFee`.

- `subtotal` is the sum of `price * qty` for all items.
- VAT is `subtotal * vatRate`.
- Shipping is `0` when `subtotal >= freeShipFrom`; otherwise it is `shipFee`.
- Return `subtotal + VAT + shipping`, rounded to the whole dong, as a
  JavaScript `number`.
- An empty cart returns `0` without VAT or shipping.

Do not return `toFixed()` directly because it returns a string.

## Error cases

Throw `RangeError` when an item has:

- a negative `price`; or
- a `qty` that is zero, negative, or not an integer.

The error message is not part of the contract. Do not add validation rules
that the assignment does not require.

## Worked example

With two items priced `180000 x 2` and `45000 x 1`, VAT rate `0.08`, free
shipping threshold `500000`, and shipping fee `30000`, the function must
return the number `467400`.

## Tests and quality gate

Write independent, specification-focused tests for the worked example, an
empty cart, free shipping exactly at the threshold, a negative price, and
invalid quantities. Each test should fail for one behaviour only.

Provide a dependency-free harness that includes:

- a project rules file with stack, commands, and "never" rules;
- a lint command and a combined `npm run check` gate; and
- GitHub Actions CI that runs the gate on push and pull requests.

Run `npm run check` before considering the work complete.
