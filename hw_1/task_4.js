'use strict';

// React-JS-14
// homework-1
// task-4*

console.log('----task-4 * ------------------')
// task-4*
/*
  При помощи генератора написать функцию - анкету, которая запрашивает
  у пользователя на ввод параметры и передаёт их в генератор. В конце,
  когда генератор завершается, он должен вернуть все введённые входные
  параметры в виде объекта. Этот объект нужно вывести в консоли.
*/

function* questionnaire() {
  const firstName = prompt('add firstName:')
  yield firstName

  const lastName = prompt('add lastName:')
  yield lastName

  const age = prompt('add age:')
  yield age

  const fullQuestionnaire = {
    firstName,
    lastName,
    age
  }

  return fullQuestionnaire
}

const myQuestionnaire = questionnaire()

const myFirstName = myQuestionnaire.next()
const myLastName = myQuestionnaire.next()
const myAge = myQuestionnaire.next()
const allQuestionnaire = myQuestionnaire.next()
console.log('allQuestionnaire', allQuestionnaire)
