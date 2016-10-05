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

"use strict"



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

}

class PeanutButter extends Cookies{
  constructor(name, status, contain_sugar) {
    super(name,status, contain_sugar)
    this._name = "PeanutButter Cookies"
    this.peanut_count = 100
    this.contain_sugar = 30
  }

}
class ChocholateChip extends Cookies{
  constructor(name, status, contain_sugar) {
    super(name, status, contain_sugar)
    this._name = "ChocholateChip Cookies"
    this.choc_chip_count = 200
    this.contain_sugar = 20
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
        let lol = new PeanutButter()
        this.list_cookies.push(lol)
        // console.log(this._list_cookies);
      }else if(arr[i] === "chocolate"){
        // this._list_cookies.push(new ChocholateChip)
        let lul = new ChocholateChip()
        this.list_cookies.push(lul)
      }
    }
  }

  static inspect(){
    return this.list_cookies
  }
}

// var coco = new Cookies()
// console.log(coco.getNamaFromTxt());

// var peanut = new PeanutButter()
// console.log(peanut.getNamaFromTxt());

// CookieFactory.create(coco.getNamaFromTxt())
// console.log(CookieFactory.inspect())
var data_cookies = ["peanut", "chocolate", "peanut"]
CookieFactory.createAllCookies(data_cookies)
console.log(CookieFactory.inspect())
// console.log(CookieFactory.this._list_cookies);
