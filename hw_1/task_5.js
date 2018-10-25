'use strict';

// React-JS-14
// homework-1
// task-5*

console.log('----task-5 * ------------------');
// task-5*
/*
  Написать цикл, который создаёт массив промисов, внутри каждого промиса
  происходит обращение к ресурсу
  (https://jsonplaceholder.typicode.com/users/number),
  где вместо number подставляется число от 1 до 10,
  в итоге должно получиться 10 промисов. Следует дождаться выполнения
  загрузки всеми промисами и далее вывести массив загруженных данных.
*/

let AllMyPromises = [];

for (let i = 0; i < 10; i++) {
  const myPromise = new Promise((resolve, reject) => {
    const USERS_ENDPOINT = `https://jsonplaceholder.typicode.com/users/${i+1}`;

    fetch(USERS_ENDPOINT)
      .then(response => {

        return response.json();
      })
      .then(userData => {
        resolve(userData)
      })
      .catch(console.log.bind(console));
  });

  AllMyPromises.push(myPromise);
}

Promise.all(AllMyPromises).then(function (results) {
  console.log('AllMyPromises results:', results);
});
