
const foo2 = 'a'

switch (foo2) {
  case 'a':
    console.info(1)
    break
  case 'b':
    console.info(2)
    break
  default:
    throw new Error('test')
}

const bar2 = 1

const barz2 = 2
let foobar2 = 3
foobar2 += 1
console.info(bar2, barz2, foobar2)

