# Project rules

## Stack

- Node.js 22 or newer
- Plain JavaScript with ES modules
- Node's built-in `node:test` test runner
- No third-party dependencies

## Commands

- `npm test` runs the specification tests.
- `npm run lint` checks JavaScript syntax and the project formatting rules.
- `npm run check` is the required local quality gate; it runs lint and tests.

## Working agreement

- Keep the production implementation in `src/cart.js`.
- Keep specification-focused tests in `test/cart.test.js`; each test should prove one behaviour.
- Run `npm run check` before pushing changes.

## Never

- Never add dependencies for this exercise.
- Never return `toFixed()` directly from `cartTotal`, because it produces a string.
- Never weaken or delete a test merely to make the quality gate pass.
