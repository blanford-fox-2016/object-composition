"use strict"
var fs = require('fs')

// var array = [];
//
// array.push("hallow wolrd hallo" + "\n")
//
// console.log(array);
//
// var board_string = fs.readFileSync('dataCookies.txt', 'utf-8').trim().toString().split("\n")
//
// console.log(board_string);
//
//
//
// var data = ["kue kuean\n", "kuye\n", "hallo\n", "apakabar\n"].join("")
//
// fs.writeFile('dataCookies.txt', data);

// class

class Ingredients {
  constructor(cookies_name){
    this.cookies_name = cookies_name
    this.ingredientsList = {}
  }

  searchIngredients(){
    // console.log(this.cookies_name);
    if(this.cookies_name === "PeanutButter Cookies"){
      // console.log("a");
      this.ingredientsList = {sugar: "100gr", flour: "50gr"}
      // console.log(this.ingredientsList);
    }else if(this.cookies_name === "ChocholateChip Cookies"){
      this.ingredientsList = {sugar: "150gr", flour: "75gr"}
    }
  }

  printIngredients(){
    return `Bumbu ${this.cookies_name} ada : ${this.ingredientsList.sugar} gula dan ${this.ingredientsList.flour} tepung`
  }
}

class Cookies{
  constructor(){
    this._name = []
    this._status = "mentah"
    this.contain_sugar = 0;
  }

  getNamaFromTxt(){
    return this._name = fs.readFileSync('dataCookies.txt', 'utf-8').trim().toString().split("\n")
  }

  addCookies(nama){
    this._name[this._name.length] = (nama)
  }

  searchIngredients(){
    if(this._name === "PeanutButter Cookies"){
      let ingredientPeanut = new Ingredients(this._name)
      ingredientPeanut.searchIngredients()
      console.log(ingredientPeanut.printIngredients())
      // console.log(Ingredients.printIngredients())
    }else if(this._name === "ChocholateChip Cookies"){
      let ingredientChoco = new Ingredients(this._name)
      ingredientChoco.searchIngredients()
      console.log(ingredientChoco.printIngredients())
    }
  }
}

class PeanutButter extends Cookies{
  constructor(name, status, contain_sugar) {
    super(name,status, contain_sugar)
    this._name = "PeanutButter Cookies"
    this.peanut_count = 100
    // this.contain_sugar = 30
  }

}

class ChocholateChip extends Cookies{
  constructor(name, status, contain_sugar) {
    super(name, status, contain_sugar)
    this._name = "ChocholateChip Cookies"
    this.choc_chip_count = 200
    // this.contain_sugar = 20
  }

}

class CookieFactory {
  constructor(){
    this.list_cookies = []
  }
  static createAllCookies(arr){
    this.list_cookies = [];
    for(let i = 0; i < arr.length; i++){
      // var this._name[i] = new Cookies()
      if(arr[i] === "peanut"){
        let peanut = new PeanutButter()
        peanut.searchIngredients()
        this.list_cookies.push(peanut)
        // console.log(this._list_cookies);
      }else if(arr[i] === "chocolate"){
        // this._list_cookies.push(new ChocholateChip)
        let choco = new ChocholateChip()
        choco.searchIngredients()
        this.list_cookies.push(choco)
      }
    }
  }

  static inspect(){
    return this.list_cookies
  }
}

// var coco = new Cookies()
// console.log(coco._status);

// var peanut = new PeanutButter()
// console.log(peanut.getNamaFromTxt());

// CookieFactory.create(coco.getNamaFromTxt())
// console.log(CookieFactory.inspect())
var data_cookies = ["peanut", "chocolate", "peanut"]
CookieFactory.createAllCookies(data_cookies)
// console.log(CookieFactory.inspect())
// console.log(CookieFactory.this._list_cookies);
