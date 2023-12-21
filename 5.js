/* Переписать консольное приложение из предыдущего юнита на классы.

Общие требования:

    1) Имена классов, свойств и методов должны быть информативными;
    2) Соблюдать best practices;
    3) Использовать синтаксис ES6. 
*/

let totalPower = 0;

class ElectricalAppliance {
    constructor(name, model, power) {
        this.name = name;
        this.model = model;
        this.power = power;
        this.isTurnedOn = false;
    }
    switch() {
        this.isTurnedOn = this.isTurnedOn ? false : true;
        this.isTurnedOn ? totalPower += this.power : totalPower -= this.power;
        console.log(`${this.name} модели ${this.model} ${this.isTurnedOn ? 'подключён к' : 'отключён от'} электросети! Общая мощность: ${totalPower} Ватт`);
    }
}


class LeisureDevice extends ElectricalAppliance {
    constructor(name, model, power) {
        super(name, model, power);
    }
}

class DomesticDevice extends ElectricalAppliance {
    constructor(name, model, power) {
        super(name, model, power);
    }
}

class Computer extends LeisureDevice {
    constructor(name, model, power, processor, videocard, system) {
        super(name, model, power);
        this.processor = processor;
        this.videocard = videocard;
        this.system = system;
    }
    surfTheNet() {
        console.log(`${this.isTurnedOn? `Теперь Вы сидите в интернете на компьютере ${this.model}.` : `Вы забыли включить прибор в розетку!`}`); 
    }
}

class TV extends LeisureDevice {
    constructor(name, model, power, diagonal) {
        super(name, model, power);
        this.diagonal = diagonal;
    }   
    watchMovie() {
        console.log(`${this.isTurnedOn? `Теперь Вы смотрите фильм на телевизоре ${this.model}.` : `Вы забыли включить прибор в розетку!`}`); 
    }
}

class GameConsole extends LeisureDevice {
    constructor(name, model, power, color) {
        super(name, model, power);
        this.color = color;
    }   
    playGame() {
        console.log(`${this.isTurnedOn? `Теперь Вы играете в приставку ${this.model}.` : `Вы забыли включить прибор в розетку!`}`); 
        console.log(``)
    }
}

class Fridge extends DomesticDevice {
    constructor(name, model, power, height) {
        super(name, model, power);
        this.height = height;
    }   
    takeFood() {
        console.log(`Вы взяли еду из холодильника ${this.model}.`)
    }
}

class Plate extends DomesticDevice {
    constructor(name, model, power, burners) {
        super(name, model, power);
        this.burners = burners;
    }   
    cook() {
        console.log(`${this.isTurnedOn? `Вы начали готовить еду на плите ${this.model}.` : `Вы забыли включить прибор в розетку!`}`); 
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