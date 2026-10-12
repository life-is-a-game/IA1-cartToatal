import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'

const files = ['src/cart.js', 'test/cart.test.js']
const failures = []

for (const file of files) {
  const source = readFileSync(file, 'utf8')

  if (/\t/.test(source)) {
    failures.push(`${file}: use spaces instead of tab characters`)
  }

  if (/[ \t]+$/m.test(source)) {
    failures.push(`${file}: remove trailing whitespace`)
  }

  try {
    execFileSync(process.execPath, ['--check', file], { stdio: 'pipe' })
  } catch {
    failures.push(`${file}: JavaScript syntax check failed`)
  }
}

if (failures.length > 0) {
  console.error('Lint failed:')
  for (const failure of failures) {
    console.error(`- ${failure}`)
  }
  process.exitCode = 1
} else {
  console.log(`Lint passed for ${files.length} files.`)
}
