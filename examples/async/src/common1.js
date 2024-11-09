export function common1() {
  console.log('common1');
}

import('./asyncCommon1').then(({ asyncCommon1 }) => {
  asyncCommon1();
});
