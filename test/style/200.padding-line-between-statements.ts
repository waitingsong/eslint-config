
declare const foo1: string

switch (foo1) {
  case 'a':
    console.info(1)
    break
  case 'b':
    console.info(2)
    break
  default:
    throw new Error('test')
}

const bar1 = 1

const barz1 = 2
let foobar1 = 3
foobar1 += 1
console.info(bar1, barz1, foobar1)

