
const arr = [1, 2, 3, 4]

arr.map(x => x * 2).map(x => x * 2)
  .map(x => x * 2)

function foo() {
  if (arr.length === 3) { return }
  return 'foo'
}

