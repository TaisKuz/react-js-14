'use strict';

// React-JS-14
// homework-1
// task-3

console.log('----task-3------------------');
// task-3
/*
  Необходимо написать иерархию классов вида:
    Human -> Employee -> Developer
    Human -> Employee -> Manager

  Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков),
  а также методы по удалению/добавлению разработчиков.

  Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера
  (имеется ввиду возможность назначить другого менеджера).

  У класса Human должны быть следующие параметры: name (строка), age (число), dateOfBirth (строка или дата)

  У класса Employee должны присутствовать параметры: salary (число), department (строка)

  В классе Human должен присутствовать метод displayInfo,
  который возвращает строку со всеми параметрами экземпляра Human.

  В классе Employee должен быть реализовать такой же метод (displayInfo),
  который вызывает базовый метод и дополняет его параметрами из экземпляра Employee

  Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo класса Employee написать:
  super.displayInfo(), это вызовет метод disaplyInfo класс Human и вернет строку с параметрами Human'a.
*/

class Human{
  constructor(name, age, dateOfBirth) {
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
  }

  displayInfo() {
    const info = `name: ${this.name} age: ${this.age} dateOfBirth: ${this.dateOfBirth}`;
    return info;
  }
};

class Employee extends Human {
  constructor(name, age, dateOfBirth, salary, department){
    super(name, age, dateOfBirth);
    this.salary = salary;
    this.department = department;
  }

  displayInfo() {
    const info = `${super.displayInfo()} salary: ${this.salary} department: ${this.department}`;
    return info;
  }
};

class Manager extends Employee {
  constructor(name, age, dateOfBirth, salary, department) {
    super(name, age, dateOfBirth, salary, department);
    this._developers = [];
  }

  set developers(developers) {
    if (!developers || developers.length === 0) return;
    let developersList = [];

    developers.forEach(newDeveloper => {
      if (this._developers.length > 0) {
        this._developers.forEach(oldDeveloper => {
          if (!(newDeveloper instanceof Developer)) return;
          if (newDeveloper !== oldDeveloper) {
            developersList.push(newDeveloper);
          }
        });
      } else {
        developersList.push(newDeveloper);
      }
    });
    this._developers = developersList;
    console.log(`${this.name} developers:`, this._developers);
  };

  removeDevelopers(developers) {
    if (!developers || developers.length === 0 || this._developers.length === 0) return;

    let developersList = this._developers;

    developers.forEach(developerToRemove => {
      if (this._developers.length > 0) {
        this._developers.forEach((oldDeveloper, index) => {
          if (developerToRemove === oldDeveloper) {
            developersList.splice(index, 1);
            console.log(`developer ${developerToRemove.name} was deleted`);
          }
        });
      }
    });
    this._developers = developersList;
  };
}

class Developer extends Employee {
  constructor(name, age, dateOfBirth, salary, department) {
    super(name, age, dateOfBirth, salary, department);
    this._manager = '';
  }

  set manager(manager) {
    if (!manager) return;

    if (!(manager instanceof Manager)){
      console.log(`try to add manager to developer: ${manager.name} is not a manager`);

      return;
    }

    this._manager = manager;
    console.log(`manager ${manager.name} is added`);
  };

  displayInfo() {
    super.displayInfo();
  };
};

const dateOfBirthVasya = new Date(2018, 10, 20);
const vasya = new Human('Vasya', 12, dateOfBirthVasya);
console.log(vasya.displayInfo());

const dateOfBirthEga = new Date(2013, 10, 21);
const developerEga = new Developer('Ega', 16, dateOfBirthEga, 30, 'IT');

const dateOfBirthPetya = new Date(2018, 10, 21);
const developerPetya = new Developer('Petya', 14, dateOfBirthPetya, 50, 'IT');

const dateOfBirthVitya = new Date(2018, 10, 25);
const developerVitya = new Developer('Vitya', 14, dateOfBirthVitya, 40, 'WEB');

const dateOfBirthElena = new Date(2015, 9, 28);
const developerElena = new Developer('Elena', 20, dateOfBirthElena, 20, 'WEB');

const dateOfBirthOlga = new Date(2017, 4, 5);
const managerOlga = new Manager('Olga', 18, dateOfBirthOlga, 20, 'WEB');

const dateOfBirthSasha = new Date(2011, 7, 16);
const managerSasha = new Manager('Sasha', 20, dateOfBirthSasha, 30, 'IT');

managerOlga.developers = [developerElena, developerEga];
managerSasha.developers = [developerPetya, developerVitya];

managerSasha.removeDevelopers([developerPetya]);

developerPetya.manager = managerOlga;

developerPetya.manager = vasya;
