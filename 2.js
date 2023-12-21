/* Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false. */

function checkProperty(object, string) {
    for (let key in object) {
        if (object[key] === string) {
            return true
        }
    }
    return false
}

const person = {
    fullName: 'John Doe',
    age: 40,
    city: 'New York',
    
};

let johnDoeString = 'John Doe';

let result = checkProperty(person, johnDoeString);

console.log(result);

