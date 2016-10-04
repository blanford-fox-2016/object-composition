// Definining Class
// var fs = require('fs');



// class Ingredient {
//   constructor(options) {
//     this.name = options['name']
//     this.amount = options['amount']
//     this.has_gluten = options['has_gluten']
//   }
// }



class Factory {
  constructor(flavour, user_time, bulk) {
    this.container = [];
    this.flavour = flavour;
    this.user_time = user_time;
    this.bulk = bulk;
  }

  produceCake() {
    for (var i = 0; i < this.bulk; i += 1) {
      var temp = new Bake(this.flavour, this.user_time);
      this.container.push(temp.result())
    }
  }

  listCake() {
    this.produceCake();
    console.log(this.container);
  }
}

class Cake {
  constructor(flavour, ingredients) {
    this._flavour = flavour;
    this.ingredients = ingredients;
  }
}

class Bake {
  constructor(flavour, user_time) {
    var kue = new Cake(flavour);
    this._flavour = kue._flavour
    this._bake_time = 0;
    this._user_time = user_time || 0
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
    return (`The cake flavour is ${this._flavour} ,the time needed to bake is ${this._bake_time} and your baking time is ${this._user_time}. Your cake is ${this.baking_result()} `);
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





var testing = new Bake("coklat", 22);
// console.log(testing.baking_result());
testing.result();

var hayo = new Factory("coklat", 12, 10);
console.log(hayo.listCake());

// class Factory() {
//
// }
