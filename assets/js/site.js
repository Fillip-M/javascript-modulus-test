import saveData from './modules/localStoreg.js';
import { loadData } from './modules/localStoreg.js';
mainmoduleinit();

function mainmoduleinit() {
  console.log('main module start');

  let myData = { name: 'pablo', age: 44, city: 'Málaga', country: 'Spain' };
  saveData(myData);
}
