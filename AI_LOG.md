# AI-LOG.md

## 2026-10-12 - Understanding the `cartTotal` contract
Tool: Codex (ChatGPT coding assistant).
Asked for: Explain the README and the difference between `Error` and `RangeError` before implementing `cartTotal`.
Kept: the calculation order (subtotal, VAT, shipping), `Math.round()` for a numeric total, and `RangeError` for negative prices and invalid quantities.
Changed: I used the explanation as guidance rather than adding extra input validation that the specification does not request.
Rejected: returning `toFixed()` because it would return a string instead of the required number.
By hand: I entered and reviewed the implementation in `src/cart.js`; the assistant did not edit that file.

## 2026-10-12 - Specification tests for `cartTotal`
Tool: Codex (ChatGPT coding assistant).
Asked for: Add separate tests in `test/cart.test.js` for the cases required by the rubric.
Kept: independent tests for an empty cart, free shipping at the threshold, a negative price, and zero, negative, and fractional quantities.
Changed: I kept the starter worked-example test and used a shared `standardOptions` object only for test setup; every assertion still targets one behaviour.
Rejected: checking exact error-message text and testing unspecified option validation, because the contract only requires the `RangeError` type for the listed item cases.
By hand: I reviewed the expected totals and ran `npm test` to confirm the seven tests pass.

## 2026-10-12 - Project harness and CI
Tool: Codex (ChatGPT coding assistant).
Asked for: Add the files needed to satisfy the rubric's Harness requirement without external dependencies.
Kept: `AGENTS.md` for project rules, `scripts/lint.js` for dependency-free syntax/whitespace checks, `npm run check` as the local gate, and the GitHub Actions workflow.
Changed: I used a small Node-based lint script instead of installing ESLint or Prettier so the assignment remains dependency-free.
Rejected: adding third-party linting or formatting packages because the brief and repository require no dependencies.
By hand: I reviewed the rules and commands, and verified the local gate with `npm run check`.
