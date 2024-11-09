import { common1 } from './common1';
import { common2 } from './common2';
common1();
common2();
import('./asyncCommon2.js').then(({ asyncCommon2 }) => {
  asyncCommon2();
  console.log('done');
});
