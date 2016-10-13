// Definining Class
// var fs = require('fs');



class Ingredient {
  constructor(nama, amount) {
    // this.name = options['name']
    // this.amount = options['amount']
    this.nama = nama
    this.amount = amount
  }
}



class Factory {
  constructor(flavour, user_time, bulk) {
    this.container = [];
    this.flavour = flavour;
    this.user_time = user_time;
    this.bulk = bulk;
    this.ingredients = []
  }

  produceCake() {
    for (var i = 0; i < this.bulk; i++) {
      var temp = new Bake(this.flavour, this.user_time);
      this.container.push(temp.kue)
      console.log(this.container);
    }
  }

  listCake() {
    // this.produceCake();
    // return `${this.ingredients}`
    // console.log(this.container);
    // return this.container
    // return (`The cake flavour is ${this.container._flavour} ,`);
    // return this.container._flavour
  }
}

class Cake {
  constructor(flavour, ingredients) {
    this._flavour = flavour;
    this.ingredients = ingredients
    // console.log(this.ingredients);
    // console.log(this.nama_ingredient);
  }


}

class Bake {
  constructor(flavour, user_time) {
    var kue = new Cake(flavour, new Ingredient("gula", 50));
    this._flavour = kue._flavour
    this._bake_time = 0;
    this._user_time = user_time || 0
    this.kue = kue
    // console.log(this.kue);

  }

  baking() {
    if (this._flavour === "coklat") {
      this._bake_time = 10;

    } else if (this._flavour === "keju") {
      this._bake_time = 20;

    } else {
      this._bake_time = 30;
    }
    return this._bake_time;
  }

  baking_result() {
    // this.baking();
    if (this._user_time < (this._bake_time / 2)) {
      return "Mentah";
    } else if (this._user_time < (this._bake_time)) {
      return "Hampir Matang";
    } else if (this._user_time === this._bake_time) {
      return "Matang";
    } else {
      return "Gosong";
    }
  }

  result() {
    this.baking()
    // return (`The cake flavour is ${this._flavour} ,the time needed to bake is ${this._bake_time} and your baking time is ${this._user_time}. Your cake is ${this.baking_result()} `);

    // return (`The cake flavour is ${this._flavour} ,`);
  }
}

// Defining Inheritance
class ChocolateCake extends Cake {
  constructor(flavour, ingredients) {
    super(flavour, ingredients)
  }
}

class CheeseCake extends Cake {
  constructor(flavour, ingredients) {
    super(flavour, ingredients)
  }
}

class PeanutCake extends Cake {
  constructor(flavour, ingredients) {
    super(flavour, ingredients)
  }
}
// Difining variable and assign it to the class

// check the result





// var testing = new Bake("coklat", 22);
// console.log(testing.baking_result());
// testing.result();
// var ing = new Ingredient("gula", 50)
// console.log(ing);
var createCake = new Factory("coklat", 12, 2);
createCake.produceCake()
