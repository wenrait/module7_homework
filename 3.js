/* Написать функцию, которая создает пустой объект, но без прототипа. */

function createNullObject() {
    const nullObject = Object.create(null);
    console.log(nullObject);
    return nullObject
}

createNullObject();