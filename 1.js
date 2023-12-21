/* Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение. */

function getObjectKeys(object) {
    for (let key in object) {
        console.log(key);
    }
}

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
};

getObjectKeys(person);