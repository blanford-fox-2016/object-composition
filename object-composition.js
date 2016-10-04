"use strict"
const fs = require('fs');
let cookieList = fs.readFileSync('cookies.txt').toString().split("\n");
let database = [];

class Cookies {
  constructor(args={}) {
    this.cookiesName = args['cookiesName'];
    this.ingridients = args['ingridients'];
    this.cookingTime = args['cookingTime'];
    this.cinnamon = args['cinnamon'] || 0;
    this.sugar = args['sugar'] || 0;
  }

  save_to_db() {
    database.push(this.constructor.name);
  }

  bake() {
    this.status = "sudah matang";
  }
}

class PeanutButter {
  constructor() {
    this.peanut_count = 100;
  }
}

class ChocoCips {
  constructor() {
    this.choco_cips_count = 200;
  }
}


class CookiesFactory {
  static create() {
    for (var i = 0; i < cookieList.length; i++) {
      database.push(cookieList[i]);
    }
    return database;
  }
}
let ChocoCookies = {
  cookiesName : 'Cookies',
  ingridients : ['Telur', 'Tepung', 'Choco cips'],
  cookingTime : 40;
}
let ButterCookies = {
  cookiesName : 'Cookies',
  ingridients : ['Telur', 'Tepung', 'Butter'],
  cookingTime : 40;
}

let choco_cookies = new Cookies(ChocoCookies);
console.log(choco_cookies);
choco_cookies.save_to_db();

console.log(CookiesFactory.create());
