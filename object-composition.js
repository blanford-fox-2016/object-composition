"use strict"
const fs = require('fs');
let cookieList = fs.readFileSync('cookies.txt').toString().trim().split("\n");
let database = [];

class Cookies {
  constructor(cookiesName, status, ingridients, cinnamon, sugar) {
    this.name = cookiesName;
    this.status = status|| "Mentah";
    this.cinnamon = cinnamon;
    this.sugar= sugar;
  }
}

class PeanutButter extends Cookies{
  constructor(cookiesName, status, ingridients, cinnamon, sugar) {
    super(cookiesName, status, ingridients, cinnamon, sugar);
  }
}

class ChocoCips extends Cookies{
  constructor(cookiesName, status, ingridients, cinnamon, sugar) {
    super(cookiesName, status, ingridients, cinnamon, sugar);
  }
}

class CheeseButter extends Cookies{
  constructor(cookiesName, status, ingridients, cinnamon, sugar) {
    super(cookiesName, status, ingridients, cinnamon, sugar);
  }
}

class Ingredients {
  constructor(cinnamon, sugar) {
    this.cinnamon = cinnamon;
    this.sugar = sugar;
  }
}

class CookiesFactory {
  static create() {
    for (var i = 0; i < cookieList.length; i++) {
      if (cookieList[i] == 'Peanut Butter Cookies') {
        var ings = new Ingredients(100, 50);
        var PeanutButterCookies = new PeanutButter({
          cookiesName: 'Peanut Butter Cookies',
          status: 'matang',
          cinnamon: ings.cinnamon,
          sugar: ings.sugar
        })
        database.push(PeanutButterCookies.name);
      } else if (cookieList[i] == 'Choco Cips Cookies') {
        var ings = new Ingredients(100, 100);
        var ChocoCookies = new ChocoCips({
          cookiesName: 'Choco Cips Cookies',
          status: 'matang',
          cinnamon: ings.cinnamon,
          sugar: ings.sugar
        })
        database.push(ChocoCookies.name);
        } else if (cookieList[i] == 'Cheese Butter Cookies') {
          var ings = new Ingredients(100, 0);
          var CheeseButterCookies = new CheeseButter({
            cookiesName: 'Cheese Butter Cookies',
            status: 'matang',
            cinnamon: ings.cinnamon,
            sugar: ings.sugar
          })
          database.push(CheeseButterCookies.name);
        }
       else {
        console.log(`Sayang sekali, kami belum punya resep ${cookieList[i]}`);
      }
    }
    return database;
  }

  static selasa() {
    console.log('Kue bebas gula untuk hari selasa : ');
    for (var i = 0; i < database.length; i++) {
      if (database[i].sugar == 0) {
        console.log(database[i].cookiesName);
      }
    }
  }
}
// console.log(ChocoCookies);
console.log(CookiesFactory.create());
CookiesFactory.selasa()
// console.log(cookieList);
