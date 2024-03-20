
export * as Consts from './barz.js'

const x = 1

export const foo = 12
if ( foo + 1 == 13 ) {
  console.log('foo is 12')
}

(() => {
  try {
      return 1; // 1 is returned but suspended until finally block ends
  } catch(err) {
      return 2;
  } finally {
      return 3; // 3 is returned before 1, which we did not expect
  }
})();

