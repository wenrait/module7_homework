/* Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

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
*/

let totalPower = 0;

function ElectricalAppliance(name, model, power) {
    this.name = name;
    this.model = model;
    this.power = power;
    this.isTurnedOn = false;
}
ElectricalAppliance.prototype.switch = function() {
    if (this.isTurnedOn === false) {
        this.isTurnedOn = true;
        totalPower += this.power;
        console.log(`${this.name} модели ${this.model} подключён к электросети! Общая мощность: ${totalPower} Ватт`);
    } else if (this.isTurnedOn === true) {
        this.isTurnedOn = false;
        totalPower -= this.power;
        console.log(`${this.name} модели ${this.model} отключён от электросети! Общая мощность: ${totalPower} Ватт`);
    }    
}

function LeisureDevice(name, model, power) {
    ElectricalAppliance.call(this, name, model, power);
}
LeisureDevice.prototype = Object.create(ElectricalAppliance.prototype);

function DomesticDevice(name, model, power) {
    ElectricalAppliance.call(this, name, model, power);
}
DomesticDevice.prototype = Object.create(ElectricalAppliance.prototype);

function Computer(name, model, power, processor, videocard, system) {
    LeisureDevice.call(this, name, model, power, processor, videocard, system);
    this.processor = processor;
    this.videocard = videocard;
    this.system = system;
}
Computer.prototype = Object.create(LeisureDevice.prototype);
Computer.prototype.surfTheNet = function() {
    if (this.isTurnedOn) {
         console.log(`Теперь Вы сидите в интернете на компьютере ${this.model}.`)
    } else {
        console.log(`Вы забыли включить прибор в розетку!`);
    }
}

function TV(name, model, power, diagonal) {
    LeisureDevice.call(this, name, model, power, diagonal);
    this.diagonal = diagonal;
}
TV.prototype = Object.create(LeisureDevice.prototype);
TV.prototype.watchMovie = function() {
    if (this.isTurnedOn) {
        console.log(`Теперь Вы смотрите фильм на телевизоре ${this.model}.`)
    } else {
       console.log(`Вы забыли включить прибор в розетку!`);
    }
}

function GameConsole(name, model, power, color) {
    LeisureDevice.call(this, name, model, power, color);
    this.color = color;
}
GameConsole.prototype = Object.create(LeisureDevice.prototype);
GameConsole.prototype.playGame = function() {
    if (this.isTurnedOn) {
        console.log(`Теперь Вы играете в приставку ${this.model}.`)
    } else {
       console.log(`Вы забыли включить прибор в розетку!`);
    }
}

function Fridge(name, model, power, height) {
    DomesticDevice.call(this, name, model, power, height);
    this.height = height;
}
Fridge.prototype = Object.create(DomesticDevice.prototype);
Fridge.prototype.takeFood = function() {
    console.log(`Вы взяли еду из холодильника ${this.model}.`)
}

function Plate(name, model, power, burners) {
    DomesticDevice.call(this, name, model, power, burners);
    this.burners = burners;
}
Plate.prototype = Object.create(DomesticDevice.prototype);
Plate.prototype.cook = function() {
    if (this.isTurnedOn) {
        console.log(`Вы начали готовить еду на плите ${this.model}.`)
    } else {
       console.log(`Вы забыли включить прибор в розетку!`);
    }
}

const pc = new Computer('Компьютер', 'SILK-1', 500, 'AMD Ryzen 2700X', 'GeForce 1660 SUPER', 'Windows 10');
const notebook = new Computer('Ноутбук', 'SILK-2', 300, 'Intel Core i5-3500K', 'GeForce GTX 750M', 'Windows 10');
const livingRoomTV = new TV('Телевизор в спальне', 'Sony Bravia KDL-1', 200, 24);
const kitchenTV = new TV('Телевизор на кухне', 'Sony Bravia KDL-2', 150, 16);
const gameConsole = new GameConsole('Игровая приставка', 'PlayStation 4', 550, 'чёрный');
const fridge = new Fridge('Холодильник', 'Hotpoint ARISTON', 400, 200);
const cooker = new Plate('Электроплита', 'Zanussi', 1000, 4);

pc.surfTheNet();
pc.switch();
pc.surfTheNet();

fridge.takeFood();
fridge.switch();

gameConsole.playGame();
gameConsole.switch();
gameConsole.playGame();

notebook.surfTheNet();
notebook.switch();
notebook.surfTheNet();

kitchenTV.watchMovie();
kitchenTV.switch();
kitchenTV.watchMovie();

livingRoomTV.watchMovie();
livingRoomTV.switch();
kitchenTV.watchMovie();

cooker.cook();
cooker.switch();
cooker.cook();

pc.switch();
notebook.switch();
gameConsole.switch();
kitchenTV.switch();
livingRoomTV.switch();
cooker.switch();
fridge.switch();