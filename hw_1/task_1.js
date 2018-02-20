'use strict';

// React-JS-14
// homework-1
// task-1
// task-2

console.log('----task-1------------------')
// task-1
/* Написать функцию loop, которая будет принимать параметры:
  times (значение по умолчанию = 0), callback (значение по умолчанию = null)
  и будет в цикле (times раз), вызывать функцию callback. Если функцию не передана,
  то цикл не должен отрабатывать ни разу. Покажите применение этой функции
*/

const myCallback = () => console.log('myCallback is called')

const loop = (callback = null, times = 0 ) => {
  if (!callback || typeof callback !== 'function') {
    console.log('no Callback')
    return
  }

  if (times === 0) console.log('times default value')

  for (let i = 0; i < times; i++) {
    callback()
  }
}

loop(myCallback, 2) // 2x - myCallback is called
loop(1) // no Callback
loop(myCallback) // times default value
