Задание 1.

Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение.

Задание 2.

Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.

Задание 3.

Написать функцию, которая создает пустой объект, но без прототипа.

Задание 4.

Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 

Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:

1) Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
2) Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
3) У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
4) Создайте экземпляры каждого прибора.
5) Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)

Общие требования:

1) Имена функций, свойств и методов должны быть информативными
2) Соблюдайте best practices:
    2.1) использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
    2.2) информативные имена (а не a, b);
    2.3) четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр — конкретную реализацию);
    2.4) использование синтаксиса es6 (кроме функции-конструкторов) и так далее.

Задание 5. 

Переписать консольное приложение из предыдущего юнита на классы.

Общие требования:

    1) Имена классов, свойств и методов должны быть информативными;
    2) Соблюдать best practices;
    3) Использовать синтаксис ES6. 
